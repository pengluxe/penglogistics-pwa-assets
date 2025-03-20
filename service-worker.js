const CACHE_NAME = 'peng-logistics-cache-v1';
const urlsToCache = [
  '/',
  '/manifest.json',
  '/css/app-styles.css',
  '/js/app-main.js'
  // Add other assets as needed
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
