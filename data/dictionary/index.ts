import { en } from "./en";
import { ur } from "./ur";

export type Language = "EN" | "UR";

const dictionaries = {
  EN: en,
  UR: ur,
} as const;

export const getDictionary = (lang: Language) => dictionaries[lang];

export { en, ur };
export type { Dictionary } from "./en";
