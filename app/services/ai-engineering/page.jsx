"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaBrain, FaDatabase, FaRobot, FaCogs } from "react-icons/fa";
import { SiOpenai, SiLangchain } from "react-icons/si";
import { TbVector } from "react-icons/tb";

const pipeline = [
  { label: "Your Data", sub: "Docs, PDFs, DBs", icon: <FaDatabase /> },
  { label: "Embeddings", sub: "Vectorise content", icon: <TbVector /> },
  { label: "Vector DB", sub: "Pinecone / Milvus", icon: <FaDatabase /> },
  { label: "LLM", sub: "OpenAI / local", icon: <SiOpenai /> },
  { label: "Answer", sub: "Accurate & grounded", icon: <FaBrain /> },
];

const bento = [
  {
    title: "Prompt Engineering",
    body: "Chain-of-Thought & Few-Shot design that maximises LLM precision and minimises hallucinations.",
    icon: <FaBrain />,
    wide: true,
  },
  {
    title: "RAG Pipelines",
    body: "Connect LLMs to your own knowledge base for accurate, domain-specific answers.",
    icon: <FaCogs />,
    wide: false,
  },
  {
    title: "Vector Databases",
    body: "Efficient semantic search with Pinecone & Milvus.",
    icon: <TbVector />,
    wide: false,
  },
  {
    title: "LangChain Integration",
    body: "Composable chains, agents and memory layers built for production.",
    icon: <SiLangchain />,
    wide: false,
  },
  {
    title: "Workflow Automation",
    body: "AI-powered pipelines with n8n — connect tools, APIs and LLMs into smart, autonomous workflows.",
    icon: <FaRobot />,
    wide: true,
  },
  {
    title: "Conversation Design",
    body: "Intent recognition, fallback strategies and context management for reliable AI conversations.",
    icon: <SiOpenai />,
    wide: false,
  },
];

const AIEngineering = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
      className="min-h-[80vh] py-12 xl:py-16"
    >
      <div className="container mx-auto">
        <Link href="/services" className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-all mb-10">
          <BsArrowLeft /> Back to Services
        </Link>

        {/* ── HERO ── */}
        <div className="relative mb-16 pb-12 border-b border-white/10">
          <span className="absolute right-0 top-0 text-[130px] xl:text-[180px] font-extrabold leading-none text-outline text-transparent select-none opacity-60">
            06
          </span>
          <div className="relative max-w-[600px]">
            <p className="text-accent text-sm font-mono tracking-widest uppercase mb-4">AI Engineering</p>
            <h1 className="text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Turning raw AI into<br />intelligent systems
            </h1>
            <p className="text-white/60 text-lg">
              I integrate LLMs, build RAG pipelines and connect vector databases —
              making AI actually useful for your specific domain.
            </p>
          </div>
        </div>

        {/* ── RAG PIPELINE VISUAL ── */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">How RAG Works</h2>
          <div className="flex flex-col xl:flex-row items-center gap-2 xl:gap-0">
            {pipeline.map((step, i) => (
              <div key={i} className="flex xl:flex-row flex-col items-center flex-1">
                <div className="flex flex-col items-center text-center bg-[#232329] border border-white/10 rounded-xl px-5 py-5 w-full xl:w-auto hover:border-accent/40 transition-all duration-300 group">
                  <div className="text-2xl text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <p className="text-white font-semibold text-sm">{step.label}</p>
                  <p className="text-white/40 text-xs mt-0.5">{step.sub}</p>
                </div>
                {i < pipeline.length - 1 && (
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
          <h2 className="text-2xl font-bold text-white mb-8">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {bento.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.07, duration: 0.3 }}
                className={`bg-[#232329] border border-white/5 rounded-xl p-6 flex flex-col gap-3 hover:border-accent/30 transition-all duration-300 ${card.wide ? "xl:col-span-2" : ""}`}
              >
                <div className="text-2xl text-accent">{card.icon}</div>
                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── USE CASES STRIP ── */}
        <div className="bg-[#232329] rounded-xl p-8 mb-16 border border-white/5">
          <h2 className="text-2xl font-bold text-white mb-6">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Knowledge Bot", d: "Company docs → instant answers from your own data" },
              { n: "02", t: "Workflow Automation", d: "AI agents that trigger, reason and act autonomously" },
              { n: "03", t: "Semantic Search", d: "Meaning-based search across large document sets" },
              { n: "04", t: "AI-Powered Features", d: "Embed LLM capabilities into any existing product" },
            ].map((uc) => (
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
            <h2 className="text-3xl font-bold text-white">Let's build something smart</h2>
            <p className="text-white/50 mt-1">Chatbot, RAG system, automated workflow — let's scope it.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-accent text-primary font-semibold px-8 py-3 rounded-full hover:bg-accent-hover transition-all whitespace-nowrap"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default AIEngineering;
