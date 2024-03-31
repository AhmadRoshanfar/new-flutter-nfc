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
".git/HEAD": "74a71cab29390d4cb1bc85b7e7c9ca0a",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/5f/fd9dafd929a29cb15f57e92b9a065067f19a94": "52000d5fba0ba89955eece4d5853fce8",
".git/objects/dc/4fdbfcdd64cd938b3f357af989ff59aa14510e": "7364af441f120890879eb26a1f970944",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/22/423a3ba9e4a57adaeaf561bf9c644b40916faa": "5671460b8f6646c086a7d2c5a228aa24",
".git/objects/63/b206b18a1c09a1d33de8750bc6e7cdc8b9d7dd": "0ca2fe8188484652d8b0651c973a66f2",
".git/objects/2a/9a3c23b1d22020e422306b01fcfe8a9c027c56": "2a59f65ffac0ebfb6e677fd62dde83bf",
".git/objects/d2/dd50f9a505e1efce9f9889efde8755ee751a9e": "54b8eb69b2a802dffaa2bb15a3a0b1b2",
".git/objects/61/d5206026d4c1dc033c71529851fab594557967": "7c419732f1d9d6ec7a25787584d7c6d5",
".git/objects/fe/99fff9b7a9167c4b2537b87bd7be43c8c5d783": "8e304964ef7634f25fe5548e60597a16",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/ac3761ef2972582fb982fe5342031394d07643": "c833fa646695fab5587647a63d37d718",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/00/ddf32686f26e59fafe56b56f895f38c040d76c": "afcffee31f0a46013fb33fe95db77c56",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/54/3216309cc6c8ad4acbb0f693d71d29594fed11": "8f4741f1723413e48145d3cb1cb4d1a8",
".git/objects/79/999df235b733a69b4f4c4ed3012d1f225ba201": "fd36b3de7a2b3d6cd0ea799faab055c3",
".git/objects/b6/d5f2c160f1b95cf9349320601d338db8f9fa38": "95403d7ad06642fe091324e8296ff633",
".git/objects/bd/7abfbf04fa16b141543cf513bc328d094f66fa": "af0b7e2e4946e3fb70258b04cd5322de",
".git/objects/69/c8cac678fbeafe065d474fbfdf461bcf7abf8e": "b50c13d1e5df1ccaba09a9177ab7b415",
".git/objects/4f/d66d941ffeeda46cd47733fc01cce560991bdb": "f5730b2315767ac44d778302e010e627",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/b8/6c2540104d17968c6584fb15efb9ba7ac94b8c": "f8a8c5d7cd9be48d18c32a6e88a08efb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/27/dbca5f0a9f9a9301a2e0d019fce70fbaceebbb": "1c843355a5db35caf3a3b2b6ad6e1999",
".git/objects/89/93cbce644084ceaf8aabf8e89cee76b7e098d9": "d73e08e69cf0d6a7d3e7bb695ca87c63",
".git/objects/7c/9e84872b818310f4be369f67c9c8ec4f31623b": "b378938f9dd3b33e2d5e6a70a127d840",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/98/35cd7ba9f3d8fc6dee40886eed1a20d15397f0": "75955772cd5ade6de1cd1758fe39d3c7",
".git/objects/98/672f96e93355b8e2aa61ddc642048f8e83e33e": "a74caf7f5984fc0decd4c5daa4a56c8e",
".git/objects/a6/bae36f24043a3d77b0975d3acdec93eaf043c4": "0cafbd18d19435c93d1680b351992793",
".git/objects/43/8e9d8f0cd900825dae028ed2af5ef2bfc1f565": "817440db35bd60a161eb63ea9fdea82e",
".git/objects/f3/47f4b1e0b39aaf84e8cd0592b26ec1bcaceac1": "921ad2e0935765a6b60e64191df6d6e8",
".git/objects/db/07a3cfb2d621fb5e578988d9f37c8a8dfc9e2e": "e0724b5955c8344559df88c8a6878b48",
".git/objects/cb/2e4c055ef8da261c6437f437a629501ffc4dff": "182c20d3addd054440b9109b9c396e52",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/81/0a9fa426952ef0a9bf0a7e6d160ce17191e1b6": "9e8f901e41a7a33d7e4782181b0833df",
".git/objects/29/9ba99ec85085a46eb3f1b7eb97aee83442c126": "756a091793eb64843d0a6bdae32a30eb",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5a/2f0f211cea64cf21ace5c0346ace623f8fd827": "4a50094af271bf083654a4bcc1070142",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/pack/pack-172c6b153ca085bbea9f297a571c7bec360194f8.idx": "ca25da505cabe8e5a7b12b32a73b1e7b",
".git/objects/pack/pack-172c6b153ca085bbea9f297a571c7bec360194f8.pack": "f12edf0e53a6aeae6e43410c74b270ba",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/9f/c0d91635edb5eca6a4b0ad8f81c4109156d311": "3ece0daebdd9ce87729f8a00431710f6",
".git/objects/36/8a5727a652531806731138a8fac1de7926327a": "30b340f95da65426162a80b10224c0c5",
".git/objects/fc/46711b1734f783bda9c4b3c5a7c6cff88d46f6": "3be028b64b6899850ed711244fe738d5",
".git/objects/0f/ef92afcf32358b9c5e828d16d99a2d75d3868a": "42c6f07a95896e28f5880916bb9a5085",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6f/4752e476f78b2a7d7d54165369c439ef805671": "1f91c9ff900e182ae4dabd34240e1199",
".git/objects/c0/160c838620a4b9b9ed8ad05e999a8263a240af": "929a4786f9e38f4e90aadcb893203aa7",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/2f/6e6103fd34d4fe298c4e93577f7ec4d94cf0a5": "85fbe7d675700bb7a9c7ad1615e74839",
".git/objects/2f/40df0044dbeb7b4b6a5f0b8562d002db7a4488": "f594fc33fb47c7409ff39b1cdd7969d1",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/d3/49c59ea3bd30f2bd6ef06997f7eb8a38dd8c10": "afbd6b4583748acd1806209845c4e30e",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/ed9101f50018abdb48d470549e3a9cfe25e31d": "3ad6048204a31c8c3dc941febd8d76ce",
".git/objects/e0/daf3655772fd7143526557c87e7b8a64f23caf": "585862cae2549a9ce4e33f03311a3768",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "14d7e5a1d72efffed1191a8df6958e60",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "9f56e0a7e71fe9f6434834bd04ca1de1",
".git/logs/HEAD": "87d6c810c269c877e9857d88dee987b0",
".git/logs/refs/remotes/origin/main": "1b9ed0aaa4c6b862c74cc924305b843b",
".git/logs/refs/remotes/origin/bright": "57a0c9ef87cf76f3ec1cd848663b20f6",
".git/logs/refs/remotes/origin/deepLink": "a1f620105f7675aab5fc4f2f5aadc132",
".git/logs/refs/heads/bright": "70102a8b55419f8fd2762d1e08bf7fa5",
".git/logs/refs/heads/deepLink": "5fdc2c389e3a24ba6d8fc74814f81755",
".git/logs/refs/heads/master": "42a7f2f0cc087522a1274a0302bc03c1",
".git/index": "c8f3fb65d8d2589de6e2a292c815e94e",
".git/refs/remotes/origin/main": "8a3ccbedf3904568c832592cae9e6f8b",
".git/refs/remotes/origin/bright": "0423f2717abe31f3c139b2bde4ad8ddb",
".git/refs/remotes/origin/deepLink": "d1ee4ae4b217faebc1dd386b15eff25d",
".git/refs/heads/bright": "cbf3e35a78b219761855bc4611d85c02",
".git/refs/heads/deepLink": "d1ee4ae4b217faebc1dd386b15eff25d",
".git/refs/heads/master": "cbf3e35a78b219761855bc4611d85c02",
".git/FETCH_HEAD": "b113c97ddc321e34451ecf14044c99ef",
"main.dart.js": "3303077d5635277831078316d29f7330",
"version.json": "23516a5d143c49ad637168218e854d9c",
"assets/NOTICES": "3aabd6db5196b8710acf57d4df9d6fd0",
"assets/fonts/MaterialIcons-Regular.otf": "1aa6f5a74ff9b42966600a7d976d63c3",
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
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "4f78a4d965716c7adb244f5f3d07674d",
".well-known/assetlinks.json": "e7c8d16dc0f0adf490af96e6658d8f9e",
"index.html": "e4c29c1268d70a8eeb414a433890783b",
"/": "e4c29c1268d70a8eeb414a433890783b",
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
