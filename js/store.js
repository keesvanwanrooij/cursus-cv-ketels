/* ==========================================================================
   store.js - voortgang bewaren, exporteren en importeren
   Bron van waarheid: localStorage. Sleutel staat in CURSUS.site.opslagSleutel,
   dus content/index.js moet vóór dit bestand geladen worden.

   Datamodel (versie 2):
   {
     versie: 2, gestart, laatsteLes,
     lessen:   { <lesId>:  { klaar, datum, vinkjes:[] } },
     toetsen:  { 'les:<lesId>' | 'examen:<moduleId>': { beste, totaal, laatste, pogingen, datum } },
     kaarten:  { <kaartId>: { doos, volgende:'JJJJ-MM-DD', gezien } },
     casussen: { <casusId>: { beste, pogingen, gevonden, datum } },
     instellingen: { thema, donatieUit }
   }
   Versie 1 (alleen lessen) wordt zonder verlies ingelezen.
   ========================================================================== */

window.Store = (function () {

  var SLEUTEL = window.CURSUS.site.opslagSleutel;
  /* Intervallen in dagen per doos: doos 0 = net fout of nieuw, daarna steeds langer. */
  var INTERVALLEN = [1, 3, 7, 14, 30, 60, 120];
  var data = laad();

  function leeg() {
    return {
      versie: 2,
      gestart: new Date().toISOString(),
      laatsteLes: null,
      lessen: {}, toetsen: {}, kaarten: {}, casussen: {},
      instellingen: { thema: 'werkplaats' }
    };
  }

  function aanvullen(d) {
    d.versie = 2;
    d.lessen = d.lessen || {};
    d.toetsen = d.toetsen || {};
    d.kaarten = d.kaarten || {};
    d.casussen = d.casussen || {};
    d.instellingen = d.instellingen || { thema: 'werkplaats' };
    return d;
  }

  function laad() {
    try {
      var ruw = localStorage.getItem(SLEUTEL);
      if (!ruw) return leeg();
      var d = JSON.parse(ruw);
      if (!d || typeof d !== 'object') return leeg();
      return aanvullen(d);
    } catch (e) {
      console.warn('Voortgang kon niet worden gelezen, opnieuw begonnen.', e);
      return leeg();
    }
  }

  function bewaar() {
    try {
      localStorage.setItem(SLEUTEL, JSON.stringify(data));
    } catch (e) {
      alert('Voortgang kon niet worden opgeslagen. Sta opslag toe voor lokale bestanden, ' +
            'of exporteer je voortgang handmatig.');
    }
  }

  function vandaag() {
    var d = new Date();
    return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
  }

  function plusDagen(dagen) {
    var d = new Date();
    d.setDate(d.getDate() + dagen);
    return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
  }

  /* ------------------------------ lessen ------------------------------ */

  function les(id) {
    return data.lessen[id] || { klaar: false, datum: null, vinkjes: [] };
  }

  function isKlaar(id) { return !!(data.lessen[id] && data.lessen[id].klaar); }

  function zetKlaar(id, klaar) {
    var l = data.lessen[id] || { klaar: false, datum: null, vinkjes: [] };
    l.klaar = klaar;
    l.datum = klaar ? new Date().toISOString() : null;
    data.lessen[id] = l;
    if (klaar) data.laatsteLes = id;
    bewaar();
  }

  function zetVinkje(id, index, aan) {
    var l = data.lessen[id] || { klaar: false, datum: null, vinkjes: [] };
    l.vinkjes = l.vinkjes || [];
    l.vinkjes[index] = aan;
    data.lessen[id] = l;
    bewaar();
  }

  function bezoek(id) {
    if (data.laatsteLes !== id) { data.laatsteLes = id; bewaar(); }
  }

  /* ------------------------------ toetsen ------------------------------ */

  function toets(sleutel) { return data.toetsen[sleutel] || null; }

  function zetToets(sleutel, juist, totaal) {
    var t = data.toetsen[sleutel] || { beste: 0, totaal: totaal, laatste: 0, pogingen: 0 };
    t.laatste = juist;
    t.totaal = totaal;
    t.beste = Math.max(t.beste || 0, juist);
    t.pogingen = (t.pogingen || 0) + 1;
    t.datum = new Date().toISOString();
    data.toetsen[sleutel] = t;
    bewaar();
    return t;
  }

  function examenGeslaagd(moduleId) {
    var t = data.toetsen['examen:' + moduleId];
    return !!(t && t.totaal && t.beste / t.totaal * 100 >= window.CURSUS.slaaggrens);
  }

  /* ------------------------------ flashcards ------------------------------ */

  /* Een kaart doet mee zodra de bijbehorende les is afgerond. Nieuwe kaarten zijn meteen aan de beurt. */
  function actieveKaarten() {
    return window.CURSUS.alleKaarten().filter(function (k) { return isKlaar(k.les.id); });
  }

  function kaartenVoorVandaag() {
    var nu = vandaag();
    return actieveKaarten().filter(function (k) {
      var s = data.kaarten[k.id];
      return !s || s.volgende <= nu;
    });
  }

  function beoordeelKaart(id, goed) {
    var s = data.kaarten[id] || { doos: 0, gezien: 0 };
    s.doos = goed ? Math.min(s.doos + 1, INTERVALLEN.length - 1) : 0;
    s.volgende = plusDagen(goed ? INTERVALLEN[s.doos] : 1);
    s.gezien = (s.gezien || 0) + 1;
    data.kaarten[id] = s;
    bewaar();
  }

  function kaartenStatistiek() {
    var actief = actieveKaarten();
    var nu = vandaag();
    var vandaagTeDoen = 0, beheerst = 0;
    actief.forEach(function (k) {
      var s = data.kaarten[k.id];
      if (!s || s.volgende <= nu) vandaagTeDoen++;
      if (s && s.doos >= 4) beheerst++;
    });
    return { totaal: window.CURSUS.alleKaarten().length, actief: actief.length, vandaag: vandaagTeDoen, beheerst: beheerst };
  }

  /* ------------------------------ casussen ------------------------------ */

  function casus(id) { return data.casussen[id] || null; }

  function zetCasus(id, score, gevonden) {
    var c = data.casussen[id] || { beste: 0, pogingen: 0, gevonden: false };
    c.beste = Math.max(c.beste || 0, score);
    c.pogingen = (c.pogingen || 0) + 1;
    c.gevonden = c.gevonden || !!gevonden;
    c.datum = new Date().toISOString();
    data.casussen[id] = c;
    bewaar();
    return c;
  }

  /* ---------------------------- instellingen ---------------------------- */

  function instelling(sleutel) { return data.instellingen[sleutel]; }

  function zetInstelling(sleutel, waarde) {
    data.instellingen[sleutel] = waarde;
    bewaar();
  }

  function thema() { return data.instellingen.thema || 'werkplaats'; }

  function zetThema(naam) {
    data.instellingen.thema = naam;
    document.documentElement.dataset.theme = naam;
    bewaar();
  }

  /* ------------------------------ statistiek ------------------------------ */

  function statistiek() {
    var modules = window.CURSUS.modules;
    var totaal = 0, klaar = 0, minuten = 0, videos = 0, modulesKlaar = 0, modulesBeschikbaar = 0;
    modules.forEach(function (m) {
      var beschikbaar = window.CURSUS.lessenVan(m);
      var mKlaar = 0;
      beschikbaar.forEach(function (l) {
        totaal++;
        if (isKlaar(l.id)) {
          klaar++; mKlaar++;
          minuten += (l.duur || 0);
          videos += (l.videos || []).filter(function (v) { return v.yt; }).length;
        }
      });
      if (beschikbaar.length) modulesBeschikbaar++;
      /* Een module telt pas als klaar als al zijn lessen (ook de geplande) beschikbaar en afgerond zijn. */
      if (beschikbaar.length && beschikbaar.length === m.lessen.length && mKlaar === beschikbaar.length) modulesKlaar++;
    });
    return {
      totaal: totaal, klaar: klaar, minuten: minuten, videos: videos,
      modulesKlaar: modulesKlaar, modules: modules.length, modulesBeschikbaar: modulesBeschikbaar,
      procent: totaal ? Math.round(klaar / totaal * 100) : 0
    };
  }

  function moduleVoortgang(m) {
    var beschikbaar = window.CURSUS.lessenVan(m);
    var klaar = beschikbaar.filter(function (l) { return isKlaar(l.id); }).length;
    return { klaar: klaar, totaal: beschikbaar.length, alle: m.lessen.length,
             procent: beschikbaar.length ? Math.round(klaar / beschikbaar.length * 100) : 0 };
  }

  /* Eerste niet-afgeronde les, of de laatst bezochte. */
  function volgendeLes() {
    var alle = window.CURSUS.alleLessen();
    if (data.laatsteLes) {
      var huidig = alle.find(function (x) { return x.les.id === data.laatsteLes; });
      if (huidig && !isKlaar(huidig.les.id)) return huidig;
    }
    var eerste = alle.find(function (x) { return !isKlaar(x.les.id); });
    return eerste || alle[0];
  }

  /* ------------------------- export en import ------------------------- */

  function exporteer() {
    var naam = 'voortgang-cv-ketels-' + new Date().toISOString().slice(0, 10) + '.json';
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = naam;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    return naam;
  }

  function importeer(bestand, klaarFn) {
    var lezer = new FileReader();
    lezer.onload = function () {
      try {
        var d = JSON.parse(lezer.result);
        if (!d || typeof d !== 'object' || !d.lessen) throw new Error('geen geldig voortgangsbestand');
        data = aanvullen(d);
        bewaar();
        document.documentElement.dataset.theme = thema();
        klaarFn(null, Object.keys(data.lessen).length);
      } catch (e) {
        klaarFn(e);
      }
    };
    lezer.onerror = function () { klaarFn(new Error('bestand kon niet worden gelezen')); };
    lezer.readAsText(bestand);
  }

  function wis() {
    data = leeg();
    bewaar();
  }

  return {
    les: les, isKlaar: isKlaar, zetKlaar: zetKlaar, zetVinkje: zetVinkje, bezoek: bezoek,
    toets: toets, zetToets: zetToets, examenGeslaagd: examenGeslaagd,
    kaartenVoorVandaag: kaartenVoorVandaag, beoordeelKaart: beoordeelKaart, kaartenStatistiek: kaartenStatistiek,
    casus: casus, zetCasus: zetCasus,
    thema: thema, zetThema: zetThema, instelling: instelling, zetInstelling: zetInstelling,
    statistiek: statistiek, moduleVoortgang: moduleVoortgang, volgendeLes: volgendeLes,
    exporteer: exporteer, importeer: importeer, wis: wis
  };
})();
