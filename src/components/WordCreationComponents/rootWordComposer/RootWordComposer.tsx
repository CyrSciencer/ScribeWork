import "./RootWordComposer.css";
import {
  consonants,
  IPAConsonants,
  ScribeConsonants,
} from "../../../utils/letters";
import { useState } from "react";
import { useRootWords, useNotification } from "../../../App";

const RootWord = ({
  rootWord,
  setRootWord,
}: {
  rootWord: string;
  setRootWord: (rootWord: string) => void;
}) => {
  return (
    <div className="word-display">
      <p>Composed word:</p>{" "}
      <p className="fontable-text" style={{ fontSize: "7rem" }}>
        {rootWord}
      </p>
      <button className="button" onClick={() => setRootWord("")}>
        Clear
      </button>
    </div>
  );
};
const ConsonantKeyboard = ({
  setRootWord,
  rootWord,
}: {
  setRootWord: (rootWord: string) => void;
  rootWord: string;
}) => {
  const [currentConsonent, setCurrentConsonent] = useState<string | null>("c");
  return (
    <div className="keyboard-container">
      <p>meaning</p>
      <div className="key-container">
        <p>
          {ScribeConsonants[currentConsonent as keyof typeof ScribeConsonants]}
        </p>
      </div>
      <div className="keyboard">
        {consonants.map((consonant: string, index: number) => {
          return (
            <div key={`${consonant}-${index}`}>
              <div>
                <p>/{IPAConsonants[index]}/</p>
                <button
                  className="keyboard-key"
                  onClick={() => setRootWord(rootWord + consonant + "'")}
                  onMouseEnter={() => setCurrentConsonent(consonant)}
                  onMouseLeave={() => setCurrentConsonent(null)}
                  onFocus={() => setCurrentConsonent(consonant)}
                  onBlur={() => setCurrentConsonent(null)}
                  onTouchStart={() => setCurrentConsonent(consonant)}
                  onTouchEnd={() => setCurrentConsonent(null)}
                  style={{ paddingLeft: "20px" }}
                >
                  {consonant + "'"}
                </button>
                <p>| {consonant} |</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const RootWordComposer = () => {
  const [rootWord, setRootWord] = useState<string>("");
  const [wordMeaning, setWordMeaning] = useState<string>("");
  const { rootWords, addRootWord } = useRootWords();
  const { showNotification } = useNotification();
  console.log(rootWords);
  return (
    <div>
      <div>RootWordComposer</div>
      <div className="display">
        <input
          type="text"
          className="input"
          value={wordMeaning}
          onChange={(e) => setWordMeaning(e.target.value)}
        />

        <RootWord rootWord={rootWord} setRootWord={setRootWord} />
        <button
          className="button"
          onClick={() => {
            addRootWord(rootWord, wordMeaning);
            showNotification(`Root word "${rootWord}" saved successfully!`);
            setRootWord("");
            setWordMeaning("");
          }}
        >
          Save
        </button>
      </div>
      <div>
        {rootWord.length < 6 && (
          <ConsonantKeyboard setRootWord={setRootWord} rootWord={rootWord} />
        )}
      </div>
    </div>
  );
};
