"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/lib/language-context";

const CtaBanner = () => {
  const { t } = useLanguage();
  const c = t.home.ctaBanner;
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="pt-4 pb-12 xl:pt-6 xl:pb-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className={`relative mx-auto [perspective:1500px] transition-[min-height,max-width] duration-700 ease-in-out ${
            flipped
              ? "max-w-[640px] min-h-[760px] sm:min-h-[680px] md:min-h-[620px]"
              : "max-w-full min-h-[600px] sm:min-h-[540px] md:min-h-[480px]"
          }`}
        >
          <motion.div
            className="absolute inset-0 [transform-style:preserve-3d]"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            {/* front face */}
            <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-br from-[#161620] via-primary to-[#101014] px-8 py-14 xl:px-16 xl:py-16 text-center flex flex-col items-center justify-center">
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
              <h2 className="h2 mb-4 relative">{c.title}</h2>
              <p className="text-white/60 max-w-[520px] mx-auto mb-8 relative">
                {c.subtitle}
              </p>
              <Button
                size="lg"
                className="uppercase relative"
                onClick={() => setFlipped(true)}
              >
                {c.button}
              </Button>
            </div>

            {/* back face */}
            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-y-auto rounded-2xl border border-accent/25 bg-[#101014] p-4 sm:p-6">
              <button
                onClick={() => setFlipped(false)}
                aria-label="Close"
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent transition-colors"
              >
                <FiX />
              </button>
              <ContactForm compact showFunnelChips={false} fillHeight />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
