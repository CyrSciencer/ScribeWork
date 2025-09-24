export const DivinePrinciple = {
  lmv: "the source of being", //the source of being
  ʇxʁ: "the source of non-being", //the source of non-being
} as const;
export const PrimaryTriad = {
  pws: "essence", //essence the fill
  fmṕ: "cycle", //cycle the dynamic
  rtɲ: "structure", //all the structure
} as const;
export const Field = {
  ɲvx: "ethereal field", //ethereal
  gdr: "physical field", //physical
} as const;
export const Cycle = {
  fpl: "birth", //birth
  myv: "growth", //growth
  gkz: "decline", //decline
  tnx: "death", //death
} as const;
export const Logics = {
  tgr: "the blueprint", //blueprint
  vrd: "the fabric", //fabric
  nsɲ: "the will", //will
} as const;

export const nsɲAspect = {
  tdz: "factual analysis", //factual analysis in opposition to heart analysis
  ɲml: "heart analysis", //heart analysis in opposition to factual analysis
  dwl: "physical perception", //physical perception in opposition to ethereal perception
  vɲc: "ethereal perception", //ethereal perception in opposition to physical perception
  pcf: "external exploration", //external exploration in opposition to inner place of self
  nɲm: "inner place of self", //inner place of self in opposition to external exploration
  dwg: "optimal usage of group framework", //optimal usage of group framework in opposition to personal analysis
  tky: "personal analysis of world", //personal analysis of world in opposition to group framework
} as const;
export const BiologicalLineage = {
  dvn: "Plants/Bone/root", //Plants/Bone/root/structure/Permanence
  fxr: "Fungus/Flesh/Flux", //Fungus/Flesh/Network/expansion/Flux
  ṕms: "Animal/Blood/Process", //Animal/Blood/Movement/Vitality/Process
} as const;
export const CyclicStructure = {
  ryt: "Cyclic Order", // Cyclic Order - rhythm/pattern/sequence
  wṕk: "Structural Renewal", // Structural Renewal - rebirth/restoration
  rtw: "Temporal Framework", // Temporal Framework - time/flow/foundation
} as const;
export const StructuralEssence = {
  wsd: "Essence Allocation", // Essence Allocation - distribution/flow/balance
  drk: "Structural Integrity", // Structural Integrity - foundation/glue/unity
  gsr: "Essence Organization", // Essence Organization - arrangement/order/categorization
} as const;
export const DaemonOrder = {
  kzn: "stillness", // Against fṕm, stillness
  zrf: "amalgam", // Against spw, amalgam
  zʇc: "void", // Against ɲtr, void
} as const;
export const scribeGivenNames = {
  ...DivinePrinciple,
  ...PrimaryTriad,
  ...Field,
  ...Cycle,
  ...Logics,
  ...nsɲAspect,
  ...BiologicalLineage,
  ...CyclicStructure,
  ...StructuralEssence,
  ...DaemonOrder,
} as const;
export const godlyConcept = {
  lmv: DivinePrinciple.lmv,
  ...PrimaryTriad,
  ...Field,
  ...Cycle,
  ...Logics,
} as const;

