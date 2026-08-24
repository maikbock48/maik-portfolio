"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiPlay } from "react-icons/fi";

const VideoFrame = ({ src, poster, caption, comingSoon }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current?.play();
  };

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-accent/25 bg-[#141418] shadow-[0_0_0_1px_rgba(0,217,255,0.08),0_25px_70px_rgba(0,0,0,0.5)]">
      {src ? (
        <>
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            preload="none"
            controls={playing}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
            className="w-full h-full object-cover"
          />
          {!playing && (
            <button
              type="button"
              onClick={handlePlay}
              aria-label="Play video"
              className="group absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/25 transition-colors"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-full border border-accent/40 bg-black/30 backdrop-blur-sm flex items-center justify-center text-accent group-hover:scale-110 group-hover:border-accent transition-transform duration-300"
              >
                <FiPlay className="text-2xl translate-x-[2px]" />
              </motion.div>
            </button>
          )}
        </>
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
