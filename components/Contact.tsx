"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Send,
  Copy,
  Check,
  Sparkles,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative rounded-3xl bg-gradient-to-b from-[#0e0f16] to-[#08080c] border border-white/10 p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl"
      >
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-indigo-400 font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open for Opportunities</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Let&apos;s build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400">
              intelligent
            </span>
            .
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Interested in working together, discussing an idea, or exploring opportunities?
          </p>

          {/* Location & Status */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>{PORTFOLIO_DATA.personal.location}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Fast response time</span>
            </div>
          </div>

          {/* CTAs: Mailto Button & Copy Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-zinc-900 bg-white hover:bg-zinc-100 rounded-2xl shadow-xl shadow-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send className="w-4 h-4 text-indigo-600" />
              <span>Get in Touch</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-zinc-200 bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300 font-mono text-xs">
                    Copied: {PORTFOLIO_DATA.personal.email}
                  </span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span className="font-mono text-xs">
                    {PORTFOLIO_DATA.personal.email}
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
