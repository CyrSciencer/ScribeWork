import { useRootWords } from "../../../App";
import "./RootWordList.css";
export const RootWordList = () => {
  const { rootWords } = useRootWords();
  return (
    <div>
      <h1>Root Word List</h1>
      <ul>
        {rootWords.map((item) => (
          <div key={item.rootWord} className="root-word-item">
            <li key={item.rootWord} className="fontable-text">
              {item.rootWord}
            </li>
            <li key={item.wordMeaning}>{item.wordMeaning}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};
