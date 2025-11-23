// model/contexts/LanguageContext.tsx
"use client";

import { createContext, useContext } from "react";
import { translations } from "../enums/languageEnum";

type LanguageContextType = {
  t: typeof translations["en"];
};

export const LanguageContext = createContext<LanguageContextType>({ t: translations.en });

export const useLanguage = () => useContext(LanguageContext);
