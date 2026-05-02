"use client";

import { useLanguage } from "@/lib/language-context";

const Footer = () => {
  const { t } = useLanguage();
  const f = t.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-white/10 bg-primary/40 backdrop-blur-sm">
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <span className="text-accent font-semibold">Maik<span className="text-white">.</span></span>
            <span className="text-white/30">|</span>
            <span>© {year} {f.rights}</span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span>{f.builtWith}</span>
            <span className="text-accent">Next.js</span>
            <span className="text-white/30">·</span>
            <span className="text-accent">Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
