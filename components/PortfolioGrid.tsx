"use client";

import { motion } from "framer-motion";
import GridItem from "./GridItem";
import { projects } from "@/data/projects";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

export default function PortfolioGrid() {
  const featuredProjects = projects.slice(0, 8);

  return (
    <section id="work" className="">
      <div className="space-y-0">
        {featuredProjects.map((project, index) => (
          <div key={project.id}>
            <motion.div
              className="flex items-stretch min-h-[300px] md:min-h-[400px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <GridItem project={project} index={index} />
            </motion.div>
            {index < featuredProjects.length - 1 && (
              <div className="h-[2px] bg-white"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
