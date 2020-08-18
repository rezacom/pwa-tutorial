// install service worker
self.addEventListener('install', event => {
    console.log('srvice worker installed');
})


// activate service worker
self.addEventListener('activate', event => {
    console.log('activate service worker')
})

// fetch events
self.addEventListener('fetch', event => {
    console.log(event)
})