import {
  DivinePrinciple,
  PrimaryTriad,
  Essences,
  Cycle,
  Structures,
  CosmicDynamism,
  cosmicFondation,
  ScripturgicBeings,
  DaemonOrder,
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

// Component for individual being display
interface BeingProps {
  rootWord: string;
  meaning: string;
  className?: string;
}

interface BeingDisplayProps extends BeingProps {
  onHover: (rootWord: string, meaning: string) => void;
  onLeave: () => void;
}

const BeingDisplay = ({
  rootWord,
  meaning,
  className = "",
  onHover,
  onLeave,
}: BeingDisplayProps) => {
  const formattedName =
    rootWord[0] + "'" + rootWord[1] + "'" + rootWord[2] + "'";
  return (
    <div
      key={rootWord}
      className={`cosmic-entity ${className}`}
      onMouseEnter={() => onHover(formattedName, meaning)}
      onMouseLeave={onLeave}
    >
      <span className="cosmic-name">{formattedName}</span>
    </div>
  );
};

// Component for being group display
interface BeingGroupProps {
  data: CosmologicalData | CosmicDynamismData | CosmicFoundationData;
  isDynamism?: boolean;
  isFoundation?: boolean;
  onHover: (rootWord: string, meaning: string) => void;
  onLeave: () => void;
}

const BeingGroup = ({
  data,
  isDynamism,
  isFoundation,
  onHover,
  onLeave,
}: BeingGroupProps) => {
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
          meaning = `${dynamismValue.name} - ${dynamismValue.energyType}`;
        } else if (isFoundation) {
          const foundationValue = value as {
            scripturgicName: string;
            cosmologicalRole: string;
          };
          rootWord = foundationValue.scripturgicName;
          meaning = `${key} - ${foundationValue.cosmologicalRole}`;
        } else {
          rootWord = key;
          meaning = value as string;
        }

        return (
          <BeingDisplay
            key={key}
            rootWord={rootWord}
            meaning={meaning}
            onHover={onHover}
            onLeave={onLeave}
          />
        );
      })}
    </div>
  );
};

// Component for cosmological section
interface CosmologicalSectionProps {
  title: string;
  data: CosmologicalData | CosmicDynamismData | CosmicFoundationData;
  className?: string;
  isDynamism?: boolean;
  isFoundation?: boolean;
  onHover: (rootWord: string, meaning: string) => void;
  onLeave: () => void;
}

const CosmologicalSection = ({
  title,
  data,
  className = "",
  isDynamism,
  isFoundation,
  onHover,
  onLeave,
}: CosmologicalSectionProps) => {
  return (
    <section className={className}>
      <h2>{title}</h2>
      <BeingGroup
        data={data}
        isDynamism={isDynamism}
        isFoundation={isFoundation}
        onHover={onHover}
        onLeave={onLeave}
      />
    </section>
  );
};

// Component for scripturgic beings section
interface ScripturgicBeingsSectionProps {
  onHover: (rootWord: string, meaning: string) => void;
  onLeave: () => void;
}

const ScripturgicBeingsSection = ({
  onHover,
  onLeave,
}: ScripturgicBeingsSectionProps) => {
  return (
    <section className="scripturgic-beings">
      <h2>Scripturgic Beings</h2>
      <div className="cosmic-entities">
        {Object.entries(ScripturgicBeings).map(([key, value]) => (
          <div key={key}>
            <div
              className="cosmic-entity"
              onMouseEnter={() => onHover(key, value.description)}
              onMouseLeave={onLeave}
            >
              <div className="vowel-sets">
                {value.vowelsSets.map((vowel: string, index: number) => (
                  <div key={index} className="cosmic-vowel">
                    {"h" + vowel}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const CosmologicalBeings = () => {
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
      <h1>Cosmological Beings</h1>

      {hoveringEntity && (
        <div
          className="cosmic-meaning-display"
          dangerouslySetInnerHTML={{
            __html: hoveringEntity.meaning.replace(/\n/g, "<br>"),
          }}
        />
      )}

      <div className="cosmology-sections">
        <CosmologicalSection
          title="Divine Principle"
          data={DivinePrinciple}
          className="divine-principle"
          onHover={handleHover}
          onLeave={handleLeave}
        />

        <CosmologicalSection
          title="Primary Triad"
          data={PrimaryTriad}
          className="primary-triad"
          onHover={handleHover}
          onLeave={handleLeave}
        />

        <CosmologicalSection
          title="Essences"
          data={Essences}
          className="Essences"
          onHover={handleHover}
          onLeave={handleLeave}
        />

        <CosmologicalSection
          title="Cycle"
          data={Cycle}
          className="cycle"
          onHover={handleHover}
          onLeave={handleLeave}
        />

        <CosmologicalSection
          title="Structures"
          data={Structures}
          className="logics"
          onHover={handleHover}
          onLeave={handleLeave}
        />
        <CosmologicalSection
          title="Daemons"
          data={DaemonOrder}
          className="daemons"
          onHover={handleHover}
          onLeave={handleLeave}
        />
        <CosmologicalSection
          title="Cosmic Dynamism"
          data={CosmicDynamism}
          className="cosmic-dynamism"
          isDynamism={true}
          onHover={handleHover}
          onLeave={handleLeave}
        />

        <CosmologicalSection
          title="Cosmic Foundation"
          data={cosmicFondation}
          className="cosmic-foundation"
          isFoundation={true}
          onHover={handleHover}
          onLeave={handleLeave}
        />

        <ScripturgicBeingsSection onHover={handleHover} onLeave={handleLeave} />
      </div>
    </div>
  );
};

export default CosmologicalBeings;
