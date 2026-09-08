"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles, Terminal } from "lucide-react";
import { GithubIcon } from "./Icons";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern">
      {/* Radial soft background wash */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#070709]/80 to-[#070709] pointer-events-none" />

      {/* Decorative floating blur shapes */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-indigo-500/10 to-violet-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Status Pill / Eyebrow */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono tracking-wider uppercase font-semibold text-zinc-300">
                {PORTFOLIO_DATA.personal.eyebrow}
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              intelligent software
            </span>{" "}
            for the web.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
          >
            {PORTFOLIO_DATA.personal.subheading}
          </motion.p>

          {/* Primary CTAs & Secondary Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-white/[0.1] hover:bg-white/[0.15] border border-white/20 hover:border-white/30 rounded-xl shadow-lg shadow-black/30 backdrop-blur-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4 text-indigo-400 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-zinc-900 bg-white hover:bg-zinc-100 rounded-xl shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Let&apos;s Connect</span>
              <Sparkles className="w-4 h-4 text-indigo-600" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-zinc-400 hover:text-zinc-200 bg-transparent hover:bg-white/[0.04] border border-white/[0.08] hover:border-white/15 rounded-xl transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </motion.div>

          {/* Code/Terminal aesthetic micro-badge */}
          <motion.div
            variants={itemVariants}
            className="mt-14 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0d0e13] border border-white/[0.06] text-xs font-mono text-zinc-400"
          >
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            <span>Specialization: Full-Stack Architecture &bull; Next.js &bull; AI Engineering</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
