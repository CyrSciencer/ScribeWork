import { RootWordComposer } from "../components/WordCreationComponents/rootWordComposer/RootWordComposer";
import { RootWordList } from "../components/WordCreationComponents/rootWordList/RootWordList";
import { AddVowel } from "../components/WordCreationComponents/addVowel/AddVowel";
import { useState } from "react";
import { FullWordList } from "../components/WordCreationComponents/fullWordList/FullWordList";

export const WordCreation = () => {
  const [page, setPage] = useState<number>(1);
  console.log("fullwordlist:", FullWordList);
  return (
    <div className="word-creation-page">
      <div className="page-navigation">
        {page !== 1 && (
          <button className="page-button" onClick={() => setPage(page - 1)}>
            ← Page {page - 1}
          </button>
        )}
        <span className="page-indicator">Page {page}</span>
        {page !== 4 && (
          <button className="page-button" onClick={() => setPage(page + 1)}>
            Page {page + 1} →
          </button>
        )}
      </div>

      <div className="page-content">
        {page === 1 && <RootWordComposer />}
        {page === 2 && <RootWordList />}
        {page === 3 && <AddVowel />}
        {page === 4 && <FullWordList />}
      </div>
    </div>
  );
};
