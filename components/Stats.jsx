"use client";

import CountUp from "react-countup";
import { useLanguage } from "@/lib/language-context";

const Stats = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-col items-center xl:items-stretch xl:flex-row gap-6 xl:max-w-none">
          {t.stats.map((item, index) => (
            <div
              className="grid grid-cols-[90px_140px] xl:flex xl:flex-1 gap-4 items-center xl:justify-start"
              key={index}
            >
              <span className="text-4xl xl:text-6xl font-extrabold text-right xl:text-left">
                <CountUp
                  end={item.num}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                  scrollSpyDelay={200}
                />
                {item.suffix}
              </span>
              <p
                className={`${
                  item.text.length < 15 ? "xl:max-w-[100px]" : "xl:max-w-[150px]"
                } leading-snug text-white/80 text-left`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
