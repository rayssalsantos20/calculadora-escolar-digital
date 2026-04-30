const CACHE_NAME = "calculadora-escolar-v10";

const urlsToCache = [

"./",
"./index.html",
"./style.css",
"./script.js",
"./manifest.json",
"./icon-192.png",
"./icon-512.png"

];


self.addEventListener("install", event => {

self.skipWaiting();

event.waitUntil(

caches.open(CACHE_NAME)

.then(cache => {

return cache.addAll(urlsToCache);

})

);

});


self.addEventListener("activate", event => {

event.waitUntil(

caches.keys().then(keys => {

return Promise.all(

keys.filter(key => key !== CACHE_NAME)

.map(key => caches.delete(key))

);

})

);

});


self.addEventListener("fetch", event => {

event.respondWith(

fetch(event.request)

.catch(() => caches.match(event.request))

);

});
