"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  getDictionary,
  type Language,
} from "@/data/dictionary";

type LanguageContextValue = {
  language: Language;
  dictionary: ReturnType<typeof getDictionary>;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("EN");

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "EN" ? "UR" : "EN"));
  }, []);

  const value = useMemo(
    () => ({
      language,
      dictionary: getDictionary(language),
      setLanguage,
      toggleLanguage,
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
};
