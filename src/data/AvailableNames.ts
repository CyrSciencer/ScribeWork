import { Angels } from "./Angels";
import { Conjurates } from "./Conjurates";
import {
  Essences,
  Cycle,
  Structures,
  CosmicFondation,
  CosmicDynamism,
} from "./cosmologicalAspects";
import { Demons } from "./Demons";
import { DivineBorn } from "./divineBorn";
import { Fey } from "./fey";

const elementalBases = [
  ...Object.keys(Essences),
  ...Object.keys(Cycle),
  ...Object.keys(Structures),
  ...Object.values(CosmicFondation).map((f) => f.scripturgicName),
  ...Object.values(CosmicDynamism).map((d) => d.CosmicName),
];

const elementalVowels = ["a", "éè", "ùé"];
const elementals = elementalBases.map(
  (name) =>
    `${name[0]}${elementalVowels[0]}${name[1]}${elementalVowels[1]}${name[2]}${elementalVowels[2]}péi`
);

const demonVowels = ["ù", "u", "õo"];
const demons = Demons.map(
  (demon) =>
    `${demon.cosmicName[0]}${demonVowels[0]}${demon.cosmicName[1]}${demonVowels[1]}${demon.cosmicName[2]}${demonVowels[2]}`
);

const feyVowels = ["o", "oã", "eé"];
const fey = Fey.map(
  (f) =>
    `${f.cosmicName[0]}${feyVowels[0]}${f.cosmicName[1]}${feyVowels[1]}${f.cosmicName[2]}${feyVowels[2]}`
);

const angels = Angels.map((a) => a.cosmicName);

const conjurates = Conjurates.map((c) => c.cosmicName);
const divineBorn = DivineBorn.map((d) => d.cosmicName);

export const categorizedCosmologyNames = {
  Elementals: elementals,
  Demons: demons,
  Fey: fey,
  Angels: angels,
  Conjurates: conjurates,
  "Divine Born": divineBorn,
};

export const cosmologyNames = [
  ...elementals,
  ...demons,
  ...fey,
  ...angels,
  ...conjurates,
  ...divineBorn,
].filter(Boolean);
