import "./Shapes.css";
import { useState, useRef } from "react";
import html2canvas from "html2canvas";

export const Shapes = () => {
  const [names, setNames] = useState<string[]>([
    "rétieɲéa",
    "ɲĩvõèxĩo",
    "nùsèiɲoã",
    "wùvèinoã",
  ]); // You can easily add/remove names here
  const [newName, setNewName] = useState<string>("");
  const shapesRef = useRef<HTMLDivElement>(null);

  const exportToPNG = async () => {
    if (shapesRef.current) {
      const canvas = await html2canvas(shapesRef.current, {
        backgroundColor: "transparent",
        scale: 2, // Higher quality
      });
      const link = document.createElement("a");
      link.download = "inscription-shape.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };
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
      <button onClick={exportToPNG}>Export to PNG</button>
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
      <div className="shapes" ref={shapesRef}>
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
          <div className="circleSecond"></div>
        </div>
      </div>
    </div>
  );
};
