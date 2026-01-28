// static/sw.js

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  self.clients.claim();
});

// No fetch handler — nothing is cached or intercepted
