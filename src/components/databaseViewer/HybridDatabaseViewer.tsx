import React, { useState, useEffect } from "react";
import {
  getAllRootWords,
  getAllWordClassesWithPriorities,
  getDatabaseStats,
  searchRootWords,
  deleteRootWord,
  moveRootWordToClass,
  restoreFromBackup,
  clearAllData,
  RootWord,
} from "../../utils/hybridDatabase";

import "./HybridStyles.css";

interface RootWordClassData {
  className: string;
  rootWords: RootWord[];
  priority: number;
}

interface RootWordWithIndex {
  rootWord: RootWord;
  index: number;
  className: string;
  priority: number;
}

export const HybridDatabaseViewer: React.FC = () => {
  const [rootWordsData, setRootWordsData] = useState<RootWordClassData[]>([]);
  const [selectedClass, setSelectedClass] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredWords, setFilteredWords] = useState<RootWordClassData[]>([]);
  const [stats, setStats] = useState({
    totalClasses: 0,
    totalRootWords: 0,
    classesSummary: [] as {
      className: string;
      count: number;
      priority: number;
    }[],
  });

  // Load root words data
  const loadRootWordsData = () => {
    const data = getAllRootWords();
    setRootWordsData(data);

    const databaseStats = getDatabaseStats();
    setStats(databaseStats);
  };

  // Initial load
  useEffect(() => {
    loadRootWordsData();
  }, []);

  // Filter words based on selected class and search term
  useEffect(() => {
    let filtered = rootWordsData;

    // Filter by class
    if (selectedClass !== "all") {
      filtered = filtered.filter(
        (classData) => classData.className === selectedClass
      );
    }

    // Filter by search term
    if (searchTerm) {
      const searchResults = searchRootWords(searchTerm);
      const searchResultsMap = new Map();

      searchResults.forEach((result) => {
        const key = `${result.className}_${result.rootWord.font}_${result.rootWord.ipa}`;
        searchResultsMap.set(key, result);
      });

      filtered = filtered
        .map((classData) => ({
          ...classData,
          rootWords: classData.rootWords.filter((rootWord) => {
            const key = `${classData.className}_${rootWord.font}_${rootWord.ipa}`;
            return searchResultsMap.has(key);
          }),
        }))
        .filter((classData) => classData.rootWords.length > 0);
    }

    setFilteredWords(filtered);
  }, [rootWordsData, selectedClass, searchTerm]);

  // Handle root word deletion
  const handleDeleteRootWord = (className: string, index: number) => {
    const confirmed = window.confirm(
      "⚠️ Êtes-vous sûr de vouloir supprimer ce root word ?\n\nCette action est irréversible."
    );

    if (confirmed) {
      const success = deleteRootWord(className, index);
      if (success) {
        loadRootWordsData();
        alert("✅ Root word supprimé avec succès !");
      } else {
        alert("❌ Erreur lors de la suppression du root word.");
      }
    }
  };

  // Handle moving root word to different class
  const handleMoveRootWord = (
    fromClassName: string,
    index: number,
    toClassName: string
  ) => {
    const success = moveRootWordToClass(fromClassName, index, toClassName);
    if (success) {
      loadRootWordsData();
      alert(
        `✅ Root word déplacé vers la classe "${toClassName}" avec succès !`
      );
    } else {
      alert("❌ Erreur lors du déplacement du root word.");
    }
  };

  const handleRestore = () => {
    if (restoreFromBackup()) {
      loadRootWordsData();
    }
  };

  const handleClear = () => {
    if (clearAllData()) {
      loadRootWordsData();
    }
  };

  // Get priority indicator
  const getPriorityIndicator = (priority: number) => {
    if (priority === 0) return "🔵";
    if (priority <= 3) return "🟢";
    if (priority <= 7) return "🟡";
    return "🔴";
  };

  // Get all unique classes for the move dropdown
  const getAllClasses = () => {
    return getAllWordClassesWithPriorities().sort(
      (a, b) => a.priority - b.priority
    );
  };

  return (
    <div className="database-viewer-container">
      <div className="viewer-header">
        <h2>📚 Visualisateur des Root Words</h2>
        <p className="viewer-description">
          Explorez et gérez tous les root words organisés par classes
        </p>
      </div>

      {/* Database Stats */}
      <div className="database-stats">
        <div className="stat-item">
          <span className="stat-number">{stats.totalRootWords}</span>
          <span className="stat-label">Root Words</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{stats.totalClasses}</span>
          <span className="stat-label">Classes</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">
            {stats.classesSummary.filter((c) => c.count > 0).length}
          </span>
          <span className="stat-label">Classes Utilisées</span>
        </div>
      </div>

      {/* Controls */}
      <div className="viewer-controls">
        <div className="search-controls">
          <input
            type="text"
            placeholder="Rechercher des root words..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button
            onClick={() => setSearchTerm("")}
            className="clear-search-button"
            disabled={!searchTerm}
          >
            Effacer recherche
          </button>
        </div>

        <div className="class-filter">
          <label htmlFor="class-filter-select">Filtrer par classe:</label>
          <select
            id="class-filter-select"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="class-filter-select"
          >
            <option value="all">Toutes les classes</option>
            {getAllClasses().map((classData) => (
              <option key={classData.className} value={classData.className}>
                {classData.className} (
                {stats.classesSummary.find(
                  (c) => c.className === classData.className
                )?.count || 0}
                )
              </option>
            ))}
          </select>
        </div>

        <div className="database-actions">
          <button
            onClick={handleRestore}
            className="action-button restore-button"
            title="Restaurer depuis la sauvegarde localStorage"
          >
            🔄 Restaurer
          </button>
          <button
            onClick={handleClear}
            className="action-button danger-button"
            title="⚠️ Supprimer toutes les données (irréversible)"
          >
            🗑️ Effacer Tout
          </button>
        </div>
      </div>

      {/* Root Words Display */}
      <div className="root-words-content">
        {filteredWords.length === 0 ? (
          <div className="empty-state">
            <p>
              {searchTerm
                ? `Aucun root word trouvé pour "${searchTerm}"`
                : selectedClass !== "all"
                ? `Aucun root word dans la classe "${selectedClass}"`
                : "Aucun root word enregistré"}
            </p>
            {!searchTerm && selectedClass === "all" && (
              <p className="empty-state-help">
                Utilisez le Root Word Composer (Page 1) pour créer et
                sauvegarder des root words.
              </p>
            )}
          </div>
        ) : (
          filteredWords.map((classData) => (
            <div key={classData.className} className="class-section">
              <div className="class-header">
                <h3 className="class-title">
                  {getPriorityIndicator(classData.priority)}{" "}
                  {classData.className}
                  <span className="class-count">
                    ({classData.rootWords.length})
                  </span>
                </h3>
                <div className="class-priority">
                  Priorité: {classData.priority}
                </div>
              </div>

              <div className="root-words-grid">
                {classData.rootWords.map((rootWord, index) => (
                  <div key={index} className="root-word-card">
                    <div className="word-display-section">
                      <div className="scribe-font complete-word">
                        {"<" + rootWord.font + ">"}
                      </div>
                      <div className="word-ipa">/{rootWord.ipa}/</div>
                      <div className="word-meaning">
                        {rootWord.signification}
                      </div>
                    </div>

                    <div className="word-actions">
                      <select
                        onChange={(e) => {
                          if (e.target.value !== classData.className) {
                            handleMoveRootWord(
                              classData.className,
                              index,
                              e.target.value
                            );
                          }
                        }}
                        value={classData.className}
                        className="move-class-select"
                        title="Déplacer vers une autre classe"
                      >
                        <option value={classData.className}>
                          📁 {classData.className}
                        </option>
                        {getAllClasses()
                          .filter((c) => c.className !== classData.className)
                          .map((classItem) => (
                            <option
                              key={classItem.className}
                              value={classItem.className}
                            >
                              ➡️ {classItem.className}
                            </option>
                          ))}
                      </select>

                      <button
                        onClick={() =>
                          handleDeleteRootWord(classData.className, index)
                        }
                        className="delete-word-button"
                        title="Supprimer ce root word"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
