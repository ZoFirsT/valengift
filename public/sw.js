if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + ".js", n).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, t) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let c = {};
    const r = (e) => a(e, i),
      o = { module: { uri: i }, exports: c, require: r };
    s[i] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (t(...e), c));
  };
}
define(["./workbox-4754cb34"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "8bdb69dde4bd13df3a6a38a4d27c928d",
        },
        {
          url: "/_next/static/BpW9orvOa4dRwUb3nQys7/_buildManifest.js",
          revision: "1d044ed46adfc5cfcb1b1117f14cdd72",
        },
        {
          url: "/_next/static/BpW9orvOa4dRwUb3nQys7/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/447-b0c32a44f2cea5b6.js",
          revision: "BpW9orvOa4dRwUb3nQys7",
        },
        {
          url: "/_next/static/chunks/4bd1b696-927b5d87d2664d33.js",
          revision: "BpW9orvOa4dRwUb3nQys7",
        },
        {
          url: "/_next/static/chunks/505-cbd4e1c42d757578.js",
          revision: "BpW9orvOa4dRwUb3nQys7",
        },
        {
          url: "/_next/static/chunks/517-8567fe277c638d96.js",
          revision: "BpW9orvOa4dRwUb3nQys7",
        },
        {
          url: "/_next/static/chunks/7-e345233b5046dfe5.js",
          revision: "BpW9orvOa4dRwUb3nQys7",
        },
        {
          url: "/_next/static/chunks/729-f5e9bf708625d345.js",
          revision: "BpW9orvOa4dRwUb3nQys7",
        },
        {
          url: "/_next/static/chunks/8e1d74a4-f99d25de70ad1098.js",
          revision: "BpW9orvOa4dRwUb3nQys7",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-c0cbad154ef2aa63.js",
          revision: "BpW9orvOa4dRwUb3nQys7",
        },
        {
          url: "/_next/static/chunks/app/about/page-bc6c83598ed64d9e.js",
          revision: "BpW9orvOa4dRwUb3nQys7",
        },
        {
          url: "/_next/static/chunks/app/api/gemini/route-ead414d44f6bc15d.js",
          revision: "BpW9orvOa4dRwUb3nQys7",
        },
        {
          url: "/_next/static/chunks/app/api/system-status/route-53f77f0b299ca19b.js",
          revision: "BpW9orvOa4dRwUb3nQys7",
        },
        {
          url: "/_next/static/chunks/app/api/test-load/route-293b0fe04a2afa3b.js",
          revision: "BpW9orvOa4dRwUb3nQys7",
        },
        {
          url: "/_next/static/chunks/app/error-d461fa02ab119269.js",
          revision: "BpW9orvOa4dRwUb3nQys7",
        },
        {
          url: "/_next/static/chunks/app/layout-e70f930c569dd28f.js",
          revision: "BpW9orvOa4dRwUb3nQys7",
        },
        {
          url: "/_next/static/chunks/app/loading-dee5330e60737011.js",
          revision: "BpW9orvOa4dRwUb3nQys7",
        },
        {
          url: "/_next/static/chunks/app/page-e5df97754104308c.js",
          revision: "BpW9orvOa4dRwUb3nQys7",
        },
        {
          url: "/_next/static/chunks/app/quiz/page-fde8af2f4defe5ea.js",
          revision: "BpW9orvOa4dRwUb3nQys7",
        },
        {
          url: "/_next/static/chunks/app/results/page-74ca6d846ef96b7c.js",
          revision: "BpW9orvOa4dRwUb3nQys7",
        },
        {
          url: "/_next/static/chunks/framework-6b27c2b7aa38af2d.js",
          revision: "BpW9orvOa4dRwUb3nQys7",
        },
        {
          url: "/_next/static/chunks/main-app-ce1c982ffbabfca9.js",
          revision: "BpW9orvOa4dRwUb3nQys7",
        },
        {
          url: "/_next/static/chunks/main-f5e273378515e17d.js",
          revision: "BpW9orvOa4dRwUb3nQys7",
        },
        {
          url: "/_next/static/chunks/pages/_app-d23763e3e6c904ff.js",
          revision: "BpW9orvOa4dRwUb3nQys7",
        },
        {
          url: "/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js",
          revision: "BpW9orvOa4dRwUb3nQys7",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-7e3732b9f52eec18.js",
          revision: "BpW9orvOa4dRwUb3nQys7",
        },
        {
          url: "/_next/static/css/e577e3a4caa11659.css",
          revision: "e577e3a4caa11659",
        },
        {
          url: "/_next/static/media/7d8d91385509b787-s.p.ttf",
          revision: "d55ff127a3c864c5d185b86c3d28f0e9",
        },
        {
          url: "/_next/static/media/c9a94188b534db7e-s.p.ttf",
          revision: "69fc4f0f2a8869feeec71379c2cf824c",
        },
        {
          url: "/_next/static/media/e0ea3a4ac52d7226-s.p.ttf",
          revision: "cf83ce0aa5e75930d38e0bff88d9426c",
        },
        { url: "/file.svg", revision: "d09f95206c3fa0bb9bd9fefabfd0ea71" },
        {
          url: "/fonts/Sukhumvit Set Bold.ttf",
          revision: "cf83ce0aa5e75930d38e0bff88d9426c",
        },
        {
          url: "/fonts/Sukhumvit Set Font.ttf",
          revision: "69fc4f0f2a8869feeec71379c2cf824c",
        },
        {
          url: "/fonts/Sukhumvit Set SemiBold.ttf",
          revision: "d55ff127a3c864c5d185b86c3d28f0e9",
        },
        { url: "/globe.svg", revision: "2aaafa6a49b6563925fe440891e32717" },
        { url: "/manifest.json", revision: "38cb4082115a28268804f35253e2d275" },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        { url: "/robots.txt", revision: "4c71b2333764de4299768b5e7a7f73fe" },
        { url: "/sitemap.xml", revision: "0ddbd8099b45a21ead3aabcfc3aa56f9" },
        { url: "/vercel.svg", revision: "c0af2f507b369b085b35ef4bbe3bcf1e" },
        { url: "/window.svg", revision: "a2760511c65806022ad20adf74370ff3" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: n,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
