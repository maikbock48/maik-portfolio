"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/lib/language-context";

const VCARD = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "N:Bock;Maik;;;",
  "FN:Maik Bock",
  "TEL;TYPE=CELL:+491626310090",
  "EMAIL:coding.maikel@gmail.com",
  "URL:https://codewithmaik.vercel.app",
  "END:VCARD",
].join("\n");

const Contact = () => {
  const { t } = useLanguage();
  const c = t.contact;

  const info = [
    { icon: <FaPhoneAlt />, title: c.infoPhone, description: "(+49) 162 631 0090" },
    { icon: <FaEnvelope />, title: c.infoEmail, description: "coding.maikel@gmail.com" },
    { icon: <FaMapMarkerAlt />, title: c.infoAddress, description: c.infoAddressValue },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.3, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <ContactForm />
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-4">
                <div className="bg-white p-2 rounded-lg shrink-0">
                  <QRCodeSVG value={VCARD} size={88} bgColor="#ffffff" fgColor="#1c1c22" level="M" />
                </div>
                <p className="text-white/50 text-xs max-w-[150px] leading-relaxed">{c.qrCaption}</p>
              </div>
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
