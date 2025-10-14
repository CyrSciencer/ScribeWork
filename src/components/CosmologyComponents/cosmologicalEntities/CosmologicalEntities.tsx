import {
  PrimaryTriad,
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
const data = {
  ...PrimaryTriad,
  ...Essences,
  ...Cycle,
  ...Structures,
};
const cosmicFoundation = Object.keys(CosmicFondation).map(
  (key) => CosmicFondation[key as keyof typeof CosmicFondation].scripturgicName
);
const cosmicDynamism = Object.keys(CosmicDynamism).map(
  (key) => CosmicDynamism[key as keyof typeof CosmicDynamism].CosmicName
);
const allNames = [...Object.keys(data), ...cosmicFoundation, ...cosmicDynamism];

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
  ...data,
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
      <h1 className="being-title">ELEMENTALS</h1>
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
              elementalVowels[2]}
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
              ],
          }}
        />
      )}
    </div>
  );
};
const ScripturgicBeingsSection = ({
  being,
  beingObject,
}: {
  being: keyof typeof ScripturgicBeings;
  beingObject: { name: string; cosmicName: string; description: string }[];
}) => {
  const beingVowels = ScripturgicBeings[being].vowelsSets;
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
  console.log({ beingObject });
  return (
    <div className="cosmology-page">
      <h1 className="being-title">{being}</h1>
      <div className={`cosmic-entities`}>
        {beingObject.map((being) => (
          <div
            key={being.name}
            className="cosmic-entity cosmic-name"
            onMouseEnter={() => handleHover(being.name, being.description)}
            onMouseLeave={handleLeave}
          >
            {being.cosmicName[0] +
              beingVowels[0] +
              being.cosmicName[1] +
              beingVowels[1] +
              being.cosmicName[2] +
              beingVowels[2]}
          </div>
        ))}
      </div>
      {hoveringEntity && (
        <div
          className="cosmic-meaning-display"
          dangerouslySetInnerHTML={{
            __html: hoveringEntity.name + " - " + hoveringEntity.meaning,
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
  } | null>(null);
  const handleHover = (name: string, meaning: string) => {
    setHoveringEntity({ name, meaning });
  };
  const handleLeave = () => {
    setHoveringEntity(null);
  };
  return (
    <div className="cosmology-page">
      <h1 className="being-title">Angels</h1>
      <div className="cosmic-entities">
        {Angels.map((angel) => (
          <div
            key={angel.name}
            className="cosmic-entity cosmic-name"
            onMouseEnter={() => handleHover(angel.name, angel.description)}
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
            __html: hoveringEntity.name + " - " + hoveringEntity.meaning,
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
      <ScripturgicBeingsSection being="DEMONS" beingObject={Demons} />
      <ScripturgicBeingsSection being="FEY" beingObject={Fey} />
      <AngelsSection />
    </div>
  );
};
