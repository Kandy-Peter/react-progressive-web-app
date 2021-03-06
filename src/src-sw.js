/* eslint-disable no-restricted-globals */
import { clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';
import { ExpirationPlugin } from 'workbox-expiration';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';

//used to avoid caching of failure responses
import {CacheableResponsePlugin} from 'workbox-cacheable-response';

clientsClaim();
self.skipWaiting(); // use skipWaiting because I want the page to reload just after the user close the tab.

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
    ({url}) => url.origin === 'https://fonts.googleapis.com',
    new StaleWhileRevalidate({
      cacheName: 'google-fonts-stylesheets',
    })
  );

registerRoute(
    ({url}) => url.origin === 'https://fonts.gstatic.com',
    new CacheFirst({
      cacheName: 'google-fonts-webfonts',
      plugins: [
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new ExpirationPlugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

  registerRoute(
    ({url}) => url.origin === 'https://api.themoviedb.org' &&
      url.pathname.startsWith('/3/discover/tv'),
    new StaleWhileRevalidate({
      cacheName: 'movie-api-response',
      plugins: [
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new ExpirationPlugin({maxEntries: 1}), // Will cache maximum 1 requests.
      ]
    })
  );


registerRoute(
({request}) => request.destination === 'image',
new CacheFirst({
    cacheName: 'images',
    plugins: [
    new CacheableResponsePlugin({
        statuses: [0, 200],
    }),
    new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
    }),
    ],
}),
);

// @see https://developers.google.com/web/tools/workbox/guides/common-recipes#cache_css_and_javascript_files
registerRoute(
    ({request}) => request.destination === 'script' ||
        request.destination === 'style',
    new StaleWhileRevalidate({
        cacheName: 'static-resources',
    })
);
