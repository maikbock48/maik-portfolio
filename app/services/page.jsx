"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { BreadcrumbStructuredData } from "@/components/StructuredData";

const Services = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <BreadcrumbStructuredData
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
      <h1 className="sr-only">{t.nav.services}</h1>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5, duration: 0.3, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {t.services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <div className="w-[70px] h-[70px] rounded-full bg-white overflow-hidden relative flex justify-center items-center group-hover:-rotate-45 transition-transform duration-500">
                  <div className="absolute inset-0 bg-accent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
                  <BsArrowDownRight className="text-primary text-3xl relative z-10" />
                </div>
              </div>
              <h2 className="text-[28px] xl:text-[42px] font-bold leading-none hyphens-auto text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
