let deferredPrompt;

self.addEventListener('beforeinstallprompt', (e) => {
  try {
    console.log("addEventListener('beforeinstallprompt");
    e.preventDefault(); // Prevent the automatic showing of the install prompt
    deferredPrompt = e; // Store the event so it can be triggered later
  } catch (err) {
    console.error("Error in beforeinstallprompt handler:", err);
  }
});

self.addEventListener('install', (event) => {
  try {
    console.log("addEventListener('install");
    self.skipWaiting(); // Force the service worker to activate immediately
  } catch (err) {
    console.error("Error in install handler:", err);
  }
});

self.addEventListener('activate', (event) => {
  try {
    console.log("addEventListener('activate");
    event.waitUntil(self.clients.claim()); // Take control of all the open clients
  } catch (err) {
    console.error("Error in activate handler:", err);
  }
});


self.addEventListener('sync', (event) => {
  console.log("in addEventListener sync", event);
  try {
    if (event.tag === 'sync-data') {
      event.waitUntil(
        self.registration.showNotification('sync-data')
      );
    }
  } catch (err) {
    console.error("Error in sync handler:", err);
  }
});

self.addEventListener('push', event => {
  console.log("in addEventListener push", event);
  const data = event.data ? event.data.json() : {};
  const options = {
    body: data.body || 'Default push notification body',
    icon: '/icons/icon-192.png',
    badge: '/icons/icon-192.png',
  };
  event.waitUntil(
    self.registration.showNotification(data.title || 'Notification', options)
  );
});