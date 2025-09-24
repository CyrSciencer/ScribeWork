import { useState } from "react";
import { Shapes } from "../components/inscriptionsComponents/shapesOfInscriptions/Shapes";

export const ScripturgicInscription = () => {
  const [page, setPage] = useState<number>(1);

  return (
    <div className="scripturgic-inscription-page">
      <div className="page-navigation">
        {page !== 1 && (
          <button className="page-button" onClick={() => setPage(page - 1)}>
            ← Page {page - 1}
          </button>
        )}
        <span className="page-indicator">Page {page}</span>
        {page !== 1 && (
          <button className="page-button" onClick={() => setPage(page + 1)}>
            Page {page + 1} →
          </button>
        )}
      </div>

      <div className="page-content">
        {page === 1 && (
          <div className="scripturgic-inscription-content">
            <h1>Scripturgic Inscription</h1>
            <Shapes />
          </div>
        )}
      </div>
    </div>
  );
};
