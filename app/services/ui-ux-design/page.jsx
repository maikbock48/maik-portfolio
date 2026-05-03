"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { FaFigma, FaPencilRuler, FaMobile, FaUsers } from "react-icons/fa";
import { SiAdobexd, SiSketch } from "react-icons/si";
import { useLanguage } from "@/lib/language-context";

const toolIcons = [
  <FaFigma key="f" />,
  <SiAdobexd key="x" />,
  <SiSketch key="s" />,
  <FaPencilRuler key="p" />,
  <FaMobile key="m" />,
  <FaUsers key="u" />,
];

const UIUXDesign = () => {
  const { t } = useLanguage();
  const s = t.serviceDetails;
  const u = s.uiux;

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
              02
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white">{u.title}</h1>
            <p className="max-w-[600px] text-white/60 text-xl">{u.subtitle}</p>
          </div>

          {/* Tools */}
          <div className="flex flex-col gap-[30px]">
            <h2 className="text-4xl font-bold text-white">{u.toolsHeading}</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
              {toolIcons.map((icon, index) => (
                <li
                  key={index}
                  className="bg-[#232329] h-[120px] rounded-xl flex flex-col justify-center items-center gap-4 hover:bg-accent transition-all duration-300 group"
                >
                  <div className="text-5xl text-accent group-hover:text-primary transition-all duration-300">
                    {icon}
                  </div>
                  <p className="text-white/60 group-hover:text-primary transition-all duration-300">
                    {u.tools[index]}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-[30px]">
            <h2 className="text-4xl font-bold text-white">{u.approachHeading}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
              {u.features.map((feature, index) => (
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

          {/* Process */}
          <div className="bg-[#232329] p-10 rounded-xl flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-white">{u.processHeading}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {u.process.map((step) => (
                <li key={step.num} className="flex flex-col gap-2">
                  <div className="text-4xl font-bold text-accent">{step.num}</div>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-white/60">{step.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-[#232329] p-10 rounded-xl flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-white">{u.ctaTitle}</h2>
            <p className="text-white/60 max-w-[600px]">{u.ctaText}</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-accent text-primary font-semibold px-8 py-3 rounded-full hover:bg-accent-hover transition-all max-w-[200px]"
            >
              {s.getInTouch}
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UIUXDesign;
