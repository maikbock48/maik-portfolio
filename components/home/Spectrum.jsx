"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

const Spectrum = () => {
  const { t } = useLanguage();
  const s = t.home.spectrum;

  return (
    <section className="pt-14 xl:pt-20 pb-6 xl:pb-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px] mb-14"
        >
          <span className="text-accent text-xs tracking-[0.16em] uppercase font-semibold pl-3 border-l-2 border-accent">
            {s.eyebrow}
          </span>
          <h2 className="h2 mt-4 mb-4">{s.title}</h2>
          <p className="text-white/60 text-[15.5px] leading-relaxed">{s.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {s.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative rounded-xl border border-white/10 bg-white/[0.03] p-7 hover:border-accent/40 hover:bg-white/[0.05] transition-all duration-300"
            >
              <span className="font-mono text-xs text-accent/70">
                0{index + 1}
              </span>
              <h3 className="text-lg font-semibold mt-3 mb-2 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spectrum;
