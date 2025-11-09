"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { FaPaintBrush, FaVectorSquare, FaPalette, FaLightbulb } from "react-icons/fa";
import { SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si";

const tools = [
  { icon: <SiAdobeillustrator />, name: "Adobe Illustrator" },
  { icon: <SiAdobephotoshop />, name: "Photoshop" },
  { icon: <FaPaintBrush />, name: "Custom Tool" },
  { icon: <FaVectorSquare />, name: "Vector Design" },
  { icon: <FaPalette />, name: "Color Theory" },
  { icon: <FaLightbulb />, name: "Creative Concepts" },
];

const features = [
  {
    title: "Memorable Identities",
    description: "Creating logos that stick in minds and stand out in markets.",
  },
  {
    title: "Versatile Designs",
    description: "Logos that work perfectly across all mediums - from business cards to billboards.",
  },
  {
    title: "Brand Strategy",
    description: "Every logo tells a story and communicates your brand values.",
  },
  {
    title: "Fast Turnaround",
    description: "Built my own logo-generator tool to create unique designs at speed.",
  },
];

const deliverables = [
  "High-resolution logo files (PNG, SVG, AI)",
  "Color and monochrome versions",
  "Brand guidelines document",
  "Social media kit",
  "Multiple concept variations",
  "Unlimited revisions until perfect",
];

const LogoDesign = () => {
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
          <BsArrowLeft /> Back to Services
        </Link>

        <div className="flex flex-col gap-[60px]">
          {/* Header */}
          <div className="flex flex-col gap-[30px]">
            <div className="text-8xl font-extrabold text-outline text-transparent">
              03
            </div>
            <h1 className="text-6xl font-bold text-white">Logo Design</h1>
            <p className="max-w-[600px] text-white/60 text-xl">
              I craft bold, memorable identities - and built my own logo-generator tool to create
              unique designs at speed. Your brand deserves to be unforgettable.
            </p>
          </div>

          {/* Tools */}
          <div className="flex flex-col gap-[30px]">
            <h2 className="text-4xl font-bold text-white">Design Tools & Expertise</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <li
                  key={index}
                  className="bg-[#232329] h-[120px] rounded-xl flex flex-col justify-center items-center gap-4 hover:bg-accent transition-all duration-300 group"
                >
                  <div className="text-5xl text-accent group-hover:text-primary transition-all duration-300">
                    {tool.icon}
                  </div>
                  <p className="text-white/60 group-hover:text-primary transition-all duration-300">
                    {tool.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-[30px]">
            <h2 className="text-4xl font-bold text-white">Why Choose Me</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
              {features.map((feature, index) => (
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

          {/* Deliverables */}
          <div className="bg-[#232329] p-10 rounded-xl flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-white">What You'll Receive</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {deliverables.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-white/60">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-[#232329] p-10 rounded-xl flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-white">Ready for a Bold Identity?</h2>
            <p className="text-white/60 max-w-[600px]">
              Let's create a logo that makes your brand impossible to ignore.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-accent text-primary font-semibold px-8 py-3 rounded-full hover:bg-accent-hover transition-all max-w-[200px]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LogoDesign;
