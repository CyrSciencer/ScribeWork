import CosmologicalBeings from "../components/CosmologyComponents/cosmologicalBeings/CosmologicalBeings";
import "../components/CosmologyComponents/Cosmology.css";
import { useState } from "react";
import { PureGlyphs } from "../components/CosmologyComponents/pureGlyphs/PureGlyphs";
import { Conjurates } from "../components/CosmologyComponents/conjurates/Conjurates";
import { DivineBorn } from "../components/CosmologyComponents/divineBorn/DivineBorn";
import { Angels } from "../components/CosmologyComponents/angel/Angels";
import { Demons } from "../components/CosmologyComponents/demon/Demons";
export const Cosmology = () => {
  const [page, setPage] = useState(1);
  return (
    <div className="cosmology-page">
      <div className="page-navigation">
        {page !== 1 && (
          <button className="page-button" onClick={() => setPage(page - 1)}>
            ← Page {page - 1}
          </button>
        )}
        <span className="page-indicator">Page {page}</span>
        {page !== 6 && (
          <button className="page-button" onClick={() => setPage(page + 1)}>
            Page {page + 1} →
          </button>
        )}
      </div>
      <div className="page-content">{page === 1 && <CosmologicalBeings />}</div>
      <div className="page-content">{page === 2 && <PureGlyphs />}</div>
      <div className="page-content">{page === 3 && <Conjurates />}</div>
      <div className="page-content">{page === 4 && <DivineBorn />}</div>
      <div className="page-content">{page === 5 && <Angels />}</div>
      <div className="page-content">{page === 6 && <Demons />}</div>
    </div>
  );
};
