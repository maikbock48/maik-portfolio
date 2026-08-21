"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiPlay } from "react-icons/fi";

const VideoFrame = ({ src, poster, caption, comingSoon }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-accent/25 bg-[#141418] shadow-[0_0_0_1px_rgba(0,217,255,0.08),0_25px_70px_rgba(0,0,0,0.5)]">
      {src ? (
        <video
          src={src}
          poster={poster}
          controls={playing}
          onPlay={() => setPlaying(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-primary via-[#1a1a22] to-[#101014]">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-full border border-accent/40 flex items-center justify-center text-accent"
          >
            <FiPlay className="text-2xl translate-x-[2px]" />
          </motion.div>
          <p className="text-white/50 text-sm font-medium">{comingSoon}</p>
        </div>
      )}

      {!playing && (
        <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black/70 to-transparent pointer-events-none">
          <p className="text-white/70 text-xs sm:text-sm">{caption}</p>
        </div>
      )}
    </div>
  );
};

export default VideoFrame;
