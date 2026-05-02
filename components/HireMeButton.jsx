"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useLanguage } from "@/lib/language-context";

const HireMeButton = () => {
  const { t } = useLanguage();
  return (
    <Link href="/contact">
      <Button>{t.header.hireMe}</Button>
    </Link>
  );
};

export default HireMeButton;
