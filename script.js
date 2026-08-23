import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
  onSnapshot,
  updateDoc,
  increment,
  arrayUnion
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDLo82_t-ldJZZflwfG06ZNztnQnZ0CZII",
  authDomain: "project-f4d4093a-d950-4692-ace.firebaseapp.com",
  projectId: "project-f4d4093a-d950-4692-ace",
  storageBucket: "project-f4d4093a-d950-4692-ace.firebasestorage.app",
  messagingSenderId: "1021343442010",
  appId: "1:1021343442010:web:1d3a702988d43e7425e463"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const scriptData = [
  // =========================================================
  // ARGUS
  // =========================================================

  {
    id: "argus_titan",
    title: "Argus x Collector Titan",
    url: "https://sfile.co/UR4EPrdbUk3",
    hero: "Argus",
    type: "Crossover",
    tags: ["Collector", "Titan"]
  },

  {
    id: "vergil_argus_vip",
    title: "Vergil x Argus — VIP",
    url: "https://www.mediafire.com/file/7onrit7xsnvnhz6/Vergil+x+Argus.zip/file",
    hero: "Argus",
    type: "Access",
    tags: ["VIP", "Access"],
    accessOnly: true,
    accessMessage:
      "To get Access Download on Vergil Skin Script you need to ask The Creator On Discord or TikTok: ranzee.ron\n\nDiscord: larkdev\n\nDM it to get permission to download."
  },

  {
    id: "argus_aizen",
    title: "Argus x Sosuke Aizen",
    url: "https://sfile.co/ms4tmWTzw7j",
    hero: "Argus",
    type: "Crossover",
    tags: ["aizen", "bleach"]
  },

  {
    id: "argus_meliodas",
    title: "Argus x Meliodas",
    url: "https://sfile.co/bPzuZb4ngls",
    hero: "Argus",
    type: "Crossover",
    tags: ["meliodas", "seven-deadly-sins"]
  },

  {
    id: "argus_rimuru",
    title: "Argus x Rimuru",
    url: "https://sfile.co/ZusTdAkONGg",
    hero: "Argus",
    type: "Crossover",
    tags: ["rimuru", "tensei-slime"]
  },

  {
    id: "argus_basic",
    title: "Argus Basic",
    url: "https://sfile.co/H4YSK",
    hero: "Argus",
    type: "Basic",
    tags: ["basic"]
  },

  {
    id: "argus_aartox",
    title: "Argus x Aartox",
    url: "https://sfile.co/AeRRXUKv2AM",
    hero: "Argus",
    type: "Crossover",
    tags: ["aartox"]
  },

  {
    id: "argus_hidan2",
    title: "Argus x Hidan 2 (Transform)",
    url: "https://www.mediafire.com/file/0lmz5xm85oks3z8/ARGUS_X_HIDAN_2_%2528TRANSFORM%2529_BY_RON_replace_Default.zip/file",
    hero: "Argus",
    type: "Effects",
    tags: ["transform"]
  },

  {
    id: "argus_hidan3",
    title: "Argus x Hidan V3.5",
    url: "https://sfile.co/mEvqZNGg1Pz",
    hero: "Argus",
    type: "Crossover",
    tags: []
  },

  {
    id: "argus_gojo",
    title: "Argus — Gojo Shinjuku",
    url: "https://www.mediafire.com/file/mih8q8mp75u8zs2/Season+-+Argus+Gojo+Shinjuku+Showdown.zip/file",
    hero: "Argus",
    type: "Crossover",
    tags: []
  },

  {
    id: "argus_vader",
    title: "Argus — Darth Vader",
    url: "https://sfile.co/6H4gP29nlCJ",
    hero: "Argus",
    type: "Crossover",
    tags: []
  },

  // =========================================================
  // ALDOUS
  // =========================================================

  {
    id: "aldous_col",
    title: "Aldous — Collector",
    url: "https://sfile.mobi/7T1SBJxCFiQ",
    hero: "Aldous",
    type: "Premium",
    tags: ["collector"]
  },

  {
    id: "aldous_saitama1",
    title: "Aldous — Saitama (Link 1)",
    url: "https://sfile.mobi/5nT9SXg8ogS",
    hero: "Aldous",
    type: "Custom",
    tags: []
  },

  {
    id: "aldous_saitama2",
    title: "Aldous — Saitama (Link 2)",
    url: "https://sfile.mobi/7wSY8BllsWY",
    hero: "Aldous",
    type: "Custom",
    tags: []
  },

  // =========================================================
  // ALUCARD
  // =========================================================

  {
    id: "alucard_light",
    title: "Alucard — Lightborn",
    url: "https://sfile.mobi/95itv77QlyA",
    hero: "Alucard",
    type: "Premium",
    tags: []
  },

  {
    id: "alucard_leg",
    title: "Alucard — Legend",
    url: "https://sfile.mobi/21autDXSBmY",
    hero: "Alucard",
    type: "Premium",
    tags: ["legend"]
  },

  // =========================================================
  // BENEDETTA
  // =========================================================

  {
    id: "bene_col",
    title: "Benedetta — Collector",
    url: "https://sfile.mobi/8XmeYrXkS4B",
    hero: "Benedetta",
    type: "Premium",
    tags: ["collector"]
  },

  {
    id: "bene_death",
    title: "Benedetta — Collector Death Oath",
    url: "https://sfile.mobi/37rldelJ1Y0",
    hero: "Benedetta",
    type: "Premium",
    tags: ["collector"]
  },

  {
    id: "bene_ducati1",
    title: "Benedetta — Ducati Collector 1",
    url: "https://sfile.mobi/8tWF0Vs8h2Z",
    hero: "Benedetta",
    type: "Premium",
    tags: ["collector"]
  },

  {
    id: "bene_ducati2",
    title: "Benedetta — Ducati Collector 2",
    url: "https://sfile.mobi/7EeWb9HDMsG",
    hero: "Benedetta",
    type: "Premium",
    tags: ["collector"]
  },

  {
    id: "bene_up_def",
    title: "Benedetta — Collector (Default)",
    url: "https://sfile.mobi/5vhL4BKVaws",
    hero: "Benedetta",
    type: "Premium",
    tags: ["collector", "default"]
  },

  {
    id: "bene_up_bas",
    title: "Benedetta — Collector (Basic)",
    url: "https://sfile.mobi/9FPNnavLlCw",
    hero: "Benedetta",
    type: "Premium",
    tags: ["collector", "basic"]
  },

  {
    id: "bene_up_star",
    title: "Benedetta — Collector (Starlight)",
    url: "https://sfile.mobi/aKjNYzNPK8X",
    hero: "Benedetta",
    type: "Premium",
    tags: ["collector", "starlight"]
  },

  {
    id: "bene_up_spec",
    title: "Benedetta — Collector (Special)",
    url: "https://sfile.mobi/80pOAOThbqu",
    hero: "Benedetta",
    type: "Premium",
    tags: ["collector", "special"]
  },

  {
    id: "bene_up_cov",
    title: "Benedetta — Collector (Covenant)",
    url: "https://sfile.mobi/9jFPjR8c4Ez",
    hero: "Benedetta",
    type: "Premium",
    tags: ["collector"]
  },

  // =========================================================
  // CHOU
  // =========================================================

  {
    id: "chou_stun",
    title: "Chou — Stun",
    url: "https://sfile.mobi/87JBm5jO36r",
    hero: "Chou",
    type: "Custom",
    tags: []
  },

  {
    id: "chou_kof",
    title: "Chou — KOF",
    url: "https://sfile.mobi/avm2GnWYa4W",
    hero: "Chou",
    type: "Crossover",
    tags: ["kof"]
  },

  {
    id: "chou_dawn_up",
    title: "Chou — Dawning (Updated)",
    url: "https://sfile.mobi/4jqXIicV56s",
    hero: "Chou",
    type: "Custom",
    tags: []
  },

  {
    id: "chou_dawn_kof",
    title: "Chou — Dawning (KOF upload)",
    url: "https://sfile.mobi/87OZNUL3bim",
    hero: "Chou",
    type: "Crossover",
    tags: ["kof"]
  },

  {
    id: "chou_naruto",
    title: "Chou — Naruto",
    url: "https://sfile.mobi/8myrpAFk1Uo",
    hero: "Chou",
    type: "Crossover",
    tags: ["naruto"]
  },

  // =========================================================
  // DYRRoth
  // =========================================================

  {
    id: "dyrroth_frieza",
    title: "Dyrroth x Frieza",
    url: "https://www.mediafire.com/file/ghqpd8q05kmpdy9/dyrroth+x+frieza.zip/file",
    hero: "Dyrroth",
    type: "Crossover",
    tags: []
  },

  {
    id: "dyrroth_sasuke",
    title: "Dyrroth — Sasuke",
    url: "https://sfile.mobi/9UAgJidOAou",
    hero: "Dyrroth",
    type: "Crossover",
    tags: []
  },

  {
    id: "dyrroth_gon",
    title: "Dyrroth — Gon / HxH",
    url: "https://sfile.mobi/bzU0cmqx5m7",
    hero: "Dyrroth",
    type: "Crossover",
    tags: ["hxh"]
  },

  {
    id: "dyrroth_hxh_bas",
    title: "Dyrroth — HxH Basic",
    url: "https://sfile.mobi/3IlXNrJ7L2z",
    hero: "Dyrroth",
    type: "Crossover",
    tags: ["basic", "hxh"]
  },

  {
    id: "dyrroth_hxh_ven",
    title: "Dyrroth — HxH Venom",
    url: "https://sfile.mobi/58WbAKGix2r",
    hero: "Dyrroth",
    type: "Crossover",
    tags: ["hxh"]
  },

  // =========================================================
  // FANNY
  // =========================================================

  {
    id: "fanny_asp_def",
    title: "Fanny — Aspirant (Default)",
    url: "https://sfile.mobi/1zuX25a5isL",
    hero: "Fanny",
    type: "Premium",
    tags: ["default", "aspirant"]
  },

  {
    id: "fanny_asp_eli",
    title: "Fanny — Aspirant (Elite)",
    url: "https://sfile.mobi/80p0AELQ5iL",
    hero: "Fanny",
    type: "Premium",
    tags: ["elite", "aspirant"]
  },

  {
    id: "fanny_asp_luc",
    title: "Fanny — Aspirant (Luckybox)",
    url: "https://sfile.mobi/3eUXXHMcjYm",
    hero: "Fanny",
    type: "Premium",
    tags: ["aspirant"]
  },

  {
    id: "fanny_asp_val",
    title: "Fanny — Aspirant (Valentine)",
    url: "https://sfile.mobi/4qMYDIF6msj",
    hero: "Fanny",
    type: "Premium",
    tags: ["aspirant"]
  },

  {
    id: "fanny_asp_sea",
    title: "Fanny — Aspirant (Season)",
    url: "https://sfile.mobi/ao91UKtjpeo",
    hero: "Fanny",
    type: "Premium",
    tags: ["aspirant", "season"]
  },

  {
    id: "fanny_asp_2",
    title: "Fanny — Aspirant 2",
    url: "https://sfile.mobi/37m0crzZuUK",
    hero: "Fanny",
    type: "Premium",
    tags: ["aspirant"]
  },

  {
    id: "fanny_asp_rep",
    title: "Fanny — Aspirant Replace Elite",
    url: "https://sfile.mobi/8IKDqdfgqID",
    hero: "Fanny",
    type: "Premium",
    tags: ["elite", "aspirant"]
  },

  {
    id: "fanny_kibou",
    title: "Fanny — Blade of Kibou",
    url: "https://sfile.mobi/bsxtBJOxna7",
    hero: "Fanny",
    type: "Premium",
    tags: []
  },

  {
    id: "fanny_aot",
    title: "Fanny — AOT Elite",
    url: "https://sfile.mobi/5nUAyZMj0kv",
    hero: "Fanny",
    type: "Crossover",
    tags: ["elite", "aot"]
  },

  // =========================================================
  // GORD
  // =========================================================

  {
    id: "gord_leg",
    title: "Gord — Legend",
    url: "https://sfile.mobi/21autDXSBmY",
    hero: "Gord",
    type: "Premium",
    tags: ["legend"]
  },

  // =========================================================
  // GUSION
  // =========================================================

  {
    id: "gusion_kakashi",
    title: "Gusion — Kakashi Default",
    url: "https://www.mediafire.com/file/0z0caqgc4rhgi61/GUSION_KAKASIH_DELFAUT_%2528SFILE.MOBI%2529.zip/file",
    hero: "Gusion",
    type: "Crossover",
    tags: ["default"]
  },

  {
    id: "gusion_leg",
    title: "Gusion — Legend",
    url: "https://sfile.mobi/7pi3efwYX6z",
    hero: "Gusion",
    type: "Premium",
    tags: ["legend"]
  },

  {
    id: "gusion_leg_eli",
    title: "Gusion — Legend Replace Elite",
    url: "https://sfile.mobi/1ztU46DfrCm",
    hero: "Gusion",
    type: "Premium",
    tags: ["legend", "elite"]
  },

  {
    id: "gusion_leg_fx",
    title: "Gusion — Legend Full Effect",
    url: "https://sfile.mobi/6rWl4Khvz2Z",
    hero: "Gusion",
    type: "Effects",
    tags: ["legend", "effect"]
  },

  {
    id: "gusion_col_leg",
    title: "Gusion — Collector/Legend",
    url: "https://sfile.mobi/6H9yEtGgCW0",
    hero: "Gusion",
    type: "Premium",
    tags: ["collector", "legend"]
  },

  // =========================================================
  // HAYABUSA
  // =========================================================

  {
    id: "haya_anbu",
    title: "Hayabusa — Kakashi Anbu",
    url: "https://sfile.mobi/80o0HaKU36u",
    hero: "Hayabusa",
    type: "Crossover",
    tags: []
  },

  {
    id: "haya_sum",
    title: "Hayabusa — Kakashi Summer",
    url: "https://sfile.mobi/1kIyloFQ5en",
    hero: "Hayabusa",
    type: "Crossover",
    tags: []
  },

  {
    id: "haya_bas",
    title: "Hayabusa — Kakashi Basic",
    url: "https://sfile.mobi/4MWAAgmJLyx",
    hero: "Hayabusa",
    type: "Crossover",
    tags: ["basic"]
  },

  // =========================================================
  // IXIA
  // =========================================================

  {
    id: "ixia_star",
    title: "Ixia — Starlight Painted",
    url: "https://sfile.mobi/30aK5XPLawQ",
    hero: "Ixia",
    type: "Premium",
    tags: ["starlight"]
  },

  // =========================================================
  // JULIAN
  // =========================================================

  {
    id: "julian_fatcat",
    title: "Julian — FATCAT",
    url: "https://sfile.mobi/4jpzLNgtaMy",
    hero: "Julian",
    type: "Custom",
    tags: []
  },

  // =========================================================
  // KADITA
  // =========================================================

  {
    id: "kadita_lake",
    title: "Kadita — Divine Sakura",
    url: "https://www.mediafire.com/file/c2zhk0t62rxthir/Kadita_Divine_sakura_lake_-_Create_skin_V2.zip/file",
    hero: "Kadita",
    type: "Custom",
    tags: []
  },

  {
    id: "kadita_star",
    title: "Kadita — Starlight",
    url: "https://sfile.mobi/80pSDlzzEcR",
    hero: "Kadita",
    type: "Premium",
    tags: ["starlight"]
  },

  // =========================================================
  // KAGURA
  // =========================================================

  {
    id: "kagura_sum",
    title: "Kagura — Annual Starlight",
    url: "https://sfile.mobi/9FQWojRpLiE",
    hero: "Kagura",
    type: "Premium",
    tags: ["starlight"]
  },

  // =========================================================
  // KARRIE
  // =========================================================

  {
    id: "karrie_kishin",
    title: "Karrie — Kishin",
    url: "https://sfile.mobi/8Q8wflHwUE4",
    hero: "Karrie",
    type: "Custom",
    tags: []
  },

  // =========================================================
  // LAYLA
  // =========================================================

  {
    id: "layla_col_def",
    title: "Layla — Collector (Default)",
    url: "https://sfile.mobi/9FOp2J4hnU2",
    hero: "Layla",
    type: "Premium",
    tags: ["collector", "default"]
  },

  {
    id: "layla_col_bas",
    title: "Layla — Collector (Basic)",
    url: "https://sfile.mobi/9cgoLx6fAsC",
    hero: "Layla",
    type: "Premium",
    tags: ["collector", "basic"]
  },

  {
    id: "layla_col_asp",
    title: "Layla — Collector (Aspirant)",
    url: "https://sfile.mobi/9cgoLmbuBGV",
    hero: "Layla",
    type: "Premium",
    tags: ["collector", "aspirant"]
  },

  {
    id: "layla_col_star",
    title: "Layla — Collector (Starlight)",
    url: "https://sfile.mobi/4jom5yKAYM5",
    hero: "Layla",
    type: "Premium",
    tags: ["collector", "starlight"]
  },

  {
    id: "layla_col_clas",
    title: "Layla — Collector (Classic)",
    url: "https://sfile.mobi/94SoHYZXOgh",
    hero: "Layla",
    type: "Premium",
    tags: ["collector"]
  },

  {
    id: "layla_col_new",
    title: "Layla — Collector (New Star)",
    url: "https://sfile.mobi/5gumBEMNMIA",
    hero: "Layla",
    type: "Premium",
    tags: ["collector"]
  },

  // =========================================================
  // LESLEY
  // =========================================================

  {
    id: "lesley_leg",
    title: "Lesley — Legend Mutiara",
    url: "https://sfile.mobi/5Rg0ATjQ3eU",
    hero: "Lesley",
    type: "Premium",
    tags: ["legend"]
  },

  // =========================================================
  // LING
  // =========================================================

  {
    id: "ling_koku",
    title: "Ling — Kokushibo",
    url: "https://sfile.mobi/51KACqI4bY9",
    hero: "Ling",
    type: "Crossover",
    tags: []
  },

  {
    id: "ling_neo_bas",
    title: "Ling — Neobeast Basic",
    url: "https://sfile.mobi/1GUdqEDwHut",
    hero: "Ling",
    type: "Default",
    tags: ["basic"]
  },

  {
    id: "ling_neo_col",
    title: "Ling — Neobeast Collector",
    url: "https://sfile.mobi/2SJYyLFIyso",
    hero: "Ling",
    type: "Premium",
    tags: ["collector"]
  },

  {
    id: "ling_neo_spec",
    title: "Ling — Neobeast Special",
    url: "https://sfile.mobi/5YO0fziYnK9",
    hero: "Ling",
    type: "Premium",
    tags: ["special"]
  },

  {
    id: "ling_neo_star",
    title: "Ling — Neobeast Starlight",
    url: "https://sfile.mobi/4jnZkiwnkIc",
    hero: "Ling",
    type: "Premium",
    tags: ["starlight"]
  },

  {
    id: "ling_neo_mworld",
    title: "Ling — Neobeast M-World",
    url: "https://sfile.mobi/3IrZ0r1QGcw",
    hero: "Ling",
    type: "Custom",
    tags: []
  },

  {
    id: "ling_mworld",
    title: "Ling — M-World",
    url: "https://sfile.mobi/avsvoWQ9gWe",
    hero: "Ling",
    type: "Custom",
    tags: []
  },

  {
    id: "ling_dragon",
    title: "Ling — Dragon Tamer",
    url: "https://sfile.mobi/1GHzWNBLN6V",
    hero: "Ling",
    type: "Crossover",
    tags: []
  },

  // =========================================================
  // MELISSA
  // =========================================================

  {
    id: "melissa_jjk",
    title: "Melissa — Jujutsu Kaisen",
    url: "https://sfile.mobi/AWZqUnt2Ni7",
    hero: "Melissa",
    type: "Custom",
    tags: []
  },

  // =========================================================
  // MIYA
  // =========================================================

  {
    id: "miya_leg",
    title: "Miya — Elite → Legend",
    url: "https://sfile.mobi/738r8dhx1CA",
    hero: "Miya",
    type: "Premium",
    tags: ["legend", "elite"]
  },

  {
    id: "miya_star",
    title: "Miya — Starlight → Default",
    url: "https://sfile.mobi/bOLrh6eZNY7",
    hero: "Miya",
    type: "Premium",
    tags: ["starlight", "default"]
  },

  // =========================================================
  // MOSKOV
  // =========================================================

  {
    id: "moskov_allstar",
    title: "Moskov — All-Star Default",
    url: "https://sfile.mobi/8PVsk41trGp",
    hero: "Moskov",
    type: "Default",
    tags: ["default"]
  },

  {
    id: "moskov_wyrm_def",
    title: "Moskov — Wyrmlord → Default",
    url: "https://sfile.mobi/80kvAQcbPaT",
    hero: "Moskov",
    type: "Premium",
    tags: ["default"]
  },

  {
    id: "moskov_wyrm_bas",
    title: "Moskov — Wyrmlord → Basic",
    url: "https://sfile.mobi/7SWvx7b94cy",
    hero: "Moskov",
    type: "Premium",
    tags: ["basic"]
  },

  // =========================================================
  // SUYOU
  // =========================================================

  {
    id: "suyou_sasuke",
    title: "Suyou — Sasuke Uchiha",
    url: "https://sfile.mobi/94RPBW41tm6",
    hero: "Suyou",
    type: "Crossover",
    tags: []
  },

  // =========================================================
  // VALE
  // =========================================================

  {
    id: "vale_dawn",
    title: "Vale — Dawning",
    url: "https://sfile.mobi/37yWYL0RpeO",
    hero: "Vale",
    type: "Custom",
    tags: []
  },

  // =========================================================
  // YIN
  // =========================================================

  {
    id: "yin_meguna",
    title: "Yin x Meguna Sukuna",
    url: "https://www.mediafire.com/file/uenfpk06eqdfjv2/Yin+x+Meguna+reincarnation+Sukuna+Heian+Era.zip/file",
    hero: "Yin",
    type: "Crossover",
    tags: []
  },

  {
    id: "yin_vessel",
    title: "Yin X Sukuna-Megumi Vessel",
    url: "https://www.mediafire.com/file/64hnvm8z60tv45u/%255BUchi_Cop%255D-Yin_X_Sukuna-Megumi_Vessel_Optimized%252BRevamp_hein_Era_Fix_v1.zip/file",
    hero: "Yin X Sukuna-Megumi Vessel",
    type: "Crossover",
    tags: []
  },

  {
    id: "yin_aot",
    title: "Yin — AOT",
    url: "https://sfile.mobi/8B5TbFW7kIM",
    hero: "Yin",
    type: "Crossover",
    tags: ["aot"]
  },

  {
    id: "yin_obito",
    title: "Yin — Obito",
    url: "https://sfile.mobi/9Nd1d7ouhGS",
    hero: "Yin",
    type: "Crossover",
    tags: []
  },

  {
    id: "yin_jjk",
    title: "Yin — Jujutsu Kaisen",
    url: "https://sfile.mobi/51vMWbCkZqh",
    hero: "Yin",
    type: "Custom",
    tags: []
  },

  // =========================================================
  // OTHER
  // =========================================================

  {
    id: "arlott_zoro",
    title: "Arlott X Zoro Default",
    url: "https://www.mediafire.com/file/bk0skwlzc0vqhel/Script_Arlot_X_Zoro_Default_%2528SFILE.MOBI%2529.zip/file",
    hero: "Arlott X Zoro Default",
    type: "Crossover",
    tags: ["default"]
  },

  {
    id: "brody_choso",
    title: "Brody as Choso 3D MODEL",
    url: "https://www.mediafire.com/file/4tbe3ivff83qujx/Brody_as_Choso_3D_MODEL_by_XvinoyOfficial_Replace_Default_%2528SFILE.MOBI%2529.zip/file",
    hero: "Brody as Choso 3D MODEL",
    type: "Crossover",
    tags: []
  },

  {
    id: "bane_kisame",
    title: "Bane X Kisame Full Effect",
    url: "https://www.mediafire.com/file/qewc5z6qwux5wf7/%255BPREMIUM%255D_Bane_X_Kisame%252B%2528Full_Effect%252BShark.zip/file",
    hero: "Bane X Kisame Full Effect",
    type: "Effects",
    tags: ["effect"]
  },

  {
    id: "server_1",
    title: "Exclusive Server Pack 1",
    url: "https://sfile.co/XZVpBmzlr88",
    hero: "Exclusive Server Pack 1",
    type: "Custom",
    tags: []
  },

  {
    id: "server_2",
    title: "Exclusive Server Pack 2",
    url: "https://sfile.co/M8js0dbtDNA",
    hero: "Exclusive Server Pack 2",
    type: "Custom",
    tags: []
  },

  {
    id: "server_3",
    title: "Exclusive Server Pack 3",
    url: "https://sfile.co/lFGVzOaGcga",
    hero: "Exclusive Server Pack 3",
    type: "Custom",
    tags: []
  }
];

