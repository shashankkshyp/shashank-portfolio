"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function PracticalExperience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
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
                {"// 04. Systems & Engineering"}
              </span>
              <div className="h-[1px] w-12 bg-white/10" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Practical Experience
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Hands-on software architecture and systems engineering demonstrated through building and deploying production-scale applications.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.practicalExperience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-[#0c0d12]/90 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl shadow-black/30 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
                  <div>
                    <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                      {exp.role}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {exp.project}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-zinc-300 w-fit">
                    Full-Stack &bull; AI
                  </span>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
                    Core Technical Focus: {exp.focus}
                  </h4>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  Production Ready Architecture
                </span>
                <span className="text-zinc-500">Self-Directed &bull; Shipped</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
