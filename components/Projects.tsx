"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import NexusMockup from "./NexusMockup";
import ResonexMockup from "./ResonexMockup";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Projects() {
  const nexusProject = PORTFOLIO_DATA.projects.find((p) => p.id === "nexus")!;
  const resonexProject = PORTFOLIO_DATA.projects.find((p) => p.id === "resonex")!;

  return (
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-16"
      >
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs text-indigo-400 font-semibold tracking-wider uppercase">
                {"// 03. Portfolio"}
              </span>
              <div className="h-[1px] w-12 bg-white/10" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Selected Projects
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-400 max-w-md">
            Things I&apos;ve built and shipped. Deep-dive into interactive architectures and production systems.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          <ProjectCard
            project={nexusProject}
            mockup={<NexusMockup />}
            index={0}
          />

          <ProjectCard
            project={resonexProject}
            mockup={<ResonexMockup />}
            index={1}
          />
        </div>
      </motion.div>
    </section>
  );
}
