"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Education() {
  const edu = PORTFOLIO_DATA.education;

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-12"
      >
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs text-indigo-400 font-semibold tracking-wider uppercase">
                {"// 05. Academic Background"}
              </span>
              <div className="h-[1px] w-12 bg-white/10" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Education
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Formal foundations in computer science, software design principles, and algorithmic engineering.
          </p>
        </div>

        {/* Timeline Card */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/10">
          {/* Animated Glowing Node */}
          <div className="absolute -left-[9px] top-8 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#070709] shadow-lg shadow-indigo-500/50" />

          <motion.div
            whileHover={{ y: -4 }}
            className="p-8 sm:p-10 rounded-3xl bg-[#0c0d12]/90 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl shadow-black/30 space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-indigo-400" />
                  <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                    Undergraduate Degree
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {edu.degree}
                </h3>
                <p className="text-base text-zinc-300 font-medium">
                  {edu.institution}
                </p>
              </div>

              <div className="flex flex-col sm:items-end gap-2 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{PORTFOLIO_DATA.personal.location}</span>
                </div>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                <span>Relevant Core Coursework</span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {edu.coursework.map((course) => (
                  <span
                    key={course}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.03] text-zinc-200 border border-white/[0.07] hover:border-indigo-500/30 hover:bg-indigo-500/10 transition-colors"
                  >
                    <CheckCircle2 className="w-3 h-3 text-indigo-400" />
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
