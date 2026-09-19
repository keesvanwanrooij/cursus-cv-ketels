#!/usr/bin/env node
/* ==========================================================================
   dev.js - lokale ontwikkelserver met automatisch herbouwen
   Bouwt de site naar .dev/ (met basis '/'), serveert die op http://localhost:8124/
   en bouwt opnieuw zodra je iets wijzigt in content/, js/, css/ of index.html.
   Ververs daarna de browser. Geen dependencies.

   Gebruik:   node tools/dev.js [poort]
   ========================================================================== */

var http = require('http');
var fs = require('fs');
var path = require('path');
var cp = require('child_process');

var ROOT = path.resolve(__dirname, '..');
var DEV = path.join(ROOT, '.dev');
var POORT = parseInt(process.argv[2], 10) || 8124;

var MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.png': 'image/png', '.svg': 'image/svg+xml', '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8', '.ico': 'image/x-icon'
};

function bouw() {
  var r = cp.spawnSync(process.execPath, [path.join(__dirname, 'build-seo.js'), '--out=' + DEV, '--base=/', '--site=http://localhost:' + POORT],
    { cwd: ROOT, encoding: 'utf8' });
  var uit = (r.stdout || '') + (r.stderr || '');
  console.log(new Date().toLocaleTimeString('nl-NL') + '  ' + (r.status === 0 ? 'gebouwd' : 'BOUW MISLUKT') + '\n' +
    uit.split('\n').filter(function (l) { return /FOUT|waarschuwing|Klaar|afgebroken|Error/.test(l); }).join('\n'));
}

bouw();

var timer = null;
['content', 'js', 'css', 'tools'].forEach(function (d) {
  fs.watch(path.join(ROOT, d), { recursive: true }, function () { clearTimeout(timer); timer = setTimeout(bouw, 300); });
});
fs.watch(path.join(ROOT, 'index.html'), function () { clearTimeout(timer); timer = setTimeout(bouw, 300); });

http.createServer(function (req, res) {
  var url = decodeURIComponent(req.url.split('?')[0]);
  /* In ontwikkeling geen offline-cache: een service worker toont anders oude inhoud na een wijziging.
     Deze worker ruimt zichzelf en alle caches op, ook als een eerdere versie al was geregistreerd. */
  if (/service-worker\.js$/.test(url)) {
    res.writeHead(200, { 'Content-Type': MIME['.js'], 'Cache-Control': 'no-store' });
    return res.end("self.addEventListener('install', function () { self.skipWaiting(); });\n" +
      "self.addEventListener('activate', function (e) { e.waitUntil(caches.keys().then(function (k) { return Promise.all(k.map(function (c) { return caches.delete(c); })); })" +
      ".then(function () { return self.registration.unregister(); })); });\n");
  }
  var p = path.join(DEV, url);
  if (p.indexOf(DEV) !== 0) { res.writeHead(403); return res.end(); }
  if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, 'index.html');
  if (!fs.existsSync(p)) {
    res.writeHead(404, { 'Content-Type': MIME['.html'] });
    return res.end(fs.existsSync(path.join(DEV, '404.html')) ? fs.readFileSync(path.join(DEV, '404.html')) : 'Niet gevonden');
  }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(p)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
  fs.createReadStream(p).pipe(res);
}).listen(POORT, function () {
  console.log('Cursus draait op http://localhost:' + POORT + '/  (wijzigingen worden automatisch herbouwd)');
});
