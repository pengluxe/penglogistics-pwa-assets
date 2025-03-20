const CACHE_NAME = 'peng-logistics-cache-v2'; // Increment version on changes
const urlsToCache = [
  '/',
  '/manifest.json',
  '/css/app-styles.css',
  '/js/app-main.js',
  // Include any additional assets like images if needed
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(() => {
        // Optionally, return a fallback page/image if offline and asset not cached.
      })
  );
});
