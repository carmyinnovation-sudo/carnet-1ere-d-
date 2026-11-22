/* Carnet de révisions 1ère D : met l'appli en cache pour qu'elle s'ouvre même sans internet.
   Les données (Supabase) ne passent jamais par ce cache.
   Le carnet de bac vit sur le même site : on ne touche qu'aux caches qui commencent par « c1d- ». */
const CACHE = "c1d-v2";
const FICHIERS = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png", "./favicon.png"];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FICHIERS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((cles) => Promise.all(cles.filter((k) => k.startsWith("c1d-") && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (!url.pathname.startsWith(new URL(self.registration.scope).pathname)) return;
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then((r) => {
      if (r.ok) { const copie = r.clone(); caches.open(CACHE).then((c) => c.put("./index.html", copie)); }
      return r;
    }).catch(() => caches.match("./index.html")));
    return;
  }
  e.respondWith(caches.match(req).then((m) => m || fetch(req)));
});
