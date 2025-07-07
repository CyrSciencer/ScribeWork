import React, { useState } from "react";
import {
  ConsonantsOfLingua,
  MainVowelsOfLingua,
  ExtrasOfLingua,
} from "../../utils/soundsOfLingua";
import {
  getAllWordClasses,
  addRootWordToClass,
  RootWord,
  getDatabaseStats,
  updateClassPriority,
} from "../../utils/hybridDatabase";
import "./RootWordComposer.css";

interface Sound {
  value: string; // enum form (code)
  display: string; // IPA form
  fontForm: string; // ScribeWork font form
  category: "consonant" | "vowel" | "extra";
}

// Three forms are now displayed side by side

// TRUE IPA mappings based on comments in soundsOfLingua.ts
const consonantToIPA: { [key: string]: string } = {
  [ConsonantsOfLingua.B]: "b",
  [ConsonantsOfLingua.P]: "p",
  [ConsonantsOfLingua.PP]: "p'", // p'
  [ConsonantsOfLingua.M]: "m",
  [ConsonantsOfLingua.F]: "f",
  [ConsonantsOfLingua.V]: "v",
  [ConsonantsOfLingua.D]: "d",
  [ConsonantsOfLingua.T]: "t",
  [ConsonantsOfLingua.S]: "s",
  [ConsonantsOfLingua["ʗ"]]: "ʗ", // palatal Click
  [ConsonantsOfLingua.N]: "n",
  [ConsonantsOfLingua.Z]: "z",
  [ConsonantsOfLingua.X]: "ʂ", // ʂ (not x)
  [ConsonantsOfLingua.J]: "ʒ", // ʒ (not j)
  [ConsonantsOfLingua["ʇ"]]: "ʇ", // dental Click
  [ConsonantsOfLingua.Y]: "j", // j (not y)
  [ConsonantsOfLingua["ɲ"]]: "ɲ", // ɲ
  [ConsonantsOfLingua.K]: "k",
  [ConsonantsOfLingua.KK]: "k'", // k'
  [ConsonantsOfLingua.W]: "w",
  [ConsonantsOfLingua["ʁ"]]: "ʁ", // gutural R
  [ConsonantsOfLingua.G]: "g",
  [ConsonantsOfLingua.R]: "r", // rolling R
  [ConsonantsOfLingua.L]: "l",
};

const mainVowelToIPA: { [key: string]: string } = {
  [MainVowelsOfLingua.A]: "a", // a
  [MainVowelsOfLingua.AN]: "ã", // ã
  [MainVowelsOfLingua.E]: "ɜ", // ɜ (not e)
  [MainVowelsOfLingua.IN]: "ɛ̃", // ɛ̃
  [MainVowelsOfLingua.É]: "e", // e
  [MainVowelsOfLingua.è]: "ɛ", // ɛ
  [MainVowelsOfLingua.O]: "ɵ", // ɵ (not o)
  [MainVowelsOfLingua.ON]: "ɔ̃", // ɔ̃
  [MainVowelsOfLingua.OU]: "u", // u
  [MainVowelsOfLingua.U]: "y", // y (not u)
  [MainVowelsOfLingua.I]: "i", // i
};

const extrasToIPA: { [key: string]: string } = {
  [ExtrasOfLingua.H]: "h", // h
};

