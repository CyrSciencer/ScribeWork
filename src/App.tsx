import React from "react";
import "./App.css";
import { RootWordComposer } from "./components/rootWordComposer/RootWordComposer";
import { RootWords } from "./components/rootWords/RootWords";
import { HybridDatabaseViewer } from "./components/databaseViewer/HybridDatabaseViewer";
import { useState } from "react";

function App() {
  const [page, setPage] = useState<number>(1);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lostwood Scribe Work</h1>
      </header>
      <main>
        {page !== 1 && (
          <button className="page-button" onClick={() => setPage(page - 1)}>
            Page {page - 1}
          </button>
        )}
        <button className="page-button" onClick={() => setPage(page + 1)}>
          Page {page + 1}
        </button>
        {page === 1 && <RootWordComposer />}
        {page === 2 && <RootWords />}
        {page === 3 && <HybridDatabaseViewer />}
        {page === 4 && <div>Page 4</div>}
        {page === 5 && <div>Page 5</div>}
        {page === 6 && <div>Page 6</div>}
        {page === 7 && <div>Page 7</div>}
      </main>
    </div>
  );
}

export default App;
