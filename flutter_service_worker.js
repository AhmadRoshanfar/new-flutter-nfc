'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/HEAD": "c9a863e2ddd0bcb4f992d237aa7122ae",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/5f/fd9dafd929a29cb15f57e92b9a065067f19a94": "52000d5fba0ba89955eece4d5853fce8",
".git/objects/dc/4fdbfcdd64cd938b3f357af989ff59aa14510e": "7364af441f120890879eb26a1f970944",
".git/objects/c4/d994e30ed461f6d668e60b4e32b43484a01472": "c624ed20ec0406d8656c6770ed1f5849",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/6e/da803788205f90218bf3e6d4a4f9d2a2015f7b": "7beb742f216e3c81012d049e3d90922c",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/22/423a3ba9e4a57adaeaf561bf9c644b40916faa": "5671460b8f6646c086a7d2c5a228aa24",
".git/objects/49/53435215d8bbc2b4b36367cb7ab3627e69750b": "12b27edc31f23ecc375e4210a233d5cd",
".git/objects/5d/2af91d52c1cf96e0bbe04f672fc7eac67fcbc8": "813b1de8af6230f5b61f62aa5424bb8b",
".git/objects/fe/99fff9b7a9167c4b2537b87bd7be43c8c5d783": "8e304964ef7634f25fe5548e60597a16",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/ac3761ef2972582fb982fe5342031394d07643": "c833fa646695fab5587647a63d37d718",
".git/objects/72/b567733de583734a44cc65710b7d0debf4d1e9": "86dc6c1977b068d7d96c29881b93fac3",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/34/4eb2b04323b12860cc10d853f784f3b297b66f": "ffb0dec23722a8e22924be936bfb5350",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b6/d2dd4bcda8f9062c379c72834259fdb3eeb2f1": "94630a04813c81d25fc50ffa554fad6f",
".git/objects/69/c8cac678fbeafe065d474fbfdf461bcf7abf8e": "b50c13d1e5df1ccaba09a9177ab7b415",
".git/objects/4f/d66d941ffeeda46cd47733fc01cce560991bdb": "f5730b2315767ac44d778302e010e627",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/b8/6c2540104d17968c6584fb15efb9ba7ac94b8c": "f8a8c5d7cd9be48d18c32a6e88a08efb",
".git/objects/8e/7c7f33c58711951251cba0a49cc55a99441472": "4e37398a79c9ee3fd117d45b0da903cd",
".git/objects/4c/40f4ddcf5de2a12cd83b82583731e6993a59b5": "d8d3f8b1de6b9f3d68902bf8457ae6b8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/89/93cbce644084ceaf8aabf8e89cee76b7e098d9": "d73e08e69cf0d6a7d3e7bb695ca87c63",
".git/objects/7c/9e84872b818310f4be369f67c9c8ec4f31623b": "b378938f9dd3b33e2d5e6a70a127d840",
".git/objects/91/e171b8ca06d07cd863202d6b02305096334fbc": "25296b10b31507bcc33953668fc3de51",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/98/672f96e93355b8e2aa61ddc642048f8e83e33e": "a74caf7f5984fc0decd4c5daa4a56c8e",
".git/objects/db/03c7f188985666aa2c5cbd7b4344cdf8d3ee94": "5956a024c961426aefd8568976293715",
".git/objects/db/07a3cfb2d621fb5e578988d9f37c8a8dfc9e2e": "e0724b5955c8344559df88c8a6878b48",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/81/0a9fa426952ef0a9bf0a7e6d160ce17191e1b6": "9e8f901e41a7a33d7e4782181b0833df",
".git/objects/f7/ec5b430085ea69378eb65784e2b2f128ced8ae": "1e9b271b0d311ed2da2eda1e75d1ea8c",
".git/objects/29/9ba99ec85085a46eb3f1b7eb97aee83442c126": "756a091793eb64843d0a6bdae32a30eb",
".git/objects/46/4c3406fc80ea5e827e3e9a312a976e0dcc5a32": "1a820ab98ece6a1e926dd454bf57e427",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5a/2f0f211cea64cf21ace5c0346ace623f8fd827": "4a50094af271bf083654a4bcc1070142",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/02/3b8eff3a18aaf26c1c429d0d3c00f3237839bb": "b59a9c7dffc9eaf3ece97f27f3f33316",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b1/0e0916107531a0b5e5ebb891ebd48fb494a85b": "ca3fb42f9daf8aad888c0b0851d94e08",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/7d/65af10b3e576122d96988264fe5b5b62a706c5": "e265c70a56ecba8edd8fac712616eca7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/36/8a5727a652531806731138a8fac1de7926327a": "30b340f95da65426162a80b10224c0c5",
".git/objects/df/fcf4928f2a660957832a476014174a8bd7b5bd": "e78dccf0d5450e8abc649e83ce29fc07",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6f/4752e476f78b2a7d7d54165369c439ef805671": "1f91c9ff900e182ae4dabd34240e1199",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/d3/49c59ea3bd30f2bd6ef06997f7eb8a38dd8c10": "afbd6b4583748acd1806209845c4e30e",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/ed9101f50018abdb48d470549e3a9cfe25e31d": "3ad6048204a31c8c3dc941febd8d76ce",
".git/objects/37/ec0f4092c48cfbb548e00b6b7c8f6eb3f99797": "0a8e6a63571cb8d54641d8eda10108b7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "bbdd86ac36427e9a17e04d4aeeaf2e80",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "f768289ce8f3d6177dc762955dfd43b8",
".git/logs/HEAD": "a7bb4e6f30f4d71abb84df9dcfde944d",
".git/logs/refs/remotes/origin/server": "820182029146317c63875802debae4fc",
".git/logs/refs/heads/server": "630887e54076fa6b6adf5435f328c9d8",
".git/logs/refs/heads/master": "9335800011b07b950482f46aac85a96c",
".git/index": "b9d18606028523e4c5c18078200e7204",
".git/refs/remotes/origin/server": "3d1a6ea572940df9773cc84de671700b",
".git/refs/heads/server": "3d1a6ea572940df9773cc84de671700b",
".git/refs/heads/master": "bbfb43622568ac5d4307b53fe0fd9106",
"main.dart.js": "9089bb48fe8746894c0a60f65049042c",
"version.json": "23516a5d143c49ad637168218e854d9c",
"assets/NOTICES": "94564e919e9dad590514f5b7a205cd58",
"assets/fonts/MaterialIcons-Regular.otf": "0c7e92b6a68b78de36439326b12ce4f0",
"assets/assets/images/bg.jpg": "5dd4de4078d8b3b4c51451ca500cdcad",
"assets/assets/images/new.jpeg": "65f1ee4fb3496469033296d1fda4a92d",
"assets/assets/images/profile.jpg": "f47790f2932d68ae4338e8685a2d7972",
"assets/assets/images/bg1.jpg": "3c3b4b7b136195bebebce00c4c4d3af9",
"assets/AssetManifest.bin": "0cde47982b9f0567fbf5486f5479f3b4",
"assets/AssetManifest.json": "87eca175513aa41c783db477769ba2ac",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "a53db0ce954c4d297c313eefc7e26b9e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "853bbac62e44b47b4fae3003f377c87a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"wss.zip": "1dd3d2a44ff2ac6f6e7f2bc1f9097062",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "4f78a4d965716c7adb244f5f3d07674d",
".well-known/assetlinks.json": "e7c8d16dc0f0adf490af96e6658d8f9e",
"index.html": "46ae552adef89954dcf569a8a425e1a1",
"/": "46ae552adef89954dcf569a8a425e1a1",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
