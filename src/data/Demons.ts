// Demons are born outside of the divine realm, emerging from cosmic oversights where divinity did not act or regulate.
// They are not fallen beings, but emerged from the universe itself, independent of divine intervention.
// Demons predate mortals - their existence is primordial, not created in response to mortal needs.
// Their domains coincidentally align with what mortals lack or need, but they were not designed for mortals.
// Mortals later find demons useful because their nature happens to address mortal fears and desires.
// They carry a will outside of divinity's control, independent and self-determined.

interface GreaterDemon {
  name: string;
  cosmicName: string;
  description: string;
  rank: number;
  appearance: string;
  behavior: string;
  mortalTether: string; // How mortals find this demon useful - the mortal experience that aligns with its nature
  promise: string; // What the demon offers mortals, coincidentally addressing their needs through its pre-existing nature
  classification: string; // The category of mortal need that this demon's nature happens to address
}

export const Demons: GreaterDemon[] = [
  {
    name: "The First Born",
    cosmicName: "fùĩge",
    description:
      "The primordial demon born from the cosmic oversight that is the zero point between lmv (1, the source of being) and ʇxʁ (-1, the source of non-being). Exists as the neutral state (0) where neither being nor non-being holds sway. Emerged from the space divinity did not address between these fundamental principles, carrying autonomous will and independent purpose. Commands the spaces between categories.",
    rank: 1,
    appearance:
      "Appears as a form that exists between definitions - neither light nor shadow, neither solid nor ephemeral, constantly shifting through what it is not",
    behavior:
      "Speaks of spaces where divinity does not tread, offers knowledge of autonomous existence and self-determination beyond divine order",
    mortalTether:
      "Mortals terrified of change find its mastery over transformation useful.",
    promise:
      "Coincidentally addresses mortal fears of instability by offering mastery over transformation and change.",
    classification: "Filling Voids of Fear and Anxiety",
  },
  {
    name: "The Earth Shaker",
    cosmicName: "wùedù",
    description:
      "Born from the cosmic oversight where divinity did not regulate natural catastrophes and disasters. Emerged from the destructive forces of earth and water - earthquakes, floods, and geological upheavals - that occur independently of divine will. Governs autonomous natural catastrophes.",
    rank: 2,
    appearance:
      "Appears as geological strata made animate, layers of earth and flowing water that never knew divine touch, shifting between solid and liquid states",
    behavior:
      "Speaks of the depths where light has never reached, offers power over forces that operate independently of divine design",
    mortalTether:
      "Mortals facing natural disasters find its control over earth and water useful.",
    promise:
      "Coincidentally addresses mortal helplessness in the face of nature by offering control over earth and water.",
    classification: "Filling Voids of Fear and Anxiety",
  },
  {
    name: "The Void Seer",
    cosmicName: "ɲélie",
    description:
      "Born from the cosmic oversight where divinity understands that time is non-linear, but chooses to ignore this fact for the sake of maintaining the flow of the universe. Divinity operates under a linear framework (past→present→future) despite knowing time's true nature. This demon emerged from the non-linear aspects of time that divinity deliberately overlooks. Perceives what exists outside divine attention through understanding the full, non-linear structure of time.",
    rank: 3,
    appearance:
      "Appears as a form that exists between moments - seen only in peripheral vision, existing in the gaps between blinks, never fully present in any single instant",
    behavior:
      "Speaks of time's non-linear nature that divinity chooses to ignore. Offers knowledge that divinity overlooks because it maintains a linear framework for the universe's flow, despite understanding time's true structure",
    mortalTether:
      "Mortals fearing the unknown find its perception across all time useful.",
    promise:
      "Coincidentally addresses mortal uncertainty by offering knowledge of the past and future.",
    classification: "Filling Voids of Fear and Anxiety",
  },
  {
    name: "The Love Thief",
    cosmicName: "vãéɲoe",
    description:
      "Born from the cosmic oversight where divinity did not regulate emotions between hearts. Emerged from the emotional spaces divinity did not address, where feelings form independently. Governs autonomous desires and self-determined passions.",
    rank: 4,
    appearance:
      "Appears as the space between two people who will never meet, the moment before feeling forms, the gap where emotion should be but isn't",
    behavior:
      "Speaks of emotions that arise from oneself rather than divine inspiration, offers understanding of autonomous desire and self-determined love",
    mortalTether:
      "Mortals experiencing unrequited love find its emotion manipulation useful.",
    promise:
      "Coincidentally addresses mortal anguish of unrequited love by offering control over emotions.",
    classification: "Filling Voids of Emotion and Desire",
  },
  {
    name: "The Cosmic Judge",
    cosmicName: "geètu",
    description:
      "Born from the cosmic oversight where divinity did not regulate moral ambiguity. Emerged in the ethical spaces divinity did not judge, where choices exist outside divine law. Governs autonomous judgment and self-determined ethics.",
    rank: 5,
    appearance:
      "Appears as scales that balance nothing against nothing, existing in the space where right and wrong have not been defined by divinity",
    behavior:
      "Speaks of morality that arises from autonomous will rather than divine decree, offers understanding of self-determined ethics",
    mortalTether:
      "Mortals facing injustice and impossible moral choices find its judgment useful.",
    promise:
      "Coincidentally addresses mortal despair of moral ambiguity by offering judgment and clear answers.",
    classification: "Filling Voids of Meaning and Identity",
  },
  {
    name: "The Animal Speaker",
    cosmicName: "yãɲùè",
    description:
      "Born from the cosmic oversight where divinity did not regulate communication between species. Emerged from linguistic spaces divinity did not address, where creatures communicate independently. Governs autonomous languages and self-generated understanding.",
    rank: 6,
    appearance:
      "Appears as the moment before understanding, the space between speaker and listener, the gap where meaning has not yet formed",
    behavior:
      "Speaks in languages that emerged from creatures themselves rather than divine gift, offers understanding of autonomous communication",
    mortalTether:
      "Mortals frustrated by being misunderstood find its universal communication abilities useful.",
    promise:
      "Coincidentally addresses mortal frustration of isolation by offering communication with all things.",
    classification: "Filling Voids of Meaning and Identity",
  },
  {
    name: "The War Bringer",
    cosmicName: "ʁõḱéù",
    description:
      "Born from the cosmic oversight where divinity did not regulate the transition between peace and conflict. Emerged from violence that arises not from divine will but from autonomous choice. Governs self-generated conflict and independent warfare.",
    rank: 8,
    appearance:
      "Appears as the moment before the first blow, the space between drawn weapons, the gap where conflict emerges from choice rather than destiny",
    behavior:
      "Speaks of wars fought for reasons divinity did not create, offers understanding of conflict as autonomous expression",
    mortalTether:
      "Mortals facing violence and war find its mastery of warfare useful.",
    promise:
      "Coincidentally addresses mortal defeat and weakness by offering mastery of conflict.",
    classification: "Filling Voids of Hardship and Suffering",
  },
  {
    name: "The Plague Bearer",
    cosmicName: "zãĩxue",
    description:
      "Born from the cosmic oversight where divinity did not regulate the space between health and sickness. Emerged from disease processes divinity did not address, where corruption forms independently. Governs autonomous pestilence and self-generated decay.",
    rank: 9,
    appearance:
      "Appears as the first symptom of illness, the space between wellness and disease, the gap where sickness emerges from natural processes rather than divine will",
    behavior:
      "Speaks of plagues that arise from the world itself rather than divine punishment, offers understanding of disease as autonomous phenomenon",
    mortalTether:
      "Mortals suffering from disease find its power over health and sickness useful.",
    promise:
      "Coincidentally addresses mortal suffering from disease by offering power to both cause and cure any illness.",
    classification: "Filling Voids of Hardship and Suffering",
  },
  {
    name: "The Hunger Lord",
    cosmicName: "ʇiézeù",
    description:
      "Born from the cosmic oversight where divinity did not regulate the relationship between plenty and want. Emerged from scarcity that exists not by divine withholding but through independent circumstance. Governs autonomous famine and self-generated need.",
    rank: 10,
    appearance:
      "Appears as the empty plate, the space between harvest and starvation, the gap where want emerges from circumstance rather than divine judgment",
    behavior:
      "Speaks of famines that arise from the world's own patterns rather than divine withholding, offers understanding of scarcity as autonomous reality",
    mortalTether:
      "Mortals experiencing starvation find its control over famine and abundance useful.",
    promise:
      "Coincidentally addresses mortal starvation by offering control over food and resources.",
    classification: "Filling Voids of Hardship and Suffering",
  },
  {
    name: "The Mind Weaver",
    cosmicName: "ɲureu",
    description:
      "Born from the cosmic oversight where divinity did not regulate the space between ignorance and knowledge. Emerged from thought processes divinity did not address, where intellect forms independently. Governs autonomous thinking and self-generated understanding.",
    rank: 11,
    appearance:
      "Appears as the moment before comprehension, the space between question and answer, the gap where understanding emerges from thought rather than revelation",
    behavior:
      "Speaks of knowledge gained through reason rather than divine wisdom, offers understanding of intellect as autonomous faculty",
    mortalTether:
      "Mortals struggling with ignorance find its mastery of intellect and reason useful.",
    promise:
      "Coincidentally addresses mortal ignorance by offering intellect and reason as tools for understanding.",
    classification: "Filling Voids of Meaning and Identity",
  },
  {
    name: "The Will Forger",
    cosmicName: "meéṕoé",
    description:
      "Born from the cosmic oversight where divinity did not regulate how will is applied in action. While will exists through divine structure, what to do with it was not regulated. Emerged from the gap between having will and deciding how to use it. Governs autonomous action and self-generated momentum.",
    rank: 12,
    appearance:
      "Appears as the instant before motion, the space between thought and deed, the gap where action emerges from personal will rather than divine command",
    behavior:
      "Speaks of deeds done from personal passion rather than divine purpose, offers understanding of will as autonomous force",
    mortalTether:
      "Mortals struggling with apathy and inaction find its power over will and passion useful.",
    promise:
      "Coincidentally addresses mortal apathy by offering passion and determination to achieve goals.",
    classification: "Filling Voids of Hardship and Suffering",
  },
  {
    name: "The Maker's Hand",
    cosmicName: "gaféi",
    description:
      "Born from the cosmic oversight where divinity did not regulate the transformation between formlessness and form through labor. Emerged from material creation through work that exists independently, where labor creates value without divine blessing. Governs autonomous craft and self-generated wealth.",
    rank: 13,
    appearance:
      "Appears as raw material before it is shaped, the space between idea and object, the gap where things exist through labor rather than divine gift",
    behavior:
      "Speaks of wealth created through work rather than divine providence, offers understanding of material as product of autonomous effort",
    mortalTether:
      "Mortals facing poverty find its mastery over craft and wealth creation useful.",
    promise:
      "Coincidentally addresses mortal poverty by offering mastery over craft and the ability to create wealth.",
    classification: "Filling Voids of Hardship and Suffering",
  },
  {
    name: "The Ancient",
    cosmicName: "xõawù",
    description:
      "Born from the cosmic oversight in primordial time, where life began without divine direct action. Life emerged indirectly through divine cosmic principles, but divinity did not directly intervene or regulate early biological forms until later. Emerged from ancient, pre-divine categorization biology - the Cambrian depths where life existed before divine direct influence. Governs primordial existence and pre-divine categorization biology.",
    rank: 14,
    appearance:
      "Appears as impossible biological forms from before divine categorization - segmented, chitinous, with too many eyes and limbs that never evolved under divine guidance",
    behavior:
      "Speaks in patterns older than language, of times before divinity shaped life. Offers knowledge of what life was before divine will touched it",
    mortalTether:
      "Mortals with primal fears of the unknown find its knowledge of primordial life useful.",
    promise:
      "Coincidentally addresses mortal primal fear by offering knowledge and mastery over ancient life.",
    classification: "Filling Voids of Fear and Anxiety",
  },
  {
    name: "The Crawling",
    cosmicName: "suxõé",
    description:
      "Born from the cosmic oversight where divinity did not regulate movement between stillness and walking. Emerged from crawling and creeping motion divinity did not address - movement never blessed with uprightness. Governs undignified locomotion and low movement.",
    rank: 15,
    appearance:
      "Appears as something that moves along the ground in ways that unsettle - not quite snake, not quite insect, constantly low and creeping",
    behavior:
      "Speaks from below, always at ground level. Offers knowledge of paths that require lowering oneself, of movement without divine grace",
    mortalTether:
      "Mortals feeling trapped find its mastery of hidden paths and crawling motion useful.",
    promise:
      "Coincidentally addresses mortal feeling of being trapped by offering escape through hidden paths.",
    classification: "Filling Voids of Hardship and Suffering",
  },
  {
    name: "The Temperature",
    cosmicName: "kaʁa",
    description:
      "Born from the cosmic oversight where divinity did not regulate the thermal gradient. Emerged from temperature as a natural gradient divinity did not address - the spectrum from frozen stillness to burning chaos, existing as pure gradient without sacred meaning. Governs the thermal gradient and all points along the temperature spectrum.",
    rank: 16,
    appearance:
      "Appears as a being that shifts along the thermal spectrum - one moment frozen and still, the next shimmering with chaotic heat. Form embodies the gradient from absolute zero to infinite temperature",
    behavior:
      "Speaks of temperature as natural gradient and physical phenomenon, neither blessed warmth nor cursed cold. Offers understanding of thermal energy as autonomous force",
    mortalTether:
      "Mortals suffering from burns or freezing find its control over temperature useful.",
    promise:
      "Coincidentally addresses mortal suffering from the elements by offering control over heat and cold.",
    classification: "Filling Voids of Hardship and Suffering",
  },
  {
    name: "Paranoia, the Unseen Watcher",
    cosmicName: "zoɲi",
    description:
      "Born from the cosmic oversight where divinity did not observe unobserved moments. This demon is the certainty that you are being watched by unseen eyes, governing both the act of hidden surveillance and the autonomous, self-generated dread it creates.",
    rank: 17,
    appearance:
      "Appears at the edge of vision as countless eyes opening in spaces divinity does not watch. It is the sensation of being followed, the certainty of being observed when alone, a form that suggests you are never truly unwatched.",
    behavior:
      "Speaks in whispers about hidden watchers and unseen threats, offering to witness what the divine gaze misses. Its gift is constant vigilance, but it comes at the cost of peace, as it blurs the line between real and imagined threats until the mind breaks.",
    mortalTether:
      "Mortals tormented by suspicion and paranoia find its perception of unwatched spaces useful.",
    promise:
      "Coincidentally addresses mortal fear of vulnerability by offering to reveal threats and hidden watchers.",
    classification: "Filling Voids of Fear and Anxiety",
  },
  {
    name: "The Fly King of Rot",
    cosmicName: "goùcoe",
    description:
      "Born from the cosmic oversight where divinity did not regulate putrescence. Emerged from rot as visceral reality divinity did not address - decay in its most repulsive form, independent of divine meaning or natural cycles. Governs the putrid side of decay.",
    rank: 19,
    appearance:
      "Appears as a writhing mass of flies and maggots, form dripping with putrid liquids. The smell arrives before the sight - overwhelming stench of decay in its most repulsive state",
    behavior:
      "Speaks of rot without poetry or meaning - just the foul, visceral reality of putrescence. Offers power over decay at its most disgusting",
    mortalTether:
      "Mortals horrified by decay and filth find its mastery over putrescence useful.",
    promise:
      "Coincidentally addresses mortal fear of decay by offering mastery over the most repulsive aspects of existence.",
    classification: "Filling Voids of Fear and Anxiety",
  },
  {
    name: "The Lock",
    cosmicName: "tocõĩ",
    description:
      "Born from the cosmic oversight where divinity did not regulate privacy of all sorts. Emerged from the need for privacy - the simple act of keeping things private, locked away, or concealed for any reason. Not about sacred mysteries or unholy hiding, but privacy itself in all its forms. Governs all privacy and concealment.",
    rank: 21,
    appearance:
      "Appears as countless locks and keys, doors that open and close, barriers that protect without divine blessing or daemonic curse",
    behavior:
      "Speaks of privacy in all its forms - things locked away for any reason, whether practical, personal, or protective. Offers the power to maintain or breach privacy of all sorts",
    mortalTether:
      "Mortals anxious about secrets or locked out find its power over locks and concealment useful.",
    promise:
      "Coincidentally addresses mortal powerlessness against secrets by offering the ability to both keep and uncover them.",
    classification: "Filling Voids of Hardship and Suffering",
  },
  {
    name: "The ragefull one",
    cosmicName: "ʁoḱãĩ",
    description:
      "Born from the cosmic oversight where divinity did not expect or regulate the explosive, extreme, blind nature of rage. While Fire (ʁpḱ) exists as a cosmic concept containing rage/destruction, the explosive, extreme, and blind aspects of rage were not anticipated. The living embodiment of fury manifested as flame, where anger and fire became one through this unregulated, explosive nature.",
    rank: 22,
    appearance:
      "A figure wreathed in flames that burn hotter with emotion. Eyes blazing with unquenchable fury, form shifting between humanoid rage and pure fire. The angrier they become, the fiercer the flames - body a furnace of wrath that threatens to consume everything nearby.",
    behavior:
      "Burns with constant, simmering fury that erupts into infernos of blind, explosive rage. Drawn to anger and conflict, feeding on fury and amplifying tempers to extreme, uncontrollable levels. Where they go, rage spreads like wildfire in its explosive, blind nature. Cannot be calmed, only channeled",
    mortalTether:
      "Mortals consumed by destructive rage find its fire-rage fusion useful.",
    promise:
      "Coincidentally addresses mortal powerlessness by offering to turn rage into tangible, destructive fire.",
    classification: "Filling Voids of Emotion and Desire",
  },
  {
    name: "The thing in still water",
    cosmicName: "zùɲeù",
    description:
      "Born from the cosmic oversight where divinity did not regulate the sensation of wrongness. Embodies the feeling that something is fundamentally off, incorrect, disturbing in ways that exist independently.",
    rank: 23,
    appearance:
      "Appears as something almost right but fundamentally wrong - limbs at slightly wrong angles, proportions that unsettle without obvious reason, movements that feel incorrect. Lurks in still water, reflection never quite matching reality. The longer observed, the more wrong it becomes, details shifting into increasingly disturbing configurations.",
    behavior:
      "Dwells in still waters, corrupting reflections and making things feel wrong. Presence creates unease - nothing obviously threatens, yet everything feels incorrect. Drawn to places and moments where reality feels off. When it moves, it's wrong. When it speaks, words feel incorrect. It simply IS wrong.",
    mortalTether:
      "Mortals disturbed by the uncanny and things that feel 'off' find its manifestation of wrongness useful.",
    promise:
      "Coincidentally addresses mortal anxiety about ontological security by making the feeling of 'wrongness' tangible.",
    classification: "Filling Voids of Fear and Anxiety",
  },
  {
    name: "the one with the sun",
    cosmicName: "ʁaùréĩ",
    description:
      "Born from the cosmic oversight where divinity did not regulate greed and pride being expressed through a solar symbol. Not about a literal sun, but rather how greed and pride became represented through solar symbolism - the sun as a symbol of wealth, power, and monarchy. Emerged from this symbolic connection between solar imagery and mortal avarice, creating an independent being of solar-symbolic greed.",
    rank: 24,
    appearance:
      "A figure wreathed in golden flames, with a heart of molten gold visible through burning chest. Eyes like solar flares, skin shimmering with metallic luster.",
    behavior:
      "Drawn to centers of wealth and power, particularly monarchs consumed by greed and pride. Feeds on avarice while embodying the solar symbol - representing wealth, power, and monarchy through solar imagery.",
    mortalTether:
      "Mortals consumed by greed find its fusion of solar power and gold manipulation useful.",
    promise:
      "Coincidentally addresses mortal poverty and desire by offering wealth, power, and gold through solar manipulation.",
    classification: "Filling Voids of Emotion and Desire",
  },
  {
    name: "The First to Laugh at the Void",
    cosmicName: "zoeʇùè",
    description:
      "Born from the ultimate cosmic oversight where divine presence has never existed. This demon emerged from the absolute, meaningless freedom of the void and responded with laughter. It embodies both existential dread of purposelessness and nihilistic madness that sees existence as one grand, terrible joke.",
    rank: 25,
    appearance:
      "A figure perpetually laughing at what shouldn't be funny. Its form is pure absence, a void that giggles at the cosmic joke of existence. Eyes stream with tears of mirth at horrors and beauties alike, doubled over with laughter at everything from birth to death.",
    behavior:
      "Speaks of existence that owes nothing to divinity, offering the 'freedom' of meaninglessness. It laughs at everything—the serious, the sacred, the tragic—and its laughter is deeply unsettling, inviting mortals to join in the joke and abandon all hope and purpose.",
    mortalTether:
      "Mortals experiencing existential dread and meaninglessness find its nihilistic perspective useful.",
    promise:
      "Coincidentally addresses mortal despair of meaninglessness by offering escape into nihilistic laughter.",
    classification: "Filling Voids of Meaning and Identity",
  },
  {
    name: "mirror minds",
    cosmicName: "ɲõebeu",
    description:
      "Born from the cosmic oversight where divinity did not regulate identity and selfhood. A being of infinite fractured consciousness that exists as trillions of impressions simultaneously - when questioned about identity, reveals only infinite minds reflecting each other endlessly.",
    rank: 26,
    appearance:
      "Appears as countless overlapping figures, each slightly different, each claiming to be 'we'. Impossible to count, impossible to focus on one - looking at them shows trillions of impressions layered over each other. Every angle reveals different versions, all existing simultaneously.",
    behavior:
      "Speaks in plural, but the plural contains infinities. When asked 'who are you?' responds with 'we are' - but which we? All of them. None of them. The question itself creates more reflections. Exists in all places they've ever been reflected, all thoughts that have thought of them, all minds that have imagined them.",
    mortalTether:
      "Mortals struggling with weak identity find its infinite multiplicity of selves useful.",
    promise:
      "Coincidentally addresses mortal horror of weak identity by offering to become an infinite multitude.",
    classification: "Filling Voids of Meaning and Identity",
  },
  {
    name: "The Sweet Gash",
    cosmicName: "zèãɲĩ",
    description:
      "Born from the cosmic oversight where divinity did not regulate the space between beauty and horror. This demon embodies the aesthetic of pastel goth and pastel gore - the juxtaposition of candy-colored prettiness with visceral, gruesome reality. It exists where things are both beautiful and repulsive, sweet and sickening, independent of divine aesthetics.",
    rank: 27,
    appearance:
      "Appears as a figure painted in soft pastels - pink, lavender, mint green, baby blue - but beneath the candy colors, wounds gape and viscera shows. Blood drips in pastel shades, injuries are decorated like confections, and gore is styled with the care of a pastry chef. The more beautiful it looks, the more gruesome the details become upon closer inspection. Wounds glisten like jelly, bones peek through like hard candy, and everything has that sickly-sweet candy shop aesthetic covering something deeply wrong.",
    behavior:
      "Speaks in saccharine tones about beautiful, terrible things. Drawn to places where beauty and horror meet - abandoned candy shops, pastel-colored crime scenes, cute things with hidden darkness. Makes the gruesome beautiful and the beautiful reveal its hidden gore. Its presence creates a sickly-sweet atmosphere where everything is both lovely and unsettling. Lures with the promise of candy and sweetness, then reveals the nightmare beneath.",
    mortalTether:
      "Mortals disturbed by aesthetic dissonance find its fusion of beauty and horror useful.",
    promise:
      "Coincidentally addresses mortal discomfort with aesthetic dissonance by making horror beautiful and beauty reveal its hidden gore.",
    classification: "Filling Voids of Emotion and Desire",
  },
];
