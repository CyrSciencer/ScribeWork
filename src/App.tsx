import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { RootWordComposer } from "./components/rootWordComposer/RootWordComposer";
import { RootWords } from "./components/divineRootWords/DivineRootWords";
import { HybridDatabaseViewer } from "./components/databaseViewer/HybridDatabaseViewer";
import { WordComposer } from "./components/WordComposer/WordComposer";
import { AllComposedWords } from "./components/allComposedWords/AllComposedWords";
import { RootWord } from "./utils/hybridDatabase";

interface ExtendedRootWord extends RootWord {
  isDivine?: boolean;
  glyphImage?: string;
}

function App() {
  const [page, setPage] = useState<number>(1);
  const [wordHistory, setWordHistory] = useState<
    { words: ExtendedRootWord[]; signification: string }[]
  >([]);

  return (
    <div className="App">
      <Header
        wordHistory={wordHistory}
        setWordHistory={setWordHistory}
        currentPage={page}
      />
      <main>
        <div className="page-navigation">
          {page !== 1 && (
            <button className="page-button" onClick={() => setPage(page - 1)}>
              ← Page {page - 1}
            </button>
          )}
          <span className="page-indicator">Page {page}</span>
          {page !== 5 && (
            <button className="page-button" onClick={() => setPage(page + 1)}>
              Page {page + 1} →
            </button>
          )}
        </div>

        <div className="page-content">
          {page === 1 && <RootWordComposer />}
          {page === 2 && <RootWords />}
          {page === 3 && <HybridDatabaseViewer />}
          {page === 4 && (
            <WordComposer
              wordHistory={wordHistory}
              setWordHistory={setWordHistory}
            />
          )}
          {page === 5 && <AllComposedWords wordHistory={wordHistory} />}
        </div>
      </main>
    </div>
  );
}

export default App;
