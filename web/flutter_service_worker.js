'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7530f0d1d12e5ad12246784721d240ef",
"assets/AssetManifest.bin.json": "990d42e2ee70bb56427e3431e2ece32a",
"assets/AssetManifest.json": "ca107105515306d770393ce565f03336",
"assets/assets/ban/back_icon_ban.svg": "6c00aaf1cfe99673cd9e8633da7398d0",
"assets/assets/ban/cert_num_button.svg": "ba859dd66d04161cc596eb43129c592c",
"assets/assets/ban/duplicate_button_ban.svg": "832c1934787470d964152ca733c6f276",
"assets/assets/ban/Page_name_ban.svg": "0381d4b8d24639d730f9afacfc5545dd",
"assets/assets/ban/Plogo_ban.svg": "07214974a18d597c074b33c4ab5ca1f7",
"assets/assets/bsj/act.png": "c1cd1b071982927f21c5ff02e6bf01b7",
"assets/assets/bsj/back_bsj.svg": "094c8b6ff3e30725703cf415e7b4f79e",
"assets/assets/bsj/banner1.png": "605edfccba7d31b83b7d4ad9e562cb12",
"assets/assets/bsj/banner2.png": "585fd8cbfbcc9e11002e067c916a9e9d",
"assets/assets/bsj/banner3.png": "5fc3da7816f9fdd8b3d54a0729e55ff3",
"assets/assets/bsj/bld.png": "870537c0ebd2f5065f8e2939585edfb7",
"assets/assets/bsj/Checkicon_bsj.svg": "5231bf1f8e056e4ef18b692a9e29e659",
"assets/assets/bsj/cop.png": "4967036be45bbdf9127b3b2892a8b2e9",
"assets/assets/bsj/cro.png": "309fad40de90fbba498badc436db4373",
"assets/assets/bsj/dec.png": "4f48137455893346d5c2bf8423ea15c6",
"assets/assets/bsj/dri.png": "1d08235ce1024e47e4c4c37df2e33a8a",
"assets/assets/bsj/drv.png": "37c7e9350ce82cc354fe568c6d70005e",
"assets/assets/bsj/error.png": "62f6a91903f86ae6b8276ff1709fa266",
"assets/assets/bsj/findidbutton_bsj.svg": "b13e6a451e25c0dae24947958c92ec02",
"assets/assets/bsj/formation.png": "ee088d74c91832fc7ad69e250409549f",
"assets/assets/bsj/fst.png": "6c7293ae38de41fea81717871179bd4e",
"assets/assets/bsj/hed.png": "a0a75a572495865fdfeb88bb2dedf47c",
"assets/assets/bsj/laterbutton_bsj.svg": "f74a46b8e52dc24037dae3b717407939",
"assets/assets/bsj/logo_bsj.svg": "f745b39587c4ceb6e974fdd4adf49104",
"assets/assets/bsj/longline_bsj.svg": "2593eac57dc701baffcdf5dc1504fe05",
"assets/assets/bsj/notification.png": "9dd646a3f5120d9a1da5c4c36f9ba8c9",
"assets/assets/bsj/notification.svg": "945695f959d49a50e702b75ebc453b71",
"assets/assets/bsj/notification_red.svg": "139ed470bc6dae8052120c8677e013b9",
"assets/assets/bsj/off.png": "657ed3d3e4e2e1bad1b0892bfc35f965",
"assets/assets/bsj/Orangebutton_bsj.svg": "6de039469bdfd829f2330eb091917c3b",
"assets/assets/bsj/pac.png": "3f8827369eb6f3272d4812e0c438d9fd",
"assets/assets/bsj/pas.png": "c26997adad26ab1ef4755b3b55e79f96",
"assets/assets/bsj/plusicon.svg": "4ffccefee68f8aef93094245c0f88988",
"assets/assets/bsj/Polygon%25208.svg": "a5db1c2a6b2a12f02a7203f69f680dd5",
"assets/assets/bsj/Rectangle%252027.svg": "0763a302dc0fa23ce2b4f03ad15b3ceb",
"assets/assets/bsj/resend_bsj.svg": "3602b3d27dd098ee60b9a2ca2f82bed1",
"assets/assets/bsj/search.svg": "862438ce8485573f4d6aed7255e29379",
"assets/assets/bsj/sho.png": "c27e65d84c45e7cb1cb4025852704ebf",
"assets/assets/bsj/shortline2_bsj.svg": "7569f858fba52adfdf88265778f61900",
"assets/assets/bsj/shortline_bsj.svg": "3fdf26724a77a63b8964c988f8963edc",
"assets/assets/bsj/signupbutton_bsj.svg": "49b632bc8b74be1539977310ea11a5ae",
"assets/assets/bsj/spd.png": "217d3ee61f2723552352d04e85946065",
"assets/assets/bsj/stat_describe.png": "ed4db853edc006f33e1d96fb912adbc5",
"assets/assets/bsj/tac.png": "8123477e9d12c584d726c8d1d5c1cd30",
"assets/assets/bsj/teamprofile.svg": "e0b4cf73d92b35ee94a57955b691ad82",
"assets/assets/bsj/tec.png": "aa25496b10a9df44d497cef80c51ac99",
"assets/assets/bsj/tologin_bsj.svg": "2a2e930c54fd3f54279a41a070117e5a",
"assets/assets/bsj/torepassword_bsj.svg": "24c165a0c0bb358420b9c728bc416251",
"assets/assets/bsj/userprofile.svg": "615d2674035af035dfe4887ed45ccc3a",
"assets/assets/bsj/verifibutton.svg": "2cfeab3a0a9087b33434bdb6d03f504b",
"assets/assets/bsj/WantedSans-Black.ttf": "e88c9137fd3923614b06c51b951dfae0",
"assets/assets/bsj/WantedSans-Bold.ttf": "095be647fd560bd5cdc109a485bf6075",
"assets/assets/bsj/WantedSans-ExtraBlack.ttf": "6b4e3d185bef84cd6338e5c64eae28aa",
"assets/assets/bsj/WantedSans-ExtraBold.ttf": "0fdd40f0ed233d02964ea3d2bbfdef00",
"assets/assets/bsj/WantedSans-Medium.ttf": "ce9623e4f9ae622ffc0092c13d12382e",
"assets/assets/bsj/WantedSans-Regular.ttf": "47dd353b75dd33bb0ca4a85c9e7f90e8",
"assets/assets/bsj/WantedSans-SemiBold.ttf": "03f11e37cf246143bf0580b94225235c",
"assets/assets/okt/Giants-Inline.ttf": "4a98012d3f99dde66fe2e341ad84e189",
"assets/assets/okt/googlelogo.svg": "18669e9985aa3b8743cfb86626f40aad",
"assets/assets/okt/kakaologo.svg": "0ced70684096c02a3375a6717c1c6770",
"assets/assets/okt/naverlogo.svg": "d6dab70b1fd58e2602c6b49405e39bab",
"assets/FontManifest.json": "751773363f87f1d57676d20a65be39db",
"assets/fonts/MaterialIcons-Regular.otf": "405a704cc86c24ba6ede093ae02fb6f9",
"assets/NOTICES": "0477cc47c240ef90e17b8afa6a6de295",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "c727a9e080b87d0cdffc753ada2c3094",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "a0b2ab2a3890bc261545c8761ab6ee8f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c81ab0236f90ab531ea6033423329ed8",
"/": "c81ab0236f90ab531ea6033423329ed8",
"main.dart.js": "dbe9cc814605aa820eaa958d01fb4d08",
"manifest.json": "6d41e77e8f185f46a5d0eb511133e55c",
"version.json": "55ea62347a194a7d06cbda17fc6ecb56"};
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