export const RootWordComposer: React.FC = () => {
  const [currentSounds, setCurrentSounds] = useState<Sound[]>([]); // Store sounds in IPA order
  const [wordClass, setWordClass] = useState("");
  const [newWordClass, setNewWordClass] = useState("");
  const [isCreatingNewClass, setIsCreatingNewClass] = useState(false);
  const [meaning, setMeaning] = useState("");
  const [priority, setPriority] = useState(0);
  const [selectedPattern, setSelectedPattern] = useState<
    "CCV" | "CVV" | "CV" | null
  >(null);

  // Pattern definitions
  const patterns = {
    CCV: ["consonant", "consonant", "vowel"],
    CVV: ["consonant", "vowel", "vowel"],
    CV: ["consonant", "vowel", "vowel"], // CV becomes CVH automatically
  };

  // Get current expected sound type based on pattern and position
  const getExpectedSoundType = (): string | null => {
    if (!selectedPattern) return null;
    const currentPosition = currentSounds.length;
    const pattern = patterns[selectedPattern];
    return currentPosition < pattern.length ? pattern[currentPosition] : null;
  };

  // Check if a sound can be added based on current pattern
  const canAddSound = (sound: Sound): boolean => {
    if (!selectedPattern) return false;
    const expectedType = getExpectedSoundType();

    // For CV pattern, treat extras (like H) as vowels in the third position
    if (
      selectedPattern === "CV" &&
      sound.category === "extra" &&
      expectedType === "vowel" &&
      currentSounds.length === 2
    ) {
      return true;
    }

    return expectedType === sound.category;
  };

  // Get progress indicator
  const getPatternProgress = (): string => {
    if (!selectedPattern) return "";
    const pattern = patterns[selectedPattern];
    const progress = currentSounds.map((_, i) => "✅").join("");
    const remaining = pattern
      .slice(currentSounds.length)
      .map((type) => (type === "consonant" ? "🔵" : "🔴"))
      .join("");
    return progress + remaining;
  };

  // Convert IPA order to Font order (ScribeWork writing system)
  const convertToFontOrder = (sounds: Sound[]): string => {
    const consonants = sounds.filter((s) => s.category === "consonant");
    const vowelSounds = sounds.filter((s) => s.category === "vowel");

    // Auto-assign M/B: 1st vowel gets M, 2nd vowel gets B
    const vowelsWithSuffix = vowelSounds.map((vowel, index) => {
      const suffix = index === 0 ? "M" : "B";
      // For H in CV pattern, don't add M/B suffix since it's already "h"
      if (vowel.fontForm === "h") {
        return vowel.fontForm;
      }
      return vowel.fontForm + suffix;
    });

    // ScribeWork order: vowels first, then consonants
    const fontOrder = [
      ...vowelsWithSuffix,
      ...consonants.map((c) => c.fontForm),
    ];
    return fontOrder.join("");
  };

  // Get IPA representation
  const getIPAString = (): string => {
    return currentSounds.map((s) => s.display).join("");
  };

  // Get current word in font order
  const getCurrentWord = (): string => {
    return convertToFontOrder(currentSounds);
  };
  // Create sound arrays with correct 3 forms
  const consonants: Sound[] = Object.entries(ConsonantsOfLingua).map(
    ([key, value]) => ({
      value: key, // Enum key (code-friendly form)
      display: consonantToIPA[value] || value, // True IPA form
      fontForm: value, // Font form (enum value)
      category: "consonant",
    })
  );

  // Unified vowels - M/B will be assigned automatically based on position
  const vowels: Sound[] = Object.entries(MainVowelsOfLingua).map(
    ([key, value]) => ({
      value: key, // Enum key (code-friendly form)
      display: mainVowelToIPA[value] || value, // True IPA form
      fontForm: value.replace("M", ""), // Base form without M/B
      category: "vowel",
    })
  );

  // Extras sounds (like H)
  const extras: Sound[] = Object.entries(ExtrasOfLingua).map(
    ([key, value]) => ({
      value: key, // Enum key (code-friendly form)
      display: extrasToIPA[value] || value, // True IPA form
      fontForm: value, // Font form (enum value)
      category: "extra",
    })
  );

  // Component for displaying all 3 forms of a sound
  const SoundButton: React.FC<{ sound: Sound; category: string }> = ({
    sound,
    category,
  }) => {
    const isEnabled = canAddSound(sound);
    const isPatternSelected = selectedPattern !== null;

    return (
      <div
        className={`sound-group ${category} ${
          !isEnabled && isPatternSelected ? "disabled" : ""
        }`}
      >
        <button
          className={`sound-button sound-ipa ${category} ${
            !isEnabled && isPatternSelected ? "disabled" : ""
          }`}
          onClick={() => handleSoundClick(sound)}
          disabled={!isEnabled && isPatternSelected}
          title={
            isEnabled || !isPatternSelected
              ? "IPA Form"
              : "Non disponible pour ce pattern"
          }
        >
          {sound.display}
        </button>
        <button
          className={`sound-button sound-enum ${category} ${
            !isEnabled && isPatternSelected ? "disabled" : ""
          }`}
          onClick={() => handleSoundClick(sound)}
          disabled={!isEnabled && isPatternSelected}
          title={
            isEnabled || !isPatternSelected
              ? "Enum Form (Code-Friendly)"
              : "Non disponible pour ce pattern"
          }
        >
          {sound.value}
        </button>
      </div>
    );
  };

  const handleSoundClick = (sound: Sound) => {
    // Only add if pattern allows and not complete
    if (canAddSound(sound) && currentSounds.length < 3) {
      setCurrentSounds((prev) => {
        const newSounds = [...prev, sound];

        // For CV pattern: automatically add H after vowel
        if (
          selectedPattern === "CV" &&
          sound.category === "vowel" &&
          newSounds.length === 2
        ) {
          const hSound: Sound = {
            value: "H",
            display: extrasToIPA[ExtrasOfLingua.H],
            fontForm: ExtrasOfLingua.H,
            category: "vowel", // Treat H as a second vowel for CV pattern
          };
          return [...newSounds, hSound];
        }

        return newSounds;
      });
    }
  };

  const handleClear = () => {
    setCurrentSounds([]);
  };

  const handleBackspace = () => {
    setCurrentSounds((prev) => prev.slice(0, -1));
  };

  const handlePatternSelect = (pattern: "CCV" | "CVV" | "CV") => {
    setSelectedPattern(pattern);
    setCurrentSounds([]); // Reset when changing pattern
  };

  const resetPattern = () => {
    setSelectedPattern(null);
    setCurrentSounds([]);
  };

  const handleSave = async () => {
    const currentWord = getCurrentWord();
    const currentIPA = getIPAString();

    // Validation
    if (!selectedPattern) {
      alert("Veuillez d'abord choisir un pattern (CCV ou CVV)");
      return;
    }

    if (currentSounds.length !== 3) {
      alert(
        `Pattern ${selectedPattern} incomplet ! Il faut exactement 3 sons.`
      );
      return;
    }

    // Determine which class to use
    const finalWordClass = isCreatingNewClass ? newWordClass.trim() : wordClass;

    if (!currentWord.trim() || !finalWordClass || !meaning.trim()) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    // Create the root word object
    const rootWord: RootWord = {
      ipa: currentIPA,
      font: currentWord,
      signification: meaning.trim(),
    };

    try {
      // Add to project database with immediate localStorage persistence
      addRootWordToClass(finalWordClass, rootWord, priority);

      // Update class priority if it's different from current
      if (priority > 0) {
        updateClassPriority(finalWordClass, priority);
      }

      // Get updated stats
      const stats = getDatabaseStats();

      const successMessage = `
🎯 ROOT WORD AJOUTÉ AVEC SUCCÈS !

📝 DÉTAILS DU ROOT WORD :
  • Font ScribeWork: ${currentWord}
  • IPA phonétique: /${currentIPA}/
  • Signification: ${meaning}
  • Classe: ${finalWordClass}
  • Priorité de classe: ${priority}

📊 BASE DE DONNÉES HYBRIDE :
  • Total classes: ${stats.totalClasses}
  • Total root words: ${stats.totalRootWords}
  • Nouveaux mots dans "${finalWordClass}": ${
        stats.classesSummary.find(
          (c) => c.className === finalWordClass.toLowerCase()
        )?.count || 1
      }

✅ Root word sauvegardé automatiquement dans localStorage avec backup !
📥 Utilisez "Exporter JSON" (Page 3) pour créer un fichier portable.
🔄 Importez vos données JSON sur d'autres ordinateurs via "Importer JSON".
      `;

      alert(successMessage);

      // Clear form
      setCurrentSounds([]);
      setWordClass("");
      setNewWordClass("");
      setMeaning("");
      setPriority(0);
      setIsCreatingNewClass(false);
    } catch (error) {
      console.error("Erreur lors de la sauvegarde:", error);
      alert(
        "Erreur lors de la sauvegarde du root word. Voir la console pour plus de détails."
      );
    }
  };

  return (
    <div className="root-word-composer">
      <h2>Compositeur de Root Words</h2>

      <div className="pattern-selector">
        <h3>Choisissez le pattern de votre root word</h3>
        <div className="pattern-buttons">
          <button
            className={`pattern-button ${
              selectedPattern === "CCV" ? "active" : ""
            }`}
            onClick={() => handlePatternSelect("CCV")}
          >
            <strong>CCV Pattern</strong>
            <span>Consonne-Consonne-Voyelle</span>
          </button>
          <button
            className={`pattern-button ${
              selectedPattern === "CVV" ? "active" : ""
            }`}
            onClick={() => handlePatternSelect("CVV")}
          >
            <strong>CVV Pattern</strong>
            <span>Consonne-Voyelle-Voyelle</span>
          </button>
          <button
            className={`pattern-button ${
              selectedPattern === "CV" ? "active" : ""
            }`}
            onClick={() => handlePatternSelect("CV")}
          >
            <strong>CV Pattern</strong>
            <span>Consonne-Voyelle</span>
          </button>
        </div>

        {selectedPattern && (
          <div className="pattern-progress">
            <div className="progress-info">
              <strong>Pattern actuel: {selectedPattern}</strong>
              <span className="progress-indicator">{getPatternProgress()}</span>
              <button className="reset-button" onClick={resetPattern}>
                🔄 Changer
              </button>
            </div>
            <div className="next-sound-hint">
              {selectedPattern === "CV" && currentSounds.length === 0 && (
                <p>
                  ➡️ <strong>Prochain son attendu:</strong> 🔵 Consonne
                </p>
              )}
              {selectedPattern === "CV" && currentSounds.length === 1 && (
                <p>
                  ➡️ <strong>Prochain son attendu:</strong> 🔴 Voyelle
                </p>
              )}
              {selectedPattern !== "CV" && getExpectedSoundType() && (
                <p>
                  ➡️ <strong>Prochain son attendu:</strong>{" "}
                  {getExpectedSoundType() === "consonant"
                    ? "🔵 Consonne"
                    : "🔴 Voyelle"}
                </p>
              )}
              {currentSounds.length === 3 && (
                <p className="complete">
                  ✅ <strong>Pattern complet !</strong> Vous pouvez enregistrer.
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="root-word-display">
        <label>Mot en cours :</label>
        <span className="ipa-display" title="IPA Form (phonétique)">
          /{getIPAString()}/
        </span>
        <div
          className="root-word-display-text scribe-font "
          title="Font Form (ScribeWork.otf avec M/B pour voyelles)"
        >
          {"<"}
          {getCurrentWord() || "..."}
          {">"}
        </div>
        <div className="word-controls">
          <button onClick={handleBackspace}>← Effacer</button>
          <button onClick={handleClear}>Vider</button>
        </div>
      </div>

      <div className="composer-form">
        <div className="input-group">
          <label>Classe :</label>
          <div className="class-selector">
            <div className="class-toggle">
              <button
                className={`toggle-button ${
                  !isCreatingNewClass ? "active" : ""
                }`}
                onClick={() => setIsCreatingNewClass(false)}
              >
                Classe existante
              </button>
              <button
                className={`toggle-button ${
                  isCreatingNewClass ? "active" : ""
                }`}
                onClick={() => setIsCreatingNewClass(true)}
              >
                Nouvelle classe
              </button>
            </div>
            <div>
              {!isCreatingNewClass ? (
                <select
                  value={wordClass}
                  onChange={(e) => setWordClass(e.target.value)}
                  className="class-dropdown"
                >
                  <option value="">Sélectionnez une classe...</option>
                  {getAllWordClasses().map((cls) => (
                    <option key={cls} value={cls}>
                      {cls}
                    </option>
                  ))}
                </select>
              ) : (
                <>
                  <input
                    type="text"
                    value={newWordClass}
                    onChange={(e) => setNewWordClass(e.target.value)}
                    placeholder="Nom de la nouvelle classe..."
                    className="new-class-input"
                  />
                  <div className="input-group">
                    <label>Priorité de classe :</label>
                    <input
                      type="range"
                      value={priority}
                      onChange={(e) =>
                        setPriority(parseInt(e.target.value) || 0)
                      }
                      placeholder="Priorité de classe (0 = défaut, plus haut = plus prioritaire)"
                      min="0"
                      max="10"
                    />
                    <div className="priority-value">{priority}</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="input-group">
          <label>Signification :</label>
          <input
            type="text"
            value={meaning}
            onChange={(e) => setMeaning(e.target.value)}
            placeholder="Signification du mot"
          />
        </div>

        <button className="save-button" onClick={handleSave}>
          💾 Enregistrer Root Word
        </button>
      </div>

      <div className="sound-keyboard">
        <div className="sound-section">
          <h3>Consonnes</h3>
          <div className="sound-groups consonants">
            {consonants.map((sound, index) => (
              <SoundButton key={index} sound={sound} category="consonant" />
            ))}
          </div>
        </div>

        <div className="sound-section">
          <h3>Voyelles</h3>
          <div className="sound-groups vowels">
            {vowels.map((sound, index) => (
              <SoundButton key={index} sound={sound} category="vowel" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
