import { createContext, useState, useContext } from "react";
import { translations } from "../enums/languageEnum";
import { LanguageType } from "../types/languageTypes";  

 

type LanguageContextType = {
  t: Record<string, string>;
  language: LanguageType;
  setLanguage: (l: LanguageType) => void;
  toggleLanguage: () => void;
};

const defaultValue: LanguageContextType = {
  t: translations.en,
  language: "en",
  setLanguage: () => {},
  toggleLanguage: () => {},
};

export const LanguageContext = createContext<LanguageContextType>(defaultValue);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<LanguageType>("de");
  const toggleLanguage = () => setLanguage((l) => (l === "en" ? "de" : "en"));

  const value: LanguageContextType = {
    t: translations[language],
    language,
    setLanguage,
    toggleLanguage,
  };

  return <LanguageContext.Provider value={value}>{children} </LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