const customScriptSkins = [
  { id: "custom_argus_ichigo", title: "Argus x Ichigo — Bankai Concept", hero: "Argus", type: "Custom", tags: ["ichigo", "bankai"], customOnly: true, description: "Fan concept: Argus with a Bankai-inspired transformation theme and red-black slash effects." },
  { id: "custom_argus_gojo", title: "Argus x Gojo — Limitless Concept", hero: "Argus", type: "Custom", tags: ["gojo", "limitless"], customOnly: true, description: "Fan concept: a Limitless-style aura package with blue energy trails and a high-speed ultimate." },
  { id: "custom_argus_sukuna", title: "Argus x Sukuna — Heian Concept", hero: "Argus", type: "Custom", tags: ["sukuna", "heian"], customOnly: true, description: "Fan concept: demonic armor, crimson aura and a Heian-era inspired finisher." },
  { id: "custom_gusion_aizen", title: "Gusion x Aizen — Illusion Cut", hero: "Gusion", type: "Custom", tags: ["aizen", "illusion"], customOnly: true, description: "Fan concept: illusion-themed teleport trails and a mirrored slash effect." },
  { id: "custom_ling_kokushibo", title: "Ling x Kokushibo — Moon Edge", hero: "Ling", type: "Custom", tags: ["kokushibo", "moon"], customOnly: true, description: "Fan concept: moon-blade trails with layered crimson crescents." },
  { id: "custom_yin_madara", title: "Yin x Madara — Rinnegan Concept", hero: "Yin", type: "Custom", tags: ["madara", "rinnegan"], customOnly: true, description: "Fan concept: purple-black aura, ocular glow and a gravity-style ultimate." },
  { id: "custom_fanny_levi", title: "Fanny x Levi — ODM Concept", hero: "Fanny", type: "Custom", tags: ["levi", "aot"], customOnly: true, description: "Fan concept: dual-cable visual trails, steel-blue accents and a rapid spin finisher." },
  { id: "custom_dyrroth_vegeta", title: "Dyrroth x Vegeta — Ultra Ego", hero: "Dyrroth", type: "Custom", tags: ["vegeta", "ultra-ego"], customOnly: true, description: "Fan concept: purple battle aura, impact bursts and a transformation-ready finisher." },
  { id: "custom_chou_roronoa", title: "Chou x Zoro — Three Sword Concept", hero: "Chou", type: "Custom", tags: ["zoro", "swords"], customOnly: true, description: "Fan concept: green slash trails and a three-sword inspired ultimate animation." },
  { id: "custom_benedetta_mikasa", title: "Benedetta x Mikasa — Scout Concept", hero: "Benedetta", type: "Custom", tags: ["mikasa", "aot"], customOnly: true, description: "Fan concept: scout-style mobility effects and steel cable motion cues." },
  { id: "custom_layla_neon", title: "Layla — Cyber Neon Custom", hero: "Layla", type: "Custom", tags: ["neon", "cyber"], customOnly: true, description: "Original custom concept featuring a holographic cannon, magenta beam and scanline muzzle flash." },
  { id: "custom_moskov_void", title: "Moskov — Void Wyrm Custom", hero: "Moskov", type: "Custom", tags: ["void", "wyrm"], customOnly: true, description: "Original custom concept with violet projectile trails and void-dragon impact effects." },
  { id: "custom_kagura_sakura", title: "Kagura — Sakura Eclipse Custom", hero: "Kagura", type: "Custom", tags: ["sakura", "eclipse"], customOnly: true, description: "Original custom concept mixing cherry-blossom petals with eclipse shadows." },
  { id: "custom_vale_storm", title: "Vale — Storm Emperor Custom", hero: "Vale", type: "Custom", tags: ["storm", "emperor"], customOnly: true, description: "Original custom concept centered on a thunderstorm aura and charged wind blades." },
  { id: "custom_julian_time", title: "Julian — Time Rift Custom", hero: "Julian", type: "Custom", tags: ["time", "rift"], customOnly: true, description: "Original custom concept with clockwork shards, time-split dashes and rewind visuals." },
  { id: "custom_nana_witch", title: "Nana — Moon Witch Custom", hero: "Nana", type: "Custom", tags: ["witch", "moon"], customOnly: true, description: "Original custom concept with lunar sigils, soft purple particles and spellbook motifs." },
  { id: "custom_nolan_rift", title: "Nolan — Rift Runner Custom", hero: "Nolan", type: "Custom", tags: ["rift", "runner"], customOnly: true, description: "Original custom concept with fractured portals and high-speed dimensional cuts." },
  { id: "custom_ruby_bloodmoon", title: "Ruby — Blood Moon Custom", hero: "Ruby", type: "Custom", tags: ["blood-moon", "scythe"], customOnly: true, description: "Original custom concept with crimson moon particles and a spectral scythe trail." }
];

