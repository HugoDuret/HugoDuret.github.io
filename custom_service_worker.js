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

self.addEventListener('push', (event) => {
  try {
    console.log("addEventListener('push");
    const options = {
      body: event.data.text(),
      icon: '/icons/icon-192.png',
      badge: '/icons/icon-192.png',
    };

    event.waitUntil(
      self.registration.showNotification('Daily Notification', options)
        .catch((err) => {
          console.log("Could not show notification, scheduled for the next time", err);
        })
    );
  } catch (err) {
    console.error("Error in push handler:", err);
  }
});

self.addEventListener('activate', (event) => {
  try {
    console.log("addEventListener('activate'");
    if (self.registration.showNotification && isAndroid()) {
      const channel = new NotificationChannel('daily-notifications', {
        'name': 'Daily Notifications',
        'description': 'Notifications for the daily reminder at 6 PM',
        'priority': 'default',
      });

      self.registration.showNotification('Notification Channel Created', {
        'body': 'Notification channel has been created successfully!',
        'icon': '/icons/icon-192.png',
      });
    }
  } catch (err) {
    console.error("Error in second activate handler:", err);
  }
});

self.addEventListener('sync', (event) => {
  try {
    console.log("addEventListener('sync'", event);
    if (event.tag === 'daily-notification') {
      if (deferredPrompt) {
        try {
          deferredPrompt.prompt();
          deferredPrompt = null; // Clear the deferred prompt
        } catch (err) {
          console.error("Error during prompt:", err);
        }
      }

      event.waitUntil(showNotification()
        .catch((err) => {
          console.log("Could not sync, scheduled for the next time", err);
        })
      );
    }
  } catch (err) {
    console.error("Error in sync handler:", err);
  }
});

function showNotification() {
  try {
    console.log("in showNotification", self.registration);
    return self.registration.showNotification('Scheduled Notification', {
      body: 'This is your daily notification at 6 PM!',
      icon: '/icons/icon-192.png',
      badge: '/icons/icon-192.png',
    });
  } catch (err) {
    console.error("Error in showNotification:", err);
  }
}

function isAndroid() {
  try {
    // Check if the user agent indicates an Android device
    return /Android/i.test(self.navigator.userAgent);
  } catch (err) {
    console.error("Error in isAndroid check:", err);
  }
}
