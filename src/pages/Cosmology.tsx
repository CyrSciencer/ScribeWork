import CosmologicalBeings from "../components/CosmologyComponents/cosmologicalBeings/CosmologicalBeings";
import "../components/CosmologyComponents/Cosmology.css";
import { useState } from "react";
import { CosmologicalEntities } from "../components/CosmologyComponents/cosmologicalEntities/CosmologicalEntities";
import { PureGlyphs } from "../components/CosmologyComponents/pureGlyphs/PureGlyphs";
import { Conjurates } from "../components/CosmologyComponents/conjurates/Conjurates";
import { CosmicGlyphs } from "../components/CosmologyComponents/cosmicGlyphs/CosmicGlyphs";

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
        {page !== 5 && (
          <button className="page-button" onClick={() => setPage(page + 1)}>
            Page {page + 1} →
          </button>
        )}
      </div>
      <div className="page-content">{page === 1 && <CosmologicalBeings />}</div>
      <div className="page-content">
        {page === 2 && <CosmologicalEntities />}
      </div>
      <div className="page-content">{page === 3 && <PureGlyphs />}</div>
      <div className="page-content">{page === 4 && <Conjurates />}</div>
      <div className="page-content">{page === 5 && <CosmicGlyphs />}</div>
    </div>
  );
};
