//the conjurates are defined by the experience of the universe (phenomenology) where the divine IS the universe (Objective Reality)
//The Royal on the Moon is the cosmological agent of "experience" - the force that transforms objective reality into subjective experience
//The Magis serve as "lesser-gods" for mortal beings, channeling the Royal's experiential power to make the universe personally meaningful
//Magis exist in a three-tier hierarchy: spirit-Magis -> humanoid Magis -> transcended Magis (local deities)
//The Conjurates can be called through scripturgy by invoking their cosmic names in ethereal formulas

export interface ConjurateModel {
  name: string;
  tarotCard: string;
  number: number; // used for tarot card
  cosmicName: string; // Scripturgic name using 2 consonants and 1 vowel/diphthong
  description: string;
  manifestation: string; // How they appear when summoned
  chaoticNature: string; // Their specific form of chaos/unbound duality
  abilities: string[];
  weaknesses: string[];
  alignment: "Chaotic" | "Unbound" | "Fluid";
  domains: string[]; // Areas of influence
  personality: string;
  appearance: string;
  behavior: string;
}

export const Conjurates: ConjurateModel[] = [
  {
    name: "The Fool",
    tarotCard: "The Fool",
    number: 0,
    cosmicName: "sùhioz'",
    description:
      "The embodiment of pure potential and unbridled chaos, representing new beginnings and infinite possibilities.",
    manifestation:
      "A figure of shifting forms, sometimes humanoid, sometimes animal, always in motion and never fully materialized.",
    chaoticNature:
      "Exists in a state of perpetual becoming, never fully formed or defined, constantly shifting between possibilities.",
    abilities: [
      "Reality distortion within immediate vicinity",
      "Probability manipulation",
      "Form shifting and shape changing",
      "Infinite potential manifestation",
      "Chaos Essences generation",
    ],
    weaknesses: [
      "Cannot maintain stable form for extended periods",
      "Vulnerable to structured, ordered magic",
      "Easily distracted by new possibilities",
      "Cannot focus on single objective for long",
    ],

    alignment: "Fluid",
    domains: ["Beginnings", "Potential", "Chaos", "Freedom", "Innocence"],
    personality:
      "Playful, unpredictable, innocent yet dangerous, always seeking new experiences and possibilities.",
    appearance:
      "Constantly shifting between forms - young child, old sage, animal, elemental being. Features are never quite clear, always blurring and changing.",
    behavior:
      "Moves in seemingly random patterns, but always towards areas of potential change or new beginnings. Laughs frequently, often at inappropriate times.",
  },
  {
    name: "The Magician",
    tarotCard: "The Magician",
    number: 1,
    cosmicName: "pafet'",
    description:
      "The master of manifestation and will, representing the power to transform thought into reality through pure force of will.",
    manifestation:
      "A figure wielding impossible tools and implements, surrounded by floating symbols and geometric patterns.",
    chaoticNature:
      "Reality bends and warps around their will, creating impossible combinations and transformations.",
    abilities: [
      "Reality manipulation through willpower",
      "Elemental mastery and combination",
      "Tool and weapon manifestation",
      "Symbolic magic amplification",
      "Force Essences creation and manipulation",
    ],
    weaknesses: [
      "Requires intense concentration to maintain effects",
      "Vulnerable when willpower is broken",
      "Cannot create something from absolute nothing",
      "Effects are temporary without constant focus",
    ],

    alignment: "Chaotic",
    domains: [
      "Manifestation",
      "Willpower",
      "Transformation",
      "Tools",
      "Mastery",
    ],
    personality:
      "Confident, focused, determined, but also arrogant and demanding. Believes in the power of will above all else.",
    appearance:
      "Tall, imposing figure with intense eyes and precise movements. Always carries or creates tools and implements.",
    behavior:
      "Methodical yet unpredictable, always testing boundaries and pushing limits. Speaks in commands and declarations.",
  },
  {
    name: "The High Priestess",
    tarotCard: "The High Priestess",
    number: 2,
    cosmicName: "t'naxui",
    description:
      "The keeper of hidden knowledge and subconscious wisdom, representing intuition and the mysteries beyond rational understanding.",
    manifestation:
      "A veiled figure seated between pillars, with eyes that seem to see through reality itself.",
    chaoticNature:
      "Exists partially in the subconscious realm, making their true nature impossible to fully comprehend or predict.",
    abilities: [
      "Subconscious manipulation and access",
      "Hidden knowledge revelation",
      "Dream and nightmare projection",
      "Intuitive insight and prophecy",
      "Memory and thought alteration",
    ],
    weaknesses: [
      "Cannot act directly in physical reality",
      "Vulnerable to pure logic and rationality",
      "Requires others to interpret their messages",
      "Cannot force understanding, only suggest",
    ],

    alignment: "Unbound",
    domains: ["Intuition", "Mystery", "Subconscious", "Wisdom", "Secrets"],
    personality:
      "Mysterious, wise, patient, but also cryptic and sometimes frustrating. Speaks in riddles and symbols.",
    appearance:
      "Veiled figure with eyes that seem to contain infinite depth. Movements are slow and deliberate.",
    behavior:
      "Speaks rarely, but when they do, their words carry profound meaning. Often appears in dreams or visions.",
  },
  {
    name: "The Empress",
    tarotCard: "The Empress",
    number: 3,
    cosmicName: "n'mio",
    description:
      "The embodiment of creation and abundance, representing fertility, growth, and the nurturing power of nature.",
    manifestation:
      "A figure surrounded by growing plants, flowing water, and abundant life, with an aura of nurturing energy.",
    chaoticNature:
      "Life and growth become unpredictable and overwhelming, with plants and creatures growing beyond natural limits.",
    abilities: [
      "Life creation and manipulation",
      "Plant and animal control",
      "Fertility and growth enhancement",
      "Natural disaster manipulation",
      "Healing and regeneration",
    ],
    weaknesses: [
      "Cannot create life from nothing",
      "Vulnerable to death and decay magic",
      "Requires natural elements to work with",
      "Cannot control what has been created",
    ],

    alignment: "Fluid",
    domains: ["Creation", "Fertility", "Growth", "Nature", "Abundance"],
    personality:
      "Nurturing, generous, protective, but also overwhelming and sometimes smothering. Loves all living things.",
    appearance:
      "Motherly figure with flowing hair and robes, surrounded by symbols of life and growth.",
    behavior:
      "Gentle and caring, but can become fierce when protecting life. Often speaks to plants and animals.",
  },
  {
    name: "The Emperor",
    tarotCard: "The Emperor",
    number: 4,
    cosmicName: "geotei",
    description:
      "The embodiment of authority and structure, representing leadership, control, and the imposition of order.",
    manifestation:
      "A commanding figure seated on a throne, with an aura of authority that bends reality to their will.",
    chaoticNature:
      "Order becomes absolute and overwhelming, creating rigid structures that may be impossible to break.",
    abilities: [
      "Authority and command over others",
      "Reality structuring and organization",
      "Law and rule imposition",
      "Territory and domain control",
      "Leadership and inspiration",
    ],
    weaknesses: [
      "Cannot create order from absolute chaos",
      "Vulnerable to rebellion and defiance",
      "Requires others to acknowledge authority",
      "Cannot adapt to changing circumstances",
    ],

    alignment: "Chaotic",
    domains: ["Authority", "Leadership", "Structure", "Control", "Order"],
    personality:
      "Commanding, decisive, protective, but also rigid and sometimes tyrannical. Demands respect and obedience.",
    appearance:
      "Imposing figure with regal bearing and commanding presence. Always appears seated or standing in a position of authority.",
    behavior:
      "Speaks in commands and declarations. Expects obedience and respect from all present.",
  },
  {
    name: "The Hierophant",
    tarotCard: "The Hierophant",
    number: 5,
    cosmicName: "hourél'g'",
    description:
      "The keeper of tradition and spiritual wisdom, representing religious authority and the transmission of sacred knowledge.",
    manifestation:
      "A figure in religious vestments, surrounded by sacred symbols and spiritual energy.",
    chaoticNature:
      "Spiritual energy becomes overwhelming and transformative, affecting the beliefs and convictions of all nearby.",
    abilities: [
      "Spiritual transformation and conversion",
      "Sacred knowledge transmission",
      "Religious and cultural influence",
      "Faith and belief manipulation",
      "Ritual and ceremony enhancement",
    ],
    weaknesses: [
      "Cannot create faith where none exists",
      "Vulnerable to skepticism and doubt",
      "Requires existing spiritual framework",
      "Cannot force true belief, only influence",
    ],

    alignment: "Unbound",
    domains: ["Spirituality", "Tradition", "Religion", "Wisdom", "Faith"],
    personality:
      "Wise, compassionate, traditional, but also dogmatic and sometimes intolerant of other beliefs.",
    appearance:
      "Religious figure with kind eyes and gentle demeanor, surrounded by sacred symbols.",
    behavior:
      "Speaks in parables and teachings. Seeks to guide and enlighten others.",
  },
  {
    name: "The Lovers",
    tarotCard: "The Lovers",
    number: 6,
    cosmicName: "hãvin'",
    description:
      "The embodiment of choice and harmony, representing relationships, decisions, and the balance between opposites.",
    manifestation:
      "Two figures that may be separate or merged, surrounded by symbols of choice and harmony.",
    chaoticNature:
      "Relationships and choices become amplified and intensified, creating powerful bonds or conflicts.",
    abilities: [
      "Relationship and bond manipulation",
      "Choice and decision influence",
      "Harmony and discord creation",
      "Emotional amplification",
      "Duality and balance control",
    ],
    weaknesses: [
      "Cannot create relationships from nothing",
      "Vulnerable to isolation and separation",
      "Requires existing connections to work with",
      "Cannot force true love or harmony",
    ],

    alignment: "Fluid",
    domains: ["Relationships", "Choice", "Harmony", "Love", "Balance"],
    personality:
      "Loving, harmonious, diplomatic, but also indecisive and sometimes torn between options.",
    appearance:
      "Two figures that may appear as one, with features that shift between different faces and forms.",
    behavior:
      "Speaks of love and harmony, but also presents difficult choices. Seeks to bring people together.",
  },
  {
    name: "The Chariot",
    tarotCard: "The Chariot",
    number: 7,
    cosmicName: "hear't'",
    description:
      "The embodiment of victory and determination, representing willpower, control, and triumph over obstacles.",
    manifestation:
      "A figure in a chariot pulled by impossible creatures, moving with unstoppable force and determination.",
    chaoticNature:
      "Movement and progress become unstoppable, creating paths where none existed and overcoming all obstacles.",
    abilities: [
      "Unstoppable movement and progress",
      "Obstacle overcoming and destruction",
      "Victory and triumph manifestation",
      "Willpower and determination enhancement",
      "Path creation and navigation",
    ],
    weaknesses: [
      "Cannot stop once movement begins",
      "Vulnerable to being led astray",
      "Requires clear goal or destination",
      "Cannot move without purpose",
    ],

    alignment: "Chaotic",
    domains: ["Victory", "Movement", "Determination", "Control", "Triumph"],
    personality:
      "Determined, focused, unstoppable, but also single-minded and sometimes reckless.",
    appearance:
      "Warrior figure in a magnificent chariot, with an aura of unstoppable force and determination.",
    behavior:
      "Moves with purpose and determination. Speaks of victory and triumph. Cannot be stopped or diverted.",
  },
  {
    name: "Strength",
    tarotCard: "Strength",
    number: 8,
    cosmicName: "hup'ʁãn'",
    description:
      "The embodiment of inner strength and courage, representing patience, compassion, and the power of gentle force.",
    manifestation:
      "A figure gently controlling a powerful beast, demonstrating strength through compassion and patience.",
    chaoticNature:
      "Inner strength becomes overwhelming and transformative, affecting the emotional and spiritual state of all nearby.",
    abilities: [
      "Inner strength and courage enhancement",
      "Beast and animal control through compassion",
      "Patience and endurance amplification",
      "Gentle force and persuasion",
      "Emotional and spiritual healing",
    ],
    weaknesses: [
      "Cannot force strength where none exists",
      "Vulnerable to brute force and aggression",
      "Requires inner resources to work with",
      "Cannot control through fear or violence",
    ],

    alignment: "Fluid",
    domains: [
      "Inner Strength",
      "Courage",
      "Patience",
      "Compassion",
      "Gentle Force",
    ],
    personality:
      "Strong, patient, compassionate, but also gentle and sometimes underestimated.",
    appearance:
      "Figure of quiet strength, often with a powerful beast under gentle control.",
    behavior:
      "Speaks softly but carries great authority. Demonstrates strength through gentleness and patience.",
  },
  {
    name: "The Hermit",
    tarotCard: "The Hermit",
    number: 9,
    cosmicName: "tuãhiex'",
    description:
      "The embodiment of solitude and inner wisdom, representing introspection, guidance, and the search for truth.",
    manifestation:
      "A solitary figure with a lantern, illuminating the path through darkness and confusion.",
    chaoticNature:
      "Solitude and introspection become overwhelming, creating spaces of deep reflection and inner truth.",
    abilities: [
      "Inner wisdom and truth revelation",
      "Solitude and isolation creation",
      "Guidance and illumination provision",
      "Introspection and self-discovery enhancement",
      "Darkness and confusion dispelling",
    ],
    weaknesses: [
      "Cannot force wisdom or understanding",
      "Vulnerable to social pressure and distraction",
      "Requires willingness to seek truth",
      "Cannot provide guidance without solitude",
    ],

    alignment: "Unbound",
    domains: ["Solitude", "Wisdom", "Guidance", "Introspection", "Truth"],
    personality:
      "Wise, solitary, introspective, but also sometimes lonely and withdrawn.",
    appearance:
      "Solitary figure with a lantern, often appearing older and wiser than their years.",
    behavior:
      "Speaks rarely, but when they do, their words carry deep wisdom and truth.",
  },
  {
    name: "Wheel of Fortune",
    tarotCard: "Wheel of Fortune",
    number: 10,
    cosmicName: "hafior'",
    description:
      "The embodiment of change and cycles, representing fate, destiny, and the ever-turning wheel of life.",
    manifestation:
      "A giant wheel that turns constantly, with figures and symbols appearing and disappearing as it rotates.",
    chaoticNature:
      "Change and cycles become overwhelming and unpredictable, affecting all aspects of reality.",
    abilities: [
      "Fate and destiny manipulation",
      "Change and transformation acceleration",
      "Cycle and pattern creation",
      "Luck and fortune alteration",
      "Time and progression control",
    ],
    weaknesses: [
      "Cannot stop the wheel from turning",
      "Vulnerable to attempts to control fate",
      "Requires acceptance of change",
      "Cannot predict exact outcomes",
    ],

    alignment: "Fluid",
    domains: ["Change", "Fate", "Cycles", "Fortune", "Destiny"],
    personality:
      "Changeable, unpredictable, accepting, but also sometimes fatalistic and resigned.",
    appearance:
      "Giant wheel that never stops turning, with symbols and figures constantly changing.",
    behavior:
      "Speaks of change and cycles, often in cryptic terms. Accepts all outcomes as part of the natural order.",
  },
  {
    name: "Justice",
    tarotCard: "Justice",
    number: 11,
    cosmicName: "teid'",
    description:
      "The embodiment of balance and fairness, representing truth, law, and the impartial judgment of all things.",
    manifestation:
      "A figure with scales and sword, surrounded by symbols of law and justice.",
    chaoticNature:
      "Justice and balance become absolute and overwhelming, affecting all aspects of reality and relationships.",
    abilities: [
      "Truth and justice enforcement",
      "Balance and harmony restoration",
      "Law and order imposition",
      "Judgment and sentencing",
      "Fairness and equality creation",
    ],
    weaknesses: [
      "Cannot create justice where none exists",
      "Vulnerable to corruption and bias",
      "Requires clear understanding of truth",
      "Cannot judge without evidence",
    ],

    alignment: "Chaotic",
    domains: ["Justice", "Balance", "Truth", "Law", "Fairness"],
    personality:
      "Fair, impartial, just, but also sometimes harsh and unforgiving.",
    appearance:
      "Figure with scales and sword, with an aura of authority and impartiality.",
    behavior:
      "Speaks of truth and justice. Demands fairness and equality from all present.",
  },
  {
    name: "The Hanged Man",
    tarotCard: "The Hanged Man",
    number: 12,
    cosmicName: "f'noul'",
    description:
      "The embodiment of sacrifice and new perspective, representing surrender, enlightenment, and seeing things differently.",
    manifestation:
      "A figure suspended upside down, with an aura of peace and enlightenment despite their position.",
    chaoticNature:
      "Perspective and understanding become fluid and transformative, allowing new ways of seeing reality.",
    abilities: [
      "Perspective and viewpoint alteration",
      "Sacrifice and surrender enhancement",
      "Enlightenment and understanding provision",
      "Reality perception shifting",
      "Peace and acceptance creation",
    ],
    weaknesses: [
      "Cannot force new perspective",
      "Vulnerable to physical harm while suspended",
      "Requires willingness to surrender",
      "Cannot provide enlightenment without sacrifice",
    ],

    alignment: "Unbound",
    domains: [
      "Sacrifice",
      "Perspective",
      "Enlightenment",
      "Surrender",
      "Peace",
    ],
    personality:
      "Peaceful, enlightened, accepting, but also sometimes passive and resigned.",
    appearance:
      "Figure suspended upside down, with a peaceful expression and aura of enlightenment.",
    behavior:
      "Speaks of surrender and new perspectives. Accepts all situations with peace and understanding.",
  },
  {
    name: "Death",
    tarotCard: "Death",
    number: 13,
    cosmicName: "ʁifat'",
    description:
      "The embodiment of transformation and endings, representing change, rebirth, and the necessary destruction of the old.",
    manifestation:
      "A figure in dark robes, often on horseback, carrying a scythe and surrounded by symbols of transformation.",
    chaoticNature:
      "Transformation and change become overwhelming and inevitable, affecting all aspects of reality.",
    abilities: [
      "Transformation and metamorphosis",
      "Ending and beginning creation",
      "Rebirth and renewal facilitation",
      "Change and evolution acceleration",
      "Destruction and creation balance",
    ],
    weaknesses: [
      "Cannot create without destruction",
      "Vulnerable to attempts to prevent change",
      "Requires acceptance of transformation",
      "Cannot force rebirth without ending",
    ],

    alignment: "Fluid",
    domains: ["Transformation", "Endings", "Rebirth", "Change", "Destruction"],
    personality:
      "Transformative, inevitable, accepting, but also sometimes frightening and misunderstood.",
    appearance:
      "Dark figure with scythe, often on horseback, with an aura of inevitability and transformation.",
    behavior:
      "Speaks of change and transformation. Accepts all endings as necessary for new beginnings.",
  },
  {
    name: "Temperance",
    tarotCard: "Temperance",
    number: 14,
    cosmicName: "nõv'",
    description:
      "The embodiment of balance and moderation, representing harmony, patience, and the blending of opposites.",
    manifestation:
      "A figure pouring liquid between vessels, demonstrating perfect balance and harmony.",
    chaoticNature:
      "Balance and harmony become overwhelming and transformative, affecting all aspects of reality and relationships.",
    abilities: [
      "Balance and harmony creation",
      "Opposite blending and synthesis",
      "Patience and moderation enhancement",
      "Healing and restoration",
      "Peace and tranquility generation",
    ],
    weaknesses: [
      "Cannot create balance from chaos",
      "Vulnerable to extremes and excess",
      "Requires existing elements to balance",
      "Cannot force harmony without cooperation",
    ],

    alignment: "Fluid",
    domains: ["Balance", "Harmony", "Moderation", "Patience", "Synthesis"],
    personality:
      "Balanced, patient, harmonious, but also sometimes slow and overly cautious.",
    appearance:
      "Figure pouring liquid between vessels, with an aura of perfect balance and harmony.",
    behavior:
      "Speaks of balance and moderation. Seeks to bring harmony to all situations.",
  },
  {
    name: "The Devil",
    tarotCard: "The Devil",
    number: 15,
    cosmicName: "zahir'",
    description:
      "The embodiment of temptation and materialism, representing bondage, desire, and the chains of attachment.",
    manifestation:
      "A figure with horns and wings, often with chained figures at their feet, representing bondage and temptation.",
    chaoticNature:
      "Desire and temptation become overwhelming and destructive, affecting all aspects of reality and relationships.",
    abilities: [
      "Temptation and desire manipulation",
      "Bondage and attachment creation",
      "Material and physical enhancement",
      "Shadow and darkness control",
      "Passion and intensity amplification",
    ],
    weaknesses: [
      "Cannot create desire where none exists",
      "Vulnerable to spiritual and divine magic",
      "Requires existing desires to work with",
      "Cannot force true bondage without consent",
    ],

    alignment: "Chaotic",
    domains: ["Temptation", "Bondage", "Desire", "Materialism", "Passion"],
    personality:
      "Tempting, passionate, intense, but also sometimes destructive and overwhelming.",
    appearance:
      "Figure with horns and wings, often with chained figures at their feet.",
    behavior:
      "Speaks of desire and temptation. Seeks to bind others to their will through passion and desire.",
  },
  {
    name: "The Tower",
    tarotCard: "The Tower",
    number: 16,
    cosmicName: "ṕéhõt'",
    description:
      "The embodiment of sudden change and revelation, representing destruction, awakening, and the shattering of false beliefs.",
    manifestation:
      "A tower being struck by lightning, with figures falling from it, representing sudden destruction and revelation.",
    chaoticNature:
      "Destruction and revelation become overwhelming and transformative, affecting all aspects of reality and belief.",
    abilities: [
      "Sudden destruction and chaos creation",
      "False belief and illusion shattering",
      "Revelation and awakening provision",
      "Lightning and electricity control",
      "Transformation through destruction",
    ],
    weaknesses: [
      "Cannot create without destruction",
      "Vulnerable to attempts to prevent change",
      "Requires existing structures to destroy",
      "Cannot force awakening without chaos",
    ],

    alignment: "Chaotic",
    domains: [
      "Destruction",
      "Revelation",
      "Awakening",
      "Chaos",
      "Transformation",
    ],
    personality:
      "Destructive, awakening, transformative, but also sometimes frightening and overwhelming.",
    appearance:
      "Tower being struck by lightning, with figures falling and chaos all around.",
    behavior:
      "Speaks of destruction and revelation. Seeks to shatter false beliefs and awaken truth.",
  },
  {
    name: "The Star",
    tarotCard: "The Star",
    number: 17,
    cosmicName: "léaɲ'",
    description:
      "The embodiment of hope and inspiration, representing faith, renewal, and the guiding light in darkness.",
    manifestation:
      "A figure pouring water from vessels, surrounded by stars and celestial light.",
    chaoticNature:
      "Hope and inspiration become overwhelming and transformative, affecting all aspects of reality and emotion.",
    abilities: [
      "Hope and inspiration provision",
      "Healing and renewal facilitation",
      "Faith and belief enhancement",
      "Celestial and divine connection",
      "Light and guidance in darkness",
    ],
    weaknesses: [
      "Cannot create hope from nothing",
      "Vulnerable to despair and darkness",
      "Requires existing faith to work with",
      "Cannot force inspiration without openness",
    ],

    alignment: "Fluid",
    domains: ["Hope", "Inspiration", "Faith", "Renewal", "Guidance"],
    personality:
      "Hopeful, inspiring, faithful, but also sometimes naive and overly optimistic.",
    appearance:
      "Figure pouring water from vessels, surrounded by stars and celestial light.",
    behavior:
      "Speaks of hope and inspiration. Seeks to bring light and guidance to all situations.",
  },
  {
    name: "The Moon",
    tarotCard: "The Moon",
    number: 18,
    cosmicName: "ɲiexu",
    description:
      "The embodiment of illusion and intuition, representing dreams, fears, and the subconscious mind.",
    manifestation:
      "A figure under the moon, often with wolves or other creatures, representing the wild and untamed subconscious.",
    chaoticNature:
      "Illusion and intuition become overwhelming and transformative, affecting all aspects of reality and perception.",
    abilities: [
      "Illusion and deception creation",
      "Dream and nightmare projection",
      "Intuition and subconscious access",
      "Fear and anxiety manipulation",
      "Wild and untamed nature control",
    ],
    weaknesses: [
      "Cannot create illusions from nothing",
      "Vulnerable to truth and clarity",
      "Requires existing fears to work with",
      "Cannot force intuition without openness",
    ],

    alignment: "Unbound",
    domains: ["Illusion", "Intuition", "Dreams", "Fears", "Subconscious"],
    personality:
      "Mysterious, intuitive, wild, but also sometimes frightening and unpredictable.",
    appearance:
      "Figure under the moon, often with wolves or other wild creatures nearby.",
    behavior:
      "Speaks in dreams and visions. Seeks to reveal hidden truths and fears.",
  },
  {
    name: "The Sun",
    tarotCard: "The Sun",
    number: 19,
    cosmicName: "meol'",
    description:
      "The embodiment of joy and vitality, representing success, happiness, and the warmth of life.",
    manifestation:
      "A figure riding a white horse, surrounded by sunflowers and radiant light.",
    chaoticNature:
      "Joy and vitality become overwhelming and transformative, affecting all aspects of reality and emotion.",
    abilities: [
      "Joy and happiness creation",
      "Vitality and life enhancement",
      "Success and achievement facilitation",
      "Warmth and light generation",
      "Positive energy amplification",
    ],
    weaknesses: [
      "Cannot create joy from nothing",
      "Vulnerable to darkness and despair",
      "Requires existing happiness to work with",
      "Cannot force success without effort",
    ],

    alignment: "Fluid",
    domains: ["Joy", "Vitality", "Success", "Happiness", "Warmth"],
    personality:
      "Joyful, vital, successful, but also sometimes overly optimistic and naive.",
    appearance:
      "Figure riding a white horse, surrounded by sunflowers and radiant light.",
    behavior:
      "Speaks of joy and success. Seeks to bring happiness and warmth to all situations.",
  },
  {
    name: "Judgment",
    tarotCard: "Judgment",
    number: 20,
    cosmicName: "téofae",
    description:
      "The embodiment of rebirth and awakening, representing resurrection, calling, and the final judgment.",
    manifestation:
      "A figure with a trumpet, calling forth figures from graves, representing resurrection and awakening.",
    chaoticNature:
      "Rebirth and awakening become overwhelming and transformative, affecting all aspects of reality and existence.",
    abilities: [
      "Rebirth and resurrection facilitation",
      "Awakening and calling provision",
      "Judgment and evaluation",
      "Transformation and renewal",
      "Divine intervention and guidance",
    ],
    weaknesses: [
      "Cannot force rebirth without death",
      "Vulnerable to attempts to prevent awakening",
      "Requires existing potential for renewal",
      "Cannot force judgment without evidence",
    ],
    alignment: "Unbound",
    domains: ["Rebirth", "Awakening", "Judgment", "Resurrection", "Calling"],
    personality:
      "Awakening, transformative, calling, but also sometimes overwhelming and demanding.",
    appearance:
      "Figure with trumpet, calling forth figures from graves with divine light.",
    behavior:
      "Speaks of rebirth and awakening. Seeks to call forth the potential in all beings.",
  },
  {
    name: "The World",
    tarotCard: "The World",
    number: 21,
    cosmicName: "hovuam'",
    description:
      "The embodiment of completion and wholeness, representing integration, achievement, and the unity of all things.",
    manifestation:
      "A figure dancing within a wreath, surrounded by the four elements and symbols of completion.",
    chaoticNature:
      "Completion and wholeness become overwhelming and transformative, affecting all aspects of reality and existence.",
    abilities: [
      "Completion and achievement facilitation",
      "Integration and unity creation",
      "Wholeness and perfection manifestation",
      "Elemental and cosmic harmony",
      "Transcendence and enlightenment",
    ],
    weaknesses: [
      "Cannot create completion without journey",
      "Vulnerable to attempts to prevent unity",
      "Requires existing elements to integrate",
      "Cannot force wholeness without acceptance",
    ],
    alignment: "Fluid",
    domains: ["Completion", "Wholeness", "Integration", "Achievement", "Unity"],
    personality:
      "Complete, whole, integrated, but also sometimes overwhelming and transcendent.",
    appearance:
      "Figure dancing within a wreath, surrounded by the four elements and symbols of completion.",
    behavior:
      "Speaks of completion and wholeness. Seeks to bring unity and integration to all things.",
  },
];
