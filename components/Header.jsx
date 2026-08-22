"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LanguageSwitcher from "./LanguageSwitcher";
import HireMeButton from "./HireMeButton";

const Header = () => {
  const [rotation, setRotation] = useState(0);
  const [shakeKey, setShakeKey] = useState(0);
  const pathname = usePathname();

  return (
    <header className="py-5 xl:py-8 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link
          href="/"
          onClick={() => {
            if (pathname === "/") setShakeKey((k) => k + 1);
          }}
        >
          <h1
            className="relative inline-block text-4xl font-semibold"
            onMouseEnter={() => setRotation((r) => r + 360)}
          >
            Maik
            <motion.span
              className="text-accent inline-block"
              style={{ transformOrigin: "-60px 50%" }}
              animate={{ rotate: rotation }}
              transition={{ duration: 0.85, ease: "easeInOut" }}
            >
              .
            </motion.span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <LanguageSwitcher />
          <HireMeButton shakeKey={shakeKey} />
        </div>

        {/* mobile nav */}
        <div className="xl:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
