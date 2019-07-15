self.addEventListener('install', async () => {
  await self.skipWaiting();
});
  
self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});