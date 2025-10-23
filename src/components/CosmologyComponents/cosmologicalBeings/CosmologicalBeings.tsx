import {
  DivinePrinciple,
  PrimaryTriad,
  Essences,
  Cycle,
  Structures,
  CosmicDynamism,
  CosmicFondation,
  ScripturgicBeings,
  DaemonOrder,
} from "../../../data/cosmologicalAspects";
import { useState } from "react";
const { ANGELS, DEMONS, FEY, ELEMENTALS, DIVINEBORN } = ScripturgicBeings;
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
const AngelsSection = ({
  onHover,
  onLeave,
}: {
  onHover: (name: string, meaning: string) => void;
  onLeave: () => void;
}) => {
  const angelHierarchy = [
    {
      affix: ANGELS.KorsianAffix,
      description: "Korsian: thrones of the source of being",
    },
    {
      affix: ANGELS.NurimAffix,
      description: "Nurim: guards of the triad",
    },
    {
      affix: ANGELS.HafizimAffix,
      description: "Hafizim: guards of the universe's laws",
    },
    {
      affix: ANGELS.ShaklimAffix,
      description: "Shaklim: guards of the major cosmic systems",
    },
    {
      affix: ANGELS.WazifimAffix,
      description: "Wazifim: guards of precise cosmic aspects",
    },
  ];
  const angelsVowels =
    "h" +
    ANGELS.vowelsSets[0] +
    "h" +
    ANGELS.vowelsSets[1] +
    "h" +
    ANGELS.vowelsSets[2];
  return (
    <section className="angels">
      <h2>Angels vowels</h2>
      <div className="cosmic-entities">
        <div
          className="cosmic-entity cosmic-name"
          onMouseEnter={() => onHover(angelsVowels, ANGELS.description)}
          onMouseLeave={onLeave}
        >
          {angelsVowels}
        </div>
      </div>
      <h2>Angels hierarchy</h2>
      <div className="cosmic-entities">
        {angelHierarchy.map((angel, index) => (
          <div
            key={index}
            className="cosmic-entity cosmic-name"
            onMouseEnter={() => onHover(angel.affix, angel.description)}
            onMouseLeave={onLeave}
          >
            {angel.affix}
          </div>
        ))}
      </div>
    </section>
  );
};
const DemonsSection = ({
  onHover,
  onLeave,
}: {
  onHover: (name: string, meaning: string) => void;
  onLeave: () => void;
}) => {
  const DemonsCategories = [
    {
      affix: Object.keys(DEMONS.preffixes)[0],
      description: DEMONS.preffixes.ɲié,
    },
    {
      affix: Object.keys(DEMONS.preffixes)[1],
      description: DEMONS.preffixes.xoù,
    },
    {
      affix: Object.keys(DEMONS.preffixes)[2],
      description: DEMONS.preffixes.tèe,
    },
    {
      affix: Object.keys(DEMONS.preffixes)[3],
      description: DEMONS.preffixes.kĩé,
    },
  ];

  return (
    <section className="angels">
      <h2>Demon marker</h2>
      <div className="cosmic-entities">
        <div
          className="cosmic-entity cosmic-name"
          onMouseEnter={() => onHover(DEMONS.suffix, DEMONS.description)}
          onMouseLeave={onLeave}
        >
          {DEMONS.suffix}
        </div>
      </div>
      <h2>Demons categories</h2>
      <div className="cosmic-entities">
        {DemonsCategories.map((demon, index) => (
          <div
            key={index}
            className="cosmic-entity cosmic-name"
            onMouseEnter={() => onHover(demon.affix, demon.description)}
            onMouseLeave={onLeave}
          >
            {demon.affix}
          </div>
        ))}
      </div>
    </section>
  );
};
const FeySection = ({
  onHover,
  onLeave,
}: {
  onHover: (name: string, meaning: string) => void;
  onLeave: () => void;
}) => {
  const feyVowels =
    "h" + FEY.vowelsSets[0] + "h" + FEY.vowelsSets[1] + "h" + FEY.vowelsSets[2];
  return (
    <section className="angels">
      <h2>Fey</h2>
      <div className="cosmic-entities">
        <div
          className="cosmic-entity cosmic-name"
          onMouseEnter={() => onHover(FEY.name, FEY.description)}
          onMouseLeave={onLeave}
        >
          {feyVowels}
        </div>
      </div>
    </section>
  );
};
const ElementalsSection = ({
  onHover,
  onLeave,
}: {
  onHover: (name: string, meaning: string) => void;
  onLeave: () => void;
}) => {
  const elementalsVowels =
    "h" +
    ELEMENTALS.vowelsSets[0] +
    "h" +
    ELEMENTALS.vowelsSets[1] +
    "h" +
    ELEMENTALS.vowelsSets[2];
  const elementalsCategories = [
    {
      affix: Object.keys(ELEMENTALS.suffixes)[0],
      description: ELEMENTALS.suffixes.ga,
    },
    {
      affix: Object.keys(ELEMENTALS.suffixes)[1],
      description: ELEMENTALS.suffixes.boi,
    },
    {
      affix: Object.keys(ELEMENTALS.suffixes)[2],
      description: ELEMENTALS.suffixes.pei,
    },
    {
      affix: Object.keys(ELEMENTALS.suffixes)[3],
      description: ELEMENTALS.suffixes.fui,
    },
    {
      affix: Object.keys(ELEMENTALS.suffixes)[4],
      description: ELEMENTALS.suffixes.rõu,
    },
  ];
  return (
    <section className="angels">
      <h2>Elemental vowels</h2>
      <div className="cosmic-entities">
        <div
          className="cosmic-entity cosmic-name"
          onMouseEnter={() => onHover(ELEMENTALS.name, ELEMENTALS.description)}
          onMouseLeave={onLeave}
        >
          {elementalsVowels}
        </div>
      </div>
      <h2>Elemental categories</h2>
      <div className="cosmic-entities">
        {elementalsCategories.map((elemental, index) => (
          <div
            key={index}
            className="cosmic-entity cosmic-name"
            onMouseEnter={() => onHover(elemental.affix, elemental.description)}
            onMouseLeave={onLeave}
          >
            {elemental.affix}
          </div>
        ))}
      </div>
    </section>
  );
};
const DivineBornSection = ({
  onHover,
  onLeave,
}: {
  onHover: (name: string, meaning: string) => void;
  onLeave: () => void;
}) => {
  const divineBornCategories = [
    {
      affix: Object.keys(DIVINEBORN.preffixes)[0],
      description: DIVINEBORN.preffixes.die,
    },
    {
      affix: Object.keys(DIVINEBORN.preffixes)[1],
      description: DIVINEBORN.preffixes.mãé,
    },
    {
      affix: Object.keys(DIVINEBORN.preffixes)[2],
      description: DIVINEBORN.preffixes.téã,
    },
  ];
  return (
    <section className="angels">
      <h2
        onMouseEnter={() => onHover(DIVINEBORN.name, DIVINEBORN.description)}
        onMouseLeave={onLeave}
        style={{ color: "rgb(110, 76, 76)" }}
      >
        Divine Born
      </h2>
      <div className="cosmic-entities">
        {divineBornCategories.map((divineBorn, index) => (
          <div
            key={index}
            className="cosmic-entity cosmic-name"
            onMouseEnter={() =>
              onHover(divineBorn.affix, divineBorn.description)
            }
            onMouseLeave={onLeave}
          >
            {divineBorn.affix}
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
      <h1>Cosmological bases</h1>
      <h2>root concepts</h2>
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
          data={CosmicFondation}
          className="cosmic-foundation"
          isFoundation={true}
          onHover={handleHover}
          onLeave={handleLeave}
        />
      </div>
      <h2>Beings linguistic markers</h2>
      <div className="cosmology-sections">
        <AngelsSection onHover={handleHover} onLeave={handleLeave} />
        <DemonsSection onHover={handleHover} onLeave={handleLeave} />
        <FeySection onHover={handleHover} onLeave={handleLeave} />
        <ElementalsSection onHover={handleHover} onLeave={handleLeave} />
        <DivineBornSection onHover={handleHover} onLeave={handleLeave} />
      </div>
    </div>
  );
};

export default CosmologicalBeings;
