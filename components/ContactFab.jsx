"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "@/lib/language-context";

const ContactFab = () => {
  const { t } = useLanguage();
  const f = t.contactFab;
  const [open, setOpen] = useState(false);

  const actions = [
    {
      key: "call",
      label: f.call,
      icon: <FaPhoneAlt />,
      href: "tel:+491626310090",
    },
    {
      key: "whatsapp",
      label: f.whatsapp,
      icon: <FaWhatsapp />,
      href: "https://wa.me/491626310090",
      external: true,
    },
    {
      key: "form",
      label: f.form,
      icon: <FaEnvelope />,
      href: "/contact",
      internal: true,
    },
  ];

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 flex flex-col gap-2 rounded-2xl border border-accent/25 bg-[#1c1c22] p-2 shadow-[0_15px_45px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {actions.map((action) =>
              action.internal ? (
                <Link
                  key={action.key}
                  href={action.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-accent transition-colors whitespace-nowrap"
                >
                  <span className="text-accent">{action.icon}</span>
                  {action.label}
                </Link>
              ) : (
                <a
                  key={action.key}
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-accent transition-colors whitespace-nowrap"
                >
                  <span className="text-accent">{action.icon}</span>
                  {action.label}
                </a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.92 }}
        aria-label="Contact options"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-accent text-primary flex items-center justify-center text-xl shadow-[0_10px_30px_rgba(0,217,255,0.35)] hover:bg-accent-hover transition-colors"
      >
        <motion.span animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>
          <FaPhoneAlt />
        </motion.span>
      </motion.button>
    </>
  );
};

export default ContactFab;
