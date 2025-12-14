self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('axp-cache-v1').then(cache => {
      return cache.addAll([
        './',
        './AXP_Inventor_Compilation_PRESERVED_v20.html'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
