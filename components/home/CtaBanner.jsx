"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

const CtaBanner = () => {
  const { t } = useLanguage();
  const c = t.home.ctaBanner;

  return (
    <section className="py-12 xl:py-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-br from-[#161620] via-primary to-[#101014] px-8 py-14 xl:px-16 xl:py-16 text-center"
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
          <h2 className="h2 mb-4 relative">{c.title}</h2>
          <p className="text-white/60 max-w-[520px] mx-auto mb-8 relative">
            {c.subtitle}
          </p>
          <Link href="/contact" className="relative inline-block">
            <Button size="lg" className="uppercase">
              {c.button}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
