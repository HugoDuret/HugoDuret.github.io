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