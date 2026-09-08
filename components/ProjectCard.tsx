"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import { GithubIcon } from "./Icons";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  mockup: React.ReactNode;
  index: number;
}

export default function ProjectCard({ project, mockup, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="relative rounded-3xl bg-[#0b0c11] border border-white/10 hover:border-white/20 transition-all duration-300 shadow-2xl shadow-black/40 overflow-hidden group p-6 sm:p-8 lg:p-10"
    >
      {/* Dynamic Ambient Gradient on hover */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{ background: project.accentColor }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Project Information */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-indigo-400 font-semibold">
                Project 0{index + 1}
              </span>
              <span className="text-xs font-mono text-zinc-500">•</span>
              <span className="text-xs font-mono text-zinc-400 font-medium">
                {project.tagline}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white group-hover:text-white transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            {project.description}
          </p>

          {/* Features List */}
          <div className="space-y-2 pt-1">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              Key Engineering Capabilities:
            </h4>
            <ul className="grid grid-cols-1 gap-2 text-xs text-zinc-300">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 hover:border-white/25 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] group/btn"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source Repository</span>
              <ArrowUpRight className="w-3 h-3 opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>

            <div className="inline-flex items-center gap-1.5 px-3 py-2 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Interactive UI Preview Below</span>
            </div>
          </div>
        </div>

        {/* Project Interactive Visual / Product Mockup */}
        <div className="lg:col-span-7 transition-transform duration-500 group-hover:scale-[1.01]">
          {mockup}
        </div>
      </div>
    </motion.article>
  );
}
