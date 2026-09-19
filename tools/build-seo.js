#!/usr/bin/env node
/* ==========================================================================
   build-seo.js - controleren, voorrenderen en de bouwbestanden bijwerken
   Draait de echte app-code (content, views, seo) in Node en schrijft:
     - index.html            (homepage: meta-tags, JSON-LD en voorgerenderde inhoud, plus de lijst contentscripts)
     - les/<slug>/, module/<slug>/, storingzoeker/, storingzoeker/<slug>/, kaarten/, naslag/
     - sitemap.xml, robots.txt, llms.txt, llms-full.txt, 404.html
     - service-worker.js     (lijst met bestanden en cacheversie)
   Zoekmachines krijgen zo echte HTML per URL. In de browser neemt app.js over.

   Gebruik:   node tools/build-seo.js                 controleren en bouwen
              node tools/build-seo.js --strikt        idem, maar onbevestigde feiten en waarschuwingen breken de build (voor publiceren)
              node tools/build-seo.js --out=<map> --base=/cursus-cv-ketels/   testbouw in een aparte map
   Opnieuw draaien na elke wijziging aan content/, js/views.js, js/seo.js of index.html.
   ========================================================================== */

var fs = require('fs');
var path = require('path');
var crypto = require('crypto');
var laadMod = require('./laad.js');
var check = require('./check.js');

var ROOT = path.resolve(__dirname, '..');
var args = {};
process.argv.slice(2).forEach(function (a) {
  var m = a.match(/^--([^=]+)(?:=(.*))?$/);
  if (m) args[m[1]] = m[2] === undefined ? true : m[2];
});

var ctx = laadMod.laadCursus(ROOT);
var CURSUS = ctx.CURSUS, Seo = ctx.Seo, Views = ctx.Views;
var SITE_CFG = CURSUS.site;

var SITE = args.site || SITE_CFG.origin;
var BASE = args.base || SITE_CFG.base;
var OUT = path.resolve(args.out || ROOT);
var DATUM = process.env.BUILD_DATE || new Date().toISOString().slice(0, 10);
var GOOGLE_VERIFICATIE = SITE_CFG.googleVerificatie || '';

/* ------------------------------ eerst controleren ------------------------------ */

var uitslag = check.controleer(ctx, ROOT, { strikt: !!args.strikt });
uitslag.waarschuwingen.forEach(function (w) { console.log('  waarschuwing: ' + w); });
uitslag.fouten.forEach(function (f) { console.log('  FOUT: ' + f); });
if (uitslag.fouten.length || (args.strikt && uitslag.waarschuwingen.length)) {
  console.log('\nBouw afgebroken: ' + uitslag.fouten.length + ' fouten' +
    (args.strikt ? ' en ' + uitslag.waarschuwingen.length + ' waarschuwingen (strikte modus)' : '') + '. Los ze op en draai opnieuw.');
  process.exit(1);
}

Seo.configureer({ path: true, base: BASE, origin: SITE });

/* ------------------------------------ hulp ------------------------------------ */

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* JSON in een script-tag: elke < wordt een unicode-escape, zodat een sluittag in de tekst nooit voortijdig sluit. */
function jsonVeilig(obj) {
  return JSON.stringify(obj).replace(/</g, String.fromCharCode(92) + 'u003c');
}

function schrijf(rel, inhoud) {
  var doel = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(doel), { recursive: true });
  fs.writeFileSync(doel, inhoud, 'utf8');
}

