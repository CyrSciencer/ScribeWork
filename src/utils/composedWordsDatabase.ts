// COMPOSED WORDS DATABASE SYSTEM - Independent from Root Words
// Manages composed words with grammatical classes (noun, verb, adjective, etc.)

export interface ExtendedRootWord {
  ipa: string;
  font: string;
  signification: string;
  isDivine?: boolean;
  glyphImage?: string;
}

export interface ComposedWord {
  id: string;
  rootWords: ExtendedRootWord[];
  signification: string;
  font: string;
  ipa: string;
  createdAt: string;
  updatedAt: string;
}

export interface GrammaticalClass {
  name: string;
  words: ComposedWord[];
}

export type ComposedWordsDatabase = {
  [className: string]: GrammaticalClass;
};

export interface ComposedWordsDatabaseExport {
  grammaticalClasses: ComposedWordsDatabase;
  lastUpdated: string;
  version: string;
  metadata: {
    totalWords: number;
    totalClasses: number;
    exportedBy: string;
  };
}

// Grammatical Classes
export enum GrammaticalClasses {
  NOM = "nom",
  VERBE = "verbe",
  ADJECTIF = "adjectif",
  ADVERBE = "adverbe",
  PRONOM = "pronom",
  PREPOSITION = "préposition",
  CONJONCTION = "conjonction",
  INTERJECTION = "interjection",
  ARTICLE = "article",
  DETERMINER = "déterminant",
  AUXILIAIRE = "auxiliaire",
  MODAL = "modal",
  PARTICIPE = "participe",
  GERONDIF = "gérondif",
  INFINITIF = "infinitif",
  EXPRESSION = "expression",
  PHRASE = "phrase",
  AUTRE = "autre",
}

// localStorage keys
const COMPOSED_WORDS_STORAGE_KEY = "composed_words_database";
const COMPOSED_WORDS_BACKUP_KEY = "composed_words_database_backup";

// Default database structure with grammatical classes
const DEFAULT_COMPOSED_WORDS_DATABASE: ComposedWordsDatabase = {
  [GrammaticalClasses.NOM]: { name: "nom", words: [] },
  [GrammaticalClasses.VERBE]: { name: "verbe", words: [] },
  [GrammaticalClasses.ADJECTIF]: { name: "adjectif", words: [] },
  [GrammaticalClasses.ADVERBE]: { name: "adverbe", words: [] },
  [GrammaticalClasses.PRONOM]: { name: "pronom", words: [] },
  [GrammaticalClasses.PREPOSITION]: {
    name: "préposition",
    words: [],
  },
  [GrammaticalClasses.CONJONCTION]: {
    name: "conjonction",
    words: [],
  },
  [GrammaticalClasses.INTERJECTION]: {
    name: "interjection",
    words: [],
  },
  [GrammaticalClasses.ARTICLE]: { name: "article", words: [] },
  [GrammaticalClasses.DETERMINER]: {
    name: "déterminant",
    words: [],
  },
  [GrammaticalClasses.AUXILIAIRE]: {
    name: "auxiliaire",
    words: [],
  },
  [GrammaticalClasses.MODAL]: { name: "modal", words: [] },
  [GrammaticalClasses.PARTICIPE]: {
    name: "participe",
    words: [],
  },
  [GrammaticalClasses.GERONDIF]: { name: "gérondif", words: [] },
  [GrammaticalClasses.INFINITIF]: {
    name: "infinitif",
    words: [],
  },
  [GrammaticalClasses.EXPRESSION]: {
    name: "expression",
    words: [],
  },
  [GrammaticalClasses.PHRASE]: { name: "phrase", words: [] },
  [GrammaticalClasses.AUTRE]: { name: "autre", words: [] },
};

// Initialize database from localStorage or defaults
function loadComposedWordsFromLocalStorage(): ComposedWordsDatabase {
  if (typeof window === "undefined")
    return { ...DEFAULT_COMPOSED_WORDS_DATABASE };

  try {
    const stored = localStorage.getItem(COMPOSED_WORDS_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);

      // Ensure all default classes exist
      const mergedData = { ...DEFAULT_COMPOSED_WORDS_DATABASE };

      // Merge with stored data
      for (const [className, classData] of Object.entries(parsed)) {
        if (
          classData &&
          typeof classData === "object" &&
          "words" in classData
        ) {
          mergedData[className] = classData as GrammaticalClass;
        }
      }

      return mergedData;
    }
  } catch (error) {
    console.warn("Error loading composed words from localStorage:", error);
  }
  return { ...DEFAULT_COMPOSED_WORDS_DATABASE };
}

// Save to localStorage with automatic backup
function saveComposedWordsToLocalStorage(
  database: ComposedWordsDatabase
): void {
  if (typeof window === "undefined") return;

  try {
    // Create backup of current data before saving new
    const current = localStorage.getItem(COMPOSED_WORDS_STORAGE_KEY);
    if (current) {
      localStorage.setItem(COMPOSED_WORDS_BACKUP_KEY, current);
    }

    // Save new data
    localStorage.setItem(COMPOSED_WORDS_STORAGE_KEY, JSON.stringify(database));
    console.log("💾 Composed words data saved to localStorage with backup");
  } catch (error) {
    console.error("Error saving composed words to localStorage:", error);
  }
}

