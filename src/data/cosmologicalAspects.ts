export const DivinePrinciple = {
  lmv: "lmv: the source of being", //the source of being
  ʇxʁ: "ʇxʁ: the source of non-being", //the source of non-being
} as const;
export const PrimaryDualities = {
  pws: "pws: essence - what fills the universe", //essence the fill
  fbṕ: "fbṕ: cycle - the dynamism of the universe", //cycle the dynamic
} as const;
export const Essences = {
  ɲvx: "ɲvx: ethereal field", //ethereal
  gdr: "gdr: physical field", //physical
} as const;
export const Cycle = {
  fpl: "fpl: birth", //birth
  myv: "myv: growth", //growth
  gkz: "gkz: decline", //decline
  tnx: "tnx: death", //death
} as const;

// GivenWills: Eight fundamental orientations that consciousness can adopt when interacting
// with reality. These are not personality traits or choices, but cosmological patterns -
// different ways that awareness can be directed through the essence fields (pws) and cycles (fbṕ).
// They form four complementary dualities that emerged when lmv (source of being) created consciousness.
export const GivenWills = {
  // DUALITY 1: Understanding Orientation - How consciousness processes information
  tdz: {
    code: "tdz",
    name: "Factual Analysis",
    orientation:
      "Consciousness oriented toward objective patterns in physical field (gdr)",
    cosmologicalFunction:
      "Processes reality through measurable structures, seeks understanding independent of subjective experience",
    complementaryWith: "ɲml",
    essenceAlignment:
      "Strong gdr (physical field) - focuses on what can be measured and verified",
    cycleInteraction:
      "Observes cycles from outside - tracks myv (growth) and gkz (decline) through data",
    dynamismProfile:
      "Analytical stability - prefers consistent patterns over dynamic flux",
    lifeStrategyAffinity:
      "Aligns with dvn (rooted) - understands through patient observation",
    cosmicPrinciple:
      "Truth through objectivity - reality exists independent of the observer",
  },
  ɲml: {
    code: "ɲml",
    name: "Heart Analysis",
    orientation:
      "Consciousness oriented toward subjective meaning and emotional resonance",
    cosmologicalFunction:
      "Processes reality through felt significance, seeks understanding through internal response",
    complementaryWith: "tdz",
    essenceAlignment:
      "Blends ɲvx (ethereal) and gdr (physical) - analyzes through embodied feeling",
    cycleInteraction:
      "Feels cycles from within - experiences myv (growth) and gkz (decline) emotionally",
    dynamismProfile:
      "Responsive fluidity - adapts understanding based on felt experience",
    lifeStrategyAffinity:
      "Aligns with fxr (network) - understands through connection and resonance",
    cosmicPrinciple:
      "Truth through subjectivity - meaning emerges from how reality is experienced",
  },

  // DUALITY 2: Perception Orientation - Which essence field consciousness primarily accesses
  dwl: {
    code: "dwl",
    name: "Physical Perception",
    orientation:
      "Consciousness anchored in physical field (gdr), perceives through material senses",
    cosmologicalFunction:
      "Perceives reality through tangible manifestation, interprets through physical data",
    complementaryWith: "vɲc",
    essenceAlignment:
      "Pure gdr (physical field) - perceives what has material presence",
    cycleInteraction:
      "Perceives cycle through physical changes - sees fpl (birth) as material emergence",
    dynamismProfile:
      "Grounded in DOWN (wfg) - consciousness pulled toward material reality",
    lifeStrategyAffinity:
      "Aligns with dvn (rooted) and ṕms (mobile) - physical-field dominant strategies",
    cosmicPrinciple:
      "Reality through matter - existence is what can be physically encountered",
  },
  vɲc: {
    code: "vɲc",
    name: "Ethereal Perception",
    orientation:
      "Consciousness oriented toward ethereal field (ɲvx), perceives beyond material",
    cosmologicalFunction:
      "Perceives reality through non-physical patterns, interprets through energetic and spiritual data",
    complementaryWith: "dwl",
    essenceAlignment:
      "Pure ɲvx (ethereal field) - perceives what lacks material form",
    cycleInteraction:
      "Perceives cycle through energetic transitions - experiences tnx (death) as ethereal release",
    dynamismProfile:
      "Lifted by UP (ʁpm) - consciousness drawn toward transcendent reality",
    lifeStrategyAffinity:
      "Aligns with fxr (network) - operates at boundaries between states",
    cosmicPrinciple:
      "Reality beyond matter - existence extends into ethereal dimensions",
  },

  // DUALITY 3: Direction Orientation - Where consciousness directs attention
  pcf: {
    code: "pcf",
    name: "External Exploration",
    orientation:
      "Consciousness directed outward through OUT (svḱ) cosmic force",
    cosmologicalFunction:
      "Explores universe beyond self, seeks understanding through external investigation",
    complementaryWith: "nɲm",
    essenceAlignment:
      "Engages both fields outwardly - explores gdr and ɲvx externally",
    cycleInteraction:
      "Participates in cycles externally - acts on fpl (birth) in the world",
    dynamismProfile:
      "Maximum fbṕ expression - explores through constant outward movement",
    lifeStrategyAffinity:
      "Aligns with ṕms (mobile) - consciousness moves through environment",
    cosmicPrinciple:
      "Knowledge through expansion - truth discovered by moving into the universe",
  },
  nɲm: {
    code: "nɲm",
    name: "Inner Place of Self",
    orientation: "Consciousness directed inward through IN (dgk) cosmic force",
    cosmologicalFunction:
      "Explores depths of self, seeks understanding through internal investigation",
    complementaryWith: "pcf",
    essenceAlignment:
      "Engages both fields inwardly - explores internal gdr and ɲvx states",
    cycleInteraction:
      "Participates in cycles internally - witnesses personal myv (growth)",
    dynamismProfile:
      "Internalized fbṕ - dynamism turns inward for self-transformation",
    lifeStrategyAffinity:
      "Aligns with dvn (rooted) - consciousness deepens in place",
    cosmicPrinciple:
      "Knowledge through depth - truth discovered by moving into the self",
  },

  // DUALITY 4: Social Orientation - How consciousness relates to collective vs individual
  gvr: {
    code: "gvr",
    name: "Collective Framework",
    orientation:
      "Consciousness oriented toward shared patterns and distributed understanding",
    cosmologicalFunction:
      "Interprets reality through collective consensus, values group wisdom and social structures",
    complementaryWith: "tky",
    essenceAlignment:
      "Distributed across many - similar to how fxr (network) distributes through connections",
    cycleInteraction:
      "Experiences cycles collectively - group birth (fpl) and decline (gkz)",
    dynamismProfile:
      "Social fbṕ - dynamism expressed through group transformation",
    lifeStrategyAffinity:
      "Aligns with fxr (network) - consciousness as distributed network",
    cosmicPrinciple:
      "Truth through plurality - understanding emerges from shared experience",
  },
  tky: {
    code: "tky",
    name: "Personal Analysis",
    orientation:
      "Consciousness oriented toward unique perspective and individual interpretation",
    cosmologicalFunction:
      "Interprets reality through personal lens, values individual discernment and original thought",
    complementaryWith: "gvr",
    essenceAlignment:
      "Contained in singular - similar to how ṕms (mobile) contains consciousness in vessel",
    cycleInteraction:
      "Experiences cycles individually - personal journey through fpl to tnx",
    dynamismProfile:
      "Individual fbṕ - dynamism expressed through personal transformation",
    lifeStrategyAffinity:
      "Aligns with ṕms (mobile) - consciousness as contained, autonomous unit",
    cosmicPrinciple:
      "Truth through singularity - understanding emerges from unique individual perspective",
  },
} as const;
// BiologicalLineage: Fundamental life strategies that emerge from the interaction
// of essence (pws - what fills) and cycle (fbṕ - the dynamism).
// These are not mere biological categories, but cosmological patterns for how
// consciousness can inhabit and navigate the physical field (gdr).
export const BiologicalLineage = {
  dvn: {
    code: "dvn",
    name: "Rooted Life",
    cosmologicalStrategy:
      "Anchored strategy - consciousness bound to place, maximizes essence (pws) absorption through stillness",
    essenceRelation:
      "Passive absorption - draws essence from physical field (gdr) through anchored presence",
    cycleExpression:
      "Slow, continuous cycle movement - growth (myv) through accumulation, minimal decline (gkz)",
    dynamismProfile:
      "Low fbṕ - minimal dynamism, stability over adaptability. Dominated by DOWN (wfg) and IN (dgk) forces",
    willExpression:
      "will expressed through growth patterns and environmental response, not locomotion",
    examples: "Plants, trees, rooted organisms, coral",
    cosmicPrinciple:
      "Life through anchored persistence - trading mobility for deep connection to place",
  },
  fxr: {
    code: "fxr",
    name: "Network Life",
    cosmologicalStrategy:
      "Transitional strategy - consciousness distributed through connections, exists in states of flux between other life forms",
    essenceRelation:
      "Transformative mediation - converts decline (gkz) essence into birth (fpl) essence, operates at boundaries",
    cycleExpression:
      "Participates in transitions - the living embodiment of BETWEEN (brf), connects death (tnx) to birth (fpl)",
    dynamismProfile:
      "Medium fbṕ - exists in constant transformation. Dominated by BETWEEN (brf) force, mediates other dynamics",
    willExpression:
      "will expressed through network expansion and decomposition patterns, distributed consciousness",
    examples: "Fungi, mycelial networks, slime molds, lichen",
    cosmicPrinciple:
      "Life through transition - exists in the spaces between states, transforms what was into what will be",
  },
  ṕms: {
    code: "ṕms",
    name: "Mobile Life",
    cosmologicalStrategy:
      "Active pursuit strategy - consciousness contained in mobile vessel, seeks essence (pws) through movement",
    essenceRelation:
      "Active acquisition - pursues and consumes essence from other sources, requires constant intake",
    cycleExpression:
      "Rapid, intense cycle movement - fast growth (myv), high metabolism, accelerated decline (gkz)",
    dynamismProfile:
      "High fbṕ - maximum dynamism and adaptability. Dominated by OUT (svḱ) force, expresses through motion",
    willExpression:
      "will expressed through locomotion, active choices, and environmental manipulation",
    examples: "Animals, insects, mobile organisms",
    cosmicPrinciple:
      "Life through motion - trading stability for adaptability, explores physical field (gdr) through movement",
  },
} as const;
export const IsfetianOrder = {
  zkʇ: "zkʇ: Oblivion - born from ʇxʁ to be a force against fbṕ", // Against cycle/dynamism - erases movement
  zrf: "zrf: Amalgam - born from ʇxʁ to be a force against pws", // Against essence - corrupts purity
} as const;
export const scribeGivenNames = {
  ...DivinePrinciple,
  ...PrimaryDualities,
  ...Essences,
  ...Cycle,
  ...GivenWills,
  ...BiologicalLineage,
  ...IsfetianOrder,
} as const;
export const godlyConcept = {
  lmv: DivinePrinciple.lmv,
  ...PrimaryDualities,
  ...Essences,
  ...Cycle,
} as const;

