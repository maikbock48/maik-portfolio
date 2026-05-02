"use client";

import { useLanguage } from "@/lib/language-context";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 border border-accent/40 rounded-full px-3 py-1 text-sm font-semibold text-accent">
      {["en", "de", "pl"].map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="text-white/30">|</span>}
          <button
            onClick={() => setLang(l)}
            className={`hover:opacity-100 transition-opacity duration-200 ${lang === l ? "opacity-100" : "opacity-40"}`}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
