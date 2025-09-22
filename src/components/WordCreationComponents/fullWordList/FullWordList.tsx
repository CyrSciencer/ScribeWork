import { useFullWord } from "../../../App";
import "./FullWordList.css";
export const FullWordList = () => {
  const { fullWords } = useFullWord();
  return (
    <div>
      <h1>Full Word List</h1>
      <ul>
        {fullWords.map((item) => (
          <div key={item.fullWord} className="full-word-item">
            <li key={item.fullWord} className="fontable-text">
              {item.fullWord}
            </li>
            <li key={item.meaning}>{item.meaning}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};
