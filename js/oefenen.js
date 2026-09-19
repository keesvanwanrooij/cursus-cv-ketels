/* ==========================================================================
   oefenen.js - interactie voor toetsvragen, module-examens, flashcards en
   de storingzoeker. Views leveren de HTML, dit bestand maakt hem levend.
   Alle antwoorden staan in CURSUS (content), nooit in de HTML zelf.
   ========================================================================== */

window.Oefenen = (function () {

  var E = MD.escape;
  var T = MD.tekst;
  var LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

  function schud(lijst) {
    var a = lijst.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* ================================ TOETSEN ================================ */

  /* De vragen bij een sleutel: 'les:<lesId>' of 'examen:<moduleId>'. */
  function vragenBij(sleutel) {
    var d = sleutel.split(':');
    if (d[0] === 'les') { var x = CURSUS.les(d[1]); return x ? x.les.quiz || [] : []; }
    if (d[0] === 'examen') { var m = CURSUS.module(d[1]); return m ? m.examen || [] : []; }
    return [];
  }

  function beantwoord(vraagEl, quizEl, gekozen) {
    if (vraagEl.classList.contains('beantwoord')) return;
    var sleutel = quizEl.dataset.quiz;
    var i = parseInt(vraagEl.dataset.q, 10);
    var q = vragenBij(sleutel)[i];
    if (!q) return;
    var goed = gekozen === q.goed;
    vraagEl.classList.add('beantwoord', goed ? 'juist' : 'onjuist');
    vraagEl.dataset.resultaat = goed ? '1' : '0';

    vraagEl.querySelectorAll('.qopt').forEach(function (b) {
      var j = parseInt(b.dataset.o, 10);
      b.disabled = true;
      if (j === q.goed) b.classList.add('goed');
      else if (j === gekozen) b.classList.add('fout');
    });

    var fb = vraagEl.querySelector('.vfeedback');
    fb.hidden = false;
    fb.className = 'vfeedback ' + (goed ? 'juist' : 'onjuist');
    fb.innerHTML = '<b>' + (goed ? 'Goed.' : 'Niet goed. Het juiste antwoord is ' + LETTERS[q.goed] + '.') + '</b> ' +
      (q.uitleg ? T(q.uitleg) : '');

    /* Alle vragen beantwoord: uitslag tonen en bewaren. */
    var alle = quizEl.querySelectorAll('.vraag');
    var klaar = quizEl.querySelectorAll('.vraag.beantwoord').length === alle.length;
    if (klaar) toonUitslag(quizEl, sleutel, alle);
  }

  function toonUitslag(quizEl, sleutel, alle) {
    var juist = 0;
    alle.forEach(function (v) { if (v.dataset.resultaat === '1') juist++; });
    var totaal = alle.length;
    var t = Store.zetToets(sleutel, juist, totaal);
    var procent = Math.round(juist / totaal * 100);
    var isExamen = sleutel.indexOf('examen:') === 0;
    var geslaagd = procent >= CURSUS.slaaggrens;

    var uit = quizEl.querySelector('.quiz-uitslag');
    uit.hidden = false;
    uit.className = 'quiz-uitslag ' + (geslaagd ? 'juist' : 'onjuist');
    uit.innerHTML = '<div class="score"><b>' + juist + ' van ' + totaal + '</b> goed (' + procent + '%)</div>' +
      '<p>' + (isExamen
        ? (geslaagd ? 'Geslaagd: je zit boven de ' + CURSUS.slaaggrens + '%. Kijk de foute vragen na, daar zit je leerwinst.'
                    : 'Nog niet geslaagd: je hebt ' + CURSUS.slaaggrens + '% nodig. Lees de uitleg bij de foute vragen en probeer het opnieuw.')
        : (geslaagd ? 'Sterk. De stof zit.' : 'Lees de les nog eens door en probeer de vragen opnieuw.')) + '</p>' +
      '<button type="button" class="btn ghost sm" data-quiz-opnieuw>Opnieuw proberen</button>' +
      (t.pogingen > 1 ? ' <span class="qbeste">Beste: ' + t.beste + ' van ' + t.totaal + '</span>' : '');
    uit.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function quizOpnieuw(quizEl) {
    var sleutel = quizEl.dataset.quiz;
    var vragen = vragenBij(sleutel);
    var kop = quizEl.querySelector('h2');
    var isExamen = sleutel.indexOf('examen:') === 0;
    var html = Views.quizHtml(sleutel, vragen, kop ? kop.textContent : '', '');
    var doos = document.createElement('div');
    doos.innerHTML = html;
    var nieuw = doos.firstChild;
    quizEl.replaceWith(nieuw);
    if (!isExamen) nieuw.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function startExamen(actieEl) {
    var moduleId = actieEl.dataset.examen;
    var m = CURSUS.module(moduleId);
    var box = actieEl.parentNode.querySelector('.examen-box');
    if (!m || !box) return;
    box.innerHTML = Views.quizHtml('examen:' + moduleId, m.examen, '', '');
    var quiz = box.querySelector('.quiz');
    if (quiz) quiz.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ============================== FLASHCARDS ============================== */

  var kaartSessie = null;

  function kaartOverzicht(app) {
    var ks = Store.kaartenStatistiek();
    var html = '<div class="kaart-overzicht">';
    if (ks.totaal === 0) {
      html += '<div class="callout info"><h4>In ontwikkeling</h4><p>De flashcards worden geschreven samen met de lessen.</p></div>';
    } else if (ks.actief === 0) {
      html += '<div class="callout info"><h4>Nog geen kaarten in je schema</h4>' +
        '<p>Rond een les af, dan doen de kaarten van die les mee. Wil je ze alvast bekijken? Dan kun je alle kaarten vrij oefenen, zonder dat dit je schema verandert.</p></div>';
    } else if (ks.vandaag === 0) {
      html += '<div class="callout kern"><h4>Klaar voor vandaag</h4><p>Alle kaarten die vandaag aan de beurt waren, heb je gehad. Kom morgen terug voor de volgende ronde.</p></div>';
    }
    html += '<div class="kaart-knoppen">';
    if (ks.vandaag > 0) html += '<button type="button" class="btn" data-kaart-start="dag">Start herhaling (' + Math.min(ks.vandaag, 20) + ' kaarten)</button>';
    if (ks.totaal > 0) html += '<button type="button" class="btn ghost" data-kaart-start="alles">Alle kaarten vrij oefenen</button>';
    html += '</div></div>';
    app.innerHTML = html;
  }

  function startKaarten(app, modus) {
    var kaarten = modus === 'dag' ? Store.kaartenVoorVandaag() : CURSUS.alleKaarten();
    kaarten = schud(kaarten).slice(0, modus === 'dag' ? 20 : 30);
    if (!kaarten.length) { kaartOverzicht(app); return; }
    kaartSessie = { modus: modus, wachtrij: kaarten, totaal: kaarten.length, goed: 0, fout: 0, huidig: null, opgedraaid: false };
    volgendeKaart(app);
  }

  function volgendeKaart(app) {
    var s = kaartSessie;
    if (!s.wachtrij.length) { klaarKaarten(app); return; }
    s.huidig = s.wachtrij.shift();
    s.opgedraaid = false;
    toonKaart(app);
  }

  function toonKaart(app) {
    var s = kaartSessie, k = s.huidig;
    var gedaan = s.totaal - s.wachtrij.length - 1;
    app.innerHTML = '<div class="kaart-sessie">' +
      '<div class="kaart-voortgang"><span>Kaart ' + Math.min(gedaan + 1, s.totaal) + ' van ' + s.totaal +
        ' · Module ' + k.module.nr + '</span><button type="button" class="kaart-stop" data-kaart-stop>Stoppen</button></div>' +
      '<div class="bar"><i style="width:' + Math.round(gedaan / s.totaal * 100) + '%"></i></div>' +
      '<div class="kaart' + (s.opgedraaid ? ' open' : '') + '">' +
        '<div class="kaart-voor">' + T(k.voor) + '</div>' +
        (s.opgedraaid ? '<div class="kaart-achter">' + T(k.achter) + '</div>' : '') +
      '</div>' +
      (s.opgedraaid
        ? '<div class="kaart-beoordeel"><button type="button" class="btn ghost" data-kaart-fout>Wist ik niet</button>' +
          '<button type="button" class="btn" data-kaart-goed>Wist ik</button></div>'
        : '<div class="kaart-beoordeel"><button type="button" class="btn" data-kaart-draai>Toon antwoord</button></div>') +
      '</div>';
  }

  function beoordeelKaart(app, goed) {
    var s = kaartSessie;
    if (!s || !s.huidig) return;
    var k = s.huidig;
    if (s.modus === 'dag') Store.beoordeelKaart(k.id, goed);
    if (goed) s.goed++;
    else {
      s.fout++;
      /* Een gemiste kaart komt in dezelfde sessie nog één keer terug, een paar kaarten verderop. */
      if (!k.herhaald) { k.herhaald = true; s.wachtrij.splice(Math.min(3, s.wachtrij.length), 0, k); s.totaal++; }
    }
    volgendeKaart(app);
  }

  function klaarKaarten(app) {
    var s = kaartSessie;
    var ks = Store.kaartenStatistiek();
    app.innerHTML = '<div class="callout kern"><h4>Sessie klaar</h4><p>Je hebt ' + s.goed + ' keer goed en ' + s.fout + ' keer fout beantwoord. ' +
      (s.modus === 'dag' ? 'Je schema is bijgewerkt: ' + (ks.vandaag === 0 ? 'je bent klaar voor vandaag.' : 'er staan nog ' + ks.vandaag + ' kaarten klaar.') : 'Dit was vrij oefenen, je schema is niet aangepast.') +
      '</p></div><div class="kaart-knoppen"><button type="button" class="btn ghost" data-kaart-terug>Terug naar het overzicht</button></div>';
    kaartSessie = null;
  }

  /* ============================== STORINGZOEKER ============================== */

  var casusSessie = null;

  function startCasus(app) {
    var c = CURSUS.casus(app.dataset.casus);
    if (!c) return;
    casusSessie = { casus: c, gedaan: [], fase: 'meten', gekozen: null };
    toonCasus(app);
  }

  /* Groepeert de acties per onderwerp (Water, Gas, Lucht, Elektra, Regeling, Vragen aan de klant, ...). */
  function actiesPerGroep(c) {
    var groepen = {}, volgorde = [];
    c.acties.forEach(function (a) {
      var g = a.groep || 'Overig';
      if (!groepen[g]) { groepen[g] = []; volgorde.push(g); }
      groepen[g].push(a);
    });
    return volgorde.map(function (g) { return { naam: g, acties: groepen[g] }; });
  }

  function toonCasus(app) {
    var s = casusSessie, c = s.casus;
    var html = '';

    if (s.fase === 'meten') {
      html += '<h2>Wat ga je doen?</h2>' +
        '<p class="qintro">Kies de controles en metingen die je nodig hebt om de oorzaak te vinden. Elke keuze toont het resultaat. ' +
        'Zoek gericht: overbodige metingen kosten punten.</p>';
      html += actiesPerGroep(c).map(function (g) {
        return '<div class="cgroep"><h3>' + E(g.naam) + '</h3><div class="cacties">' + g.acties.map(function (a) {
          var gedaan = s.gedaan.indexOf(a.id) !== -1;
          return '<button type="button" class="cactie' + (gedaan ? ' gedaan' : '') + '" data-cactie="' + E(a.id) + '"' + (gedaan ? ' disabled' : '') + '>' + T(a.tekst) + '</button>';
        }).join('') + '</div></div>';
      }).join('');

      if (s.gedaan.length) {
        html += '<h2>Wat je hebt vastgesteld</h2><div class="clog">' + s.gedaan.map(function (id) {
          var a = c.acties.find(function (x) { return x.id === id; });
          return '<div class="clog-rij"><div class="clog-actie">' + T(a.tekst) + '</div><div class="clog-res">' + T(a.resultaat) + '</div></div>';
        }).join('') + '</div>';
        html += '<div class="cgo"><button type="button" class="btn" data-cdiagnose>Ik ken de oorzaak: stel mijn diagnose</button></div>';
      }
    } else if (s.fase === 'diagnose') {
      html += '<h2>Wat is de oorzaak?</h2><p class="qintro">Op basis van wat je hebt gemeten: wat is de meest waarschijnlijke oorzaak van de klacht?</p>' +
        '<div class="vopts">' + c.oorzaken.map(function (o, j) {
          return '<button type="button" class="qopt" data-coorzaak="' + j + '"><span class="letter">' + LETTERS[j] + '</span><span>' + T(o.tekst) + '</span></button>';
        }).join('') + '</div>' +
        '<div class="cgo"><button type="button" class="btn ghost sm" data-cterug-meten>Terug naar de metingen</button></div>';
    } else if (s.fase === 'uitslag') {
      html += uitslagCasus(c, s);
    }

    app.innerHTML = html;
  }

  /* Score: 60 punten voor de juiste oorzaak, 30 voor de essentiële controles, 10 voor efficiëntie. */
  function uitslagCasus(c, s) {
    var oorzaak = c.oorzaken[s.gekozen];
    var goed = !!oorzaak.goed;
    var essentieel = c.acties.filter(function (a) { return a.essentieel; });
    var gedaanEss = essentieel.filter(function (a) { return s.gedaan.indexOf(a.id) !== -1; });
    var overbodig = s.gedaan.filter(function (id) {
      var a = c.acties.find(function (x) { return x.id === id; });
      return !a.essentieel && !a.nuttig;
    });
    var pEss = essentieel.length ? Math.round(30 * gedaanEss.length / essentieel.length) : 30;
    var pEff = Math.max(0, 10 - 3 * overbodig.length);
    var score = (goed ? 60 : 0) + pEss + pEff;
    Store.zetCasus(c.id, score, goed);

    var gemist = essentieel.filter(function (a) { return s.gedaan.indexOf(a.id) === -1; });
    var html = '<div class="quiz-uitslag ' + (goed ? 'juist' : 'onjuist') + '" style="display:block">' +
      '<div class="score"><b>' + score + ' van 100 punten</b></div>' +
      '<p>' + (goed ? 'Je diagnose klopt.' : 'Je diagnose klopt niet.') + ' ' + T(oorzaak.uitleg || '') + '</p>' +
      '<ul class="cscore"><li>Diagnose: ' + (goed ? 60 : 0) + ' van 60</li>' +
      '<li>Essentiële controles: ' + gedaanEss.length + ' van ' + essentieel.length + ' gedaan (' + pEss + ' van 30)</li>' +
      '<li>Efficiëntie: ' + overbodig.length + ' overbodige ' + (overbodig.length === 1 ? 'controle' : 'controles') + ' (' + pEff + ' van 10)</li></ul></div>';

    if (!goed) {
      var juiste = c.oorzaken.find(function (o) { return o.goed; });
      html += '<div class="callout kern"><h4>De werkelijke oorzaak</h4><p>' + T(juiste.tekst) + '</p><p>' + T(juiste.uitleg || '') + '</p></div>';
    }
    if (gemist.length) {
      html += '<div class="callout info"><h4>Controles die je nog miste</h4><ul>' + gemist.map(function (a) {
        return '<li><b>' + T(a.tekst) + '</b>: ' + T(a.resultaat) + '</li>';
      }).join('') + '</ul></div>';
    }
    html += '<h2>Hoe een topmonteur dit aanpakt</h2>' + MD.render(c.oplossing || '').html;
    if (c.veiligheid) html += '<div class="callout gevaar"><h4>Veiligheid</h4><p>' + T(c.veiligheid) + '</p></div>';
    if (c.leerpunten && c.leerpunten.length) {
      html += '<div class="callout kern"><h4>Wat je hieruit meeneemt</h4><ul>' + c.leerpunten.map(function (p) { return '<li>' + T(p) + '</li>'; }).join('') + '</ul></div>';
    }
    html += '<div class="cgo"><button type="button" class="btn ghost" data-copnieuw>Casus opnieuw doen</button> ' +
      '<a class="btn ghost" href="' + Seo.path('storingzoeker') + '">Alle casussen</a></div>';
    return html;
  }

  /* ================================ EVENTS ================================ */

  /* Eén gedelegeerde luisteraar voor alles: werkt na elke route-wissel zonder opnieuw koppelen. */
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target : e.target.parentNode;
    if (!el || !el.closest) return;

    var opt = el.closest('.qopt[data-o]');
    if (opt) {
      var vraagEl = opt.closest('.vraag'), quizEl = opt.closest('.quiz');
      if (vraagEl && quizEl) beantwoord(vraagEl, quizEl, parseInt(opt.dataset.o, 10));
      return;
    }
    var opnieuw = el.closest('[data-quiz-opnieuw]');
    if (opnieuw) { quizOpnieuw(opnieuw.closest('.quiz')); return; }
    var exStart = el.closest('[data-examen-start]');
    if (exStart) { startExamen(exStart.closest('[data-examen]')); return; }

    /* flashcards */
    var app = document.getElementById('kaartApp');
    if (app) {
      var st = el.closest('[data-kaart-start]');
      if (st) { startKaarten(app, st.dataset.kaartStart); return; }
      if (el.closest('[data-kaart-draai]')) { kaartSessie.opgedraaid = true; toonKaart(app); return; }
      if (el.closest('[data-kaart-goed]')) { beoordeelKaart(app, true); return; }
      if (el.closest('[data-kaart-fout]')) { beoordeelKaart(app, false); return; }
      if (el.closest('[data-kaart-stop]') || el.closest('[data-kaart-terug]')) { kaartSessie = null; kaartOverzicht(app); return; }
    }

    /* storingzoeker */
    var capp = document.querySelector('.casus-app');
    if (capp && casusSessie) {
      var ca = el.closest('[data-cactie]');
      if (ca) { casusSessie.gedaan.push(ca.dataset.cactie); toonCasus(capp); return; }
      if (el.closest('[data-cdiagnose]')) { casusSessie.fase = 'diagnose'; toonCasus(capp); return; }
      if (el.closest('[data-cterug-meten]')) { casusSessie.fase = 'meten'; toonCasus(capp); return; }
      var co = el.closest('[data-coorzaak]');
      if (co) { casusSessie.gekozen = parseInt(co.dataset.coorzaak, 10); casusSessie.fase = 'uitslag'; toonCasus(capp); return; }
      if (el.closest('[data-copnieuw]')) { startCasus(capp); capp.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    }
  });

  /* Wordt door app.js aangeroepen na elke route-wissel. */
  function koppel(route) {
    kaartSessie = null;
    casusSessie = null;
    if (route.page === 'kaarten') {
      var app = document.getElementById('kaartApp');
      if (app) kaartOverzicht(app);
    }
    if (route.page === 'casus') {
      var capp = document.querySelector('.casus-app');
      if (capp) startCasus(capp);
    }
  }

  return { koppel: koppel };
})();
