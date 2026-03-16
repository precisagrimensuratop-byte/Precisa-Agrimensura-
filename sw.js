const CACHE = 'vidaapp-v1';
const ASSETS = ['./index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(() => {})));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks =>
    Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).catch(() => r)));
});

// Receive alarm from main thread and show notification
self.addEventListener('message', e => {
  if (e.data?.type === 'ALARM') {
    self.registration.showNotification('⏰ ' + e.data.title, {
      body: e.data.body || '',
      icon: './icon-192.png',
      badge: './icon-96.png',
      tag: e.data.id,
      requireInteraction: true,
      vibrate: [300, 100, 300, 100, 300],
      actions: [
        { action: 'ok',     title: '✓ Feito'    },
        { action: 'snooze', title: '⏰ +10 min' }
      ]
    });
  }
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window' }).then(cs => {
      if (cs.length) return cs[0].focus();
      return clients.openWindow('./');
    })
  );
});
