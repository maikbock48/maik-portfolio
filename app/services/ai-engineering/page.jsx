"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaBrain, FaDatabase, FaRobot, FaCogs } from "react-icons/fa";
import { SiOpenai, SiLangchain } from "react-icons/si";
import { TbVector } from "react-icons/tb";
import { useLanguage } from "@/lib/language-context";

const pipelineIcons = [
  <FaDatabase key="d1" />,
  <TbVector key="v" />,
  <FaDatabase key="d2" />,
  <SiOpenai key="o" />,
  <FaBrain key="b" />,
];

const bentoIcons = [
  { icon: <FaBrain />, wide: true },
  { icon: <FaCogs />, wide: false },
  { icon: <TbVector />, wide: false },
  { icon: <SiLangchain />, wide: false },
  { icon: <FaRobot />, wide: true },
  { icon: <SiOpenai />, wide: false },
];

const AIEngineering = () => {
  const { t } = useLanguage();
  const s = t.serviceDetails;
  const a = s.ai;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
      className="min-h-[80vh] py-12 xl:py-16"
    >
      <div className="container mx-auto">
        <Link href="/services" className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-all mb-10">
          <BsArrowLeft /> {s.backToServices}
        </Link>

        {/* ── HERO ── */}
        <div className="relative mb-16 pb-12 border-b border-white/10">
          <span className="absolute right-0 top-0 text-[130px] xl:text-[180px] font-extrabold leading-none text-outline text-transparent select-none opacity-60">
            06
          </span>
          <div className="relative max-w-[600px]">
            <p className="text-accent text-sm font-mono tracking-widest uppercase mb-4">{a.eyebrow}</p>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 whitespace-pre-line">
              {a.title}
            </h1>
            <p className="text-white/60 text-lg">{a.subtitle}</p>
          </div>
        </div>

        {/* ── RAG PIPELINE VISUAL ── */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">{a.ragHeading}</h2>
          <div className="flex flex-col xl:flex-row items-center gap-2 xl:gap-0">
            {a.pipeline.map((step, i) => (
              <div key={i} className="flex xl:flex-row flex-col items-center flex-1">
                <div className="flex flex-col items-center text-center bg-[#232329] border border-white/10 rounded-xl px-5 py-5 w-full xl:w-auto hover:border-accent/40 transition-all duration-300 group">
                  <div className="text-2xl text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {pipelineIcons[i]}
                  </div>
                  <p className="text-white font-semibold text-sm">{step.label}</p>
                  <p className="text-white/40 text-xs mt-0.5">{step.sub}</p>
                </div>
                {i < a.pipeline.length - 1 && (
                  <div className="xl:flex hidden items-center px-2 text-accent/50">
                    <BsArrowRight className="text-xl" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── BENTO GRID ── */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">{a.bentoHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {a.bento.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.07, duration: 0.3 }}
                className={`bg-[#232329] border border-white/5 rounded-xl p-6 flex flex-col gap-3 hover:border-accent/30 transition-all duration-300 ${bentoIcons[i]?.wide ? "xl:col-span-2" : ""}`}
              >
                <div className="text-2xl text-accent">{bentoIcons[i]?.icon}</div>
                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── USE CASES STRIP ── */}
        <div className="bg-[#232329] rounded-xl p-8 mb-16 border border-white/5">
          <h2 className="text-2xl font-bold text-white mb-6">{a.useCasesHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {a.useCases.map((uc) => (
              <div key={uc.n} className="flex flex-col gap-2 border-l-2 border-accent/30 pl-4 hover:border-accent transition-all duration-300">
                <span className="text-accent text-xs font-mono">{uc.n}</span>
                <p className="text-white font-semibold text-sm">{uc.t}</p>
                <p className="text-white/40 text-xs">{uc.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-6 border-t border-white/10 pt-10">
          <div>
            <h2 className="text-3xl font-bold text-white">{a.ctaTitle}</h2>
            <p className="text-white/50 mt-1">{a.ctaText}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-accent text-primary font-semibold px-8 py-3 rounded-full hover:bg-accent-hover transition-all whitespace-nowrap mx-auto"
          >
            {s.getInTouch}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default AIEngineering;
