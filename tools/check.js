#!/usr/bin/env node
/* ==========================================================================
   check.js - controleert de cursusinhoud op structuur, stijl en bronnen.
   Draait ook automatisch aan het begin van tools/build-seo.js.

   Gebruik:   node tools/check.js            fouten stoppen, waarschuwingen niet
              node tools/check.js --strikt   ook onbevestigde feiten en waarschuwingen tellen als fout (voor publiceren)

   Wat er wordt gecontroleerd
   - datamodel: ids, nummering, verplichte velden, lengtes
   - toetsvragen (2 tot 5 opties, precies een juist antwoord, uitleg aanwezig) en flashcards
   - storingzoeker-casussen (acties, essentiele controles, precies een juiste oorzaak)
   - schrijfstijl: geen em-dash, geen dubbele spaties, interne links wijzen ergens heen
   - markering [[verifieer]]: tekst waarvan het feit nog niet bevestigd is
   - bronnen: feit-id's in 'bronnen' bestaan in project/docs/feiten/ en zijn niet onzeker (C of X)
   - privacy: geen term uit project/prive/blocklist.txt in de publieke bestanden
   ========================================================================== */

var fs = require('fs');
var path = require('path');
var laadCursus = require('./laad.js').laadCursus;

var ROOT = path.resolve(__dirname, '..');

/* Alle feit-id's uit project/docs/feiten/*.md met hun zekerheid (A, B, C, X). Bestaat de map niet (publieke clone), dan wordt dit overgeslagen. */
function leesFeiten(root) {
  var dir = path.join(root, 'project', 'docs', 'feiten');
  if (!fs.existsSync(dir)) return null;
  var feiten = {};
  fs.readdirSync(dir).filter(function (f) { return /\.md$/.test(f); }).forEach(function (f) {
    fs.readFileSync(path.join(dir, f), 'utf8').split(/\r?\n/).forEach(function (regel) {
      if (regel.charAt(0) !== '|') return;
      var cel = regel.split('|').map(function (c) { return c.trim(); });
      /* | ID | Feit | Bron | Zekerheid | Opmerking | */
      if (/^[A-Z]{2,4}-\d{2,3}$/.test(cel[1])) feiten[cel[1]] = { zeker: (cel[4] || '').charAt(0), bestand: f };
    });
  });
  return feiten;
}

/* Alle strings in een object, met een pad erbij voor de foutmelding. */
function strings(obj, pad, uit) {
  if (typeof obj === 'string') uit.push({ pad: pad, tekst: obj });
  else if (Array.isArray(obj)) obj.forEach(function (v, i) { strings(v, pad + '[' + i + ']', uit); });
  else if (obj && typeof obj === 'object') Object.keys(obj).forEach(function (k) { if (k !== 'slug') strings(obj[k], pad + '.' + k, uit); });
  return uit;
}

