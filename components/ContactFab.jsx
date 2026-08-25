"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "@/lib/language-context";

const CALL_HREF = "tel:+491626310090";
const WHATSAPP_HREF = "https://wa.me/491626310090";

const ContactFab = () => {
  const { t } = useLanguage();
  const f = t.contactFab;
  const [open, setOpen] = useState(false);
  const [activeConfirm, setActiveConfirm] = useState(null); // null | "call" | "whatsapp"

  useEffect(() => {
    const openWhatsapp = () => setActiveConfirm("whatsapp");
    window.addEventListener("open-whatsapp-confirm", openWhatsapp);
    return () => window.removeEventListener("open-whatsapp-confirm", openWhatsapp);
  }, []);

  const actions = [
    {
      key: "call",
      label: f.call,
      icon: <FaPhoneAlt />,
      confirm: true,
    },
    {
      key: "whatsapp",
      label: f.whatsapp,
      icon: <FaWhatsapp />,
      confirm: true,
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
                <button
                  key={action.key}
                  onClick={() => {
                    setActiveConfirm(action.key);
                    setOpen(false);
                  }}
                  className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-accent transition-colors whitespace-nowrap text-left"
                >
                  <span className="text-accent">{action.icon}</span>
                  {action.label}
                </button>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call confirm popup */}
      <AnimatePresence>
        {activeConfirm === "call" && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveConfirm(null)}
            />
            <motion.div
              className="fixed top-1/2 left-1/2 z-50 bg-[#1c1c22] border border-accent/30 rounded-2xl p-10 flex flex-col items-center gap-4 shadow-[0_0_60px_rgba(0,217,255,0.15)] max-w-sm w-[90vw] text-center"
              initial={{ opacity: 0, scale: 0.85, x: "-50%", y: "-48%" }}
              animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
              exit={{ opacity: 0, scale: 0.85, x: "-50%", y: "-48%" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="text-6xl text-accent">
                <FaPhoneAlt />
              </div>
              <h2 className="text-2xl font-bold text-white">{f.callConfirmTitle}</h2>
              <p className="text-white/60 text-sm leading-relaxed">{f.callConfirmDesc}</p>
              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => setActiveConfirm(null)}
                  className="px-6 py-2 rounded-full border border-white/20 text-white/70 text-sm font-semibold hover:border-white/40 transition-all duration-300"
                >
                  {f.cancel}
                </button>
                <a
                  href={CALL_HREF}
                  onClick={() => setActiveConfirm(null)}
                  className="px-6 py-2 rounded-full border border-accent bg-accent text-primary text-sm font-semibold hover:bg-accent-hover transition-all duration-300"
                >
                  {f.callConfirmAction}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* WhatsApp confirm popup */}
      <AnimatePresence>
        {activeConfirm === "whatsapp" && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveConfirm(null)}
            />
            <motion.div
              className="fixed top-1/2 left-1/2 z-50 bg-[#1c1c22] border border-accent/30 rounded-2xl p-10 flex flex-col items-center gap-4 shadow-[0_0_60px_rgba(0,217,255,0.15)] max-w-sm w-[90vw] text-center"
              initial={{ opacity: 0, scale: 0.85, x: "-50%", y: "-48%" }}
              animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
              exit={{ opacity: 0, scale: 0.85, x: "-50%", y: "-48%" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="text-6xl text-accent">
                <FaWhatsapp />
              </div>
              <h2 className="text-2xl font-bold text-white">{f.whatsappConfirmTitle}</h2>
              <p className="text-white/60 text-sm leading-relaxed">{f.whatsappConfirmDesc}</p>
              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => setActiveConfirm(null)}
                  className="px-6 py-2 rounded-full border border-white/20 text-white/70 text-sm font-semibold hover:border-white/40 transition-all duration-300"
                >
                  {f.cancel}
                </button>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setActiveConfirm(null)}
                  className="px-6 py-2 rounded-full border border-accent bg-accent text-primary text-sm font-semibold hover:bg-accent-hover transition-all duration-300"
                >
                  {f.whatsappConfirmAction}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.92 }}
        aria-label="Contact options"
        aria-expanded={open}
        className="fixed bottom-6 right-6 xl:bottom-[29px] xl:right-[29px] z-40 w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-accent text-primary flex items-center justify-center text-xl xl:text-2xl shadow-[0_10px_30px_rgba(0,217,255,0.35)] hover:bg-accent-hover transition-colors"
      >
        <motion.span animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>
          <FaPhoneAlt />
        </motion.span>
      </motion.button>
    </>
  );
};

export default ContactFab;
