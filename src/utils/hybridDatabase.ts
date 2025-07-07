// HYBRID DATABASE SYSTEM - Export/Import + localStorage
// Perfect solution for development and production (including Netlify)

export interface RootWord {
  ipa: string;
  font: string;
  signification: string;
}

export interface WordClass {
  priority: number;
  words: RootWord[];
}

export type RootWordDatabase = {
  [className: string]: WordClass;
};

export interface DatabaseExport {
  wordClasses: RootWordDatabase;
  lastUpdated: string;
  version: string;
  metadata: {
    totalWords: number;
    totalClasses: number;
    exportedBy: string;
  };
}

// Word Classes
export enum WordClasses {
  RACINE = "racine",
}

// localStorage keys
const STORAGE_KEY = "hybrid_root_words";
const BACKUP_KEY = "hybrid_root_words_backup";

// Default database structure
const DEFAULT_DATABASE: RootWordDatabase = {
  [WordClasses.RACINE]: { priority: 5, words: [] },
};

// Initialize database from localStorage or defaults
function loadFromLocalStorage(): RootWordDatabase {
  if (typeof window === "undefined") return { ...DEFAULT_DATABASE };

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);

      // Migration: Convert old format (array) to new format (WordClass)
      const migratedData: RootWordDatabase = {};

      for (const [className, value] of Object.entries(parsed)) {
        if (Array.isArray(value)) {
          // Old format: convert array to WordClass
          migratedData[className] = {
            priority: 0,
            words: value as RootWord[],
          };
        } else if (value && typeof value === "object" && "words" in value) {
          // New format: already WordClass
          migratedData[className] = value as WordClass;
        } else {
          // Invalid format: use default
          migratedData[className] = { priority: 0, words: [] };
        }
      }

      // Merge with defaults to ensure all classes exist
      return { ...DEFAULT_DATABASE, ...migratedData };
    }
  } catch (error) {
    console.warn("Error loading from localStorage:", error);
  }
  return { ...DEFAULT_DATABASE };
}

// Save to localStorage with automatic backup
function saveToLocalStorage(database: RootWordDatabase): void {
  if (typeof window === "undefined") return;

  try {
    // Create backup of current data before saving new
    const current = localStorage.getItem(STORAGE_KEY);
    if (current) {
      localStorage.setItem(BACKUP_KEY, current);
    }

    // Save new data
    localStorage.setItem(STORAGE_KEY, JSON.stringify(database));
    console.log("💾 Data saved to localStorage with backup");
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
}

// Main database instance
export let PROJECT_ROOT_WORDS: RootWordDatabase = loadFromLocalStorage();

// Export current database as downloadable JSON
export function exportDatabase(): DatabaseExport {
  const exportData: DatabaseExport = {
    wordClasses: PROJECT_ROOT_WORDS,
    lastUpdated: new Date().toISOString(),
    version: "1.0.0",
    metadata: {
      totalWords: getTotalWordsCount(),
      totalClasses: Object.keys(PROJECT_ROOT_WORDS).length,
      exportedBy: "LinguaSite Root Words App",
    },
  };

  return exportData;
}

// Download database as JSON file
export function downloadDatabase(): void {
  try {
    const exportData = exportDatabase();
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filename = `rootwords_${timestamp}.json`;

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

    console.log(`📁 Database exported: ${filename}`);
    alert(
      `✅ Base de données exportée !\nFichier: ${filename}\n\n💡 Sauvegardez ce fichier pour importer vos données plus tard.`
    );
  } catch (error) {
    console.error("Error downloading database:", error);
    alert("❌ Erreur lors de l'export. Voir la console pour plus de détails.");
  }
}

// Import database from JSON file
export function importDatabase(file: File): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const jsonContent = event.target?.result as string;
        const importedData = JSON.parse(jsonContent) as DatabaseExport;

        // Validate import structure
        if (!importedData.wordClasses) {
          throw new Error("Invalid file format: missing wordClasses");
        }

        // Update runtime database
        PROJECT_ROOT_WORDS = {
          ...DEFAULT_DATABASE,
          ...importedData.wordClasses,
        };

        // Save to localStorage immediately
        saveToLocalStorage(PROJECT_ROOT_WORDS);

        const stats = getDatabaseStats();
        console.log("📥 Database imported successfully");
        alert(
          `✅ Base de données importée avec succès !\n\n📊 Statistiques:\n• ${stats.totalRootWords} root words\n• ${stats.totalClasses} classes\n• Dernière mise à jour: ${importedData.lastUpdated}`
        );

        resolve(true);
      } catch (error) {
        console.error("Error importing database:", error);
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

// Restore from localStorage backup
export const restoreFromBackup = (): boolean => {
  if (typeof window === "undefined") return false;

  try {
    const backup = localStorage.getItem(BACKUP_KEY);
    if (backup) {
      const backupData = JSON.parse(backup);
      PROJECT_ROOT_WORDS = { ...DEFAULT_DATABASE, ...backupData };
      saveToLocalStorage(PROJECT_ROOT_WORDS);

      alert("✅ Données restaurées depuis la sauvegarde localStorage !");
      console.log("🔄 Restored from localStorage backup");
      return true;
    } else {
      alert("❌ Aucune sauvegarde trouvée dans localStorage.");
      return false;
    }
  } catch (error) {
    console.error("Error restoring backup:", error);
    alert("❌ Erreur lors de la restauration.");
    return false;
  }
};

// Get total words count
const getTotalWordsCount = (): number => {
  return Object.values(PROJECT_ROOT_WORDS).reduce((total, wordClass) => {
    // Guard: ensure wordClass exists and has words property
    if (!wordClass || !wordClass.words || !Array.isArray(wordClass.words)) {
      console.warn("Invalid wordClass detected:", wordClass);
      return total;
    }
    return total + wordClass.words.length;
  }, 0);
};

// Add new word class
export const addWordClass = (className: string, priority: number = 0): void => {
  const normalizedClassName = className.toLowerCase().trim();

  if (!PROJECT_ROOT_WORDS[normalizedClassName]) {
    // Add to enum-like structure
    const enumKey = normalizedClassName
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "_");
    (WordClasses as any)[enumKey] = normalizedClassName;

    // Initialize empty WordClass for this class
    PROJECT_ROOT_WORDS[normalizedClassName] = { priority, words: [] };

    // Save to localStorage immediately
    saveToLocalStorage(PROJECT_ROOT_WORDS);
  }
};

