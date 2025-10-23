import {
  Essences,
  Cycle,
  Structures,
  CosmicDynamism,
  CosmicFondation,
  ScripturgicBeings,
} from "../../../data/cosmologicalAspects";
import { Demons } from "../../../data/Demons";
import { Fey } from "../../../data/fey";
import { useState } from "react";
import { Angels } from "../../../data/Angels";
const essenceNames = Object.keys(Essences);
const cycleNames = Object.keys(Cycle);
const structureNames = Object.keys(Structures);
const cosmicFoundationNames: string[] = Object.keys(CosmicFondation).map(
  (key) => CosmicFondation[key as keyof typeof CosmicFondation].scripturgicName
);
const cosmicDynamismNames: string[] = Object.keys(CosmicDynamism).map(
  (key) => CosmicDynamism[key as keyof typeof CosmicDynamism].CosmicName
);
const allNames = [
  ...essenceNames,
  ...cycleNames,
  ...structureNames,
  ...cosmicFoundationNames,
  ...cosmicDynamismNames,
];

const getSuffix = (name: string): string => {
  const { suffixes } = ScripturgicBeings.ELEMENTALS;
  if (cosmicFoundationNames.includes(name)) return Object.keys(suffixes)[0];
  if (cosmicDynamismNames.includes(name)) return Object.keys(suffixes)[1];
  if (essenceNames.includes(name)) return Object.keys(suffixes)[2];
  if (cycleNames.includes(name)) return Object.keys(suffixes)[3];
  if (structureNames.includes(name)) return Object.keys(suffixes)[4];
  return "";
};

const cosmicFoundationDescriptions = Object.keys(CosmicFondation).reduce(
  (acc, key) => {
    const item = CosmicFondation[key as keyof typeof CosmicFondation];
    acc[item.scripturgicName] = `${key} - ${item.cosmologicalRole}`;
    return acc;
  },
  {} as Record<string, string>
);

const cosmicDynamismDescriptions = Object.keys(CosmicDynamism).reduce(
  (acc, key) => {
    const item = CosmicDynamism[key as keyof typeof CosmicDynamism];
    acc[item.CosmicName] = `${item.name} - ${item.energyType}`;
    return acc;
  },
  {} as Record<string, string>
);

