import "./Shapes.css";
import { useState } from "react";
export const Shapes = () => {
  const [names, setNames] = useState<string[]>([
    "rétieɲéa",
    "ɲĩvõèxĩo",
    "nùsèiɲoã",
    "wùvèinoã",
  ]); // You can easily add/remove names here
  const [newName, setNewName] = useState<string>("");
  return (
    <div className="shapes-container">
      <h1>Shapes</h1>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button
        onClick={() => {
          setNames([...names, newName]);
          setNewName("");
        }}
      >
        Add Name
      </button>
      <div className="names-container">
        {names.map((name, index) => (
          <div>
            <div key={index}>{name}</div>
            <button
              onClick={() => {
                setNames(names.filter((_, i) => i !== index));
              }}
            >
              Remove Name
            </button>
          </div>
        ))}
      </div>
      <div className="shapes">
        <div className="circle">
          {names.map((name, index) => {
            const angle = (360 / names.length) * index;
            const style = {
              "--angle": `${angle}deg`,
            } as React.CSSProperties;

            return (
              <div key={index} className="circle-item" style={style}>
                {name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
