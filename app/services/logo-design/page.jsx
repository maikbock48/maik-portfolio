"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { FaPaintBrush, FaVectorSquare, FaPalette, FaLightbulb } from "react-icons/fa";
import { SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si";
import { useLanguage } from "@/lib/language-context";

const toolIcons = [
  <SiAdobeillustrator key="ai" />,
  <SiAdobephotoshop key="ps" />,
  <FaPaintBrush key="pb" />,
  <FaVectorSquare key="vs" />,
  <FaPalette key="pa" />,
  <FaLightbulb key="lb" />,
];

const LogoDesign = () => {
  const { t } = useLanguage();
  const s = t.serviceDetails;
  const l = s.logo;

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
              03
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white">{l.title}</h1>
            <p className="max-w-[600px] text-white/60 text-xl">{l.subtitle}</p>
          </div>

          {/* Tools */}
          <div className="flex flex-col gap-[30px]">
            <h2 className="text-4xl font-bold text-white">{l.toolsHeading}</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
              {toolIcons.map((icon, index) => (
                <li
                  key={index}
                  className="bg-[#232329] h-[120px] rounded-xl flex flex-col justify-center items-center gap-4 hover:bg-accent transition-all duration-300 group"
                >
                  <div className="text-5xl text-accent group-hover:text-primary transition-all duration-300">
                    {icon}
                  </div>
                  <p className="text-white/60 group-hover:text-primary transition-all duration-300 text-center px-2">
                    {l.tools[index]}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-[30px]">
            <h2 className="text-4xl font-bold text-white">{l.whyHeading}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
              {l.features.map((feature, index) => (
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

          {/* Real Example */}
          <div className="flex flex-col gap-[30px]">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">{l.exampleHeading}</h2>
            <p className="text-white/60 max-w-[700px]">{l.exampleIntro}</p>

            <div className="bg-black rounded-xl border border-white/10 overflow-hidden flex items-center justify-center p-6 sm:p-10">
              <Image
                src="/assets/example-logo.png"
                alt="Paper logo example"
                width={860}
                height={350}
                sizes="(min-width: 700px) 700px, 100vw"
                className="w-full max-w-[700px] h-auto"
                priority
              />
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              {l.examplePoints.map((point, index) => (
                <li
                  key={index}
                  className="bg-[#232329] p-6 rounded-xl flex flex-col gap-3 border border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-accent font-mono text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-bold text-white">{point.title}</h3>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{point.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div className="bg-[#232329] p-10 rounded-xl flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-white">{l.deliverablesHeading}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {l.deliverables.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent shrink-0"></div>
                  <span className="text-white/60">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-[#232329] p-10 rounded-xl flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-white">{l.ctaTitle}</h2>
            <p className="text-white/60 max-w-[600px]">{l.ctaText}</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-accent text-primary font-semibold px-8 py-3 rounded-full hover:bg-accent-hover transition-all max-w-[200px] mx-auto"
            >
              {s.getInTouch}
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LogoDesign;
