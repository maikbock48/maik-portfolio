"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import DeployTerminal from "@/components/DeployTerminal";
import VideoFrame from "@/components/VideoFrame";

const Process = () => {
  const { t } = useLanguage();
  const p = t.home.process;

  return (
    <section className="py-14 xl:py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px] mb-14"
        >
          <span className="text-accent text-xs tracking-[0.16em] uppercase font-semibold pl-3 border-l-2 border-accent">
            {p.eyebrow}
          </span>
          <h2 className="h2 mt-4 mb-4">{p.title}</h2>
          <p className="text-white/60 text-[15.5px] leading-relaxed">{p.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-14 xl:gap-10 items-start">
          {/* process rail */}
          <div className="relative">
            <div className="absolute left-[27px] top-3 bottom-3 w-px bg-gradient-to-b from-accent/60 to-accent/0" />
            {p.steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative grid grid-cols-[56px_1fr] gap-6 py-6 ${
                  index !== 0 ? "border-t border-white/10" : ""
                }`}
              >
                <div className="w-[56px] h-[56px] rounded-full border border-accent/40 bg-primary flex items-center justify-center font-semibold text-accent z-10">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1.5">{step.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed max-w-[440px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* terminal + video */}
          <div className="flex flex-col gap-8 xl:sticky xl:top-24">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center xl:justify-start"
            >
              <DeployTerminal />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <VideoFrame
                caption={p.video.caption}
                comingSoon={p.video.comingSoon}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