// Main database instance
export let COMPOSED_WORDS_DATABASE: ComposedWordsDatabase =
  loadComposedWordsFromLocalStorage();

// Generate unique ID for composed words
function generateComposedWordId(): string {
  return `composed_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Add composed word to a grammatical class
export const addComposedWord = (
  className: string,
  rootWords: ExtendedRootWord[],
  signification: string,
  font: string,
  ipa: string
): ComposedWord => {
  let normalizedClassName = className.toLowerCase().trim();

  // Ensure the class exists
  if (!COMPOSED_WORDS_DATABASE[normalizedClassName]) {
    console.warn(`Class ${normalizedClassName} not found, adding to 'autre'`);
    normalizedClassName = GrammaticalClasses.AUTRE;
  }

  const newComposedWord: ComposedWord = {
    id: generateComposedWordId(),
    rootWords: [...rootWords],
    signification,
    font,
    ipa,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  COMPOSED_WORDS_DATABASE[normalizedClassName].words.push(newComposedWord);
  saveComposedWordsToLocalStorage(COMPOSED_WORDS_DATABASE);

  console.log(`✅ Composed word added to class ${normalizedClassName}`);
  return newComposedWord;
};

// Get all grammatical classes
export const getAllGrammaticalClasses = (): {
  className: string;
}[] => {
  return Object.entries(COMPOSED_WORDS_DATABASE).map(
    ([className, classData]) => ({
      className,
    })
  );
};

// Get all composed words
export const getAllComposedWords = (): {
  className: string;
  words: ComposedWord[];
}[] => {
  return Object.entries(COMPOSED_WORDS_DATABASE).map(
    ([className, classData]) => ({
      className,
      words: classData.words,
    })
  );
};

// Get composed words by class
export const getComposedWordsByClass = (className: string): ComposedWord[] => {
  const normalizedClassName = className.toLowerCase().trim();
  return COMPOSED_WORDS_DATABASE[normalizedClassName]?.words || [];
};

// Update composed word
export const updateComposedWord = (
  wordId: string,
  updates: Partial<Omit<ComposedWord, "id" | "createdAt">>
): boolean => {
  for (const [className, classData] of Object.entries(
    COMPOSED_WORDS_DATABASE
  )) {
    const wordIndex = classData.words.findIndex((word) => word.id === wordId);
    if (wordIndex !== -1) {
      COMPOSED_WORDS_DATABASE[className].words[wordIndex] = {
        ...COMPOSED_WORDS_DATABASE[className].words[wordIndex],
        ...updates,
        updatedAt: new Date().toISOString(),
      };
      saveComposedWordsToLocalStorage(COMPOSED_WORDS_DATABASE);
      return true;
    }
  }
  return false;
};

// Delete composed word
export const deleteComposedWord = (wordId: string): boolean => {
  for (const [className, classData] of Object.entries(
    COMPOSED_WORDS_DATABASE
  )) {
    const wordIndex = classData.words.findIndex((word) => word.id === wordId);
    if (wordIndex !== -1) {
      COMPOSED_WORDS_DATABASE[className].words.splice(wordIndex, 1);
      saveComposedWordsToLocalStorage(COMPOSED_WORDS_DATABASE);
      return true;
    }
  }
  return false;
};

// Move composed word to different class
export const moveComposedWordToClass = (
  wordId: string,
  newClassName: string
): boolean => {
  const normalizedNewClassName = newClassName.toLowerCase().trim();

  if (!COMPOSED_WORDS_DATABASE[normalizedNewClassName]) {
    console.warn(`Target class ${normalizedNewClassName} not found`);
    return false;
  }

  // Find and remove word from current class
  let foundWord: ComposedWord | null = null;
  for (const [className, classData] of Object.entries(
    COMPOSED_WORDS_DATABASE
  )) {
    const wordIndex = classData.words.findIndex((word) => word.id === wordId);
    if (wordIndex !== -1) {
      foundWord = classData.words.splice(wordIndex, 1)[0];
      break;
    }
  }

  if (foundWord) {
    // Add to new class
    foundWord.updatedAt = new Date().toISOString();
    COMPOSED_WORDS_DATABASE[normalizedNewClassName].words.push(foundWord);
    saveComposedWordsToLocalStorage(COMPOSED_WORDS_DATABASE);
    return true;
  }

  return false;
};

// Search composed words
export const searchComposedWords = (
  searchTerm: string
): { className: string; word: ComposedWord }[] => {
  const results: { className: string; word: ComposedWord }[] = [];
  const searchLower = searchTerm.toLowerCase();

  Object.entries(COMPOSED_WORDS_DATABASE).forEach(([className, classData]) => {
    classData.words.forEach((word) => {
      if (
        word.signification.toLowerCase().includes(searchLower) ||
        word.ipa.toLowerCase().includes(searchLower) ||
        word.font.toLowerCase().includes(searchLower) ||
        word.rootWords.some(
          (rw) =>
            rw.signification.toLowerCase().includes(searchLower) ||
            rw.ipa.toLowerCase().includes(searchLower) ||
            rw.font.toLowerCase().includes(searchLower)
        )
      ) {
        results.push({
          className,
          word,
        });
      }
    });
  });

  return results;
};

// Get database statistics
export const getComposedWordsDatabaseStats = (): {
  totalClasses: number;
  totalWords: number;
  classesSummary: { className: string; count: number }[];
} => {
  const totalClasses = Object.keys(COMPOSED_WORDS_DATABASE).length;
  const totalWords = Object.values(COMPOSED_WORDS_DATABASE).reduce(
    (total, classData) => total + classData.words.length,
    0
  );

  const classesSummary = Object.entries(COMPOSED_WORDS_DATABASE).map(
    ([className, classData]) => ({
      className,
      count: classData.words.length,
    })
  );

  return {
    totalClasses,
    totalWords,
    classesSummary,
  };
};

// Export database
export function exportComposedWordsDatabase(): ComposedWordsDatabaseExport {
  const stats = getComposedWordsDatabaseStats();

  return {
    grammaticalClasses: COMPOSED_WORDS_DATABASE,
    lastUpdated: new Date().toISOString(),
    version: "1.0.0",
    metadata: {
      totalWords: stats.totalWords,
      totalClasses: stats.totalClasses,
      exportedBy: "LinguaSite Composed Words App",
    },
  };
}

// Download database as JSON file
export function downloadComposedWordsDatabase(): void {
  try {
    const exportData = exportComposedWordsDatabase();
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filename = `composed_words_${timestamp}.json`;

    const jsonBlob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: "application/json",
    });

    const url = URL.createObjectURL(jsonBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    console.log(`📁 Composed words database exported: ${filename}`);
    alert(
      `✅ Base de données des mots composés exportée !\nFichier: ${filename}\n\n💡 Sauvegardez ce fichier pour importer vos données plus tard.`
    );
  } catch (error) {
    console.error("Error downloading composed words database:", error);
    alert("❌ Erreur lors de l'export. Voir la console pour plus de détails.");
  }
}

// Import database from JSON file
export function importComposedWordsDatabase(file: File): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const jsonContent = event.target?.result as string;
        const importedData = JSON.parse(
          jsonContent
        ) as ComposedWordsDatabaseExport;

        // Validate import structure
        if (!importedData.grammaticalClasses) {
          throw new Error("Invalid file format: missing grammaticalClasses");
        }

        // Update runtime database
        COMPOSED_WORDS_DATABASE = {
          ...DEFAULT_COMPOSED_WORDS_DATABASE,
          ...importedData.grammaticalClasses,
        };

        // Save to localStorage immediately
        saveComposedWordsToLocalStorage(COMPOSED_WORDS_DATABASE);

        const stats = getComposedWordsDatabaseStats();
        console.log("📥 Composed words database imported successfully");
        alert(
          `✅ Base de données des mots composés importée avec succès !\n\n📊 Statistiques:\n• ${stats.totalWords} mots composés\n• ${stats.totalClasses} classes\n• Dernière mise à jour: ${importedData.lastUpdated}`
        );

        resolve(true);
      } catch (error) {
        console.error("Error importing composed words database:", error);
        alert(
          `❌ Erreur lors de l'import :\n${
            error instanceof Error ? error.message : "Erreur inconnue"
          }\n\n💡 Vérifiez que le fichier est un export valide de la base de données.`
        );
        reject(error);
      }
    };

    reader.onerror = () => {
      const error = new Error("Failed to read file");
      console.error("File read error:", error);
      alert("❌ Impossible de lire le fichier.");
      reject(error);
    };

    reader.readAsText(file);
  });
}

// Clear all composed words data
export const clearAllComposedWordsData = (): boolean => {
  if (typeof window === "undefined") return false;

  const confirmed = window.confirm(
    "⚠️ ATTENTION !\n\nCette action va supprimer TOUS les mots composés !\n\n• Tous les mots composés seront perdus\n• La sauvegarde localStorage sera effacée\n\n💡 Assurez-vous d'avoir exporté vos données avant de continuer.\n\nVoulez-vous vraiment continuer ?"
  );

  if (confirmed) {
    COMPOSED_WORDS_DATABASE = { ...DEFAULT_COMPOSED_WORDS_DATABASE };
    localStorage.removeItem(COMPOSED_WORDS_STORAGE_KEY);
    localStorage.removeItem(COMPOSED_WORDS_BACKUP_KEY);

    alert("🗑️ Tous les mots composés ont été supprimés !");
    console.log("🗑️ All composed words data cleared");
    return true;
  }

  return false;
};
