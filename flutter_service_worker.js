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
".git/HEAD": "c3ee5c79e3fbd5409970c8d42f252b80",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/5f/fd9dafd929a29cb15f57e92b9a065067f19a94": "52000d5fba0ba89955eece4d5853fce8",
".git/objects/dc/4fdbfcdd64cd938b3f357af989ff59aa14510e": "7364af441f120890879eb26a1f970944",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/b2/1edc87b24fc54955a679045d4b1c270c4361eb": "e4de88df8b8ab74c10bd29d95c200d67",
".git/objects/2d/f86a047a4b4d05f27d7ecadf6ba9f5439e9ec4": "8cba200c398963c7d9d18a5b6a5cb5cb",
".git/objects/2a/9a3c23b1d22020e422306b01fcfe8a9c027c56": "2a59f65ffac0ebfb6e677fd62dde83bf",
".git/objects/d2/1d31ee1ae54c441fd28c7f367a5fd6cd984a48": "80bd845da750886ad85ce3bab7cf6e0a",
".git/objects/fa/2140308c6f0022f4842ffbda29b9195fbc9388": "dd8ca68b39c41034439039bf63556b85",
".git/objects/61/c5d3960a13b20062daaa9f377e328662233e5a": "7a68d614606af23bbfa40fe821075bf4",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/33c0a5c4eb09ecaf1d627ed17e53631cc5e94b": "4d78792c3b68bf97f19e1a781d696283",
".git/objects/30/ac3761ef2972582fb982fe5342031394d07643": "c833fa646695fab5587647a63d37d718",
".git/objects/ac/cc4ba2788592f41ebb1be2da540dc3c7fc6889": "6f25d1a787064054b9dbbe9e7bb20002",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/62/1aac9e8ae1a8342d658b744dc116d2a38138a2": "5c59fe15a67ab4f90418a0a942b0fad7",
".git/objects/d8/97f333d357a413af6deb291f8a962dcb547bd0": "5dfaf8f55a7e10f4db26980e3e0e8139",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b6/d5f2c160f1b95cf9349320601d338db8f9fa38": "95403d7ad06642fe091324e8296ff633",
".git/objects/bd/b2c74289efd5985e21d865a0ec1cf5726dd582": "782a236183400346f111ee3837c38c38",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/69/c8cac678fbeafe065d474fbfdf461bcf7abf8e": "b50c13d1e5df1ccaba09a9177ab7b415",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/15/5dd1c54f99b883b936f046b07bf5210d13ea37": "0aa501c9c81a77839cebc673d9348ccb",
".git/objects/15/175d16a956b69384badad96ad6b88921d7d99c": "ee16ff06abf4e30943d711ce5a30810f",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/a8/9aeb99a4b6c725cbfaa94492e835e00a657197": "e00b84146028ed21493e83f5282b7e2e",
".git/objects/a8/b852d4706dea2a06d3eeb151f849c208e95e2b": "6847373087b6edd55fa48a3ef33aa2b6",
".git/objects/cd/367744a96ee7be2821564b610297b2ae9fea56": "7da261b245c2a40da408a1485ed42193",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/33/dbfc40522e23775241efa974633163a442a577": "62d73085fbea9e1ad3db89ba6c1455e8",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/ae/f41b53c756e3732ce60a3f09d1bba1c0f2511e": "be2533d4731c5f841cb61452791b4744",
".git/objects/89/8a23fb25ed65f0c1c71cb74d0be6fc98632a92": "56f0c8578e6fd5ab585129eb8e001051",
".git/objects/a2/0ea5fa4d590c07112679ad78a6e69272e1a1bd": "0022f8470435c91b388e9a95a8a62bff",
".git/objects/7c/1e04eae88bea12338261dac91809de0490ebf4": "c0eb1975b9411692603f8197b5d75420",
".git/objects/3f/337128fe9d4b1b5f9182daa89daddefc041ce9": "a5f975009cd44558489ad160ea3adcea",
".git/objects/3f/c7d4618b748a919dbd77c97f026225051a4849": "70842ede439326b100bdbe71a044bc4c",
".git/objects/3f/7e56d4ce9853d0bea8898e29bcc333ff4436b3": "9d5c5556f2abefec68b6db6c8a01e575",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/1e/b2c1a14a40610c888ba1bd1e8b1308bcf4e394": "cd493403f54cc4bfb47d6b41c70437e8",
".git/objects/98/672f96e93355b8e2aa61ddc642048f8e83e33e": "a74caf7f5984fc0decd4c5daa4a56c8e",
".git/objects/a6/f24f8abe0c3d4cd9ac4dfcb42ee51553faf20a": "f759557518d10b9eff8ed1063443d904",
".git/objects/a6/d976e581663132182c077ab2d31da342a0ae1b": "b3225edf1aa093c6656d18a051d64bbf",
".git/objects/a6/848bd7d7f9e1b3c3457e5cadb1a150affb86a0": "6096a8b76c53434ad945ed2a72759f59",
".git/objects/43/9bc78087a732ba6f32b78e8d469b130bcc6e32": "d2d68fc815c4622184d57c982bba25ac",
".git/objects/db/07a3cfb2d621fb5e578988d9f37c8a8dfc9e2e": "e0724b5955c8344559df88c8a6878b48",
".git/objects/cb/2e4c055ef8da261c6437f437a629501ffc4dff": "182c20d3addd054440b9109b9c396e52",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/81/0a9fa426952ef0a9bf0a7e6d160ce17191e1b6": "9e8f901e41a7a33d7e4782181b0833df",
".git/objects/09/2112fae44e78a3715e6bbcc548498f559c3ae4": "703f2204e5588a5e57280052a36b19b0",
".git/objects/f7/c7aefd2791cea0d63f571575404ccc981b327a": "b19016ac27943cea3f56ce1a11a417fc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/e3/b42f15be8bf8e54ee50a1151c04cfb6003e738": "dbbf34af9c7718f19ffa882022cec882",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/7d/6313bbf15f15aac47c9bfd817f9b57c03686f7": "23a0707833bd2a4fb5efc48a4776d6e3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/9f/c0d91635edb5eca6a4b0ad8f81c4109156d311": "3ece0daebdd9ce87729f8a00431710f6",
".git/objects/a9/9de2c86f302f069e02a5ba2aaa29317e7cf02b": "82cc959f012713dabe11db9ba09bf296",
".git/objects/36/e00a67fa5286b611a638ca98755da7698e0394": "0e5332912e1f8d4242a0830fd7324bee",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/7e/fbe3f680ed6ed16f52607853a2355f83f5ea2e": "199bb8e3ddf267a8337a29b544ef337f",
".git/objects/c2/e71a8960e864c3e482719476732fe04ffbb961": "52191a6c3356c85c5ff04ff0507577f7",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/31/a4105cdd5d2b57c6f0809171a5da4ca7d1b8a5": "d24cef249b224632600d607695d48152",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/bc/6e1acf96793b46d5506541b87aca9b89922c95": "76847eeef46c7f50c397d1302fdac1f7",
".git/objects/d3/49c59ea3bd30f2bd6ef06997f7eb8a38dd8c10": "afbd6b4583748acd1806209845c4e30e",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/6d78fc1478b7c6b526985fbcfcb1b800a308b0": "f8b6afadd22bde621d1f7c27f4321556",
".git/objects/32/0aceb72eeb53fff8220f0d3d1e76bee8179c56": "4a7f047912658207ad5a58ff87d588fd",
".git/objects/e0/ed9101f50018abdb48d470549e3a9cfe25e31d": "3ad6048204a31c8c3dc941febd8d76ce",
".git/objects/e0/df0b9d96b0eb312cfe3b0b86fd20a20be84b18": "398f739c4c29eaf4460d2038d1462fea",
".git/objects/e0/daf3655772fd7143526557c87e7b8a64f23caf": "585862cae2549a9ce4e33f03311a3768",
".git/objects/a3/310348892201c234cbc948d012581cd6f609af": "ccee3fa1c3babe2827b6be107ba176e8",
".git/objects/3c/9cb7b5657e5117a76b03c6160c29e5b894c6c8": "f1394ce8d2a8734b1cded546ab4ca916",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "2454a20da16c6b88e38126ce00be4cfd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "a35375ecde1c89a6eda49c8d25023cc1",
".git/logs/HEAD": "7e3fea8cda502c4c9ece4fef8cfd6246",
".git/logs/refs/remotes/origin/bright": "d6966fc0a1a9d0b12fc640eddb4b379c",
".git/logs/refs/heads/bright": "5d5fb9ec1262b20a89ab6f156700d5da",
".git/index": "b0e6f0eefa1bb30fb1bbe0c845a85244",
".git/refs/remotes/origin/bright": "c6d04549f0ebd088870baed67b6b6d15",
".git/refs/heads/bright": "c6d04549f0ebd088870baed67b6b6d15",
"main.dart.js": "8789c19a7ec3e2aa15776be6fb580f5d",
"version.json": "23516a5d143c49ad637168218e854d9c",
"assets/NOTICES": "640a1aaaebc1fc6bd2bdd6da944de89a",
"assets/fonts/MaterialIcons-Regular.otf": "6cf415772b40027ac0f78d4bf7670936",
"assets/assets/images/profile.jpg": "f47790f2932d68ae4338e8685a2d7972",
"assets/AssetManifest.bin": "ff55096f468e26d99efa8cffe4d23868",
"assets/AssetManifest.json": "3e5136c9ad304af960f8bd9f3628b0cc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "783dd633e9c753616c57e56d0d1ccc48",
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
"index.html": "5f7cfcc44a986140c5ff27b092f8c264",
"/": "5f7cfcc44a986140c5ff27b092f8c264",
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
