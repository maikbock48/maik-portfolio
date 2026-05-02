"use client";

import { createContext, useContext, useState } from "react";
import { translations } from "./translations";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const toggle = () => setLang((l) => l === "en" ? "de" : l === "de" ? "pl" : "en");
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggle, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
};
