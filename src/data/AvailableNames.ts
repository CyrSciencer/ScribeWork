import { Conjurates } from "./Conjurates";
import { Demons } from "./Demons";
import { DivineBorn } from "./divineBorn";
import { Angels } from "./Angels";

const demons = Demons.map((demon) => demon.cosmicName);
const conjurates = Conjurates.map((c) => c.cosmicName);
const divineBorn = DivineBorn.map((d) => d.cosmicName);
const angels = Angels.map((a) => a.cosmicName);

export const categorizedCosmologyNames = {
  Angels: angels,
  Demons: demons,
  Conjurates: conjurates,
  "Divine Born": divineBorn,
};

export const cosmologyNames = [
  ...angels,
  ...demons,
  ...conjurates,
  ...divineBorn,
].filter(Boolean);