// Keep custom concepts in the main searchable vault too.
scriptData.push(...customScriptSkins);

const heroVault = [
  "Argus",
  "Aldous",
  "Alucard",
  "Benedetta",
  "Chou",
  "Dyrroth",
  "Fanny",
  "Gord",
  "Gusion",
  "Hayabusa",
  "Ixia",
  "Julian",
  "Kadita",
  "Kagura",
  "Karrie",
  "Layla",
  "Lesley",
  "Ling",
  "Melissa",
  "Miya",
  "Moskov",
  "Suyou",
  "Vale",
  "Yin",
  "Yin X Sukuna-Megumi Vessel",
  "Arlott X Zoro Default",
  "Brody as Choso 3D MODEL",
  "Bane X Kisame Full Effect",
  "Exclusive Server Pack 1",
  "Exclusive Server Pack 2",
  "Exclusive Server Pack 3",
  "Zhuxin",
  "Lukas",
  "Chip",
  "Cici",
  "Nolan",
  "Nana",
  "Ruby",
  "Paquito",
  "Natan",
  "Novaria",
  "Joy",
  "Arlott",
  "Xavier",
  "Fredrinn",
  "Valentina"
];

const state = {
  query: "",
  hero: "all",
  type: "all",
  sort: "featured",
  favoritesOnly: false,
  view: localStorage.getItem("ron_view") || "grid",
  theme: localStorage.getItem("ron_theme") || "neon",
  reduceMotion: localStorage.getItem("ron_motion") === "off",
  compact: localStorage.getItem("ron_compact") === "on",
  currentCommentId: null
};

