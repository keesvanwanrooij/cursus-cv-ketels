/* ==========================================================================
   seo.js - URL's, paginatitels, meta-tags en gestructureerde data (JSON-LD)
   Wordt gedeeld door de browser (app.js) en het bouwscript (tools/build-seo.js),
   zodat een voorgerenderde pagina en de app exact dezelfde metadata hebben.
   Namen en teksten komen uit CURSUS.site (content/index.js).
   ========================================================================== */

window.Seo = (function () {

  /* path: schone URL's (http/https). Zonder path: hash-routes, nodig voor file://. */
  var cfg = { path: false, base: '/', origin: '' };

  function S() { return CURSUS.site; }
  function auteur() { return { '@type': 'Person', name: S().auteur, url: S().auteurUrl }; }

  function configureer(c) { for (var k in c) cfg[k] = c[k]; }

  /* ------------------------ teksten die van de inhoud afhangen ------------------------ */

  function descHome() {
    var a = CURSUS.aantallen();
    return 'Gratis online cursus voor de cv-ketel monteur: ' + a.modules + ' modules, ' + a.lessen +
      ' lessen, toetsvragen, flashcards en een storingzoeker. Voorbereiding op Vakmanschap CO, in het Nederlands.';
  }

  var DESC_NASLAG = 'Naslag voor de cv-monteur: formules, gasgegevens, CO-waarden, aansluitwijzen van rookgasafvoer, ' +
    'waterdruk en storingzoeken op een rij. Gratis, ook offline.';
  var DESC_KAARTEN = 'Flashcards voor de cv-monteur en het CO-examen: herhaal begrippen, waarden en regels met een slim ' +
    'herhaalschema dat kaarten die je goed kent na 3, 7, 14 en 30 dagen terugbrengt en gemiste kaarten al de volgende dag. Gratis.';
  var DESC_STORINGZOEKER = 'Train het storingzoeken aan een cv-ketel met praktijkcasussen: kies je metingen, stel je diagnose ' +
    'en leer de systematiek van een topmonteur. Gratis storingzoeker voor cv-monteurs.';

  function faq() {
    var a = CURSUS.aantallen();
    return [
      { q: 'Is deze cursus voor cv-ketel monteurs echt gratis?',
        a: 'Ja. De cursus is volledig gratis, zonder account, zonder betaalmuur en zonder tracking. De broncode is open source onder de GPLv3-licentie.' },
      { q: 'Voor wie is deze cursus cv-ketel monteur?',
        a: 'Voor aankomend cv-monteurs, zij-instromers en monteurs die zich voorbereiden op het theorie- en praktijkexamen Vakmanschap CO. De cursus start bij de wet en de veiligheid en bouwt op tot zelfstandig storingzoeken.' },
      { q: 'Krijg ik na deze cursus een CO-certificaat?',
        a: 'Nee. Deze cursus is zelfstudie en geeft geen erkend diploma en geen Bewijs van Vakmanschap CO. Dat behaal je met een theorie- en praktijkexamen bij een erkende exameninstelling. Deze cursus bereidt je daar inhoudelijk op voor.' },
      { q: 'Hoe lang duurt de zelfstudie?',
        a: 'De hele leerlijn is ongeveer ' + a.uren + ' uur studietijd, verdeeld over ' + a.modules + ' modules en ' + a.lessen + ' lessen. Jij bepaalt het tempo, je voortgang wordt automatisch bijgehouden.' },
      { q: 'Kan ik oefenen voor het theorie-examen?',
        a: 'Ja. Elke les heeft toetsvragen met uitleg, elke module een module-examen en je kunt flashcards herhalen met een herhaalschema. Ook train je met de storingzoeker het systematisch zoeken naar de oorzaak van een storing.' },
      { q: 'Kan ik de cursus offline volgen?',
        a: 'Ja. Installeer de cursus als app op je telefoon of computer, dan werken de teksten, toetsen en flashcards ook zonder internet. Alleen video\'s hebben een verbinding nodig.' }
    ];
  }

  /* ---------------------------- URL's en routes ---------------------------- */

  /* Relatief pad binnen de site, zonder base. */
  function rel(page, id) {
    if (page === 'module') { var m = CURSUS.module(id); return m ? 'module/' + m.slug + '/' : ''; }
    if (page === 'les') { var x = CURSUS.les(id); return x ? 'les/' + x.les.slug + '/' : ''; }
    if (page === 'casus') { var c = CURSUS.casus(id); return c ? 'storingzoeker/' + c.slug + '/' : ''; }
    if (page === 'naslag') return 'naslag/';
    if (page === 'kaarten') return 'kaarten/';
    if (page === 'storingzoeker') return 'storingzoeker/';
    return '';
  }

  /* De href voor een interne link, afhankelijk van de modus. */
  function path(page, id) {
    if (cfg.path) return cfg.base + rel(page, id);
    if (page === 'dash') return '#/';
    if (page === 'naslag' || page === 'kaarten' || page === 'storingzoeker') return '#/' + page;
    return '#/' + page + '/' + id;
  }

  /* Koplink binnen een lespagina. */
  function anchor(page, id, kop) {
    return (cfg.path ? path(page, id) : '') + '#' + kop;
  }

  function absoluut(page, id) { return cfg.origin + cfg.base + rel(page, id); }

  /* Van een URL-pad naar { page, id }. */
  function parsePad(pathname) {
    var p = pathname;
    if (p.indexOf(cfg.base) === 0) p = p.slice(cfg.base.length);
    p = p.replace(/^\/+/, '').replace(/index\.html$/, '');
    var d = p.split('/').filter(Boolean);
    if (d[0] === 'module' && d[1]) { var m = CURSUS.moduleBijSlug(d[1]); if (m) return { page: 'module', id: m.id }; }
    if (d[0] === 'les' && d[1]) { var x = CURSUS.lesBijSlug(d[1]); if (x) return { page: 'les', id: x.les.id }; }
    if (d[0] === 'storingzoeker' && d[1]) { var c = CURSUS.casusBijSlug(d[1]); if (c) return { page: 'casus', id: c.id }; }
    if (d[0] === 'storingzoeker') return { page: 'storingzoeker' };
    if (d[0] === 'kaarten') return { page: 'kaarten' };
    if (d[0] === 'naslag') return { page: 'naslag' };
    return { page: 'dash' };
  }

  function parseHash(hash) {
    var d = String(hash || '').replace(/^#/, '').split('/').filter(Boolean);
    if (d[0] === 'module' && d[1] && CURSUS.module(d[1])) return { page: 'module', id: d[1] };
    if (d[0] === 'les' && d[1] && CURSUS.les(d[1])) return { page: 'les', id: d[1] };
    if (d[0] === 'casus' && d[1] && CURSUS.casus(d[1])) return { page: 'casus', id: d[1] };
    if (d[0] === 'storingzoeker') return { page: 'storingzoeker' };
    if (d[0] === 'kaarten') return { page: 'kaarten' };
    if (d[0] === 'naslag') return { page: 'naslag' };
    return { page: 'dash' };
  }

  /* ------------------------------ metadata ------------------------------ */

  function kort(s, max) {
    s = String(s).replace(/\s+/g, ' ').trim();
    if (s.length <= max) return s;
    var c = s.slice(0, max - 1);
    return c.slice(0, c.lastIndexOf(' ')).replace(/[,;:.\s]+$/, '') + '…';
  }

  function uren() { return CURSUS.aantallen().uren; }

  function courseHome() {
    var a = CURSUS.aantallen();
    return {
      '@type': 'Course',
      '@id': cfg.origin + cfg.base + '#cursus',
      name: 'Cursus cv-ketel monteur',
      description: descHome(),
      url: absoluut('dash'),
      inLanguage: 'nl',
      isAccessibleForFree: true,
      educationalLevel: 'Beginner tot gevorderd',
      keywords: S().keywords.join(', '),
      audience: { '@type': 'EducationalAudience', educationalRole: 'student', audienceType: S().doelgroep },
      about: S().onderwerpen.map(function (n) { return { '@type': 'Thing', name: n }; }),
      timeRequired: 'PT' + a.uren + 'H',
      provider: auteur(),
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR', category: 'Free', availability: 'https://schema.org/InStock' },
      hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', courseWorkload: 'PT' + a.uren + 'H' },
      teaches: CURSUS.modules.map(function (m) { return m.titel; }),
      hasPart: CURSUS.modules.filter(CURSUS.moduleKlaar, CURSUS).map(function (m) {
        return { '@type': 'Course', name: m.titel, description: m.intro, url: absoluut('module', m.id) };
      })
    };
  }

  function broodkruimel(items) {
    return {
      '@type': 'BreadcrumbList',
      itemListElement: items.map(function (it, i) {
        return { '@type': 'ListItem', position: i + 1, name: it.naam, item: it.url };
      })
    };
  }

  /* Alles wat een pagina nodig heeft in <head>. */
  function meta(page, id) {
    var titel, desc, type = 'website', graph = [], canon = absoluut(page, id), robots = 'index, follow, max-image-preview:large';
    var kruimel0 = { naam: 'Cursus cv-ketels', url: absoluut('dash') };

    if (page === 'module') {
      var m = CURSUS.module(id);
      titel = 'Module ' + m.nr + ': ' + m.titel + ' | Cursus cv-ketels';
      desc = kort(m.intro, 158);
      if (!CURSUS.moduleKlaar(m)) robots = 'noindex, follow';
      graph = [
        {
          '@type': 'Course', name: m.titel, description: m.intro, url: canon, inLanguage: 'nl',
          isAccessibleForFree: true, educationalLevel: m.niveau, timeRequired: 'PT' + m.studietijd + 'H',
          provider: auteur(), isPartOf: { '@id': cfg.origin + cfg.base + '#cursus' },
          hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online' },
          hasPart: CURSUS.lessenVan(m).map(function (l) {
            return { '@type': 'LearningResource', name: l.titel, url: absoluut('les', l.id) };
          })
        },
        broodkruimel([kruimel0, { naam: 'Module ' + m.nr + ': ' + m.titel, url: canon }])
      ];
    } else if (page === 'les') {
      var x = CURSUS.les(id), l = x.les, mod = x.module;
      titel = l.titel + ' | Cursus cv-ketels';
      desc = l.leerdoel || '';
      if (desc.length < 115) desc += ' Gratis les uit de cursus voor de cv-ketel monteur.';
      desc = kort(desc, 158);
      type = 'article';
      graph = [
        {
          '@type': 'LearningResource', name: l.titel, description: l.leerdoel, url: canon, inLanguage: 'nl',
          isAccessibleForFree: true, learningResourceType: 'Les', educationalLevel: mod.niveau,
          timeRequired: 'PT' + l.duur + 'M', teaches: l.leerdoel, author: auteur(),
          license: 'https://www.gnu.org/licenses/gpl-3.0.html',
          isPartOf: { '@type': 'Course', name: mod.titel, url: absoluut('module', mod.id) }
        },
        broodkruimel([
          kruimel0,
          { naam: 'Module ' + mod.nr + ': ' + mod.titel, url: absoluut('module', mod.id) },
          { naam: l.titel, url: canon }
        ])
      ];
    } else if (page === 'casus') {
      var c = CURSUS.casus(id);
      titel = c.titel + ' | Storingzoeker cv-ketel';
      desc = kort(c.klacht + ' Train je diagnose in deze gratis storingzoeker-casus voor cv-monteurs.', 158);
      type = 'article';
      graph = [
        {
          '@type': 'LearningResource', name: c.titel, description: c.klacht, url: canon, inLanguage: 'nl',
          isAccessibleForFree: true, learningResourceType: 'Casus', educationalLevel: c.niveau,
          timeRequired: 'PT' + (c.duur || 10) + 'M', author: auteur(),
          license: 'https://www.gnu.org/licenses/gpl-3.0.html'
        },
        broodkruimel([kruimel0, { naam: 'Storingzoeker', url: absoluut('storingzoeker') }, { naam: c.titel, url: canon }])
      ];
    } else if (page === 'storingzoeker') {
      titel = 'Storingzoeker cv-ketel: train je storingzoeken met casussen';
      desc = DESC_STORINGZOEKER;
      graph = [broodkruimel([kruimel0, { naam: 'Storingzoeker', url: canon }])];
    } else if (page === 'kaarten') {
      titel = 'Flashcards cv-ketels: oefen voor het CO-examen';
      desc = DESC_KAARTEN;
      graph = [broodkruimel([kruimel0, { naam: 'Flashcards', url: canon }])];
    } else if (page === 'naslag') {
      titel = 'Naslag cv-ketels: formules, waarden en spiekbriefjes';
      desc = DESC_NASLAG;
      graph = [broodkruimel([kruimel0, { naam: 'Naslag cv-ketels', url: canon }])];
    } else {
      titel = S().titelHome;
      desc = descHome();
      graph = [
        courseHome(),
        {
          '@type': 'WebSite', name: S().naam, url: absoluut('dash'), inLanguage: 'nl',
          description: desc, publisher: auteur()
        },
        {
          '@type': 'FAQPage',
          mainEntity: faq().map(function (f) {
            return { '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } };
          })
        }
      ];
    }

    return {
      title: titel, description: desc, canonical: canon, ogType: type, robots: robots,
      image: cfg.origin + cfg.base + 'og-image.png',
      jsonld: { '@context': 'https://schema.org', '@graph': graph }
    };
  }

  /* Past de metadata van het document aan bij navigatie binnen de app. */
  function pasToe(page, id) {
    var mt = meta(page, id);
    document.title = mt.title;
    if (!cfg.path) return;
    function zet(sel, attr, waarde, maak) {
      var el = document.querySelector(sel);
      if (!el && maak) { el = maak(); document.head.appendChild(el); }
      if (el) el.setAttribute(attr, waarde);
    }
    function metaTag(naam, waarde, eigenschap) {
      zet('meta[' + (eigenschap || 'name') + '="' + naam + '"]', 'content', waarde, function () {
        var e = document.createElement('meta'); e.setAttribute(eigenschap || 'name', naam); return e;
      });
    }
    metaTag('description', mt.description);
    metaTag('robots', mt.robots);
    metaTag('og:title', mt.title, 'property');
    metaTag('og:description', mt.description, 'property');
    metaTag('og:url', mt.canonical, 'property');
    metaTag('og:type', mt.ogType, 'property');
    metaTag('twitter:title', mt.title);
    metaTag('twitter:description', mt.description);
    zet('link[rel="canonical"]', 'href', mt.canonical, function () {
      var e = document.createElement('link'); e.rel = 'canonical'; return e;
    });
    var ld = document.getElementById('jsonld');
    if (ld) ld.textContent = JSON.stringify(mt.jsonld);
  }

  return {
    cfg: cfg, configureer: configureer, faq: faq, descHome: descHome,
    H1: function () { return S().h1; }, INTRO: function () { return S().intro; }, NAAM: function () { return S().naam; },
    KEYWORDS: function () { return S().keywords; },
    path: path, rel: rel, anchor: anchor, absoluut: absoluut,
    parsePad: parsePad, parseHash: parseHash, meta: meta, pasToe: pasToe, uren: uren
  };
})();
