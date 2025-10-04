import {
  PrimaryTriad,
  Essences,
  Cycle,
  Structures,
  CosmicDynamism,
  cosmicFondation,
  ScripturgicBeings,
} from "../../../data/cosmologicalAspects";
import { useState } from "react";

// Types for the cosmological data
type CosmologicalData = Record<string, string>;
type CosmicDynamismData = Record<
  string,
  { CosmicName: string; name: string; energyType: string }
>;
type CosmicFoundationData = Record<
  string,
  { scripturgicName: string; cosmologicalRole: string }
>;

// Component for individual entity display
interface EntityProps {
  rootWord: string;
  vowelSet: string[];
  meaning: string;
  entityType: string;
  onHover: (name: string, meaning: string) => void;
  onLeave: () => void;
}

const EntityDisplay = ({
  rootWord,
  vowelSet,
  meaning,
  entityType,
  onHover,
  onLeave,
}: EntityProps) => {
  const fullName =
    rootWord[0] +
    vowelSet[0] +
    rootWord[1] +
    vowelSet[1] +
    rootWord[2] +
    vowelSet[2];

  return (
    <div
      className="cosmic-entity"
      onMouseEnter={() => onHover(fullName, `${entityType} of ${meaning}`)}
      onMouseLeave={onLeave}
    >
      <div className="cosmic-name">{fullName}</div>
    </div>
  );
};

// Component for entity group display
interface EntityGroupProps {
  data: CosmologicalData | CosmicDynamismData | CosmicFoundationData;
  vowelSet: string[];
  entityType: string;
  onHover: (name: string, meaning: string) => void;
  onLeave: () => void;
  isDynamism?: boolean;
  isFoundation?: boolean;
}

const EntityGroup = ({
  data,
  vowelSet,
  entityType,
  onHover,
  onLeave,
  isDynamism,
  isFoundation,
}: EntityGroupProps) => {
  return (
    <div className="cosmic-entities">
      {Object.entries(data).map(([key, value]) => {
        let rootWord: string;
        let meaning: string;

        if (isDynamism) {
          const dynamismValue = value as {
            CosmicName: string;
            name: string;
            energyType: string;
          };
          rootWord = dynamismValue.CosmicName;
          meaning = dynamismValue.name;
        } else if (isFoundation) {
          const foundationValue = value as {
            scripturgicName: string;
            cosmologicalRole: string;
          };
          rootWord = foundationValue.scripturgicName;
          meaning = key; // Use the key (metal name) as meaning for foundation
        } else {
          rootWord = key;
          meaning = value as string;
        }

        return (
          <EntityDisplay
            key={key}
            rootWord={rootWord}
            vowelSet={vowelSet}
            meaning={meaning}
            entityType={entityType}
            onHover={onHover}
            onLeave={onLeave}
          />
        );
      })}
    </div>
  );
};

// Component for scripturgic being section
interface ScripturgicBeingSectionProps {
  title: string;
  vowelSet: string[];
  onHover: (name: string, meaning: string) => void;
  onLeave: () => void;
}

const ScripturgicBeingSection = ({
  title,
  vowelSet,
  onHover,
  onLeave,
}: ScripturgicBeingSectionProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="cosmic-entities">
        <EntityGroup
          data={PrimaryTriad}
          vowelSet={vowelSet}
          entityType={title.toLowerCase().slice(0, -1)}
          onHover={onHover}
          onLeave={onLeave}
        />
        <EntityGroup
          data={Essences}
          vowelSet={vowelSet}
          entityType={title.toLowerCase().slice(0, -1)}
          onHover={onHover}
          onLeave={onLeave}
        />
        <EntityGroup
          data={Cycle}
          vowelSet={vowelSet}
          entityType={title.toLowerCase().slice(0, -1)}
          onHover={onHover}
          onLeave={onLeave}
        />
        <EntityGroup
          data={Structures}
          vowelSet={vowelSet}
          entityType={title.toLowerCase().slice(0, -1)}
          onHover={onHover}
          onLeave={onLeave}
        />
        <EntityGroup
          data={CosmicDynamism}
          vowelSet={vowelSet}
          entityType={title.toLowerCase().slice(0, -1)}
          onHover={onHover}
          onLeave={onLeave}
          isDynamism={true}
        />
        <EntityGroup
          data={cosmicFondation}
          vowelSet={vowelSet}
          entityType={title.toLowerCase().slice(0, -1)}
          onHover={onHover}
          onLeave={onLeave}
          isFoundation={true}
        />
      </div>
    </div>
  );
};

export const CosmologicalEntities = () => {
  const { ELEMENTALS } = ScripturgicBeings;
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
      <h1>Cosmological Entities</h1>

      {hoveringEntity && (
        <div
          className="cosmic-meaning-display"
          dangerouslySetInnerHTML={{
            __html: hoveringEntity.meaning.replace(/\n/g, "<br>"),
          }}
        />
      )}

      <div className="cosmology-sections">
        <ScripturgicBeingSection
          title="Elementals"
          vowelSet={ELEMENTALS.vowelsSets as unknown as string[]}
          onHover={handleHover}
          onLeave={handleLeave}
        />
      </div>
    </div>
  );
};
