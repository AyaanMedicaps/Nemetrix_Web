'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5859e6ea6cce2041bf32ab1c77d9631a",
"assets/AssetManifest.bin.json": "1308a8af3911b870929eaa3aac23327f",
"assets/AssetManifest.json": "b82407ed6c0d5217ec1453d5d3bdcf71",
"assets/assets/images/12.png": "e8197a754b8a0923e62e134363166b07",
"assets/assets/images/14.png": "59d5825840215b276a13d2065cbf771e",
"assets/assets/images/19.png": "7189bb6ce4a631fd284d1c9dfb2755ac",
"assets/assets/images/4.png": "35ab8d87b0d037fd9a5f020d2304fc8c",
"assets/assets/images/6.png": "381e02e30a728ed140b4652d79897c5b",
"assets/assets/images/annotation_1.jpeg": "b36f174f8ec613612f6c99f877f9240c",
"assets/assets/images/annotation_2.jpeg": "7b9fcb245f2162022d8b02a916500d50",
"assets/assets/images/annotation_3.jpeg": "f97ee09d6b528a01d549476253b58c1e",
"assets/assets/images/annotation_4.jpeg": "2c0d8fe3dd679a81de4c9f5475cdbbfd",
"assets/assets/images/back.jpg": "32c839103b44215a1ec97cb95e156fcb",
"assets/assets/images/data_annotation_hero.jpg": "02ed0b6017009c0ee2b47ee6ea9daa06",
"assets/assets/images/development_1.jpeg": "0bc054ed751b0b8b64c125acd01fa3ed",
"assets/assets/images/development_2.jpeg": "f1b1fc80248dbc77477a51e012c9c416",
"assets/assets/images/development_hero.jpg": "87314966fac61b474427dbb99663083c",
"assets/assets/images/llm_training_1.png": "44ff05930725088b3ab68b9c93305923",
"assets/assets/images/llm_training_2.png": "75b666bb19718446792eca468eb17b7d",
"assets/assets/images/llm_training_3.png": "c1b7ac976d4502e62c3677543a8b5cbe",
"assets/assets/images/llm_training_4.png": "c8dc9ba68596745ea4e4b31aaa688504",
"assets/assets/images/llm_training_hero.jpg": "6b46a2743ca8d3afa0791bc607cc5c18",
"assets/assets/images/logo.jpg": "9b050c986c4fc89e36a81a7dd32697f8",
"assets/assets/images/product_hero.jpg": "ef16964dd486f4d1098ac8f64d574dce",
"assets/assets/images/product_overview.jpg": "36a37efcc004e2db75d67e8c9d4416c5",
"assets/assets/images/service1.png": "83dd50036e3c312f58a77ef3b27ba3a2",
"assets/assets/images/service2.jpg": "879b310653a7c8b36ef0d11a198170fb",
"assets/assets/images/service2.png": "7757d7345683a682b937e679db6f0c5d",
"assets/assets/images/service3.jpg": "23d74e80f5d358a27ce7f32eefbfff17",
"assets/assets/images/service3.png": "fc0453eb7f01fe67e15bd855d17abbb2",
"assets/assets/images/service4.jpg": "879b310653a7c8b36ef0d11a198170fb",
"assets/assets/images/service5.jpg": "23d74e80f5d358a27ce7f32eefbfff17",
"assets/assets/images/service6.jpg": "9b050c986c4fc89e36a81a7dd32697f8",
"assets/assets/images/transcription_1.jpeg": "27b0f4e45d7228dba1ec8ba86a59be83",
"assets/assets/images/transcription_1.jpg": "19a38908f627c5b8d1f40903af3e9c41",
"assets/assets/images/transcription_2.jpeg": "af2fd83a1d5ba56cfca67ffe8dbb8de9",
"assets/assets/images/transcription_2.jpg": "a1097dda6e2eabc521a86f8746793363",
"assets/assets/images/transcription_3.jpg": "3e0210e8141c10bcd34304a1e7646f60",
"assets/assets/images/transcription_4.jpg": "c294c979b71ced73694146b70f7bf104",
"assets/assets/images/transcription_hero.jpg": "3db484fa2076bf3be36c6e73b1028a61",
"assets/assets/images/transcription_hero.png": "8fffec8bc00a9d47f093253486aab691",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "604f9c35d6a730f6c2851cb9ab4739eb",
"assets/NOTICES": "06ebe0c382f2b9507898e53c07cca3a5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4da4f9db6411bcaeb59e08b54759dfd1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "03d4d10f4ba51a280d186f2da3b9b456",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "b713f2e88725e1b6444088b3c0bce6e2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "14220003bf91b72d4b87c73b18321a19",
"/": "14220003bf91b72d4b87c73b18321a19",
"main.dart.js": "775cd7403022b3ba14c6806ec879b413",
"manifest.json": "5717615319f2ad38f24f590532a7d8b6",
"version.json": "982ccbeb8200d32d28c0c1af9dc9abc0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
