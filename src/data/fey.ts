// Fey are born from the manipulation of rules by various beings.
// They carry the will of the rules they are bound to.
// CALLING A FEY IN A SPELL ALLOWS THE CASTER TO MODIFY THE RULE THAT FEY IS BOUND TO.

interface FeyEntity {
  name: string;
  cosmicName: string;
  rule: string;
  description: string;
  domain: string;
  manifestation: string;
  enforcement: string;
  invocation: string; // How calling this fey modifies their rule
}

export const Fey: FeyEntity[] = [
  {
    name: "The Kindler",
    cosmicName: "ʁfṕ",
    rule: "what fuel",
    description:
      "The fey of consumption and energy source, determining what must be consumed or expended for any transformation to begin",
    domain: "Sources of power, sacrificial materials, consumed energies",
    manifestation:
      "Appears as flickering flames that consume without heat, revealing what must be given",
    enforcement:
      "No transformation proceeds without proper fuel; attempts to bypass fuel requirements result in the transformation consuming the transformer itself",
    invocation:
      "Calling The Kindler allows substitution of fuel types—using life force instead of material, emotion instead of energy, or even time itself as fuel",
  },
  {
    name: "The Subject",
    cosmicName: "twb",
    rule: "what's transformed",
    description:
      "The fey of the material and subject, defining what can and cannot undergo transformation",
    domain: "Raw materials, subjects of change, transformable substances",
    manifestation:
      "Appears as a translucent form that mirrors whatever it observes, showing the essence beneath appearance",
    enforcement:
      "Only that which possesses the capacity for change may transform; immutable things remain forever unchanged regardless of effort",
    invocation:
      "Calling The Subject permits transformation of normally immutable things—changing concepts, emotions, memories, or even laws of nature as if they were physical substances",
  },
  {
    name: "The Methodist",
    cosmicName: "rtm",
    rule: "what process",
    description:
      "The fey of method and technique, governing the procedures and steps through which transformation occurs",
    domain: "Ritual steps, procedures, techniques, methodologies",
    manifestation:
      "Appears as geometric patterns that shift and reorganize, demonstrating proper sequences",
    enforcement:
      "The process must be followed precisely; deviation causes the transformation to halt or corrupt mid-change",
    invocation:
      "Calling The Methodist allows reordering, skipping, or inventing new steps in any process—performing rituals backwards, compressing years into moments, or splitting single actions into elaborate ceremonies",
  },
  {
    name: "The Culmination",
    cosmicName: "tnv",
    rule: "what result",
    description:
      "The fey of outcome and product, determining what forms the transformation can produce",
    domain: "Final forms, products, outcomes, destinations",
    manifestation:
      "Appears as a crystalline structure containing infinite possible endings, only one of which becomes real",
    enforcement:
      "The result must be achievable within cosmic law; impossible outcomes cause reality to reject the transformation entirely",
    invocation:
      "Calling The Culmination permits choosing from impossible outcomes—achieving paradoxical results, creating contradictory forms, or manifesting multiple mutually exclusive endings simultaneously",
  },
  {
    name: "The Shaper",
    cosmicName: "frx",
    rule: "what transform",
    description:
      "The fey of the agent and transformer, defining who or what has the authority and capacity to enact change",
    domain: "Agents of change, transformers, catalytic beings",
    manifestation:
      "Appears as hands of living shadow that reshape whatever they touch, showing the mark of the changer",
    enforcement:
      "Only those with proper authority may transform; unauthorized transformation is undone violently",
    invocation:
      "Calling The Shaper grants temporary authority to any being—allowing mortals to reshape reality like gods, or transferring transformation ability to objects, places, or even ideas themselves",
  },
  {
    name: "The Spark",
    cosmicName: "ksṕ",
    rule: "what catalyst",
    description:
      "The fey of triggering and enabling, governing what initiates transformation without being consumed",
    domain: "Triggers, enabling conditions, catalysts, initiators",
    manifestation:
      "Appears as points of brilliant light that jump between substances, igniting change without diminishing",
    enforcement:
      "Without the proper catalyst, no transformation begins; the catalyst must touch all parts of the process or it fails to propagate",
    invocation:
      "Calling The Spark allows designation of any trigger as catalyst—a word, thought, sensation, or even silence can ignite transformation; or removes the need for catalysts entirely",
  },
  {
    name: "The Vessel",
    cosmicName: "drv",
    rule: "what medium",
    description:
      "The fey of space and environment, determining through what plane or medium transformation flows",
    domain: "Spaces, planes, environments, vessels, mediums",
    manifestation:
      "Appears as transparent boundaries that separate realms, showing where transformations are contained",
    enforcement:
      "Transformation cannot cross mediums without permission; trying to transform across incompatible mediums causes the energy to dissipate",
    invocation:
      "Calling The Vessel enables transformation across incompatible mediums—changing physical matter through dreams, ethereal energy through stone, or thoughts through the physical realm without loss",
  },
  {
    name: "The Circumstance",
    cosmicName: "ntṕ",
    rule: "what context/condition",
    description:
      "The fey of prerequisite and circumstance, governing the conditions that must exist for transformation",
    domain:
      "Prerequisites, circumstances, environmental requirements, contexts",
    manifestation:
      "Appears as concentric circles that expand and contract, revealing the conditions surrounding any change",
    enforcement:
      "All prerequisites must be met simultaneously; missing even one condition prevents the transformation from beginning",
    invocation:
      "Calling The Circumstance allows ignoring prerequisites or creating fictional conditions—casting spells that require moonlight in darkness, or making impossible circumstances briefly real",
  },
  {
    name: "The Weigher",
    cosmicName: "gvk",
    rule: "what cost",
    description:
      "The fey of sacrifice and price, determining what must be paid beyond the fuel consumed",
    domain: "Sacrifices, prices, balances, consequences",
    manifestation:
      "Appears as balanced scales made of bone and light, weighing what is given against what is gained",
    enforcement:
      "Every transformation demands its price; attempting to avoid payment causes the cost to be extracted from the transformer's essence",
    invocation:
      "Calling The Weigher permits negotiating costs—paying in installments across time, transferring price to others, or accepting debts that compound with interest; can also multiply costs for greater power",
  },
  {
    name: "The Recorder",
    cosmicName: "ɲtd",
    rule: "what witness",
    description:
      "The fey of observation and validation, requiring that all transformations be witnessed and recorded",
    domain: "Observation, validation, recording, testimony",
    manifestation:
      "Appears as countless eyes that open in the air, each one capturing a moment of transformation",
    enforcement:
      "Unwitnessed transformations leave no trace and may be undone by reality itself; major transformations require multiple witnesses",
    invocation:
      "Calling The Recorder allows changing witness requirements—making transformations invisible to specific observers, requiring or forbidding certain types of witnesses, or using past/future observers as witnesses",
  },
  {
    name: "The Constant",
    cosmicName: "dkn",
    rule: "what remains",
    description:
      "The fey of invariance and persistence, defining what cannot change and what survives all transformations",
    domain: "Invariants, persistence, unchanged essences, constants",
    manifestation:
      "Appears as immovable pillars of absolute stillness that nothing can alter or erode",
    enforcement:
      "That which is immutable cannot be transformed; attempts to change the unchangeable result in the transformation reflecting back upon its source",
    invocation:
      "Calling The Constant allows choosing what remains unchanged—preserving memories through mind alteration, keeping a soul intact during body transformation, or ensuring nothing survives the change",
  },
  {
    name: "The Limiter",
    cosmicName: "cdt",
    rule: "what boundary/limit",
    description:
      "The fey of constraint and containment, determining how far transformation can extend",
    domain: "Boundaries, limits, constraints, containment",
    manifestation:
      "Appears as invisible walls that shimmer when transformation approaches, marking the edge of possibility",
    enforcement:
      "Transformation cannot exceed its boundaries; energy that reaches the limit either stops or rebounds catastrophically",
    invocation:
      "Calling The Limiter permits expanding boundaries to infinity or compressing them to a point—making localized changes affect entire realms, or restricting cosmic forces to a single atom",
  },
  {
    name: "The Current",
    cosmicName: "wvf",
    rule: "what direction/vector",
    description:
      "The fey of flow and trajectory, governing the direction and path of transformation",
    domain: "Directions, vectors, flows, trajectories, paths",
    manifestation:
      "Appears as flowing streams of colored light that show the path energy must take",
    enforcement:
      "Transformation must follow its proper vector; forcing it against its natural direction causes the energy to tear through reality",
    invocation:
      "Calling The Current allows reversing natural flow—making fire burn downward, time flow backward, or death lead to birth; or creating spiraling, recursive, or impossible trajectories",
  },
  {
    name: "The Hourglass",
    cosmicName: "myf",
    rule: "what timing",
    description:
      "The fey of when and duration, determining the temporal aspects of transformation",
    domain: "Timing, duration, temporal windows, moments",
    manifestation:
      "Appears as cascading sand that falls upward and downward simultaneously, showing all possible moments",
    enforcement:
      "Transformation attempted outside its proper time window fails completely; rushed transformations corrupt, delayed ones dissipate",
    invocation:
      "Calling The Hourglass permits temporal manipulation—making transformations instant or eternal, retroactive or prophetic, or occurring at multiple times simultaneously across past and future",
  },
  {
    name: "The Lawkeeper",
    cosmicName: "gtr",
    rule: "what binding",
    description:
      "The fey of law and governance, enforcing the fundamental principles that all transformations must obey",
    domain: "Laws, governance, binding rules, cosmic principles",
    manifestation:
      "Appears as chains of pure light that connect all things, showing the laws that bind reality together",
    enforcement:
      "No transformation can violate cosmic law; attempts to break fundamental principles cause reality to erase the transformation and its source",
    invocation:
      "Calling The Lawkeeper is the most dangerous invocation—it allows temporary suspension or rewriting of cosmic laws themselves, making the impossible briefly possible, but at catastrophic risk to reality's fabric",
  },
];
