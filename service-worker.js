const CACHE_NAME = "quran-audio-cache-v1";
const urlsToCache = [
    "index.html",
    "styles.css",
    "script.js",
    "audios/Coran-Francais-juz-1.mp3",
    "audios/Coran-Francais-juz-2.mp3"
];

// Installer le Service Worker et mettre en cache les fichiers
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Intercepter les requêtes et charger en cache si hors ligne
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
