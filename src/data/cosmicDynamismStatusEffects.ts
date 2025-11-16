// Status Effects for Cosmic Dynamism Forces
// Each cosmic force manifests through specific status effects that alter body and soul

export type DamageType = "HP" | "MP" | "MENTAL" | "SPIRIT";
export type DamageTiming = "turnStart" | "duringAction" | "both";
export type DamageScaling = "constant" | "increasing" | "percentage";
export type RemovalMethod = "curable" | "dissipates" | "both";

export interface StatusEffect {
  name: string;
  damageType?: DamageType;
  damageTiming?: DamageTiming;
  damageScaling?: DamageScaling;
  damageValue?: string; // e.g., "%HP * stack", "%maxHP", "fixed damage"
  removalMethod: RemovalMethod;
  specialProperties?: string[];
  description: string;
}

export const CosmicDynamismStatusEffects = {
  UP: {
    forceName: "Up",
    cosmicName: "ʁpm",
    description: "The upward force - body and soul evaporate over time",
    statusEffects: {
      bleed: {
        name: "bleed",
        damageType: "HP",
        damageTiming: "duringAction",
        damageScaling: "constant",
        damageValue: "%HP * stack",
        removalMethod: "curable",
        specialProperties: ["stack"],
        description:
          "HP damage over time (during action), stack, curable only [constant, %HP * stack]",
      },
      infected: {
        name: "infected",
        damageType: "HP",
        damageTiming: "turnStart",
        damageScaling: "constant",
        damageValue: "%maxHP",
        removalMethod: "curable",
        specialProperties: ["3 distinct forms"],
        description:
          "HP damage over time (at turn start), curable only, 3 distinct forms [constant, %maxHP]",
      },
      poisoned: {
        name: "poisoned",
        damageType: "HP",
        damageTiming: "both",
        damageScaling: "constant",
        damageValue: "fixed damage",
        removalMethod: "dissipates",
        description:
          "HP damage over time (at turn start, during action), dissipate after a time [constant, fixed damage]",
      },
      burning: {
        name: "burning",
        damageType: "HP",
        damageTiming: "turnStart",
        damageScaling: "increasing",
        damageValue: "fixed damage",
        removalMethod: "dissipates",
        specialProperties: ["%luck dissipate after strike/attack"],
        description:
          "HP damage over time (at turn start), dissipate after a time, %luck dissipate after a strike/attack [increasing, fixed damage]",
      },
      terrified: {
        name: "terrified",
        damageType: "MP",
        damageTiming: "turnStart",
        damageScaling: "constant",
        damageValue: "fixed damage",
        removalMethod: "dissipates",
        description:
          "MP damage over time (at turn start), dissipate after a time [constant, fixed damage]",
      },
      dissipated: {
        name: "dissipated",
        damageType: "MP",
        damageTiming: "both",
        damageScaling: "constant",
        damageValue: "fixed damage",
        removalMethod: "dissipates",
        description:
          "MP damage over time (at turn start, during action), dissipate after a time [constant, fixed damage]",
      },
      // New UP mental/spirit effects
      unmoored: {
        name: "unmoored",
        damageType: "SPIRIT",
        damageTiming: "turnStart",
        damageScaling: "constant",
        damageValue: "fixed shift toward -",
        removalMethod: "dissipates",
        specialProperties: ["affects SPIRIT (-50..50)", "clamped"],
        description:
          "SPIRIT evaporates upward over time (at turn start), shifting toward - values, dissipates after a time",
      },
      fadedWill: {
        name: "fadedWill",
        damageType: "MENTAL",
        damageTiming: "turnStart",
        damageScaling: "constant",
        damageValue: "fixed shift toward -",
        removalMethod: "dissipates",
        specialProperties: ["affects MENTAL (-50..50)", "clamped"],
        description:
          "MENTAL clarity evaporates over time (at turn start), shifting toward - values, dissipates after a time",
      },
    },
  },
  DOWN: {
    forceName: "Down",
    cosmicName: "wfg",
    description: "The downward force - body and soul abilities sink",
    statusEffects: {
      stunned: {
        name: "stunned",
        removalMethod: "dissipates",
        specialProperties: ["cannot move or act", "stack", "short duration"],
        description:
          "Action impairing - cannot move or act, short duration, stacks (multiple stuns extend duration), dissipates after a time",
      },
      weakened: {
        name: "weakened",
        removalMethod: "dissipates",
        specialProperties: ["reduced attack", "stack"],
        description:
          "Debuff - reduced attack, stacks (multiple applications increase reduction), dissipates after a time",
      },
      vulnerable: {
        name: "vulnerable",
        removalMethod: "dissipates",
        specialProperties: ["reduced defense", "stack"],
        description:
          "Debuff - reduced defense, stacks (multiple applications increase reduction), dissipates after a time",
      },
      exhausted: {
        name: "exhausted",
        removalMethod: "dissipates",
        specialProperties: ["reduced abilities", "stack"],
        description:
          "Debuff - reduced abilities, stacks (multiple applications increase reduction), dissipates after a time",
      },
      drained: {
        name: "drained",
        damageType: "MP",
        damageTiming: "duringAction",
        damageScaling: "constant",
        damageValue: "fixed damage * stack",
        removalMethod: "dissipates",
        specialProperties: ["MP loss when struck", "stack"],
        description:
          "MP loss when struck/attacked, stacks (multiple applications increase MP loss), dissipates after a time [constant, fixed damage * stack]",
      },
      crackling: {
        name: "crackling",
        damageType: "HP",
        damageTiming: "when attacked",
        damageScaling: "constant",
        damageValue: "fixed damage * stack",
        removalMethod: "dissipates",
        specialProperties: ["stack"],
        description: "receives fixed damage when attacked",
      },
      quake: {
        name: "quake",
        damageType: "MP",
        damageTiming: "when attacked",
        damageScaling: "percentage",
        damageValue: "%damage as MP damage",
        removalMethod: "dissipates",
        specialProperties: [
          "stack",
          "at 5 stacks triggers deepquake (burst %HP damage)",
        ],
        description:
          "Debuff - when taking damage, receives % of that damage as MP damage(10 damage -> 10 damage +1 MP damage), stacks (at 5 stacks triggers deepquake: burst of %HP damage), dissipates after a time [percentage, %damage as MP damage]",
      },
      // New DOWN mental/spirit effects
      shaken: {
        name: "shaken",
        damageType: "MENTAL",
        damageTiming: "turnStart, when attacked",
        damageScaling: "constant",
        damageValue: "fixed shift toward -",
        removalMethod: "dissipates",
        specialProperties: ["affects MENTAL (-50..50)", "stack", "clamped"],
        description:
          "MENTAL stability sinks each turn, stacking to intensify the negative shift; dissipates after a time",
      },
      hollowed: {
        name: "hollowed",
        damageType: "SPIRIT",
        damageTiming: "turnStart, when attacked",
        damageScaling: "constant",
        damageValue: "fixed shift toward -",
        removalMethod: "dissipates",
        specialProperties: ["affects SPIRIT (-50..50)", "stack", "clamped"],
        description:
          "SPIRIT feels emptied each turn, stacking to deepen loss; dissipates after a time",
      },
    },
  },
  IN: {
    forceName: "In",
    cosmicName: "dgk",
    description: "The inward force - body and soul harden",
    statusEffects: {
      strengthened: {
        name: "strengthened",
        removalMethod: "dissipates",
        specialProperties: ["increased physical attack", "stack"],
        description:
          "Self buff - increased physical attack power, stacks (multiple applications increase attack), dissipates after a time",
      },
      fortified: {
        name: "fortified",
        removalMethod: "dissipates",
        specialProperties: ["increased defense stat", "stack"],
        description:
          "Self buff - increased defense stat (flat value), stacks (multiple applications increase defense), dissipates after a time",
      },
      empowered: {
        name: "empowered",
        removalMethod: "dissipates",
        specialProperties: [
          "increased spell power",
          "increased magic damage",
          "stack",
        ],
        description:
          "Self buff - increased spell power and magic damage, stacks (multiple applications increase power), dissipates after a time",
      },
      regenerating: {
        name: "regenerating",
        damageType: "HP",
        damageTiming: "turnStart",
        damageScaling: "constant",
        damageValue: "fixed healing",
        removalMethod: "dissipates",
        specialProperties: ["HP regeneration"],
        description:
          "Self buff - HP regeneration over time (at turn start), dissipates after a time [constant, fixed healing]",
      },
      shielded: {
        name: "shielded",
        removalMethod: "dissipates",
        specialProperties: ["temporary barrier", "absorbs damage"],
        description:
          "Self buff - temporary barrier that absorbs damage before HP, dissipates after a time",
      },
      hardened: {
        name: "hardened",
        removalMethod: "dissipates",
        specialProperties: ["percentage damage reduction"],
        description:
          "Self buff - percentage-based damage reduction (reduces all incoming damage by %), dissipates after a time",
      },
      focused: {
        name: "focused",
        removalMethod: "dissipates",
        specialProperties: [
          "increased accuracy",
          "increased critical chance",
          "stack",
        ],
        description:
          "Self buff - increased accuracy and critical hit chance, stacks (multiple applications increase accuracy/crit), dissipates after a time",
      },
      energized: {
        name: "energized",
        damageType: "MP",
        damageTiming: "turnStart",
        damageScaling: "constant",
        damageValue: "fixed healing",
        removalMethod: "dissipates",
        specialProperties: ["MP regeneration"],
        description:
          "Self buff - MP regeneration over time (at turn start), dissipates after a time [constant, fixed healing]",
      },
      // New IN mental/spirit buffs
      centered: {
        name: "centered",
        damageType: "MENTAL",
        damageTiming: "turnStart",
        damageScaling: "constant",
        damageValue: "fixed shift toward +",
        removalMethod: "dissipates",
        specialProperties: ["affects MENTAL (-50..50)", "stack", "clamped"],
        description:
          "Self buff - MENTAL composure rises each turn toward +, stacks to increase rate; dissipates after a time",
      },
      ensouled: {
        name: "ensouled",
        damageType: "SPIRIT",
        damageTiming: "turnStart",
        damageScaling: "constant",
        damageValue: "fixed shift toward +",
        removalMethod: "dissipates",
        specialProperties: ["affects SPIRIT (-50..50)", "stack", "clamped"],
        description:
          "Self buff - SPIRIT deepens each turn toward +, stacks to increase rate; dissipates after a time",
      },
    },
  },
  OUT: {
    forceName: "Out",
    cosmicName: "svḱ",
    description: "The outward force - body and soul influence expend",
    statusEffects: {
      inspiring: {
        name: "inspiring",
        removalMethod: "dissipates",
        specialProperties: [
          "buffs allies",
          "increased attack to nearby allies",
          "stack",
        ],
        description:
          "Buff to others - increases attack power of nearby allies, stacks (multiple applications increase effect or affect more allies), dissipates after a time",
      },
      protective: {
        name: "protective",
        removalMethod: "dissipates",
        specialProperties: [
          "buffs allies",
          "increased defense to nearby allies",
          "stack",
        ],
        description:
          "Buff to others - increases defense of nearby allies, stacks (multiple applications increase effect or affect more allies), dissipates after a time",
      },
      supportive: {
        name: "supportive",
        removalMethod: "dissipates",
        specialProperties: ["buffs allies", "regeneration to nearby allies"],
        description:
          "Buff to others - provides light HP regeneration to nearby allies, dissipates after a time",
      },
      evasive: {
        name: "evasive",
        removalMethod: "dissipates",
        specialProperties: ["increased dodge", "escape ability"],
        description:
          "Self buff - increased dodge chance and escape ability, dissipates after a time",
      },
      precise: {
        name: "precise",
        removalMethod: "dissipates",
        specialProperties: ["increased precision", "increased range"],
        description:
          "Self buff - increased precision and attack range, dissipates after a time",
      },
      haste: {
        name: "haste",
        removalMethod: "dissipates",
        specialProperties: [
          "increased action speed",
          "decreased action cooldown",
          "stack",
        ],
        description:
          "Self buff - increased action speed, decreased action cooldown, stacks (multiple applications increase speed), dissipates after a time",
      },
      expansive: {
        name: "expansive",
        removalMethod: "dissipates",
        specialProperties: [
          "increased area of effect",
          "increased influence radius",
        ],
        description:
          "Self buff - increased area of effect and influence radius for abilities, dissipates after a time",
      },
      commanding: {
        name: "commanding",
        removalMethod: "dissipates",
        specialProperties: [
          "buffs allies",
          "increased abilities to nearby allies",
          "stack",
        ],
        description:
          "Buff to others - increases abilities of nearby allies, stacks (multiple applications increase effect or affect more allies), dissipates after a time",
      },
      // New OUT ally mental/spirit buffs
      rallied: {
        name: "rallied",
        damageType: "MENTAL",
        damageTiming: "turnStart",
        damageScaling: "constant",
        damageValue: "fixed shift toward +",
        removalMethod: "dissipates",
        specialProperties: [
          "buffs allies",
          "affects MENTAL (-50..50)",
          "stack",
          "clamped",
        ],
        description:
          "Buff to others - nearby allies' MENTAL rises each turn toward +, stacks to increase rate; dissipates after a time",
      },
      inspired: {
        name: "inspired",
        damageType: "SPIRIT",
        damageTiming: "turnStart",
        damageScaling: "constant",
        damageValue: "fixed shift toward +",
        removalMethod: "dissipates",
        specialProperties: [
          "buffs allies",
          "affects SPIRIT (-50..50)",
          "stack",
          "clamped",
        ],
        description:
          "Buff to others - nearby allies' SPIRIT rises each turn toward +, stacks to increase rate; dissipates after a time",
      },
    },
  },
  BETWEEN: {
    forceName: "Between",
    cosmicName: "brf",
    description:
      "The force that transitions the universe - body and soul are shared into a common pool",
    statusEffects: {
      linked: {
        name: "linked",
        removalMethod: "dissipates",
        specialProperties: ["shared damage between attacker and attacked"],
        description:
          "Sharing effect - damage dealt is shared between attacker and target, dissipates after a time",
      },
      bonded: {
        name: "bonded",
        removalMethod: "dissipates",
        specialProperties: ["shared healing between healer and healed"],
        description:
          "Sharing effect - healing provided is shared between healer and target, dissipates after a time",
      },
      connected: {
        name: "connected",
        removalMethod: "dissipates",
        specialProperties: ["damage taken is distributed to nearby allies"],
        description:
          "Sharing effect - damage taken is shared between target and nearby allies, dissipates after a time",
      },
      pooled: {
        name: "pooled",
        removalMethod: "dissipates",
        specialProperties: ["ability costs shared with nearby allies"],
        description:
          "Sharing effect - ability costs are divided and shared with nearby allies, dissipates after a time",
      },
      balanced: {
        name: "balanced",
        removalMethod: "dissipates",
        specialProperties: ["cost divided between resources"],
        description:
          "Sharing effect - ability costs can be paid with either HP or MP interchangeably, dissipates after a time",
      },
      // New BETWEEN mental/spirit sharing
      sharedResolve: {
        name: "sharedResolve",
        removalMethod: "dissipates",
        specialProperties: ["MENTAL shifts are shared among linked allies"],
        description:
          "Sharing effect - MENTAL increases or decreases applied to one linked ally are proportionally shared with others, dissipates after a time",
      },
      sharedSpirit: {
        name: "sharedSpirit",
        removalMethod: "dissipates",
        specialProperties: ["SPIRIT shifts are shared among linked allies"],
        description:
          "Sharing effect - SPIRIT increases or decreases applied to one linked ally are proportionally shared with others, dissipates after a time",
      },
    },
  },
} as const;