const cache = {};
let unsubscribers = [];

const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];

function escapeHTML(v = "") {
  return String(v).replace(
    /[&<>'"]/g,
    c =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
      })[c]
  );
}

function shortDescription(s) {
  if (s.description) return s.description;
  if (s.accessOnly) return "VIP entry • creator permission required";
  if (s.customOnly) return "Custom concept • no public file attached";
  return "Community skin script entry";
}

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(x => x[0])
    .join("")
    .toUpperCase();
}

function toast(msg) {
  const root = $("#toast-root");
  if (!root) return;

  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = msg;

  root.appendChild(el);

  setTimeout(() => el.remove(), 2800);
}

function favoriteKey(id) {
  return `ron_fav_${id}`;
}

function isFavorite(id) {
  return localStorage.getItem(favoriteKey(id)) === "1";
}

function setFavorite(id, on) {
  if (on) {
    localStorage.setItem(favoriteKey(id), "1");
  } else {
    localStorage.removeItem(favoriteKey(id));
  }
}

function getFavorites() {
  return scriptData.filter(s => isFavorite(s.id));
}

function firestoreReady() {
  try {
    return !!db;
  } catch {
    return false;
  }
}

async function ensureDoc(id) {
  if (!firestoreReady()) return;

  try {
    await setDoc(
      doc(db, "scripts", id),
      {
        likes: 0,
        views: 0,
        comments: [],
        ratings: []
      },
      { merge: true }
    );
  } catch (e) {
    console.warn("Firebase init failed", e);
  }
}

