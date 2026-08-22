"use client";

import { useState } from "react";
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

const ContactForm = ({ compact = false, showFunnelChips = true }) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-4 ${
        compact ? "px-5 py-6 sm:px-7 sm:py-7" : "px-6 sm:px-10 py-7"
      } bg-[#27272c] rounded-xl`}
    >
      {!compact && (
        <>
          <h3 className="text-2xl sm:text-3xl xl:text-4xl text-accent break-words">{c.title}</h3>
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
        <SelectTrigger className="w-full">
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
      <Textarea className="h-[110px]" placeholder={c.message} value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
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
  );
};

export default ContactForm;
