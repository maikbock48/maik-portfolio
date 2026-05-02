"use client";

import { useLanguage } from "@/lib/language-context";

const LanguageSwitcher = () => {
  const { lang, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1 border border-accent/40 rounded-full px-3 py-1 text-sm font-semibold text-accent hover:bg-accent hover:text-primary transition-all duration-300"
      aria-label="Switch language"
    >
      <span className={lang === "en" ? "opacity-100" : "opacity-40"}>EN</span>
      <span className="text-white/30">|</span>
      <span className={lang === "de" ? "opacity-100" : "opacity-40"}>DE</span>
    </button>
  );
};

export default LanguageSwitcher;
