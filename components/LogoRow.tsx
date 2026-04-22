"use client";

import { motion } from "framer-motion";
import { clients } from "@/data/clients";

export default function LogoRow() {
  return (
    <motion.section
      className="px-6 md:px-10 py-10 border-t border-ink/8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <p className="text-[10px] tracking-[0.2em] uppercase text-muted mb-6">
        Selected clients
      </p>
      <div className="flex items-center gap-10 flex-wrap">
        {clients.map((name) => (
          <span
            key={name}
            className="text-[13px] font-light tracking-wide text-ink/25 select-none"
          >
            {name}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
