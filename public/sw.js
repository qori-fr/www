// No-op service worker to avoid 404s from browser/extensions requesting /sw.js
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
