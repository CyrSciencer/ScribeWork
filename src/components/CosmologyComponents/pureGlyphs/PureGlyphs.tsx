import { consonants, ScribeConsonants } from "../../../utils/letters";
import { useState } from "react";
export const PureGlyphs = () => {
  const [hoveringGlyph, setHoveringGlyph] = useState<string | null>(null);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h1>Pure Glyphs</h1>
      {hoveringGlyph ? (
        <div className="meaning">
          {ScribeConsonants[hoveringGlyph as keyof typeof ScribeConsonants]}
        </div>
      ) : (
        <div className="meaning">hover glyph for meaning</div>
      )}
      <div className="pure-glyph-container">
        {consonants.map((consonant) => (
          <div
            key={consonant}
            className="pure-glyph"
            onMouseEnter={() => setHoveringGlyph(consonant)}
            onMouseLeave={() => setHoveringGlyph(null)}
          >
            {"j'" + consonant + "'"}
          </div>
        ))}
      </div>
    </div>
  );
};
