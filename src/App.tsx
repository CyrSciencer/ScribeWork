import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { RootWordComposer } from "./components/rootWordComposer/RootWordComposer";
import { RootWords } from "./components/divineRootWords/DivineRootWords";
import { HybridDatabaseViewer } from "./components/databaseViewer/HybridDatabaseViewer";
import { WordComposer } from "./components/WordComposer/WordComposer";
import { ComposedWordsViewer } from "./components/composedWordsViewer/ComposedWordsViewer";

function App() {
  const [page, setPage] = useState<number>(1);

  return (
    <div className="App">
      <Header currentPage={page} />
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
          {page === 4 && <WordComposer />}
          {page === 5 && <ComposedWordsViewer />}
        </div>
      </main>
    </div>
  );
}

export default App;