async function mutate(id, payload) {
  if (!firestoreReady()) return false;

  try {
    await updateDoc(doc(db, "scripts", id), payload);
    return true;
  } catch (e) {
    console.warn("Firebase write failed", e);
    toast("Cloud sync unavailable — saved locally where possible.");
    return false;
  }
}

function hydrateControls() {
  const themeSelect = $("#theme-select");
  if (themeSelect) themeSelect.value = state.theme;

  const motionToggle = $("#motion-toggle");
  if (motionToggle) {
    motionToggle.textContent = state.reduceMotion ? "Off" : "On";
  }

  const compactToggle = $("#compact-toggle");
  if (compactToggle) {
    compactToggle.textContent = state.compact ? "On" : "Off";
  }

  document.body.className =
    `theme-${state.theme} ${state.reduceMotion ? "reduce-motion" : ""}`;

  document.documentElement.classList.toggle(
    "compact-mode",
    state.compact
  );
}

function setTheme(theme) {
  state.theme = theme;
  localStorage.setItem("ron_theme", theme);
  hydrateControls();
  toast(`Theme switched to ${theme}.`);
}

function cycleTheme() {
  const themes = ["neon", "midnight", "ice", "sunset", "mono"];
  const next =
    themes[(themes.indexOf(state.theme) + 1) % themes.length];

  setTheme(next);
}

