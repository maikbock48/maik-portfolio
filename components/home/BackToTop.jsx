"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

const SHOW_THRESHOLD = 600;

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => setVisible(window.scrollY > SHOW_THRESHOLD);
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 left-6 xl:bottom-[29px] xl:left-[29px] z-30 w-12 h-12 xl:w-14 xl:h-14 rounded-full border border-accent/30 bg-[#1c1c22] text-accent flex items-center justify-center text-lg xl:text-xl shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-accent hover:bg-accent hover:text-primary transition-colors"
        >
          <FiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
