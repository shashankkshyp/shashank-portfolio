"use client";

import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#060709] py-12 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left info */}
        <div className="text-center md:text-left space-y-1.5">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="w-5 h-5 rounded bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center font-mono font-bold text-[10px] text-white">
              SK
            </div>
            <span className="font-bold text-white tracking-tight text-sm">
              {PORTFOLIO_DATA.personal.name}
            </span>
          </div>
          <p className="text-xs text-zinc-400 font-mono">
            Computer Science Undergraduate &bull; Full-Stack Developer &bull; AI Engineer
          </p>
        </div>

        {/* Center / Right Links */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
        <p>&copy; 2026 Shashank Kashyap. All rights reserved.</p>
        <p className="font-mono text-[11px] text-zinc-400">
          Designed with precision &bull; Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
