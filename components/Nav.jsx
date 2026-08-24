"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiChevronDown,
  FiCode,
  FiPenTool,
  FiFeather,
  FiTrendingUp,
  FiServer,
  FiCpu,
  FiArrowRight,
} from "react-icons/fi";
import { useLanguage } from "@/lib/language-context";

const navPaths = [
  { key: "home", path: "/" },
  { key: "services", path: "/services" },
  { key: "resume", path: "/resume" },
  { key: "work", path: "/work" },
  { key: "contact", path: "/contact" },
];

const serviceIcons = {
  "/services/web-development": FiCode,
  "/services/ui-ux-design": FiPenTool,
  "/services/logo-design": FiFeather,
  "/services/seo": FiTrendingUp,
  "/services/backend-development": FiServer,
  "/services/ai-engineering": FiCpu,
};

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
                    <div className="rounded-2xl border border-white/10 bg-[#18181d]/95 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.55)] p-3">
                      <div className="grid grid-cols-2 gap-1">
                        {t.services.map((service) => {
                          const Icon = serviceIcons[service.href] ?? FiCode;
                          return (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="group flex items-start gap-3 rounded-xl p-3 hover:bg-white/[0.06] transition-colors"
                            >
                              <span className="shrink-0 w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary group-hover:border-accent transition-colors duration-200">
                                <Icon className="text-base" />
                              </span>
                              <span className="flex flex-col min-w-0">
                                <span className="text-sm font-semibold text-white normal-case group-hover:text-accent transition-colors duration-200">
                                  {service.title}
                                </span>
                                <span className="text-xs text-white/50 leading-snug mt-0.5 line-clamp-2 normal-case">
                                  {service.description}
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                      <Link
                        href="/services"
                        className="mt-1 flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-white/70 normal-case hover:text-accent hover:bg-white/[0.06] transition-colors duration-200 border-t border-white/10"
                      >
                        {t.nav.viewAllServices}
                        <FiArrowRight className="text-sm" />
                      </Link>
                    </div>
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
