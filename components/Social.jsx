"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaYoutube />, path: "", comingSoon: true },
  { icon: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className={containerStyles}>
        {socials.map((item, index) => {
          if (item.comingSoon) {
            return (
              <button
                key={index}
                className={iconStyles}
                onClick={() => setShowPopup(true)}
              >
                {item.icon}
              </button>
            );
          }
          return (
            <Link key={index} href={item.path} className={iconStyles}>
              {item.icon}
            </Link>
          );
        })}
      </div>

      <AnimatePresence>
        {showPopup && (
          <>
            {/* backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
            />

            {/* popup */}
            <motion.div
              className="fixed top-1/2 left-1/2 z-50 bg-[#1c1c22] border border-accent/30 rounded-2xl p-10 flex flex-col items-center gap-4 shadow-[0_0_60px_rgba(0,217,255,0.15)] max-w-sm w-[90vw] text-center"
              initial={{ opacity: 0, scale: 0.85, x: "-50%", y: "-48%" }}
              animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
              exit={{ opacity: 0, scale: 0.85, x: "-50%", y: "-48%" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* YouTube icon */}
              <div className="text-6xl text-accent">
                <FaYoutube />
              </div>

              <h2 className="text-3xl font-bold text-white">Coming soon!</h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Still figuring out how to look cool on camera.<br />
                Check back once I've practiced my intro. 🎬
              </p>

              <button
                onClick={() => setShowPopup(false)}
                className="mt-2 px-6 py-2 rounded-full border border-accent text-accent text-sm font-semibold hover:bg-accent hover:text-primary transition-all duration-300"
              >
                Got it
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Social;
