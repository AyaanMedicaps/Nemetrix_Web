'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "07f68842bbbe253fb01a4c4866e9ef91",
".git/config": "cba01bb9048931c709dd933dd0d30b4e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2a697eab93b9c794d3dd63762991d51c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "33e378c8ad80b9bc9760d2adb13d2646",
".git/logs/refs/heads/main": "33e378c8ad80b9bc9760d2adb13d2646",
".git/logs/refs/remotes/origin/main": "52d7d4967d963699c0a5daf06e26acfc",
".git/objects/01/9c540529e9ea29059e3a94afdaf8084ae29012": "cb566375f849af7daef4667aff266a44",
".git/objects/01/fbe789d91c543ec79b8d57d929e85b20e56b30": "a866212956bdf58ce5e7cb8792d4e5f4",
".git/objects/02/1d1fb8cc050e93fc986dcddd1d737d66107e56": "4fcabecc1619226b8a9b94e4e604d9c9",
".git/objects/0b/f5909806d0a75307c1f29f7fb847154304bc9a": "761e0ed64eaf694d57d63c7793a4bd86",
".git/objects/15/5d5fad20b4c0573bf92bc28d8f37aa86f9811f": "3148aa9d38844e2f152b04c0cfd560cd",
".git/objects/15/b57472509841eeb0840999ac20669cf7852730": "780064c635332b9f00d9b9077b8b213e",
".git/objects/16/742874df8a014ff4b50f01d80bde26b510afb7": "8e4af7c04da8445bbc6a1f67b9e9ee49",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/22/472d5d718781bbfb5a068b9d48bbb709bcf7a5": "e499c034a860a38438ae8bad568df31a",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/e2f33f13dc15921f596db4bc15dfe3dce5ee13": "e843a275fce3c016e35359edbbdca636",
".git/objects/27/55aaf98bee682dd4cae7bf35f2b0e163b721b5": "e16dbcd7ae35ae7f71d80763109fae70",
".git/objects/31/17373471279e7437064f0d8de1daa797803309": "6025ca8a8ca1d4477346d5d55ef3fca1",
".git/objects/33/e08a2eeff434c83a990254efcbb564f74bca6f": "9b80b308263fe0649c265f8399794e88",
".git/objects/34/e33efa47cf250f2e4e4c31eea1de43b2ff4c02": "588e07ad80d27e7bdaacbec9e42c9dca",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/4d7d54f761212fcb37dd0ec0ed839566ecf2d9": "cbb3efdb1b4873e7ef883f4b2522efbe",
".git/objects/3e/f25db1ece74171a9a6fc245bca8ac39d1c8d6e": "527e9643ac693275eaaa5cf7e34bf617",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/f2e6cfb0ff57db51c835a00f8259cd45754ecd": "80ff4f19a5fd7fc1cdc6a6a948ac3c60",
".git/objects/42/7df537659489dd9d2623af12a575069a29ea09": "cd84ce188715fd7ff1900c5de43a5d55",
".git/objects/46/2dc9ea396ff8db0e0ea9ab1cbdd09a7003780a": "894c2d2dcf48609dee19c9d5a6b8e324",
".git/objects/48/b92600c770c01aabb62cfde75cd31308685fbe": "32d56c73faf12e5685cb35cde1ce151c",
".git/objects/4e/46030baa1e3d904e24814511a768f48cda5ee6": "2ebe88be3666e234f1fc7710d9ed4fcb",
".git/objects/4f/3a42730d9aaffb6023c3eed411e6aab16ea8fd": "69709ffb3a5b161a0dfea0059fe5b22b",
".git/objects/51/628df25f1f323e72c2b0224314953c7cbcf832": "5ef07ea124ede6292ce91939c4bfe8c9",
".git/objects/51/9f59b08c26f0a9c50f52065b271a6b5650afd8": "cbf2a56580e4ee20f810da0a3ffcb5c4",
".git/objects/51/dfe4ea4d91214f2a9751dc5c923d257bb0c0cc": "8330e775a2892c64965912867f7a87ba",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/e0980a6953b802de425030276db29bfd75076c": "223ad59dbaebdd87f640b843ceea0c53",
".git/objects/5b/a6cf1b7d23ad3cd7494e116d0337a21ff20f48": "f21179532ef561f35f0a182c3a86bd0b",
".git/objects/5e/50f35238091fe45030bac7442a710be0af4c40": "aa5b98e0abcae4848935b719c03c40fa",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/66/166a6eaff125413871166ee56b3e187eeed1d3": "198a8b4d358a28a8e7515c35bb91a4ae",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/71/0095270d1d6e51c7708da2763efee1e8fc3b8e": "7fae666377a6cef5dc63b745b21d9235",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/74/bfefa5983c2ba8264e13269b4eb44eec7db609": "681f4dcd9f03574306d77f01519efa4f",
".git/objects/75/1941997568324ef3465357f88fa90ce952e3af": "604e4c13f6ceec38304a0b43938a3ed7",
".git/objects/75/92cdff64bf44188410bf77572cc29c0521f8f1": "072f8b0a4a1f861dec25e8df5eb918fa",
".git/objects/76/d3f722f5b4134ce5645781dc3cd8cab3a64b36": "56252d3e3ac6d74f7c4d8c6af65d927c",
".git/objects/80/5a34ff593cc1bfa183525a6d206df40af3885f": "a99db62d9352e14e3652b6b83707d51a",
".git/objects/83/6ecc8d2edc1864cb44f92bbe267bc2b5a16fac": "eb1044bf61c9ec01aa114b8d345f77bc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/f42002f9dd2027f2e514f2274e066fc5419aae": "68a2a1c3853f214d6f23b5d4c183c25a",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/885e303f4ec1fa2c49f21b5a86b9a0e3cd565f": "d6a275cd54662b6db93cb14aec647362",
".git/objects/93/9b82688b92c85f2abd71d51efea36454f6d8fa": "655249a7cb93dd1d0c145d9612d63ca1",
".git/objects/98/30962ece30cee8be50c16300eaeeecccdaff23": "6a6c098519efaf9e3ed6260f8c8563c8",
".git/objects/a1/6b0c522e246d37427bb773682153239514730c": "b9b3f842142abb5973b455dd01e36f2e",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ac/7a0399ad956c441c17ccb6a89752e8ae4a8b48": "28f9089357c9e2aa84490a429039775c",
".git/objects/ac/b44053727c4da554f5cf21885dd05cdca81b91": "ae5761ff5b4700007070dc5457b6a0f0",
".git/objects/b0/fa223478487018ab6cbcf1e6008a44cfc6e7ac": "10e66b838734d1ebaf929a04ad55c892",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/046d0530aefa3bbe32780a054262f8b980e695": "175769959063b364905c7aa278892ecc",
".git/objects/bb/b2cc11bb4afd30e70a5644a9b265f1da1174d1": "47cfb80bf76d145d22a4911b56a00ff9",
".git/objects/c5/e0281b086928e974085fcfcfab8fb9804c39ec": "0abc1e1331241e9176dff5b658eea837",
".git/objects/c8/de2ec102d4dad9a2654bf61ac115e8b605531a": "ccc6d27bdfef6ebeeb8e53f01a2fc11e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/8c2d300d8d6493e8be0e8eb6e9f18bdeecc333": "c253d50c52ce59c081a88c7d686c7651",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/119adb709aca7304a067aae59fb80bd80758c3": "5365197c71834bf425729341de27b4c6",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/4ab96ae3b9566598a2b0d5026a3245859ac6c4": "63bb6f0f1f9b86d94d6b58d540c3dea9",
".git/objects/e4/ca1476ebfbb3f9e872a501599f0a0c8c4ff2d2": "30ab2514ecf78f49d92232c30c2ac0a9",
".git/objects/e5/525afcbf0886fa86a8d45691537c766e6346bf": "54648045ee768bf34199fe45e9974bbf",
".git/objects/e7/d814605a347cf76e3ce0f74ce6292ef60d1407": "7686a0b5e02799a67cc9f965ab5a1f0e",
".git/objects/e9/8a6c1a73c02379bafaa0452105f5462635b3de": "e3674f9ae6665a922836f8eeaa3f7cdb",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/1c56430b67d7fdb6c29d75a14bf86d6e37154d": "46894ae4c4268c6128fa3287f53815ab",
".git/objects/ea/bce126e6673e54c29dcda80c5303483e230caa": "0191914bbf38132fb62d4c1558adec44",
".git/objects/eb/2f2867b7312cba68897c53491304efe2dde95d": "f09381db2915bf0c73e3d8ffd63d9cb0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f1/89a985048b56b6ec0f3608a0e997722178f649": "366f1856743dea6fe6110c28bc115de1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/1332c13783f653b1430e414a3ff3cd5be4c2b4": "faa99123a056553350763744259e6cb2",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/9eb81d927bf86a23c069fe03097f48534464d8": "c31b75d65c2e12eede0164797a7b4982",
".git/objects/fb/4de0ca322ebda54cb255cc77abf136fd75c484": "d5942b0e21de010b0e83ef28a96b4a4a",
".git/objects/ff/625a1b2399f97448a217e09859a919312e93a2": "304dea8b3ac7fe948738e923a6383745",
".git/refs/heads/main": "76d556b8fbb870cb7d34062f12787f6f",
".git/refs/remotes/origin/main": "76d556b8fbb870cb7d34062f12787f6f",
"assets/AssetManifest.bin": "5859e6ea6cce2041bf32ab1c77d9631a",
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
"assets/fonts/MaterialIcons-Regular.otf": "56bc7c42c8d6105e0f9c8c4c79948428",
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
"flutter_bootstrap.js": "54baf2c0598600c1a662de61d94249d9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "14220003bf91b72d4b87c73b18321a19",
"/": "14220003bf91b72d4b87c73b18321a19",
"main.dart.js": "a4eeb846c00593285803fc838cd5cc9d",
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
