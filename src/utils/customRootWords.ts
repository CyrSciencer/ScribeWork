// Custom Root Words created with the Root Word Composer
// Each word includes: phonetic transcription, meaning, and class

export enum CustomRootWords {}
// Generated custom root words will be added here
// Example format:
// EXAMPLE = "EXAMPLE (eksɑ̃pl)", // meaning - class

// Type for managing custom root words
export interface CustomRootWordEntry {
  key: string;
  code: string;
  ipa: string;
  meaning: string;
  wordClass: string;
}

// Function to add a new custom root word
export function addCustomRootWord(entry: CustomRootWordEntry): string {
  const enumLine = `  ${entry.key} = "${entry.code} (${entry.ipa})", // ${entry.meaning} - ${entry.wordClass}`;
  return enumLine;
}

// Function to validate a custom root word entry
export function validateCustomRootWord(
  entry: Partial<CustomRootWordEntry>
): boolean {
  return !!(
    entry.key &&
    entry.code &&
    entry.ipa &&
    entry.meaning &&
    entry.wordClass
  );
}
