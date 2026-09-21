/* ==========================================================================
   content/index.js - cursusmetadata, sitegegevens en modulenregister
   Modulebestanden (m01.js, m02.js, ...) roepen CURSUS.addModule() aan,
   content/storingen.js roept CURSUS.addCasus() aan.
   Alle identiteit (naam, URL, teksten voor zoekmachines) staat hier in
   CURSUS.site, zodat js/seo.js, js/views.js en tools/build-seo.js geen
   hardgecodeerde namen bevatten.
   ========================================================================== */

window.CURSUS = {

  site: {
    naam: 'Cursus CV-ketels',
    merk: 'CV-ketels',
    merkSub: 'Praktijkcursus',
    /* Gedeelde opslagsleutels: beide cursussen staan op dezelfde origin (www.keesvanwanrooij.nl), dus altijd uniek per cursus. */
    opslagSleutel: 'cursus-cv-voortgang',
    cacheNaam: 'cursus-cv',
    repo: 'keesvanwanrooij/cursus-cv-ketels',
    origin: 'https://www.keesvanwanrooij.nl',
    base: '/cursus-cv-ketels/',
    auteur: 'Kees van Wanrooij',
    auteurUrl: 'https://github.com/keesvanwanrooij',
    /* Google Search Console: verificatietoken van de HTML-tag. Leeg laten tot de property is aangemaakt. */
    googleVerificatie: '',

    titelHome: 'Gratis cursus cv-ketel monteur | Theorie, praktijk en CO-examen',
    h1: 'Gratis cursus cv-ketel monteur: van beginner tot CO-vakbekwaam',
    intro: 'Een gratis online zelfstudiecursus voor de cv-monteur, in het Nederlands. Leer stap voor stap veilig ' +
      'werken met gas en koolmonoxide, hoe een HR-ketel werkt, meten, onderhouden en storingzoeken, en bereid ' +
      'je voor op het theorie- en praktijkexamen Vakmanschap CO. Met toetsvragen, flashcards en een storingzoeker, ook offline te volgen.',
    keywords: ['cursus cv-ketel monteur', 'cv-monteur worden', 'cv-ketel monteur opleiding', 'Vakmanschap CO',
      'CO-certificering cv-monteur', 'cv-ketel storingzoeken', 'rookgasanalyse', 'HR-ketel', 'zelfstudie cv-ketels'],
    onderwerpen: ['CV-ketels', 'Koolmonoxide en CO-veiligheid', 'Vakmanschap CO'],
    doelgroep: 'Aankomend cv-monteurs, zij-instromers en monteurs die zich op het CO-examen voorbereiden',
    footerOmschrijving: 'Gratis online cursus voor de cv-ketel monteur, in het Nederlands. Theorie, praktijk en voorbereiding op Vakmanschap CO, ook offline.',
    disclaimer: 'deze zelfstudie is geen erkende opleiding en geen Bewijs van Vakmanschap CO. ' +
      'Werken aan gasverbrandingstoestellen is in Nederland gebonden aan wettelijke certificeringseisen. ' +
      'Werk onder begeleiding van een gecertificeerd monteur en volg altijd de documentatie van de fabrikant.',
    /* Zuster-cursus: gelinkt vanuit de footer en vanuit lessen die elektrisch werk raken. */
    zuster: { naam: 'Cursus Elektrotechniek', url: 'https://www.keesvanwanrooij.nl/cursus-elektrotechniek/' }
  },

  /* Vakmanschap CO en dus ook de module-examens: slagen vanaf dit percentage. Zie project/docs/feiten/01-wet-en-certificering.md */
  slaaggrens: 70,

  delen: {
    1: { titel: 'Deel I - Kennis en fundament', sub: 'in volgorde doorlopen, dit is de basis van alles' },
    2: { titel: 'Deel II - Vakmanschap in de praktijk', sub: 'meten, installeren, onderhouden, storingzoeken en het examen' }
  },

  modules: [],
  casussen: [],

  /* Steun het project. Zet actief op true zodra de GitHub Sponsors-pagina live is. tools/build-seo.js meldt bij elke build of dat zo is. */
  donatie: { actief: false, url: 'https://github.com/sponsors/keesvanwanrooij' },

  /* ------------------------------ registratie ------------------------------ */

  addModule: function (m) {
    var self = this;
    m.slug = this.uniekeSlug('module', this.slugify(m.titel), m.nr);
    m.lessen.forEach(function (l) {
      if (l.status === 'gepland') return;
      l.slug = self.uniekeSlug('les', self.slugify(l.titel), String(l.nr).replace(/\./g, '-'));
    });
    this.modules.push(m);
    this.modules.sort(function (a, b) { return a.nr - b.nr; });
  },

  addCasus: function (c) {
    c.slug = this.uniekeSlug('casus', this.slugify(c.titel), c.id);
    this.casussen.push(c);
  },

  _slugs: {},

  slugify: function (t) {
    return String(t).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/['’]/g, '').replace(/&/g, ' en ')
      .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  },

  uniekeSlug: function (soort, slug, suffix) {
    var sleutel = soort + ':' + slug;
    if (this._slugs[sleutel]) slug = slug + '-' + suffix;
    this._slugs[soort + ':' + slug] = true;
    return slug;
  },

  /* ------------------------------ opzoeken ------------------------------ */

  /* Een les met status 'gepland' staat wel in het curriculum, maar is nog niet geschreven:
     hij verschijnt als 'Binnenkort' op de modulepagina, niet in navigatie, voortgang of sitemap. */
  isGepland: function (l) { return l.status === 'gepland'; },

  moduleBijSlug: function (slug) {
    return this.modules.find(function (m) { return m.slug === slug; });
  },

  lesBijSlug: function (slug) {
    return this.alleLessen().find(function (x) { return x.les.slug === slug; });
  },

  casusBijSlug: function (slug) {
    return this.casussen.find(function (c) { return c.slug === slug; });
  },

  casus: function (id) {
    return this.casussen.find(function (c) { return c.id === id; });
  },

  /* Eén platte lijst van alle beschikbare lessen, met hun module erbij. */
  alleLessen: function () {
    var uit = [];
    this.modules.forEach(function (m) {
      m.lessen.forEach(function (l) { if (l.status !== 'gepland') uit.push({ module: m, les: l }); });
    });
    return uit;
  },

  /* Beschikbare lessen van één module. */
  lessenVan: function (m) {
    return m.lessen.filter(function (l) { return l.status !== 'gepland'; });
  },

  /* Heeft de module al minstens één geschreven les? Anders geen indexeerbare pagina. */
  moduleKlaar: function (m) { return this.lessenVan(m).length > 0; },

  module: function (id) {
    return this.modules.find(function (m) { return m.id === id; });
  },

  les: function (id) {
    return this.alleLessen().find(function (x) { return x.les.id === id; });
  },

  /* Vorige en volgende beschikbare les over modulegrenzen heen. */
  buren: function (lesId) {
    var alle = this.alleLessen();
    var i = alle.findIndex(function (x) { return x.les.id === lesId; });
    return { vorige: i > 0 ? alle[i - 1] : null,
             volgende: i >= 0 && i < alle.length - 1 ? alle[i + 1] : null };
  },

  /* Alle flashcards, met hun les en module erbij. Kaart-id: <les-id>-k<volgnummer>. */
  alleKaarten: function () {
    var uit = [];
    this.alleLessen().forEach(function (x) {
      (x.les.kaarten || []).forEach(function (k, i) {
        uit.push({ id: x.les.id + '-k' + i, les: x.les, module: x.module, voor: k.voor, achter: k.achter });
      });
    });
    return uit;
  },

  /* Totalen voor teksten en zoekmachines: 'totaal' telt ook geplande lessen. */
  aantallen: function () {
    var totaal = 0, klaar = 0, uren = 0, kaarten = 0, vragen = 0;
    this.modules.forEach(function (m) {
      uren += (m.studietijd || 0);
      m.lessen.forEach(function (l) {
        totaal++;
        if (l.status !== 'gepland') {
          klaar++;
          kaarten += (l.kaarten || []).length;
          vragen += (l.quiz || []).length;
        }
      });
      vragen += (m.examen || []).length;
    });
    return { modules: this.modules.length, lessen: totaal, lessenKlaar: klaar, uren: uren,
             kaarten: kaarten, vragen: vragen, casussen: this.casussen.length };
  },

  totaleStudietijd: function () {
    return this.modules.reduce(function (s, m) { return s + (m.studietijd || 0); }, 0);
  }
};