function controleerVragen(vragen, pad, fout, waarschuw, min) {
  if (!Array.isArray(vragen) || vragen.length < min) { fout(pad + ': minstens ' + min + ' toetsvragen nodig (nu ' + (vragen ? vragen.length : 0) + ')'); return; }
  var verdeling = {};
  vragen.forEach(function (q, i) {
    var p = pad + ' vraag ' + (i + 1);
    if (!q.vraag || q.vraag.length < 12) fout(p + ': vraag ontbreekt of is te kort');
    if (!Array.isArray(q.opties) || q.opties.length < 2 || q.opties.length > 5) { fout(p + ': 2 tot 5 opties nodig'); return; }
    if (typeof q.goed !== 'number' || q.goed < 0 || q.goed >= q.opties.length || q.goed % 1) fout(p + ': "goed" moet het indexnummer (vanaf 0) van het juiste antwoord zijn');
    if (!q.uitleg || q.uitleg.length < 25) fout(p + ': uitleg ontbreekt (die is de kern van het leren)');
    var uniek = {};
    q.opties.forEach(function (o) { if (uniek[o]) fout(p + ': dubbele optie "' + o + '"'); uniek[o] = 1; });
    verdeling[q.goed] = (verdeling[q.goed] || 0) + 1;
  });
  /* Raadbaar patroon: het juiste antwoord is te vaak het langste. Toeval geeft ongeveer 25%. */
  var langste = 0;
  vragen.forEach(function (q) {
    if (!Array.isArray(q.opties) || typeof q.goed !== 'number') return;
    var lengtes = q.opties.map(function (o) { return o.length; });
    var max = Math.max.apply(null, lengtes);
    if (lengtes[q.goed] === max && lengtes.filter(function (l) { return l === max; }).length === 1) langste++;
  });
  if (vragen.length >= 5 && langste / vragen.length > 0.5) waarschuw(pad + ': het juiste antwoord is in ' + Math.round(langste / vragen.length * 100) + '% van de vragen het langste, maak de afleiders even lang en even concreet');
  /* Een vaste volgorde (A, B, C, D, A, ...) valt niet op in de verdeling, maar is net zo raadbaar. */
  if (vragen.length >= 5) {
    var stappen = 0, paren = 0;
    for (var v = 1; v < vragen.length; v++) {
      var vorige = vragen[v - 1], deze = vragen[v];
      if (typeof vorige.goed !== 'number' || typeof deze.goed !== 'number' || !Array.isArray(deze.opties)) continue;
      paren++;
      if ((deze.goed - vorige.goed + deze.opties.length) % deze.opties.length === 1) stappen++;
    }
    /* Toeval geeft ongeveer een op drie; pas vanaf vier opeenvolgende stappen en driekwart van de paren is het een patroon. */
    if (paren >= 4 && stappen >= 4 && stappen / paren >= 0.75) waarschuw(pad + ': het juiste antwoord schuift steeds een plek op (' + stappen + ' van ' + paren + ' keer), dat is even raadbaar als steeds dezelfde plek');
  }

  /* Ook de plek van het juiste antwoord mag geen patroon zijn. Vanaf 5 vragen, net als de lengtecontrole hierboven. */
  if (vragen.length >= 5) {
    Object.keys(verdeling).forEach(function (k) {
      if (verdeling[k] / vragen.length > 0.5) waarschuw(pad + ': ' + Math.round(verdeling[k] / vragen.length * 100) + '% van de goede antwoorden staat op plek ' + 'ABCDE'.charAt(k) + ', verdeel ze beter');
    });
  }
}

/* Vangnet tegen lekken van privé-informatie: project/prive/blocklist.txt (gitignored) bevat woorden of getallen die nooit in de
   publieke bestanden mogen staan (bedrijfsnamen, offertenummers, prijzen uit offertes). Elke regel is een term, hoofdletters maken niet uit.
   Alles buiten project/, .git, .dev en .claude wordt doorzocht, dus ook de gegenereerde pagina's. Bestaat de lijst niet, dan gebeurt er niets. */
function privacyControle(root) {
  var lijst = path.join(root, 'project', 'prive', 'blocklist.txt');
  if (!fs.existsSync(lijst)) return [];
  var termen = fs.readFileSync(lijst, 'utf8').split(/\r?\n/).map(function (t) { return t.trim(); })
    .filter(function (t) { return t && t.charAt(0) !== '#'; });
  if (!termen.length) return [];
  var fouten = [];
  var overslaan = { project: 1, '.git': 1, '.dev': 1, '.claude': 1, node_modules: 1, icons: 1 };
  var extensies = /\.(html|js|json|md|txt|xml|css|yml|yaml|svg|py)$/i;
  (function loop(map) {
    fs.readdirSync(map, { withFileTypes: true }).forEach(function (e) {
      var pad = path.join(map, e.name);
      if (e.isDirectory()) { if (!overslaan[e.name]) loop(pad); return; }
      if (!extensies.test(e.name)) return;
      var tekst = fs.readFileSync(pad, 'utf8').toLowerCase();
      termen.forEach(function (t) {
        if (tekst.indexOf(t.toLowerCase()) !== -1) fouten.push('Privé-term "' + t + '" gevonden in ' + path.relative(root, pad) + ' (staat op project/prive/blocklist.txt)');
      });
    });
  })(root);
  return fouten;
}

/* Meta-taal in een antwoordoptie ("volgens deze gedachte", "naar men aanneemt", "deze bewering"): dat zegt iets over de
   bewering in plaats van over de techniek, en het staat bijna altijd alleen in de foute antwoorden. Wie dat doorheeft,
   raadt het juiste antwoord zonder de stof te kennen. Een optie beschrijft gewoon een situatie of een handeling. */
