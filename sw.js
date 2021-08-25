/*
 * ServiceWorker to make site function as a PWA (Progressive Web App)
 *
 * Based on https://glitch.com/~pwa by https://glitch.com/@PaulKinlan
 */

// Specify what we want added to the cache for offline use
self.addEventListener("install", e => {
  e.waitUntil(
    // Give the cache a name
    caches.open("hello-links-pwa").then(cache => {
      // Add the homepage and stylesheet
      return cache.addAll([
        "/", 
        "/styles/style.css",
        "/styles/themes/glitch.css",
        "/styles/themes/gallery.css"
      ]);
    })
  );
});

// Network falling back to cache approach - we only cache the home route
// https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker
/*
self.addEventListener("fetch", event => {
  event.respondWith(
    // Try fetching from network
    fetch(event.request).then(response => {
      console.log(response.url)
      return response;
    }).catch(() => {
      // Request failed - maybe we're offline - return cache
      return caches.match(event.request);
    })
  );
});
*/
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});