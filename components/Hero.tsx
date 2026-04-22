"use client";

import { motion } from "framer-motion";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.015 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const words = "Creative work focused on design, motion and digital products.".split(" ");

export default function Hero() {
  return (
    <section className="px-6 md:px-10 pt-36 pb-16 md:pt-40 md:pb-20">
      <motion.p
        className="max-w-[400px] text-[15px] leading-relaxed font-light text-ink/80"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, i) => (
          <motion.span key={i} variants={letter} className="inline-block mr-[0.28em]">
            {word}
          </motion.span>
        ))}
      </motion.p>
    </section>
  );
}
