"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

const STORAGE_KEY = "cookie_consent";
const COOKIE_NAME = "cookie_consent";

const readStoredConsent = () => {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const persistConsent = (categories) => {
  const id =
    readStoredConsent()?.id ||
    (typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`);

  const record = { id, categories, timestamp: new Date().toISOString() };

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(
    JSON.stringify(categories)
  )}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;

  fetch("/api/consent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, categories }),
  }).catch(() => {});

  return record;
};

const CookieConsent = () => {
  const { t } = useLanguage();
  const c = t.cookieConsent;

  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const stored = readStoredConsent();
    if (stored) setAnalytics(!!stored.categories?.analytics);

    const showIfUndecided = () => {
      if (!readStoredConsent()) setVisible(true);
    };

    let demoNoticeDismissed = true;
    try {
      demoNoticeDismissed = !!window.localStorage.getItem("demo_notice_dismissed");
    } catch {
      demoNoticeDismissed = true;
    }

    if (demoNoticeDismissed) {
      showIfUndecided();
    } else {
      window.addEventListener("demo-notice-dismissed", showIfUndecided, { once: true });
    }

    const reopen = () => {
      setExpanded(true);
      setVisible(true);
    };
    window.addEventListener("open-cookie-settings", reopen);
    return () => {
      window.removeEventListener("demo-notice-dismissed", showIfUndecided);
      window.removeEventListener("open-cookie-settings", reopen);
    };
  }, []);

  const acceptAll = () => {
    persistConsent({ essential: true, analytics: true });
    setAnalytics(true);
    setVisible(false);
    setExpanded(false);
  };

  const rejectNonEssential = () => {
    persistConsent({ essential: true, analytics: false });
    setAnalytics(false);
    setVisible(false);
    setExpanded(false);
  };

  const saveSelection = () => {
    persistConsent({ essential: true, analytics });
    setVisible(false);
    setExpanded(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6"
        >
          <div className="mx-auto max-w-[860px] bg-[#1c1c22] border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] p-5 sm:p-6">
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              {c.text}{" "}
              <a href="/datenschutz" className="text-accent hover:underline">
                {c.linkLabel}
              </a>
            </p>

            {expanded && (
              <div className="flex flex-col gap-3 mb-4 border-t border-white/10 pt-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-white text-sm font-medium">{c.essentialTitle}</p>
                    <p className="text-white/50 text-xs">{c.essentialDesc}</p>
                  </div>
                  <span className="text-xs text-white/40 shrink-0">{c.alwaysOn}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-white text-sm font-medium">{c.analyticsTitle}</p>
                    <p className="text-white/50 text-xs">{c.analyticsDesc}</p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={analytics}
                    onClick={() => setAnalytics((v) => !v)}
                    className={`shrink-0 relative w-11 h-6 rounded-full transition-colors ${
                      analytics ? "bg-accent" : "bg-white/15"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                        analytics ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3">
              {expanded ? (
                <button
                  onClick={saveSelection}
                  className="rounded-full bg-accent text-primary font-semibold text-sm px-5 py-2.5 hover:bg-accent-hover transition-all"
                >
                  {c.save}
                </button>
              ) : (
                <>
                  <button
                    onClick={acceptAll}
                    className="text-white/60 text-sm hover:text-accent transition-colors px-2 py-2.5"
                  >
                    {c.acceptAll}
                  </button>
                  <button
                    onClick={rejectNonEssential}
                    className="rounded-full border border-white/20 text-white/80 font-semibold text-sm px-5 py-2.5 hover:border-white/40 transition-all"
                  >
                    {c.rejectAll}
                  </button>
                  <button
                    onClick={() => setExpanded(true)}
                    className="rounded-full bg-accent text-primary font-semibold text-sm px-5 py-2.5 hover:bg-accent-hover transition-all"
                  >
                    {c.customize}
                  </button>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
