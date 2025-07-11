import React, { useState, useEffect, useRef } from "react";
import {
  getAllWordClassesWithPriorities,
  getAllRootWords,
  RootWord,
} from "../../utils/hybridDatabase";
import {
  getAllGrammaticalClasses,
  addComposedWord,
  ExtendedRootWord as ComposedWordRootWord,
  doesComposedFontExist,
} from "../../utils/composedWordsDatabase";
import {
  DivineRootWords,
  DivineRootWordsIPA,
  DivineRootWordsForFont,
} from "../../utils/fixedRootWords";
import { glyphsImport } from "../../utils/glyphsImport";
import { wordComposition, WordComposition } from "../../utils/wordComposition";
import "./WordComposer.css";

interface ClassWithPriority {
  className: string;
  priority: number;
}

interface ExtendedRootWord extends RootWord {
  isDivine?: boolean;
  glyphImage?: string;
}

interface GrammaticalClassData {
  className: string;
}

interface WordComposerProps {
  // No props needed anymore
}

// Constants
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

export const WordComposer: React.FC<WordComposerProps> = () => {
  const [availableClasses, setAvailableClasses] = useState<ClassWithPriority[]>(
    []
  );
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [classRootWords, setClassRootWords] = useState<ExtendedRootWord[]>([]);
  const [composedWord, setComposedWord] = useState<ExtendedRootWord[]>([]);
  const [wordSignification, setWordSignification] = useState<string>("");
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const wordDisplayRef = useRef<HTMLDivElement>(null);

  // State for grammatical classes
  const [grammaticalClasses, setGrammaticalClasses] = useState<
    GrammaticalClassData[]
  >([]);
  const [selectedGrammaticalClass, setSelectedGrammaticalClass] =
    useState<string>("");

  // Utility function to create empty priority groups
  const createEmptyPriorityGroups = () => {
    const groups: WordComposition["priority"] =
      {} as WordComposition["priority"];
    const rootWords: {
      [key in keyof WordComposition["priority"]]: ExtendedRootWord[];
    } = {} as any;

    PRIORITY_ORDER.forEach((priority) => {
      groups[priority] = [];
      rootWords[priority] = [];
    });

    return { groups, rootWords };
  };

  // Helper function to get priority key from number
  const getPriorityKey = (
    priority: number
  ): keyof WordComposition["priority"] => {
    return PRIORITY_MAP[priority] || "zero";
  };

  // Convert Divine Root Words to ExtendedRootWord format
  const convertDivineRootWords = (): ExtendedRootWord[] => {
    return Object.entries(DivineRootWords).map(([key, value]) => {
      const name = value.split(" (")[0];

      return {
        ipa: DivineRootWordsIPA[key as keyof typeof DivineRootWordsIPA],
        font: DivineRootWordsForFont[
          key as keyof typeof DivineRootWordsForFont
        ],
        signification: name,
        isDivine: true,
        glyphImage: glyphsImport[key as keyof typeof glyphsImport],
      };
    });
  };

  // Helper function to get priority for a root word
  const getRootWordPriority = (rootWord: ExtendedRootWord): number => {
    if (rootWord.isDivine) {
      return (
        availableClasses.find((cls) => cls.className === "divine")?.priority ||
        4
      );
    }

    const allRootWords = getAllRootWords();
    const classInfo = allRootWords.find((item) =>
      item.rootWords.some(
        (rw) => rw.font === rootWord.font && rw.ipa === rootWord.ipa
      )
    );

    if (classInfo) {
      return (
        availableClasses.find((cls) => cls.className === classInfo.className)
          ?.priority || 0
      );
    }

    return 0;
  };

  // Generate word display from root words array
  const generateWordDisplay = (
    rootWords: ExtendedRootWord[],
    signification?: string
  ) => {
    if (rootWords.length === 0) {
      return { font: "", ipa: "", meaning: "" };
    }

    const { groups: priorityGroups, rootWords: priorityRootWords } =
      createEmptyPriorityGroups();

    // Organize root words by priority
    rootWords.forEach((rootWord) => {
      const priority = getRootWordPriority(rootWord);
      const priorityKey = getPriorityKey(priority);

      priorityGroups[priorityKey].push(rootWord.font);
      priorityRootWords[priorityKey].push(rootWord);
    });

    // Create composition and generate displays
    const composition: WordComposition = {
      word: "",
      priority: priorityGroups,
      signification:
        signification ||
        PRIORITY_ORDER.flatMap((priority) => priorityRootWords[priority])
          .map((rw) => rw.signification)
          .join(" + "),
    };

    const fontDisplay = wordComposition(composition);
    const ipaDisplay = PRIORITY_ORDER.flatMap(
      (priority) => priorityRootWords[priority]
    )
      .map((rw) => rw.ipa)
      .join("");
    const meaningDisplay = composition.signification;

    return { font: fontDisplay, ipa: ipaDisplay, meaning: meaningDisplay };
  };

  // Load available classes on component mount
  useEffect(() => {
    const loadClasses = () => {
      const classes = getAllWordClassesWithPriorities();
      const divineClass: ClassWithPriority = {
        className: "divine",
        priority: 4,
      };
      const allClasses = [...classes, divineClass];
      setAvailableClasses(allClasses.sort((a, b) => a.priority - b.priority));
    };
    loadClasses();
  }, []);

  // Load grammatical classes on component mount
  useEffect(() => {
    const loadGrammaticalClasses = () => {
      const classes = getAllGrammaticalClasses();
      setGrammaticalClasses(classes);
    };
    loadGrammaticalClasses();
  }, []);

  // Load root words when class is selected
  useEffect(() => {
    if (selectedClass) {
      if (selectedClass === "divine") {
        setClassRootWords(convertDivineRootWords());
      } else {
        const allRootWords = getAllRootWords();
        const classData = allRootWords.find(
          (item) => item.className === selectedClass
        );
        setClassRootWords(
          classData
            ? classData.rootWords.map((rw) => ({ ...rw, isDivine: false }))
            : []
        );
      }
    } else {
      setClassRootWords([]);
    }
  }, [selectedClass]);

  // Detect when word display becomes sticky
  useEffect(() => {
    const handleScroll = () => {
      if (wordDisplayRef.current) {
        const rect = wordDisplayRef.current.getBoundingClientRect();
        const isCurrentlySticky = rect.top <= 20; // Same as CSS top value
        setIsSticky(isCurrentlySticky);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Component methods
  const addRootWord = (rootWord: ExtendedRootWord) => {
    setComposedWord((prev) => [...prev, rootWord]);
  };

  const removeLastRootWord = () => {
    setComposedWord((prev) => prev.slice(0, -1));
  };

  const clearComposedWord = () => {
    setComposedWord([]);
    setWordSignification("");
  };

  const saveToComposedWordsDatabase = () => {
    if (composedWord.length > 0 && selectedGrammaticalClass) {
      const composedDisplay = generateWordDisplay(
        composedWord,
        wordSignification
      );

      // Convert ExtendedRootWord to ComposedWordRootWord format
      const convertedRootWords: ComposedWordRootWord[] = composedWord.map(
        (rw) => ({
          ipa: rw.ipa,
          font: rw.font,
          signification: rw.signification,
          isDivine: rw.isDivine,
          glyphImage: rw.glyphImage,
        })
      );

      // Check for duplicates before saving
      if (doesComposedFontExist(composedDisplay.font)) {
        alert(
          `❌ ERREUR : Le mot composé en font "${composedDisplay.font}" existe déjà !`
        );
        return;
      }

      try {
        addComposedWord(
          selectedGrammaticalClass,
          convertedRootWords,
          composedDisplay.meaning,
          composedDisplay.font,
          composedDisplay.ipa
        );

        alert(
          `✅ Mot composé sauvegardé dans la classe "${selectedGrammaticalClass}" !\n\nMot: ${composedDisplay.font}\nSignification: ${composedDisplay.meaning}`
        );

        setComposedWord([]);
        setWordSignification("");
        setSelectedGrammaticalClass("");
      } catch (error) {
        console.error("Error saving composed word:", error);
        alert("❌ Erreur lors de la sauvegarde du mot composé.");
      }
    }
  };

  const getPriorityIndicator = (priority: number) => {
    if (priority === 0) return "🔵";
    if (priority <= 3) return "🟢";
    if (priority <= 7) return "🟡";
    return "🔴";
  };

  const composedDisplay = generateWordDisplay(composedWord, wordSignification);

  return (
    <div className="word-composer">
      <h2>Compositeur de Mots</h2>

      {/* Class Selection */}
      <div className="class-selection">
        <h3>Sélectionnez une classe de mots</h3>
        <div className="class-buttons">
          {availableClasses.map((classItem) => (
            <button
              key={classItem.className}
              className={`class-button ${
                selectedClass === classItem.className ? "active" : ""
              }`}
              onClick={() => setSelectedClass(classItem.className)}
              title={`Priorité: ${classItem.priority}`}
            >
              {getPriorityIndicator(classItem.priority)} {classItem.className}
              <span className="priority-badge">{classItem.priority}</span>
            </button>
          ))}
        </div>

        {selectedClass && (
          <div className="selected-class-info">
            <p>
              <strong>Classe sélectionnée:</strong> {selectedClass}
            </p>
            <p>
              <strong>Root words disponibles:</strong> {classRootWords.length}
            </p>
          </div>
        )}
      </div>

      <div className="composed-word-display">
        <h3>Mot en cours de composition</h3>

        {/* Word Signification Input */}
        <div className="word-signification-section">
          <label htmlFor="word-signification" className="signification-label">
            Signification du mot complet:
          </label>
          <input
            id="word-signification"
            type="text"
            value={wordSignification}
            onChange={(e) => setWordSignification(e.target.value)}
            placeholder="Entrez la signification globale du mot (optionnel)"
            className="signification-input"
          />
          <p className="signification-help">
            Si laissé vide, la signification sera générée automatiquement à
            partir des root words.
          </p>
        </div>

        <div className="word-controls">
          <div className="grammatical-class-save-section">
            <div className="grammatical-class-selection">
              <label htmlFor="grammatical-class-select">
                Classe grammaticale:
              </label>
              <select
                id="grammatical-class-select"
                value={selectedGrammaticalClass}
                onChange={(e) => setSelectedGrammaticalClass(e.target.value)}
                className="grammatical-class-select"
              >
                <option value="">Sélectionnez une classe...</option>
                {grammaticalClasses.map((grammarClass) => (
                  <option
                    key={grammarClass.className}
                    value={grammarClass.className}
                  >
                    {grammarClass.className}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={saveToComposedWordsDatabase}
              disabled={composedWord.length === 0 || !selectedGrammaticalClass}
              className="control-button save-button"
            >
              💾 Sauvegarder
            </button>
          </div>
        </div>
      </div>

      {/* Word Display - Now outside parent container for unrestricted sticky */}
      <div
        ref={wordDisplayRef}
        className={`word-display ${isSticky ? "sticky-active" : ""}`}
      >
        {composedWord.length > 0 ? (
          <div className="word-details">
            <div className="scribe-font ">
              {"<" + composedDisplay.font + ">"}
            </div>
            <div className="sound-ipa">/{composedDisplay.ipa}/</div>
            <div className="meaning-display">{composedDisplay.meaning}</div>
          </div>
        ) : (
          <p className="empty-state">
            Sélectionnez des root words pour composer un mot
          </p>
        )}
        <div className="word-modification-controls">
          <button
            onClick={removeLastRootWord}
            disabled={composedWord.length === 0}
            className="control-button"
          >
            ← Retirer
          </button>
          <button
            onClick={clearComposedWord}
            disabled={composedWord.length === 0}
            className="control-button"
          >
            🗑️ Effacer
          </button>
        </div>
      </div>

      {/* Root Words Keyboard */}
      {selectedClass && (
        <div className="root-words-keyboard">
          <h3>Root Words de la classe "{selectedClass}"</h3>
          {classRootWords.length > 0 ? (
            <div className="root-words-grid">
              {classRootWords.map((rootWord, index) => (
                <div
                  key={index}
                  className={`root-word-card ${
                    rootWord.isDivine ? "divine-word" : ""
                  }`}
                  onClick={() => addRootWord(rootWord)}
                >
                  {rootWord.isDivine && rootWord.glyphImage ? (
                    <>
                      <div className="glyph-image">
                        <img
                          src={rootWord.glyphImage}
                          alt={rootWord.signification}
                          className="divine-glyph"
                        />
                      </div>

                      <div className="scribe-font">{rootWord.font}</div>
                      <div className="root-word-ipa">/{rootWord.ipa}/</div>
                      <div className="root-word-meaning">
                        {rootWord.signification}
                      </div>

                      <div className="divine-badge">⭐ Divine</div>
                    </>
                  ) : (
                    <>
                      <div className="scribe-font">{rootWord.font}</div>
                      <div className="root-word-ipa">/{rootWord.ipa}/</div>
                      <div className="root-word-meaning">
                        {rootWord.signification}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="empty-state">Aucun root word dans cette classe</p>
          )}
        </div>
      )}
    </div>
  );
};
