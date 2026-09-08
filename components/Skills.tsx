"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Layers,
  Database,
  Wrench,
  Brain,
  Users,
  CheckCircle2,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categoryIcons: Record<string, React.ReactNode> = {
    Languages: <Code className="w-4 h-4 text-indigo-400" />,
    "Frameworks & Libraries": <Layers className="w-4 h-4 text-violet-400" />,
    "Databases, AI & APIs": <Database className="w-4 h-4 text-emerald-400" />,
    "Tools & Platforms": <Wrench className="w-4 h-4 text-amber-400" />,
    "Core Concepts": <Brain className="w-4 h-4 text-cyan-400" />,
    "Soft Skills": <Users className="w-4 h-4 text-rose-400" />,
  };

  const categories = PORTFOLIO_DATA.skills;

  const filteredCategories =
    activeFilter === "all"
      ? categories
      : categories.filter((cat) => cat.title === activeFilter);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
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
                {"// 02. Technical Arsenal"}
              </span>
              <div className="h-[1px] w-12 bg-white/10" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills &amp; Technologies
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Production-tested technologies, frameworks, and engineering foundations strictly practiced and deployed.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pb-2">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeFilter === "all"
                ? "bg-white text-zinc-900 shadow-md font-semibold"
                : "bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/5"
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveFilter(cat.title)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === cat.title
                  ? "bg-indigo-600 text-white shadow-md font-semibold"
                  : "bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/5"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-[#0c0d12]/90 border border-white/10 hover:border-white/20 transition-all duration-200 shadow-lg shadow-black/20 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:scale-110 group-hover:border-white/15 transition-all">
                      {categoryIcons[category.title] || (
                        <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                      )}
                    </div>
                    <h3 className="font-semibold text-base text-zinc-100">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {category.skills.length} items
                  </span>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/[0.03] hover:bg-indigo-500/10 text-zinc-300 hover:text-indigo-300 border border-white/[0.06] hover:border-indigo-500/30 transition-all duration-150 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Verified in production &amp; projects</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
