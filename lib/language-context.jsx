"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./translations";

const SUPPORTED_LANGUAGES = ["en", "de", "pl"];

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  // Detect the visitor's device/browser language on first load and use it
  // if we support it, otherwise keep the English default.
  useEffect(() => {
    const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
    const detected = browserLanguages
      .map((code) => code.split("-")[0].toLowerCase())
      .find((code) => SUPPORTED_LANGUAGES.includes(code));
    if (detected) setLang(detected);
  }, []);

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