export const CosmicDynamism = {
  // Traditional 4 Elements with pure philosophical essence
  FIRE: {
    name: "Fire",
    direction: "upward",
    energyType: "ascending energy",
    CosmicName: "ʁpḱ", // rage/destruction, force/creation, eruption/explosion
  },
  WATER: {
    name: "Water",
    direction: "downward",
    energyType: "descending energy",
    CosmicName: "wvn", // fluidity/flow, vibration/harmony, calm/tranquility
  },
  EARTH: {
    name: "Earth",
    direction: "inward",
    energyType: "contracting energy",
    CosmicName: "dgk", // defense/durability, gravity/weight, cold/solidity
  },
  AIR: {
    name: "Air",
    direction: "outward",
    energyType: "expanding energy",
    CosmicName: "sly", // swiftness/wind, light/clarity, agility/grace
  },

  // 5th Element (Aether/Spirit) - representing the center/balance
  AETHER: {
    name: "Aether",
    direction: "center",
    energyType: "balancing energy",
    CosmicName: "tvm", // precision/truth, vibration/harmony, life/healing
  },

  // Additional lesser concepts with pure philosophical essence
  LIGHTNING: {
    name: "Lightning",
    direction: "diagonal",
    energyType: "catalytic energy",
    CosmicName: "ṕzḱ", // impulse/electricity, dissonance/chaos, eruption/explosion
  },
  ICE: {
    name: "Ice",
    direction: "crystallized",
    energyType: "preserving energy",
    CosmicName: "kxʇ", // cold/frost, shadow/mystery, silence/void
  },
  METAL: {
    name: "Metal",
    direction: "refined",
    energyType: "conducting energy",
    CosmicName: "gvt", // gravity/weight, vibration/resonance, precision/truth
  },
  WOOD: {
    name: "Wood",
    direction: "growing",
    energyType: "living energy",
    CosmicName: "fmy", // change/growth, life/vitality, agility/flexibility
  },
  SHADOW: {
    name: "Shadow",
    direction: "hidden",
    energyType: "concealing energy",
    CosmicName: "xʇɲ", // shadow/mystery, silence/void, dream/illusion
  },
} as const;
export const cosmicFondation = {
  bismuth: {
    cosmologicalRole:
      'The "noble anchor of existence," representing the structural foundation of the physical world—flesh, bone, and material presence. It is the most refined and enduring physical form.',
    scripturgicName: "dkm", // Defense + Cold + Life - Pure Physical foundation
    realWorldJustification:
      'Bismuth is the heaviest stable (non-radioactive) element. This physical "heaviness" and stability make it the perfect analogue for the ultimate anchor of the material realm. It is a dense, crystalline, yet brittle metal, which can symbolize the strength and fragility of the physical body. Its most unique property is that it expands when it solidifies (like water), suggesting that the physical form isn\'t just a simple condensation of energy but a complex, structured state that occupies a defined space.',
  },
  antimony: {
    cosmologicalRole:
      'The "bridge between thought and form," enabling the translation of ethereal concepts into physical understanding. It represents intellectual capacity and perception with exceptional clarity.',
    scripturgicName: "ftɲ", // Change + Truth + Dream - Physical made Ethereal
    realWorldJustification:
      "Antimony is a metalloid or semi-metal, meaning it has properties of both metals and non-metals. This dual nature makes it a perfect metaphor for the mind, which exists between the purely abstract (thought) and the concrete (physical reality). Its primary modern use is in semiconductors (diodes, infrared detectors), which are devices that precisely control the flow of electrical signals (information). This directly mirrors the mind's function of processing and translating abstract concepts into tangible understanding.",
  },
  silver: {
    cosmologicalRole:
      'The "bridge between form and transcendence," translating physical experiences into ethereal understanding. It represents the spiritual capacity to perceive the divine essence within material existence.',
    scripturgicName: "pwr", // Force + Water + Weaving - Ethereal made Physical
    realWorldJustification:
      'Silver is the most electrically and thermally conductive metal, making it the ultimate medium for transmission and flow. This supreme conductivity symbolizes its role as a perfect bridge, translating the "energy" of physical experience into spiritual wisdom. It is also the most reflective metal, linking it to light, perception, and revealing what is hidden. This aligns with its function of perceiving the "divine essence." Its use in historical photography—capturing an image from light—is a direct parallel to its role in capturing and translating physical experiences into a higher, ethereal form.',
  },
  gold: {
    cosmologicalRole:
      'The "pure awareness beyond form" and the "eternal witness." It is the unchanging, insɲrruptible essence of consciousness that persists through all transformations.',
    scripturgicName: "lnv", // Light + Calm + Vibration - Pure Ethereal transcendence
    realWorldJustification:
      'Gold is one of the most unreactive chemical elements. It is highly resistant to corrosion, tarnish, and decay, making it a powerful symbol of permanence, purity, and insɲrruptibility. Its essence remains unchanged by its environment, just as the Soul is described as the "unchanging observer." Furthermore, Gold is the most malleable and ductile of all metals; a single gram can be beaten into a sheet of one square meter. This suggests that while the soul can be "spread" across vast experiences, it never breaks or loses its fundamental nature.',
  },
  copper: {
    cosmologicalRole:
      'The "universal mediator" and "connector chain between all elements." It facilitates all change, transformation, and the flow between all states of being.',
    scripturgicName: "vws", // Vibration + Water + Swiftness - Bridge between realms
    realWorldJustification:
      'Copper is an exceptional conductor of heat and electricity, second only to Silver. This allows it to represent the flow and transfer of energy inherent in all change. More importantly, copper readily forms alloys with a vast number of other metals (such as brass with zinc or bronze with tin). This real-world ability to unify and combine with other elements to create new substances with different properties makes it the perfect representation of the "element unifier" that facilitates transitions between states.',
  },
  titanium: {
    cosmologicalRole:
      'The "absolute boundary" between the physical and ethereal realms. It represents the ultimate resistance to transcendence and maintains the separation between worlds.',
    scripturgicName: "cdk", // Rupture + Defense + Cold - Absolute separation wall
    realWorldJustification:
      'Titanium has the highest strength-to-density ratio of any metal. It is incredibly strong, durable, and exceptionally resistant to corrosion. In the real world, it is used to create strong, impenetrable barriers in aerospace and marine applications. This unparalleled strength and resistance to degradation by outside forces make it the ideal physical representation of an "absolute boundary" and an "impenetrable wall" that maintains the fundamental structure of reality.',
  },
};
export const ScripturgicBeings = {
  ANGELS: {
    name: "Angels",
    description:
      "Provide the pure power and direct intent of a concept. Using an Angel's name brings forth the whole, unadulterated essence of a magical idea.",
    role: "pure power and direct intent",
    effect: "brings forth the whole, unadulterated essence of a magical idea",
    vowelsSets: ["é", "ie", "éa"],
  },
  DEMONS: {
    name: "Demons",
    description:
      "Provide the power of negation and the absence of a concept. A Demon's name doesn't destroy; it creates a void where a concept's power should be.",
    role: "negation and absence",
    effect: "creates a void where a concept's power should be",
    vowelsSets: ["ĩ", "õè", "ĩo"],
  },
  FEY: {
    name: "Fey",
    description:
      "Provide distortion and falsehood. Their names are used to create illusions or to twist the reality of a concept, making something appear to be what it is not.",
    role: "distortion and falsehood",
    effect: "creates illusions or twists the reality of a concept",
    vowelsSets: ["ù", "èi", "oã"],
  },
  ELEMENTALS: {
    name: "Elementals",
    description:
      "Provide the physical processes of a concept. Their names are the toolkit for manipulating the tangible world. They don't command the whole concept but rather its specific, repeatable parts. For example, an Elemental of Fire's name would give you control over a spark, a burn rate, or the production of smoke.",
    role: "physical processes",
    effect:
      "manipulates the tangible world through specific, repeatable parts of a concept",
    vowelsSets: ["a", "ãe", "õĩ"],
  },
} as const;

export type ScripturgicBeing =
  (typeof ScripturgicBeings)[keyof typeof ScripturgicBeings];

export const cosmicGlyphsSystem = {
  moonPhases: {
    newMoon: {
      description: "potential, hidden power",
      glyph: "newMoon.png",
    },
    waxingCrescent: {
      description: "intention, building energy",
      glyph: "waxingCrescent.png",
    },
    firstQuarter: {
      description: "decision, momentum",
      glyph: "firstQuarter.png",
    },
    waxingGibbous: {
      description: "Refinement, adjustment",
      glyph: "waxingGibbous.png",
    },
    fullMoon: {
      description: "completion, manifestation",
      glyph: "fullMoon.png",
    },
    waningGibbous: {
      description: "sharing, abundance",
      glyph: "waningGibbous.png",
    },
    lastQuarter: {
      description: "Release, letting go",
      glyph: "lastQuarter.png",
    },
    waningCrescent: {
      description: "Rest, surrender",
      glyph: "waningCrescent.png",
    },
  },
  sunMilestones: {
    equinox: {
      description: "Balance, shift",
      glyph: "equinox.png",
    },
    solstice: {
      description: "abundance, celebration",
      glyph: "solstice.png",
    },
  },
} as const;