function headBlok(page, id, sub) {
  var m = Seo.meta(page, id);
  var r = [
    '<title>' + esc(m.title) + '</title>',
    '<meta name="description" content="' + esc(m.description) + '">',
    '<link rel="canonical" href="' + esc(m.canonical) + '">',
    '<meta name="robots" content="' + m.robots + '">',
    '<meta name="author" content="' + esc(SITE_CFG.auteur) + '">',
    '<meta property="og:locale" content="nl_NL">',
    '<meta property="og:site_name" content="' + esc(SITE_CFG.naam) + '">',
    '<meta property="og:type" content="' + m.ogType + '">',
    '<meta property="og:title" content="' + esc(m.title) + '">',
    '<meta property="og:description" content="' + esc(m.description) + '">',
    '<meta property="og:url" content="' + esc(m.canonical) + '">',
    '<meta property="og:image" content="' + esc(m.image) + '">',
    '<meta property="og:image:width" content="1200">',
    '<meta property="og:image:height" content="630">',
    '<meta property="og:image:alt" content="' + esc(SITE_CFG.h1) + '">',
    '<meta name="twitter:card" content="summary_large_image">',
    '<meta name="twitter:title" content="' + esc(m.title) + '">',
    '<meta name="twitter:description" content="' + esc(m.description) + '">',
    '<meta name="twitter:image" content="' + esc(m.image) + '">'
  ];
  if (page === 'dash' && GOOGLE_VERIFICATIE) r.push('<meta name="google-site-verification" content="' + GOOGLE_VERIFICATIE + '">');
  if (sub) r.push('<meta name="site-base" content="' + esc(BASE) + '">');
  r.push('<script type="application/ld+json" id="jsonld">' + jsonVeilig(m.jsonld) + '</script>');
  return r.join('\n');
}

function mainBlok(page, id) {
  if (page === 'module') return Views.modulePagina(id);
  if (page === 'les') return Views.lesPagina(id);
  if (page === 'casus') return Views.casusPagina(id);
  if (page === 'storingzoeker') return Views.storingzoekerPagina();
  if (page === 'kaarten') return Views.kaartenPagina();
  if (page === 'naslag') return Views.naslag();
  return Views.dashboard();
}

/* ---------------- lijst contentscripts in index.html en service worker ---------------- */

var CONTENT = laadMod.contentBestanden(ROOT);
var RE_CONTENT = /<!-- build:content:start -->[\s\S]*?<!-- build:content:end -->/;

function templateLezen() {
  var t = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  if (!RE_CONTENT.test(t)) throw new Error('markers build:content ontbreken in index.html');
  /* index.html is tegelijk template en resultaat: eerdere builds hebben de navigatielinks al naar paden omgezet.
     Zet ze eerst terug naar hash-routes, zodat elke build (ook met een andere basis) hetzelfde resultaat geeft. */
  t = t.replace(/<a class="brand" href="[^"]*"/, '<a class="brand" href="#/"')
    .replace(/<a href="[^"]*" data-route="dash"/, '<a href="#/" data-route="dash"')
    .replace(/<a href="[^"]*" data-route="(storingzoeker|kaarten|naslag)"/g, '<a href="#/$1" data-route="$1"');
  return t.replace(RE_CONTENT, function () {
    return '<!-- build:content:start -->\n' +
      CONTENT.map(function (f) { return '<script src="content/' + f + '"></script>'; }).join('\n') +
      '\n<!-- build:content:end -->';
  });
}

var TEMPLATE = templateLezen();
var RE_HEAD = /<!-- seo:head:start -->[\s\S]*?<!-- seo:head:end -->/;
var RE_FOOT = /<!-- seo:foot:start -->[\s\S]*?<!-- seo:foot:end -->/;
var RE_MAIN = /<!-- seo:main:start -->[\s\S]*?<!-- seo:main:end -->/;
if (!RE_HEAD.test(TEMPLATE) || !RE_MAIN.test(TEMPLATE) || !RE_FOOT.test(TEMPLATE)) throw new Error('markers ontbreken in index.html');

