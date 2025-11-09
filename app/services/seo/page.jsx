"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { FaSearch, FaChartLine, FaFileAlt, FaLink } from "react-icons/fa";
import { SiGoogleanalytics, SiGooglesearchconsole } from "react-icons/si";

const tools = [
  { icon: <FaSearch />, name: "Keyword Research" },
  { icon: <SiGoogleanalytics />, name: "Google Analytics" },
  { icon: <SiGooglesearchconsole />, name: "Search Console" },
  { icon: <FaChartLine />, name: "Performance Tracking" },
  { icon: <FaFileAlt />, name: "Content Optimization" },
  { icon: <FaLink />, name: "Link Building" },
];

const features = [
  {
    title: "Technical SEO",
    description: "Optimizing site structure, speed, and crawlability for search engines.",
  },
  {
    title: "Content Strategy",
    description: "Creating and optimizing content that ranks and converts.",
  },
  {
    title: "On-Page Optimization",
    description: "Meta tags, headers, and keyword optimization that actually works.",
  },
  {
    title: "Analytics & Reporting",
    description: "Data-driven insights to continuously improve your rankings.",
  },
];

const services = [
  {
    title: "SEO Audit",
    description: "Comprehensive analysis of your current SEO performance and opportunities.",
  },
  {
    title: "Keyword Strategy",
    description: "Research and target the keywords that drive real business results.",
  },
  {
    title: "Technical Optimization",
    description: "Fix technical issues holding your site back from ranking.",
  },
  {
    title: "Content Creation",
    description: "SEO-optimized content that engages readers and ranks high.",
  },
  {
    title: "Link Building",
    description: "Earn quality backlinks that boost your domain authority.",
  },
  {
    title: "Local SEO",
    description: "Dominate local search results and attract nearby customers.",
  },
];

const SEO = () => {
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
              04
            </div>
            <h1 className="text-6xl font-bold text-white">SEO</h1>
            <p className="max-w-[600px] text-white/60 text-xl">
              I optimize content and structure so search engines actually care - and people actually click.
              No black-hat tricks, just results that last.
            </p>
          </div>

          {/* Tools */}
          <div className="flex flex-col gap-[30px]">
            <h2 className="text-4xl font-bold text-white">SEO Tools & Methods</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <li
                  key={index}
                  className="bg-[#232329] h-[120px] rounded-xl flex flex-col justify-center items-center gap-4 hover:bg-accent transition-all duration-300 group"
                >
                  <div className="text-5xl text-accent group-hover:text-primary transition-all duration-300">
                    {tool.icon}
                  </div>
                  <p className="text-white/60 group-hover:text-primary transition-all duration-300 text-center px-2">
                    {tool.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-[30px]">
            <h2 className="text-4xl font-bold text-white">My SEO Approach</h2>
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

          {/* Services */}
          <div className="flex flex-col gap-[30px]">
            <h2 className="text-4xl font-bold text-white">SEO Services</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="bg-[#232329] p-6 rounded-xl flex flex-col gap-4 hover:border-2 hover:border-accent transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-white/60">{service.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div className="bg-[#232329] p-10 rounded-xl flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-white">What to Expect</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <li className="flex flex-col gap-2">
                <div className="text-5xl font-bold text-accent">+150%</div>
                <h3 className="text-xl font-bold text-white">Organic Traffic</h3>
                <p className="text-white/60">Average increase within 6 months</p>
              </li>
              <li className="flex flex-col gap-2">
                <div className="text-5xl font-bold text-accent">Top 10</div>
                <h3 className="text-xl font-bold text-white">Rankings</h3>
                <p className="text-white/60">Target keywords in search results</p>
              </li>
              <li className="flex flex-col gap-2">
                <div className="text-5xl font-bold text-accent">2-3x</div>
                <h3 className="text-xl font-bold text-white">Conversions</h3>
                <p className="text-white/60">Better traffic quality = more sales</p>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-[#232329] p-10 rounded-xl flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-white">Ready to Rank Higher?</h2>
            <p className="text-white/60 max-w-[600px]">
              Let's optimize your site and start driving organic traffic that converts.
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

export default SEO;
