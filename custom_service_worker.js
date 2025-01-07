self.addEventListener('install', event => {
  self.skipWaiting(); // Force the service worker to activate immediately
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim()); // Take control of all the open clients
});

// This handles notifications that are triggered by background sync
self.addEventListener('push', function(event) {
  const options = {
    body: event.data.text(),
    icon: '/icons/icon-192.png',
    badge: '/icons/icon-192.png',
  };

  event.waitUntil(
    self.registration.showNotification('Daily Notification', options)
  );
});

self.addEventListener('activate', function(event) {
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
  if (event.tag === 'daily-notification') {
    event.waitUntil(showNotification());
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