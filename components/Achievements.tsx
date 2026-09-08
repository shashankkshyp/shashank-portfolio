"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Users } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
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
                {"// 06. Recognition"}
              </span>
              <div className="h-[1px] w-12 bg-white/10" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Honors &amp; Hackathons
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Competitive rapid prototyping, team leadership, and algorithmic problem-solving under strict constraints.
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-[#0c0d12]/90 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl shadow-black/30 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle accent glow in card corner */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/15 transition-all pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                    {idx === 0 ? (
                      <Trophy className="w-6 h-6 text-amber-400" />
                    ) : (
                      <Award className="w-6 h-6 text-indigo-400" />
                    )}
                  </div>
                  {item.badge && (
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mt-1">
                    <span>{item.organization}</span>
                    {item.year && <span>• {item.year}</span>}
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed pt-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-zinc-500" />
                  Team Collaboration &amp; Rapid Prototyping
                </span>
                <span className="text-emerald-400 text-[11px] font-semibold">Verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
