"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { FaReact, FaNodeJs, FaDatabase, FaMobile, FaRobot } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { useLanguage } from "@/lib/language-context";

const techIcons = [
  <FaReact key="r" />,
  <SiNextdotjs key="n" />,
  <FaNodeJs key="no" />,
  <SiTailwindcss key="t" />,
  <SiTypescript key="ts" />,
  <FaDatabase key="d" />,
  <FaMobile key="m" />,
  <FaRobot key="ai" />,
];
const techNames = ["React.js", "Next.js", "Node.js", "Tailwind CSS", "TypeScript", "Database Design", "Responsive Design", "AI & Agents"];

const WebDevelopment = () => {
  const { t } = useLanguage();
  const s = t.serviceDetails;
  const w = s.web;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        {/* Back button */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-all mb-8"
        >
          <BsArrowLeft /> {s.backToServices}
        </Link>

        <div className="flex flex-col gap-[60px]">
          {/* Header */}
          <div className="flex flex-col gap-[30px]">
            <div className="text-8xl font-extrabold text-outline text-transparent">
              01
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-[1.05]">
              <span className="sm:hidden whitespace-pre-line">{w.titleMobile || w.title}</span>
              <span className="hidden sm:inline">{w.title}</span>
            </h1>
            <p className="max-w-[600px] text-white/60 text-xl">{w.subtitle}</p>
          </div>

          {/* Technologies */}
          <div className="flex flex-col gap-[30px]">
            <h2 className="text-4xl font-bold text-white">{w.techHeading}</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {techIcons.map((icon, index) => (
                <li
                  key={index}
                  className="bg-[#232329] h-[120px] rounded-xl flex flex-col justify-center items-center gap-4 hover:bg-accent transition-all duration-300 group"
                >
                  <div className="text-5xl text-accent group-hover:text-primary transition-all duration-300">
                    {icon}
                  </div>
                  <p className="text-white/60 group-hover:text-primary transition-all duration-300">
                    {techNames[index]}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-[30px]">
            <h2 className="text-4xl font-bold text-white">{w.featuresHeading}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
              {w.features.map((feature, index) => (
                <li
                  key={index}
                  className="bg-[#232329] p-6 rounded-xl flex flex-col gap-4"
                >
                  <h3 className="text-2xl font-bold text-accent">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-[#232329] p-10 rounded-xl flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-white">{w.ctaTitle}</h2>
            <p className="text-white/60 max-w-[600px]">{w.ctaText}</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-accent text-primary font-semibold px-8 py-3 rounded-full hover:bg-accent-hover transition-all max-w-[200px] xl:max-w-[400px] mx-auto"
            >
              {s.getInTouch}
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WebDevelopment;