function fillFilters() {
  const heroes = [
    ...new Set(scriptData.map(s => s.hero))
  ].sort((a, b) => a.localeCompare(b));

  $("#hero-filter").innerHTML =
    '<option value="all">All heroes</option>' +
    heroes
      .map(
        h =>
          `<option value="${escapeHTML(h)}">${escapeHTML(h)}</option>`
      )
      .join("");

  const types = [
    ...new Set(scriptData.map(s => s.type))
  ].sort();

  $("#type-filter").innerHTML =
    '<option value="all">All types</option>' +
    types
      .map(
        t =>
          `<option value="${escapeHTML(t)}">${escapeHTML(t)}</option>`
      )
      .join("");

  $("#stat-types").textContent = types.length;
}

function mergedData() {
  return scriptData.map(s => ({
    ...s,
    ...(cache[s.id] || {})
  }));
}

function filteredData() {
  const q = state.query.trim().toLowerCase();

  let data = mergedData().filter(s => {
    const hay = [
      s.title,
      s.hero,
      s.type,
      ...(s.tags || [])
    ]
      .join(" ")
      .toLowerCase();

    return (
      (!q || hay.includes(q)) &&
      (state.hero === "all" || s.hero === state.hero) &&
      (state.type === "all" || s.type === state.type) &&
      (!state.favoritesOnly || isFavorite(s.id))
    );
  });

  if (state.sort === "az") {
    data.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (state.sort === "za") {
    data.sort((a, b) => b.title.localeCompare(a.title));
  }

  if (state.sort === "hero") {
    data.sort(
      (a, b) =>
        a.hero.localeCompare(b.hero) ||
        a.title.localeCompare(b.title)
    );
  }

  if (state.sort === "newest") {
    data.reverse();
  }

  return data;
}

function getAccessMessage(s) {
  return (
    s.accessMessage ||
    "Access required. Please contact the creator for permission to download."
  );
}

function setupAccessButton(button, s) {
  if (!button || !s?.accessOnly) return;

  button.removeAttribute("href");

  button.innerHTML =
    '<i class="fa-solid fa-lock"></i> Access';

  button.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();

    alert(getAccessMessage(s));
  });
}

function cardTemplate(s) {
  const t = $("#skin-card-template").content.cloneNode(true);
  const card = $(".script-card", t);
  if (!card) throw new Error("Skin card template is missing .script-card");

  card.dataset.id = s.id;
  card.classList.toggle("is-vip", !!s.accessOnly);
  card.classList.toggle("is-custom", !!s.customOnly);

  $(".skin-badge", card).textContent = (s.type || "Custom").toUpperCase();
  $(".hero-letter", card).textContent = initials(s.hero);
  $(".skin-title", card).textContent = s.title;
  $(".hero-name", card).textContent = s.hero;
  $(".skin-description", card).textContent = shortDescription(s);
  $(".card-status", card).textContent = s.accessOnly ? "VIP" : (s.customOnly ? "LAB" : "READY");
  $(".card-type-dot", card).className = `card-type-dot ${s.accessOnly ? "vip" : s.customOnly ? "custom" : "ready"}`;

  $(".tag-row", card).innerHTML = (s.tags || [])
    .slice(0, 4)
    .map(tag => `<span class="tag">#${escapeHTML(tag)}</span>`)
    .join("");

  $(".likes", card).textContent = s.likes || 0;
  $(".views", card).textContent = s.views || 0;

  const fav = $(".favorite-btn", card);
  fav.classList.toggle("active", isFavorite(s.id));
  fav.innerHTML = isFavorite(s.id)
    ? '<i class="fa-solid fa-star"></i>'
    : '<i class="fa-regular fa-star"></i>';
  fav.addEventListener("click", e => {
    e.stopPropagation();
    const on = !isFavorite(s.id);
    setFavorite(s.id, on);
    fav.classList.toggle("active", on);
    fav.innerHTML = on ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star"></i>';
    updateCounters();
    if (state.favoritesOnly) renderScripts();
  });

  const actionBtn = $(".download-btn", card);
  if (s.accessOnly) {
    setupAccessButton(actionBtn, s);
  } else if (s.customOnly) {
    actionBtn.removeAttribute("href");
    actionBtn.innerHTML = '<i class="fa-solid fa-eye"></i> Preview';
    actionBtn.title = "Preview custom concept";
    actionBtn.addEventListener("click", e => { e.preventDefault(); e.stopPropagation(); openDetails(s.id); });
  } else if (s.url) {
    actionBtn.removeAttribute("href");
    actionBtn.innerHTML = '<i class="fa-solid fa-download"></i> Download';
    actionBtn.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();
      window.open(s.url, "_blank", "noopener,noreferrer");
    });
  }

  const commentBtn = $(".comment-btn", card);
  commentBtn.addEventListener("click", () => openComments(s.id));
  const detailsBtn = $(".details-btn", card);
  detailsBtn.addEventListener("click", () => openDetails(s.id));

  return t;
}

function renderFeatured() {
  const wrap = $("#featured-grid");
  if (!wrap) return;
  const picks = filteredData().filter(s => !s.customOnly).slice(0, 4);
  wrap.innerHTML = picks.map(s => `
    <button class="featured-card" data-featured-id="${escapeHTML(s.id)}">
      <span class="featured-badge">${escapeHTML((s.type || "SKIN").toUpperCase())}</span>
      <strong>${escapeHTML(s.title)}</strong>
      <small>${escapeHTML(s.hero)}</small>
    </button>
  `).join("");
  $$(".featured-card", wrap).forEach(btn => btn.addEventListener("click", () => openDetails(btn.dataset.featuredId)));
}

function renderCustomLab() {
  const grid = $("#custom-grid");
  if (!grid) return;
  grid.innerHTML = "";
  customScriptSkins.forEach(s => grid.appendChild(cardTemplate(s)));
  const badge = $("#custom-badge");
  if (badge) badge.textContent = customScriptSkins.length;
}

function renderScripts() {
  const grid = $("#scripts-grid");
  if (!grid) return;
  grid.classList.toggle("compact", state.view === "compact");
  grid.innerHTML = "";
  const data = filteredData();
  data.forEach(s => { try { grid.appendChild(cardTemplate(s)); } catch (error) { console.error("Card error:", s.id, error); } });
  $("#result-summary").textContent = `Showing ${data.length} of ${scriptData.length} skin scripts`;
  $("#empty-state").hidden = !!data.length;
  const gridView = $('.view-btn[data-view="grid"]');
  const compactView = $('.view-btn[data-view="compact"]');
  if (gridView) gridView.classList.toggle("active", state.view === "grid");
  if (compactView) compactView.classList.toggle("active", state.view === "compact");
  const favGrid = $("#favorites-grid");
  if (favGrid) {
    favGrid.innerHTML = "";
    getFavorites().forEach(s => favGrid.appendChild(cardTemplate({ ...s, ...(cache[s.id] || {}) })));
  }
  const empty = $("#favorites-empty");
  if (empty) empty.style.display = getFavorites().length ? "none" : "block";
  renderFeatured();
}