// Add root word to database with automatic localStorage save
export const addRootWordToClass = (
  className: string,
  rootWord: RootWord,
  priority: number = 0
): void => {
  const normalizedClassName = className.toLowerCase().trim();

  // Ensure the class exists
  addWordClass(normalizedClassName, priority);

  // Add the root word to the class
  if (!PROJECT_ROOT_WORDS[normalizedClassName]) {
    PROJECT_ROOT_WORDS[normalizedClassName] = { priority, words: [] };
  }

  // Update priority if provided
  if (priority > 0) {
    PROJECT_ROOT_WORDS[normalizedClassName].priority = priority;
  }

  PROJECT_ROOT_WORDS[normalizedClassName].words.push(rootWord);

  // Auto-save to localStorage
  saveToLocalStorage(PROJECT_ROOT_WORDS);

  console.log("✅ Root word saved with automatic localStorage backup!");
};

// Get all word classes
export const getAllWordClasses = (): string[] => {
  return Object.values(WordClasses);
};

// Get all word classes with their priorities
export const getAllWordClassesWithPriorities = (): {
  className: string;
  priority: number;
}[] => {
  return Object.entries(PROJECT_ROOT_WORDS).map(([className, wordClass]) => ({
    className,
    priority:
      wordClass && typeof wordClass.priority === "number"
        ? wordClass.priority
        : 0,
  }));
};

// Update class priority
export const updateClassPriority = (
  className: string,
  priority: number
): void => {
  const normalizedClassName = className.toLowerCase().trim();

  if (PROJECT_ROOT_WORDS[normalizedClassName]) {
    PROJECT_ROOT_WORDS[normalizedClassName].priority = priority;
    saveToLocalStorage(PROJECT_ROOT_WORDS);
  }
};

// Get all root words
export const getAllRootWords = (): {
  className: string;
  rootWords: RootWord[];
  priority: number;
}[] => {
  return Object.entries(PROJECT_ROOT_WORDS).map(([className, wordClass]) => ({
    className,
    rootWords: wordClass && wordClass.words ? wordClass.words : [],
    priority:
      wordClass && typeof wordClass.priority === "number"
        ? wordClass.priority
        : 0,
  }));
};

// Search root words
export const searchRootWords = (
  searchTerm: string
): { className: string; rootWord: RootWord; priority: number }[] => {
  const results: { className: string; rootWord: RootWord; priority: number }[] =
    [];
  const searchLower = searchTerm.toLowerCase();

  Object.entries(PROJECT_ROOT_WORDS).forEach(([className, wordClass]) => {
    // Guard: ensure wordClass exists and has words property
    if (!wordClass || !wordClass.words || !Array.isArray(wordClass.words)) {
      console.warn(
        "Invalid wordClass detected in search:",
        className,
        wordClass
      );
      return;
    }

    wordClass.words.forEach((rootWord) => {
      if (
        rootWord.signification.toLowerCase().includes(searchLower) ||
        rootWord.ipa.toLowerCase().includes(searchLower) ||
        rootWord.font.toLowerCase().includes(searchLower)
      ) {
        results.push({
          className,
          rootWord,
          priority: wordClass.priority || 0,
        });
      }
    });
  });

  return results;
};

// Get database statistics
export const getDatabaseStats = (): {
  totalClasses: number;
  totalRootWords: number;
  classesSummary: { className: string; count: number; priority: number }[];
} => {
  const totalClasses = Object.keys(PROJECT_ROOT_WORDS).length;
  const totalRootWords = getTotalWordsCount();

  const classesSummary = Object.entries(PROJECT_ROOT_WORDS).map(
    ([className, wordClass]) => ({
      className,
      count: wordClass && wordClass.words ? wordClass.words.length : 0,
      priority:
        wordClass && typeof wordClass.priority === "number"
          ? wordClass.priority
          : 0,
    })
  );

  return {
    totalClasses,
    totalRootWords,
    classesSummary,
  };
};

