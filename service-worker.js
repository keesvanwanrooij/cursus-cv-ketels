/* ==========================================================================
   service-worker.js - maakt de cursus offline leesbaar als installeerbare app
   Wordt alleen geregistreerd als de site via http(s) draait, zie js/app.js.
   Video's blijven internet nodig hebben; tekst, toetsen, flashcards, navigatie
   en voortgang niet.

   De lijst APP_SHELL en de cacheversie hieronder worden door tools/build-seo.js
   bijgewerkt (nieuw contentbestand of gewijzigde inhoud geeft een nieuwe versie).
   Niet met de hand aanpassen tussen de build-markers.
   ========================================================================== */

/* build:cache:start */
var CACHE_NAAM = 'cursus-cv-c7a1b55e';
/* build:cache:end */

/* build:shell:start */
var APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './css/theme.css',
  './js/app.js',
  './js/markdown.js',
  './js/oefenen.js',
  './js/seo.js',
  './js/store.js',
  './js/views.js',
  './content/index.js',
  './content/m01.js',
  './content/m02.js',
  './content/m03.js',
  './content/m04.js',
  './content/m05.js',
  './content/m06.js',
  './content/m07.js',
  './content/m08.js',
  './content/m09.js',
  './content/m10.js',
  './content/m11.js',
  './content/m12.js',
  './content/m13.js',
  './content/m14.js',
  './content/m15.js',
  './content/m16.js',
  './content/m17.js',
  './content/m18.js',
  './content/m19.js',
  './content/naslag.js',
  './content/storingen.js',
  './icons/icon-192.png',
  './icons/icon-512.png'
];
/* build:shell:end */

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAAM)
      .then(function (cache) { return cache.addAll(APP_SHELL); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (namen) {
      return Promise.all(
        namen.filter(function (n) { return n.indexOf('cursus-cv-') === 0 && n !== CACHE_NAAM; })
             .map(function (n) { return caches.delete(n); })
      );
    }).then(function () { return self.clients.claim(); })
  );
});

/* Stale-while-revalidate voor de eigen bestanden: toon direct de cache,
   ververs op de achtergrond zodat een volgend bezoek de update heeft.
   Cross-origin verzoeken (YouTube) raakt deze worker niet, want die lopen
   via het iframe van de video-pagina, niet via deze pagina.
   Let op: alleen caches met het voorvoegsel 'cursus-cv-' worden hier opgeruimd,
   want de zuster-cursus draait op dezelfde origin met eigen caches. */
self.addEventListener('fetch', function (event) {
  var url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.open(CACHE_NAAM).then(function (cache) {
      return cache.match(event.request).then(function (gecached) {
        var netwerkFetch = fetch(event.request).then(function (respons) {
          if (respons && respons.status === 200) cache.put(event.request, respons.clone());
          return respons;
        }).catch(function () {
          if (gecached) return gecached;
          /* Offline op een les-, module- of oefenpagina die nog niet is bezocht: de app-shell
             toont dezelfde inhoud, want alle lesteksten zitten in de vooraf opgeslagen scripts. */
          if (event.request.mode === 'navigate') return cache.match('./index.html');
          return undefined;
        });
        return gecached || netwerkFetch;
      });
    })
  );
});
