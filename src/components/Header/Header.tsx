import React, { useRef } from "react";
import {
  getAllWordClassesWithPriorities,
  getAllRootWords,
  RootWord,
} from "../../utils/hybridDatabase";
import {
  exportComposedWordsDatabase,
  importComposedWordsDatabase,
  getComposedWordsDatabaseStats,
} from "../../utils/composedWordsDatabase";
import {
  DivineRootWords,
  DivineRootWordsIPA,
  DivineRootWordsForFont,
} from "../../utils/fixedRootWords";
import { glyphsImport } from "../../utils/glyphsImport";
import "./Header.css";

interface ExtendedRootWord extends RootWord {
  isDivine?: boolean;
  glyphImage?: string;
}

interface ExportData {
  metadata: {
    version: string;
    exportDate: string;
    description: string;
  };
  rootWords: {
    classes: Array<{
      className: string;
      priority: number;
      rootWords: RootWord[];
    }>;
    divine: ExtendedRootWord[];
  };
  composedWords: any; // ComposedWordsDatabaseExport type
}

interface HeaderProps {
  currentPage: number;
}

export const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  // Export data to JSON file
  const exportData = () => {
    const allRootWords = getAllRootWords();
    const allClasses = getAllWordClassesWithPriorities();
    const divineRootWords = convertDivineRootWords();
    const composedWordsDatabase = exportComposedWordsDatabase();

    const exportData: ExportData = {
      metadata: {
        version: "3.0.0",
        exportDate: new Date().toISOString(),
        description:
          "Lingua Word Composer Export - Root Words and Composed Words Database",
      },
      rootWords: {
        classes: allRootWords.map((classData) => ({
          className: classData.className,
          priority:
            allClasses.find((cls) => cls.className === classData.className)
              ?.priority || 0,
          rootWords: classData.rootWords,
        })),
        divine: divineRootWords,
      },
      composedWords: composedWordsDatabase,
    };

    const jsonString = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `lingua-export-${
      new Date().toISOString().split("T")[0]
    }.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Import data from JSON file
  const importData = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const content = e.target?.result as string;
        const importedData: any = JSON.parse(content);

        // Validate the imported data structure
        if (
          !importedData.metadata ||
          !importedData.rootWords ||
          !importedData.composedWords
        ) {
          alert(
            "Format de fichier invalide. Veuillez sélectionner un fichier d'export valide."
          );
          return;
        }

        let databaseCount = 0;

        // Handle different export versions
        if (importedData.metadata.version === "3.0.0") {
          // Version 3.0.0 - Only composed words database
          try {
            const dbBlob = new Blob(
              [JSON.stringify(importedData.composedWords)],
              {
                type: "application/json",
              }
            );
            const dbFile = new File([dbBlob], "composed-words-db.json", {
              type: "application/json",
            });

            await importComposedWordsDatabase(dbFile);
            const dbStats = getComposedWordsDatabaseStats();
            databaseCount = dbStats.totalWords;
          } catch (error) {
            console.warn("Error importing composed words database:", error);
          }
        } else if (
          importedData.metadata.version === "2.0.0" &&
          importedData.composedWords.history
        ) {
          // Version 2.0.0 - Legacy format with history and database
          if (importedData.composedWords.database) {
            try {
              const dbBlob = new Blob(
                [JSON.stringify(importedData.composedWords.database)],
                {
                  type: "application/json",
                }
              );
              const dbFile = new File([dbBlob], "composed-words-db.json", {
                type: "application/json",
              });

              await importComposedWordsDatabase(dbFile);
              const dbStats = getComposedWordsDatabaseStats();
              databaseCount = dbStats.totalWords;
            } catch (error) {
              console.warn("Error importing composed words database:", error);
            }
          }
        } else {
          // Version 1.0.0 or older - Legacy history format (no longer supported for composed words)
          console.warn(
            "Legacy history format no longer supported for composed words"
          );
        }

        // Show success message
        alert(
          `Import réussi!\n` +
            `- Classes de mots insécables: ${importedData.rootWords.classes.length}\n` +
            `- Mots divins: ${importedData.rootWords.divine.length}\n` +
            `- Base de données mots composés: ${databaseCount}\n` +
            `- Date d'export: ${new Date(
              importedData.metadata.exportDate
            ).toLocaleDateString()}\n` +
            `- Version: ${importedData.metadata.version || "1.0.0"}`
        );
      } catch (error) {
        console.error("Erreur lors de l'import:", error);
        alert(
          "Erreur lors de l'import du fichier. Veuillez vérifier le format du fichier."
        );
      }
    };

    reader.readAsText(file);

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Trigger file input click
  const triggerImport = () => {
    fileInputRef.current?.click();
  };

  // Get page name for display
  const getPageName = (page: number) => {
    switch (page) {
      case 1:
        return "Composition de mots insecables";
      case 2:
        return "Mots divins";
      case 3:
        return "Base de données des mots insecables";
      case 4:
        return "Composition de mots composés";
      case 5:
        return "Base de données des mots composés";
      default:
        return `Page ${page}`;
    }
  };

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-left">
          <h1>Lostwood: Travail du SCRIBE</h1>
          <span className="current-page">{getPageName(currentPage)}</span>
        </div>
        <img src={glyphsImport.THE_SCRIBE} alt="scribeGlyph" />
        <div className="import-export-controls">
          <button onClick={exportData} className="header-button export-button">
            📤 Exporter
          </button>
          <button
            onClick={triggerImport}
            className="header-button import-button"
          >
            📥 Importer
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={importData}
            style={{ display: "none" }}
          />
        </div>
      </div>
    </header>
  );
};
