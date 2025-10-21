export const consonants = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "k",
  "l",
  "m",
  "n",
  "p",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
  "ɲ",
  "ʁ",
  "ʇ",
  "ḱ",
  "ṕ",
];
export const IPAConsonants = [
  "b",
  "ǃ",
  "d",
  "f",
  "g",
  "k",
  "l",
  "m",
  "n",
  "p",
  "r",
  "s",
  "t",
  "v",
  "w",
  "ʃ",
  "j",
  "z",
  "ɲ",
  "ʁ",
  "ǀ",
  "kʼ",
  "pʼ",
];
export const vowels = ["a", "e", "i", "o", "u", "ù", "é", "è", "ã", "ĩ", "õ"];
export const vowelsIPA = [
  "a",
  "ə",
  "i",
  "o",
  "y",
  "u",
  "e",
  "ɛ",
  "ɑ̃",
  "ɜ̃",
  "õ",
];

export const specials = ["h", "j"];
export const ScribeConsonants = {
  b: "bounce, redirect, elasticity, spring, reform, ricochet, recoil, repetition", //

  c: "rupture, schism, portal, crack, breach, fracture", //

  d: "defense, durability, shield, barrier, fortification, armor, stone, Earth (土)", //

  f: "change, transformation, evolution, mutation, flux, metamorphosis, Wood (木)", //

  g: "gravity, weight, command, authority, pressure, influence, Metal (金)", //

  k: "cold, ice, frost, solid, rigidity, permanence", //

  l: "light, clarity, illumination, divine, radiance, revelation", //

  m: "life, healing, care, nurturing, growth, vitality", //

  n: "calm, tranquility, sleep, rest, meditation, stillness", //

  p: "force, thrust, creation, generation, propulsion, impetus", //

  r: "weaving, binding, entangling, ensnaring", //

  s: "swiftness, speed, haste, velocity, acceleration, celerity, wind, air", //

  t: "precision, truth, fate, destiny, accuracy, inevitability", //

  v: "vibration, resonance, harmony, frequency, oscillation, attunement", //

  w: "fluidity, flow, movement, flexibility, liquidity, Water (水)", //

  x: "shadow, obscurity, secrecy, concealment, stealth, mystery", //

  y: "agility, ease, grace, finesse, dexterity, elegance", //

  z: "dissonance, confusion, chaos, disorder, entropy, disruption", //

  ɲ: "dream, illusion, emotion, fantasy, perception, psyche", //

  ʁ: "rage, destruction, primal power, fury, devastation, wrath, Fire (火)", //

  ʇ: "silence, void, absence, emptiness, nullification, erasure", //

  ḱ: "eruption, explosion, burst, detonation, upheaval, cataclysm, lava", //

  ṕ: "impulse, shock, push, impact, collision, jolt, electricity, lightning", //
} as const;

export type ScribeConsonant = keyof typeof ScribeConsonants;
export const ScribeVowels = {
  a: "work",

  e: "precision",

  i: "origin",

  o: "persistence",

  u: "depth",

  ã: "gentleness",

  è: "proximity",

  é: "purity",

  ĩ: "negative/minus",

  ù: "wilderness",

  õ: "magnitude",

  "'": "",
} as const;

export type ScribeVowel = keyof typeof ScribeVowels;
export const ScribeDiphthongs = {
  // Active combinations (a /a/)
  ai: "ignition",
  ae: "concentration",
  ao: "momentum",
  au: "concealment",
  aã: "resilience",
  aé: "rejuvenation",
  aè: "spark",
  aù: "exuberance",

  // Sharp combinations (e /ə/)
  ea: "trajectory",
  ei: "crystallization",
  eo: "climax",
  eu: "nuance",
  eã: "delicacy",
  eé: "refinement",
  eè: "acuity",
  eù: "instinct",

  // Origin combinations (i /i/)
  ia: "propulsion",
  ie: "insight",
  io: "inception",
  iu: "enigma",
  iã: "essence",
  ié: "primal",
  iè: "adjacency",
  iù: "primeval",

  // Persistent combinations (o /o/)
  oa: "continuity",
  oe: "relentlessness",
  oi: "foundation",
  ou: "endurance",
  oã: "malleability",
  oé: "sublimation",
  oè: "proximity",
  où: "untamed",

  // Deep combinations (u /y/)
  ua: "profundity",
  ue: "penetration",
  ui: "intrinsic",
  uo: "eon",
  uã: "tranquility",
  ué: "sanctity",
  uè: "immanence",
  uù: "abyss",

  // Soft combinations (ã /ɑ̃/)
  ãa: "fluidity",
  ãe: "subtlety",
  ãi: "pliability",
  ão: "rhythm",
  ãu: "whisper",
  ãé: "tenderness",
  ãè: "comfort",
  ãĩ: "harshness",
  ãõ: "expanse",

  // Near combinations (è /ɛ/)
  èa: "approach",
  èe: "lucidity",
  èi: "contiguity",
  èo: "impending",
  èu: "hidden",
  èã: "soothing",
  èé: "clarification",
  èù: "imminent",
  èĩ: "distance",

  // Pure combinations (é /e/)
  éa: "purification",
  ée: "clarity",
  éi: "distillation",
  éo: "eternity",
  éu: "innocence",
  éã: "serenity",
  éè: "pristine",
  éù: "untainted",
  éĩ: "corruption",

  // Negative combinations (ĩ /ɜ̃/)
  ĩa: "depletion",
  ĩe: "Minuscule",
  ĩi: "Deficit",
  ĩo: "Absence",
  ĩu: "emptiness",
  ĩã: "attenuation",
  ĩé: "Privation",
  ĩè: "Inhibition",

  // Wild combinations (ù /u/)
  ùa: "erraticism",
  ùe: "unpredictability",
  ùi: "feral",
  ùo: "ancient",
  ùã: "savage",
  ùé: "unrefined",
  ùè: "spontaneous",
  ùĩ: "controlled",

  // Large combinations (õ /õ/)
  õa: "vastness",
  õe: "amplification",
  õi: "immensity",
  õo: "epoch",
  õu: "profound",
  õã: "benevolence",
  õé: "catharsis",
  õè: "vicinity",
  õĩ: "restricted",
} as const;
