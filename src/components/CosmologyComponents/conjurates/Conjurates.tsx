import { Conjurates as ConjuratesData } from "../../../data/Conjurates";

export const Conjurates = () => {
  return (
    <div>
      <h1>Conjurates</h1>
      {ConjuratesData.map((conjurate) => (
        <div key={conjurate.name} className="singular-entity">
          <h2>{conjurate.name}</h2>
          <p className="cosmic-name">{conjurate.cosmicName}</p>
          <p>| {conjurate.cosmicName} |</p>
          <p>{conjurate.description}</p>
        </div>
      ))}
    </div>
  );
};
