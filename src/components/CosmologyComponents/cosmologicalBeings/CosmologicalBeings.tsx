import {
  DivinePrinciple,
  PrimaryTriad,
  Field,
  Cycle,
  Logics,
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

const BeingDisplay = ({ rootWord, meaning, className = "" }: BeingProps) => {
  const formattedName =
    rootWord[0] + "'" + rootWord[1] + "'" + rootWord[2] + "'";
  const [hoveringEntity, setHoveringEntity] = useState<string | null>(null);
  return (
    <div>
      <div
        key={rootWord}
        className={`cosmic-entity ${className}`}
        onMouseEnter={() => setHoveringEntity(rootWord)}
        onMouseLeave={() => setHoveringEntity(null)}
      >
        <span className="cosmic-name">{formattedName}</span>
      </div>
      {hoveringEntity === rootWord && (
        <div className="cosmic-meaning">{meaning}</div>
      )}
    </div>
  );
};

// Component for being group display
interface BeingGroupProps {
  data: CosmologicalData | CosmicDynamismData | CosmicFoundationData;
  isDynamism?: boolean;
  isFoundation?: boolean;
}

const BeingGroup = ({ data, isDynamism, isFoundation }: BeingGroupProps) => {
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

        return <BeingDisplay key={key} rootWord={rootWord} meaning={meaning} />;
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
}

const CosmologicalSection = ({
  title,
  data,
  className = "",
  isDynamism,
  isFoundation,
}: CosmologicalSectionProps) => {
  return (
    <section className={className}>
      <h2>{title}</h2>
      <BeingGroup
        data={data}
        isDynamism={isDynamism}
        isFoundation={isFoundation}
      />
    </section>
  );
};

// Component for scripturgic beings section
const ScripturgicBeingsSection = () => {
  const [hoveringEntity, setHoveringEntity] = useState<string | null>(null);
  return (
    <section className="scripturgic-beings">
      <h2>Scripturgic Beings</h2>
      <div className="cosmic-entities">
        {Object.entries(ScripturgicBeings).map(([key, value]) => (
          <div>
            <div
              key={key}
              className="cosmic-entity"
              onMouseEnter={() => setHoveringEntity(key)}
              onMouseLeave={() => setHoveringEntity(null)}
            >
              <div className="vowel-sets">
                {value.vowelsSets.map((vowel: string, index: number) => (
                  <div key={index} className="cosmic-vowel">
                    {"h" + vowel}
                  </div>
                ))}
              </div>
            </div>
            {hoveringEntity === key && (
              <div className="cosmic-meaning" style={{ left: "100px" }}>
                {key}: {value.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const CosmologicalBeings = () => {
  return (
    <div className="cosmology-page">
      <h1>Cosmological Beings</h1>

      <div className="cosmology-sections">
        <CosmologicalSection
          title="Divine Principle"
          data={DivinePrinciple}
          className="divine-principle"
        />

        <CosmologicalSection
          title="Primary Triad"
          data={PrimaryTriad}
          className="primary-triad"
        />

        <CosmologicalSection title="Field" data={Field} className="field" />

        <CosmologicalSection title="Cycle" data={Cycle} className="cycle" />

        <CosmologicalSection title="Logics" data={Logics} className="logics" />
        <CosmologicalSection
          title="Daemons"
          data={DaemonOrder}
          className="daemons"
        />
        <CosmologicalSection
          title="Cosmic Dynamism"
          data={CosmicDynamism}
          className="cosmic-dynamism"
          isDynamism={true}
        />

        <CosmologicalSection
          title="Cosmic Foundation"
          data={cosmicFondation}
          className="cosmic-foundation"
          isFoundation={true}
        />

        <ScripturgicBeingsSection />
      </div>
    </div>
  );
};

export default CosmologicalBeings;
