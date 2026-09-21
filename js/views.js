/* ==========================================================================
   views.js - rendert dashboard, modulepagina, lespagina, storingzoeker,
   flashcards en naslag. Alleen HTML-strings: de interactie (toetsen,
   kaarten, casussen) zit in js/oefenen.js.
   ========================================================================== */

window.Views = (function () {

  var E = MD.escape;
  var T = MD.tekst;

  function S() { return CURSUS.site; }

  /* Windows rendert vlag-emoji als letters ("GB", "NL") in plaats van een vlaggetje.
     Daarom kleine SVG-vlaggen die op elk platform hetzelfde ogen. */
  var VLAGGEN = {
    nl: '<svg class="vlag" viewBox="0 0 3 2" aria-label="Nederlands"><rect width="3" height="2" fill="#21468B"/><rect width="3" height="1.333" fill="#FFFFFF"/><rect width="3" height="0.667" fill="#AE1C28"/></svg>',
    en: '<svg class="vlag" viewBox="0 0 60 30" aria-label="Engels"><rect width="60" height="30" fill="#00247d"/><path d="M0,0 60,30 M60,0 0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 60,30 M60,0 0,30" stroke="#cf142b" stroke-width="2"/><path d="M30,0 30,30 M0,15 60,15" stroke="#fff" stroke-width="10"/><path d="M30,0 30,30 M0,15 60,15" stroke="#cf142b" stroke-width="6"/></svg>',
    de: '<svg class="vlag" viewBox="0 0 3 2" aria-label="Duits"><rect width="3" height="2" fill="#FFCE00"/><rect width="3" height="1.333" fill="#DD0000"/><rect width="3" height="0.667" fill="#000000"/></svg>'
  };
  function vlag(taal) { return VLAGGEN[taal] || VLAGGEN.nl; }

  /* Merkicoon: een vlam. Buitenvorm in de inktkleur, binnenvlam in de accentkleur. */
  var VLAM = '<svg class="vlam" viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="M50 6C50 6 78 30 78 58C78 76 66 92 50 92C34 92 22 76 22 58C22 46 30 38 34 30C36 40 42 44 44 44C40 30 44 16 50 6Z"/><path fill="var(--accent)" d="M50 52C50 52 62 62 62 74C62 82 57 88 50 88C43 88 38 82 38 74C38 66 44 60 50 52Z"/></svg>';

  var IC = {
    kaarten: '<svg class="icon" viewBox="0 0 20 20" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="5" width="11" height="10" rx="1.6"/><path d="M6 5V4.2c0-.9.7-1.6 1.6-1.6h8.7c.9 0 1.6.7 1.6 1.6v7.2c0 .9-.7 1.6-1.6 1.6H15.5"/></svg>',
    zoek: '<svg class="icon" viewBox="0 0 20 20" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5"/><path d="M12.6 12.6 17 17"/></svg>',
    examen: '<svg class="icon" viewBox="0 0 20 20" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="2.5" width="13" height="15" rx="2"/><path d="m7 10 2.2 2.2L13.3 8"/></svg>'
  };

  function niveauChip(n) {
    return '<span class="chip mut">' + E(n) + '</span>';
  }

  function uren(min) {
    var u = Math.floor(min / 60), m = min % 60;
    return (u ? u + 'u ' : '') + m + 'm';
  }

  function enkelMeervoud(n, een, meer) { return n + ' ' + (n === 1 ? een : meer); }

  /* ============================== DASHBOARD ============================== */

  function dashboard() {
    var st = Store.statistiek();
    var volgende = Store.volgendeLes();
    var a = CURSUS.aantallen();
    var delen = Object.keys(CURSUS.delen);

    var hero;
    if (volgende) {
      /* "Begin hier" alleen als je echt aan het begin staat. Wie al ergens heeft gelezen maar nog niets
         heeft afgerond, krijgt "Verder waar je gebleven was" en niet de indruk dat les 19.1 het begin is. */
      var eersteLes = CURSUS.alleLessen()[0];
      var isStart = st.klaar === 0 && (!eersteLes || eersteLes.les.id === volgende.les.id);
      hero =
        '<div class="hero">' +
          '<div>' +
            '<div class="eyebrow">' + (isStart ? 'Begin hier' : 'Verder waar je gebleven was') + '</div>' +
            '<h2>Module ' + volgende.module.nr + ' · Les ' + E(volgende.les.nr) + ' - ' + E(volgende.les.titel) + '</h2>' +
            '<p>' + E(volgende.les.leerdoel || volgende.module.intro) + '</p>' +
            '<div class="acts">' +
              '<a class="btn" href="' + Seo.path('les', volgende.les.id) + '">▶ ' + (isStart ? 'Start de cursus' : 'Verder leren') + '</a>' +
              '<a class="btn ghost" href="' + Seo.path('module', volgende.module.id) + '">Module ' + volgende.module.nr + ' overzicht</a>' +
              '<a class="btn ghost" href="' + Seo.anchor('dash', null, 'modules') + '" data-anker="modules">Alle modules ↓</a>' +
            '</div>' +
          '</div>' +
          '<div class="ring" style="--p:' + st.procent + '"><div><b>' + st.procent + '%</b><span>Voltooid</span></div></div>' +
        '</div>';
    } else {
      var eerste = CURSUS.modules[0];
      hero = '<div class="hero"><div><div class="eyebrow">In ontwikkeling</div>' +
        '<h2>De lessen worden geschreven en gecontroleerd</h2>' +
        '<p>Onder elke module staat wat er komt. Elke les wordt pas toegevoegd als de feiten zijn nagelopen bij officiële bronnen en fabrikantdocumentatie.</p>' +
        (eerste ? '<div class="acts"><a class="btn" href="' + Seo.path('module', eerste.id) + '">Bekijk module 1</a></div>' : '') +
        '</div></div>';
    }

    var intro =
      '<header class="pagehead">' +
        '<h1>' + E(Seo.H1()) + '</h1>' +
        '<p>' + E(Seo.INTRO()) + '</p>' +
      '</header>';

    var cs = casusStatistiek();
    var examens = CURSUS.modules.filter(function (m) { return m.examen && m.examen.length && Store.examenGeslaagd(m.id); }).length;
    var examensBeschikbaar = CURSUS.modules.filter(function (m) { return m.examen && m.examen.length; }).length;

    return intro + hero +
      '<div class="stats">' +
        '<div class="stat"><b>' + st.klaar + ' / ' + st.totaal + '</b><span>Lessen afgerond' +
          (a.lessen > st.totaal ? ' (' + (a.lessen - st.totaal) + ' volgen nog)' : '') + '</span></div>' +
        '<div class="stat"><b>' + uren(st.minuten) + '</b><span>Studietijd gedaan</span></div>' +
        '<div class="stat"><b>' + examens + ' / ' + examensBeschikbaar + '</b><span>Module-examens gehaald</span></div>' +
        '<div class="stat"><b>' + cs.opgelost + ' / ' + cs.totaal + '</b><span>Casussen opgelost</span></div>' +
      '</div>' +
      trainers() +
      delen.map(function (d, i) {
        var mods = CURSUS.modules.filter(function (m) { return String(m.deel || 1) === d; });
        if (!mods.length) return '';
        return '<div class="sect-h"' + (i === 0 ? ' id="modules"' : '') + '><h2>' + E(CURSUS.delen[d].titel) + '</h2>' +
          '<span>' + E(CURSUS.delen[d].sub) + ' · ' + mods.length + ' modules</span></div>' +
          '<div class="modgrid">' + mods.map(moduleKaart).join('') + '</div>';
      }).join('') +
      faqBlok();
  }

  function casusStatistiek() {
    var totaal = CURSUS.casussen.length;
    var opgelost = CURSUS.casussen.filter(function (c) { var s = Store.casus(c.id); return s && s.gevonden; }).length;
    return { totaal: totaal, opgelost: opgelost };
  }

  /* De drie oefenvormen naast de lessen, altijd zichtbaar op het dashboard. */
  function trainers() {
    var ks = Store.kaartenStatistiek();
    var cs = casusStatistiek();
    var kaartTekst = ks.actief === 0
      ? 'Rond een les af om de eerste kaarten vrij te spelen'
      : ks.vandaag === 0 ? 'Niets meer te herhalen vandaag' : enkelMeervoud(ks.vandaag, 'kaart', 'kaarten') + ' aan de beurt vandaag';
    return '<div class="trainers">' +
      '<a class="trainer" href="' + Seo.path('kaarten') + '"><span class="tico">' + IC.kaarten + '</span>' +
        '<span><b>Flashcards</b><span>' + kaartTekst + '</span></span></a>' +
      '<a class="trainer" href="' + Seo.path('storingzoeker') + '"><span class="tico">' + IC.zoek + '</span>' +
        '<span><b>Storingzoeker</b><span>' + (cs.totaal ? cs.opgelost + ' van ' + cs.totaal + ' casussen opgelost' : 'Casussen volgen binnenkort') + '</span></span></a>' +
      '</div>';
  }

  /* Veelgestelde vragen: zichtbare tekst voor bezoekers, dezelfde vragen staan als FAQPage in de JSON-LD. */
  function faqBlok() {
    return '<section class="faq"><div class="sect-h"><h2>Veelgestelde vragen over de cursus cv-ketel monteur</h2></div>' +
      Seo.faq().map(function (f) {
        return '<details><summary>' + E(f.q) + '</summary><p>' + E(f.a) + '</p></details>';
      }).join('') + '</section>';
  }

  function moduleKaart(m) {
    var v = Store.moduleVoortgang(m);
    var gepland = v.totaal === 0;
    var status = gepland ? '<span class="chip mut">In ontwikkeling</span>'
               : v.procent === 100 && v.totaal === v.alle ? '<span class="chip ok">Afgerond</span>'
               : v.procent > 0 ? '<span class="chip">Bezig · ' + v.procent + '%</span>'
               : m.beginHier ? '<span class="chip danger">Begin hier</span>'
               : '<span class="chip mut">Nog niet gestart</span>';
    var lessen = v.totaal === v.alle ? m.lessen.length + ' lessen' : v.totaal + ' van ' + v.alle + ' lessen';
    return '<a class="modcard' + (gepland ? ' gepland' : '') + '" href="' + Seo.path('module', m.id) + '">' +
      '<div class="num">Module ' + (m.nr < 10 ? '0' : '') + m.nr + status + '</div>' +
      '<h3>' + E(m.titel) + '</h3>' +
      '<p>' + E(m.intro) + '</p>' +
      '<div class="bar"><i style="width:' + v.procent + '%"></i></div>' +
      '<div class="meta"><span>' + lessen + '</span><span>±' + m.studietijd + ' uur</span></div></a>';
  }

  /* ============================= MODULEPAGINA ============================= */

  function modulePagina(id) {
    var m = CURSUS.module(id);
    if (!m) return '<p>Module niet gevonden.</p>';
    var v = Store.moduleVoortgang(m);
    var videos = CURSUS.lessenVan(m).reduce(function (s, l) { return s + (l.videos || []).length; }, 0);

    return '<div class="crumbs"><a href="' + Seo.path('dash') + '">Mijn cursus</a> › Module ' + m.nr + '</div>' +
      '<div class="modhead"><div>' +
        (m.kritiek ? '<span class="chip danger">Verplicht vóór praktijkwerk</span>' : niveauChip(m.niveau)) +
        '<h1>Module ' + m.nr + ' - ' + E(m.titel) + '</h1>' +
        '<p>' + E(m.ondertitel ? m.ondertitel + ' ' : '') + E(m.intro) + '</p>' +
        '<div class="meta" style="gap:20px">' +
          '<span>📚 ' + m.lessen.length + ' lessen</span>' +
          (videos ? '<span>🎬 ' + videos + ' video\'s</span>' : '') +
          '<span>⏱ ±' + m.studietijd + ' uur</span>' +
          '<span>📊 ' + E(m.niveau) + '</span>' +
          (v.totaal ? '<span>✓ ' + v.klaar + ' van ' + v.totaal + ' afgerond</span>' : '') +
        '</div>' +
      '</div>' +
      '<div class="goalbox"><h4>Na deze module kun je</h4><ul>' +
        m.leerdoelen.map(function (d) { return '<li>' + E(d) + '</li>'; }).join('') +
      '</ul></div></div>' +
      (v.totaal === 0 ? '<div class="callout info"><h4>In ontwikkeling</h4><p>De lessen van deze module worden nog geschreven en gecontroleerd. ' +
        'Hieronder zie je wat er komt.</p></div>' : '') +
      inleidingBlok(m) +
      '<h2 class="lessen-kop">Lessen in module ' + m.nr + '</h2>' +
      '<div class="lessons">' + m.lessen.map(function (l) { return lesRij(m, l); }).join('') + '</div>' +
      examenBlok(m);
  }

  /* Korte inleiding per module: leesbare tekst voor bezoekers en zoekmachines. */
  function inleidingBlok(m) {
    if (!m.inleiding || !m.inleiding.length) return '';
    return '<section class="inleiding"><h2>Over deze module</h2>' +
      m.inleiding.map(function (p) { return '<p>' + E(p) + '</p>'; }).join('') + '</section>';
  }

  function examenBlok(m) {
    if (!m.examen || !m.examen.length) return '';
    var t = Store.toets('examen:' + m.id);
    var geslaagd = Store.examenGeslaagd(m.id);
    return '<section class="examen" id="examen">' +
      '<h2>Module-examen</h2>' +
      '<p>' + m.examen.length + ' meerkeuzevragen over de hele module, met uitleg na elk antwoord. ' +
        'Je slaagt vanaf ' + CURSUS.slaaggrens + '%, net als bij het theorie-examen. Je kunt zo vaak opnieuw als je wilt.</p>' +
      '<div class="examen-actie" data-examen="' + E(m.id) + '">' +
        '<button type="button" class="btn" data-examen-start>' + (t ? 'Opnieuw proberen' : 'Start het module-examen') + '</button>' +
        (t ? '<span class="chip ' + (geslaagd ? 'ok' : '') + '">Beste: ' + t.beste + ' / ' + t.totaal + (geslaagd ? ' · geslaagd' : '') + '</span>' : '') +
      '</div>' +
      '<div class="examen-box"></div>' +
      '</section>';
  }

  /* ============================ TOETSVRAGEN ============================ */

  var LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

  function vraagHtml(q, i) {
    return '<div class="vraag" data-q="' + i + '">' +
      '<p class="vtekst"><b>' + (i + 1) + '.</b> ' + T(q.vraag) + '</p>' +
      '<div class="vopts">' + q.opties.map(function (o, j) {
        return '<button type="button" class="qopt" data-o="' + j + '"><span class="letter">' + LETTERS[j] + '</span><span>' + T(o) + '</span></button>';
      }).join('') + '</div>' +
      '<div class="vfeedback" hidden aria-live="polite"></div></div>';
  }

  /* sleutel: 'les:<lesId>' of 'examen:<moduleId>'. De antwoorden staan niet in de HTML: de interactie leest ze uit CURSUS. */
  function quizHtml(sleutel, vragen, kop, intro) {
    var t = Store.toets(sleutel);
    return '<section class="quiz" data-quiz="' + E(sleutel) + '">' +
      (kop ? '<h2 id="toets">' + E(kop) + '</h2>' : '') +
      (intro ? '<p class="qintro">' + E(intro) + '</p>' : '') +
      (t ? '<p class="qbeste">Beste score tot nu toe: <b>' + t.beste + ' van ' + t.totaal + '</b></p>' : '') +
      vragen.map(vraagHtml).join('') +
      '<div class="quiz-uitslag" hidden aria-live="polite"></div></section>';
  }

  /* ============================ STEUN HET PROJECT ============================ */

  var HART = '<svg class="hart" viewBox="0 0 20 20" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M10 17.5 8.9 16.5C4.9 12.9 2.5 10.7 2.5 8 2.5 5.8 4.2 4.1 6.4 4.1c1.2 0 2.4.6 3.6 1.9 1.2-1.3 2.4-1.9 3.6-1.9 2.2 0 3.9 1.7 3.9 3.9 0 2.7-2.4 4.9-6.4 8.5z"/></svg>';

  function steunAan() {
    return CURSUS.donatie && CURSUS.donatie.actief && !Store.instelling('donatieUit');
  }

  /* soort 'stil': een rustige regel onder elke les. soort 'mijlpaal': na het afronden van een module. */
  function steunBlok(soort, kop) {
    if (!steunAan()) return '';
    var mijlpaal = soort === 'mijlpaal';
    return '<aside class="steun' + (mijlpaal ? ' mijlpaal' : '') + '">' + HART +
      '<p>' + (kop ? '<strong>' + E(kop) + '</strong> ' : '') +
      'Deze cursus is gratis en blijft dat. Heeft hij je geholpen? Dan kun je het project steunen.</p>' +
      '<a class="btn ' + (mijlpaal ? '' : 'ghost ') + 'sm" href="' + E(CURSUS.donatie.url) + '" target="_blank" rel="noopener">Steun het project</a>' +
      '<button type="button" class="uit" data-steun-uit>Niet meer tonen</button></aside>';
  }

  /* ===================== KEES VAN WANROOIJ: ECOSYSTEEM ===================== */

  /* Identiek blok in alle sites van het merk (hub, methode, cursus-elektrotechniek, cursus-cv-ketels).
     Wijzig je de lijst, pas dan alle vier aan. 'hier' markeert de huidige site. */
  var HUB = 'https://www.keesvanwanrooij.nl';
  var ECO = [
    { kop: 'Beleggen', links: [
      { id: 'belegger-kees', url: 'https://beleggerkees.nl', tekst: 'Belegger Kees' },
      { id: 'methode', url: HUB + '/belegger-kees-methode/', tekst: 'Belegger Kees Methode' },
      { id: 'beleggen', url: HUB + '/beleggen/', tekst: 'Beleggen met GARP en NLP' }
    ] },
    { kop: 'Gratis cursussen', links: [
      { id: 'elektro', url: HUB + '/cursus-elektrotechniek/', tekst: 'Cursus Elektrotechniek' },
      { id: 'cv', url: HUB + '/cursus-cv-ketels/', tekst: 'Cursus CV-ketels' }
    ] },
    { kop: 'Kees van Wanrooij', links: [
      { id: 'home', url: HUB + '/', tekst: 'Home' },
      { id: 'over-mij', url: HUB + '/over-mij/', tekst: 'Over mij' },
      { id: 'linkedin', url: 'https://www.linkedin.com/in/keesvanwanrooij/', tekst: 'LinkedIn' },
      { id: 'instagram', url: 'https://www.instagram.com/beleggerkees/', tekst: 'Instagram' },
      { id: 'github', url: 'https://github.com/keesvanwanrooij', tekst: 'GitHub' }
    ] }
  ];
  var ECO_HIER = 'cv';

  function ecosysteem() {
    return '<div class="foot-eco"><div class="foot-eco-grid">' +
      '<div class="foot-col foot-about"><p class="foot-eco-brand">Kees van Wanrooij<span class="eco-dot" aria-hidden="true">.</span></p>' +
        '<p>Belegger en NLP-practitioner. Oprichter van Belegger Kees. Educatie, geen beleggingsadvies.</p></div>' +
      ECO.map(function (k) {
        return '<nav class="foot-col" aria-label="' + E(k.kop) + '"><h3>' + E(k.kop) + '</h3><ul>' +
          k.links.map(function (l) {
            return '<li><a href="' + l.url + '"' + (l.id === ECO_HIER ? ' aria-current="true"' : '') + '>' + E(l.tekst) + '</a></li>';
          }).join('') + '</ul></nav>';
      }).join('') +
    '</div></div>';
  }

  /* ================================== FOOTER ================================== */

  function footer() {
    var repo = 'https://github.com/' + S().repo;
    function modLink(m) {
      return '<li><a href="' + Seo.path('module', m.id) + '">' + m.nr + '. ' + E(m.titel) + '</a></li>';
    }
    function ext(url, tekst) {
      return '<li><a href="' + url + '" target="_blank" rel="noopener">' + tekst + '</a></li>';
    }
    var deel1 = CURSUS.modules.filter(function (m) { return m.deel !== 2; });
    var deel2 = CURSUS.modules.filter(function (m) { return m.deel === 2; });
    var steun = CURSUS.donatie && CURSUS.donatie.actief;

    return '<div class="foot-grid">' +
        '<div class="foot-col foot-about">' +
          '<div class="foot-logo"><span class="logo-ico">' + VLAM + '</span><b>' + E(S().naam) + '</b></div>' +
          '<p>' + E(S().footerOmschrijving) + '</p>' +
          (steun ? '<a class="btn ghost sm" href="' + E(CURSUS.donatie.url) + '" target="_blank" rel="noopener">' + HART + ' Steun het project</a>' : '') +
        '</div>' +
        '<nav class="foot-col" aria-label="Kennis en fundament"><h3>Kennis en fundament</h3><ul>' + deel1.map(modLink).join('') + '</ul></nav>' +
        '<nav class="foot-col" aria-label="Vakmanschap"><h3>Vakmanschap</h3><ul>' + deel2.map(modLink).join('') + '</ul></nav>' +
        '<nav class="foot-col" aria-label="Oefenen en project"><h3>Oefenen</h3><ul>' +
          '<li><a href="' + Seo.path('storingzoeker') + '">Storingzoeker</a></li>' +
          '<li><a href="' + Seo.path('kaarten') + '">Flashcards</a></li>' +
          '<li><a href="' + Seo.path('naslag') + '">Naslag</a></li></ul>' +
          '<h3>Project</h3><ul>' +
          '<li><a href="' + Seo.path('dash') + '">Mijn cursus</a></li>' +
          ext(repo, 'Broncode op GitHub') +
          ext(repo + '/issues/new', 'Fout of suggestie melden') +
          ext('https://www.gnu.org/licenses/gpl-3.0.html', 'Licentie GPLv3') +
        '</ul></nav>' +
      '</div>' +
      ecosysteem() +
      '<div class="foot-base">' +
        '<p class="foot-disclaimer"><strong>Let op:</strong> ' + E(S().disclaimer) + '</p>' +
        '<p class="foot-copy">© 2026 ' + E(S().auteur) + ' · Gratis en open source onder de GPLv3-licentie</p>' +
      '</div>';
  }

  function lesRij(m, l) {
    if (CURSUS.isGepland(l)) {
      return '<div class="lrow gepland">' +
        '<div class="tick"></div>' +
        '<div class="txt"><b>' + E(l.nr) + ' · ' + E(l.titel) + '</b><span>' + E(l.leerdoel || '') + '</span></div>' +
        '<div class="kind"><span class="chip mut">Binnenkort</span> · ' + l.duur + ' min</div></div>';
    }
    var klaar = Store.isKlaar(l.id);
    var volgende = Store.volgendeLes();
    var isNu = !klaar && volgende && volgende.les.id === l.id;
    var vids = (l.videos || []).length;
    var soort = l.type === 'opdracht' ? '🔧 Opdracht' : '📖 Tekst';
    return '<a class="lrow ' + (klaar ? 'done' : isNu ? 'now' : '') + '" href="' + Seo.path('les', l.id) + '">' +
      '<div class="tick">' + (klaar ? '✓' : isNu ? '▶' : '') + '</div>' +
      '<div class="txt"><b>' + E(l.nr) + ' · ' + E(l.titel) + '</b>' +
      '<span>' + E(l.leerdoel || '') + '</span></div>' +
      '<div class="kind">' + soort + (vids ? ' · 🎬 ' + vids : '') + ' · ' + l.duur + ' min</div></a>';
  }

  /* ============================== LESPAGINA ============================== */

  function lesPagina(id) {
    var x = CURSUS.les(id);
    if (!x) return '<p>Les niet gevonden.</p>';
    var m = x.module, l = x.les;
    var gerenderd = MD.render(l.tekst || '');
    var buren = CURSUS.buren(id);
    var klaar = Store.isKlaar(id);
    var opgeslagen = Store.les(id);
    var heeftQuiz = l.quiz && l.quiz.length;
    var heeftVideos = l.videos && l.videos.length;
    var aantalKaarten = (l.kaarten || []).length;

    /* zijbalk */
    var koppen = gerenderd.koppen.slice();
    if (heeftVideos) koppen.push({ id: 'videos', tekst: 'Video\'s bij deze les' });
    if (heeftQuiz) koppen.push({ id: 'toets', tekst: 'Test jezelf' });

    var zij = '<aside class="sidebar"><h5>Module ' + m.nr + '</h5>' +
      '<div class="modname"><a href="' + Seo.path('module', m.id) + '" style="text-decoration:none">' + E(m.titel) + '</a></div>' +
      '<nav class="snav">' + m.lessen.map(function (o) {
        if (CURSUS.isGepland(o)) {
          return '<span class="gepland"><span class="dot"></span><span class="snavtxt">' + E(o.nr) + ' ' + E(o.titel) + '</span></span>';
        }
        return '<a href="' + Seo.path('les', o.id) + '" class="' + (Store.isKlaar(o.id) ? 'done ' : '') +
          (o.id === id ? 'on' : '') + '"><span class="dot"></span><span class="snavtxt">' +
          E(o.nr) + ' ' + E(o.titel) + '</span></a>';
      }).join('') + '</nav>';
    if (koppen.length) {
      zij += '<hr><h5>Op deze pagina</h5><nav class="snav">' +
        koppen.map(function (k) {
          return '<a href="' + Seo.anchor('les', id, k.id) + '" data-anker="' + k.id + '"><span class="snavtxt">' +
            E(k.tekst) + '</span></a>';
        }).join('') + '</nav>';
    }
    zij += '</aside>';

    /* video's */
    var videoHtml = (l.videos || []).map(function (v) {
      if (v.yt) {
        return '<div class="video"><iframe loading="lazy" allowfullscreen ' +
          'referrerpolicy="strict-origin-when-cross-origin" ' +
          'allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture" ' +
          'src="https://www.youtube-nocookie.com/embed/' + E(v.yt) + '" ' +
          'title="' + E(v.titel) + '"></iframe></div>' +
          '<div class="videocap"><span>' + vlag(v.taal) + ' <b>' + E(v.titel) + '</b></span>' +
          '<span>' + (v.duur ? E(v.duur) + ' · ' : '') +
          '<a href="https://www.youtube.com/watch?v=' + E(v.yt) + '" target="_blank" rel="noopener">openen op YouTube ↗</a>' +
          '</span></div>';
      }
      return '<a class="videosearch" target="_blank" rel="noopener" ' +
        'href="https://www.youtube.com/results?search_query=' + encodeURIComponent(v.zoek) + '">' +
        '<span class="ic">🔎</span><span><b>' + vlag(v.taal) + ' ' + E(v.titel) + '</b>' +
        '<span>Nog geen vaste video gekozen - dit opent een YouTube-zoekopdracht op ' +
        '“' + E(v.zoek) + '”</span></span></a>';
    }).join('');

    /* checklist */
    var checklist = '';
    if (l.checklist && l.checklist.length) {
      checklist = '<div class="checklist"><h4>Voordat je verdergaat</h4>' +
        l.checklist.map(function (c, i) {
          return '<label><input type="checkbox" data-vinkje="' + i + '"' +
            (opgeslagen.vinkjes && opgeslagen.vinkjes[i] ? ' checked' : '') + '> ' + E(c) + '</label>';
        }).join('') + '</div>';
    }

    var kaartNotitie = aantalKaarten
      ? '<div class="callout info"><h4>Flashcards uit deze les</h4><p>Deze les levert ' + enkelMeervoud(aantalKaarten, 'kaart', 'kaarten') +
        ' op. Zodra je de les afrondt, komen ze terug in je <a href="' + Seo.path('kaarten') + '">herhaalschema</a>: kaarten die je goed weet steeds later, kaarten die je mist al de volgende dag.</p></div>'
      : '';

    var artikel = '<article class="article">' +
      '<div class="crumbs"><a href="' + Seo.path('dash') + '">Mijn cursus</a> › <a href="' + Seo.path('module', m.id) + '">Module ' + m.nr + '</a> › Les ' + E(l.nr) + '</div>' +
      '<h1>' + E(l.titel) + '</h1>' +
      '<div class="lessmeta"><span>⏱ ' + l.duur + ' min</span>' +
      (heeftVideos ? '<span>🎬 ' + l.videos.length + ' video\'s</span>' : '') +
      '<span>📊 ' + E(m.niveau) + '</span>' +
      (m.kritiek ? '<span class="chip danger">Veiligheidskritisch</span>' : '') + '</div>' +
      (l.leerdoel ? '<div class="callout kern"><h4>Leerdoel van deze les</h4><p>' + E(l.leerdoel) + '</p></div>' : '') +
      gerenderd.html +
      (videoHtml ? '<h2 id="videos">Video\'s bij deze les</h2>' +
        '<p class="videonoot">Beeldmateriaal van derden, als aanvulling. Oudere of buitenlandse video\'s kunnen andere data of regels noemen: de les volgt de actuele Nederlandse bronnen.</p>' +
        videoHtml : '') +
      (heeftQuiz ? quizHtml('les:' + id, l.quiz, 'Test jezelf', 'Beantwoord de vragen om te merken of de stof zit. Na elk antwoord zie je de uitleg, ook als je het goed had.') : '') +
      checklist +
      kaartNotitie +
      '<div class="footnav">' +
        (buren.vorige ? '<a class="btn ghost sm" href="' + Seo.path('les', buren.vorige.les.id) + '">← ' + E(buren.vorige.les.nr) + ' ' + E(buren.vorige.les.titel) + '</a>' : '<span></span>') +
        '<div class="right">' +
          '<button class="btn' + (klaar ? ' done-state' : '') + '" id="btnKlaar">' +
            (klaar ? '✓ Afgerond' : '✓ Markeer als afgerond') + '</button>' +
          (buren.volgende ? '<a class="btn ghost sm" href="' + Seo.path('les', buren.volgende.les.id) + '">' + E(buren.volgende.les.nr) + ' ' + E(buren.volgende.les.titel) + ' →</a>' : '') +
        '</div>' +
      '</div>' +
      (m.kritiek ? '' : steunBlok('stil')) +
      '</article>';

    return '<div class="lesson-layout">' + zij + artikel + '</div>';
  }

  /* ============================= STORINGZOEKER ============================= */

  function casusKaart(c) {
    var s = Store.casus(c.id);
    var chip = s && s.gevonden ? '<span class="chip ok">Opgelost · ' + s.beste + ' pt</span>'
             : s ? '<span class="chip">Geprobeerd</span>' : '<span class="chip mut">Nieuw</span>';
    return '<a class="modcard" href="' + Seo.path('casus', c.id) + '">' +
      '<div class="num">' + E(c.niveau) + chip + '</div>' +
      '<h3>' + E(c.titel) + '</h3>' +
      '<p>' + E(c.klacht) + '</p>' +
      '<div class="meta"><span>⏱ ±' + (c.duur || 10) + ' min</span></div></a>';
  }

  function storingzoekerPagina() {
    var cs = casusStatistiek();
    return '<div class="crumbs"><a href="' + Seo.path('dash') + '">Mijn cursus</a> › Storingzoeker</div>' +
      '<header class="pagehead"><h1>Storingzoeker cv-ketel</h1>' +
      '<p>Een topmonteur vervangt geen onderdelen op goed geluk. Hij stelt een klacht vast, verzamelt gegevens, bedenkt een hypothese, ' +
      'meet gericht en bewijst de oorzaak voordat hij iets vervangt. In deze casussen oefen je precies dat: je krijgt een klacht van een klant, ' +
      'kiest zelf welke controles je uitvoert, stelt je diagnose en ziet direct hoe een ervaren monteur het zou aanpakken.</p></header>' +
      '<div class="callout kern"><h4>Zo werkt het</h4>' +
      '<ol><li>Lees de klacht en de situatie.</li>' +
      '<li>Kies de controles en metingen die je wilt doen. Elke keuze levert een resultaat op, en kost je punten als hij niets bijdraagt.</li>' +
      '<li>Stel je diagnose. Daarna krijg je de uitleg, de oplossing en je score.</li></ol></div>' +
      (cs.totaal
        ? '<div class="sect-h"><h2>Casussen</h2><span>' + cs.opgelost + ' van ' + cs.totaal + ' opgelost</span></div>' +
          '<div class="modgrid">' + CURSUS.casussen.map(casusKaart).join('') + '</div>'
        : '<div class="callout info"><h4>In ontwikkeling</h4><p>De eerste casussen worden nog geschreven en gecontroleerd.</p></div>');
  }

  function casusPagina(id) {
    var c = CURSUS.casus(id);
    if (!c) return '<p>Casus niet gevonden.</p>';
    var les = c.les ? CURSUS.les(c.les) : null;
    return '<div class="crumbs"><a href="' + Seo.path('dash') + '">Mijn cursus</a> › <a href="' + Seo.path('storingzoeker') + '">Storingzoeker</a> › Casus</div>' +
      '<article class="article casus">' +
      '<h1>' + E(c.titel) + '</h1>' +
      '<div class="lessmeta"><span>⏱ ±' + (c.duur || 10) + ' min</span><span>📊 ' + E(c.niveau) + '</span></div>' +
      '<div class="callout kern"><h4>De klacht</h4><p>' + T(c.klacht) + '</p></div>' +
      (c.context ? '<h2>De situatie</h2>' + MD.render(c.context).html : '') +
      '<div class="casus-app" data-casus="' + E(c.id) + '"></div>' +
      (les ? '<p class="casus-terug">Achtergrond bij deze casus: <a href="' + Seo.path('les', les.les.id) + '">les ' + E(les.les.nr) + ', ' + E(les.les.titel) + '</a>.</p>' : '') +
      '</article>';
  }

  /* ============================== FLASHCARDS ============================== */

  function kaartenPagina() {
    var ks = Store.kaartenStatistiek();
    var perModule = CURSUS.modules.map(function (m) {
      var n = CURSUS.lessenVan(m).reduce(function (s, l) { return s + (l.kaarten || []).length; }, 0);
      return n ? '<tr><td>Module ' + m.nr + '</td><td>' + E(m.titel) + '</td><td>' + n + '</td></tr>' : '';
    }).join('');
    return '<div class="crumbs"><a href="' + Seo.path('dash') + '">Mijn cursus</a> › Flashcards</div>' +
      '<header class="pagehead"><h1>Flashcards voor de cv-monteur</h1>' +
      '<p>Herhalen op het juiste moment is de snelste manier om waarden, regels en begrippen blijvend te onthouden. Een kaart die je goed weet komt na ' +
      'drie dagen terug, daarna na een week, twee weken, een maand en steeds langer. Een kaart die je niet weet komt morgen terug. ' +
      'Kaarten uit een les doen mee zodra je die les hebt afgerond.</p></header>' +
      '<div class="stats">' +
        '<div class="stat"><b>' + ks.vandaag + '</b><span>Aan de beurt vandaag</span></div>' +
        '<div class="stat"><b>' + ks.actief + '</b><span>Kaarten in je schema</span></div>' +
        '<div class="stat"><b>' + ks.beheerst + '</b><span>Goed beheerst</span></div>' +
        '<div class="stat"><b>' + ks.totaal + '</b><span>Kaarten in de cursus</span></div>' +
      '</div>' +
      '<div class="kaart-app" id="kaartApp"></div>' +
      (perModule ? '<div class="sect-h"><h2>Kaarten per module</h2></div>' +
        '<div class="naslagcard"><table><thead><tr><th>Module</th><th>Onderwerp</th><th>Kaarten</th></tr></thead><tbody>' + perModule + '</tbody></table></div>' : '');
  }

  /* ================================ NASLAG ================================ */

  function naslag() {
    return '<div class="crumbs"><a href="' + Seo.path('dash') + '">Mijn cursus</a> › Naslag</div>' +
      '<div class="sect-h"><h1>Naslag cv-ketels</h1><span>formules, waarden en spiekbriefjes voor op de werkvloer</span></div>' +
      '<div class="naslaggrid">' +
        window.NASLAG.map(function (k) {
          return '<div class="naslagcard"><h3>' + E(k.icoon || '') + ' ' + E(k.titel) + '</h3>' +
            MD.render(k.inhoud).html + '</div>';
        }).join('') +
      '</div>';
  }

  return {
    VLAM: VLAM, footer: footer, steunBlok: steunBlok, dashboard: dashboard, modulePagina: modulePagina,
    lesPagina: lesPagina, naslag: naslag, quizHtml: quizHtml, storingzoekerPagina: storingzoekerPagina,
    casusPagina: casusPagina, kaartenPagina: kaartenPagina
  };
})();
