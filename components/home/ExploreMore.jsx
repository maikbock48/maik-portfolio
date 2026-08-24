"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import ParticleBackground from "@/components/home/ParticleBackground";
import { useLanguage } from "@/lib/language-context";

const WHATSAPP_HREF = "https://wa.me/491626310090";

const navPaths = [
  { key: "home", path: "/" },
  { key: "services", path: "/services" },
  { key: "resume", path: "/resume" },
  { key: "work", path: "/work" },
  { key: "contact", path: "/contact" },
];

const ExploreMore = () => {
  const { t } = useLanguage();
  const e = t.exploreMore;

  const [atBottom, setAtBottom] = useState(false);
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState("bridge"); // "bridge" | "up"

  const gridRef = useRef(null);
  const panelRef = useRef("bridge");
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    const checkBottom = () => {
      setAtBottom(
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80
      );
    };
    checkBottom();
    window.addEventListener("scroll", checkBottom, { passive: true });
    window.addEventListener("resize", checkBottom);
    return () => {
      window.removeEventListener("scroll", checkBottom);
      window.removeEventListener("resize", checkBottom);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    let observer;
    let cooldownTimeout;
    const prevOverflow = document.documentElement.style.overflow;
    const gridEl = gridRef.current;
    let cancelled = false;

    const goTo = (gsap, target) => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;
      gsap.to(gridEl, {
        y: target === "bridge" ? -window.innerHeight : 0,
        duration: 0.9,
        ease: "power2.inOut",
        onComplete: () => {
          panelRef.current = target;
          setPanel(target);
          cooldownTimeout = setTimeout(() => {
            isAnimatingRef.current = false;
          }, 250);
        },
      });
    };

    (async () => {
      const { gsap } = await import("gsap");
      const { Observer } = await import("gsap/Observer");
      if (cancelled) return;
      gsap.registerPlugin(Observer);
      gsap.set(gridEl, { yPercent: 0, y: -window.innerHeight });
      document.documentElement.style.overflow = "hidden";

      // On mobile, touch swiping should feel reversed relative to desktop wheel
      // scrolling to reach the "up" panel — checked once per open, not reactive.
      const isMobileViewport = window.matchMedia("(max-width: 1199px)").matches;

      const advance = () => {
        if (panelRef.current === "bridge") goTo(gsap, "up");
      };
      const retreat = () => {
        if (panelRef.current === "up") {
          goTo(gsap, "bridge");
        } else if (!isAnimatingRef.current) {
          setOpen(false);
        }
      };

      observer = Observer.create({
        target: gridEl,
        type: "wheel,touch,pointer",
        wheelSpeed: 1,
        tolerance: 10,
        dragMinimum: 15,
        preventDefault: true,
        onDown: isMobileViewport ? retreat : advance,
        onUp: isMobileViewport ? advance : retreat,
      });
    })();

    return () => {
      cancelled = true;
      observer?.kill();
      if (cooldownTimeout) clearTimeout(cooldownTimeout);
      document.documentElement.style.overflow = prevOverflow;
      panelRef.current = "bridge";
      isAnimatingRef.current = false;
      setPanel("bridge");
    };
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {atBottom && !open && (
          <motion.button
            initial={{ opacity: 0, y: 10, scale: 1.05 }}
            animate={{ opacity: 1, y: 0, scale: 1.05 }}
            exit={{ opacity: 0, y: 10, scale: 1.05 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-80 right-6 xl:bottom-72 xl:right-[29px] z-40 flex items-center gap-2 rounded-full border border-accent/30 bg-[#1c1c22] px-4 py-2.5 text-sm text-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-accent hover:text-accent transition-colors"
          >
            {e.hint}
            <FiArrowRight className="text-accent" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="fixed inset-0 z-50 h-screen w-screen overflow-hidden bg-primary"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="fixed top-8 right-8 z-50 w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent transition-colors"
            >
              <FiX />
            </button>

            {/* panel indicator */}
            <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-2">
              {["bridge", "up"].map((p) => (
                <span
                  key={p}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    panel === p ? "bg-accent" : "bg-white/20"
                  }`}
                />
              ))}
            </div>

            <div ref={gridRef} className="relative" style={{ height: "200vh", transform: "translateY(-100vh)" }}>
              {/* "the only way is up" panel — sits above the bridge panel in the container; reached with a normal (down) scroll, content animates upward */}
              <div className="relative h-screen w-screen flex flex-col items-center justify-center text-center px-6 gap-4 overflow-hidden">
                <ParticleBackground count={70} className="opacity-90" />
                <h2 className="relative z-10 h2 -mt-6 xl:-mt-10">{e.title}</h2>
                <ul className="relative z-10 flex flex-col gap-3 max-w-[560px]">
                  {e.points.map((point, index) => (
                    <li
                      key={point}
                      className={`text-white/70 text-sm sm:text-base ${
                        index === e.points.length - 1 ? "mb-8 sm:mb-12" : ""
                      }`}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="relative z-10 text-white/60 text-sm max-w-[420px] mt-10 sm:mt-14">{e.whatsappText}</p>
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={WHATSAPP_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-accent text-primary font-semibold px-6 py-3 hover:bg-accent-hover transition-all"
                    >
                      <FaWhatsapp className="text-xl" />
                      {e.whatsappButton}
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full border border-accent/50 text-accent font-semibold px-6 py-3 hover:bg-accent/10 hover:border-accent transition-all"
                    >
                      {e.dreamButton}
                    </Link>
                  </div>
                  <p className="text-white/50 text-xs max-w-[420px]">
                    <span className="text-accent font-semibold">{e.noteLabel}</span> {e.note}
                  </p>
                </div>

                <nav className="absolute top-6 bottom-auto md:top-auto md:bottom-14 left-0 right-0 z-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                  {navPaths.map((link, index) => (
                    <motion.div
                      key={link.key}
                      initial={{ opacity: 0, y: -60 }}
                      animate={
                        panel === "up"
                          ? { opacity: 1, y: 0, scale: [1, 1.18, 1] }
                          : { opacity: 0, y: -60 }
                      }
                      transition={{
                        opacity: { delay: index * 0.12, duration: 0.5, ease: "easeOut" },
                        y: { delay: index * 0.12, duration: 0.5, ease: "easeOut" },
                        scale: { delay: index * 0.12 + 0.5, duration: 0.45, ease: "easeInOut" },
                      }}
                    >
                      <Link
                        href={link.path}
                        className="capitalize font-medium text-white/70 hover:text-accent transition-colors"
                      >
                        {t.nav[link.key]}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* bridge panel */}
              <div className="relative h-screen w-screen flex flex-col items-center justify-center text-center px-6 gap-6 overflow-hidden">
                <ParticleBackground count={45} className="opacity-70" />
                <h2 className="relative z-10 text-3xl sm:text-4xl font-bold text-white max-w-[600px]">
                  {e.bridgeTitle}
                </h2>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 flex flex-col items-center gap-1 text-accent"
                >
                  <FiChevronDown className="text-2xl" />
                  <span className="text-white/40 text-sm">{e.bridgeHint}</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExploreMore;
