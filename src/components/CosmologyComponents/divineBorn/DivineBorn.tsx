import { DivineBorn as DivineBornData } from "../../../data/divineBorn";
export const DivineBorn = () => {
  return (
    <div>
      <h1>Divine Born</h1>
      {DivineBornData.map((divineBorn) => (
        <div key={divineBorn.name} className="singular-entity">
          <h2>{divineBorn.name}</h2>
          <p className="cosmic-name">{divineBorn.cosmicName}</p>
          <p>| {divineBorn.cosmicName} |</p>
          <p>{divineBorn.description}</p>
        </div>
      ))}
    </div>
  );
};
