import React, { useState, useEffect } from "react";
import {
  getAllComposedWords,
  getAllGrammaticalClasses,
  deleteComposedWord,
  moveComposedWordToClass,
  searchComposedWords,
  getComposedWordsDatabaseStats,
  ComposedWord,
} from "../../utils/composedWordsDatabase";
import "./ComposedWordsViewer.css";

interface ComposedWordsViewerProps {
  // Add any props if needed
}

interface GrammaticalClassData {
  className: string;
  words: ComposedWord[];
}

export const ComposedWordsViewer: React.FC<ComposedWordsViewerProps> = () => {
  const [composedWordsData, setComposedWordsData] = useState<
    GrammaticalClassData[]
  >([]);
  const [selectedClass, setSelectedClass] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredWords, setFilteredWords] = useState<GrammaticalClassData[]>(
    []
  );
  const [stats, setStats] = useState({
    totalClasses: 0,
    totalWords: 0,
    classesSummary: [] as {
      className: string;
      count: number;
    }[],
  });

  // Load composed words data
  const loadComposedWordsData = () => {
    const data = getAllComposedWords();
    setComposedWordsData(data);

    const databaseStats = getComposedWordsDatabaseStats();
    setStats(databaseStats);
  };

  // Initial load
  useEffect(() => {
    loadComposedWordsData();
  }, []);

  // Filter words based on selected class and search term
  useEffect(() => {
    let filtered = composedWordsData;

    // Filter by class
    if (selectedClass !== "all") {
      filtered = filtered.filter(
        (classData) => classData.className === selectedClass
      );
    }

    // Filter by search term
    if (searchTerm) {
      const searchResults = searchComposedWords(searchTerm);
      const searchResultIds = new Set(
        searchResults.map((result) => result.word.id)
      );

      filtered = filtered
        .map((classData) => ({
          ...classData,
          words: classData.words.filter((word) => searchResultIds.has(word.id)),
        }))
        .filter((classData) => classData.words.length > 0);
    }

    setFilteredWords(filtered);
  }, [composedWordsData, selectedClass, searchTerm]);

  // Handle word deletion
  const handleDeleteWord = (wordId: string) => {
    const confirmed = window.confirm(
      "⚠️ Êtes-vous sûr de vouloir supprimer ce mot composé ?\n\nCette action est irréversible."
    );

    if (confirmed) {
      const success = deleteComposedWord(wordId);
      if (success) {
        loadComposedWordsData();
        alert("✅ Mot composé supprimé avec succès !");
      } else {
        alert("❌ Erreur lors de la suppression du mot composé.");
      }
    }
  };

  // Handle moving word to different class
  const handleMoveWord = (wordId: string, newClassName: string) => {
    const success = moveComposedWordToClass(wordId, newClassName);
    if (success) {
      loadComposedWordsData();
      alert(
        `✅ Mot composé déplacé vers la classe "${newClassName}" avec succès !`
      );
    } else {
      alert("❌ Erreur lors du déplacement du mot composé.");
    }
  };

  // Get all unique classes for the move dropdown
  const getAllClasses = () => {
    return getAllGrammaticalClasses();
  };

  return (
    <div className="composed-words-viewer">
      <div className="viewer-header">
        <h2>Visualisateur des Mots Composés</h2>
        <p className="viewer-description">
          Explorez et gérez tous les mots composés organisés par classes
          grammaticales
        </p>
      </div>

      {/* Database Stats */}
      <div className="database-stats">
        <div className="stat-item">
          <span className="stat-number">{stats.totalWords}</span>
          <span className="stat-label">Mots Composés</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{stats.totalClasses}</span>
          <span className="stat-label">Classes Grammaticales</span>
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
            placeholder="Rechercher des mots composés..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button
            onClick={() => setSearchTerm("")}
            className="clear-search-button"
            disabled={!searchTerm}
          >
            🗑️ Effacer
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
      </div>

      {/* Composed Words Display */}
      <div className="composed-words-content">
        {filteredWords.length === 0 ? (
          <div className="empty-state">
            <p>
              {searchTerm
                ? `Aucun mot composé trouvé pour "${searchTerm}"`
                : selectedClass !== "all"
                ? `Aucun mot composé dans la classe "${selectedClass}"`
                : "Aucun mot composé enregistré"}
            </p>
            {!searchTerm && selectedClass === "all" && (
              <p className="empty-state-help">
                Utilisez le Compositeur de Mots pour créer et sauvegarder des
                mots composés.
              </p>
            )}
          </div>
        ) : (
          filteredWords.map((classData) => (
            <div
              key={classData.className}
              className="grammatical-class-section"
            >
              <div className="class-header">
                <h3 className="class-title">
                  {classData.className}
                  <span className="class-count">
                    ({classData.words.length})
                  </span>
                </h3>
              </div>

              <div className="composed-words-grid">
                {classData.words.map((word) => (
                  <div key={word.id} className="composed-word-card">
                    <div className="word-display-section">
                      <div className="scribe-font composed-word-font">
                        {"<" + word.font + ">"}
                      </div>
                      <div className="word-ipa">/{word.ipa}/</div>
                      <div className="word-meaning">{word.signification}</div>
                    </div>

                    <div className="word-actions">
                      <select
                        onChange={(e) => {
                          if (e.target.value !== classData.className) {
                            handleMoveWord(word.id, e.target.value);
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
                        onClick={() => handleDeleteWord(word.id)}
                        className="delete-word-button"
                        title="Supprimer ce mot composé"
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
