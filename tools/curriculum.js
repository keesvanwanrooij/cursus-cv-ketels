#!/usr/bin/env node
/* ==========================================================================
   curriculum.js - schrijft project/docs/01-CURRICULUM.md uit de content.
   De content in content/mNN.js is de enige bron van waarheid; dit document
   wordt altijd daaruit gegenereerd en dus nooit met de hand bijgewerkt.

   Gebruik:   node tools/curriculum.js
   ========================================================================== */

var fs = require('fs');
var path = require('path');
var laadCursus = require('./laad.js').laadCursus;

var ROOT = path.resolve(__dirname, '..');
var ctx = laadCursus(ROOT);
var CURSUS = ctx.CURSUS;
var A = CURSUS.aantallen();

var uit = [];
uit.push('# Curriculum');
uit.push('');
uit.push('Gegenereerd uit `content/` met `node tools/curriculum.js` op ' + new Date().toISOString().slice(0, 10) + '. Niet met de hand aanpassen: pas de content aan en draai het script opnieuw.');
uit.push('');
uit.push('**' + A.modules + ' modules, ' + A.lessen + ' lessen (' + A.lessenKlaar + ' geschreven), ongeveer ' + A.uren + ' uur studietijd.** ' +
  'Legenda: `[x]` geschreven en gecontroleerd, `[ ]` gepland.');
uit.push('');

[1, 2].forEach(function (d) {
  uit.push('## ' + CURSUS.delen[d].titel);
  uit.push('');
  uit.push('_' + CURSUS.delen[d].sub + '_');
  uit.push('');
  CURSUS.modules.filter(function (m) { return m.deel === d; }).forEach(function (m) {
    var klaar = CURSUS.lessenVan(m).length;
    uit.push('### Module ' + m.nr + ': ' + m.titel + (m.kritiek ? '  (veiligheidskritisch)' : ''));
    uit.push('');
    uit.push('Niveau ' + m.niveau + ', ongeveer ' + m.studietijd + ' uur, ' + klaar + ' van ' + m.lessen.length + ' lessen geschreven' +
      (m.examen && m.examen.length ? ', module-examen met ' + m.examen.length + ' vragen' : ', module-examen nog te schrijven') + '.');
    uit.push('');
    uit.push(m.intro);
    uit.push('');
    uit.push('| | Les | Duur | Leerdoel |');
    uit.push('|---|---|---|---|');
    m.lessen.forEach(function (l) {
      var extra = l.status === 'gepland' ? '' : ' (' + (l.quiz || []).length + ' vragen, ' + (l.kaarten || []).length + ' kaarten)';
      uit.push('| ' + (l.status === 'gepland' ? '[ ]' : '[x]') + ' | ' + l.nr + ' ' + l.titel + extra + ' | ' + l.duur + ' min | ' + l.leerdoel + ' |');
    });
    uit.push('');
  });
});

if (CURSUS.casussen.length) {
  uit.push('## Storingzoeker-casussen');
  uit.push('');
  uit.push('| Casus | Niveau | Duur | Klacht |');
  uit.push('|---|---|---|---|');
  CURSUS.casussen.forEach(function (c) { uit.push('| ' + c.id + ' ' + c.titel + ' | ' + c.niveau + ' | ' + c.duur + ' min | ' + c.klacht + ' |'); });
  uit.push('');
}

var doel = path.join(ROOT, 'project', 'docs', '01-CURRICULUM.md');
fs.mkdirSync(path.dirname(doel), { recursive: true });
fs.writeFileSync(doel, uit.join('\n') + '\n', 'utf8');
console.log('geschreven: project/docs/01-CURRICULUM.md (' + A.modules + ' modules, ' + A.lessen + ' lessen)');
