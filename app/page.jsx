"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import TypewriterHeading from "@/components/TypewriterHeading";
import Spectrum from "@/components/home/Spectrum";
import Process from "@/components/home/Process";
import Funnel from "@/components/home/Funnel";
import CtaBanner from "@/components/home/CtaBanner";
import ExploreMore from "@/components/home/ExploreMore";
import { useLanguage } from "@/lib/language-context";

const Home = () => {
  const { t, lang } = useLanguage();
  const h = t.home;
  const cvLang = lang === "de" ? "de" : "en";

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-2 xl:pb-12">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">{h.role}</span>
            <TypewriterHeading greeting={h.greeting} name={h.name} />
            <p className="max-w-[500px] mb-6 text-white/80">{h.description}</p>
            {/* free-talk CTA */}
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event("open-whatsapp-confirm"))}
              className="inline-block mb-6"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0px 0px rgba(0,217,255,0.5)",
                    "0 0 0px 10px rgba(0,217,255,0)",
                  ],
                }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                className="inline-flex items-center gap-2 rounded-full bg-accent text-primary font-bold uppercase tracking-wide px-6 py-3 hover:bg-accent-hover transition-colors"
              >
                <FaWhatsapp className="text-xl" />
                <span>{h.talkFree}</span>
              </motion.div>
            </button>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href={`/cv.html?lang=${cvLang}`} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>{h.downloadCV}</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
      <Spectrum />
      <Process />
      <Funnel />
      <CtaBanner />
      <ExploreMore />
    </section>
  );
};

export default Home;
