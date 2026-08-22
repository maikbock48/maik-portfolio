"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useLanguage } from "@/lib/language-context";

const HireMeButton = ({ shakeKey = 0 }) => {
  const { t } = useLanguage();
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    if (!shakeKey) return;
    setShaking(true);
    const timeout = setTimeout(() => setShaking(false), 500);
    return () => clearTimeout(timeout);
  }, [shakeKey]);

  return (
    <motion.div
      animate={
        shaking
          ? { x: [0, -6, 6, -6, 6, -3, 3, 0], rotate: [0, -2, 2, -2, 2, -1, 1, 0] }
          : { x: 0, rotate: 0 }
      }
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Link href="/contact">
        <Button>{t.header.hireMe}</Button>
      </Link>
    </motion.div>
  );
};

export default HireMeButton;
