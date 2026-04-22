"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "/blog" },
  { label: "Newsletter", href: "/newsletter" },
];

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 mix-blend-multiply"
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href="/"
        className="text-[18px] tracking-[0.08em] uppercase text-ink font-semibold select-none font-display"
      >
        Leonardo Miranda
      </Link>

      <nav className="flex items-center gap-7">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-[11px] tracking-[0.18em] uppercase text-ink/60 font-light hover:text-ink transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </motion.header>
  );
}
