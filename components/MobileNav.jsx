"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

const navPaths = [
  { key: "home", path: "/" },
  { key: "services", path: "/services" },
  { key: "resume", path: "/resume" },
  { key: "work", path: "/work" },
  { key: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { t } = useLanguage();

  return (
    <Sheet>
      <SheetTrigger aria-label="Open menu" className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <p className="text-4xl font-semibold">
              Maik<span className="text-accent">.</span>
            </p>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {navPaths.map((link, index) => {
            const isActive = link.path === pathname;
            const showUnderline =
              hoveredIndex === index || (isActive && hoveredIndex === null);

            return (
              <Link
                href={link.path}
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`${
                  isActive ? "text-accent" : ""
                } text-xl capitalize hover:text-accent transition-colors relative pb-1`}
              >
                {t.nav[link.key]}
                {showUnderline && (
                  <motion.div
                    layoutId="mobileUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