export const CosmicDynamism = {
  UP: {
    name: "Up",
    description: "The upward force",
    CosmicName: "ʁpm",
    statusEffect: "body and soul evaporate over time",
  },
  DOWN: {
    name: "Down",
    description: "The downward force",
    CosmicName: "wfg",
    statusEffect: "body and soul abilities sink",
  },
  IN: {
    name: "In",
    description: "The inward force",
    CosmicName: "dgk",
    statusEffect: "body and soul harden",
  },
  OUT: {
    name: "Out",
    description: "The outward force",
    CosmicName: "svḱ",
    statusEffect: "body and soul influence expend",
  },
  BETWEEN: {
    name: "Between",
    description: "The force that transitions the universe",
    CosmicName: "brf",
    statusEffect: "body and soul are shared into a common pool",
  },
} as const;
export const CosmicFondation = {
  bismuth: {
    cosmologicalRole: "The cosmological anchor of the physical realm",
    scripturgicName: "dkm", // Defense + Cold + Life - Pure Physical foundation
  },
  antimony: {
    cosmologicalRole: "The thread that link the physical to the ethereal",
    scripturgicName: "ftɲ", // Change + Truth + Dream - Physical made Ethereal
  },
  silver: {
    cosmologicalRole: "The thread that link the ethereal to the physical",
    scripturgicName: "pwr", // Force + Water + Weaving - Ethereal made Physical
  },
  gold: {
    cosmologicalRole: "The cosmological anchor of the ethereal realm",
    scripturgicName: "lnv", // Light + Calm + Vibration - Pure Ethereal transcendence
  },
  copper: {
    cosmologicalRole: "The conduit between the physical and ethereal",
    scripturgicName: "vws", // Vibration + Water + Swiftness - Bridge between realms
  },
  titanium: {
    cosmologicalRole: "The wall that separate the realms",
    scripturgicName: "cdk", // Rupture + Defense + Cold - Absolute separation wall
  },
};
export const ScripturgicBeings = {
  DEMONS: {
    name: "Demons",
    description:
      "demons are born in the barren fields of reality, where divinity's light does not reach. they carry a will outside of divinity's control.\n(Great Isfetians ≠ demons)\nIf divinity = 1 and Great Isfetians = -1, then demons = 0",
    suffix: "bèã",
    preffixes: {
      ɲié: "Demons that fill the voids of emotion and desire",
      xoù: "Demons that fill the voids of fear and anxiety",
      tèe: "Demons that fill the voids of meaning and identity",
      kĩé: "Demons that fill the voids of hardship and suffering",
    },
  },
  DIVINEBORN: {
    name: "Divine Born",
    description:
      "divine born are born from divinity, they carry the will of divinity through the physical realm.",
    preffixes: {
      die: "Divine born who's benevolence is through guidance and protection",
      mãé: "Divine born who's benevolence is as a nurturing force",
      téã: "Divine born who's benevolence is through inscrutable purpose",
    },
  },
} as const;

