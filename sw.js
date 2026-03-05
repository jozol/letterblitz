const CACHE = 'letterblitz-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/css/game.css',
  '/js/audio.js',
  '/js/asteroids.js',
  '/js/game.js',
  '/assets/bgm.mp3',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&family=Space+Grotesk:wght@400;600;700&family=DM+Sans:wght@300;400;600&display=swap'
];

// Install: cache all core assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

// Activate: delete old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: cache-first for assets, network-first for API calls
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // API word fetches — network first, no cache
  if (url.hostname === 'api.datamuse.com') {
    e.respondWith(fetch(e.request).catch(() => new Response('[]')));
    return;
  }

  // Everything else — cache first, fall back to network, update cache in background
  e.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(e.request).then(cached => {
        const fetched = fetch(e.request).then(res => {
          if (res.ok) cache.put(e.request, res.clone());
          return res;
        }).catch(() => cached);
        return cached || fetched;
      })
    )
  );
});