var META = /volgens deze|deze gedachte|deze bewering|deze redenering|men aanneemt|deze aanname|zoals wel wordt gedacht/i;

function metaTaal(vragen, pad, waarschuw) {
  var raak = 0;
  vragen.forEach(function (q) {
    (q.opties || []).forEach(function (o) { if (META.test(String(o))) raak++; });
  });
  if (raak >= 3) waarschuw(pad + ': ' + raak + ' antwoordopties gebruiken meta-taal ("volgens deze gedachte", "naar men aanneemt"), schrijf ze als gewone bewering');
}

function controleer(ctx, root, opties) {
  opties = opties || {};
  var fouten = [], waarschuwingen = [];
  function fout(m) { fouten.push(m); }
  function waarschuw(m) { waarschuwingen.push(m); }

  var CURSUS = ctx.CURSUS, NASLAG = ctx.NASLAG || [];
  var feiten = leesFeiten(root);
  var lesIds = {}, geplandeLessen = {}, modIds = {}, kaartTotaal = 0, vraagTotaal = 0, markeringen = 0;

  /* ------------------------------ modules en lessen ------------------------------ */
  CURSUS.modules.forEach(function (m, mi) {
    var mp = 'Module ' + m.nr;
    if (modIds[m.id]) fout(mp + ': dubbel id ' + m.id);
    modIds[m.id] = true;
    if (!/^m\d{2}$/.test(m.id)) fout(mp + ': id moet mNN zijn, nu "' + m.id + '"');
    if (m.nr !== mi + 1) fout(mp + ': nummering loopt niet door (verwacht ' + (mi + 1) + ')');
    ['titel', 'intro', 'niveau', 'ondertitel'].forEach(function (v) { if (!m[v]) fout(mp + ': veld "' + v + '" ontbreekt'); });
    if (m.deel !== 1 && m.deel !== 2) fout(mp + ': deel moet 1 of 2 zijn');
    if (typeof m.studietijd !== 'number') fout(mp + ': studietijd (uren) ontbreekt');
    if (!Array.isArray(m.leerdoelen) || m.leerdoelen.length < 3) fout(mp + ': minstens 3 leerdoelen');
    if (m.intro && m.intro.length > 260) waarschuw(mp + ': intro is ' + m.intro.length + ' tekens, hou het onder 260 (wordt kaarttekst en meta)');
    if (!Array.isArray(m.lessen) || !m.lessen.length) { fout(mp + ': geen lessen'); return; }

    var alleKlaar = CURSUS.lessenVan(m).length === m.lessen.length;
    if (alleKlaar) controleerVragen(m.examen, mp + ' module-examen', fout, waarschuw, 10);
    /* Over de hele module kijken: dit patroon valt pas op over alle vragen samen. */
    var alleVragen = [];
    (m.lessen || []).forEach(function (l) { (l.quiz || []).forEach(function (q) { alleVragen.push(q); }); });
    (m.examen || []).forEach(function (q) { alleVragen.push(q); });
    if (alleVragen.length >= 10) metaTaal(alleVragen, mp, waarschuw);
    else if (m.examen && m.examen.length) controleerVragen(m.examen, mp + ' module-examen', fout, waarschuw, 1);
    vraagTotaal += (m.examen || []).length;

    m.lessen.forEach(function (l, li) {
      var lp = 'Les ' + l.nr;
      if (lesIds[l.id]) fout(lp + ': dubbel id ' + l.id);
      lesIds[l.id] = true;
      if (l.status === 'gepland') geplandeLessen[l.id] = true;
      if (l.id !== m.id + 'l' + ('0' + (li + 1)).slice(-2)) fout(lp + ': id moet ' + m.id + 'l' + ('0' + (li + 1)).slice(-2) + ' zijn, nu "' + l.id + '"');
      if (l.nr !== m.nr + '.' + (li + 1)) fout(lp + ': nr moet "' + m.nr + '.' + (li + 1) + '" zijn');
      if (!l.titel) fout(lp + ': titel ontbreekt');
      if (typeof l.duur !== 'number' || l.duur < 5) fout(lp + ': duur (minuten) ontbreekt');
      if (!l.leerdoel || l.leerdoel.length < 30) fout(lp + ': leerdoel ontbreekt of is te kort');
      if (l.leerdoel && l.leerdoel.length > 170) waarschuw(lp + ': leerdoel is ' + l.leerdoel.length + ' tekens, meta-omschrijving wordt afgekapt');
      if (l.status === 'gepland') return;

      if (!l.tekst || l.tekst.length < 1500) fout(lp + ': lestekst is te kort (' + (l.tekst ? l.tekst.length : 0) + ' tekens, minimaal 1500)');
      if (l.tekst && !/^\s*## /m.test(l.tekst)) fout(lp + ': lestekst heeft geen ## kop');
      if (l.tekst && !/^!!! kern/m.test(l.tekst)) waarschuw(lp + ': geen "!!! kern" blok, elke les heeft minstens een kernpunt');
      /* Een blok zonder sluitregel slokt de rest van de les op: de renderer leest door tot een losse "!!!". */
      if (l.tekst) {
        var open = (l.tekst.match(/^!!! \S/gm) || []).length;
        var dicht = (l.tekst.match(/^!!!\s*$/gm) || []).length;
        if (open !== dicht) fout(lp + ': ' + open + ' blokken geopend met "!!! " en ' + dicht + ' afgesloten met een losse "!!!"; zonder sluitregel verdwijnt de rest van de les in het blok');
      }
      if (!Array.isArray(l.checklist) || l.checklist.length < 3) fout(lp + ': minstens 3 checklistpunten');
      controleerVragen(l.quiz, lp, fout, waarschuw, 3);
      vraagTotaal += (l.quiz || []).length;
      if (!Array.isArray(l.kaarten) || l.kaarten.length < 3) waarschuw(lp + ': minstens 3 flashcards aanbevolen (nu ' + (l.kaarten ? l.kaarten.length : 0) + ')');
      (l.kaarten || []).forEach(function (k, i) {
        if (!k.voor || !k.achter) fout(lp + ' kaart ' + (i + 1) + ': voor en achter zijn verplicht');
        if (k.achter && k.achter.length > 240) waarschuw(lp + ' kaart ' + (i + 1) + ': antwoord is lang, een kaart hoort een feit te bevatten');
      });
      kaartTotaal += (l.kaarten || []).length;

      /* bronnen: feit-id's uit het register */
      if (feiten) {
        if (!Array.isArray(l.bronnen) || !l.bronnen.length) waarschuw(lp + ': geen bronnen (feit-id\'s) opgegeven');
        (l.bronnen || []).forEach(function (b) {
          if (!feiten[b]) fout(lp + ': bron "' + b + '" staat niet in project/docs/feiten/');
          else if (feiten[b].zeker === 'X') fout(lp + ': bron ' + b + ' is gemarkeerd X (onverifieerbaar of tegengesproken), gebruik hem niet');
          else if (feiten[b].zeker === 'C') waarschuw(lp + ': bron ' + b + ' heeft zekerheid C, formuleer voorzichtig of markeer met [[verifieer]]');
        });
      }
    });
  });

  /* ------------------------------ casussen ------------------------------ */
  var casusIds = {};
  CURSUS.casussen.forEach(function (c) {
    var cp = 'Casus ' + c.id;
    if (casusIds[c.id]) fout(cp + ': dubbel id');
    casusIds[c.id] = true;
    ['titel', 'klacht', 'niveau', 'oplossing'].forEach(function (v) { if (!c[v]) fout(cp + ': veld "' + v + '" ontbreekt'); });
    if (typeof c.duur !== 'number') fout(cp + ': duur ontbreekt');
    if (c.les && !lesIds[c.les]) fout(cp + ': les "' + c.les + '" bestaat niet');
    if (!Array.isArray(c.acties) || c.acties.length < 6) { fout(cp + ': minstens 6 acties nodig'); return; }
    var aid = {};
    c.acties.forEach(function (a) {
      if (!a.id || aid[a.id]) fout(cp + ': actie-id ontbreekt of is dubbel (' + a.id + ')');
      aid[a.id] = true;
      if (!a.tekst || !a.resultaat) fout(cp + ' actie ' + a.id + ': tekst en resultaat zijn verplicht');
    });
    if (c.acties.filter(function (a) { return a.essentieel; }).length < 2) fout(cp + ': minstens 2 essentiele acties');
    if (!Array.isArray(c.oorzaken) || c.oorzaken.length < 3 || c.oorzaken.length > 5) fout(cp + ': 3 tot 5 oorzaken nodig');
    else if (c.oorzaken.filter(function (o) { return o.goed; }).length !== 1) fout(cp + ': precies een oorzaak moet goed:true zijn');
    (c.oorzaken || []).forEach(function (o, i) { if (!o.uitleg) fout(cp + ' oorzaak ' + (i + 1) + ': uitleg ontbreekt'); });
    if (!c.leerpunten || !c.leerpunten.length) waarschuw(cp + ': leerpunten ontbreken');
  });

  /* ------------------------------ stijl over alles heen ------------------------------ */
  var alleTekst = strings({ m: CURSUS.modules, c: CURSUS.casussen, n: NASLAG }, 'inhoud', []);
  alleTekst.forEach(function (s) {
    if (s.tekst.indexOf('—') !== -1) fout('Em-dash gevonden in ' + s.pad + ' (gebruik komma, dubbele punt of " - ")');
    if (s.tekst.indexOf('–') !== -1) waarschuw('En-dash in ' + s.pad + ', liever "tot" of een gewoon streepje');
    if (/[^\n] {2,}\S/.test(s.tekst.replace(/^\s+/gm, '')) && !/\|/.test(s.tekst)) waarschuw('Dubbele spatie in ' + s.pad);
    var m, re = /\[\[verifieer[^\]]*\]\]/g;
    while ((m = re.exec(s.tekst))) { markeringen++; }
    var link, lre = /\]\((les|module):([a-z0-9]+)\)/g;
    while ((link = lre.exec(s.tekst))) {
      if (link[1] === 'les' && !lesIds[link[2]]) fout('Interne link naar onbekende les "' + link[2] + '" in ' + s.pad);
      else if (link[1] === 'les' && geplandeLessen[link[2]]) waarschuw('Interne link naar nog niet geschreven les "' + link[2] + '" in ' + s.pad + ' (de link werkt pas als de les bestaat)');
      if (link[1] === 'module' && !modIds[link[2]]) fout('Interne link naar onbekende module "' + link[2] + '" in ' + s.pad);
    }
  });
  if (markeringen) {
    var melding = markeringen + ' plek(ken) met [[verifieer]]: feit nog niet bevestigd, los op voor je publiceert';
    if (opties.strikt) fout(melding); else waarschuw(melding);
  }

  privacyControle(root).forEach(fout);

  var a = CURSUS.aantallen();
  return {
    fouten: fouten, waarschuwingen: waarschuwingen,
    cijfers: { modules: a.modules, lessen: a.lessen, lessenKlaar: a.lessenKlaar, uren: a.uren, toetsvragen: vraagTotaal,
      flashcards: kaartTotaal, casussen: a.casussen, verifieer: markeringen, feitenRegister: feiten ? Object.keys(feiten).length : null }
  };
}

