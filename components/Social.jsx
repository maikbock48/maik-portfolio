"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Social = ({ containerStyles, iconStyles }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showTwitterPopup, setShowTwitterPopup] = useState(false);
  const [githubClicked, setGithubClicked] = useState(false);

  return (
    <>
      <div className={containerStyles}>
        {/* GitHub */}
        <a
          href="https://github.com/embe-coding"
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
          onClick={() => setGithubClicked(true)}
        >
          <AnimatePresence mode="wait">
            {githubClicked ? (
              <motion.span
                key="smiley"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                style={{ color: "#FFDBB4", fontSize: "1.1em", lineHeight: 1 }}
              >
                :)
              </motion.span>
            ) : (
              <motion.span
                key="github"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.15 }}
              >
                <FaGithub />
              </motion.span>
            )}
          </AnimatePresence>
        </a>

        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/maik-m-bock-874a93392?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
        >
          <FaLinkedinIn />
        </Link>

        {/* YouTube – coming soon */}
        <button className={iconStyles} onClick={() => setShowPopup(true)}>
          <FaYoutube />
        </button>

        {/* Twitter */}
        <button className={iconStyles} onClick={() => setShowTwitterPopup(true)}>
          <FaTwitter />
        </button>
      </div>

      {/* YouTube popup */}
      <AnimatePresence>
        {showPopup && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
            />
            <motion.div
              className="fixed top-1/2 left-1/2 z-50 bg-[#1c1c22] border border-accent/30 rounded-2xl p-10 flex flex-col items-center gap-4 shadow-[0_0_60px_rgba(0,217,255,0.15)] max-w-sm w-[90vw] text-center"
              initial={{ opacity: 0, scale: 0.85, x: "-50%", y: "-48%" }}
              animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
              exit={{ opacity: 0, scale: 0.85, x: "-50%", y: "-48%" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="text-6xl text-accent">
                <FaYoutube />
              </div>
              <h2 className="text-3xl font-bold text-white">Coming soon!</h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Still figuring out how to look cool on camera.<br />
                Check back once I&apos;ve practiced my intro. 🎬
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

      {/* Twitter / DYOR popup */}
      <AnimatePresence>
        {showTwitterPopup && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTwitterPopup(false)}
            />
            <motion.div
              className="fixed top-1/2 left-1/2 z-50 bg-[#1c1c22] border border-red-500/30 rounded-2xl p-10 flex flex-col items-center gap-4 shadow-[0_0_60px_rgba(239,68,68,0.15)] max-w-sm w-[90vw] text-center"
              initial={{ opacity: 0, scale: 0.85, x: "-50%", y: "-48%" }}
              animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
              exit={{ opacity: 0, scale: 0.85, x: "-50%", y: "-48%" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="text-6xl text-red-500">
                <FaTwitter />
              </div>
              <h2 className="text-3xl font-bold text-white">Access denied!</h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Sorry, only for business partners &amp; friends.<br />
                <span className="text-red-400 font-semibold">DYOR!</span>
              </p>
              <button
                onClick={() => setShowTwitterPopup(false)}
                className="mt-2 px-6 py-2 rounded-full border border-red-500 text-red-400 text-sm font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                Understood
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Social;
