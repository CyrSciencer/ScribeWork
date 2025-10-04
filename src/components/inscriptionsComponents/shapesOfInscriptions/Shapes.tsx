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
  const [maxNames, setMaxNames] = useState<number>(8);

  // Update max names based on shape type
  const getMaxNamesForShape = (shapeType: string) => {
    return shapeType === "square" ? 4 : 8;
  };

  // Update max names when shape changes
  const updateMaxNamesForShape = (shapeType: string) => {
    setMaxNames(getMaxNamesForShape(shapeType));
  };
  const shapesRef = useRef<HTMLDivElement>(null);
  const [magicShape, setMagicShape] = useState({
    shapeName: "circle",
    magicShape: 50,
    backgroundColor: "transparent",
    topAndBotBorder: `5px solid rgb(0, 0, 0)`,
    textColor: "black",
    magicTypeOne: `600px`,
    magicTypeTwo: `390px`,
  });
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
      <div className="shape-settings">
        <label>
          <input
            type="radio"
            name="shapeType"
            value="circle"
            onChange={() => {
              setMagicShape({
                shapeName: "circle",
                magicShape: 50,
                backgroundColor: "transparent",
                topAndBotBorder: `5px solid rgb(0, 0, 0)`,
                textColor: "black",
                magicTypeOne: `600px`,
                magicTypeTwo: `390px`,
              });
              updateMaxNamesForShape("circle");
            }}
          />
          Circle
        </label>
        <label>
          <input
            type="radio"
            name="shapeType"
            value="square"
            onChange={() => {
              setMagicShape({
                shapeName: "square",
                magicShape: 6,
                backgroundColor: "transparent",
                topAndBotBorder: `5px solid rgba(0, 0, 0, 0)`,
                textColor: "black",
                magicTypeOne: `600px`,
                magicTypeTwo: `390px`,
              });
              updateMaxNamesForShape("square");
            }}
          />
          Square
        </label>
        <label>
          <input
            type="radio"
            name="shapeType"
            value="singlename"
            onChange={() => {
              setMagicShape({
                shapeName: "singlename",
                magicShape: 50,
                backgroundColor: "black",
                topAndBotBorder: `5px solid rgba(0, 0, 0, 0)`,
                textColor: "white",
                magicTypeOne: `535px`,
                magicTypeTwo: `465px`,
              });
              updateMaxNamesForShape("singlename");
            }}
          />
          Single Name
        </label>
      </div>
      <div className="name-controls">
        <div className="max-names-control"></div>
        <div className="add-name-control">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter name..."
          />
          <button
            onClick={() => {
              if (names.length < maxNames && newName.trim()) {
                setNames([...names, newName]);
                setNewName("");
              }
            }}
            disabled={names.length >= maxNames || !newName.trim()}
          >
            Add Name ({names.length}/{maxNames})
          </button>
        </div>
      </div>
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
        <div
          className="circle"
          style={
            {
              "--magicShape": `${magicShape.magicShape}%`,
              "--magicTypeOne": `${magicShape.magicTypeOne}`,
              "--magicTypeTwo": `${magicShape.magicTypeTwo}`,
              "--backgroundColor": `${magicShape.backgroundColor}`,
              "--textColor": `${magicShape.textColor}`,
            } as React.CSSProperties
          }
        >
          {names.map((name, index) => {
            const angle = (360 / names.length) * index;
            const style = {
              "--angle": `${angle}deg`,
              "--magicShape": `${magicShape.magicShape}%`,
              "--backgroundColor": `${magicShape.backgroundColor}`,
              "--textColor": `${magicShape.textColor}`,
              "--topAndBotBorder": `${magicShape.topAndBotBorder}`,
            } as React.CSSProperties;

            return (
              <div key={index} className="name-item" style={style}>
                {name}
              </div>
            );
          })}
          <div
            className="circleSecond"
            style={
              {
                "--magicShape": `${magicShape.magicShape}%`,
                "--magicTypeTwo": `${magicShape.magicTypeTwo}`,
              } as React.CSSProperties
            }
          ></div>
        </div>
      </div>
    </div>
  );
};
