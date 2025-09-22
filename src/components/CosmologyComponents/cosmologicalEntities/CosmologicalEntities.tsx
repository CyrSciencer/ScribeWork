import {
  PrimaryTriad,
  Field,
  Cycle,
  Logics,
  CosmicDynamism,
  cosmicFondation,
  ScripturgicBeings,
} from "../../../data/cosmologicalBeings";
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
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const EntityDisplay = ({
  rootWord,
  vowelSet,
  meaning,
  entityType,
}: EntityProps) => {
  const [hoveringEntity, setHoveringEntity] = useState<string | null>(null);
  const fullName =
    rootWord[0] +
    vowelSet[0] +
    rootWord[1] +
    vowelSet[1] +
    rootWord[2] +
    vowelSet[2];

  return (
    <div>
      <div
        className="cosmic-entity"
        onMouseEnter={() => setHoveringEntity(rootWord)}
        onMouseLeave={() => setHoveringEntity(null)}
      >
        <div className="cosmic-name scribe-font">{fullName}</div>
      </div>
      {hoveringEntity === rootWord && (
        <div className="cosmic-meaning">
          {entityType} of {meaning}
        </div>
      )}
    </div>
  );
};

// Component for entity group display
interface EntityGroupProps {
  data: CosmologicalData | CosmicDynamismData | CosmicFoundationData;
  vowelSet: string[];
  entityType: string;
  onMouseEnter: (key: string) => void;
  onMouseLeave: () => void;
  isDynamism?: boolean;
  isFoundation?: boolean;
}

const EntityGroup = ({
  data,
  vowelSet,
  entityType,
  onMouseEnter,
  onMouseLeave,
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
            onMouseEnter={() => onMouseEnter(key)}
            onMouseLeave={onMouseLeave}
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
  onMouseEnter: (key: string) => void;
  onMouseLeave: () => void;
}

const ScripturgicBeingSection = ({
  title,
  vowelSet,
  onMouseEnter,
  onMouseLeave,
}: ScripturgicBeingSectionProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="cosmic-entities">
        <EntityGroup
          data={PrimaryTriad}
          vowelSet={vowelSet}
          entityType={title.toLowerCase().slice(0, -1)}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
        <EntityGroup
          data={Field}
          vowelSet={vowelSet}
          entityType={title.toLowerCase().slice(0, -1)}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
        <EntityGroup
          data={Cycle}
          vowelSet={vowelSet}
          entityType={title.toLowerCase().slice(0, -1)}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
        <EntityGroup
          data={Logics}
          vowelSet={vowelSet}
          entityType={title.toLowerCase().slice(0, -1)}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
        <EntityGroup
          data={CosmicDynamism}
          vowelSet={vowelSet}
          entityType={title.toLowerCase().slice(0, -1)}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          isDynamism={true}
        />
        <EntityGroup
          data={cosmicFondation}
          vowelSet={vowelSet}
          entityType={title.toLowerCase().slice(0, -1)}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          isFoundation={true}
        />
      </div>
    </div>
  );
};

export const CosmologicalEntities = () => {
  const { ANGELS, DEMONS, FEY, ELEMENTALS } = ScripturgicBeings;
  // eslint-disable-next-line
  const [hoveringEntity, setHoveringEntity] = useState<string | null>(null);
  return (
    <div>
      <ScripturgicBeingSection
        title="Angels"
        vowelSet={ANGELS.vowelsSets as unknown as string[]}
        onMouseEnter={(key: string) => setHoveringEntity(key)}
        onMouseLeave={() => setHoveringEntity(null)}
      />
      <ScripturgicBeingSection
        title="Demons"
        vowelSet={DEMONS.vowelsSets as unknown as string[]}
        onMouseEnter={(key: string) => setHoveringEntity(key)}
        onMouseLeave={() => setHoveringEntity(null)}
      />
      <ScripturgicBeingSection
        title="Fey"
        vowelSet={FEY.vowelsSets as unknown as string[]}
        onMouseEnter={(key: string) => setHoveringEntity(key)}
        onMouseLeave={() => setHoveringEntity(null)}
      />
      <ScripturgicBeingSection
        title="Elementals"
        vowelSet={ELEMENTALS.vowelsSets as unknown as string[]}
        onMouseEnter={(key: string) => setHoveringEntity(key)}
        onMouseLeave={() => setHoveringEntity(null)}
      />
    </div>
  );
};
