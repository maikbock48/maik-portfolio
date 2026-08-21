"use client";

import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { FaFigma, FaPencilRuler, FaMobile, FaUsers } from "react-icons/fa";
import { SiAdobexd, SiSketch } from "react-icons/si";
import { FiChevronDown } from "react-icons/fi";
import { useLanguage } from "@/lib/language-context";

const toolIcons = [
  <FaFigma key="f" />,
  <SiAdobexd key="x" />,
  <SiSketch key="s" />,
  <FaPencilRuler key="p" />,
  <FaMobile key="m" />,
  <FaUsers key="u" />,
];

const DESKTOP_BP = 1200;

// step -> grid coordinates: 0 = top-left, 1 = bottom-left (down),
// 2 = bottom-right (right), 3 = top-right (up); step 3 -> 0 closes the loop (left)
const TRANSFORMS = [
  { x: "0vw", y: "0vh" },
  { x: "0vw", y: "-100vh" },
  { x: "-100vw", y: "-100vh" },
  { x: "-100vw", y: "0vh" },
];

const UIUXDesign = () => {
  const { t } = useLanguage();
  const s = t.serviceDetails;
  const u = s.uiux;

  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [step, setStep] = useState(0);

  const wrapperRef = useRef(null);
  const gridRef = useRef(null);
  const stepRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const hasInteractedRef = useRef(false);

  useLayoutEffect(() => {
    setMounted(true);
    const mql = window.matchMedia(`(min-width: ${DESKTOP_BP}px)`);
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!mounted || !isDesktop) return;

    let observer;
    let onKey;
    let cooldownTimeout;
    const prevOverflow = document.documentElement.style.overflow;
    const gridEl = gridRef.current;
    let cancelled = false;

    const goToStep = (gsap, direction) => {
      if (isAnimatingRef.current) return;
      const next = (stepRef.current + direction + 4) % 4;
      isAnimatingRef.current = true;
      hasInteractedRef.current = true;
      gsap.to(gridRef.current, {
        ...TRANSFORMS[next],
        duration: 0.9,
        ease: "power2.inOut",
        onComplete: () => {
          stepRef.current = next;
          setStep(next);
          // short cooldown absorbs trailing momentum/inertia events from the
          // same physical scroll gesture, preventing an unwanted extra step
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
        target: wrapperRef.current,
        type: "wheel",
        wheelSpeed: 1,
        tolerance: 10,
        preventDefault: true,
        onDown: () => goToStep(gsap, 1),
        onUp: () => goToStep(gsap, -1),
      });

      onKey = (e) => {
        if (e.key === "ArrowDown" || e.key === "ArrowRight") goToStep(gsap, 1);
        if (e.key === "ArrowUp" || e.key === "ArrowLeft") goToStep(gsap, -1);
      };
      window.addEventListener("keydown", onKey);
    })();

    return () => {
      cancelled = true;
      observer?.kill();
      if (cooldownTimeout) clearTimeout(cooldownTimeout);
      if (onKey) window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prevOverflow;
      stepRef.current = 0;
      isAnimatingRef.current = false;
      hasInteractedRef.current = false;
      setStep(0);
      if (gridEl) gridEl.style.transform = "";
    };
  }, [mounted, isDesktop]);

  const HeroPanel = () => (
    <div className="h-screen w-screen flex items-center justify-center px-6">
      <div className="max-w-[700px] flex flex-col gap-[30px]">
        <div className="text-8xl font-extrabold text-outline text-transparent">02</div>
        <h1 className="text-5xl sm:text-6xl font-bold text-white">{u.title}</h1>
        <p className="max-w-[600px] text-white/60 text-xl">{u.subtitle}</p>
      </div>
    </div>
  );

  const ToolsApproachPanel = () => (
    <div className="h-screen w-screen flex items-center px-10 xl:px-16">
      <div className="grid grid-cols-2 gap-10 w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-white">{u.toolsHeading}</h2>
          <ul className="grid grid-cols-3 gap-3">
            {toolIcons.map((icon, index) => (
              <li
                key={index}
                className="bg-[#232329] h-[90px] rounded-xl flex flex-col justify-center items-center gap-2 hover:bg-accent transition-all duration-300 group"
              >
                <div className="text-2xl text-accent group-hover:text-primary transition-all duration-300">
                  {icon}
                </div>
                <p className="text-white/60 text-xs group-hover:text-primary transition-all duration-300">
                  {u.tools[index]}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-white">{u.approachHeading}</h2>
          <ul className="grid grid-cols-2 gap-3">
            {u.features.map((feature, index) => (
              <li key={index} className="bg-[#232329] p-4 rounded-xl flex flex-col gap-1.5">
                <h3 className="text-base font-bold text-accent">{feature.title}</h3>
                <p className="text-white/60 text-xs leading-snug">{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const ProcessCtaPanel = () => (
    <div className="h-screen w-screen flex items-center px-10 xl:px-16">
      <div className="grid grid-cols-2 gap-10 w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-white">{u.processHeading}</h2>
          <ul className="grid grid-cols-2 gap-4">
            {u.process.map((step) => (
              <li key={step.num} className="flex flex-col gap-1.5">
                <div className="text-3xl font-bold text-accent">{step.num}</div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="text-white/60 text-xs leading-snug">{step.desc}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#232329] p-8 rounded-xl flex flex-col justify-center gap-4">
          <h2 className="text-2xl font-bold text-white">{u.ctaTitle}</h2>
          <p className="text-white/60 text-sm">{u.ctaText}</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-accent text-primary font-semibold px-8 py-3 rounded-full hover:bg-accent-hover transition-all max-w-[200px]"
          >
            {s.getInTouch}
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* mobile / tablet: normal scrolling page, untouched below the xl breakpoint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
        }}
        className={`min-h-[80vh] flex items-center justify-center py-12 xl:py-0 ${
          mounted && isDesktop ? "xl:hidden" : ""
        }`}
      >
        <div className="container mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-all mb-8"
          >
            <BsArrowLeft /> {s.backToServices}
          </Link>

          <div className="flex flex-col gap-[60px]">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl font-extrabold text-outline text-transparent">02</div>
              <h1 className="text-5xl sm:text-6xl font-bold text-white">{u.title}</h1>
              <p className="max-w-[600px] text-white/60 text-xl">{u.subtitle}</p>
            </div>

            <div className="flex flex-col gap-[30px]">
              <h2 className="text-4xl font-bold text-white">{u.toolsHeading}</h2>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
                {toolIcons.map((icon, index) => (
                  <li
                    key={index}
                    className="bg-[#232329] h-[120px] rounded-xl flex flex-col justify-center items-center gap-4 hover:bg-accent transition-all duration-300 group"
                  >
                    <div className="text-5xl text-accent group-hover:text-primary transition-all duration-300">
                      {icon}
                    </div>
                    <p className="text-white/60 group-hover:text-primary transition-all duration-300">
                      {u.tools[index]}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-[30px]">
              <h2 className="text-4xl font-bold text-white">{u.approachHeading}</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                {u.features.map((feature, index) => (
                  <li key={index} className="bg-[#232329] p-6 rounded-xl flex flex-col gap-4">
                    <h3 className="text-2xl font-bold text-accent">{feature.title}</h3>
                    <p className="text-white/60">{feature.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#232329] p-10 rounded-xl flex flex-col gap-6">
              <h2 className="text-4xl font-bold text-white">{u.processHeading}</h2>
              <ul className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {u.process.map((step) => (
                  <li key={step.num} className="flex flex-col gap-2">
                    <div className="text-4xl font-bold text-accent">{step.num}</div>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <p className="text-white/60">{step.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#232329] p-10 rounded-xl flex flex-col gap-6">
              <h2 className="text-4xl font-bold text-white">{u.ctaTitle}</h2>
              <p className="text-white/60 max-w-[600px]">{u.ctaText}</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-accent text-primary font-semibold px-8 py-3 rounded-full hover:bg-accent-hover transition-all max-w-[200px]"
              >
                {s.getInTouch}
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* desktop (>=1200px): scroll-hijacked 2x2 panel grid */}
      {mounted && isDesktop && (
        <div ref={wrapperRef} className="fixed inset-0 z-30 h-screen w-screen overflow-hidden bg-primary">
          <div
            ref={gridRef}
            className="absolute top-0 left-0 grid"
            style={{ gridTemplateColumns: "100vw 100vw", gridTemplateRows: "100vh 100vh" }}
          >
            <HeroPanel />
            <HeroPanel />
            <ToolsApproachPanel />
            <ProcessCtaPanel />
          </div>

          {/* persistent back link */}
          <Link
            href="/services"
            className="fixed top-8 left-8 z-30 inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-all"
          >
            <BsArrowLeft /> {s.backToServices}
          </Link>

          {/* 2x2 dot indicator, mirrors the grid topology */}
          <div className="fixed bottom-8 left-8 z-30 grid grid-cols-2 gap-2">
            {[0, 3, 1, 2].map((dotStep) => (
              <span
                key={dotStep}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  step === dotStep ? "bg-accent" : "bg-white/20"
                }`}
              />
            ))}
          </div>

          {/* first-load scroll hint, auto-hides after first interaction */}
          {!hasInteractedRef.current && step === 0 && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 6 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              className="fixed bottom-10 right-10 z-30 flex flex-col items-center gap-1 text-white/40"
            >
              <FiChevronDown className="text-2xl" />
            </motion.div>
          )}
        </div>
      )}
    </>
  );
};

export default UIUXDesign;
