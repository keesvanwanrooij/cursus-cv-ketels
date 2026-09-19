#!/usr/bin/env node
/* ==========================================================================
   check-videos.js - controleert alle ingesloten YouTube-video's via oEmbed.
   Een video is bruikbaar als hij bestaat, openbaar is en ingesloten mag worden.
   Toont ook titel en kanaal, zodat je kunt beoordelen of het de juiste video is.

   Gebruik:   node tools/check-videos.js
   Vereist internet. Geen dependencies (Node 18+ met ingebouwde fetch).
   ========================================================================== */

var path = require('path');
var laadCursus = require('./laad.js').laadCursus;

var ctx = laadCursus(path.resolve(__dirname, '..'));
var lijst = [];
ctx.CURSUS.alleLessen().forEach(function (x) {
  (x.les.videos || []).forEach(function (v) { if (v.yt) lijst.push({ les: x.les.nr, titel: v.titel, yt: v.yt }); });
});

(async function () {
  if (!lijst.length) { console.log('Geen ingesloten video\'s in de content (alleen zoekkaarten).'); return; }
  var kapot = 0;
  for (var i = 0; i < lijst.length; i++) {
    var v = lijst[i];
    var url = 'https://www.youtube.com/oembed?format=json&url=' + encodeURIComponent('https://www.youtube.com/watch?v=' + v.yt);
    try {
      var r = await fetch(url);
      if (r.status === 200) {
        var j = await r.json();
        console.log('OK    les ' + v.les + '  ' + v.yt + '  "' + j.title + '" (' + j.author_name + ')' + (j.title.toLowerCase().indexOf(v.titel.toLowerCase().slice(0, 12)) === -1 ? '   <- titel in de les wijkt af: "' + v.titel + '"' : ''));
      } else {
        kapot++;
        console.log('FOUT  les ' + v.les + '  ' + v.yt + '  status ' + r.status + ' (verwijderd, privé of niet insluitbaar)');
      }
    } catch (e) {
      kapot++;
      console.log('FOUT  les ' + v.les + '  ' + v.yt + '  ' + e.message);
    }
  }
  console.log('\n' + lijst.length + ' video\'s gecontroleerd, ' + kapot + ' niet in orde.');
  process.exit(kapot ? 1 : 0);
})();