function pagina(page, id, sub) {
  var html = TEMPLATE
    .replace(RE_HEAD, function () { return '<!-- seo:head:start -->\n' + headBlok(page, id, sub) + '\n<!-- seo:head:end -->'; })
    .replace(RE_MAIN, function () { return '<!-- seo:main:start -->' + mainBlok(page, id) + '<!-- seo:main:end -->'; })
    .replace(RE_FOOT, function () { return '<!-- seo:foot:start -->' + Views.footer() + '<!-- seo:foot:end -->'; });
  /* Navigatielinks als echte paden: goed te crawlen. In file://-modus zet app.js ze om naar hash-routes. */
  html = html
    .replace(/<a class="brand" href="#\/"/, '<a class="brand" href="' + BASE + '"')
    .replace(/<a href="#\/" data-route="dash"/, '<a href="' + BASE + '" data-route="dash"')
    .replace(/<a href="#\/storingzoeker" data-route="storingzoeker"/, '<a href="' + BASE + 'storingzoeker/" data-route="storingzoeker"')
    .replace(/<a href="#\/kaarten" data-route="kaarten"/, '<a href="' + BASE + 'kaarten/" data-route="kaarten"')
    .replace(/<a href="#\/naslag" data-route="naslag"/, '<a href="' + BASE + 'naslag/" data-route="naslag"');
  if (sub) {
    /* Diepere pagina's: alle relatieve verwijzingen worden absoluut vanaf de site-basis. */
    html = html
      .replace(/(href|src)="(css|js|content|icons)\//g, function (_, a, d) { return a + '="' + BASE + d + '/'; })
      .replace(/href="manifest\.json"/, 'href="' + BASE + 'manifest.json"');
  }
  return html;
}

/* -------------------------------------- bouwen -------------------------------------- */

['les', 'module', 'naslag', 'kaarten', 'storingzoeker'].forEach(function (d) {
  fs.rmSync(path.join(OUT, d), { recursive: true, force: true });
});

if (OUT !== ROOT) {
  /* Testmodus: kopieer de app naast de gegenereerde pagina's zodat de site draait. */
  ['css', 'js', 'content', 'icons'].forEach(function (d) {
    fs.cpSync(path.join(ROOT, d), path.join(OUT, d), { recursive: true });
  });
  ['manifest.json', 'og-image.png', 'service-worker.js'].forEach(function (f) {
    if (fs.existsSync(path.join(ROOT, f))) fs.copyFileSync(path.join(ROOT, f), path.join(OUT, f));
  });
}

schrijf('index.html', pagina('dash', null, false));
schrijf('naslag/index.html', pagina('naslag', null, true));
schrijf('kaarten/index.html', pagina('kaarten', null, true));
schrijf('storingzoeker/index.html', pagina('storingzoeker', null, true));

var urls = [Seo.absoluut('dash'), Seo.absoluut('storingzoeker'), Seo.absoluut('kaarten'), Seo.absoluut('naslag')].map(function (l) { return { loc: l }; });
var aantalPaginas = 4, aantalGeplandeModules = 0;

CURSUS.modules.forEach(function (m) {
  schrijf(Seo.rel('module', m.id) + 'index.html', pagina('module', m.id, true));
  aantalPaginas++;
  /* Modules zonder geschreven lessen krijgen wel een pagina (voor bezoekers) maar staan niet in de sitemap en zijn noindex. */
  if (CURSUS.moduleKlaar(m)) urls.push({ loc: Seo.absoluut('module', m.id) });
  else aantalGeplandeModules++;
});

var aantalLessen = 0;
CURSUS.alleLessen().forEach(function (x) {
  schrijf(Seo.rel('les', x.les.id) + 'index.html', pagina('les', x.les.id, true));
  urls.push({ loc: Seo.absoluut('les', x.les.id) });
  aantalLessen++; aantalPaginas++;
});

CURSUS.casussen.forEach(function (c) {
  schrijf(Seo.rel('casus', c.id) + 'index.html', pagina('casus', c.id, true));
  urls.push({ loc: Seo.absoluut('casus', c.id) });
  aantalPaginas++;
});

schrijf('sitemap.xml',
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map(function (u) {
    return '  <url><loc>' + esc(u.loc) + '</loc><lastmod>' + DATUM + '</lastmod></url>';
  }).join('\n') + '\n</urlset>\n');

/* robots.txt: iedereen welkom, ook de bekende AI-crawlers (bewust expliciet gemaakt). */
var AI_BOTS = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'Claude-SearchBot',
  'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'CCBot'];
schrijf('robots.txt',
  'User-agent: *\nAllow: /\n\n' +
  AI_BOTS.map(function (b) { return 'User-agent: ' + b + '\nAllow: /\n'; }).join('\n') +
  '\nSitemap: ' + SITE + BASE + 'sitemap.xml\n');

/* ------------------------- llms.txt en llms-full.txt ------------------------- */

var HOME = SITE + BASE;
var REPO = 'https://github.com/' + SITE_CFG.repo;
var A = CURSUS.aantallen();

/* Onze eigen opmaak (!!! callouts, ?? verdiepingen) omzetten naar gewone markdown. */
function platteMarkdown(tekst) {
  var uit = [], blok = null;
  String(tekst).split('\n').forEach(function (regel) {
    var k = regel.trim();
    var c = k.match(/^!!!\s*(gevaar|kern|info)\s*(.*)$/);
    var d = k.match(/^\?\?\s+(.*)$/);
    if (!blok && c) { blok = '!!!'; uit.push('> **' + (c[2] || (c[1] === 'gevaar' ? 'Let op' : 'Kernpunt')) + '**'); return; }
    if (!blok && d) { blok = '??'; uit.push('> **' + d[1] + '**'); return; }
    if (blok && k === blok) { blok = null; return; }
    if (blok) { uit.push(k === '' ? '>' : '> ' + regel); return; }
    /* koppen een niveau lager, zodat ze onder de leskop blijven vallen */
    uit.push(regel.replace(/^(#{2,3}) /, function (_, h) { return h + '# '; }));
  });
  return uit.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

var moduleLijst = CURSUS.modules.filter(CURSUS.moduleKlaar, CURSUS);

var lijstModules = moduleLijst.map(function (m) {
  return '## Module ' + m.nr + ': ' + m.titel + '\n\n' +
    CURSUS.lessenVan(m).map(function (l) {
      return '- [' + l.nr + ' ' + l.titel + '](' + Seo.absoluut('les', l.id) + '): ' + l.leerdoel;
    }).join('\n');
}).join('\n\n');

schrijf('llms.txt',
  '# ' + SITE_CFG.naam + '\n\n' +
  '> Gratis online cursus voor de cv-ketel monteur, in het Nederlands. Zelfstudie in ' + A.modules + ' modules en ' + A.lessen +
  ' lessen (ongeveer ' + A.uren + ' uur): de wet en het CO-stelsel, gas en verbranding, de werking van de HR-ketel, rookgasafvoer, meten, ' +
  'installeren, onderhoud en storingzoeken, met toetsvragen, flashcards en een storingzoeker als voorbereiding op het examen Vakmanschap CO.\n\n' +
  'Deze cursus is bedoeld voor aankomend cv-monteurs, zij-instromers en monteurs die zich voorbereiden op het theorie- en praktijkexamen. ' +
  'De inhoud is onderwijskundig en verwijst naar wet, certificatieschema\'s en fabrikantdocumentatie zonder die te vervangen. ' +
  'De cursus geeft geen diploma en geen Bewijs van Vakmanschap CO. Inhoud en broncode zijn vrij te gebruiken onder de GPLv3-licentie.\n\n' +
  '- Startpagina: ' + HOME + '\n' +
  '- Taal: Nederlands\n' +
  '- Auteur: ' + SITE_CFG.auteur + '\n\n' +
  lijstModules + '\n\n' +
  '## Oefenen en naslag\n\n' +
  '- [Storingzoeker](' + Seo.absoluut('storingzoeker') + '): praktijkcasussen om systematisch storingzoeken te oefenen\n' +
  CURSUS.casussen.map(function (c) { return '- [' + c.titel + '](' + Seo.absoluut('casus', c.id) + '): ' + c.klacht; }).join('\n') + (CURSUS.casussen.length ? '\n' : '') +
  '- [Flashcards](' + Seo.absoluut('kaarten') + '): herhaalschema voor begrippen, waarden en regels\n' +
  '- [Naslag cv-ketels](' + Seo.absoluut('naslag') + '): formules, waarden en spiekbriefjes\n\n' +
  '## Optioneel\n\n' +
  '- [Volledige cursustekst in een bestand](' + HOME + 'llms-full.txt): alle lessen als doorlopende markdown\n' +
  '- [Sitemap](' + HOME + 'sitemap.xml)\n' +
  '- [Broncode op GitHub](' + REPO + ')\n' +
  '- [' + SITE_CFG.zuster.naam + '](' + SITE_CFG.zuster.url + '): de zuster-cursus over elektrotechniek\n');

schrijf('llms-full.txt',
  '# ' + SITE_CFG.naam + ': volledige tekst\n\n' +
  '> Gratis online cursus voor de cv-ketel monteur in het Nederlands. Bron: ' + HOME + '\n' +
  '> Licentie: GPLv3. Deze cursus geeft geen erkend diploma en geen Bewijs van Vakmanschap CO.\n\n' +
  moduleLijst.map(function (m) {
    return '## Module ' + m.nr + ': ' + m.titel + '\n\n' +
      'URL: ' + Seo.absoluut('module', m.id) + '\n\n' +
      m.intro + '\n\n' + (m.inleiding || []).join('\n\n') + '\n\n' +
      '**Na deze module kun je:**\n\n' + m.leerdoelen.map(function (d) { return '- ' + d; }).join('\n') + '\n\n' +
      CURSUS.lessenVan(m).map(function (l) {
        return '### Les ' + l.nr + ': ' + l.titel + '\n\n' +
          'URL: ' + Seo.absoluut('les', l.id) + '\n\n' +
          '**Leerdoel:** ' + l.leerdoel + '\n\n' +
          platteMarkdown(l.tekst).replace(/^(#{3,4}) /gm, function (_, h) { return h + '# '; }) + '\n\n' +
          (l.checklist && l.checklist.length ? '**Controleer jezelf:**\n\n' + l.checklist.map(function (c) { return '- ' + c; }).join('\n') + '\n' : '');
      }).join('\n');
  }).join('\n') +
  '\n## Naslag cv-ketels\n\nURL: ' + Seo.absoluut('naslag') + '\n\n' +
  ctx.NASLAG.map(function (k) { return '### ' + k.titel + '\n\n' + k.inhoud.trim() + '\n'; }).join('\n'));

/* 404: nuttige pagina met links, bewust niet geindexeerd. */
schrijf('404.html',
  '<!doctype html>\n<html lang="nl" data-theme="werkplaats">\n<head>\n<meta charset="utf-8">\n' +
  '<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
  '<title>Pagina niet gevonden | ' + esc(SITE_CFG.naam) + '</title>\n' +
  '<meta name="robots" content="noindex">\n' +
  '<link rel="stylesheet" href="' + BASE + 'css/theme.css">\n' +
  '<link rel="icon" href="' + BASE + 'icons/favicon-32.png" sizes="32x32">\n</head>\n<body>\n' +
  '<main class="wrap"><div class="pagehead"><h1>Pagina niet gevonden</h1>' +
  '<p>Deze pagina bestaat niet (meer). Ga terug naar de gratis cursus cv-ketel monteur of bekijk de modules.</p></div>\n' +
  '<p><a class="btn" href="' + BASE + '">Naar de cursus</a> ' +
  '<a class="btn ghost" href="' + BASE + 'storingzoeker/">Storingzoeker</a> ' +
  '<a class="btn ghost" href="' + BASE + 'naslag/">Naslag</a></p>\n' +
  '<div class="modgrid" style="margin-top:24px">' +
  CURSUS.modules.map(function (m) {
    return '<a class="modcard" href="' + BASE + Seo.rel('module', m.id) + '"><h3>Module ' + m.nr + ': ' + esc(m.titel) + '</h3></a>';
  }).join('') +
  '</div></main>\n</body>\n</html>\n');

/* ------------------------- index.html en service worker bijwerken ------------------------- */

if (OUT === ROOT) {
  /* Alleen de lijst contentscripts in de template: de rest van index.html is al door pagina('dash') geschreven. */
  var shell = ['./', './index.html', './manifest.json', './css/theme.css']
    .concat(fs.readdirSync(path.join(ROOT, 'js')).filter(function (f) { return /\.js$/.test(f); }).sort().map(function (f) { return './js/' + f; }))
    .concat(CONTENT.map(function (f) { return './content/' + f; }))
    .concat(['./icons/icon-192.png', './icons/icon-512.png']);
  var hash = crypto.createHash('md5');
  shell.forEach(function (f) {
    var p = path.join(ROOT, f.replace(/^\.\//, ''));
    if (fs.statSync(p, { throwIfNoEntry: false }) && fs.statSync(p).isFile()) hash.update(fs.readFileSync(p));
  });
  var versie = hash.digest('hex').slice(0, 8);
  var swPad = path.join(ROOT, 'service-worker.js');
  var sw = fs.readFileSync(swPad, 'utf8');
  var reShell = /\/\* build:shell:start \*\/[\s\S]*?\/\* build:shell:end \*\//;
  var reNaam = /\/\* build:cache:start \*\/[\s\S]*?\/\* build:cache:end \*\//;
  if (!reShell.test(sw) || !reNaam.test(sw)) throw new Error('markers build:shell / build:cache ontbreken in service-worker.js');
  sw = sw.replace(reShell, function () {
    return '/* build:shell:start */\nvar APP_SHELL = [\n' + shell.map(function (f) { return "  '" + f + "'"; }).join(',\n') + '\n];\n/* build:shell:end */';
  }).replace(reNaam, function () {
    return "/* build:cache:start */\nvar CACHE_NAAM = '" + SITE_CFG.cacheNaam + '-' + versie + "';\n/* build:cache:end */";
  });
  fs.writeFileSync(swPad, sw, 'utf8');
}

console.log('\nKlaar: ' + aantalPaginas + ' pagina\'s (' + aantalLessen + ' lessen, ' + CURSUS.casussen.length + ' casussen' +
  (aantalGeplandeModules ? ', ' + aantalGeplandeModules + ' modules nog zonder lessen (noindex)' : '') +
  '), sitemap met ' + urls.length + ' URL\'s (' + SITE + BASE + ')');

/* Controle: is de donatiepagina bereikbaar? Alleen een melding, de instelling blijft handmatig
   (CURSUS.donatie.actief in content/index.js), zodat er nooit een dode knop online komt. */
(async function () {
  var url = CURSUS.donatie && CURSUS.donatie.url;
  if (!url) return;
  try {
    var r = await fetch(url, { method: 'HEAD', redirect: 'manual' });
    var live = r.status === 200;
    if (live && !CURSUS.donatie.actief) console.log('\n>>> De donatiepagina is LIVE (' + url + '). Zet CURSUS.donatie.actief op true in content/index.js en bouw opnieuw.');
    else if (!live && CURSUS.donatie.actief) console.log('\n>>> WAARSCHUWING: donatie staat aan, maar ' + url + ' geeft status ' + r.status + ' (nog niet live). Zet actief op false.');
    else console.log('Donatie: ' + (live ? 'live en aan' : 'pagina nog niet live, knoppen staan uit') + '.');
  } catch (e) {
    console.log('Donatie: kon ' + url + ' niet controleren (' + e.message + ').');
  }
})();