function renderHeroes() {
  const byHero = {};

  scriptData.forEach(s => {
    (byHero[s.hero] ??= []).push(s);
  });

  const grid = $("#heroes-grid");

  grid.innerHTML = heroVault
    .map(h => {
      const ready = !!byHero[h]?.length;

      return `
        <article
          class="hero-card glass ${ready ? "ready" : ""}"
          data-hero="${escapeHTML(h)}"
        >
          <div class="hero-orb">${initials(h)}</div>
          <h3>${escapeHTML(h)}</h3>
          <p>
            ${
              ready
                ? `${byHero[h].length} skin script${
                    byHero[h].length === 1 ? "" : "s"
                  }`
                : "New hero slot • coming soon"
            }
          </p>
          <span class="request">
            ${ready ? "View skins →" : "Request a skin →"}
          </span>
        </article>
      `;
    })
    .join("");

  $$(".hero-card", grid).forEach(card =>
    card.addEventListener("click", () => {
      const h = card.dataset.hero;

      if (byHero[h]?.length) {
        switchHero(h);
      } else {
        toast(
          `${h} is a ready-to-fill hero slot — add a real download URL when the script is available.`
        );
      }
    })
  );
}

function switchHero(hero) {
  state.hero = hero;
  state.favoritesOnly = false;

  $('[data-tab="skins"]').click();

  $("#hero-filter").value = hero;

  renderScripts();

  $("#tab-skins").scrollIntoView({
    behavior: state.reduceMotion ? "auto" : "smooth",
    block: "start"
  });
}

function updateCounters() {
  const fav = getFavorites().length;

  $("#stat-skins").textContent = scriptData.length;

  $("#stat-heroes").textContent =
    new Set(scriptData.map(s => s.hero)).size;

  $("#stat-favorites").textContent = fav;

  $("#fav-badge").textContent = fav;

  $("#hero-count").textContent =
    `${scriptData.length} skins`;

  $("#hero-heroes").textContent =
    `${new Set(scriptData.map(s => s.hero)).size} heroes`;
}

function openDetails(id) {
  const base = scriptData.find(x => x.id === id);
  if (!base) return;
  const s = { ...base, ...(cache[id] || {}) };
  const rating = Array.isArray(s.ratings) && s.ratings.length ? (s.ratings.reduce((a,b)=>a+b,0)/s.ratings.length).toFixed(1) : "0.0";
  let actionButton = "";
  if (s.accessOnly) {
    actionButton = `<button class="primary-btn" id="details-access"><i class="fa-solid fa-lock"></i> Access</button>`;
  } else if (s.customOnly) {
    actionButton = `<button class="primary-btn" id="details-custom"><i class="fa-solid fa-wand-magic-sparkles"></i> Custom Concept</button>`;
  } else {
    actionButton = `<a class="primary-btn" href="${escapeHTML(s.url || "#")}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-download"></i> Download</a>`;
  }
  const notice = s.accessOnly
    ? `<div class="access-notice"><strong><i class="fa-solid fa-crown"></i> VIP Access Required</strong><p>${escapeHTML(getAccessMessage(s))}</p></div>`
    : s.customOnly
      ? `<div class="access-notice custom-notice"><strong><i class="fa-solid fa-flask"></i> Custom Lab Entry</strong><p>${escapeHTML(shortDescription(s))}</p><small>No public file is attached to this concept yet.</small></div>`
      : "";
  $("#modal-body").innerHTML = `
    <div class="details-hero">
      <div class="details-orb">${initials(s.hero)}</div>
      <div><span class="eyebrow">${escapeHTML((s.type || "SKIN").toUpperCase())}</span><h3>${escapeHTML(s.title)}</h3><p>${escapeHTML(s.hero)}</p><div class="details-tags">${(s.tags || []).map(t => `<span class="tag">#${escapeHTML(t)}</span>`).join("")}</div></div>
    </div>
    <div class="details-grid"><div class="detail-stat"><b>${s.likes || 0}</b><span>Likes</span></div><div class="detail-stat"><b>${s.views || 0}</b><span>Views</span></div><div class="detail-stat"><b>${rating}</b><span>Rating</span></div></div>
    <div class="details-description"><p>${escapeHTML(shortDescription(s))}</p></div>
    ${notice}
    <div class="details-actions">${actionButton}<button class="ghost-btn" id="details-copy"><i class="fa-solid fa-link"></i> Copy ID</button><button class="ghost-btn" id="details-comment"><i class="fa-regular fa-comment"></i> Comments</button></div>`;
  if (s.accessOnly) $("#details-access").addEventListener("click", e => { e.preventDefault(); alert(getAccessMessage(s)); });
  if (s.customOnly) $("#details-custom").addEventListener("click", () => toast("Custom concept only — create a release file before publishing a download link."));
  $("#details-copy").addEventListener("click", async () => { try { await navigator.clipboard.writeText(s.id); toast("Skin ID copied."); } catch { toast(s.id); } });
  $("#details-comment").addEventListener("click", () => { $("#details-modal").close(); openComments(id); });
  $("#details-modal").showModal();
}

function openComments(id) {
  state.currentCommentId = id;

  const s = scriptData.find(
    x => x.id === id
  );

  $("#comments-title").textContent =
    `Comments • ${s?.title || "Skin"}`;

  renderComments(
    cache[id]?.comments || []
  );

  $("#comments-modal").showModal();

  ensureDoc(id);
}

function renderComments(comments) {
  const list = $("#comment-list");

  list.innerHTML = comments?.length
    ? comments
        .map(
          c => `
            <div class="comment">
              <strong>
                ${escapeHTML(c.name || "Anonymous Guest")}
              </strong>

              <time>community</time>

              <p>
                ${escapeHTML(c.text || "")}
              </p>
            </div>
          `
        )
        .join("")
    : `
      <div class="empty-state">
        <p>No comments yet. Be the first.</p>
      </div>
    `;

  list.scrollTop = list.scrollHeight;
}

async function submitComment() {
  const id = state.currentCommentId;

  if (!id) return;

  const text =
    $("#guest-comment").value.trim();

  if (!text) {
    return toast("Write a comment first.");
  }

  const name =
    $("#guest-name").value.trim() ||
    "Anonymous Guest";

  const comment = {
    name: name.slice(0, 40),
    text: text.slice(0, 600)
  };

  const ok = await mutate(id, {
    comments: arrayUnion(comment)
  });

  if (ok) {
    $("#guest-comment").value = "";
    toast("Comment posted.");
  }
}

function wireRealtime() {
  unsubscribers.forEach(
    fn => fn && fn()
  );

  unsubscribers = [];

  scriptData.forEach(s => {
    ensureDoc(s.id);

    try {
      const unsub = onSnapshot(
        doc(db, "scripts", s.id),
        snap => {
          if (snap.exists()) {
            cache[s.id] = snap.data();

            renderScripts();

            if (
              state.currentCommentId === s.id
            ) {
              renderComments(
                cache[s.id]?.comments || []
              );
            }
          }
        }
      );

      unsubscribers.push(unsub);
    } catch (e) {
      console.warn(
        "Realtime listener failed",
        e
      );
    }
  });
}

// =========================================================
// NAVIGATION
// =========================================================

$$("[data-tab]").forEach(btn =>
  btn.addEventListener("click", () => {
    $$(".nav-btn").forEach(b =>
      b.classList.remove("active")
    );

    btn.classList.add("active");

    $$(".tab-panel").forEach(p =>
      p.classList.remove("active")
    );

    $(`#tab-${btn.dataset.tab}`)
      .classList.add("active");
  })
);

