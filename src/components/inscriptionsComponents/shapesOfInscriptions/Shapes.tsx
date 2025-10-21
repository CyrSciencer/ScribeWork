import "./Shapes.css";
import { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import { useRootWords, useFullWord } from "../../../App";
import { categorizedCosmologyNames } from "../../../data/AvailableNames";

interface CategorizedNames {
  [category: string]: string[];
}

export const Shapes = () => {
  const { rootWords } = useRootWords();
  const { fullWords } = useFullWord();
  const [availableNames, setAvailableNames] = useState<CategorizedNames>({});

  useEffect(() => {
    const rWords = rootWords.map((w) => w.rootWord);
    const fWords = fullWords.map((w) => w.fullWord);

    const allNames: CategorizedNames = {
      ...categorizedCosmologyNames,
      "Root Words": rWords,
      "Full Words": fWords,
    };

    // Filter out empty categories
    for (const category in allNames) {
      if (allNames[category].length === 0) {
        delete allNames[category];
      }
    }

    setAvailableNames(allNames);
  }, [rootWords, fullWords]);

  const [names, setNames] = useState<string[]>([]);
  const [selectedName, setSelectedName] = useState<string>("");

  useEffect(() => {
    const allCategorizedNames = Object.values(availableNames).flat();
    if (allCategorizedNames.length > 0) {
      const initialNames = ["rétieɲéa", "ɲĩvõèxĩo", "nùsèiɲoã", "wùvèinoã"];
      const validInitialNames = initialNames.filter((name) =>
        allCategorizedNames.includes(name)
      );
      setNames(validInitialNames);
      if (allCategorizedNames.length > 0 && !selectedName) {
        const firstCategory = Object.keys(availableNames)[0];
        if (firstCategory && availableNames[firstCategory].length > 0) {
          setSelectedName(availableNames[firstCategory][0]);
        }
      }
    }
  }, [availableNames]);

  const [maxNames, setMaxNames] = useState<number>(4);

  const shapesRef = useRef<HTMLDivElement>(null);
  const [magicShape, setMagicShape] = useState({
    shapeName: "square",
    magicShape: 6,
    backgroundColor: "transparent",
    topAndBotBorder: `5px solid rgba(0, 0, 0, 0)`,
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
            value="1"
            onChange={() => {
              setMaxNames(1);
              setNames(names.slice(0, 1));
              setMagicShape({
                shapeName: "singlename",
                magicShape: 50,
                backgroundColor: "black",
                topAndBotBorder: `5px solid rgba(0, 0, 0, 0)`,
                textColor: "white",
                magicTypeOne: `535px`,
                magicTypeTwo: `465px`,
              });
            }}
          />
          1 Name
        </label>
        <label>
          <input
            type="radio"
            name="shapeType"
            value="2"
            onChange={() => {
              setMaxNames(2);
              setNames(names.slice(0, 2));
              setMagicShape({
                shapeName: "circle",
                magicShape: 50,
                backgroundColor: "transparent",
                topAndBotBorder: `5px solid rgb(0, 0, 0)`,
                textColor: "black",
                magicTypeOne: `600px`,
                magicTypeTwo: `390px`,
              });
            }}
          />
          2 Names
        </label>
        <label>
          <input
            type="radio"
            name="shapeType"
            value="3"
            onChange={() => {
              setMaxNames(3);
              setNames(names.slice(0, 3));
              setMagicShape({
                shapeName: "circle",
                magicShape: 50,
                backgroundColor: "transparent",
                topAndBotBorder: `5px solid rgb(0, 0, 0)`,
                textColor: "black",
                magicTypeOne: `600px`,
                magicTypeTwo: `390px`,
              });
            }}
          />
          3 Names
        </label>
        <label>
          <input
            type="radio"
            name="shapeType"
            value="4"
            defaultChecked
            onChange={() => {
              setMaxNames(4);
              setNames(names.slice(0, 4));
              setMagicShape({
                shapeName: "square",
                magicShape: 6,
                backgroundColor: "transparent",
                topAndBotBorder: `5px solid rgba(0, 0, 0, 0)`,
                textColor: "black",
                magicTypeOne: `600px`,
                magicTypeTwo: `390px`,
              });
            }}
          />
          4 Names
        </label>
      </div>
      <div className="name-controls">
        <div className="max-names-control"></div>
        <div className="add-name-control">
          <select
            value={selectedName}
            onChange={(e) => setSelectedName(e.target.value)}
          >
            {Object.entries(availableNames).map(([category, names]) => (
              <optgroup key={category} label={category}>
                {names.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          <button
            onClick={() => {
              if (names.length < maxNames && selectedName) {
                setNames([...names, selectedName]);
              }
            }}
            disabled={names.length >= maxNames || !selectedName}
          >
            Add Name ({names.length}/{maxNames})
          </button>
        </div>
      </div>
      <button onClick={exportToPNG} className="export-button">
        Export to PNG
      </button>
      <div className="names-container">
        {names.map((name, index) => (
          <div key={index}>
            <span>{name}</span>
            <button
              className="remove-name-button"
              onClick={() => {
                setNames(names.filter((_, i) => i !== index));
              }}
            >
              &times;
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
