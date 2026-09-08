"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Database, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      title: "Full-Stack Architecture",
      desc: "Building reactive, end-to-end web applications with Next.js App Router, TypeScript, and modern state machines.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      title: "AI Engineering",
      desc: "Integrating intelligent LLM inference, OpenAI Realtime streaming APIs, and voice synthesis pipelines.",
    },
    {
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      title: "Real-Time & Distributed Systems",
      desc: "Architecting collaborative multi-tenant systems using Convex reactive state, WebContainers, and Prisma.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-16"
      >
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-indigo-400 font-semibold tracking-wider uppercase">
            {"// 01. Overview"}
          </span>
          <div className="h-[1px] flex-1 bg-white/10" />
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Big Statement & Visual Accent */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Full-Stack Developer{" "}
              <span className="text-indigo-400 font-normal">×</span>{" "}
              AI Engineer
            </h2>

            <p className="text-sm font-mono text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              Focusing on high-performance web systems & AI integrations.
            </p>

            {/* Code snippet card previewing architectural ethos */}
            <div className="p-4 rounded-xl bg-[#0c0d12] border border-white/10 font-mono text-xs text-zinc-400 shadow-xl overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[11px] text-zinc-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <span className="ml-2 text-zinc-400">engineer.config.ts</span>
                </div>
                <Terminal className="w-3.5 h-3.5 text-zinc-500" />
              </div>
              <pre className="text-zinc-300 leading-relaxed font-mono">
                <code>
                  <span className="text-purple-400">const</span> engineer = {"{\n"}
                  {"  "}name: <span className="text-emerald-300">&quot;Shashank Kashyap&quot;</span>,{"\n"}
                  {"  "}role: <span className="text-emerald-300">&quot;Full-Stack &amp; AI&quot;</span>,{"\n"}
                  {"  "}education: <span className="text-indigo-300">&quot;B.Tech CSE (AI/ML)&quot;</span>,{"\n"}
                  {"  "}specialty: [<span className="text-emerald-300">&quot;Next.js&quot;</span>, <span className="text-emerald-300">&quot;OpenAI&quot;</span>, <span className="text-emerald-300">&quot;Convex&quot;</span>]{"\n"}
                  {"};"}
                </code>
              </pre>
            </div>
          </div>

          {/* Right Column: Professional Summary & Focus Cards */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                {PORTFOLIO_DATA.personal.aboutBio}
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Passionate about bridging the boundary between cloud infrastructure, browser capabilities, and generative artificial intelligence. Dedicated to writing well-typed, maintainable codebases with comprehensive error observability and modern developer experience.
              </p>
            </div>

            {/* Three Micro Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-white/10 transition-all duration-200 space-y-2 group"
                >
                  <div className="p-2 rounded-lg bg-white/5 w-fit group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-sm text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
