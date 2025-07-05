import React from "react";
import {
  getAllWordClassesWithPriorities,
  getAllRootWords,
  RootWord,
} from "../../utils/hybridDatabase";
import { wordComposition, WordComposition } from "../../utils/wordComposition";
import "./AllComposedWords.css";

interface ExtendedRootWord extends RootWord {
  isDivine?: boolean;
  glyphImage?: string;
}

interface AllComposedWordsProps {
  wordHistory: { words: ExtendedRootWord[]; signification: string }[];
}

// Constants for priority ordering
const PRIORITY_ORDER: (keyof WordComposition["priority"])[] = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

const PRIORITY_MAP: { [key: number]: keyof WordComposition["priority"] } = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
};

export const AllComposedWords: React.FC<AllComposedWordsProps> = ({
  wordHistory,
}) => {
  // Helper function to get priority key from number
  const getPriorityKey = (
    priority: number
  ): keyof WordComposition["priority"] => {
    return PRIORITY_MAP[priority] || "zero";
  };

  // Helper function to get priority for a root word
  const getRootWordPriority = (rootWord: ExtendedRootWord): number => {
    if (rootWord.isDivine) {
      return 4; // Divine words have priority 4
    }

    const allRootWords = getAllRootWords();
    const allClasses = getAllWordClassesWithPriorities();

    const classInfo = allRootWords.find((item) =>
      item.rootWords.some(
        (rw) => rw.font === rootWord.font && rw.ipa === rootWord.ipa
      )
    );

    if (classInfo) {
      return (
        allClasses.find((cls) => cls.className === classInfo.className)
          ?.priority || 0
      );
    }

    return 0;
  };

  // Generate word display for a composed word
  const generateWordDisplay = (
    words: ExtendedRootWord[],
    signification: string
  ) => {
    if (words.length === 0) {
      return { font: "", ipa: "", meaning: signification };
    }

    // Create empty priority groups
    const priorityGroups: WordComposition["priority"] =
      {} as WordComposition["priority"];
    const priorityRootWords: {
      [key in keyof WordComposition["priority"]]: ExtendedRootWord[];
    } = {} as any;

    PRIORITY_ORDER.forEach((priority) => {
      priorityGroups[priority] = [];
      priorityRootWords[priority] = [];
    });

    // Organize root words by their actual priority
    words.forEach((rootWord) => {
      const priority = getRootWordPriority(rootWord);
      const priorityKey = getPriorityKey(priority);

      priorityGroups[priorityKey].push(rootWord.font);
      priorityRootWords[priorityKey].push(rootWord);
    });

    // Create composition and generate displays
    const composition: WordComposition = {
      word: "",
      priority: priorityGroups,
      signification: signification,
    };

    const fontDisplay = wordComposition(composition);
    const ipaDisplay = PRIORITY_ORDER.flatMap(
      (priority) => priorityRootWords[priority]
    )
      .map((rw) => rw.ipa)
      .join("");

    return { font: fontDisplay, ipa: ipaDisplay, meaning: signification };
  };

  if (wordHistory.length === 0) {
    return (
      <div className="all-composed-words">
        <h2>📖 Tous les Mots Composés</h2>
        <div className="empty-state">
          <h3>🗃️ Aucun mot composé</h3>
          <p>
            Utilisez le Compositeur de Mots (Page 4) pour créer vos premiers
            mots composés !
          </p>
          <p>
            Les mots que vous sauvegardez apparaîtront ici avec leurs
            significations.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="all-composed-words">
      <h2>📖 Tous les Mots Composés</h2>

      <div className="words-stats">
        <div className="stat-item">
          <span className="stat-number">{wordHistory.length}</span>
          <span className="stat-label">
            mot{wordHistory.length > 1 ? "s" : ""} composé
            {wordHistory.length > 1 ? "s" : ""}
          </span>
        </div>
      </div>

      <div className="composed-words-grid">
        {wordHistory.map((historyItem, index) => {
          const display = generateWordDisplay(
            historyItem.words,
            historyItem.signification
          );

          return (
            <div key={index} className="composed-word-card">
              <div className="word-number">#{index + 1}</div>

              <div className="word-displays">
                <div className="font-display scribe-font">
                  {"<" + display.font + ">"}
                </div>
                <div className="ipa-display">/{display.ipa}/</div>
                <div className="meaning-display">"{display.meaning}"</div>
              </div>

              <div className="root-words-breakdown">
                <h4>Composition:</h4>
                <div className="root-words-list">
                  {historyItem.words.map((rootWord, rwIndex) => (
                    <span key={rwIndex} className="root-word-item">
                      <span className="rw-font scribe-font">
                        {rootWord.font}
                      </span>
                      <span className="rw-ipa">/{rootWord.ipa}/</span>
                      <span className="rw-meaning">
                        "{rootWord.signification}"
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
