import { useRootWords } from "../../../App";
import "./RootWordList.css";
export const RootWordList = () => {
  const { rootWords, removeRootWord } = useRootWords();
  return (
    <div>
      <h1>Root Word List</h1>
      <ul>
        {rootWords.map((item, index) => (
          <div key={index} className="root-word-item">
            <li key={index} className="fontable-text">
              {item.rootWord}
            </li>
            <li key={index}>{item.wordMeaning}</li>
            <button
              key={index}
              className="delete-button"
              onClick={() => removeRootWord(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};
