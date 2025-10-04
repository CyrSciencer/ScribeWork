import { useFullWord } from "../../../App";
import "./FullWordList.css";
export const FullWordList = () => {
  const { fullWords, removeFullWord } = useFullWord();
  return (
    <div>
      <h1>Full Word List</h1>
      <ul>
        {fullWords.map((item, index) => (
          <div key={index} className="full-word-item">
            <li key={index} className="fontable-text">
              {item.fullWord}
            </li>
            <li key={index}>{item.meaning}</li>
            <button
              key={index}
              className="delete-button"
              onClick={() => removeFullWord(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};
