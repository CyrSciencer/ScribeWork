// HYBRID DATABASE SYSTEM - Export/Import + localStorage
// Perfect solution for development and production (including Netlify)

export interface RootWord {
  ipa: string;
  font: string;
  signification: string;
}

export type RootWordDatabase = {
  [className: string]: RootWord[];
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
  PREFIXE = "prefixe",
  SUFFIXE = "suffixe",
  RACINE = "racine",
  MODIFICATEUR = "modificateur",
  CONNECTEUR = "connecteur",
}

// localStorage keys
const STORAGE_KEY = "hybrid_root_words";
const BACKUP_KEY = "hybrid_root_words_backup";

// Default database structure
const DEFAULT_DATABASE: RootWordDatabase = {
  [WordClasses.PREFIXE]: [],
  [WordClasses.SUFFIXE]: [],
  [WordClasses.RACINE]: [],
  [WordClasses.MODIFICATEUR]: [],
  [WordClasses.CONNECTEUR]: [],
};

// Initialize database from localStorage or defaults
function loadFromLocalStorage(): RootWordDatabase {
  if (typeof window === "undefined") return { ...DEFAULT_DATABASE };

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Merge with defaults to ensure all classes exist
      return { ...DEFAULT_DATABASE, ...parsed };
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
export function restoreFromBackup(): boolean {
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
}

// Get total words count
function getTotalWordsCount(): number {
  return Object.values(PROJECT_ROOT_WORDS).reduce(
    (total, words) => total + words.length,
    0
  );
}

// Add new word class
export function addWordClass(className: string): void {
  const normalizedClassName = className.toLowerCase().trim();

  if (!PROJECT_ROOT_WORDS[normalizedClassName]) {
    // Add to enum-like structure
    const enumKey = normalizedClassName
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "_");
    (WordClasses as any)[enumKey] = normalizedClassName;

    // Initialize empty array for this class
    PROJECT_ROOT_WORDS[normalizedClassName] = [];

    // Save to localStorage immediately
    saveToLocalStorage(PROJECT_ROOT_WORDS);
  }
}

// Add root word to database with automatic localStorage save
export function addRootWordToClass(
  className: string,
  rootWord: RootWord
): void {
  const normalizedClassName = className.toLowerCase().trim();

  // Ensure the class exists
  addWordClass(normalizedClassName);

  // Add the root word to the class
  if (!PROJECT_ROOT_WORDS[normalizedClassName]) {
    PROJECT_ROOT_WORDS[normalizedClassName] = [];
  }

  PROJECT_ROOT_WORDS[normalizedClassName].push(rootWord);

  // Auto-save to localStorage
  saveToLocalStorage(PROJECT_ROOT_WORDS);

  console.log("✅ Root word saved with automatic localStorage backup!");
}

// Get all word classes
export function getAllWordClasses(): string[] {
  return Object.values(WordClasses);
}

// Get all root words
export function getAllRootWords(): {
  className: string;
  rootWords: RootWord[];
}[] {
  return Object.entries(PROJECT_ROOT_WORDS).map(([className, rootWords]) => ({
    className,
    rootWords,
  }));
}

// Search root words
export function searchRootWords(
  searchTerm: string
): { className: string; rootWord: RootWord }[] {
  const results: { className: string; rootWord: RootWord }[] = [];
  const searchLower = searchTerm.toLowerCase();

  Object.entries(PROJECT_ROOT_WORDS).forEach(([className, rootWords]) => {
    rootWords.forEach((rootWord) => {
      if (
        rootWord.signification.toLowerCase().includes(searchLower) ||
        rootWord.ipa.toLowerCase().includes(searchLower) ||
        rootWord.font.toLowerCase().includes(searchLower)
      ) {
        results.push({ className, rootWord });
      }
    });
  });

  return results;
}

// Get database statistics
export function getDatabaseStats(): {
  totalClasses: number;
  totalRootWords: number;
  classesSummary: { className: string; count: number }[];
} {
  const totalClasses = Object.keys(PROJECT_ROOT_WORDS).length;
  const totalRootWords = getTotalWordsCount();

  const classesSummary = Object.entries(PROJECT_ROOT_WORDS).map(
    ([className, rootWords]) => ({
      className,
      count: rootWords.length,
    })
  );

  return {
    totalClasses,
    totalRootWords,
    classesSummary,
  };
}

// Clear all data (with confirmation)
export function clearAllData(): boolean {
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
}
