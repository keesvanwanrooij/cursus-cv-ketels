/* ==========================================================================
   laad.js - laadt de app-code (content, store, seo, views) in een Node-sandbox,
   zodat build-seo.js, check.js en curriculum.js dezelfde echte code draaien
   als de browser. Geen dependencies.
   ========================================================================== */

var fs = require('fs');
var path = require('path');
var vm = require('vm');

/* De contentbestanden in laadvolgorde: index.js eerst, dan m01.js ... mNN.js, naslag.js, storingen.js. */
function contentBestanden(ROOT) {
  var dir = path.join(ROOT, 'content');
  var alle = fs.readdirSync(dir);
  var modules = alle.filter(function (f) { return /^m\d+\.js$/.test(f); }).sort();
  var vast = ['index.js'].concat(modules);
  ['naslag.js', 'storingen.js'].forEach(function (f) { if (alle.indexOf(f) !== -1) vast.push(f); });
  return vast;
}

function laadCursus(ROOT) {
  var ctx = {
    console: console,
    localStorage: { getItem: function () { return null; }, setItem: function () {} },
    document: { documentElement: { dataset: {} } }
  };
  ctx.window = ctx;
  vm.createContext(ctx);

  function laad(bestand) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, bestand), 'utf8'), ctx, { filename: bestand });
  }

  laad('js/markdown.js');
  contentBestanden(ROOT).forEach(function (f) { laad('content/' + f); });
  laad('js/store.js');
  laad('js/seo.js');
  laad('js/views.js');
  return ctx;
}

module.exports = { laadCursus: laadCursus, contentBestanden: contentBestanden };