// =========================================================
// SEARCH / FILTERS
// =========================================================

$("#search-input").addEventListener(
  "input",
  e => {
    state.query = e.target.value;
    renderScripts();
  }
);

$("#hero-filter").addEventListener(
  "change",
  e => {
    state.hero = e.target.value;
    renderScripts();
  }
);

$("#type-filter").addEventListener(
  "change",
  e => {
    state.type = e.target.value;
    renderScripts();
  }
);

$("#sort-filter").addEventListener(
  "change",
  e => {
    state.sort = e.target.value;
    renderScripts();
  }
);

$("#favorites-only").addEventListener(
  "click",
  e => {
    state.favoritesOnly =
      !state.favoritesOnly;

    e.currentTarget.classList.toggle(
      "active",
      state.favoritesOnly
    );

    renderScripts();
  }
);

$("#clear-filters").addEventListener(
  "click",
  () => {
    state.query = "";
    state.hero = "all";
    state.type = "all";
    state.sort = "featured";
    state.favoritesOnly = false;

    $("#search-input").value = "";
    $("#hero-filter").value = "all";
    $("#type-filter").value = "all";
    $("#sort-filter").value = "featured";

    $("#favorites-only")
      .classList.remove("active");

    renderScripts();
  }
);

const emptyReset = $("#empty-reset");

if (emptyReset) {
  emptyReset.addEventListener(
    "click",
    () => $("#clear-filters").click()
  );
}

// =========================================================
// VIEW
// =========================================================

$$(".view-btn").forEach(b =>
  b.addEventListener("click", () => {
    state.view = b.dataset.view;

    localStorage.setItem(
      "ron_view",
      state.view
    );

    renderScripts();
  })
);

// =========================================================
// BUTTONS
// =========================================================

$("#explore-btn").addEventListener(
  "click",
  () =>
    $("#tab-skins").scrollIntoView({
      behavior: state.reduceMotion
        ? "auto"
        : "smooth"
    })
);

$("#focus-search").addEventListener(
  "click",
  () => {
    $("#tab-skins").scrollIntoView({
      behavior: "smooth"
    });

    setTimeout(
      () => $("#search-input").focus(),
      250
    );
  }
);

$("#shuffle-btn").addEventListener(
  "click",
  () => {
    const s =
      scriptData[
        Math.floor(
          Math.random() *
            scriptData.length
        )
      ];

    openDetails(s.id);
  }
);

// =========================================================
// SETTINGS / THEME
// =========================================================

$("#theme-cycle").addEventListener(
  "click",
  cycleTheme
);

const themeSelect = $("#theme-select");
if (themeSelect) themeSelect.addEventListener("change", e => setTheme(e.target.value));

$("#open-settings").addEventListener(
  "click",
  () =>
    $("#settings-modal").showModal()
);

$("#motion-toggle").addEventListener(
  "click",
  () => {
    state.reduceMotion =
      !state.reduceMotion;

    localStorage.setItem(
      "ron_motion",
      state.reduceMotion
        ? "off"
        : "on"
    );

    hydrateControls();
  }
);

$("#compact-toggle").addEventListener(
  "click",
  () => {
    state.compact =
      !state.compact;

    localStorage.setItem(
      "ron_compact",
      state.compact
        ? "on"
        : "off"
    );

    hydrateControls();
  }
);

$("#clear-local").addEventListener(
  "click",
  () => {
    Object.keys(localStorage)
      .filter(k =>
        k.startsWith("ron_")
      )
      .forEach(k =>
        localStorage.removeItem(k)
      );

    toast(
      "Local RON preferences cleared. Reloading…"
    );

    setTimeout(
      () => location.reload(),
      500
    );
  }
);

// =========================================================
// COMMENTS
// =========================================================

$("#submit-comment").addEventListener(
  "click",
  submitComment
);

$("#guest-comment").addEventListener(
  "keydown",
  e => {
    if (
      (e.ctrlKey || e.metaKey) &&
      e.key === "Enter"
    ) {
      submitComment();
    }
  }
);

// =========================================================
// CLOSE MODALS
// =========================================================

$$("[data-close]").forEach(btn =>
  btn.addEventListener(
    "click",
    () =>
      $(`#${btn.dataset.close}`).close()
  )
);

// =========================================================
// PREMIUM UI / QUICK FILTERS
// =========================================================
function setQuickFilter(value) {
  $$(".quick-chip").forEach(btn => btn.classList.toggle("active", btn.dataset.quick === value));
  if (value === "all") { state.type = "all"; } else if (["VIP","Crossover","Premium","Custom"].includes(value)) { state.type = value === "VIP" ? "Access" : value; }
  if ($("#type-filter")) $("#type-filter").value = state.type;
  renderScripts();
}

$$(".quick-chip").forEach(btn => btn.addEventListener("click", () => setQuickFilter(btn.dataset.quick)));

const customLabBtn = $("#custom-lab-btn");
if (customLabBtn) customLabBtn.addEventListener("click", () => {
  const tab = $("[data-tab=custom]");
  if (tab) tab.click();
  $("#tab-custom")?.scrollIntoView({ behavior: state.reduceMotion ? "auto" : "smooth" });
});

setInterval(() => {
  const el = $("#live-clock");
  if (el) el.textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}, 1000);

// =========================================================
// INIT
// =========================================================

$("#year").textContent =
  new Date().getFullYear();

fillFilters();
hydrateControls();
updateCounters();
renderScripts();
renderHeroes();
renderCustomLab();

if (firestoreReady()) {
  wireRealtime();
} else {
  toast(
    "Cloud database is unavailable; the local UI is still fully usable."
  );
    }
