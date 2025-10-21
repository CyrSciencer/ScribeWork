export const spellcraft = {
  principles: {
    title: "Principles of Spellcraft",
    coreConcept:
      "Spells are 'cosmological recipes' that call upon one or more entities to achieve a desired effect. The more names included, the more complex, powerful, and potentially unstable the spell becomes. Successful spellcraft is an act of cosmological engineering.",
    orderOfInvocation:
      "The sequence in which beings are called matters. Typically, a spell is built from the ground up: establishing the foundation and materials (Elementals), introducing an agent of change (Divine Born, Demons), manipulating the laws governing the interaction (Fey), and petitioning a guardian to ensure stability (Angels).",
    powerVsStability:
      "Each name added to a spell increases its potential power but also introduces new variables and points of failure. Simple spells are reliable. Complex spells can reshape reality but risk catastrophic collapse if the caster loses control.",
  },
  spellTiers: {
    oneName: {
      title: "One-Name Spells: The Invocation",
      description:
        "The simplest form of magic. A single entity is called to perform its most direct function. These spells are highly reliable and predictable.",
      examples: [
        {
          name: "Simple Fire",
          components: ["Fire Elemental"],
          effect:
            "A straightforward summoning of fire. The resulting blaze is pure, natural, and follows the expected physical laws.",
        },
        {
          name: "A Petition for Justice",
          components: ["The 'Justice' Conjurate"],
          effect:
            "Invokes the archetypal energy of Justice to influence a situation, pushing events toward a fair and balanced outcome.",
        },
      ],
    },
    twoName: {
      title: "Two-Name Spells: The Combination",
      description:
        "Combines two entities to create a synergistic effect that is greater than the sum of its parts. This is the foundation of true craftsmanship in magic, requiring an understanding of how different cosmic forces interact.",
      examples: [
        {
          name: "Guided Growth",
          components: ["The Green Queen (Divine Born)", "Wood Elemental"],
          effect:
            "The Wood Elemental provides the raw essence of 'living energy', which the Green Queen then expertly shapes and guides, creating a vibrant, healthy plant or tree far faster than natural growth.",
        },
        {
          name: "A Binding Oath",
          components: ["The 'Justice' Conjurate", "The Lawkeeper (Fey)"],
          effect:
            "The Fey is invoked to make the 'rule' of the oath temporarily malleable, while the Justice Conjurate is called to witness and imbue the oath with archetypal weight, making it magically and conceptually unbreakable.",
        },
      ],
    },
    threeName: {
      title: "Three-Name Spells: The Trinity",
      description:
        "A complex and powerful form of spellcraft that typically involves a material, an agent, and a law or guardian. These spells can create permanent, reality-altering objects or effects. They require immense skill to balance.",
      examples: [
        {
          name: "Forging a Perfect Shield",
          components: [
            "The Ancestral Spark (Divine Born)",
            "Titanium Elemental",
            "Shaklim of Cosmic Foundation (Angel)",
          ],
          effect:
            "The Elemental provides the raw material of 'separation'. The Divine Born forges this material into a physical shield. The Angel is petitioned to oversee the process, ensuring the final shield is not just physically durable, but cosmically aligned with the very concept of an unbreakable barrier.",
          order:
            "1. Elemental (Material) -> 2. Divine Born (Agent) -> 3. Angel (Guardian)",
        },
      ],
    },
    fourName: {
      title: "Four-Name Spells: The Grand Design",
      description:
        "Exceedingly rare and dangerous spells that can bend the fundamental principles of existence. These often involve high-risk entities like Demons and require additional components to protect the caster and stabilize the effect. Failure often results in madness, death, or localized reality collapse.",
      examples: [
        {
          name: "A Glimpse of Forbidden Knowledge",
          components: [
            "The Limiter (Fey)",
            "The Void Seer (Demon)",
            "Wazifim of Inner Self (Angel)",
            "Earth Elemental",
          ],
          effect:
            "A spell to see a truth that exists outside of divine knowledge. The Fey creates a tiny, temporary breach in the veil of reality. The Demon is contracted to peer through it. The Angel is petitioned to guard the caster's mind from shattering. The Earth Elemental is summoned to keep the caster's physical body anchored to reality, preventing their consciousness from being lost.",
          order:
            "1. Earth Elemental (Anchor) -> 2. Angel (Guardian) -> 3. Fey (Rule Manipulation) -> 4. Demon (Agent)",
        },
      ],
    },
  },

  unleashingDaemons: {
    title: "Advanced Spellcraft: Unleashing Opposing Forces",
    description:
      "Daemons and Devils cannot be contracted in the traditional sense, as they are constant, opposing forces. A master spellcaster does not make a deal with them; they create the precise cosmological conditions to attract and direct their destructive nature.",
    example: {
      name: "Erasing a Cursed Artifact",
      steps: [
        "1. Invoke 'The Limiter' (Fey) to create an inescapable containment field around the artifact.",
        "2. Weave a secondary spell to disrupt the 'structure' (rtɲ) within the field, creating a 'cosmic vacuum'—a space devoid of divine order.",
        "3. The vacuum attracts the 'Daemon of Oblivion' (zʇc), which, in its constant opposition to structure, rushes in to unmake everything within the Fey-defined boundary.",
      ],
      risk: "Catastrophic failure if the containment boundary fails, potentially erasing the caster and everything nearby.",
    },
  },
};
