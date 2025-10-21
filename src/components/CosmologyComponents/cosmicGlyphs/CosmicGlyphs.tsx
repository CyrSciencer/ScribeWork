import { cosmicGlyphsSystem } from "../../../data/cosmologicalAspects";
export const CosmicGlyphs = () => {
  const { moonPhases, sunMilestones } = cosmicGlyphsSystem;
  return (
    <div className="cosmic-glyphs">
      <h1>Cosmic Glyphs</h1>
      <h2>Moon Phases</h2>
      {Object.entries(moonPhases).map(([key, value]) => (
        <div key={key}>
          <p>
            <span>{key}:</span> {value.description}
          </p>
          <p>
            <span>named:</span> {value.name}
          </p>
          <img src={"/glyphs/" + value.glyph} alt={key} />
        </div>
      ))}
      <h2>Sun Milestones</h2>
      {Object.entries(sunMilestones).map(([key, value]) => (
        <div key={key}>
          <p>
            <span>{key}:</span> {value.description}
          </p>
          <p>
            <span>named:</span> {value.name}
          </p>
          <img src={"/glyphs/" + value.glyph} alt={key} />
        </div>
      ))}
    </div>
  );
};
