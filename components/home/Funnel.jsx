"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

const Funnel = () => {
  const { t } = useLanguage();
  const f = t.home.funnel;

  return (
    <section className="py-14 xl:py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px] mb-14 mx-auto text-center xl:text-left xl:mx-0"
        >
          <span className="text-accent text-xs tracking-[0.16em] uppercase font-semibold pl-3 border-l-2 border-accent">
            {f.eyebrow}
          </span>
          <h2 className="h2 mt-4 mb-4">{f.title}</h2>
          <p className="text-white/60 text-[15.5px] leading-relaxed">{f.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {f.steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl border border-accent/20 bg-gradient-to-b from-accent/[0.06] to-transparent p-8"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-primary font-bold mb-5">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center xl:justify-start mt-12"
        >
          <Link href="/contact">
            <Button size="lg" className="uppercase">
              {t.home.ctaBanner.button}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Funnel;
