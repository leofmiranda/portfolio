"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-canvas"
    >
      <section className="px-6 md:px-10 pt-36 pb-16 max-w-2xl mx-auto flex flex-col items-center justify-center min-h-screen text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-[32px] md:text-[48px] font-display font-semibold text-ink mb-6">
            Stay Updated
          </h1>

          <p className="text-[16px] text-ink/70 font-light mb-12">
            Subscribe to get the latest work, insights, and inspiration delivered 
            straight to your inbox.
          </p>

          <motion.form
            className=\"space-y-6\"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type=\"email\"
              placeholder=\"your@email.com\"
              className=\"w-full px-6 py-3 border border-ink/20 rounded bg-transparent text-ink placeholder:text-ink/30 focus:outline-none focus:border-ink transition-colors\"
              required
            />
            <button
              type=\"submit\"
              className=\"w-full px-6 py-3 bg-ink text-canvas font-light tracking-wide hover:bg-ink/90 transition-colors rounded\"
            >
              Subscribe
            </button>
          </motion.form>

          <p className=\"text-[12px] text-ink/50 font-light mt-8\">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </section>
    </motion.main>
  );
}
