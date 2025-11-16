import { Demons as DemonsData } from "../../../data/Demons";
import { ScripturgicBeings } from "../../../data/cosmologicalAspects";

export const Demons = () => {
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
    <div>
      <h1>Demons</h1>
      {DemonsData.map((demon) => {
        const prefix = getDemonPrefix(demon.classification);
        const cosmicName = prefix + demon.cosmicName + demonSuffix;
        return (
          <div key={demon.name} className="singular-entity">
            <h2>{demon.name}</h2>
            <p className="cosmic-name">{cosmicName}</p>
            <p>| {cosmicName} |</p>
            <p>{demon.description}</p>
          </div>
        );
      })}
    </div>
  );
};
