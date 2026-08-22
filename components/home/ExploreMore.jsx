"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import ParticleBackground from "@/components/home/ParticleBackground";
import { useLanguage } from "@/lib/language-context";

const WHATSAPP_HREF = "https://wa.me/491626310090";

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
        y: target === "up" ? "-100vh" : "0vh",
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
      document.documentElement.style.overflow = "hidden";

      observer = Observer.create({
        target: gridEl,
        type: "wheel",
        wheelSpeed: 1,
        tolerance: 10,
        preventDefault: true,
        onDown: () => {
          if (panelRef.current === "bridge") goTo(gsap, "up");
        },
        onUp: () => {
          if (panelRef.current === "up") {
            goTo(gsap, "bridge");
          } else if (!isAnimatingRef.current) {
            setOpen(false);
          }
        },
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-24 right-6 xl:bottom-28 xl:right-[29px] z-40 flex items-center gap-2 rounded-full border border-accent/30 bg-[#1c1c22] px-4 py-2.5 text-sm text-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-accent hover:text-accent transition-colors"
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

            <div ref={gridRef} className="relative" style={{ height: "200vh" }}>
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

              {/* "the only way is up" panel */}
              <div className="relative h-screen w-screen flex flex-col items-center justify-center text-center px-6 gap-6 overflow-hidden">
                <ParticleBackground count={70} className="opacity-90" />
                <h2 className="relative z-10 h2">{e.title}</h2>
                <ul className="relative z-10 flex flex-col gap-3 max-w-[560px]">
                  {e.points.map((point) => (
                    <li key={point} className="text-white/70 text-sm sm:text-base">
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="relative z-10 text-white/60 text-sm max-w-[420px] mt-2">{e.whatsappText}</p>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center gap-2 rounded-full bg-accent text-primary font-semibold px-6 py-3 hover:bg-accent-hover transition-all"
                >
                  <FaWhatsapp className="text-xl" />
                  {e.whatsappButton}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExploreMore;
