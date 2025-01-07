'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
".git/config": "4ba6cb19ac135ba7e1d30bb167d6b4ae",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "138bc97d6533c48b156bc489caa6de71",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1b1f801fe6ba5cac6638e00552205877",
".git/logs/refs/heads/master": "0c630a53018a3de4aa6dafd142abe0c5",
".git/logs/refs/remotes/origin/master": "83f3ffc717a0e52e8af85d14c88557e6",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0a/ac6668acf436be39f2429c0aff3803615038a7": "47a4bfe422b02913f5b4f42d451cd2b4",
".git/objects/0b/2dba03e5d97915ac3d05da64935a7289178f28": "3e5b44ff9563b736533dcbb459a1ad4f",
".git/objects/0e/87c5e6d23076f3fe3fa43b7d0de4d81c9df795": "1cab9917de0ce9e3deacccb42a014e09",
".git/objects/12/1df0e63d1ce52938b4815d1c918c30c96f2734": "f1aaff113fb0024e9436d775d6d04dea",
".git/objects/14/5e05d8deb10d5ee7d6ecf507261080c11df0f0": "02ba8de032dfd0540846229f82068a37",
".git/objects/16/489a59c1f152b2c33803126c78e1b5d276b9c8": "9708948329011cdd59c3dde5d50d0c1d",
".git/objects/18/5f1e15904959b79acf75747d77e6918062bd6b": "87ea06f422f178ae72fa0eb4148b6870",
".git/objects/1a/0106500ffda932b39ccec3f5bd4fff38305c2d": "b5d896bf7c23288f033a5ab1bbf4587b",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/d63e8ce4e3f74a7a79324d9e784e33c7b3295b": "909dc2c9bf378d3f14271f8f31730ddf",
".git/objects/24/7476d6bb9b13be99d56880b7f3ddccdd4d9979": "a70230bbece10d16a3e5e1a1883cff55",
".git/objects/24/f65bf4d48f7990fb1708752acb5fb3f39de81f": "5daa56af360e2c878805ae3d56b30206",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/51d93f2604426af4dfdcccd72cfc362593b202": "fde3d6574cf007ea5971f87e27412b41",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/28/0df5a4edc0f595c53eea066673c402c8d204a2": "5cacd11668636a7be96818aeafa0743c",
".git/objects/2c/9c461e6d95d1aab7d7c8455cf8d6e90e54fad6": "1ae4d4488df88bd65fab6e490519c37b",
".git/objects/30/108fc1017886aecbbd22325d20b628d037d1c8": "322a6e44d2d150823042b55b5ce95403",
".git/objects/31/ab8bbb1b4053e634adb3ef4da452b28b4db4ab": "b195e91d35202fe58a65fb1199f139a3",
".git/objects/35/f54b46de902fe4bd51ec5ab4ea730b01a88f74": "ef8ee4a19f948824e299256df7bba3f7",
".git/objects/39/af12a5db26668b66e5c1a12994f977a4f49037": "1fc3db0e8429cc8082e329d8730e4e96",
".git/objects/45/62f60d2f8f88b758913bc59e2b4e8487f33f83": "f5c717cf385e6cdcdbcaf7ae49885499",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/20859158d11540bcf3029496354e8ff6f28b60": "dee5d16a8a9e3654c342d3b619953010",
".git/objects/4e/238927fbc3f2ea519e21a8172ee5fc14db8a19": "db34dba9be6977eb83d971c579cdf5e0",
".git/objects/52/c5a5109f70d1662447d1fbfced46e21f3d2c2d": "fe702a82291afdcfae66d2308121992a",
".git/objects/53/38d46eaf187d8ffc3aa08dfa1be48e05b959b2": "adbd3c3e5a06520884c2e0638b521fab",
".git/objects/53/ae8b91fe0c5928c61046bc7a336d140d04af6b": "9a1177104a71633db482c5b77fbaafe1",
".git/objects/55/71dc3edf83a77eb97feadceac74a96481e487a": "b292bb6879ec2d3f2e7c62b7f69706ff",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/5c/a695db17274b630599578b38a27f9aff53772f": "35bb10c78359aff39783c97461dd2404",
".git/objects/60/186e11156051871a72157ab2c2712f935c96cb": "c8eeb8bd2d091a4936e09f5ca32bf31e",
".git/objects/61/e8788398a97519c1e0b9eee3747daf940c6566": "919af089c8902ba0564614fe4d67996b",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9654c821f1b7c45b917bf4f200482f17bcbac3": "6d180be44d3936d0595045987942701a",
".git/objects/6c/b4fc7ec69e8f82ab004ed2e3c83cfe08625954": "fb45818494bceda3a068857643ceb016",
".git/objects/6d/1c3a82128853179f1bf602348735097ad01d5e": "8af01820599cd76f388ff7ebbbddf9da",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/9f00e5260e6930b327d84cb243fbb0563ddfe8": "ef767bf406f3591f9a90ef7745f974a7",
".git/objects/6f/8e63260ab08352781da73a79b6497b04303d3d": "e6942dd2301e2edcff77b0a26f0d4131",
".git/objects/72/4b3bb3a138e88f83d4ec52efb0d3a1182f1f5f": "4cb651afbaaf313adef4667a6c348433",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/75/e586e336064663e446105cb563b1e0fe10eca0": "47e21250302553cdf887d7d123bd2f34",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/85bf6d98ccbc09cc6f5a541810158ca52e1bf4": "a38d81998e6465c2172f9ee27fb3e96e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/f576abc15cab3ca662ea0d5f1b09063317dd54": "1c1bb8d7149ee729db199a92063ba6c9",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/2e6af18903308542e04eb8393e08d0020e53d0": "64b01619d282b46d0dd2a471d70b5102",
".git/objects/90/f97e6be088b4d149da346b4c868d6a48d62a14": "4e73ffdf10af7d108ca5804a43c284d1",
".git/objects/94/0a5eba20805639f9ec391a252ea9cf164b481a": "ca3391965e8025c9981d8f9223beefad",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/99/3aa00f836cacf8a28fbfbe3af6d6da41a4f1a7": "124e1401edeea489e14927cc54a3a02d",
".git/objects/99/7f1d3cb7e7763964bcf5130e6a8ca92e089229": "4fec303587c89e38991eba3e0d60b71a",
".git/objects/a0/d2feef9e673d95a934b34a77979facc48a3348": "7b5ca1735c42c64413c5677e99f1eee9",
".git/objects/a2/a0d3b58139fe7fa37ec8f33275742175df7291": "3101c8027bf49233c6f41115067191ea",
".git/objects/a8/b52ae393aeef956536749897a973682521c7e5": "7040cc1afd5af76034eb604c6d05d0ae",
".git/objects/ab/a27637b8f28694e702bbaa3c0f14074fadcded": "8a24e88a6527a8d57dffb642911f0d0e",
".git/objects/ac/a3ba51a16f651b3b9b32443af438f5f603b5d1": "207ec9be6f8f3d67e44a293e07144eb5",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/e3065a29a4dce4b16ed6823b2a8b5e8a6ebb89": "81e2b8495c9378089b833fb7050862bf",
".git/objects/b3/e59f2615382f112e39fbb918873a0064ddcd88": "4f6050905258d73ae6160bff5a4f2dde",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/760f694cd0adcd9ebf334c4bf86715634028ff": "8719f02994f2646ff270bce3ff866222",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6b05a0863231073e12c28261ecac99a053e7a5": "2e19669f5f645a6023c794af06ac7058",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/321f182dfee534f47a9f2e907bb2efb515ac56": "28c1eeea6b059db5edf783aefe9986a4",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/4afa3eefae2e81e13f386a71be55e292a64a9c": "4bd1e36df0bb1435a22de9898b65e263",
".git/objects/c8/52fb0007bcc130c06db163f594ca1deca4c639": "cb65c04444819acbb9a6ac23d499bda5",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/67d6bb1a9cca7bd72a5cce04301d89324795e8": "18210ff1830ae9a44ce2cec34b5a011d",
".git/objects/dd/97cbe95255f1a74cc5689216e5ae276b43ebe6": "b75e99b0b334f3646d3a5c65b8291fa2",
".git/objects/dd/c2a85cfcfd947982ffa49a7509191e652ca159": "dfa68f30c2b8b10be7fe8d43c9bb488d",
".git/objects/df/32603a1cf4475a84fe72e030a31a62a4c3a96f": "22ca8aecd773ffab3ef62b000d41994d",
".git/objects/df/fa8e6ae8403ecb7fc88e0319b696f5bf4af180": "844b4130e02eb51d64a6cb57b02d8b20",
".git/objects/e0/892e8fc8f35101ec48b333d1aeea303493b3ae": "6334a729df334cd6a6fc085ae680326b",
".git/objects/e3/ee746486edc8d17eb688d96d0a3db88f9325fb": "7485698782290c59ff27e25e58b45fa4",
".git/objects/e6/b794dd84569f4504bf337b75635f9cee265d36": "46a3e157131f4e92c83b24d0dfe858e5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ef/541054b73abc38f1e19a1c697e510e03156279": "3656bbb08b57bc165a3e36a6c5e6a7ec",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fd/071a2f2a21b58480e1c210f8d0e1dba80c2be6": "4da620bd3e34dfc204daabdb851b0bae",
".git/refs/heads/master": "2a92bec5f2a213cc74c7169b118371d1",
".git/refs/remotes/origin/master": "2a92bec5f2a213cc74c7169b118371d1",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "5e0682a34ff7bd4a3da38826528e418b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"custom_service_worker.js": "9180280e8d720c4d85c2ac3eb0ab4a47",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "e8923a6436e563af3cd42eaa73c5ce9d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "211cfb7cee64794bdf6a09521470d722",
"/": "211cfb7cee64794bdf6a09521470d722",
"main.dart.js": "19b13d692d586263bc950f0f6d0e0b0b",
"manifest.json": "6007dcad95f1ed3c93e232c5262d8a29",
"README.md": "5425a81b1eef04e3b5f5f430cc9e3dd4",
"script.js": "b3d0451bfae78701a6a77ea4b04be407",
"version.json": "f614d0828305b1807f51bafbc40b1b35"};
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
