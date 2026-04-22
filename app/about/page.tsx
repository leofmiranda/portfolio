"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-canvas"
    >
      <section className="px-6 md:px-10 pt-36 pb-16 max-w-4xl mx-auto">
        <h1 className="text-[32px] md:text-[48px] font-display font-semibold text-ink mb-8">
          About
        </h1>

        <div className="space-y-8 text-ink/80 font-light">
          <p className="text-[16px] leading-relaxed">
            Leonardo Miranda is a creative designer focused on digital experiences, 
            motion design, and brand identity development. With a passion for precision 
            and innovation, every project is crafted to tell a compelling story.
          </p>

          <p className="text-[16px] leading-relaxed">
            Specializing in UI/UX design, branding, and motion graphics, the work 
            combines clean aesthetics with dynamic storytelling to create memorable 
            experiences that resonate with audiences.
          </p>

          <div className="pt-8 border-t border-ink/8">
            <h2 className="text-[18px] font-display font-semibold text-ink mb-6">
              Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-[12px] tracking-[0.2em] uppercase text-muted mb-3">
                  Design
                </p>
                <ul className="space-y-2 text-[14px]">
                  <li>• Brand Identity</li>
                  <li>• UI/UX Design</li>
                  <li>• Print Design</li>
                  <li>• Packaging</li>
                </ul>
              </div>
              <div>
                <p className="text-[12px] tracking-[0.2em] uppercase text-muted mb-3">
                  Motion
                </p>
                <ul className="space-y-2 text-[14px]">
                  <li>• Motion Graphics</li>
                  <li>• Animation</li>
                  <li>• Video Direction</li>
                  <li>• Interactive Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
