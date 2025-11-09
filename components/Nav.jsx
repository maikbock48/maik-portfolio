"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <nav className="flex gap-8 relative">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        const showUnderline = hoveredIndex === index || (isActive && hoveredIndex === null);

        return (
          <Link
            href={link.path}
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`${
              isActive ? "text-accent" : ""
            } capitalize font-medium hover:text-accent transition-colors relative pb-1`}
          >
            {link.name}
            {showUnderline && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                initial={false}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
