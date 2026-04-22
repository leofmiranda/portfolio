"use client";

import { motion } from "framer-motion";
import GridItem from "@/components/GridItem";
import { projects } from "@/data/projects";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

export default function AllProjects() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-canvas"
    >
      <section className="px-6 md:px-10 pt-36 pb-16">
        <motion.h1
          className="text-[32px] md:text-[48px] font-display font-semibold text-ink mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          All Projects
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[3px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.map((p, i) => (
            <div key={p.id} className="aspect-video">
              <GridItem project={p} index={i} />
            </div>
          ))}
        </motion.div>
      </section>
    </motion.main>
  );
}
