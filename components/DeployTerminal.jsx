"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

const DeployTerminal = () => {
  const { t } = useLanguage();
  const lines = t.home.terminal.lines;
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setVisibleCount(0);
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setVisibleCount(i);
      if (i >= lines.length) clearInterval(interval);
    }, 650);
    return () => clearInterval(interval);
  }, [lines]);

  return (
    <div className="w-full max-w-[420px] rounded-xl border border-white/10 bg-[#141418] shadow-[0_20px_60px_rgba(0,0,0,0.45)] overflow-hidden">
      {/* title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
        <span className="w-[9px] h-[9px] rounded-full bg-white/15" />
        <span className="w-[9px] h-[9px] rounded-full bg-white/15" />
        <span className="w-[9px] h-[9px] rounded-full bg-white/15" />
        <span className="ml-2 text-xs text-white/40 font-mono">
          {t.home.terminal.title}
        </span>
      </div>

      {/* body */}
      <div className="px-5 py-6 font-mono text-[13px] leading-[2.1] min-h-[190px]">
        <AnimatePresence>
          {lines.slice(0, visibleCount).map((line, i) => (
            <motion.div
              key={line.cmd}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-2"
            >
              <span className="text-accent">$</span>
              <span className="text-white/80">{line.cmd}</span>
              <span className="ml-auto text-accent/80 text-xs whitespace-nowrap">
                {line.status}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>

        {visibleCount >= lines.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 pt-3 border-t border-dashed border-white/10 text-white/40 text-[11.5px]"
          >
            {t.home.terminal.live}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DeployTerminal;
