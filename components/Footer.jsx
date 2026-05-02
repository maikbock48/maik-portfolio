"use client";

import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useLanguage } from "@/lib/language-context";

const Footer = () => {
  const { t } = useLanguage();
  const f = t.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-white/10 bg-primary/40 backdrop-blur-sm">
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <span className="text-accent font-semibold">Maik<span className="text-white">.</span></span>
            <span className="text-white/30">|</span>
            <span>© {year} {f.rights}</span>
          </div>

          <div className="flex items-center gap-3">
            <Link href="https://github.com/embe-coding" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300">
              <FaGithub className="text-sm" />
            </Link>
            <Link href="https://www.linkedin.com/in/maik-m-bock-874a93392" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300">
              <FaLinkedinIn className="text-sm" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300">
              <FaInstagram className="text-sm" />
            </Link>
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
