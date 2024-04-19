/*
 * ServiceWorker to make site function as a PWA (Progressive Web App)
 *
 * Based on https://glitch.com/~pwa by https://glitch.com/@PaulKinlan
 */

// Specify what we want added to the cache for offline use
self.addEventListener("install", e => {
  e.waitUntil(
    // Give the cache a name
    caches.open("glitch-in-bio-pwa").then(cache => {
      // Cache the homepage and stylesheets - add any assets you want to cache!
      return cache.addAll([
        "/", 
        "/styles/style.css",
        "/styles/themes/glitch.css",
        "/styles/themes/gallery.css",
        "/styles/themes/menu.css",
        "/styles/themes/custom-theme.css",
        "/styles/themes/dusky-lory-2.css",
        "/fonts/grotesquemt.woff",
        "/fonts/grotesquemt.woff2",
        "/fonts/ln-notec.woff",
        "/fonts/ln-notec.woff2",
        "/fonts/metro-nova.woff",
        "/fonts/metro-nova.woff2",
        "/fonts/open-sans.ttf"
      ]);
    })
  );
});

// Network falling back to cache approach
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});
