"use client";

import { useState, useRef, useMemo, useLayoutEffect, useEffect } from "react";
import { motion, useSpring, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { FaFigma, FaPencilRuler, FaMobile, FaUsers } from "react-icons/fa";
import { SiAdobexd, SiSketch } from "react-icons/si";
import { FiChevronDown } from "react-icons/fi";
import { useLanguage } from "@/lib/language-context";
import { playClick, playPop, playDing, playBoing, playSwoosh, playTick } from "@/lib/sound";
import ParticleBackground from "@/components/home/ParticleBackground";

const MagneticDemo = () => {
  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.5 });
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.5 });
  const scale = useSpring(1, { stiffness: 300, damping: 10 });
  return (
    <div
      className="w-full h-full flex items-center justify-center cursor-pointer"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) * 0.4);
        y.set((e.clientY - rect.top - rect.height / 2) * 0.4);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      onClick={() => {
        playClick();
        scale.set(1.3);
        setTimeout(() => scale.set(1), 180);
      }}
    >
      <motion.div
        style={{ x, y, scale }}
        className="w-12 h-12 rounded-full bg-accent"
      />
    </div>
  );
};

const CubeDemo = () => {
  const [turns, setTurns] = useState(0);
  const half = 26;
  const faces = [
    { t: `rotateY(0deg) translateZ(${half}px)` },
    { t: `rotateY(180deg) translateZ(${half}px)` },
    { t: `rotateY(90deg) translateZ(${half}px)` },
    { t: `rotateY(-90deg) translateZ(${half}px)` },
    { t: `rotateX(90deg) translateZ(${half}px)` },
    { t: `rotateX(-90deg) translateZ(${half}px)` },
  ];
  return (
    <div
      className="w-full h-full flex items-center justify-center cursor-pointer"
      style={{ perspective: 400 }}
      onClick={() => {
        playClick();
        setTurns((t) => t + 1);
      }}
    >
      <motion.div
        animate={{ rotateY: turns * 90, rotateX: turns * 33 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d", width: half * 2, height: half * 2, position: "relative" }}
      >
        {faces.map((f, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-accent/80 border border-accent flex items-center justify-center text-primary text-[10px] font-bold"
            style={{ transform: f.t }}
          >
            {i + 1}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const MorphDemo = () => {
  const scale = useSpring(1, { stiffness: 300, damping: 10 });
  return (
    <div
      className="w-full h-full flex items-center justify-center cursor-pointer"
      onClick={() => {
        playPop();
        scale.set(1.4);
        setTimeout(() => scale.set(1), 200);
      }}
    >
      <motion.div style={{ scale }}>
        <motion.div
          className="w-12 h-12 bg-accent"
          animate={{
            borderRadius: [
              "30% 70% 70% 30% / 30% 30% 70% 70%",
              "70% 30% 30% 70% / 70% 70% 30% 30%",
              "30% 70% 70% 30% / 30% 30% 70% 70%",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

const SpringDemo = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.button
        onClick={() => {
          setClicked((v) => !v);
          playBoing();
        }}
        animate={{ scale: clicked ? 1.35 : 1, rotate: clicked ? 12 : 0 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 8 }}
        className="w-12 h-12 rounded-2xl bg-accent text-primary flex items-center justify-center"
      >
        <FiChevronDown className="text-lg rotate-180" />
      </motion.button>
    </div>
  );
};

const LoadingRingDemo = () => {
  const [key, setKey] = useState(0);
  return (
    <div
      className="w-full h-full flex items-center justify-center cursor-pointer"
      onClick={() => {
        playTick();
        setKey((k) => k + 1);
      }}
    >
      <svg width="48" height="48" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="4" />
        <motion.circle
          key={key}
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="#00d9ff"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          onAnimationComplete={playDing}
          transform="rotate(-90 24 24)"
        />
      </svg>
    </div>
  );
};

const ParticleBurstDemo = () => {
  const [burstId, setBurstId] = useState(0);
  const particles = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        return { dx: Math.cos(angle) * 34, dy: Math.sin(angle) * 34 };
      }),
    []
  );
  return (
    <div
      className="relative w-full h-full flex items-center justify-center cursor-pointer"
      onClick={() => {
        playPop();
        setBurstId((id) => id + 1);
      }}
    >
      <div className="w-3 h-3 rounded-full bg-accent" />
      <AnimatePresence>
        {burstId > 0 &&
          particles.map((p, i) => (
            <motion.span
              key={`${burstId}-${i}`}
              className="absolute w-1.5 h-1.5 rounded-full bg-accent"
              initial={{ x: 0, y: 0, opacity: 1 }}
              animate={{ x: p.dx, y: p.dy, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          ))}
      </AnimatePresence>
    </div>
  );
};

const FlipRevealDemo = () => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="w-full h-full flex items-center justify-center cursor-pointer"
      style={{ perspective: 400 }}
      onClick={() => {
        playClick();
        setFlipped((f) => !f);
      }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d", width: 48, height: 48, position: "relative" }}
      >
        <div
          className="absolute inset-0 rounded-lg bg-accent flex items-center justify-center text-primary text-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <FiChevronDown className="rotate-180" />
        </div>
        <div
          className="absolute inset-0 rounded-lg bg-[#141418] border border-accent flex items-center justify-center text-accent text-lg"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          ✓
        </div>
      </motion.div>
    </div>
  );
};

const RippleWaveDemo = () => {
  const [rippleId, setRippleId] = useState(0);
  return (
    <div
      className="relative w-full h-full flex items-center justify-center cursor-pointer"
      onClick={() => {
        playSwoosh();
        setRippleId((id) => id + 1);
      }}
    >
      <div className="w-2.5 h-2.5 rounded-full bg-accent z-10" />
      <AnimatePresence>
        {rippleId > 0 &&
          [0, 1, 2].map((i) => (
            <motion.span
              key={`${rippleId}-${i}`}
              className="absolute rounded-full border-2 border-accent"
              initial={{ width: 10, height: 10, opacity: 0.6 }}
              animate={{ width: 76, height: 76, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
            />
          ))}
      </AnimatePresence>
    </div>
  );
};

const GlowPulseDemo = () => {
  const [pulseId, setPulseId] = useState(0);
  return (
    <div
      className="w-full h-full flex items-center justify-center cursor-pointer"
      onClick={() => {
        playDing();
        setPulseId((id) => id + 1);
      }}
    >
      <motion.div
        key={pulseId}
        className="w-12 h-12 rounded-full bg-accent"
        animate={{
          boxShadow: [
            "0 0 0px 0px rgba(0,217,255,0.6)",
            "0 0 24px 10px rgba(0,217,255,0)",
          ],
        }}
        transition={{ duration: 1.1, repeat: pulseId === 0 ? Infinity : 0, ease: "easeOut" }}
      />
    </div>
  );
};

const ShimmerDemo = () => {
  const [key, setKey] = useState(0);
  return (
    <div
      className="w-full h-full flex items-center justify-center cursor-pointer"
      onClick={() => {
        playTick();
        setKey((k) => k + 1);
      }}
    >
      <div className="relative w-16 h-4 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          key={key}
          className="absolute inset-y-0 w-6 bg-gradient-to-r from-transparent via-accent/80 to-transparent"
          initial={{ x: -24 }}
          animate={{ x: 64 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

const DragSnapDemo = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        className="w-10 h-10 rounded-full bg-accent cursor-grab active:cursor-grabbing"
        drag
        dragConstraints={{ top: -24, bottom: 24, left: -24, right: 24 }}
        dragElastic={0.6}
        whileDrag={{ scale: 1.15 }}
        onDragStart={playPop}
        dragTransition={{ bounceStiffness: 400, bounceDamping: 12 }}
      />
    </div>
  );
};

const ConfettiPopDemo = () => {
  const [burstId, setBurstId] = useState(0);
  const pieces = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => {
        const angle = (i / 10) * Math.PI * 2 + Math.random() * 0.4;
        return {
          dx: Math.cos(angle) * (26 + Math.random() * 14),
          dy: Math.sin(angle) * (26 + Math.random() * 14),
          rotate: Math.random() * 360,
        };
      }),
    []
  );
  return (
    <div
      className="relative w-full h-full flex items-center justify-center cursor-pointer"
      onClick={() => {
        playBoing();
        setBurstId((id) => id + 1);
      }}
    >
      <div className="w-3 h-3 rounded-sm bg-accent" />
      <AnimatePresence>
        {burstId > 0 &&
          pieces.map((p, i) => (
            <motion.span
              key={`${burstId}-${i}`}
              className="absolute w-1.5 h-2.5 bg-accent"
              initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
              animate={{ x: p.dx, y: p.dy, rotate: p.rotate, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          ))}
      </AnimatePresence>
    </div>
  );
};

const ToggleSwitchDemo = () => {
  const [on, setOn] = useState(false);
  return (
    <div className="w-full h-full flex items-center justify-center">
      <button
        type="button"
        onClick={() => {
          playClick();
          setOn((v) => !v);
        }}
        className={`relative w-14 h-7 rounded-full transition-colors ${on ? "bg-accent" : "bg-white/15"}`}
      >
        <motion.span
          className="absolute top-1 left-1 w-5 h-5 rounded-full bg-white"
          animate={{ x: on ? 28 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </button>
    </div>
  );
};

const ProgressFillDemo = () => {
  const [key, setKey] = useState(0);
  return (
    <div
      className="w-full h-full flex items-center justify-center cursor-pointer"
      onClick={() => {
        playSwoosh();
        setKey((k) => k + 1);
      }}
    >
      <div className="w-16 h-2.5 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          key={key}
          className="h-full bg-accent rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

const TiltCardDemo = () => {
  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });
  return (
    <div
      className="w-full h-full flex items-center justify-center cursor-pointer"
      style={{ perspective: 400 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        rotateY.set(px * 40);
        rotateX.set(py * -40);
      }}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      onClick={playTick}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-12 h-9 rounded-lg bg-accent"
      />
    </div>
  );
};

const BlinkCursorDemo = () => {
  const [typed, setTyped] = useState(0);
  const word = "hi!";
  return (
    <div
      className="w-full h-full flex items-center justify-center cursor-pointer"
      onClick={() => {
        playTick();
        setTyped((t) => (t >= word.length ? 0 : t + 1));
      }}
    >
      <div className="font-mono text-lg text-accent font-bold flex items-center">
        {word.slice(0, typed)}
        <motion.span
          className="inline-block w-[2px] h-[1em] bg-accent ml-0.5"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
    </div>
  );
};

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

  const AnimationShowcasePanel = () => {
    const demos = [
      MagneticDemo,
      CubeDemo,
      MorphDemo,
      SpringDemo,
      LoadingRingDemo,
      ParticleBurstDemo,
      FlipRevealDemo,
      RippleWaveDemo,
      GlowPulseDemo,
      ShimmerDemo,
      DragSnapDemo,
      ConfettiPopDemo,
      ToggleSwitchDemo,
      ProgressFillDemo,
      TiltCardDemo,
      BlinkCursorDemo,
    ];
    return (
      <div className="relative h-screen w-screen flex items-center px-8 xl:px-12 overflow-hidden">
        <ParticleBackground count={70} className="opacity-90" />
        <div className="relative z-10 w-full max-w-[1700px] mx-auto flex flex-col gap-4">
          <div className="max-w-[600px]">
            <h2 className="text-2xl font-bold text-white mb-2">{u.showcaseHeading}</h2>
            <p className="text-white/60 text-sm">{u.showcaseSubtitle}</p>
          </div>
          <div className="grid grid-cols-8 gap-3">
            {u.showcase.map((item, index) => {
              const Demo = demos[index];
              return (
                <div
                  key={item.title}
                  className="bg-[#232329] rounded-xl p-3 flex flex-col gap-2 h-[150px]"
                >
                  <div className="flex-1 min-h-0">
                    <Demo label={item.title} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-accent leading-tight">{item.title}</h3>
                    <p className="text-white/50 text-[10px] leading-snug mt-0.5">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

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
            className="inline-flex items-center justify-center bg-accent text-primary font-semibold px-8 py-3 rounded-full hover:bg-accent-hover transition-all max-w-[200px] mx-auto"
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
                className="inline-flex items-center justify-center bg-accent text-primary font-semibold px-8 py-3 rounded-full hover:bg-accent-hover transition-all max-w-[200px] mx-auto"
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
            <AnimationShowcasePanel />
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