module.exports = { controleer: controleer };

if (require.main === module) {
  var strikt = process.argv.indexOf('--strikt') !== -1;
  var uit = controleer(laadCursus(ROOT), ROOT, { strikt: strikt });
  uit.waarschuwingen.forEach(function (w) { console.log('  waarschuwing: ' + w); });
  uit.fouten.forEach(function (f) { console.log('  FOUT: ' + f); });
  var c = uit.cijfers;
  console.log('\n' + c.modules + ' modules, ' + c.lessenKlaar + ' van ' + c.lessen + ' lessen geschreven, ' + c.toetsvragen + ' toetsvragen, ' +
    c.flashcards + ' flashcards, ' + c.casussen + ' casussen' + (c.feitenRegister !== null ? ', ' + c.feitenRegister + ' feiten in het register' : ''));
  /* Afspraak: elke geschreven les heeft minstens 2 video's (Nederlands en Engels gemengd). Ter informatie, geen fout. */
  var ctx = laadCursus(ROOT), zonder = [];
  ctx.CURSUS.alleLessen().forEach(function (x) { if ((x.les.videos || []).length < 2) zonder.push(x.les.nr); });
  if (zonder.length) console.log('Nog geen 2 video\'s: ' + zonder.length + ' lessen (' + zonder.join(', ') + ')');
  console.log(uit.fouten.length + ' fouten, ' + uit.waarschuwingen.length + ' waarschuwingen' + (strikt ? ' (strikte modus)' : ''));
  process.exit(uit.fouten.length ? 1 : (strikt && uit.waarschuwingen.length ? 1 : 0));
}
