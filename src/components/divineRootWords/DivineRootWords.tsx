import {
  DivineRootWords,
  DivineRootWordsForFont,
  DivineRootWordsSignification,
} from "../../utils/fixedRootWords";
import { glyphsImport } from "../../utils/glyphsImport";
import "./DivineRootWords.css";

export const RootWords = () => {
  return (
    <div className="root-words-container">
      <h1>Concepts divins</h1>
      <small>Mots primordiaux divins</small>
      <div>
        Les concepts divins ont deux formes créées par le scribe :
        <ul>
          <li>la forme runique</li>
          <li>la forme glyphe</li>
        </ul>
      </div>
      <div>
        {Object.entries(DivineRootWords).map(([key, rootWord]) => {
          console.log("imageName", key);
          return (
            <div key={rootWord} className="root-word-container">
              <div className="root-word-text">
                {rootWord}
                <div className="root-word-signification">
                  {
                    DivineRootWordsSignification[
                      key as keyof typeof DivineRootWordsSignification
                    ]
                  }
                </div>
              </div>
              <div className="font-text complete-word">
                {"<"}
                {
                  DivineRootWordsForFont[
                    key as keyof typeof DivineRootWordsForFont
                  ]
                }
                {">"}
              </div>
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