const allDescriptions = {
  ...Essences,
  ...Cycle,
  ...Structures,
  ...cosmicFoundationDescriptions,
  ...cosmicDynamismDescriptions,
};
const ElementalNaming = () => {
  const { ELEMENTALS } = ScripturgicBeings;
  const elementalVowels = ELEMENTALS.vowelsSets;
  const [hoveringEntity, setHoveringEntity] = useState<{
    name: string;
    meaning: string;
  } | null>(null);
  const handleHover = (name: string, meaning: string) => {
    setHoveringEntity({ name, meaning });
  };
  const handleLeave = () => {
    setHoveringEntity(null);
  };
  return (
    <div className="cosmology-page">
      <h2 className="being-title">ELEMENTALS</h2>
      <div className="cosmic-entities">
        {allNames.map((name) => (
          <div
            key={name}
            className={`cosmic-entity cosmic-name`}
            onMouseEnter={() => handleHover(name, ELEMENTALS.description)}
            onMouseLeave={handleLeave}
          >
            {name[0] +
              elementalVowels[0] +
              name[1] +
              elementalVowels[1] +
              name[2] +
              elementalVowels[2] +
              getSuffix(name)}
          </div>
        ))}
      </div>
      {hoveringEntity && (
        <div
          className="cosmic-meaning-display"
          dangerouslySetInnerHTML={{
            __html:
              "elemental of " +
              allDescriptions[
                hoveringEntity.name as keyof typeof allDescriptions
              ] +
              ` |${
                (hoveringEntity.name as string)[0] +
                elementalVowels[0] +
                (hoveringEntity.name as string)[1] +
                elementalVowels[1] +
                (hoveringEntity.name as string)[2] +
                elementalVowels[2] +
                getSuffix(hoveringEntity.name)
              }|`,
          }}
        />
      )}
    </div>
  );
};
const AngelsSection = () => {
  const [hoveringEntity, setHoveringEntity] = useState<{
    name: string;
    meaning: string;
    cosmicName: string;
  } | null>(null);
  const handleHover = (name: string, meaning: string, cosmicName: string) => {
    setHoveringEntity({ name, meaning, cosmicName });
  };
  const handleLeave = () => {
    setHoveringEntity(null);
  };
  return (
    <div className="cosmology-page">
      <h2 className="being-title">Angels</h2>
      <div className="cosmic-entities">
        {Angels.map((angel) => (
          <div
            key={angel.name}
            className="cosmic-entity cosmic-name"
            onMouseEnter={() =>
              handleHover(angel.name, angel.description, angel.cosmicName)
            }
            onMouseLeave={handleLeave}
          >
            {angel.cosmicName}
          </div>
        ))}
      </div>
      {hoveringEntity && (
        <div
          className="cosmic-meaning-display"
          dangerouslySetInnerHTML={{
            __html:
              hoveringEntity.name +
              " - " +
              hoveringEntity.meaning +
              ` |${hoveringEntity.cosmicName}|`,
          }}
        />
      )}
    </div>
  );
};
const FeySection = () => {
  const [hoveringEntity, setHoveringEntity] = useState<{
    name: string;
    meaning: string;
    cosmicName: string;
  } | null>(null);
  const handleHover = (name: string, meaning: string, cosmicName: string) => {
    setHoveringEntity({ name, meaning, cosmicName });
  };
  const handleLeave = () => {
    setHoveringEntity(null);
  };
  const { FEY } = ScripturgicBeings;
  const feyVowels = FEY.vowelsSets;
  return (
    <div className="cosmology-page">
      <h2 className="being-title">Fey</h2>
      <div className="cosmic-entities">
        {Fey.map((fey) => (
          <div
            key={fey.name}
            className="cosmic-entity cosmic-name"
            onMouseEnter={() =>
              handleHover(fey.name, fey.description, fey.cosmicName)
            }
            onMouseLeave={handleLeave}
          >
            {fey.cosmicName[0] +
              feyVowels[0] +
              fey.cosmicName[1] +
              feyVowels[1] +
              fey.cosmicName[2] +
              feyVowels[2]}
          </div>
        ))}
      </div>
      {hoveringEntity && (
        <div
          className="cosmic-meaning-display"
          dangerouslySetInnerHTML={{
            __html:
              hoveringEntity.name +
              " - " +
              hoveringEntity.meaning +
              ` |${hoveringEntity.cosmicName}|`,
          }}
        />
      )}
    </div>
  );
};
const DemonsSection = () => {
  const [hoveringEntity, setHoveringEntity] = useState<{
    name: string;
    meaning: string;
    cosmicName: string;
  } | null>(null);

  const handleHover = (name: string, meaning: string, cosmicName: string) => {
    setHoveringEntity({ name, meaning, cosmicName });
  };

  const handleLeave = () => {
    setHoveringEntity(null);
  };

  const { DEMONS } = ScripturgicBeings;
  const demonSuffix = DEMONS.suffix;
  const demonPrefixes = DEMONS.preffixes;

  const getDemonPrefix = (classification: string): string => {
    if (classification === "Filling Voids of Emotion and Desire")
      return Object.keys(demonPrefixes)[0];
    if (classification === "Filling Voids of Fear and Anxiety")
      return Object.keys(demonPrefixes)[1];
    if (classification === "Filling Voids of Meaning and Identity")
      return Object.keys(demonPrefixes)[2];
    if (classification === "Filling Voids of Hardship and Suffering")
      return Object.keys(demonPrefixes)[3];
    return "";
  };

  return (
    <div className="cosmology-page">
      <h2 className="being-title">Demons</h2>
      <div className="cosmic-entities">
        {Demons.map((demon) => {
          const prefix = getDemonPrefix(demon.classification);
          const cosmicName = prefix + demon.cosmicName + demonSuffix;
          return (
            <div
              key={demon.name}
              className="cosmic-entity cosmic-name"
              onMouseEnter={() =>
                handleHover(demon.name, demon.description, cosmicName)
              }
              onMouseLeave={handleLeave}
            >
              {cosmicName}
            </div>
          );
        })}
      </div>
      {hoveringEntity && (
        <div
          className="cosmic-meaning-display"
          dangerouslySetInnerHTML={{
            __html:
              hoveringEntity.name +
              " - " +
              hoveringEntity.meaning +
              ` |${hoveringEntity.cosmicName}|`,
          }}
        />
      )}
    </div>
  );
};
export const CosmologicalEntities = () => {
  console.log(allNames);
  return (
    <div className="cosmology-page">
      <h1>Cosmological Entities</h1>
      <ElementalNaming />
      <AngelsSection />
      <FeySection />
      <DemonsSection />
    </div>
  );
};
