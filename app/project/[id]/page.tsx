"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { useParams } from "next/navigation";

export default function ProjectPage() {
  const params = useParams();
  const projectId = parseInt(params.id as string);
  const project = projects.find((p) => p.id === projectId);
  const currentIndex = projects.findIndex((p) => p.id === projectId);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-ink">Project not found</p>
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-canvas"
    >
      {/* Hero Section with Main Image */}
      <section className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden">
        <Image
          src={project.src}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-ink/20" />
      </section>

      {/* Project Info */}
      <section className="px-6 md:px-10 py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <motion.h1
              className="text-[32px] md:text-[48px] font-display font-semibold text-ink mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {project.title}
            </motion.h1>

            <motion.p
              className="text-[15px] md:text-[16px] text-ink/70 leading-relaxed font-light mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {project.description}
            </motion.p>
          </div>

          <motion.div
            className="md:col-span-1 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted mb-2">
                Category
              </p>
              <p className="text-[14px] text-ink font-light">{project.category}</p>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted mb-2">
                Year
              </p>
              <p className="text-[14px] text-ink font-light">{project.year}</p>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted mb-2">
                Tags
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] tracking-wide text-ink/50 font-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gallery */}
        {project.images && project.images.length > 0 && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {project.images.map((image, idx) => (
              <div key={idx} className="relative aspect-square overflow-hidden">
                <Image
                  src={image}
                  alt={`${project.title} ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </motion.div>
        )}

        {/* Team */}
        {project.team && project.team.length > 0 && (
          <motion.div
            className="border-t border-ink/8 pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted mb-8">
              Team
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.team.map((member, idx) => (
                <div key={idx}>
                  <p className="text-[14px] font-light text-ink mb-1">
                    {member.name}
                  </p>
                  <p className="text-[12px] text-ink/50 font-light">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </section>

      {/* Navigation */}
      <section className="px-6 md:px-10 py-16 border-t border-ink/8">
        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Link href={`/project/${prevProject.id}`}>
            <motion.div
              className="cursor-pointer"
              whileHover={{ x: -4 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted mb-2">
                Previous
              </p>
              <p className="text-[16px] font-display font-semibold text-ink">
                {prevProject.title}
              </p>
            </motion.div>
          </Link>

          <Link href={`/project/${nextProject.id}`}>
            <motion.div
              className="cursor-pointer text-right"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted mb-2">
                Next
              </p>
              <p className="text-[16px] font-display font-semibold text-ink">
                {nextProject.title}
              </p>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Back to Home */}
      <section className="px-6 md:px-10 py-8 text-center border-t border-ink/8">
        <Link href="/">
          <motion.a
            className="text-[12px] tracking-[0.18em] uppercase text-ink/60 hover:text-ink transition-colors duration-200 font-light inline-block"
            whileHover={{ opacity: 0.7 }}
          >
            ← Back to Home
          </motion.a>
        </Link>
      </section>
    </motion.main>
  );
}
