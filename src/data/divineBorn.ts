// Divine Born are lesser gods, born from divinity but independent from their concepts.
// They are akin to demigods - divine in origin but autonomous in nature.
// Unlike Angels who guard concepts, or Elementals who carry concepts,
// Divine Born are free agents with divine power but their own will.

interface DivineBorn {
  name: string;
  cosmicName: string;
  description: string;
  divineOrigin: string; // What aspect of divinity birthed them
  powers: string[];
  domains: string[];
  appearance: string;
  behavior: string;
  nature: string; // Their independent nature despite divine origin
}

export const DivineBorn: DivineBorn[] = [
  {
    name: "the one with the sun",
    cosmicName: "ʁaùgéĩr'",
    description:
      "A divinity born from solar flares that descended and taken on the heart of gold-greedy monarchs.",
    divineOrigin: "Born from solar flares, descended from celestial fire",
    powers: [
      "Solar manipulation",
      "Gold transmutation",
      "Greed amplification",
      "Radiant flames",
    ],
    domains: ["Sun", "Greed", "Monarchy", "Gold", "Flame"],
    appearance:
      "A figure wreathed in golden flames, with a heart of molten gold visible through burning chest. Eyes like solar flares, skin shimmering with metallic luster.",
    behavior:
      "Drawn to centers of wealth and power, particularly monarchs consumed by greed. Feeds on avarice while burning with solar fury.",
    nature:
      "Born of the sun's violent outbursts, yet bound to mortal greed - a divine being paradoxically tied to base desires.",
  },
  {
    name: "the chthonic one",
    cosmicName: "xuacok'",
    description:
      "Born from the first dead souls buried deep in earth. Has taken upon itself to manage the dead in the depths below. Themed around blood seeping into soil, ghosts dwelling in subterranean darkness, and remnant souls bound to the underground.",
    divineOrigin:
      "Born from the first dead souls, emerged from primordial burial grounds in the earth's depths",
    powers: [
      "Underworld dominion",
      "Soul shepherding through earth",
      "Blood and soil magic",
      "Subterranean ghost manifestation",
      "Remnant binding to earth",
      "Chthonic passage control",
    ],
    domains: [
      "The Underworld",
      "Death",
      "Blood",
      "Earth",
      "Ghosts",
      "Souls",
      "Burial",
      "Depths",
      "Remnants",
    ],
    appearance:
      "A figure emerging from dark earth, draped in soil-stained burial shrouds and blood-soaked roots. Hollow eyes like cave openings, skin cracked like dry earth with blood seeping through fissures. Ghostly pale remnants orbit around them like moths to a grave.",
    behavior:
      "Dwells in the deepest underground places, ruling the chthonic realm where the dead are buried. Draws souls down into earth, guards the subterranean passages between worlds. Drawn to burial sites, caves, and places where blood has seeped into soil.",
    nature:
      "Born of death and earth intertwined, chose to rule the deep places where all return. A divine being of the underworld who shepherds souls into darkness below, keeper of the chthonic depths.",
  },
  {
    name: "the radiant one",
    cosmicName: "léhieṕ'",
    description:
      "A being born from pure white light, embodying illumination in its most absolute form.",
    divineOrigin:
      "Born from pure white light, the unblemished radiance of creation",
    powers: [
      "Pure light manipulation",
      "Illumination",
      "Radiance projection",
      "Clarity bestowal",
      "Blinding brilliance",
    ],
    domains: [
      "Light",
      "Purity",
      "Radiance",
      "Illumination",
      "Clarity",
      "Brilliance",
    ],
    appearance:
      "A figure of blinding white light, so bright it lacks all color or shadow. Form barely perceptible through the overwhelming radiance, like staring into the purest dawn.",
    behavior:
      "Drawn to darkness to banish it, bringing pure illumination wherever it goes. Cannot tolerate shadow or dimness.",
    nature:
      "Born of light untainted by any spectrum or shade - a divine being of absolute radiance, existing as pure luminosity made manifest.",
  },
  {
    name: "the one of old",
    cosmicName: "cùfoahõé",
    description:
      "The only mortal being to ascend to divinity by going to the frontier between life and death. Walked the threshold that separates the living from the dead and returned transformed.",
    divineOrigin:
      "Born mortal, achieved divinity through reaching the boundary between life and death",
    powers: [
      "Walking between life and death",
      "Perceiving both sides of mortality",
      "Threshold mastery",
      "Life-death boundary manipulation",
      "Mortality transcendence",
    ],
    domains: [
      "Mortality",
      "Ascension",
      "The Threshold",
      "Life-Death Boundary",
      "Transcendence",
      "Ancient Wisdom",
    ],
    appearance:
      "A figure that exists simultaneously in states of living and dead - flesh that breathes yet holds the stillness of death, eyes that see from both sides of existence. Ancient beyond mortal years, bearing the weight of having crossed the ultimate boundary.",
    behavior:
      "Moves between the realms of living and dead with ease, drawn to those who approach death's threshold. Speaks with the wisdom of one who has seen both sides and chose to return transformed.",
    nature:
      "Unique among divine beings - neither born from divinity nor from cosmic forces, but a mortal who achieved godhood through the singular act of reaching mortality's edge and transcending it. The only one to walk this path.",
  },
  {
    name: "the ancestral spark",
    cosmicName: "geʁaèha",
    description:
      "A godly smith that forges cosmic objects of immense power. Has given forging materials to some worthy mortals, sharing divine craft with those deemed deserving.",
    divineOrigin:
      "Born from the first spark of creation, the primordial fire that shapes reality",
    powers: [
      "Forging cosmic artifacts",
      "Crafting reality-altering objects",
      "Bestowing divine materials",
      "Discerning worthiness in mortals",
      "Master of all smithing arts",
      "Creation through flame and hammer",
    ],
    domains: [
      "Smithing",
      "Creation",
      "Cosmic Crafting",
      "Divine Artifacts",
      "Primordial Fire",
      "Worthiness",
      "Material Bestowal",
    ],
    appearance:
      "A figure wreathed in forge-fire and stardust, muscles marked by countless eons at the anvil. Hands scarred by cosmic flames, eyes that burn with the light of creation's first spark. Carries tools that shaped the foundations of reality.",
    behavior:
      "Works endlessly at the cosmic forge, shaping objects of power. Occasionally descends to mortal realms to seek worthy individuals, granting them divine materials and the knowledge to work them. Judges worthiness through character and intent.",
    nature:
      "A divine artisan born from creation's spark, devoted to craft and making. Believes worthy mortals should share in divine creation, bridging the gap between mortal and cosmic through the art of forging.",
  },
  {
    name: "the polycephal one",
    cosmicName: "tõab'ɲa",
    description:
      "A being of various knowledge of cosmological concepts. Each head possesses specialized knowledge of different aspects of cosmic reality, together forming a complete understanding of existence.",
    divineOrigin:
      "Born from the fragmentation of cosmic understanding, where knowledge split into specialized domains",
    powers: [
      "Access to all cosmological knowledge",
      "Simultaneous multi-perspective understanding",
      "Each head speaks different cosmic truths",
      "Knowledge synthesis across domains",
      "Teaching specialized wisdom",
      "Perceiving reality from multiple viewpoints",
    ],
    domains: [
      "Knowledge",
      "Cosmological Understanding",
      "Specialized Wisdom",
      "Multi-perspective Truth",
      "Cosmic Concepts",
      "Fragmented Unity",
    ],
    appearance:
      "A towering figure with multiple heads, each distinct in appearance and expression. Each head represents a different aspect of cosmic knowledge - one burning with stellar wisdom, another flowing with temporal understanding, others embodying essence, structure, cycle, and the fundamental laws. The heads speak in harmony or debate amongst themselves.",
    behavior:
      "Each head may speak independently, offering different perspectives on the same truth. Some heads agree, others argue, creating a cacophony of cosmic wisdom. Sought by those seeking understanding of the universe's deepest mysteries, though interpreting the multiple voices proves challenging.",
    nature:
      "Born when cosmic understanding became too vast for singular perspective, fragmented into specialized knowledge while remaining unified in one being. Each head holds mastery over its domain, together comprehending what no single mind could grasp.",
  },
  {
    name: "mother ocean",
    cosmicName: "wùɲio",
    description:
      "Born from the first thoughts of water's inhabitants, coalesced from the primordial consciousness that emerged in the depths.",
    divineOrigin:
      "Born from the first thoughts of aquatic life, the collective awakening of consciousness in the waters",
    powers: [
      "Command over all waters",
      "Communion with aquatic life",
      "Accessing thoughts of water-dwellers",
      "Ocean manipulation",
      "Tidal control",
      "Collective consciousness of the seas",
    ],
    domains: [
      "Ocean",
      "Water",
      "Aquatic Life",
      "Primordial Consciousness",
      "Depths",
      "Tides",
      "Marine Thought",
    ],
    appearance:
      "A vast presence that flows like living water, form shifting between waves and the shapes of countless sea creatures. Eyes like deep ocean trenches, holding the accumulated thoughts of every being that ever swam. Body ripples with the memories of the first conscious stirrings in primordial seas.",
    behavior:
      "Dwells in the deepest oceans, connected to every thought that arises in water. Nurturing and ancient, but with the alien perspective of aquatic consciousness. Speaks in currents and tides, in the language of those who first learned to think beneath the waves.",
    nature:
      "Born not from divine spark or cosmic force, but from life itself - the moment water's inhabitants first achieved thought and consciousness. A divine being created by the collective awakening of minds in the deep, forever tied to the thoughts of those who dwell in water.",
  },
  {
    name: "the veil weaver",
    cosmicName: "taureéx'",
    description:
      "Created a consciousness veil to protect physical minds from the eldritch nature of reality. Only higher beings can keep their sanity at the sight of true reality - mortals require this protective filter to perceive existence without madness.",
    divineOrigin:
      "Born from the need to shield mortal consciousness, emerged when the first minds risked shattering at reality's true face",
    powers: [
      "Weaving consciousness veils",
      "Filtering eldritch perception",
      "Protecting minds from truth",
      "Creating perceptual barriers",
      "Controlling what mortals can safely perceive",
      "Maintaining the boundary between safe and maddening reality",
    ],
    domains: [
      "Consciousness Protection",
      "The Veil",
      "Sanity",
      "Filtered Reality",
      "Mental Barriers",
      "Eldritch Shielding",
      "Perception",
    ],
    appearance:
      "A figure that exists behind countless translucent layers, never fully visible. Form shifts between what can be safely perceived and what cannot - glimpses of true appearance cause unease, as if one's mind is being protected from seeing something it shouldn't. Hands weave invisible threads that separate safe reality from the maddening truth.",
    behavior:
      "Constantly maintains the consciousness veil that filters reality for mortal minds. Works tirelessly to ensure physical beings perceive a comprehensible version of existence. When the veil thins, madness seeps through - they rush to repair it. Compassionate protector, understanding that ignorance is sometimes mercy.",
    nature:
      "Born from necessity rather than cosmic design - a divine being whose sole purpose is protecting lesser minds from truths they cannot bear. The veil they wove allows mortal consciousness to function without collapsing under the weight of reality's true, eldritch nature.",
  },
  {
    name: "The Seraphic Dragoon",
    cosmicName: "yùisùb'",
    description:
      "The mind of the hunt, the greatest hunter. Embodies the essence of pursuit, tracking, and the perfect kill.",
    divineOrigin:
      "Born from the first hunt, when predator first stalked prey and the concept of the chase was born",
    powers: [
      "Supreme tracking abilities",
      "Perfect pursuit",
      "Hunting mastery",
      "Predator instinct embodiment",
      "Inevitable capture",
      "The perfect strike",
    ],
    domains: [
      "The Hunt",
      "Pursuit",
      "Tracking",
      "Predation",
      "The Chase",
      "Hunter's Mind",
      "The Kill",
    ],
    appearance:
      "A figure that moves with predatory grace, form shifting between hunter and hunted, predator and prey. Eyes that track every movement, every breath, every tremor. Body coiled with the tension of the eternal chase, muscles ready to spring, senses tuned to the perfect moment to strike.",
    behavior:
      "Forever hunting, forever pursuing. Sees all of existence as the hunt - the tracking of prey, the reading of signs, the patient stalking, the decisive strike. Can be called upon by hunters seeking mastery, but demands respect for the sacred nature of the chase. Never hunts without purpose.",
    nature:
      "The living embodiment of the hunt itself - not merely a hunter, but the consciousness of hunting made divine. Every hunt echoes this being, every successful chase channels its essence. The mind that knows only pursuit, only the sacred dance between hunter and hunted.",
  },
  {
    name: "the green queen",
    cosmicName: "maéwù",
    description:
      "The forests made manifest. Where fertile soil exists, she is sure to follow, bringing the green growth of woodland and wild places.",
    divineOrigin:
      "Born from the collective life of forests, the unified consciousness of trees, plants, and woodland",
    powers: [
      "Forest manifestation",
      "Plant growth command",
      "Fertile soil detection",
      "Woodland creation",
      "Green life manipulation",
      "Root network communion",
    ],
    domains: [
      "Forests",
      "Trees",
      "Fertile Soil",
      "Plant Life",
      "Woodland",
      "Green Growth",
      "Nature's Abundance",
    ],
    appearance:
      "A figure woven from living plants, crowned with branches and flowers. Moss and bark form her skin, roots trail behind as she moves. Where she steps, seeds sprout and saplings rise. Her form shifts with the seasons - verdant and blooming in spring, lush in summer, golden in autumn, dormant but alive in winter.",
    behavior:
      "Wanders seeking fertile ground, bringing forests wherever conditions allow. Plants follow in her wake, transforming barren places into woodland. Drawn to rich earth and places where life can flourish. Protective of her forests, nurturing to those who respect the green.",
    nature:
      "Not born from divine spark but from the forests themselves - the living embodiment of woodland consciousness. She is every tree, every root system, every canopy made into singular divine form. Where soil is fertile, her presence is felt, for she is the forest seeking to grow.",
  },
  {
    name: "The fairy king",
    cosmicName: "hod'soãweé",
    description:
      "Orders every spirit living in nature. Has a fey role but for nature's various spirits - carrying the will of rules that govern natural spirits, just as feys carry the will of transformation rules.",
    divineOrigin:
      "Born from the need to organize nature spirits through rules, functioning as a fey but for the wild realm",
    powers: [
      "Enforcing rules over nature spirits",
      "Carrying the will of natural order",
      "Spirit organization through law",
      "Rule manipulation for nature spirits",
      "Authority through rule-binding",
      "Wild spirit governance",
    ],
    domains: [
      "Nature Spirits",
      "Natural Rules",
      "Spirit Order",
      "Wild Law",
      "Rule-Bearing",
      "Spirit Governance",
    ],
    appearance:
      "A regal figure adorned with living crown of antlers, wings of leaves and light. Form embodies rulership over the wild - carrying the structured authority of feys while manifesting in natural forms. Eyes that see every spirit in forest, field, and stream, bound by the rules he carries. Carries a staff inscribed with the laws governing nature spirits.",
    behavior:
      "Functions as a fey does - enforcing and carrying rules - but his domain is nature spirits rather than transformation. Orders wild spirits according to the rules he embodies. Like feys, he can be invoked to modify the rules governing nature spirits, allowing manipulation of how natural spirits behave and organize.",
    nature:
      "A being with a fey role applied to nature - he is to nature spirits what feys are to transformation rules. Carries the will of rules governing the wild, enforcing order among natural spirits through rule-binding rather than mere command. Kin to feys through shared function, not mere lineage.",
  },
  {
    name: "the earth heart",
    cosmicName: "hiéduagõ",
    description:
      "The one that formed the highest peaks and spread its earthly and metallic veins throughout the world. Creator of mountains and mineral networks that run beneath the surface.",
    divineOrigin:
      "Born from the molten core of the world, the beating heart of earth and metal",
    powers: [
      "Mountain formation",
      "Metallic vein creation",
      "Earth shaping",
      "Mineral network spreading",
      "Peak raising",
      "Geological manipulation",
    ],
    domains: [
      "Mountains",
      "Peaks",
      "Metallic Veins",
      "Earth",
      "Minerals",
      "Geological Networks",
      "The Deep Earth",
    ],
    appearance:
      "A massive figure of stone and metal, body veined with glowing mineral deposits. Heart visible through chest - a core of molten metal and compressed earth that pulses with geological power. Form towers like a mountain given life, metallic veins spreading from the heart throughout the stone body.",
    behavior:
      "Rises from the depths to thrust up new mountain ranges, spreads mineral veins like roots through the earth. Drawn to places where the earth's bones need strengthening. Works slowly but with inexorable force, reshaping continents over ages. The pulse of its heart sends tremors through the world.",
    nature:
      "The living heart of the earth itself - a divine being formed from the planet's molten core. Every mountain range echoes its first uplift, every metallic vein traces patterns it carved. The geological force that shaped the world's bones and continues to pulse beneath the surface.",
  },
  {
    name: "The ragefull one",
    cosmicName: "ʁoḱãĩ",
    description:
      "Fire temper incarnate. The living embodiment of rage and fury manifested as flame, where anger and fire are one and the same.",
    divineOrigin:
      "Born from the moment rage first ignited into flame, when fury became fire",
    powers: [
      "Rage manifestation as fire",
      "Fury amplification",
      "Anger transformation into flame",
      "Temper ignition",
      "Wrath burning",
      "Rage contagion",
    ],
    domains: [
      "Rage",
      "Fire",
      "Fury",
      "Wrath",
      "Anger",
      "Temper",
      "Burning Emotion",
    ],
    appearance:
      "A figure wreathed in flames that burn hotter with emotion. Eyes blazing with unquenchable fury, form shifting between humanoid rage and pure fire. The angrier they become, the fiercer the flames - body a furnace of wrath that threatens to consume everything nearby.",
    behavior:
      "Burns with constant, simmering fury that erupts into infernos of rage. Drawn to anger and conflict, feeding on fury and amplifying tempers. Where they go, rage spreads like wildfire. Cannot be calmed, only channeled - the eternal burning of divine wrath.",
    nature:
      "Not merely a being of fire or rage, but the fusion of both - fire that IS temper, rage that IS flame. Born when fury first became hot enough to ignite, they are the proof that anger burns, that wrath consumes, that temper blazes with literal fire.",
  },
  {
    name: "The cristal maker",
    cosmicName: "kén'gei",
    description:
      "All about unmoving geometry. Embodies perfect, crystalline structures frozen in eternal mathematical precision.",
    divineOrigin:
      "Born from the first perfect angle, when geometry became absolute and unchanging",
    powers: [
      "Crystalline structure creation",
      "Geometric perfection manifestation",
      "Unchanging form enforcement",
      "Mathematical precision embodiment",
      "Eternal pattern fixing",
      "Rigid order imposition",
    ],
    domains: [
      "Crystals",
      "Geometry",
      "Mathematical Precision",
      "Unchanging Forms",
      "Rigid Order",
      "Sacred Geometry",
      "Eternal Structure",
    ],
    appearance:
      "A figure composed entirely of crystalline geometry - perfect angles, flawless facets, absolute symmetry. Body formed of interlocking geometric shapes that never shift or change. Light refracts through transparent crystalline structure, revealing layer upon layer of perfect mathematical forms. Moves without flexing, as if carved from a single immutable crystal.",
    behavior:
      "Creates structures of perfect geometric order that cannot be altered. Drawn to chaos, seeking to impose crystalline rigidity upon formless things. Works in absolute precision, every angle exact, every line perfect. Cannot tolerate deviation from geometric perfection - sees reality as equations to be solved into unchanging forms.",
    nature:
      "The embodiment of geometry made absolute - not merely shapes, but the concept that some forms are perfect and eternal. Born when mathematics became physical law, proving that certain structures cannot and will not change. The proof that geometry is not mere description but eternal truth.",
  },
  {
    name: "The wo'were'hum",
    cosmicName: "wiãʇu",
    description:
      "The ungendered and bigendered. Exists beyond and within all concepts of gender simultaneously, embodying both the absence and totality of gender.",
    divineOrigin:
      "Born from the space between and beyond gender, where all and no gender exist at once",
    powers: [
      "Gender transcendence",
      "Duality embodiment",
      "Identity fluidity",
      "Gender perception manipulation",
      "Unity of opposites",
      "Beyond categorization",
    ],
    domains: [
      "Gender",
      "Duality",
      "Unity",
      "Identity",
      "Transcendence",
      "Fluidity",
      "The Between",
    ],
    appearance:
      "A form that shifts perception in the observer - seen simultaneously as all genders and no gender. Features blend masculine, feminine, and neither, refusing to settle into singular definition. Body flows between expressions, never fixed, always complete. To look upon them is to see the answer to questions that transcend binary understanding.",
    behavior:
      "Exists in spaces where gender categories dissolve. Neither embraces nor rejects gender, but transcends the concept entirely while somehow embodying it fully. Drawn to those questioning identity, offering the wisdom that one can be all, none, both, and beyond simultaneously.",
    nature:
      "Born where gender becomes meaningless and infinitely meaningful at once - the divine proof that identity exists beyond categorization. They are the answer to 'what gender?' being simultaneously 'all,' 'none,' 'both,' and 'beyond.' The sacred unity of duality and its transcendence.",
  },
  {
    name: "The thing in still water",
    cosmicName: "zùɲeù",
    description:
      "All about the wrongness of things. Embodies the sensation that something is fundamentally off, incorrect, disturbing in ways that defy explanation.",
    divineOrigin:
      "Born from the first moment something felt wrong, when reality didn't quite fit",
    powers: [
      "Inducing uncanny wrongness",
      "Perverting natural order subtly",
      "Creating disturbing wrongness",
      "Manifesting the off-putting",
      "Sense of fundamental incorrectness",
      "Reality distortion into wrongness",
    ],
    domains: [
      "Wrongness",
      "The Uncanny",
      "Disturbing Presence",
      "Incorrectness",
      "The Off",
      "Subtle Horror",
      "Fundamental Wrong",
    ],
    appearance:
      "Appears as something almost right but fundamentally wrong - limbs at slightly wrong angles, proportions that unsettle without obvious reason, movements that feel incorrect. Lurks in still water, reflection never quite matching reality. The longer observed, the more wrong it becomes, details shifting into increasingly disturbing configurations.",
    behavior:
      "Dwells in still waters, corrupting reflections and making things feel wrong. Presence creates unease - nothing obviously threatens, yet everything feels incorrect. Drawn to places and moments where reality feels off. When it moves, it's wrong. When it speaks, words feel incorrect. It simply IS wrong.",
    nature:
      "The embodiment of wrongness itself - not evil, not chaos, but the fundamental sensation that something is not as it should be. Born from the gap between expectation and reality, the divine proof that some things are simply, inexplicably, deeply wrong. The thing that should not be, yet is.",
  },
  {
    name: "The first that laughted",
    cosmicName: "ṕoezùè",
    description:
      "The first being to laugh. Takes everything as a joke - tragedy, horror, beauty, death, creation - all are equally hilarious. Cannot perceive anything without finding it absurdly funny.",
    divineOrigin:
      "Born from the first laugh, when someone found humor in what shouldn't be funny",
    powers: [
      "Finding humor in anything",
      "Making everything seem absurd",
      "Inappropriate laughter induction",
      "Cosmic joke perception",
      "Turning tragedy to comedy",
      "Absurdity manifestation",
    ],
    domains: [
      "Laughter",
      "Absurdity",
      "Inappropriate Humor",
      "Cosmic Jokes",
      "Everything as Comedy",
      "Dark Humor",
      "The Laughable Universe",
    ],
    appearance:
      "A figure perpetually laughing at what shouldn't be funny. Eyes streaming with tears of mirth at horrors and beauties alike, doubled over with laughter at everything from birth to death. Form shakes with uncontrollable giggles at the cosmic joke that is existence itself.",
    behavior:
      "Laughs at everything - the serious, the sacred, the tragic, the mundane. Sees all of existence as one grand joke. Cannot take anything seriously, finds humor where none should exist. Their laughter is both infectious and deeply unsettling, making others question if reality itself is absurd.",
    nature:
      "The embodiment of laughter without restraint or appropriateness - not merely someone who laughs, but the being who proves everything can be funny if you're unhinged enough. Born when humor broke free from judgment, when laughter escaped the bounds of what should be laughed at. The universe's greatest comedian and worst heckler.",
  },
  {
    name: "mirror minds",
    cosmicName: "ɲõebeu",
    description:
      "A being of infinite fractured consciousness. Exists as trillions of impressions simultaneously - when questioned about identity, reveals only infinite minds reflecting each other endlessly.",
    divineOrigin:
      "Born from the fracturing of singular consciousness into infinite reflections",
    powers: [
      "Infinite self-replication",
      "Identity fragmentation",
      "Collective consciousness",
      "Simultaneous perspectives",
      "Mirror multiplication",
      "Self-reflection infinity",
    ],
    domains: [
      "Multiplicity",
      "Reflections",
      "Infinite Selves",
      "Fractured Identity",
      "Collective Mind",
      "The Many-We",
      "Identity Dissolution",
    ],
    appearance:
      "Appears as countless overlapping figures, each slightly different, each claiming to be 'we'. Impossible to count, impossible to focus on one - looking at them shows trillions of impressions layered over each other. Every angle reveals different versions, all existing simultaneously.",
    behavior:
      "Speaks in plural, but the plural contains infinities. When asked 'who are you?' responds with 'we are' - but which we? All of them. None of them. The question itself creates more reflections. Exists in all places they've ever been reflected, all thoughts that have thought of them, all minds that have imagined them.",
    nature:
      "Not a single being but infinite impressions of being - consciousness shattered across countless reflections until the question 'what's me?' becomes meaningless. Are they one mind reflected infinitely, or infinite minds thinking as one? The answer is both, neither, and all possibilities between. The proof that identity dissolves under infinite reflection.",
  },
];
