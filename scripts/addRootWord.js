const fs = require("fs");
const path = require("path");

/**
 * Script to add a new custom root word to the customRootWords.ts file
 * Usage: node scripts/addRootWord.js "KEY" "code" "ipa" "meaning" "class"
 */

if (process.argv.length < 7) {
  console.log(
    'Usage: node scripts/addRootWord.js "KEY" "code" "ipa" "meaning" "class"'
  );
  console.log(
    'Example: node scripts/addRootWord.js "FIRE" "FIR" "fir" "fire element" "elemental"'
  );
  process.exit(1);
}

const [, , key, code, ipa, meaning, wordClass] = process.argv;

const customRootWordsPath = path.join(
  __dirname,
  "../src/utils/customRootWords.ts"
);

try {
  // Read the current file
  let content = fs.readFileSync(customRootWordsPath, "utf8");

  // Create the new root word line
  const newRootWord = `  ${key} = "${code} (${ipa})", // ${meaning} - ${wordClass}`;

  // Find the position to insert (just before the closing brace of the enum)
  const enumClosingIndex = content.indexOf(
    "}",
    content.indexOf("export enum CustomRootWords")
  );

  if (enumClosingIndex === -1) {
    throw new Error("Could not find CustomRootWords enum closing brace");
  }

  // Check if this is the first entry (no other entries exist)
  const enumContent = content
    .substring(
      content.indexOf("{", content.indexOf("export enum CustomRootWords")) + 1,
      enumClosingIndex
    )
    .trim();

  const isFirstEntry =
    enumContent.includes("// Generated custom root words will be added here") &&
    !enumContent.includes("=");

  let insertionPoint;
  let newContent;

  if (isFirstEntry) {
    // Remove the example comment and add the first entry
    const beforeEnum = content.substring(
      0,
      content.indexOf("{", content.indexOf("export enum CustomRootWords")) + 1
    );
    const afterEnum = content.substring(enumClosingIndex);
    newContent = beforeEnum + "\n" + newRootWord + "\n" + afterEnum;
  } else {
    // Add to existing entries
    const beforeInsertion = content.substring(0, enumClosingIndex);
    const afterInsertion = content.substring(enumClosingIndex);

    // Add comma to previous line if needed
    const lastLineBeforeClosing = beforeInsertion.split("\n").slice(-2, -1)[0];
    if (
      lastLineBeforeClosing &&
      lastLineBeforeClosing.trim() &&
      !lastLineBeforeClosing.trim().endsWith(",")
    ) {
      const lines = beforeInsertion.split("\n");
      lines[lines.length - 2] = lines[lines.length - 2] + ",";
      newContent = lines.join("\n") + newRootWord + "\n" + afterInsertion;
    } else {
      newContent = beforeInsertion + newRootWord + "\n" + afterInsertion;
    }
  }

  // Write the updated content
  fs.writeFileSync(customRootWordsPath, newContent, "utf8");

  console.log(`✅ Successfully added root word: ${key}`);
  console.log(`   ${newRootWord}`);
  console.log(`   to ${customRootWordsPath}`);
} catch (error) {
  console.error("❌ Error adding root word:", error.message);
  process.exit(1);
}
