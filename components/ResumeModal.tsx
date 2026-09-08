"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  FileText,
  Mail,
  MapPin,
  ExternalLink,
  Printer,
  Sparkles,
  GraduationCap,
  Award,
  Layers,
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { PORTFOLIO_DATA } from "@/lib/data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0c0d12] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-title"
          >
            {/* Header / Actions */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-400" />
                <span id="resume-title" className="font-medium text-sm text-zinc-200">
                  Curriculum Vitae — {PORTFOLIO_DATA.personal.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  Print / PDF
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Content Body */}
            <div className="overflow-y-auto p-6 md:p-10 space-y-8 text-zinc-300 print:text-black print:bg-white text-sm leading-relaxed">
              {/* Profile Header */}
              <div className="border-b border-white/10 pb-6">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white print:text-black">
                  {PORTFOLIO_DATA.personal.name}
                </h1>
                <p className="text-indigo-400 font-medium mt-1 text-sm tracking-wide uppercase">
                  {PORTFOLIO_DATA.personal.title}
                </p>

                <div className="flex flex-wrap gap-4 mt-3 text-xs text-zinc-400">
                  <div className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{PORTFOLIO_DATA.personal.email}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{PORTFOLIO_DATA.personal.location}</span>
                  </div>
                  <a
                    href={PORTFOLIO_DATA.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-indigo-400 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{PORTFOLIO_DATA.personal.githubUsername}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h2 className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-2">
                  Professional Summary
                </h2>
                <p className="text-zinc-300">
                  {PORTFOLIO_DATA.personal.aboutBio}
                </p>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="w-4 h-4 text-indigo-400" />
                  <h2 className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
                    Education
                  </h2>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-medium">
                    <span className="text-white font-semibold">
                      {PORTFOLIO_DATA.education.degree}
                    </span>
                    <span className="text-xs text-zinc-400">
                      {PORTFOLIO_DATA.education.period}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-xs">
                    {PORTFOLIO_DATA.education.institution}
                  </p>
                  <div className="pt-2 text-xs">
                    <span className="text-zinc-400">Coursework: </span>
                    <span className="text-zinc-300">
                      {PORTFOLIO_DATA.education.coursework.join(", ")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Featured Projects & Engineering Experience */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  <h2 className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
                    Selected Technical Projects
                  </h2>
                </div>
                <div className="space-y-4">
                  {PORTFOLIO_DATA.projects.map((proj) => (
                    <div
                      key={proj.id}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2.5"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <span className="font-semibold text-white flex items-center gap-2">
                          {proj.title}
                          <span className="text-xs text-indigo-400 font-normal">
                            — {proj.tagline}
                          </span>
                        </span>
                        <span className="text-xs text-zinc-400 font-mono">
                          {proj.techStack.slice(0, 4).join(" • ")}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-300">{proj.description}</p>
                      <ul className="list-disc list-inside space-y-1 text-xs text-zinc-400">
                        {proj.features.map((feat, idx) => (
                          <li key={idx}>{feat}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <h2 className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
                    Technical Skills
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {PORTFOLIO_DATA.skills.map((category, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-white/[0.02] border border-white/5"
                    >
                      <span className="font-medium text-zinc-300 block mb-1">
                        {category.title}
                      </span>
                      <span className="text-zinc-400">
                        {category.skills.join(", ")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-indigo-400" />
                  <h2 className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
                    Honors &amp; Hackathon Achievements
                  </h2>
                </div>
                <div className="space-y-3">
                  {PORTFOLIO_DATA.achievements.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-white/[0.02] border border-white/5 space-y-1"
                    >
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium text-white">
                          {item.title}
                        </span>
                        {item.badge && (
                          <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-[10px]">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-400">{item.organization}</p>
                      <p className="text-xs text-zinc-300 pt-1">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
