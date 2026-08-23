"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { FaNodeJs, FaPython, FaDocker, FaDatabase, FaCheckCircle } from "react-icons/fa";
import { SiExpress, SiFlask, SiPostgresql, SiMysql } from "react-icons/si";
import { useLanguage } from "@/lib/language-context";

const stack = [
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <FaPython />, name: "Python" },
  { icon: <SiFlask />, name: "Flask" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <FaDocker />, name: "Docker" },
  { icon: <FaDatabase />, name: "REST APIs" },
];

const BackendDevelopment = () => {
  const { t } = useLanguage();
  const s = t.serviceDetails;
  const b = s.backend;

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

        {/* ── HERO ROW ── */}
        <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-8 mb-16 border-b border-white/10 pb-12">
          <div className="flex flex-col gap-4">
            <span className="text-[120px] xl:text-[160px] font-extrabold leading-none text-outline text-transparent select-none">
              05
            </span>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white -mt-4 whitespace-pre-line leading-[1.05]">
              {b.title}
            </h1>
          </div>
          <p className="max-w-[420px] text-white/60 text-lg xl:text-right">{b.subtitle}</p>
        </div>

        {/* ── TERMINAL MOCK ── */}
        <div className="bg-[#0d0d10] rounded-xl border border-white/10 mb-16 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-4 text-xs text-white/30 font-mono">api/routes/users.js</span>
          </div>
          <div className="p-6 text-sm font-mono leading-7 overflow-x-auto">
            <div><span className="text-white/30">{"// GET /api/users/:id — clean, typed, documented"}</span></div>
            <div>
              <span className="text-accent">router</span>
              <span className="text-white/60">.get(</span>
              <span className="text-yellow-300/80">{"'/:id'"}</span>
              <span className="text-white/60">, </span>
              <span className="text-accent">authenticate</span>
              <span className="text-white/60">{", async (req, res) => {"}</span>
            </div>
            <div className="pl-6">
              <span className="text-white/60">{"const "}</span>
              <span className="text-white/80">user </span>
              <span className="text-white/60">{"= await "}</span>
              <span className="text-accent">UserService</span>
              <span className="text-white/60">.findById(req.params.id);</span>
            </div>
            <div className="pl-6">
              <span className="text-white/60">{"if (!"}</span>
              <span className="text-white/80">user</span>
              <span className="text-white/60">{") return "}</span>
              <span className="text-accent">res</span>
              <span className="text-white/60">.status(</span>
              <span className="text-yellow-300/80">404</span>
              <span className="text-white/60">{").json({ "}</span>
              <span className="text-yellow-300/80">{"error: 'Not found'"}</span>
              <span className="text-white/60">{" });"}</span>
            </div>
            <div className="pl-6">
              <span className="text-accent">res</span>
              <span className="text-white/60">.json(</span>
              <span className="text-white/80">user</span>
              <span className="text-white/60">);</span>
            </div>
            <div><span className="text-white/60">{"});"}</span></div>
          </div>
        </div>

        {/* ── TWO-COL: STACK + CAPABILITIES ── */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mb-16">
          {/* stack badges */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-white">{b.stackHeading}</h2>
            <div className="flex flex-wrap gap-3">
              {stack.map((item, i) => (
                <span key={i} className="flex items-center gap-2 bg-[#232329] border border-white/10 px-4 py-2 rounded-full text-sm text-white/80 hover:border-accent/50 hover:text-accent transition-all duration-300">
                  <span className="text-accent text-base">{item.icon}</span>
                  {item.name}
                </span>
              ))}
            </div>
          </div>

          {/* capabilities checklist */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-white">{b.capabilitiesHeading}</h2>
            <ul className="flex flex-col gap-3">
              {b.capabilities.map((cap, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                  <FaCheckCircle className="text-accent mt-0.5 shrink-0" />
                  {cap}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── PROCESS TIMELINE ── */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">{b.processHeading}</h2>
          <div className="relative flex flex-col xl:flex-row gap-0">
            {b.steps.map((step, i) => (
              <div key={step.num} className="flex xl:flex-col flex-1 xl:items-start items-center gap-4 xl:gap-3 relative">
                {/* connector line */}
                {i < b.steps.length - 1 && (
                  <div className="hidden xl:block absolute top-[18px] left-[calc(50%+18px)] right-[-50%] h-px bg-accent/30" />
                )}
                <div className="w-9 h-9 rounded-full bg-accent/20 border border-accent/50 flex items-center justify-center shrink-0">
                  <span className="text-accent text-xs font-bold">{step.num}</span>
                </div>
                <div>
                  <p className="text-white font-semibold">{step.title}</p>
                  <p className="text-white/50 text-sm mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-6 border-t border-white/10 pt-10">
          <div>
            <h2 className="text-3xl font-bold text-white">{b.ctaTitle}</h2>
            <p className="text-white/50 mt-1">{b.ctaText}</p>
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

export default BackendDevelopment;
