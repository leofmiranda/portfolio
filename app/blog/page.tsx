"use client";

import { motion } from "framer-motion";

export default function Blog() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-canvas"
    >
      <section className="px-6 md:px-10 pt-36 pb-16 max-w-4xl mx-auto">
        <h1 className="text-[32px] md:text-[48px] font-display font-semibold text-ink mb-12">
          Blog
        </h1>

        <div className="space-y-12">
          {[
            {
              title: "The Art of Motion Design",
              date: "21 de Abril de 2026",
              excerpt:
                "Exploring the principles of motion that bring designs to life and engage audiences.",
            },
            {
              title: "Building Cohesive Brand Systems",
              date: "15 de Março de 2026",
              excerpt:
                "A deep dive into creating comprehensive brand guidelines that work across all touchpoints.",
            },
            {
              title: "UI/UX Trends in 2026",
              date: "8 de Fevereiro de 2026",
              excerpt:
                "What's new in interface design and how to stay ahead of the curve.",
            },
          ].map((post, idx) => (
            <motion.article
              key={idx}
              className="pb-8 border-b border-ink/8 cursor-pointer hover:opacity-70 transition-opacity"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-[11px] tracking-[0.2em] uppercase text-muted mb-3">
                {post.date}
              </p>
              <h2 className="text-[24px] font-display font-semibold text-ink mb-3">
                {post.title}
              </h2>
              <p className="text-[15px] text-ink/70 font-light">{post.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </motion.main>
  );
}
