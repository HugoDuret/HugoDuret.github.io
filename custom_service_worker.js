// from chatgpt
self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'Default Title';
  const options = {
    body: data.body || 'Default message body',
    icon: 'icons/icon-192x192.png',
  };
  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});


// from medium
const cacheName = "flutter-app-cache-v1";
const assetsToCache = [
  "/",
  "/index.html",
  "/icons/Icon-192.png",
  "/icons/Icon-512.png",
];

self.addEventListener("install", (event) => {
  self.skipWaiting(); // skip waiting
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});