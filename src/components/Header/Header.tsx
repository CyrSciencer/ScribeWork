import React, { useRef } from "react";
import {
  getAllWordClassesWithPriorities,
  getAllRootWords,
  RootWord,
} from "../../utils/hybridDatabase";
import {
  DivineRootWords,
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
  composedWords: { words: ExtendedRootWord[]; signification: string }[];
}

interface HeaderProps {
  wordHistory: { words: ExtendedRootWord[]; signification: string }[];
  setWordHistory: (
    history: { words: ExtendedRootWord[]; signification: string }[]
  ) => void;
  currentPage: number;
}

export const Header: React.FC<HeaderProps> = ({
  wordHistory,
  setWordHistory,
  currentPage,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Convert Divine Root Words to ExtendedRootWord format
  const convertDivineRootWords = (): ExtendedRootWord[] => {
    return Object.entries(DivineRootWords).map(([key, value]) => {
      const ipaMatch = value.match(/\(([^)]+)\)/);
      const ipa = ipaMatch ? ipaMatch[1] : "";
      const name = value.split(" (")[0];

      return {
        ipa: ipa,
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

    const exportData: ExportData = {
      metadata: {
        version: "1.0.0",
        exportDate: new Date().toISOString(),
        description:
          "Lingua Word Composer Export - Root Words and Composed Words",
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
      composedWords: wordHistory,
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
  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const importedData: ExportData = JSON.parse(content);

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

        // Import composed words to history
        setWordHistory(importedData.composedWords);

        // Show success message
        alert(
          `Import réussi!\n` +
            `- Classes de mots: ${importedData.rootWords.classes.length}\n` +
            `- Mots divins: ${importedData.rootWords.divine.length}\n` +
            `- Mots composés: ${importedData.composedWords.length}\n` +
            `- Date d'export: ${new Date(
              importedData.metadata.exportDate
            ).toLocaleDateString()}`
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
