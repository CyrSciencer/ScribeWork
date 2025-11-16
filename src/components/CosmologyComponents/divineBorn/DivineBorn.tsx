import { DivineBorn as DivineBornData } from "../../../data/divineBorn";
import { ScripturgicBeings } from "../../../data/cosmologicalAspects";
export const DivineBorn = () => {
  const { DIVINEBORN } = ScripturgicBeings;
  const divineBornPrefixes = DIVINEBORN.preffixes;

  const getDivineBornPrefix = (classification: string): string => {
    if (classification === "Benevolence through Guidance and Protection")
      return Object.keys(divineBornPrefixes)[0];
    if (classification === "Benevolence as a Nurturing Force")
      return Object.keys(divineBornPrefixes)[1];
    if (classification === "Benevolence through Inscrutable Purpose")
      return Object.keys(divineBornPrefixes)[2];
    return "";
  };
  return (
    <div>
      <h1>Divine Born</h1>
      {DivineBornData.map((divineBorn) => {
        const prefix = getDivineBornPrefix(divineBorn.classification);
        const cosmicName = prefix + divineBorn.cosmicName;
        return (
          <div key={divineBorn.name} className="singular-entity">
            <h2>{divineBorn.name}</h2>
            <p className="cosmic-name">{cosmicName}</p>
            <p>| {cosmicName} |</p>
            <p>{divineBorn.description}</p>
          </div>
        );
      })}
    </div>
  );
};
