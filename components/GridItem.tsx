"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

const imageVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const overlayVariants = {
  rest: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const titleVariants = {
  rest: { opacity: 0, y: 10 },
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: 0.06, ease: [0.22, 1, 0.36, 1] },
  },
};

interface GridItemProps {
  project: Project;
  index: number;
}

export default function GridItem({ project, index }: GridItemProps) {
  return (
    <Link href={`/project/${project.id}`} className="block w-full h-full">
      <motion.article
        className="relative overflow-hidden w-full h-full cursor-pointer bg-ink/5 group"
        initial="rest"
        whileHover="hover"
        animate="rest"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 16 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              delay: (index % 8) * 0.07,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
      >
        <motion.div className="relative w-full h-full" variants={imageVariants}>
          <Image
            src={project.src}
            alt={project.title}
            fill
            className="object-cover"
            priority={index < 3}
            sizes="100vw"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-ink/40"
          variants={overlayVariants}
        />

        <motion.div
          className="absolute bottom-0 left-0 p-6 md:p-8 w-full"
          variants={titleVariants}
        >
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags?.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[9px] tracking-[0.15em] uppercase text-white/70 font-light bg-white/10 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
            <span className="text-[9px] tracking-[0.15em] uppercase text-white/70 font-light ml-auto">
              {project.year}
            </span>
          </div>
          <h3 className="text-[18px] md:text-[22px] font-semibold text-white leading-tight font-display">
            {project.title}
          </h3>
        </motion.div>
      </motion.article>
    </Link>
  );
}
