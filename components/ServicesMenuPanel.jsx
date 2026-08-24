"use client";

import Link from "next/link";
import {
  FiArrowRight,
  FiCode,
  FiPenTool,
  FiFeather,
  FiTrendingUp,
  FiServer,
  FiCpu,
} from "react-icons/fi";
import { useLanguage } from "@/lib/language-context";

const serviceIcons = {
  "/services/web-development": FiCode,
  "/services/ui-ux-design": FiPenTool,
  "/services/logo-design": FiFeather,
  "/services/seo": FiTrendingUp,
  "/services/backend-development": FiServer,
  "/services/ai-engineering": FiCpu,
};

const ServicesMenuPanel = ({ className = "", onNavigate }) => {
  const { t } = useLanguage();

  return (
    <div
      className={`rounded-2xl border border-white/10 bg-[#18181d] shadow-[0_25px_70px_rgba(0,0,0,0.55)] p-3 ${className}`}
    >
      <div className="grid grid-cols-2 gap-1">
        {t.services.map((service) => {
          const Icon = serviceIcons[service.href] ?? FiCode;
          return (
            <Link
              key={service.href}
              href={service.href}
              onClick={onNavigate}
              className="group flex items-start gap-3 rounded-xl p-3 hover:bg-white/[0.06] transition-colors text-left"
            >
              <span className="shrink-0 w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary group-hover:border-accent transition-colors duration-200">
                <Icon className="text-base" />
              </span>
              <span className="flex flex-col min-w-0">
                <span className="text-sm font-semibold text-white normal-case group-hover:text-accent transition-colors duration-200">
                  {service.title}
                </span>
                <span className="text-xs text-white/50 leading-snug mt-0.5 line-clamp-2 normal-case">
                  {service.description}
                </span>
              </span>
            </Link>
          );
        })}
      </div>
      <Link
        href="/services"
        onClick={onNavigate}
        className="mt-1 flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-white/70 normal-case hover:text-accent hover:bg-white/[0.06] transition-colors duration-200 border-t border-white/10"
      >
        {t.nav.viewAllServices}
        <FiArrowRight className="text-sm" />
      </Link>
    </div>
  );
};

export default ServicesMenuPanel;
