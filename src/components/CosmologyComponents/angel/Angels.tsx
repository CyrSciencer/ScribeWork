import { Angels as AngelsData } from "../../../data/Angels";

export const Angels = () => {
  return (
    <div>
      <h1>Angels</h1>
      {AngelsData.map((angel) => {
        const cosmicName = angel.cosmicName;
        return (
          <div key={angel.name} className="singular-entity">
            <h2>{angel.name}</h2>
            <p className="cosmic-name">{cosmicName}</p>
            <p>| {cosmicName} |</p>
            <p>{angel.description}</p>
            <p>
              <strong>Category:</strong> {angel.category}
            </p>
          </div>
        );
      })}
    </div>
  );
};