export type ScripturgicBeing =
  (typeof ScripturgicBeings)[keyof typeof ScripturgicBeings];

export const cosmicGlyphsSystem = {
  moonPhases: {
    newMoon: {
      description: "potential, hidden power",
      name: "Novilunium",
      glyph: "newMoon.png",
      essence:
        "Power becomes latent and invisible, stored until triggered. −50% immediate success but creates lasting potential.",
      enchantment: {
        type: "Inscribed on object",
        effect:
          "Object gains invisible, dormant power that activates only when specific conditions are met. The enchantment remains hidden until triggered.",
        example:
          "A blade inscribed during new moon appears mundane but activates its cutting power only when wielded by the intended user.",
      },
      ritual: {
        type: "Invoked with components",
        effect:
          "Creates a concealed zone of latent power. The area holds magical potential that releases when predetermined conditions occur.",
        example:
          "A ritual space that appears empty but triggers protective wards when intruders enter.",
      },
      spell: {
        type: "Cast with inner energy",
        effect:
          "Creates a hidden reservoir of targeted energy. The spell remains invisible and inactive until the caster consciously triggers it.",
        example:
          "A healing spell stored within one's body, ready to activate when wounded.",
      },
    },
    waxingCrescent: {
      description: "intention, building energy",
      name: "Intentum",
      glyph: "waxingCrescent.png",
      essence:
        "Power builds rapidly but chaotically. Accelerated creation but prone to instability and misdirection.",
      enchantment: {
        type: "Inscribed on object",
        effect:
          "Object gains rapidly growing power that becomes unstable. The enchantment must be completed quickly or it will discharge unpredictably into the object.",
        example:
          "A staff that gains power swiftly but may release energy randomly if not finished within hours.",
      },
      ritual: {
        type: "Invoked with components",
        effect:
          "Creates a zone of accelerated processes. The area speeds up growth and development but with chaotic, unpredictable results.",
        example:
          "A ritual circle that causes plants to grow rapidly but with mutations and unexpected forms.",
      },
      spell: {
        type: "Cast with inner energy",
        effect:
          "Accelerates targeted processes but with reduced control. The spell works quickly but may produce unintended side effects.",
        example:
          "A healing spell that closes wounds rapidly but may cause scarring or tissue irregularities.",
      },
    },
    firstQuarter: {
      description: "decision, momentum",
      name: "Coagulatio",
      glyph: "firstQuarter.png",
      essence:
        "Power demands immediate commitment and sacrifice. Decisive, powerful effects but requires definitive cost.",
      enchantment: {
        type: "Inscribed on object",
        effect:
          "Object gains explosive, single-use power. The enchantment must be activated within 24 hours of completion or it dissipates completely.",
        example:
          "A talisman inscribed with destructive force that must be used within a day or becomes powerless.",
      },
      ritual: {
        type: "Invoked with components",
        effect:
          "Creates a zone of decisive, sacrificial power. The area demands commitment from those within - powerful effects require immediate payment.",
        example:
          "A ritual circle where healing is instant but demands blood sacrifice at the moment of use.",
      },
      spell: {
        type: "Cast with inner energy",
        effect:
          "Delivers massive immediate power but requires significant personal sacrifice. The spell works instantly but costs dearly.",
        example:
          "An attack spell that strikes with devastating force but drains the caster's vitality immediately.",
      },
    },
    waxingGibbous: {
      description: "Refinement, adjustment",
      name: "mutatio",
      glyph: "waxingGibbous.png",
      essence:
        "Power remains malleable for 24 hours. Magic can be adjusted once after initial creation.",
      enchantment: {
        type: "Inscribed on object",
        effect:
          "Object's enchantment remains editable for 24 hours. The inscription can be modified once after completion without losing accumulated power.",
        example:
          "A ring inscribed with protection that can be adjusted from physical defense to ethereal shielding within the first day.",
      },
      ritual: {
        type: "Invoked with components",
        effect:
          "Creates a zone where effects can be refined once. The area's magical properties can be adjusted within 24 hours of establishment.",
        example:
          "A ritual circle for summoning that can be modified to call a different being if the first choice proves unwise.",
      },
      spell: {
        type: "Cast with inner energy",
        effect:
          "Allows one adjustment to the spell after casting. The caster can refine targeting, intensity, or effect within 24 hours.",
        example:
          "A curse that can be redirected to a different target or weakened in severity after initial casting.",
      },
    },
    fullMoon: {
      description: "completion, manifestation",
      name: "rubedo",
      glyph: "fullMoon.png",
      essence:
        "Power reaches maximum stability and permanence. Magic becomes anchored and unbreakable.",
      enchantment: {
        type: "Inscribed on object",
        effect:
          "Object's enchantment becomes permanent and unbreakable. The inscription gains maximum power and cannot be dispelled or altered by any means.",
        example:
          "A crown inscribed with authority that becomes an eternal, unremovable symbol of kingship.",
      },
      ritual: {
        type: "Invoked with components",
        effect:
          "Creates a permanent zone of power. The area becomes forever altered, its magical properties anchored into the physical location.",
        example:
          "A consecration ritual that permanently transforms land into sacred ground that can never be desecrated.",
      },
      spell: {
        type: "Cast with inner energy",
        effect:
          "Creates a permanent, unbreakable targeted effect. The spell becomes part of reality itself and cannot be dispelled.",
        example:
          "A blessing that becomes permanently woven into the target's essence, eternal and unremovable.",
      },
    },
    waningGibbous: {
      description: "sharing, release",
      name: "solutio",
      glyph: "waningGibbous.png",
      essence:
        "Power reduces cost through communal sharing. Magic requires multiple participants or public location but becomes more accessible.",
      enchantment: {
        type: "Inscribed on object",
        effect:
          "Object's enchantment must be created publicly or collaboratively. The inscription becomes visible to all but costs less to create through shared effort.",
        example:
          "A community well inscribed collectively, granting purified water to all who contributed to its creation.",
      },
      ritual: {
        type: "Invoked with components",
        effect:
          "Creates a communal zone accessible to all participants. The area requires shared intent to activate but distributes benefits equally.",
        example:
          "A harvest ritual where multiple farmers create a zone of fertility that blesses all their fields.",
      },
      spell: {
        type: "Cast with inner energy",
        effect:
          "Creates a shared effect that requires multiple casters or witnesses. The spell costs less but becomes visible to all involved.",
        example:
          "A protection spell cast by a group that shields everyone who participated but is known to all.",
      },
    },
    lastQuarter: {
      description: "Release, letting go",
      name: "cassatio",
      glyph: "lastQuarter.png",
      essence:
        "Power specializes in dissolution and breaking. Magic for undoing, reversing, or removing is at maximum strength.",
      enchantment: {
        type: "Inscribed on object",
        effect:
          "Object gains power to break other enchantments. The inscription specializes in dissolving, reversing, or undoing magical effects in other objects.",
        example:
          "A key inscribed to unlock and dispel any magical seal or ward it encounters.",
      },
      ritual: {
        type: "Invoked with components",
        effect:
          "Creates a zone of dissolution. The area actively breaks down, reverses, or removes magical effects within its bounds.",
        example:
          "A cleansing ritual that creates a space where all magical influences are systematically undone.",
      },
      spell: {
        type: "Cast with inner energy",
        effect:
          "Creates a powerful dispelling effect that breaks existing conditions. The spell specializes in undoing magical and natural effects on target.",
        example:
          "A counterspell that can reverse curses, break enchantments, or undo transformations with exceptional power.",
      },
    },
    waningCrescent: {
      description: "Rest, surrender",
      name: "quies",
      glyph: "waningCrescent.png",
      essence:
        "Power becomes weak but highly resilient. Magic is slow and defensive but nearly impossible to break.",
      enchantment: {
        type: "Inscribed on object",
        effect:
          "Object gains weak but unbreakable defensive properties. The enchantment activates slowly but resists all attempts at dispelling.",
        example:
          "A shield inscribed with gentle protection that cannot be overcome by force, only patience.",
      },
      ritual: {
        type: "Invoked with components",
        effect:
          "Creates a zone of resilient, passive protection. The area provides weak but nearly impenetrable defense that cannot be dispelled.",
        example:
          "A sanctuary ritual that creates a space of rest where harm comes slowly and protection endures eternally.",
      },
      spell: {
        type: "Cast with inner energy",
        effect:
          "Creates a slow but extremely resilient barrier. The spell provides minimal immediate protection but becomes nearly impossible to break over time.",
        example:
          "A ward that takes hours to fully activate but, once established, resists even the most powerful attacks.",
      },
    },
  },

  sunMilestones: {
    equinox: {
      description: "Balance, shift",
      name: "aequilux",
      glyph: "equinox.png",
      essence:
        "Power achieves convergence of opposites. Contradictory forces temporarily fuse without annihilation - the only time incompatible energies harmonize.",
      enchantment: {
        type: "Inscribed on object",
        effect:
          "Object can hold opposing enchantments simultaneously. Contradictory inscriptions work together rather than cancel out.",
        example:
          "A sword inscribed with both fire and ice that burns and freezes simultaneously without conflict.",
      },
      ritual: {
        type: "Invoked with components",
        effect:
          "Creates a zone where opposing forces coexist peacefully. The area allows contradictory magical energies to work in harmony.",
        example:
          "A ritual space where life and death magic can be practiced together, each enhancing rather than negating the other.",
      },
      spell: {
        type: "Cast with inner energy",
        effect:
          "Combines normally incompatible targeted effects. The spell fuses contradictory energies into balanced, harmonious action.",
        example:
          "A healing curse that damages while it mends, causing pain that purifies and cleanses.",
      },
    },
    solstice: {
      description: "abundance, celebration",
      name: "fixatio",
      glyph: "solstice.png",
      essence:
        "Power channels directly from celestial sources. Magic costs half physical resources but doubles emotional/psychological risk.",
      enchantment: {
        type: "Inscribed on object",
        effect:
          "Object draws enchantment power from celestial sources. Requires half the normal materials but inscribing carries double psychological strain on creator.",
        example:
          "A chalice inscribed with endless plenty that needs minimal materials but leaves the creator emotionally drained.",
      },
      ritual: {
        type: "Invoked with components",
        effect:
          "Creates a zone powered by celestial energy. The area requires fewer physical components but performing the ritual doubles emotional cost to participants.",
        example:
          "A summoning circle that needs minimal reagents but leaves all participants psychologically scarred.",
      },
      spell: {
        type: "Cast with inner energy",
        effect:
          "Draws power from celestial sources rather than caster's reserves. The spell costs minimal personal energy but carries significant psychological burden.",
        example:
          "A massive destructive spell that doesn't drain physical energy but leaves the caster haunted by its use.",
      },
    },
  },
};
export const Isfetians = {
  names: {
    // Daemon Order Aspects - Isfetians of zkʇ
    zkʇ: [
      {
        name: "The Eraser",
        description:
          "Devil of zkʇ - The force that erases movement and activity from the universe",
      },
      {
        name: "The Unraveler",
        description:
          "Devil of zkʇ - The force that unravels the fabric of reality, breaking down the connections that hold existence together",
      },
      {
        name: "The Silencer",
        description:
          "Devil of zkʇ - The force that silences the universe, eliminating all sound and communication",
      },
    ],

    // Daemon Order Aspects - Isfetians of zrf
    zrf: [
      {
        name: "The Linker",
        description:
          "Devil of zrf - Forceful binding and enslavement of Essences, chaining pure forms into corrupted servitude",
      },
      {
        name: "The Blender",
        description:
          "Devil of zrf - Blind mixing and contamination of distinct Essences, creating impure and unstable amalgamations",
      },
      {
        name: "The Dissolver",
        description:
          "Devil of zrf - Breaking down pure forms into formless chaos, erasing the boundaries that define essence",
      },
    ],
  },
};
