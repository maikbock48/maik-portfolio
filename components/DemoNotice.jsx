"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

const STORAGE_KEY = "demo_notice_dismissed";

const DemoNotice = () => {
  const { t } = useLanguage();
  const d = t.demoNotice;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
    setVisible(false);
    window.dispatchEvent(new Event("demo-notice-dismissed"));
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="max-w-[460px] w-full bg-[#1c1c22] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          >
            <h2 className="text-xl font-bold text-white mb-3">{d.title}</h2>
            <p className="text-white/70 text-sm leading-relaxed mb-6">{d.text}</p>
            <button
              onClick={dismiss}
              className="w-full rounded-full bg-accent text-primary font-semibold text-sm px-5 py-3 hover:bg-accent-hover transition-all"
            >
              {d.button}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoNotice;
