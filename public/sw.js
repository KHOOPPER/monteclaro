self.addEventListener('install', event => {
  console.log('Service Worker instalado');
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/favicon.ico',
        '/manifest.json',
        '/icons/icon-192.png',
        '/icons/icon-512.png'
        // Puedes agregar más archivos aquí si deseas cachearlos
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
