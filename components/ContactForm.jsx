"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/lib/language-context";

const FORM_DISABLED = true;

const ContactForm = ({ compact = false, showFunnelChips = true, fillHeight = false }) => {
  const { t } = useLanguage();
  const c = t.contact;

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [blocked, setBlocked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (FORM_DISABLED) {
      setBlocked(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ firstname: "", lastname: "", email: "", phone: "", service: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-4 ${
        compact ? "px-5 py-6 sm:px-7 sm:py-7" : "px-6 sm:px-10 py-7"
      } ${fillHeight ? "h-full" : ""} bg-[#27272c] rounded-xl`}
    >
      {!compact && (
        <>
          <h1 className="text-2xl sm:text-3xl xl:text-4xl text-accent break-words">{c.title}</h1>
          <p className="text-white/60">{c.subtitle}</p>
        </>
      )}
      {showFunnelChips && (
        <div className="flex flex-wrap gap-2 text-xs">
          {t.home.funnel.steps.map((step, index) => (
            <span
              key={step.title}
              className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/[0.06] px-3 py-1.5 text-white/70"
            >
              <span className="text-accent font-semibold">{index + 1}</span>
              {step.title}
            </span>
          ))}
        </div>
      )}
      <div className={`grid grid-cols-1 md:grid-cols-2 ${compact ? "gap-4" : "gap-6"}`}>
        <Input type="text" placeholder={c.firstname} value={formData.firstname}
          onChange={(e) => setFormData({ ...formData, firstname: e.target.value })} required />
        <Input type="text" placeholder={c.lastname} value={formData.lastname}
          onChange={(e) => setFormData({ ...formData, lastname: e.target.value })} required />
        <Input type="email" placeholder={c.email} value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
        <Input type="tel" placeholder={c.phone} value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
      </div>
      <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
        <SelectTrigger aria-label={c.selectService} className="w-full">
          <SelectValue placeholder={c.selectService} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{c.selectService}</SelectLabel>
            {t.services.map((service) => (
              <SelectItem key={service.href} value={service.title}>
                {service.title}
              </SelectItem>
            ))}
            <SelectItem value={c.serviceIndividual}>{c.serviceIndividual}</SelectItem>
            <SelectItem value={c.serviceOther}>{c.serviceOther}</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Textarea
        className={fillHeight ? "flex-1 min-h-[110px]" : "h-[110px]"}
        placeholder={c.message}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
      />
      <p className="text-white/40 text-xs leading-relaxed">
        {c.privacyNotice}{" "}
        <Link href="/datenschutz" className="text-accent hover:underline">
          {c.privacyLinkLabel}
        </Link>
        .
      </p>
      {submitStatus === "success" && <p className="text-green-500 text-sm">{c.success}</p>}
      {submitStatus === "error" && <p className="text-red-500 text-sm">{c.error}</p>}
      <Button
        size="md"
        className={`max-w-40 ${compact ? "mx-auto" : ""}`}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? c.sending : c.send}
      </Button>
    </form>

    <AnimatePresence>
      {blocked && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setBlocked(false)}
          />
          <motion.div
            className="fixed top-1/2 left-1/2 z-50 bg-[#1c1c22] border border-accent/30 rounded-2xl p-8 sm:p-10 flex flex-col items-center gap-4 shadow-[0_0_60px_rgba(0,217,255,0.15)] max-w-sm w-[90vw] text-center"
            initial={{ opacity: 0, scale: 0.85, x: "-50%", y: "-48%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.85, x: "-50%", y: "-48%" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <h2 className="text-xl font-bold text-white">{c.blockedTitle}</h2>
            <p className="text-white/60 text-sm leading-relaxed">{c.blockedText}</p>
            <button
              onClick={() => setBlocked(false)}
              className="text-white/40 text-xs hover:text-white/70 transition-colors mt-1"
            >
              {c.blockedClose}
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
};

export default ContactForm;
