"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]">
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
          style={{ boxShadow: "0 0 65px 40px #1c1c22" }}
        >
          <Image
            src="/assets/profile.jpg"
            priority
            quality={80}
            fill
            alt=""
            className="object-cover object-[50%_30%]"
          />
          {/* narrow but intense blur right at the border, leaving the center of the photo sharp */}
          <div
            className="absolute inset-0 backdrop-blur-[95px]"
            style={{
              maskImage: "radial-gradient(circle at 50% 50%, transparent 60%, black 95%)",
              WebkitMaskImage:
                "radial-gradient(circle at 50% 50%, transparent 60%, black 95%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, transparent 63%, #1c1c22 92%)",
            }}
          />
        </motion.div>

        {/* circle — centered on the photo, sized to sit flush against its edge */}
        <motion.svg
          className="absolute w-[260px] h-[260px] xl:w-[385px] xl:h-[385px] top-[149px] left-[159px] xl:top-[249px] xl:left-[259px] -translate-x-1/2 -translate-y-1/2"
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
