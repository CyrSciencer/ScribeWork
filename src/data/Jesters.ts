export interface JesterDiscipline {
  name: string;
  archetype: string;
  magicProperies: string;
  costumeMnemonic: string;
  replacementOfSelf: string;
  limitation: string;
}
export interface JesterSchool {
  school: "Ars Mechanicae";
  credo: string;
  disciplines: JesterDiscipline[];
}
export const Jesters: JesterSchool[] = [
  {
    school: "Ars Mechanicae",
    credo:
      "Once-mortal who surrendered the self to superior disciplined crafts, creating through chaos toward perfection or imperfect whole.",
    disciplines: [
      {
        name: "Vestmentary",
        archetype: "Wardrobe architect weaving living patterns into cloth.",
        magicProperies:
          "Coaxes dormant enchantments to settle into fabric, letting garments shift, shield, or inspire when worn.",
        costumeMnemonic:
          "Jester motley tailored from layered swatches and trailing ribbons, each stitch pattern glowing with woven sigils.",
        replacementOfSelf:
          "Threads their identity into a community tapestry, existing as the weave that clothes and protects others.",
        limitation:
          "Requires pre-attuned threads and measured loomwork; raw magic slips through unworked fibers.",
      },
      {
        name: "Fabricatory",
        archetype: "Smith of impossible mechanisms and resilient alloys.",
        magicProperies:
          "Channels sympathetic resonance into tools and structures so they self-correct, hum with power, or remember shapes.",
        costumeMnemonic:
          "Hammered bells and metal panels riveted onto a jester doublet, soot-smudged and braced with miniature tools.",
        replacementOfSelf:
          "Trades the beating heart for a perfect schematic, becoming the blueprint animating every crafted engine.",
        limitation:
          "Must build through physical labor; enchantments collapse if conjured without tangible components.",
      },
      {
        name: "Venificiary",
        archetype: "Healer who stitches sinew and soul with patient craft.",
        magicProperies:
          "Infuses poultices, sutures, and tonics with soft restorative auras that accelerate natural recovery.",
        costumeMnemonic:
          "Graceful motley lined with bandages and potion vials, sleeves embroidered with anatomical diagrams.",
        replacementOfSelf:
          "Lets their sense of self dissolve into shared pulse and breath, living on as the rhythm that guides recovery.",
        limitation:
          "Can only bolster what the body can already mend; cannot conjure life or cure beyond existing vitality.",
      },
      {
        name: "Architectural",
        archetype: "Designer of living spaces tuned to purpose and emotion.",
        magicProperies:
          "Imbues blueprints with guiding currents so structures redirect sound, light, and stress along intended paths.",
        costumeMnemonic:
          "Geometric ruffs and paneled capes forming miniature models, lines of chalk tracing arches across the motley.",
        replacementOfSelf:
          "Replaces the self with a codex of spaces, inhabiting halls and foundations as a whispering structural spirit.",
        limitation:
          "Needs to complete design rituals before ground is broken; improvisation on-site diffuses their enchantments.",
      },
      {
        name: "Navigational",
        archetype: "Cartographer and pilot reading winds, tides, and leylines.",
        magicProperies:
          "Braids soft magic into charts and rigging, letting vessels sense hazards and follow remembered routes.",
        costumeMnemonic:
          "Sea-weathered motley trimmed with compass roses, sleeves charted with stitched meridians and tide marks.",
        replacementOfSelf:
          "Surrenders individuality to currents and constellations, persisting as a living map stitched across the skies.",
        limitation:
          "Requires existing waymarks; cannot chart unknown realms without first-hand traversal.",
      },
      {
        name: "Pictorial",
        archetype: "Painter-sculptor who captures truths beneath the surface.",
        magicProperies:
          "Seals impressions into pigment or clay so artworks echo memories, moods, or predictions.",
        costumeMnemonic:
          "Paint-splattered motley with palette masks, gloves layered in pigments that shimmer with trapped images.",
        replacementOfSelf:
          "Melts identity into canvases and statues, becoming the captured gaze that forever reflects its subjects.",
        limitation:
          "Needs a subject or muse present; absent inspiration, their pieces remain mundane.",
      },
      {
        name: "Culinary",
        archetype: "Gastronomer weaving flavor into ritual nourishment.",
        magicProperies:
          "Steeps meals in subtle enchantments that steady minds, fortify bodies, or rekindle camaraderie.",
        costumeMnemonic:
          "Aproned motley scented with herbs, tasseled ladles and spice satchels dangling from a jester's belt.",
        replacementOfSelf:
          "Yields personal desire to communal nourishment, existing as the lingering warmth that ties a table together.",
        limitation:
          "Effects fade if food is mass-produced or rushed; requires shared table and deliberate savoring.",
      },
      {
        name: "Theatral",
        archetype: "Performer orchestrating emotion through crafted spectacle.",
        magicProperies:
          "Laces performances with suggestive currents that align audiences to rhythm, humor, or revelation.",
        costumeMnemonic:
          "Stage-bright motley with mirrored patches, sash hung with expressive masks and cascading ribbons.",
        replacementOfSelf:
          "Lets their selfhood fracture into countless masks, surviving as the emotions audiences carry away.",
        limitation:
          "Needs receptive witnesses; magic falters in silence or when the crowd resists engagement.",
      },
    ],
  },
];
