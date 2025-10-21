export const DivinePrinciple = {
  lmv: "lmv: the source of being", //the source of being
  ʇxʁ: "ʇxʁ: the source of non-being", //the source of non-being
} as const;
export const PrimaryTriad = {
  pws: "pws: essence - what fills the universe", //essence the fill
  fbṕ: "fbṕ: cycle - the dynamism of the universe", //cycle the dynamic
  rtɲ: "rtɲ: structure - what is the form of the universe", //all the structure
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
export const Structures = {
  tgr: "tgr: the blueprint - what defines the universe", //blueprint
  vrd: "vrd: the fabric - what holds the universe together", //fabric
  nsɲ: "nsɲ: the will - what inhabits the universe", //will
} as const;

export const nsɲAspect = {
  tdz: "tdz: factual analysis", //factual analysis in opposition to heart analysis
  ɲml: "ɲml: heart analysis", //heart analysis in opposition to factual analysis
  dwl: "dwl: physical perception", //physical perception in opposition to ethereal perception
  vɲc: "vɲc: ethereal perception", //ethereal perception in opposition to physical perception
  pcf: "pcf: external exploration", //external exploration in opposition to inner place of self
  nɲm: "nɲm: inner place of self", //inner place of self in opposition to external exploration
  gvr: "gvr: optimal usage of group framework", //optimal usage of group framework in opposition to personal analysis
  tky: "tky: personal analysis of world", //personal analysis of world in opposition to group framework
} as const;
export const BiologicalLineage = {
  dvn: "dvn: Plants/Rooted",
  fxr: "fxr: Fungus/In flux",
  ṕms: "ṕms: Animal/Active process",
} as const;
export const DaemonOrder = {
  zkn: "zkn: stillness - born from ʇxʁ to be a forceagainst fbṕ", // Against fbṕ, stillness
  zrf: "zrf: amalgam - born from ʇxʁ to be a force against pws", // Against pws, amalgam
  zʇc: "zʇc: oblivion - born from ʇxʁ to be a force against rtɲ", // Against rtɲ, oblivion
} as const;
export const scribeGivenNames = {
  ...DivinePrinciple,
  ...PrimaryTriad,
  ...Essences,
  ...Cycle,
  ...Structures,
  ...nsɲAspect,
  ...BiologicalLineage,
  ...DaemonOrder,
} as const;
export const godlyConcept = {
  lmv: DivinePrinciple.lmv,
  ...PrimaryTriad,
  ...Essences,
  ...Cycle,
  ...Structures,
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
  ANGELS: {
    name: "Angels",
    description:
      "héhoihéa: angels are born from divinity and are protectors/wardens of the cosmic laws. independent from concepts, they look after and guard the concepts rather than carrying them.\n(divine born ≠ angels)",
    vowelsSets: ["é", "oi", "éa"],
    NurimAffix: "mé",
    KorsianAffix: "déè",
    HafizimAffix: "gae",
    ShaklimAffix: "roa",
    WazifimAffix: "tè",
  },
  DEMONS: {
    name: "Demons",
    description:
      "hùhuhõo: demons are born in the barren fields of reality, where divinity's light does not reach. they carry a will outside of divinity's control.\n(daemons ≠ demons)\nIf divinity = 1 and daemons = -1, then demons = 0",
    vowelsSets: ["ù", "u", "õo"],
  },
  FEY: {
    name: "Fey",
    description:
      "hohoãheé: fey are born from the manipulation of rules by various beings, they carry the will of the rules they are bound to.",
    vowelsSets: ["o", "oã", "eé"],
  },
  ELEMENTALS: {
    name: "Elementals",
    description:
      "hahéèhùé: elementals are born from divinity's refusal to intervene, they carry concepts of divinity through the physical realm.",
    vowelsSets: ["a", "éè", "ùé"],
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
      magicalPrecision:
        "Spells are latent and invisible. Power is stored in the caster's intent (+Vpure), but the spell has a −50% chance of immediate success.",
      vectorInfluence:
        "Favors Angels (latent ideal) and Demons (concealed void).",
      inscriptionInfluence:
        "Inscriptions become invisible and latent. The spell power is stored within the inscription itself, activating only when specific conditions are met.",
      spellEffect:
        "Creates a hidden reservoir of magical energy that can be tapped later. The energy remains invisible until activated.",
    },
    waxingCrescent: {
      description: "intention, building energy",
      name: "Intentum",
      glyph: "waxingCrescent.png",
      magicalPrecision:
        "Magic has an accelerated build time. Rituals require fewer steps, but the energy is chaotic and prone to misdirection.",
      vectorInfluence: "Favors Elementals (faster processes).",
      inscriptionInfluence:
        "Inscriptions build power rapidly but become unstable. The inscription must be completed quickly or it will discharge unpredictably.",
      spellEffect:
        "Accelerates the growth and development of any ongoing process. Plants grow faster, wounds heal quicker, but the effect is unpredictable and may cause mutations.",
    },
    firstQuarter: {
      description: "decision, momentum",
      name: "Coagulatio",
      glyph: "firstQuarter.png",
      magicalPrecision:
        "Magic requires a definitive, immediate sacrifice or cost to succeed, but the effect is immediate and powerful.",
      vectorInfluence: "Good for all vectors requiring a strong start.",
      inscriptionInfluence:
        "Inscriptions require immediate activation upon completion. The inscription becomes a trigger that must be activated within 24 hours or loses all power.",
      spellEffect:
        "Creates a powerful burst of energy that must be used immediately. The spell provides massive short-term power but requires a significant sacrifice to activate.",
    },
    waxingGibbous: {
      description: "Refinement, adjustment",
      name: "mutatio",
      glyph: "waxingGibbous.png",
      magicalPrecision:
        "Spells cast are malleable for 24 hours. A caster can adjust the magical effect once after release.",
      vectorInfluence:
        "Favors Fey (Rule-setters, allows conditional re-writing).",
      inscriptionInfluence:
        "Inscriptions remain editable for 24 hours after creation. The inscription can be modified once without losing its power.",
      spellEffect:
        "Allows the caster to refine and perfect any existing magical effect. The spell can be adjusted once after casting to improve its precision or change its target.",
    },
    fullMoon: {
      description: "completion, manifestation",
      name: "rubedo",
      glyph: "fullMoon.png",
      magicalPrecision:
        "Spells are anchored and maximized. Power is released completely, and the effect is highly stable (+Vrelational).",
      vectorInfluence:
        "Favors Angels (maximized creation) and Fey (perfect rule application).",
      inscriptionInfluence:
        "Inscriptions become permanent and unbreakable. The inscription gains maximum power and cannot be dispelled or altered.",
      spellEffect:
        "Creates a permanent, unbreakable magical effect. The spell becomes anchored to reality and cannot be dispelled or counteracted.",
    },
    waningGibbous: {
      description: "sharing, release",
      name: "solutio",
      glyph: "waningGibbous.png",
      magicalPrecision:
        "Magic has a reduced cost but requires shared intent (multiple casters) or an open, public location.",
      vectorInfluence:
        "Favors Fey (social contract) and Elementals (shared process).",
      inscriptionInfluence:
        "Inscriptions must be created in public or with multiple participants. The inscription becomes visible to all and requires community consensus to activate.",
      spellEffect:
        "Creates a communal magical effect that requires multiple participants to activate. The spell gains power from shared intent but becomes visible to all.",
    },
    lastQuarter: {
      description: "Release, letting go",
      name: "cassatio",
      glyph: "lastQuarter.png",
      magicalPrecision:
        "Magic for undoing or breaking is at maximum strength. Spells to reverse, dissolve, or remove conditions are easier to cast.",
      vectorInfluence: "Favors Demons (negation) and Elementals (dissolution).",
      inscriptionInfluence:
        "Inscriptions become dissolution-focused. The inscription gains the power to break, reverse, or undo other magical effects.",
      spellEffect:
        "Creates a powerful dispelling effect that can break, reverse, or undo any existing magical condition. The spell specializes in dissolution and removal.",
    },
    waningCrescent: {
      description: "Rest, surrender",
      name: "quies",
      glyph: "waningCrescent.png",
      magicalPrecision:
        "Magic is weak, but highly resistant to counter-magic. Spells cast are slow and defensive, focused on resilience.",
      vectorInfluence:
        "Favors Fey (enforcing an existing law) or Angels (creating resilient barriers).",
      inscriptionInfluence:
        "Inscriptions become defensive and resilient. The inscription gains resistance to dispelling and counter-magic, but activates slowly.",
      spellEffect:
        "Creates a slow-acting but highly resilient protective barrier. The spell is weak but nearly impossible to dispel or counteract.",
    },
  },

  sunMilestones: {
    equinox: {
      description: "Balance, shift",
      name: "aequilux",
      glyph: "equinox.png",
      magicalPrecision:
        "Vector Convergence. powers from opposing vectors (e.g., an Angel of Fire and a Demon of Fire) can temporarily fuse their effects without annihilation. This is the only time an Angel can learn a Fey rule, or a Demon can guide an Elemental process.",
      vectorInfluence: "Favors Fey (allows rules to cross boundaries).",
      inscriptionInfluence:
        "Inscriptions can combine opposing vector effects. The inscription can contain both Angel and Demon names, or Fey rules with Elemental processes, without conflict.",
      spellEffect:
        "Creates a balanced magical effect that can combine opposing forces without conflict. The spell allows normally incompatible magical energies to work together harmoniously.",
    },
    solstice: {
      description: "abundance, celebration",
      name: "fixatio",
      glyph: "solstice.png",
      magicalPrecision:
        "Cost Nullification. Magic is drawn directly from the celestial source, temporarily halving the physical or energetic cost of all spells, but doubling their emotional/psychological risk.",
      vectorInfluence:
        "Favors Elementals (maximized throughput) and Demons (great risk for great reward).",
      inscriptionInfluence:
        "Inscriptions draw power directly from celestial sources. The inscription requires half the normal materials but carries double the psychological cost to the creator.",
      spellEffect:
        "Creates a powerful magical effect that draws energy directly from celestial sources. The spell requires minimal physical cost but carries significant psychological risk to the caster.",
    },
  },
};
export const Devils = {
  names: {
    // Daemon Order Aspects - Devils of zkn
    zkn: [
      {
        name: "The Queller",
        description:
          "Devil of zkn - The force that suppresses all movement and activity, bringing everything to a halt through overwhelming stillness",
      },
      {
        name: "The Binder",
        description:
          "Devil of zkn - The force that immobilizes and restrains, preventing any form of change or transformation through absolute constraint",
      },
      {
        name: "The Fossilizer",
        description:
          "Devil of zkn - The force that petrifies and preserves in eternal stasis, turning all things into unmoving, unchanging forms",
      },
    ],

    // Daemon Order Aspects - Devils of zrf
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

    // Daemon Order Aspects - Devils of zʇc
    zʇc: [
      {
        name: "The Eraser",
        description:
          "Devil of zʇc - Systematically removes all traces of existence, wiping away matter, memory, and meaning from reality",
      },
      {
        name: "The Unraveler",
        description:
          "Devil of zʇc - Dissolves the fabric of reality itself, undoing the connections that hold existence together",
      },
      {
        name: "The Silencer",
        description:
          "Devil of zʇc - Eliminates all sound, thought, and communication, creating zones of absolute silence and emptiness",
      },
    ],
  },
};
