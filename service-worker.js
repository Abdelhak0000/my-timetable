const CACHE_NAME = "schedule-cache-v1";
const urlsToCache = [
  "./index.html",
  "./manifest.json",
  "./icon.jpg"
];

// تثبيت الكاش
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// جلب الملفات من الكاش أو الإنترنت
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});