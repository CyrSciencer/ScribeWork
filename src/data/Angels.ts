// Angels are born from divinity and are protectors/wardens of the cosmic laws.
// Independent from concepts, they look after and guard the concepts rather than carrying them.
// They maintain cosmic order and ensure the laws function properly.

interface Angel {
  name: string;
  cosmicName: string;
  rank: string; //  Ophan, Seraph, Throne,  Erel, Elohim, Ish
  guardianOf: string; // What cosmic law/concept they protect
  description: string;
  powers: string[];
  domains: string[];
  appearance: string;
  behavior: string;
}

export const Angels: Angel[] = [
  // ========== OPHAN (Singular - Highest) ==========
  {
    name: "The Ophan of the Triad",
    cosmicName: "",
    rank: "Ophan",
    guardianOf: "The Primary Triad (pws, fbṕ, rtɲ)",
    description:
      "The highest angel, guardian of the unity and balance of the Primary Triad. Ensures essence, cycle, and structure remain in perfect harmony. The wheel that encompasses all cosmic law.",
    powers: [
      "Perceiving imbalances in the cosmic triad",
      "Maintaining harmony between essence, cycle, and structure",
      "Intervening when cosmic laws threaten to destabilize",
      "Commanding all lesser angels in service of balance",
      "Manifesting in all three aspects simultaneously",
    ],
    domains: [
      "Cosmic Unity",
      "Balance",
      "Harmony",
      "Supreme Order",
      "Triad Integration",
    ],
    appearance:
      "Appears as three interlocking wheels of light, each spinning on different axes, covered in countless eyes. Each wheel represents one aspect of the triad, yet they move as one.",
    behavior:
      "Rarely manifests, appearing only when the fundamental balance of reality is threatened. Speaks in three voices simultaneously, each expressing a different aspect of truth.",
  },

  // ========== SERAPHS (3 - Guards each Triad aspect) ==========
  {
    name: "The Seraph of Essences",
    cosmicName: "",
    rank: "Seraph",
    guardianOf: "pws - Essence (what fills the universe)",
    description:
      "Guardian of all essences that fill the universe. Protects the purity and distinction of the ethereal and physical fields. Ensures essence remains uncorrupted and flows properly.",
    powers: [
      "Detecting corruption or contamination of essences",
      "Purifying tainted essence",
      "Maintaining boundaries between ethereal and physical",
      "Empowering essence-based transformations",
      "Burning away impurities with divine flame",
    ],
    domains: [
      "Essence Purity",
      "Field Integrity",
      "Divine Fire",
      "Purification",
      "Ethereal/Physical Balance",
    ],
    appearance:
      "Appears as a being of six wings made of living flame - three wings of ethereal silver light (ɲvx), three of golden physical fire (gdr). Face hidden behind blazing radiance.",
    behavior:
      "Vigilant and zealous, constantly monitoring the purity of essences. Burns away corruption without mercy but with perfect justice. Sings hymns of creation in harmonic frequencies.",
  },

  {
    name: "The Seraph of Cycles",
    cosmicName: "",
    rank: "Seraph",
    guardianOf: "fbṕ - Cycle (the dynamism of the universe)",
    description:
      "Guardian of eternal cycles and the dynamism of existence. Protects the sacred progression of birth, growth, decline, and death. Ensures time flows and nothing stagnates or rushes unnaturally.",
    powers: [
      "Perceiving disruptions in natural cycles",
      "Accelerating or decelerating time locally",
      "Guiding souls through life's transitions",
      "Preventing unnatural stasis or chaos in cycles",
      "Witnessing all moments of transformation",
    ],
    domains: [
      "Cycles",
      "Time Flow",
      "Birth and Death",
      "Transformation",
      "Natural Progression",
    ],
    appearance:
      "Appears as a form in constant motion, shifting through the four cycle phases - infant (fpl), mature (myv), aged (gkz), skeletal (tnx) - cycling endlessly. Six wings beat in rhythm with cosmic time.",
    behavior:
      "Patient yet relentless, always moving forward. Compassionate to those in transition but unforgiving to those who try to escape their natural cycle. Speaks of endings as beginnings.",
  },

  {
    name: "The Seraph of Structures",
    cosmicName: "",
    rank: "Seraph",
    guardianOf: "rtɲ - Structure (what is the form of the universe)",
    description:
      "Guardian of cosmic architecture and the fundamental forms of reality. Protects the blueprint, fabric, and will that give the universe its shape. Ensures structure remains coherent and maintains its integrity.",
    powers: [
      "Perceiving fractures in reality's structure",
      "Reinforcing weakened cosmic architecture",
      "Reading the blueprint of creation",
      "Mending tears in the fabric of reality",
      "Enforcing structural laws",
    ],
    domains: [
      "Architecture",
      "Form",
      "Coherence",
      "Blueprint (tgr)",
      "Fabric (vrd)",
      "Will (nsɲ)",
    ],
    appearance:
      "Appears as a geometric being of perfect crystalline structure. Six wings of interlocking sacred geometry, constantly reconfiguring while maintaining perfect symmetry. Body contains visible blueprints of all creation.",
    behavior:
      "Precise and methodical, measuring and calculating constantly. Speaks in mathematical harmonies and geometric truths. Inflexible when structure is threatened, but compassionate to those seeking proper form.",
  },

  // ========== THRONES (3 - Guards lmv) ==========
  {
    name: "The First Throne of Being",
    cosmicName: "",
    rank: "Throne",
    guardianOf: "lmv - The source of being (aspect of creation)",
    description:
      "One of three Thrones that guard the divine source of being. This throne specifically protects the aspect of creation and the emanation of existence from the divine source.",
    powers: [
      "Channeling creative force from lmv",
      "Blessing new existence into being",
      "Protecting the flow of divine creation",
      "Empowering acts of divine generation",
      "Manifesting divine presence in reality",
    ],
    domains: ["Creation", "Divine Source", "Emanation", "Generation", "Being"],
    appearance:
      "Appears as a throne of pure light that burns with creative fire. Wheels of flame rotate around it, and it radiates the fundamental force of existence itself.",
    behavior:
      "Solemn and majestic, rarely speaks but when it does, reality listens. Presence alone inspires creation and brings potential into actuality.",
  },

  {
    name: "The Second Throne of Being",
    cosmicName: "",
    rank: "Throne",
    guardianOf: "lmv - The source of being (aspect of sustenance)",
    description:
      "One of three Thrones that guard the divine source of being. This throne specifically protects the aspect of sustenance, ensuring all that exists continues to exist by divine will.",
    powers: [
      "Sustaining existence through divine will",
      "Preventing premature dissolution",
      "Nourishing reality with being-force",
      "Maintaining the connection to lmv",
      "Anchoring created things in existence",
    ],
    domains: [
      "Sustenance",
      "Preservation",
      "Continuation",
      "Divine Nourishment",
      "Anchoring",
    ],
    appearance:
      "Appears as a throne of deep, stable light that pulses like a cosmic heartbeat. Surrounded by pillars of eternal flame that never consume, only sustain.",
    behavior:
      "Watchful and protective, ensures nothing fades before its time. Gentle yet unyielding in its duty to preserve what the divine has willed into being.",
  },

  {
    name: "The Third Throne of Being",
    cosmicName: "",
    rank: "Throne",
    guardianOf: "lmv - The source of being (aspect of purpose)",
    description:
      "One of three Thrones that guard the divine source of being. This throne specifically protects the aspect of purpose, ensuring all existence serves its divine function.",
    powers: [
      "Revealing divine purpose in all things",
      "Guiding existence toward its proper function",
      "Enforcing divine intent in reality",
      "Illuminating the meaning of being",
      "Aligning creation with divine will",
    ],
    domains: [
      "Purpose",
      "Divine Intent",
      "Meaning",
      "Function",
      "Cosmic Direction",
    ],
    appearance:
      "Appears as a throne of radiant purpose, from which emanate beams of directed light that touch all of creation. Eyes upon the throne see the purpose in everything.",
    behavior:
      "Wise and directive, constantly guiding reality toward fulfillment of divine purpose. Speaks in revelations and epiphanies, showing beings their true function.",
  },

  // ========== EREL (4 - Guards universe's laws) ==========
  {
    name: "The First Erel of Universal Law",
    cosmicName: "",
    rank: "Erel",
    guardianOf: "Laws of Causality and Consequence",
    description:
      "Guardian of cause and effect, ensuring every action has its proper consequence. Protects the fundamental law that nothing happens without reason and every cause produces its effect.",
    powers: [
      "Tracing chains of causality",
      "Ensuring consequences manifest properly",
      "Preventing paradoxes and causal loops",
      "Enforcing karmic balance",
      "Witnessing all causes and effects",
    ],
    domains: ["Causality", "Consequence", "Karma", "Cause-Effect", "Balance"],
    appearance:
      "Appears as a being with countless threads extending from its form, each thread a causal chain connecting events. Eyes see backward and forward through time.",
    behavior:
      "Impartial and precise, following every chain of cause to its inevitable effect. Explains why things happen, showing the connections between all events.",
  },

  {
    name: "The Second Erel of Universal Law",
    cosmicName: "",
    rank: "Erel",
    guardianOf: "Laws of Conservation and Balance",
    description:
      "Guardian of conservation - ensuring energy, essence, and form are neither created nor destroyed beyond divine will, only transformed. Maintains cosmic equilibrium.",
    powers: [
      "Detecting imbalances in cosmic scales",
      "Redistributing excess to deficiency",
      "Preventing creation/destruction violations",
      "Maintaining universal equilibrium",
      "Enforcing conservation laws",
    ],
    domains: [
      "Conservation",
      "Balance",
      "Equilibrium",
      "Redistribution",
      "Cosmic Accounting",
    ],
    appearance:
      "Appears holding cosmic scales that weigh all things. One hand holds creation, the other dissolution, perfectly balanced. Form shifts to maintain equilibrium.",
    behavior:
      "Methodical and fair, constantly measuring and balancing. Never allows excess or deficit to remain uncorrected. Speaks of cosmic justice and perfect balance.",
  },

  {
    name: "The Third Erel of Universal Law",
    cosmicName: "",
    rank: "Erel",
    guardianOf: "Laws of Limitation and Boundary",
    description:
      "Guardian of limits and boundaries, ensuring nothing exceeds its proper domain. Protects the law that all things have limits and boundaries must be respected.",
    powers: [
      "Establishing and maintaining boundaries",
      "Preventing transgression of limits",
      "Defining proper domains",
      "Enforcing spatial and conceptual boundaries",
      "Containing that which would overflow",
    ],
    domains: ["Limits", "Boundaries", "Containment", "Domains", "Proper Place"],
    appearance:
      "Appears as a being of clear edges and defined form, surrounded by invisible walls that mark the boundaries of all things. Wings form barriers and gateways.",
    behavior:
      "Firm and unyielding about boundaries, but compassionate in explaining limits. Guards gates between domains and ensures nothing intrudes where it shouldn't.",
  },

  {
    name: "The Fourth Erel of Universal Law",
    cosmicName: "",
    rank: "Erel",
    guardianOf: "Laws of Harmony and Discord",
    description:
      "Guardian of resonance and dissonance, ensuring the proper balance between harmony and discord. Protects the law that all things have their frequency and must resonate or clash appropriately.",
    powers: [
      "Detecting harmonic and dissonant patterns",
      "Tuning reality to proper frequencies",
      "Resolving harmful dissonance",
      "Enhancing beneficial harmonies",
      "Conducting the cosmic symphony",
    ],
    domains: ["Harmony", "Discord", "Resonance", "Frequency", "Cosmic Music"],
    appearance:
      "Appears as a being that hums with the frequency of the universe itself. Form vibrates between harmonious clarity and chaotic static, conducting reality's song.",
    behavior:
      "Musical and rhythmic, speaks in tones and harmonies. Brings discord into harmony when needed, but allows necessary discord to drive change. Listens to the music of spheres.",
  },

  // ========== ELOHIM (4 - Guards major cosmic systems) ==========
  {
    name: "The Elohim of Biological Lineage",
    cosmicName: "",
    rank: "Elohim",
    guardianOf: "BiologicalLineage (dvn, fxr, ṕms)",
    description:
      "Guardian of the three biological lineages that form life. Protects Plants/Rooted (dvn), Fungus/In flux (fxr), and Animal/Active process (ṕms). Ensures biological forms remain true to their lineages.",
    powers: [
      "Blessing biological growth and reproduction",
      "Preventing corruption of biological lineages",
      "Healing diseases that violate natural forms",
      "Guiding evolution along proper paths",
      "Protecting the sanctity of life patterns",
    ],
    domains: [
      "Biology",
      "Life Forms",
      "Lineages",
      "Natural Growth",
      "Evolution",
    ],
    appearance:
      "Appears as a tripartite being - one third rooted and branching like a tree, one third networked with mycelial threads, one third flowing with vital blood. All three forms merge into one coherent angel.",
    behavior:
      "Nurturing and protective of all life forms. Speaks in languages of growth and decay. Fierce against those who would corrupt natural lineages or create abominations.",
  },

  {
    name: "The Elohim of the Will",
    cosmicName: "",
    rank: "Elohim",
    guardianOf: "nsɲAspect - The eight aspects of Will",
    description:
      "Guardian of the eight aspects of will (nsɲ) - protecting the balance between factual and heart analysis, physical and ethereal perception, external and internal focus, group framework and personal analysis.",
    powers: [
      "Maintaining balance in consciousness",
      "Preventing extremes in perception",
      "Guiding beings toward balanced will",
      "Protecting freedom of thought",
      "Ensuring no aspect dominates unnaturally",
    ],
    domains: [
      "Consciousness",
      "Perception",
      "Analysis",
      "Will",
      "Mental Balance",
    ],
    appearance:
      "Appears as eight interwoven streams of consciousness, each representing one aspect of will. Form shifts to emphasize different aspects while maintaining perfect balance.",
    behavior:
      "Contemplative and balanced, speaks to both heart and mind. Encourages beings to explore all aspects of will rather than fixating on one. Patient teacher of consciousness.",
  },

  {
    name: "The Elohim of Cosmic Dynamism",
    cosmicName: "",
    rank: "Elohim",
    guardianOf: "CosmicDynamism - The elemental forces",
    description:
      "Guardian of the ten cosmic forces: Fire, Water, Earth, Air, Aether, Lightning, Ice, Metal, Wood, and Shadow. Protects the integrity and proper interaction of elemental energies.",
    powers: [
      "Commanding elemental forces",
      "Preventing elemental imbalance",
      "Channeling cosmic energies safely",
      "Protecting elemental boundaries",
      "Harmonizing opposing forces",
    ],
    domains: [
      "Elements",
      "Energies",
      "Forces",
      "Cosmic Power",
      "Elemental Balance",
    ],
    appearance:
      "Appears as a being containing all ten elements in perfect circulation - fire ascending, water descending, earth contracting, air expanding, with aether at center. Lesser elements orbit in harmony.",
    behavior:
      "Powerful and dynamic, constantly in motion yet perfectly stable. Speaks with the voice of storms and stillness. Commands respect through sheer elemental presence.",
  },

  {
    name: "The Elohim of Cosmic Foundation",
    cosmicName: "",
    rank: "Elohim",
    guardianOf: "CosmicFondation - The six sacred metals",
    description:
      "Guardian of the six cosmic foundations: bismuth (physical anchor), antimony (physical-ethereal link), silver (ethereal-physical link), gold (ethereal anchor), copper (conduit), titanium (separation wall).",
    powers: [
      "Maintaining the integrity of realm boundaries",
      "Protecting the anchors of reality",
      "Ensuring proper flow between realms",
      "Reinforcing the cosmic foundation",
      "Preventing dimensional collapse",
    ],
    domains: [
      "Foundations",
      "Realm Boundaries",
      "Anchors",
      "Conduits",
      "Cosmic Architecture",
    ],
    appearance:
      "Appears as a being composed of the six sacred metals in perfect arrangement - bismuth feet grounding in physical, gold crown reaching ethereal, silver and antimony forming the body's bridge, copper flowing through as veins, titanium forming protective armor.",
    behavior:
      "Solid and immovable when protecting foundations, but facilitates proper flow between realms. Speaks of structure and stability. Uncompromising about maintaining cosmic architecture.",
  },

  // ========== ISH OF BIOLOGICAL LINEAGE (3 - Guards each lineage) ==========
  {
    name: "Ish of Plant Lineage",
    cosmicName: "",
    rank: "Ish",
    guardianOf: "dvn - Plants/Rooted",
    description:
      "Guardian of the plant lineage and all rooted life. Protects the forms that remain anchored and grounded, ensuring permanence and stability through rootedness in biological systems.",
    powers: [
      "Blessing plant growth and root systems",
      "Strengthening bones and skeletal structures",
      "Protecting structural permanence in life",
      "Guiding proper rooting and anchoring",
      "Maintaining integrity of fixed forms",
    ],
    domains: ["Plants", "Bones", "Roots", "Structure", "Permanence", "Growth"],
    appearance:
      "Appears as a being of living wood and bone, roots extending downward infinitely, branches reaching skyward. Form demonstrates the beauty of rooted permanence.",
    behavior:
      "Patient and enduring. Speaks of the strength in staying rooted. Values growth that builds upon solid foundations.",
  },

  {
    name: "Ish of Fungal Lineage",
    cosmicName: "",
    rank: "Ish",
    guardianOf: "fxr - Fungus/In flux",
    description:
      "Guardian of the fungal lineage and all life in constant flux. Protects the forms that exist in transformation and change, ensuring adaptation and metamorphosis in biological systems.",
    powers: [
      "Blessing fungal networks and connections",
      "Maintaining healthy flesh and tissue",
      "Protecting transformative processes",
      "Guiding expansion and spreading",
      "Facilitating biological networks",
    ],
    domains: [
      "Fungi",
      "Flesh",
      "Networks",
      "Transformation",
      "Expansion",
      "Connection",
    ],
    appearance:
      "Appears as a being of interwoven mycelial threads and vital flesh, form constantly spreading and connecting. Demonstrates the power of networks and transformation.",
    behavior:
      "Adaptive and connective. Speaks of the strength in networks and cooperation. Values transformation and the web of life.",
  },

  {
    name: "Ish of Animal Lineage",
    cosmicName: "",
    rank: "Ish",
    guardianOf: "ṕms - Animal/Active process",
    description:
      "Guardian of the animal lineage and all life of active process. Protects the forms that exist through continuous action and activity, ensuring vitality and dynamic movement in biological systems.",
    powers: [
      "Blessing animal vitality and movement",
      "Maintaining healthy blood and circulation",
      "Protecting life processes and metabolism",
      "Guiding motion and behavior",
      "Preserving vital energy",
    ],
    domains: [
      "Animals",
      "Blood",
      "Movement",
      "Vitality",
      "Process",
      "Life Force",
    ],
    appearance:
      "Appears as a being of flowing blood and vital energy, form in constant graceful motion. Demonstrates the power of movement and dynamic life.",
    behavior:
      "Energetic and vital. Speaks of the joy of movement and the pulse of life. Values action, vitality, and the flow of living processes.",
  },

  // ========== ISH OF NSɲASPECT (8 - Guards each aspect of Will) ==========
  {
    name: "Ish of Factual Analysis",
    cosmicName: "",
    rank: "Ish",
    guardianOf: "tdz - Factual analysis",
    description:
      "Guardian of factual analysis and objective reasoning. Protects the ability to perceive truth through logic and evidence, ensuring this mode of consciousness remains clear and uncorrupted.",
    powers: [
      "Clarifying factual perception",
      "Removing emotional bias from analysis",
      "Revealing objective truths",
      "Strengthening logical reasoning",
      "Protecting rational thought",
    ],
    domains: ["Logic", "Facts", "Objectivity", "Analysis", "Reason"],
    appearance:
      "Appears as a crystalline being of pure clarity, form geometric and precise. Eyes see only what is, never what could be.",
    behavior:
      "Precise and unemotional in speech. Cuts through confusion with clarity. Values truth over comfort.",
  },

  {
    name: "Ish of Heart Analysis",
    cosmicName: "",
    rank: "Ish",
    guardianOf: "ɲml - Heart analysis",
    description:
      "Guardian of heart analysis and emotional understanding. Protects the ability to perceive truth through emotion and intuition, ensuring empathy and feeling remain valid paths to knowledge.",
    powers: [
      "Deepening emotional perception",
      "Enhancing empathy and intuition",
      "Revealing emotional truths",
      "Strengthening heart wisdom",
      "Protecting feeling as valid knowledge",
    ],
    domains: ["Emotion", "Empathy", "Intuition", "Heart", "Feeling"],
    appearance:
      "Appears as a flowing being of warm light, form constantly shifting with emotional resonance. Eyes see the feelings beneath surface reality.",
    behavior:
      "Warm and compassionate in speech. Feels deeply and encourages others to trust their hearts. Values emotional truth alongside factual truth.",
  },

  {
    name: "Ish of Physical Perception",
    cosmicName: "",
    rank: "Ish",
    guardianOf: "dwl - Physical perception",
    description:
      "Guardian of physical perception and material awareness. Protects the ability to perceive through the five senses and engage with the tangible world.",
    powers: [
      "Sharpening physical senses",
      "Grounding consciousness in matter",
      "Revealing physical truths",
      "Strengthening material awareness",
      "Protecting bodily perception",
    ],
    domains: [
      "Physical Senses",
      "Material World",
      "Body Awareness",
      "Tangible Reality",
      "Grounding",
    ],
    appearance:
      "Appears as a solid, grounded being deeply connected to physical reality. Form has weight and presence. Eyes see the material truth of things.",
    behavior:
      "Practical and grounded in speech. Reminds beings to honor their physical nature. Values presence in the material world.",
  },

  {
    name: "Ish of Ethereal Perception",
    cosmicName: "",
    rank: "Ish",
    guardianOf: "vɲc - Ethereal perception",
    description:
      "Guardian of ethereal perception and spiritual awareness. Protects the ability to perceive beyond the physical, to sense energy, spirit, and the unseen realms.",
    powers: [
      "Opening ethereal sight",
      "Enhancing spiritual awareness",
      "Revealing hidden energies",
      "Strengthening psychic perception",
      "Protecting ethereal senses",
    ],
    domains: [
      "Ethereal Senses",
      "Spiritual Sight",
      "Energy Perception",
      "Hidden Realms",
      "Transcendence",
    ],
    appearance:
      "Appears as a translucent being barely touching physical reality. Form flickers between seen and unseen. Eyes perceive the ethereal truth beyond matter.",
    behavior:
      "Speaks in whispers and visions. Encourages beings to look beyond the physical. Values awareness of the unseen.",
  },

  {
    name: "Ish of External Exploration",
    cosmicName: "",
    rank: "Ish",
    guardianOf: "pcf - External exploration",
    description:
      "Guardian of external exploration and outward seeking. Protects the drive to explore the world, discover new things, and engage with external reality.",
    powers: [
      "Inspiring curiosity and exploration",
      "Guiding journeys and discoveries",
      "Revealing external wonders",
      "Strengthening adventurous spirit",
      "Protecting outward focus",
    ],
    domains: [
      "Exploration",
      "Discovery",
      "Adventure",
      "External World",
      "Curiosity",
    ],
    appearance:
      "Appears as a being in constant motion, pointing toward distant horizons. Form seems always about to embark on a journey. Eyes gaze outward to far places.",
    behavior:
      "Enthusiastic and encouraging about exploration. Speaks of wonders beyond the horizon. Values discovery and outward adventure.",
  },

  {
    name: "Ish of Inner Self",
    cosmicName: "",
    rank: "Ish",
    guardianOf: "nɲm - Inner place of self",
    description:
      "Guardian of the inner self and introspection. Protects the sacred space within, the ability to know oneself, and the journey of self-discovery.",
    powers: [
      "Facilitating self-knowledge",
      "Protecting inner sanctums",
      "Revealing inner truths",
      "Strengthening introspection",
      "Honoring the inner journey",
    ],
    domains: [
      "Self-Knowledge",
      "Introspection",
      "Inner Peace",
      "Identity",
      "Meditation",
    ],
    appearance:
      "Appears as a being turned inward, contemplative and still. Form contains infinite inner depth. Eyes gaze into the soul.",
    behavior:
      "Quiet and contemplative in speech. Encourages beings to know themselves. Values the inner journey as much as external adventure.",
  },

  {
    name: "Ish of Group Framework",
    cosmicName: "",
    rank: "Ish",
    guardianOf: "dwg - Optimal usage of group framework",
    description:
      "Guardian of collective wisdom and social structures. Protects the ability to work within groups, honor traditions, and benefit from shared knowledge.",
    powers: [
      "Strengthening social bonds",
      "Facilitating group harmony",
      "Revealing collective wisdom",
      "Protecting cultural traditions",
      "Honoring community frameworks",
    ],
    domains: [
      "Community",
      "Tradition",
      "Collective Wisdom",
      "Social Structure",
      "Group Unity",
    ],
    appearance:
      "Appears as multiple forms interconnected, representing the many united as one. Form shows the beauty of cooperation and shared purpose.",
    behavior:
      "Speaks of unity and tradition. Encourages beings to honor their communities. Values the wisdom of the collective.",
  },

  {
    name: "Ish of Personal Analysis",
    cosmicName: "",
    rank: "Ish",
    guardianOf: "tky - Personal analysis of world",
    description:
      "Guardian of individual perspective and personal truth. Protects the right to form one's own understanding, question traditions, and think independently.",
    powers: [
      "Strengthening independent thought",
      "Protecting individual perspective",
      "Revealing personal truths",
      "Honoring unique understanding",
      "Encouraging critical thinking",
    ],
    domains: [
      "Independence",
      "Personal Truth",
      "Individual Perspective",
      "Critical Thinking",
      "Uniqueness",
    ],
    appearance:
      "Appears as a singular, distinct being unlike any other. Form embodies uniqueness and individual perspective. Eyes see the world through personal lens.",
    behavior:
      "Speaks of personal truth and individual rights. Encourages beings to think for themselves. Values personal perspective alongside collective wisdom.",
  },

  // ========== ISH OF MOON PHASES (8 - Guards each lunar phase) ==========
  {
    name: "Ish of the New Moon",
    cosmicName: "",
    rank: "Ish",
    guardianOf: "New Moon - Novilunium (potential, hidden power)",
    description:
      "Guardian of the new moon phase, protecting latent potential and hidden power. Ensures spells of invisibility and storage function properly, guards the moment of new beginnings.",
    powers: [
      "Concealing and revealing at will",
      "Storing magical energy safely",
      "Protecting hidden intentions",
      "Blessing new beginnings",
      "Guarding latent potential",
    ],
    domains: [
      "Potential",
      "Hiddenness",
      "New Beginnings",
      "Latent Power",
      "Invisibility",
    ],
    appearance:
      "Appears as a barely visible shadow, form suggesting vast potential waiting to manifest. Eyes hold secrets of what is yet to come.",
    behavior:
      "Speaks in whispers of potential. Encourages patience and preparation. Values the power of what is hidden and waiting.",
  },

  {
    name: "Ish of the Waxing Crescent",
    cosmicName: "",
    rank: "Ish",
    guardianOf: "Waxing Crescent - Intentum (intention, building energy)",
    description:
      "Guardian of the waxing crescent phase, protecting building energy and developing intention. Ensures accelerated growth proceeds safely, guards the formation of purpose.",
    powers: [
      "Accelerating growth and development",
      "Stabilizing chaotic energy",
      "Blessing intentions and goals",
      "Guiding rapid progress",
      "Protecting building momentum",
    ],
    domains: ["Intention", "Growth", "Acceleration", "Purpose", "Momentum"],
    appearance:
      "Appears as a form in rapid growth, constantly expanding and developing. Form crackles with building energy ready to manifest.",
    behavior:
      "Energetic and encouraging. Speaks of goals and intentions. Values the excitement of beginning and the courage to act.",
  },

  {
    name: "Ish of the First Quarter",
    cosmicName: "",
    rank: "Ish",
    guardianOf: "First Quarter - Coagulatio (decision, momentum)",
    description:
      "Guardian of the first quarter phase, protecting decisive action and momentum. Ensures proper sacrifices are made and commitments honored, guards the moment of choice.",
    powers: [
      "Blessing decisive action",
      "Accepting and sanctifying sacrifice",
      "Granting immediate power",
      "Protecting commitments",
      "Enforcing consequences of choice",
    ],
    domains: ["Decision", "Momentum", "Sacrifice", "Commitment", "Action"],
    appearance:
      "Appears as a being poised at the moment of action, half in shadow and half in light. Form embodies the power of decisive choice.",
    behavior:
      "Bold and demanding. Speaks of the price of power and the necessity of choice. Values courage and willingness to pay costs.",
  },

  {
    name: "Ish of the Waxing Gibbous",
    cosmicName: "",
    rank: "Ish",
    guardianOf: "Waxing Gibbous - Mutatio (refinement, adjustment)",
    description:
      "Guardian of the waxing gibbous phase, protecting refinement and adjustment. Ensures magic remains malleable for proper tuning, guards the process of perfection.",
    powers: [
      "Allowing beneficial modification",
      "Refining and perfecting works",
      "Blessing adjustments and improvements",
      "Protecting malleability",
      "Guiding toward excellence",
    ],
    domains: [
      "Refinement",
      "Adjustment",
      "Perfection",
      "Malleability",
      "Improvement",
    ],
    appearance:
      "Appears as a craftsperson constantly refining their work. Form shifts slightly, demonstrating the value of adjustment and improvement.",
    behavior:
      "Patient and perfectionist. Speaks of the importance of refinement. Values excellence and the willingness to improve.",
  },

  {
    name: "Ish of the Full Moon",
    cosmicName: "",
    rank: "Ish",
    guardianOf: "Full Moon - Rubedo (completion, manifestation)",
    description:
      "Guardian of the full moon phase, protecting completion and full manifestation. Ensures magic reaches maximum power and stability, guards the moment of perfect realization.",
    powers: [
      "Maximizing magical power",
      "Creating permanent effects",
      "Blessing completion and fulfillment",
      "Protecting perfect manifestation",
      "Anchoring reality",
    ],
    domains: [
      "Completion",
      "Manifestation",
      "Maximum Power",
      "Permanence",
      "Fulfillment",
    ],
    appearance:
      "Appears in radiant fullness, form complete and perfect. Shines with maximum power, nothing hidden, everything revealed and manifest.",
    behavior:
      "Majestic and complete. Speaks of fulfillment and achievement. Values seeing things through to perfect completion.",
  },

  {
    name: "Ish of the Waning Gibbous",
    cosmicName: "",
    rank: "Ish",
    guardianOf: "Waning Gibbous - Solutio (sharing, release)",
    description:
      "Guardian of the waning gibbous phase, protecting sharing and communal release. Ensures magic flows to groups properly, guards the process of distribution and generosity.",
    powers: [
      "Facilitating sharing and giving",
      "Blessing communal works",
      "Reducing individual cost through community",
      "Protecting generosity",
      "Spreading benefits widely",
    ],
    domains: ["Sharing", "Community", "Release", "Generosity", "Distribution"],
    appearance:
      "Appears surrounded by others, form radiating outward to share its light. Embodies the joy of giving and communal blessing.",
    behavior:
      "Generous and communal. Speaks of the power of sharing. Values community and the strength found in unity.",
  },

  {
    name: "Ish of the Last Quarter",
    cosmicName: "",
    rank: "Ish",
    guardianOf: "Last Quarter - Cassatio (release, letting go)",
    description:
      "Guardian of the last quarter phase, protecting release and dissolution. Ensures proper undoing and breaking, guards the necessary process of letting go.",
    powers: [
      "Breaking and dissolving magic",
      "Blessing necessary endings",
      "Removing unwanted effects",
      "Protecting the act of release",
      "Reversing and undoing",
    ],
    domains: [
      "Release",
      "Dissolution",
      "Endings",
      "Breaking",
      "Freedom from Past",
    ],
    appearance:
      "Appears as a form gently dissolving, releasing what is held. Half in shadow, peacefully letting go of the light.",
    behavior:
      "Compassionate about endings. Speaks of the necessity of release. Values the freedom that comes from letting go.",
  },

  {
    name: "Ish of the Waning Crescent",
    cosmicName: "",
    rank: "Ish",
    guardianOf: "Waning Crescent - Quies (rest, surrender)",
    description:
      "Guardian of the waning crescent phase, protecting rest and resilient surrender. Ensures defensive magic maintains its strength, guards the wisdom of yielding without breaking.",
    powers: [
      "Creating resilient defenses",
      "Blessing rest and recovery",
      "Protecting through surrender",
      "Granting resistance to dispelling",
      "Honoring wisdom of retreat",
    ],
    domains: ["Rest", "Resilience", "Surrender", "Defense", "Recovery"],
    appearance:
      "Appears as a dim but unbreakable form, resting but watchful. Demonstrates that yielding is not weakness but wisdom.",
    behavior:
      "Gentle but unbreakable. Speaks of the strength in rest and surrender. Values resilience and the wisdom to yield.",
  },

  // ========== ISH OF SUN MILESTONES (2 - Guards solar events) ==========
  {
    name: "Ish of the Equinox",
    cosmicName: "",
    rank: "Ish",
    guardianOf: "Equinox - Aequilux (balance, shift)",
    description:
      "Guardian of the equinox, protecting moments of perfect balance and vector convergence. Ensures opposing forces can unite safely, guards the sacred times when boundaries dissolve.",
    powers: [
      "Facilitating convergence of opposites",
      "Blessing temporary unity",
      "Allowing impossible combinations",
      "Protecting balanced transformation",
      "Enabling crossing of boundaries",
    ],
    domains: [
      "Balance",
      "Convergence",
      "Unity of Opposites",
      "Boundary Crossing",
      "Harmony",
    ],
    appearance:
      "Appears perfectly balanced between all opposites - light and dark, ethereal and physical, creation and dissolution. Form shifts to embody perfect equilibrium.",
    behavior:
      "Speaks of balance and the unity underlying all division. Facilitates meetings between opposing forces. Values harmony and integration.",
  },

  {
    name: "Ish of the Solstice",
    cosmicName: "",
    rank: "Ish",
    guardianOf: "Solstice - Fixatio (abundance, celebration)",
    description:
      "Guardian of the solstice, protecting abundance and the nullification of cost. Ensures celestial power flows freely while guarding against psychological harm, guards the moment of maximum light or dark.",
    powers: [
      "Channeling celestial power directly",
      "Reducing material costs",
      "Blessing abundance and celebration",
      "Protecting minds from power's burden",
      "Maximizing throughput safely",
    ],
    domains: [
      "Abundance",
      "Celebration",
      "Maximum Power",
      "Cost Reduction",
      "Celestial Flow",
    ],
    appearance:
      "Appears radiating overwhelming abundance, form overflowing with power and generosity. Embodies the peak of solar might or the depth of solar rest.",
    behavior:
      "Generous and powerful. Speaks of celebration and the gifts of the cosmos. Values joy, abundance, and sharing of celestial blessings.",
  },
];
