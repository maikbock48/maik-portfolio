"use client";

import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useLanguage } from "@/lib/language-context";

const Footer = () => {
  const { t } = useLanguage();
  const f = t.footer;
  const year = new Date().getFullYear();

  const links = [
    { label: t.nav.services, href: "/services" },
    { label: t.nav.work, href: "/work" },
    { label: t.nav.resume, href: "/resume" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <footer className="mt-12 border-t border-white/10 bg-primary/40 backdrop-blur-sm">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6 pb-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-accent font-semibold text-lg">Maik<span className="text-white">.</span></span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-white/60">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="capitalize hover:text-accent transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/embe-coding"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-white/15 rounded-full flex items-center justify-center text-white/60 hover:text-accent hover:border-accent transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/maik-m-bock-874a93392?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-white/15 rounded-full flex items-center justify-center text-white/60 hover:text-accent hover:border-accent transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/60">
          <div className="flex items-center gap-2">
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
