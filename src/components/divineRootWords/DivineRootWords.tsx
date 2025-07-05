import {
  DivineRootWords,
  DivineRootWordsForFont,
} from "../../utils/fixedRootWords";
import { glyphsImport } from "../../utils/glyphsImport";
import "./DivineRootWords.css";

export const RootWords = () => {
  return (
    <div className="root-words-container">
      <h1>Divine Root Words</h1>
      <small>Primordial Root Words</small>
      <div>
        divine name/word have 2 forms created by the scribe:
        <ul>
          <li>the runic form</li>
          <li>the glyph form</li>
        </ul>
      </div>
      <div>
        {Object.entries(DivineRootWords).map(([key, rootWord]) => {
          console.log("imageName", key);
          return (
            <div key={rootWord} className="root-word-container">
              {rootWord} {"->"}
              <span className="font-text">
                {"<"}
                {
                  DivineRootWordsForFont[
                    key as keyof typeof DivineRootWordsForFont
                  ]
                }
                {">"}
              </span>
              <span>
                <img
                  src={glyphsImport[key as keyof typeof glyphsImport]}
                  alt={key}
                />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
