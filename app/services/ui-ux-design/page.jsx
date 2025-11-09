"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { FaFigma, FaPencilRuler, FaMobile, FaUsers } from "react-icons/fa";
import { SiAdobexd, SiSketch } from "react-icons/si";

const tools = [
  { icon: <FaFigma />, name: "Figma" },
  { icon: <SiAdobexd />, name: "Adobe XD" },
  { icon: <SiSketch />, name: "Sketch" },
  { icon: <FaPencilRuler />, name: "Wireframing" },
  { icon: <FaMobile />, name: "Prototyping" },
  { icon: <FaUsers />, name: "User Testing" },
];

const features = [
  {
    title: "User-Centered Design",
    description: "Every design decision is driven by real user needs and behavior patterns.",
  },
  {
    title: "Intuitive Interfaces",
    description: "Creating experiences that feel natural and require zero learning curve.",
  },
  {
    title: "Rapid Prototyping",
    description: "From wireframes to interactive prototypes - fast iterations, better results.",
  },
  {
    title: "Design Systems",
    description: "Building consistent, scalable design languages for your brand.",
  },
];

const UIUXDesign = () => {
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
              02
            </div>
            <h1 className="text-6xl font-bold text-white">UI/UX Design</h1>
            <p className="max-w-[600px] text-white/60 text-xl">
              I design and prototype interfaces that feel natural - simple, intuitive... and next level!
              Great design is invisible until you need it.
            </p>
          </div>

          {/* Tools */}
          <div className="flex flex-col gap-[30px]">
            <h2 className="text-4xl font-bold text-white">Design Tools & Methods</h2>
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
            <h2 className="text-4xl font-bold text-white">Design Approach</h2>
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

          {/* Process */}
          <div className="bg-[#232329] p-10 rounded-xl flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-white">My Design Process</h2>
            <ul className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <li className="flex flex-col gap-2">
                <div className="text-4xl font-bold text-accent">01</div>
                <h3 className="text-xl font-bold text-white">Research</h3>
                <p className="text-white/60">Understanding users and business goals</p>
              </li>
              <li className="flex flex-col gap-2">
                <div className="text-4xl font-bold text-accent">02</div>
                <h3 className="text-xl font-bold text-white">Design</h3>
                <p className="text-white/60">Creating wireframes and visual concepts</p>
              </li>
              <li className="flex flex-col gap-2">
                <div className="text-4xl font-bold text-accent">03</div>
                <h3 className="text-xl font-bold text-white">Prototype</h3>
                <p className="text-white/60">Building interactive prototypes</p>
              </li>
              <li className="flex flex-col gap-2">
                <div className="text-4xl font-bold text-accent">04</div>
                <h3 className="text-xl font-bold text-white">Test</h3>
                <p className="text-white/60">Validating with real users</p>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-[#232329] p-10 rounded-xl flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-white">Let's Design Together</h2>
            <p className="text-white/60 max-w-[600px]">
              Ready to create an exceptional user experience? Let's talk about your project.
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

export default UIUXDesign;
