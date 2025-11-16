import { consonants, ScribeConsonants } from "../../../utils/letters";
import { useState } from "react";

export const PureGlyphs = () => {
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
      <h1>Pure Glyphs</h1>

      {hoveringEntity && (
        <div
          className="cosmic-meaning-display"
          dangerouslySetInnerHTML={{
            __html: hoveringEntity.meaning.replace(/\n/g, "<br>"),
          }}
        />
      )}

      <div className="cosmology-sections">
        <section>
          <div className="cosmic-entities">
            {consonants.map((consonant) => (
              <div
                key={consonant}
                className="cosmic-entity"
                onMouseEnter={() =>
                  handleHover(
                    "j" + consonant,
                    ScribeConsonants[consonant as keyof typeof ScribeConsonants]
                  )
                }
                onMouseLeave={handleLeave}
              >
                <span className="cosmic-name">{"j" + consonant}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
