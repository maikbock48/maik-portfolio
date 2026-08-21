"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.3, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.9, duration: 0.7, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] absolute left-[10px] rounded-full overflow-hidden scale-[0.864] xl:scale-[0.765]"
        >
          <Image
            src="/assets/maik.png"
            priority
            quality={80}
            fill
            alt=""
            className="object-cover"
          />
          {/* subtle blur all around the edge */}
          <div
            className="absolute inset-0 backdrop-blur-[2px]"
            style={{
              maskImage:
                "radial-gradient(circle at 50% 45%, transparent 76%, black 100%)",
              WebkitMaskImage:
                "radial-gradient(circle at 50% 45%, transparent 76%, black 100%)",
            }}
          />
          {/* stronger blur fading in toward the bottom edge */}
          <div
            className="absolute inset-0 backdrop-blur-lg"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 58%, black 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 58%, black 100%)",
            }}
          />
        </motion.div>

        {/* circle */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00d9ff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
