import "./AddVowel.css";
import { useRootWords, useFullWord, useNotification } from "../../../App";
import { useState, useEffect } from "react";
import {
  ScribeVowels,
  ScribeDiphthongs,
  vowels,
  vowelsIPA,
} from "../../../utils/letters";
const wordSepperator = (rootWordMod: string) => {
  return rootWordMod.split("'").map((letter) => letter);
};
export const AddVowel = () => {
  const { rootWords } = useRootWords();
  const { setCurrentFullWord, addFullWord } = useFullWord();
  const { showNotification } = useNotification();
  const [rootWordMod, setRootWordMod] = useState<string>("h'");
  const [currentVowel, setCurrentVowel] = useState<string | null>("a");
  const sepperatedWord = wordSepperator(rootWordMod);
  const [vowelSet, setVowelSet] = useState<string[][]>([
    ["'", ""],
    ["'", ""],
    ["'", ""],
  ]);
  const [vowelSetIndex, setVowelSetIndex] = useState<number>(0);
  const [vowelSlotIndex, setVowelSlotIndex] = useState<number>(0);
  const [rootWordMeaning, setRootWordMeaning] = useState<string>("");
  const fullword =
    sepperatedWord[0] +
    vowelSet[0].join("") +
    sepperatedWord[1] +
    vowelSet[1].join("") +
    sepperatedWord[2] +
    vowelSet[2].join("");

  // Function to get the combined meaning including vowels and diphthongs
  const getCombinedMeaning = () => {
    let combinedMeaning = rootWordMeaning;
    const vowelMeanings: string[] = [];

    vowelSet.forEach((vowelSlot) => {
      const vowelString = vowelSlot.join("");
      if (vowelString && vowelString !== "'") {
        // Check if it's a diphthong (2 letters)
        if (vowelString.length === 2 && vowelString in ScribeDiphthongs) {
          vowelMeanings.push(
            ScribeDiphthongs[vowelString as keyof typeof ScribeDiphthongs]
          );
        } else if (vowelString in ScribeVowels) {
          vowelMeanings.push(
            ScribeVowels[vowelString as keyof typeof ScribeVowels]
          );
        }
      }
    });

    if (vowelMeanings.length > 0) {
      combinedMeaning = rootWordMeaning + " + " + vowelMeanings.join(" + ");
    }

    return combinedMeaning;
  };

  // Function to check if a vowel can be added to create a valid diphthong
  const isValidDiphthong = (firstVowel: string, secondVowel: string) => {
    const diphthong = firstVowel + secondVowel;
    return diphthong in ScribeDiphthongs;
  };

  // Function to get valid vowels for the second slot
  const getValidSecondSlotVowels = () => {
    const firstVowel = vowelSet[vowelSetIndex][0];
    if (firstVowel === "'" || !firstVowel) return vowels;

    return vowels.filter((vowel) => isValidDiphthong(firstVowel, vowel));
  };

  // Update the current full word context whenever the fullword changes
  useEffect(() => {
    setCurrentFullWord(fullword);
  }, [fullword, setCurrentFullWord]);
  console.log({ rootWordMeaning });
  console.log({ fullword });
  console.log({ vowelSetIndex });
  console.log({ sepperatedWord });
  return (
    <div className="add-vowel-container">
      <h3 className="add-vowel-title">Choose a root word to modify</h3>
      <div className="add-vowel-select-container">
        <select
          value={rootWordMod}
          onChange={(e) => {
            setRootWordMod(e.target.value);
            // Find the selected root word and set its meaning
            if (e.target.value === "h'") {
              setRootWordMeaning("");
            } else {
              const selectedRootWord = rootWords.find(
                (rootWord) => rootWord.rootWord === e.target.value
              );
              if (selectedRootWord) {
                setRootWordMeaning(selectedRootWord.wordMeaning);
              }
            }
          }}
          className="add-vowel-select fontable-text "
        >
          <option value="h'" className="fontable-text">
            h'
          </option>
          {rootWords.map((rootWord) => (
            <option
              key={rootWord.rootWord}
              value={rootWord.rootWord}
              className="fontable-text"
            >
              {rootWord.rootWord}
            </option>
          ))}
        </select>
      </div>
      <div className="fontable-text">
        {rootWordMod === "h'" ? (
          <div>h'</div>
        ) : (
          <div>
            {sepperatedWord[0] +
              vowelSet[0].join("") +
              sepperatedWord[1] +
              vowelSet[1].join("") +
              sepperatedWord[2] +
              vowelSet[2].join("")}
          </div>
        )}
      </div>
      <div className="vowel-adding">
        <div>where to add the vowel?</div>
        <div className="vowel-adding-select-container">
          <div className="vowel-adding-select-container-inner">
            <select
              className="vowel-adding-select"
              value={vowelSetIndex}
              onChange={(e) => {
                setVowelSetIndex(parseInt(e.target.value));
                setVowelSlotIndex(0);
              }}
            >
              <option value="0">first vowel</option>
              <option value="1">second vowel</option>
              <option value="2">third vowel</option>
            </select>
            <select
              className="vowel-adding-select"
              value={vowelSlotIndex}
              onChange={(e) => setVowelSlotIndex(parseInt(e.target.value))}
            >
              <option value="0">first slot</option>
              {vowelSet[vowelSetIndex][0] !== "'" && (
                <option value="1">second slot</option>
              )}
            </select>
          </div>
          <button
            className="reset-button"
            onClick={() => {
              setVowelSet((prev) => [
                ...prev.slice(0, vowelSetIndex),
                ["'", ""],
                ...prev.slice(vowelSetIndex + 1),
              ]);
              setVowelSlotIndex(0);
            }}
          >
            Reset Current Position
          </button>
          <button
            className="reset-button"
            onClick={() => {
              setVowelSet([
                ["'", ""],
                ["'", ""],
                ["'", ""],
              ]);
              setVowelSlotIndex(0);
            }}
          >
            Reset All
          </button>
        </div>
        <p>meaning</p>
        <div className="key-container">
          {vowelSlotIndex === 0 ? (
            <p>{ScribeVowels[currentVowel as keyof typeof ScribeVowels]}</p>
          ) : (
            <p>
              {
                ScribeDiphthongs[
                  (vowelSet[vowelSetIndex][vowelSlotIndex - 1] +
                    currentVowel) as keyof typeof ScribeDiphthongs
                ]
              }
            </p>
          )}
        </div>
        <div className="keyboard">
          {(vowelSlotIndex === 1 ? getValidSecondSlotVowels() : vowels).map(
            (vowel: string, index: number) => {
              const originalIndex = vowels.indexOf(vowel);
              return (
                <div>
                  <div key={index}>
                    {vowelSlotIndex === 1 ? (
                      <p>
                        /
                        {
                          vowelsIPA[
                            vowels.indexOf(
                              vowelSet[vowelSetIndex][vowelSlotIndex - 1]
                            )
                          ]
                        }
                        {vowelsIPA[originalIndex]}/
                      </p>
                    ) : (
                      <p>/{vowelsIPA[originalIndex]}/</p>
                    )}
                    <button
                      key={index}
                      className="keyboard-key"
                      onMouseEnter={() => setCurrentVowel(vowel)}
                      onMouseLeave={() => setCurrentVowel(null)}
                      onClick={() => {
                        setVowelSet((prev) => {
                          const currentVowels = [...prev[vowelSetIndex]];
                          currentVowels[vowelSlotIndex] = vowel;
                          return [
                            ...prev.slice(0, vowelSetIndex),
                            currentVowels,
                            ...prev.slice(vowelSetIndex + 1),
                          ];
                        });
                      }}
                    >
                      {vowelSet[vowelSetIndex][vowelSlotIndex - 1]}
                      {vowel}
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </div>
        <div className="full-word">
          <p>romanization: {rootWordMod === "h'" ? "h'" : fullword}</p>
          <p>meaning: {getCombinedMeaning()} </p>
          <button
            className="save-fullword-button"
            onClick={() => {
              addFullWord(fullword, getCombinedMeaning());
              showNotification(`Full word "${fullword}" saved successfully!`);
              // Reset all state after saving
              setRootWordMod("h'");
              setCurrentVowel("a");
              setVowelSet([
                ["'", ""],
                ["'", ""],
                ["'", ""],
              ]);
              setVowelSetIndex(0);
              setVowelSlotIndex(0);
              setRootWordMeaning("");
            }}
            disabled={!fullword || fullword === "none"}
          >
            Save Full Word
          </button>
        </div>
      </div>
    </div>
  );
};
