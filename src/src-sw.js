/* eslint-disable no-restricted-globals */
import { clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';
// import { ExpirationPlugin } from 'workbox-expiration';
// import { registerRoute } from 'workbox-routing';
// import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';
// import {CacheableResponsePlugin} from 'workbox-cacheable-response';

clientsClaim();
self.skipWaiting();

precacheAndRoute(self.__WB_MANIFEST);
