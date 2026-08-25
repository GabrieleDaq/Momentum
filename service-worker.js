/* =========================================
   MOMENTUM SERVICE WORKER — v1.0
========================================= */

const CACHE_NAME =
    "momentum-v1.0.0";


const SUPABASE_CDN =
    "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";


const APP_FILES = [
    "./",
    "./index.html",
    "./style.css?v=1.0.0",
    "./app.js?v=1.0.0",
    "./manifest.webmanifest",
    "./icon-192.png",
    "./icon-512.png",
    SUPABASE_CDN
];


/* INSTALL */

self.addEventListener(
    "install",
    event => {

        event.waitUntil(
            caches
                .open(CACHE_NAME)
                .then(
                    cache =>
                        cache.addAll(APP_FILES)
                )
        );

        self.skipWaiting();
    }
);


/* ACTIVATE */

self.addEventListener(
    "activate",
    event => {

        event.waitUntil(
            caches
                .keys()
                .then(
                    names =>
                        Promise.all(
                            names
                                .filter(
                                    name =>
                                        name !== CACHE_NAME
                                )
                                .map(
                                    name =>
                                        caches.delete(name)
                                )
                        )
                )
        );

        self.clients.claim();
    }
);


/* FETCH */

self.addEventListener(
    "fetch",
    event => {

        if (
            event.request.method !== "GET"
        ) {
            return;
        }


        /*
        Le pagine vengono cercate prima
        online e poi nella cache.
        */

        if (
            event.request.mode === "navigate"
        ) {

            event.respondWith(
                fetch(event.request)
                    .catch(
                        () =>
                            caches.match("./index.html")
                    )
            );

            return;
        }


        /*
        Risorse statiche:
        cache prima, rete come fallback.
        */

        event.respondWith(
            caches
                .match(event.request)
                .then(
                    cached => {

                        if (cached) {
                            return cached;
                        }

                        return fetch(event.request)
                            .then(
                                response => {

                                    const copy =
                                        response.clone();

                                    caches
                                        .open(CACHE_NAME)
                                        .then(
                                            cache =>
                                                cache.put(
                                                    event.request,
                                                    copy
                                                )
                                        );

                                    return response;
                                }
                            );

                    }
                )
        );
    }
);