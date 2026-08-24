"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { useLanguage } from "@/lib/language-context";
import ServicesMenuPanel from "./ServicesMenuPanel";

const navPaths = [
  { key: "home", path: "/" },
  { key: "services", path: "/services" },
  { key: "resume", path: "/resume" },
  { key: "work", path: "/work" },
  { key: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef(null);
  const { t } = useLanguage();

  const openServices = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 180);
  };

  return (
    <nav className="flex gap-8 relative">
      {navPaths.map((link, index) => {
        const isActive = link.path === pathname;
        const showUnderline =
          hoveredIndex === index || (isActive && hoveredIndex === null);
        const isServices = link.key === "services";

        return (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => {
              setHoveredIndex(index);
              if (isServices) openServices();
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
              if (isServices) scheduleCloseServices();
            }}
          >
            <Link
              href={link.path}
              className={`${
                isActive ? "text-accent" : ""
              } capitalize font-medium hover:text-accent transition-colors relative pb-1 flex items-center gap-1`}
              aria-expanded={isServices ? servicesOpen : undefined}
            >
              {t.nav[link.key]}
              {isServices && (
                <FiChevronDown
                  className={`text-xs transition-transform duration-300 ${
                    servicesOpen ? "rotate-180 text-accent" : ""
                  }`}
                />
              )}
              {showUnderline && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            {isServices && (
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-5 w-[640px] z-50"
                  >
                    <ServicesMenuPanel solid />
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Nav;
