import React, { useState, useRef } from "react";
import {
  getAllRootWords,
  getDatabaseStats,
  searchRootWords,
  downloadDatabase,
  importDatabase,
  restoreFromBackup,
  clearAllData,
} from "../../utils/hybridDatabase";
import "./DatabaseViewer.css";
import "./HybridStyles.css";

export const HybridDatabaseViewer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<
    { className: string; rootWord: any }[]
  >([]);
  const [showSearch, setShowSearch] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.trim()) {
      const results = searchRootWords(term);
      setSearchResults(results);
      setShowSearch(true);
    } else {
      setSearchResults([]);
      setShowSearch(false);
    }
  };

  const handleExport = () => {
    downloadDatabase();
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        await importDatabase(file);
        // Refresh the data by reloading the component state
        window.location.reload();
      } catch (error) {
        // Error is already handled in importDatabase function
      }
    }
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleRestore = () => {
    if (restoreFromBackup()) {
      window.location.reload();
    }
  };

  const handleClear = () => {
    if (clearAllData()) {
      window.location.reload();
    }
  };

  const stats = getDatabaseStats();
  const allRootWords = getAllRootWords();

  return (
    <div className="database-viewer-container">
      <h2>📚 Base de Données Hybride des Root Words</h2>

      {/* Import/Export Controls */}
      <div className="hybrid-controls-section">
        <h3>🔄 Gestion des Données</h3>
        <div className="controls-grid">
          <button
            className="control-button export-btn"
            onClick={handleExport}
            disabled={stats.totalRootWords === 0}
            title={
              stats.totalRootWords === 0
                ? "Aucune donnée à exporter"
                : "Télécharger la base de données"
            }
          >
            📥 Exporter JSON
          </button>

          <button
            className="control-button import-btn"
            onClick={handleImportClick}
            title="Importer une base de données depuis un fichier JSON"
          >
            📤 Importer JSON
          </button>

          <button
            className="control-button restore-btn"
            onClick={handleRestore}
            title="Restaurer depuis la sauvegarde localStorage"
          >
            🔄 Restaurer Backup
          </button>

          <button
            className="control-button clear-btn danger"
            onClick={handleClear}
            title="⚠️ Supprimer toutes les données (irréversible)"
          >
            🗑️ Tout Effacer
          </button>
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          onChange={handleFileSelect}
          style={{ display: "none" }}
        />
      </div>

      {/* System Info */}
      <div className="hybrid-info-section">
        <div className="hybrid-info">
          <h4>💡 Système Hybride : Export/Import + localStorage</h4>
          <ul>
            <li>
              <strong>💾 Sauvegarde Automatique :</strong> Tous vos root words
              sont sauvegardés automatiquement dans localStorage avec backup
            </li>
            <li>
              <strong>📁 Export/Import :</strong> Exportez vos données en JSON
              et importez-les sur n'importe quel ordinateur
            </li>
            <li>
              <strong>🌍 Portabilité :</strong> Vos fichiers JSON peuvent être
              partagés, commitées dans Git, et utilisés partout
            </li>
            <li>
              <strong>🛡️ Double Sécurité :</strong> localStorage + fichiers JSON
              = zéro perte de données
            </li>
          </ul>
        </div>
      </div>

      {/* Search Section */}
      <div className="search-section">
        <div className="search-input-group">
          <input
            type="text"
            placeholder="Rechercher par signification, IPA ou font..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="search-input"
          />
          <button
            className="clear-search-button"
            onClick={() => handleSearch("")}
            title="Effacer la recherche"
          >
            🗑️
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="database-stats">
        <h3>📈 Statistiques</h3>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">{stats.totalRootWords}</div>
            <div className="stat-label">Total Root Words</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{stats.totalClasses}</div>
            <div className="stat-label">Classes</div>
          </div>
        </div>

        <div className="class-stats">
          {stats.classesSummary.map(({ className, count }) => (
            <div key={className} className="class-stat-item">
              <strong>{className}:</strong> {count} mot{count > 1 ? "s" : ""}
            </div>
          ))}
        </div>
      </div>

      {/* Search Results or All Root Words */}
      <div className="database-content">
        {showSearch ? (
          <div className="search-results">
            <h3>🔍 Résultats de recherche ({searchResults.length})</h3>
            {searchResults.length === 0 ? (
              <p className="no-results">
                Aucun résultat trouvé pour "{searchTerm}"
              </p>
            ) : (
              <div className="results-list">
                {searchResults.map((result, index) => (
                  <div key={index} className="search-result-item">
                    <div className="result-class-tag">{result.className}</div>
                    <div className="root-word-display">
                      <span
                        className="font-display"
                        style={{ fontFamily: "ScribeWork" }}
                      >
                        {"<"}
                        {result.rootWord.font}
                        {">"}
                      </span>
                      <span className="ipa-display">
                        /{result.rootWord.ipa}/
                      </span>
                      <span className="meaning-display">
                        "{result.rootWord.signification}"
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="all-root-words">
            <h3>📖 Tous les Root Words par Classe</h3>
            {allRootWords.length === 0 ||
            allRootWords.every(({ rootWords }) => rootWords.length === 0) ? (
              <div className="empty-database">
                <h4>🗃️ Base de données vide</h4>
                <p>
                  Utilisez le Root Word Composer (Page 1) pour ajouter vos
                  premiers root words !
                </p>
                <p>
                  Ou importez une base de données existante avec le bouton "📤
                  Importer JSON" ci-dessus.
                </p>
              </div>
            ) : (
              allRootWords
                .filter(({ rootWords }) => rootWords.length > 0)
                .map(({ className, rootWords }) => (
                  <div key={className} className="class-group">
                    <h4 className="class-title">
                      {className.toUpperCase()} ({rootWords.length})
                    </h4>
                    <div className="root-words-grid">
                      {rootWords.map((word, index) => (
                        <div key={index} className="root-word-item">
                          <span
                            className="font-display"
                            style={{ fontFamily: "ScribeWork" }}
                          >
                            {"<"}
                            {word.font}
                            {">"}
                          </span>
                          <span className="ipa-display">/{word.ipa}/</span>
                          <span className="meaning-display">
                            "{word.signification}"
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
