const CACHE = 'letterblitz-v4';
// Use relative paths — works on any host (localhost, GitHub Pages, etc.)
const ASSETS = [
  './',
  './index.html',
  './css/game.css',
  './js/game.js',
  './assets/bgm.mp3',
  './manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Word API — network only, no cache
  if (url.hostname.includes('vercel.app') || url.hostname.includes('datamuse') || url.hostname.includes('herokuapp.com') || url.hostname.includes('dictionaryapi.dev')) {
    e.respondWith(fetch(e.request).catch(() => new Response('[]')));
    return;
  }

  // Google Fonts — network first, cache fallback
  if (url.hostname.includes('googleapis') || url.hostname.includes('gstatic')) {
    e.respondWith(
      fetch(e.request)
        .then(res => { caches.open(CACHE).then(c => c.put(e.request, res.clone())); return res; })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Everything else — cache first, network fallback, update cache in background
  e.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(e.request).then(cached => {
        const fetched = fetch(e.request).then(res => {
          if (res && res.ok) cache.put(e.request, res.clone());
          return res;
        }).catch(() => null);
        return cached || fetched;
      })
    )
  );
});
