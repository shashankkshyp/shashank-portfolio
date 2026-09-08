"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Profiles() {
  const profiles = [
    {
      name: "GitHub",
      url: PORTFOLIO_DATA.personal.github,
      handle: `@${PORTFOLIO_DATA.personal.githubUsername}`,
      description:
        "Open-source contributions, modern Next.js experiments, WebContainer architectures, and AI prototype codebases.",
      icon: <GithubIcon className="w-8 h-8 text-white" />,
      accent: "from-zinc-800 to-zinc-900",
      borderGlow: "group-hover:border-white/30",
    },
    {
      name: "LinkedIn",
      url: PORTFOLIO_DATA.personal.linkedin,
      handle: PORTFOLIO_DATA.personal.linkedinDisplay,
      description:
        "Professional network, engineering collaborations, technical write-ups, and academic milestones in Computer Science.",
      icon: <LinkedinIcon className="w-8 h-8 text-[#0a66c2]" />,
      accent: "from-blue-950/40 to-indigo-950/40",
      borderGlow: "group-hover:border-blue-500/40",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-10"
      >
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-indigo-400 font-semibold tracking-wider uppercase">
            {"// 07. Online Presence"}
          </span>
          <div className="h-[1px] flex-1 bg-white/10" />
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Developer Profiles
          </h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-xl">
            Explore code repositories, open-source projects, and professional updates across official developer profiles.
          </p>
        </div>

        {/* Profiles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profiles.map((profile) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className={`p-8 rounded-3xl bg-[#0c0d12]/90 border border-white/10 ${profile.borderGlow} transition-all duration-300 shadow-xl shadow-black/30 flex flex-col justify-between group block relative overflow-hidden`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                    {profile.icon}
                  </div>
                  <div className="p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {profile.name}
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-indigo-400 mt-1">
                    {profile.handle}
                  </p>
                  <p className="text-sm text-zinc-300 mt-3 leading-relaxed">
                    {profile.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Direct Verified Profile</span>
                <span className="text-zinc-300 group-hover:text-white transition-colors">
                  View Profile &rarr;
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