// Clear all data (with confirmation)
export const clearAllData = (): boolean => {
  if (typeof window === "undefined") return false;

  const confirmed = window.confirm(
    "⚠️ ATTENTION !\n\nCette action va supprimer TOUTES les données !\n\n• Tous les root words seront perdus\n• La sauvegarde localStorage sera effacée\n\n💡 Assurez-vous d'avoir exporté vos données avant de continuer.\n\nVoulez-vous vraiment continuer ?"
  );

  if (confirmed) {
    PROJECT_ROOT_WORDS = { ...DEFAULT_DATABASE };
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(BACKUP_KEY);

    alert("🗑️ Toutes les données ont été supprimées !");
    console.log("🗑️ All data cleared");
    return true;
  }

  return false;
};

// Delete a specific root word
export const deleteRootWord = (
  className: string,
  rootWordIndex: number
): boolean => {
  const normalizedClassName = className.toLowerCase().trim();

  if (!PROJECT_ROOT_WORDS[normalizedClassName]) {
    console.warn(`Class ${normalizedClassName} not found`);
    return false;
  }

  const wordClass = PROJECT_ROOT_WORDS[normalizedClassName];
  if (rootWordIndex < 0 || rootWordIndex >= wordClass.words.length) {
    console.warn(`Invalid root word index: ${rootWordIndex}`);
    return false;
  }

  // Remove the root word
  wordClass.words.splice(rootWordIndex, 1);

  // Save to localStorage
  saveToLocalStorage(PROJECT_ROOT_WORDS);

  console.log(`✅ Root word deleted from class ${normalizedClassName}`);
  return true;
};

// Move root word to different class
export const moveRootWordToClass = (
  fromClassName: string,
  rootWordIndex: number,
  toClassName: string
): boolean => {
  const normalizedFromClass = fromClassName.toLowerCase().trim();
  const normalizedToClass = toClassName.toLowerCase().trim();

  if (!PROJECT_ROOT_WORDS[normalizedFromClass]) {
    console.warn(`Source class ${normalizedFromClass} not found`);
    return false;
  }

  if (!PROJECT_ROOT_WORDS[normalizedToClass]) {
    console.warn(`Target class ${normalizedToClass} not found`);
    return false;
  }

  const fromWordClass = PROJECT_ROOT_WORDS[normalizedFromClass];
  if (rootWordIndex < 0 || rootWordIndex >= fromWordClass.words.length) {
    console.warn(`Invalid root word index: ${rootWordIndex}`);
    return false;
  }

  // Remove from source class
  const rootWord = fromWordClass.words.splice(rootWordIndex, 1)[0];

  // Add to target class
  PROJECT_ROOT_WORDS[normalizedToClass].words.push(rootWord);

  // Save to localStorage
  saveToLocalStorage(PROJECT_ROOT_WORDS);

  console.log(
    `✅ Root word moved from ${normalizedFromClass} to ${normalizedToClass}`
  );
  return true;
};

// Update a specific root word
export const updateRootWord = (
  className: string,
  rootWordIndex: number,
  updatedRootWord: RootWord
): boolean => {
  const normalizedClassName = className.toLowerCase().trim();

  if (!PROJECT_ROOT_WORDS[normalizedClassName]) {
    console.warn(`Class ${normalizedClassName} not found`);
    return false;
  }

  const wordClass = PROJECT_ROOT_WORDS[normalizedClassName];
  if (rootWordIndex < 0 || rootWordIndex >= wordClass.words.length) {
    console.warn(`Invalid root word index: ${rootWordIndex}`);
    return false;
  }

  // Update the root word
  wordClass.words[rootWordIndex] = { ...updatedRootWord };

  // Save to localStorage
  saveToLocalStorage(PROJECT_ROOT_WORDS);

  console.log(`✅ Root word updated in class ${normalizedClassName}`);
  return true;
};

// Force refresh localStorage with current DEFAULT_DATABASE structure
export const refreshLocalStorage = (): void => {
  if (typeof window === "undefined") return;

  try {
    // Reset to current DEFAULT_DATABASE structure
    PROJECT_ROOT_WORDS = { ...DEFAULT_DATABASE };

    // Clear old localStorage
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(BACKUP_KEY);

    // Save new structure
    saveToLocalStorage(PROJECT_ROOT_WORDS);

    console.log(
      "🔄 localStorage refreshed with new structure:",
      PROJECT_ROOT_WORDS
    );
    alert(
      "✅ localStorage rafraîchi avec la nouvelle structure !\n\n📊 Structure actuelle :\n• Classe RACINE (priorité: 5)\n• Anciennes classes supprimées"
    );
  } catch (error) {
    console.error("Error refreshing localStorage:", error);
    alert("❌ Erreur lors du rafraîchissement du localStorage.");
  }
};
