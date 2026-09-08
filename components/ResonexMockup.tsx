"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mic,
  Play,
  Pause,
  Volume2,
  Sparkles,
  History,
  Sliders,
  Cpu,
  Clock,
  Download,
} from "lucide-react";

export default function ResonexMockup() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedVoice, setSelectedVoice] = useState("nova");
  const [textInput, setTextInput] = useState(
    "Resonex: Real-time neural voice synthesis and low-latency speech generation engine."
  );
  const [isSynthesizing, setIsSynthesizing] = useState(false);

  const voices = [
    { id: "nova", name: "Nova Neural", tag: "Expressive", latency: "180ms" },
    { id: "echo", name: "Echo Studio", tag: "Warm / Deep", latency: "210ms" },
    { id: "shashank-clone", name: "Custom Voice Clone", tag: "Cloned v2", latency: "240ms" },
  ];

  const handleGenerate = () => {
    setIsSynthesizing(true);
    setIsPlaying(false);
    setTimeout(() => {
      setIsSynthesizing(false);
      setIsPlaying(true);
    }, 800);
  };

  // Waveform bars with pseudo-random heights
  const waveformHeights = [
    32, 48, 65, 80, 55, 30, 70, 95, 85, 45, 60, 78, 90, 100, 65, 40, 50, 75,
    90, 80, 60, 45, 70, 85, 95, 60, 40, 30, 55, 70, 85, 50, 35, 60, 75, 40,
  ];

  return (
    <div className="w-full rounded-2xl bg-[#090a0f] border border-white/10 shadow-2xl overflow-hidden font-mono text-xs select-none">
      {/* Chrome Topbar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e1017] border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
          </div>
          <span className="ml-3 text-[11px] text-zinc-400 font-medium">
            Resonex Voice Studio — Neural Audio Platform
          </span>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-zinc-400">
          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Cpu className="w-3 h-3 text-emerald-400" />
            <span>MODAL GPU Cluster</span>
          </div>
          <span className="hidden sm:inline-block text-[10px] text-zinc-500">
            Latency &lt; 200ms
          </span>
        </div>
      </div>

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[360px]">
        {/* Left Column: Voice Models & Controls */}
        <div className="md:col-span-4 bg-[#0a0b12] border-r border-white/[0.06] p-4 space-y-4">
          <div>
            <div className="flex items-center justify-between text-[11px] text-zinc-400 font-semibold mb-2">
              <span className="flex items-center gap-1.5">
                <Mic className="w-3.5 h-3.5 text-emerald-400" />
                Voice Models
              </span>
              <span className="text-[10px] text-zinc-500 font-mono">3 Available</span>
            </div>

            <div className="space-y-1.5">
              {voices.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVoice(v.id)}
                  className={`w-full p-2.5 rounded-xl border text-left transition-all ${
                    selectedVoice === v.id
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                      : "bg-white/[0.02] border-white/5 text-zinc-400 hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-center justify-between font-medium">
                    <span className="text-zinc-200">{v.name}</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-zinc-400">
                      {v.tag}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-zinc-500 mt-1">
                    <span>Inference latency:</span>
                    <span className="font-mono text-emerald-400">{v.latency}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Voice Tuning Sliders Mock */}
          <div className="pt-2 border-t border-white/[0.06] space-y-2 text-[10px] text-zinc-400">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Sliders className="w-3 h-3 text-zinc-500" />
                Stability / Pitch
              </span>
              <span className="text-zinc-300">0.85</span>
            </div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-[85%]" />
            </div>

            <div className="flex items-center justify-between pt-1">
              <span>Similarity Boost</span>
              <span className="text-zinc-300">0.92</span>
            </div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div className="bg-indigo-500 h-full w-[92%]" />
            </div>
          </div>
        </div>

        {/* Center / Right: Generation Area & Waveform */}
        <div className="md:col-span-8 bg-[#07080d] p-5 flex flex-col justify-between">
          {/* Prompt Generation Box */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-[11px] text-zinc-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                Text to Speech Script
              </label>
              <span className="text-[10px] text-zinc-500">
                {textInput.length} characters
              </span>
            </div>

            <div className="relative">
              <textarea
                rows={3}
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                className="w-full p-3 rounded-xl bg-white/[0.03] border border-white/10 text-zinc-200 text-xs font-sans placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 resize-none leading-relaxed"
                placeholder="Enter text to synthesize speech..."
              />

              <div className="flex items-center justify-end mt-2">
                <button
                  onClick={handleGenerate}
                  disabled={isSynthesizing}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isSynthesizing ? "Generating Audio..." : "Generate Voice"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Real-time Waveform Display */}
          <div className="my-4 p-4 rounded-xl bg-[#0b0d14] border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/30 transition-colors"
                  aria-label={isPlaying ? "Pause audio" : "Play audio"}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current" />
                  )}
                </button>
                <div>
                  <div className="text-zinc-200 font-semibold text-xs">
                    00:04.2 / 00:12.8
                  </div>
                  <div className="text-[10px] text-zinc-500">
                    48kHz • 24-bit Lossless Stream
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-zinc-400">
                <Volume2 className="w-4 h-4 text-zinc-400" />
                <button className="p-1.5 rounded hover:bg-white/5 text-zinc-400 hover:text-white transition-colors">
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Dynamic Waveform Bars */}
            <div className="flex items-center justify-between h-14 gap-1 px-1 overflow-hidden">
              {waveformHeights.map((h, i) => (
                <motion.div
                  key={i}
                  className="w-full bg-emerald-500/60 rounded-full"
                  animate={{
                    height: isPlaying
                      ? [`${Math.max(15, h * 0.4)}%`, `${h}%`, `${Math.max(20, h * 0.6)}%`]
                      : "20%",
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.6 + (i % 5) * 0.1,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Audio Generation History Drawer */}
          <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-zinc-500">
            <div className="flex items-center gap-1.5">
              <History className="w-3 h-3 text-zinc-400" />
              <span>Recent: voice_take_03.wav (1.4MB)</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-zinc-400" />
              <span>Just now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
