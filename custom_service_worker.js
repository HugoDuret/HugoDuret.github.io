self.addEventListener('push', function(event) {
  const options = {
    body: event.data ? event.data.text() : 'New Notification',
    icon: '/icons/icon-192.png',
  };
  event.waitUntil(self.registration.showNotification('Notification Title', options));
});


setTimeout(() => {
  const options = {
    body: 'New Notification',
    icon: '/icons/icon-192.png',
  };
  self.registration.showNotification('Notification Title', options);
}, 5000)


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