let deferredPrompt;

self.addEventListener('beforeinstallprompt', (e) => {
  console.log("addEventListener('beforeinstallprompt");
  // Prevent the automatic showing of the install prompt
  e.preventDefault();
  // Store the event so it can be triggered later
  deferredPrompt = e;
});

self.addEventListener('install', event => {
  console.log("addEventListener('install");
  self.skipWaiting(); // Force the service worker to activate immediately
});

self.addEventListener('activate', event => {
  console.log("addEventListener('activate");
  event.waitUntil(self.clients.claim())
  .catch(function(err){
    console.log("Could not activate, self.clients.claim ", err);
  }); // Take control of all the open clients
});

// This handles notifications that are triggered by background sync
self.addEventListener('push', function(event) {
  console.log("addEventListener('push");
  const options = {
    body: event.data.text(),
    icon: '/icons/icon-192.png',
    badge: '/icons/icon-192.png',
  };

  event.waitUntil(
    self.registration.showNotification('Daily Notification', options)
  )
  .catch(function(err){
    console.log("Could not sync, scheduled for the next time", err);
  });
});

self.addEventListener('activate', function(event) {
  console.log("addEventListener('activate'");
  if (self.registration.showNotification && isAndroid()) {
    const channel = new NotificationChannel('daily-notifications', {
      'name': 'Daily Notifications',
      'description': 'Notifications for the daily reminder at 6 PM',
      'priority': 'default'
    });

    self.registration.showNotification('Notification Channel Created', {
      'body': 'Notification channel has been created successfully!',
      'icon': '/icons/icon-192.png'
    });
  }
});

// This can be used for background sync
self.addEventListener('sync', function(event) {
  console.log("addEventListener('sync'");
  if (event.tag === 'daily-notification') {
    deferredPrompt.prompt();
    deferredPrompt = null; // Clear the deferred prompt
    event
    .waitUntil(showNotification())
    .catch(function(err){
      console.log("Could not sync, scheduled for the next time", err);
    });
  }
});

function showNotification() {
  return self.registration.showNotification('Scheduled Notification', {
    body: 'This is your daily notification at 6 PM!',
    icon: '/icons/icon-192.png',
    badge: '/icons/icon-192.png',
  });
}

function isAndroid() {
  // Check if the user agent indicates an Android device
  return /Android/i.test(self.navigator.userAgent);
}