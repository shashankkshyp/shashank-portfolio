"use client";

import { useState } from "react";
import {
  FileCode2,
  FolderTree,
  Play,
  Sparkles,
  Terminal as TerminalIcon,
  GitBranch,
  RefreshCw,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function NexusMockup() {
  const [activeTab, setActiveTab] = useState<"editor" | "schema" | "ai">("editor");
  const [promptInput, setPromptInput] = useState("");
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const handleAiPrompt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promptInput.trim()) return;
    setIsSimulating(true);
    setTimeout(() => {
      setAiResponse(
        `// Nexus AI generated code\nexport async function runWebContainerSandbox() {\n  const instance = await WebContainer.boot();\n  await instance.mount(projectFiles);\n  return instance.spawn('npm', ['run', 'dev']);\n}`
      );
      setIsSimulating(false);
      setPromptInput("");
    }, 600);
  };

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
            Nexus Cloud IDE — v1.4.0
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[11px] text-zinc-400">
          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-white/5 border border-white/5">
            <GitBranch className="w-3 h-3 text-indigo-400" />
            <span>main</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>WebContainer Ready</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-2.5 py-1 rounded bg-indigo-600/30 hover:bg-indigo-600/40 text-indigo-300 border border-indigo-500/30 text-[11px]">
            <Play className="w-3 h-3" />
            <span>Run</span>
          </button>
        </div>
      </div>

      {/* Main IDE Body */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[360px]">
        {/* Left Sidebar: File Tree */}
        <div className="hidden md:block md:col-span-3 bg-[#0a0b12] border-r border-white/[0.06] p-3 space-y-3">
          <div className="flex items-center justify-between text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">
            <span className="flex items-center gap-1.5">
              <FolderTree className="w-3.5 h-3.5 text-zinc-400" />
              Explorer
            </span>
          </div>

          <div className="space-y-1 text-zinc-400 text-[11px]">
            <div className="flex items-center gap-1.5 text-zinc-300 font-semibold py-1">
              <span>▾ src</span>
            </div>
            <button
              onClick={() => setActiveTab("editor")}
              className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-left transition-colors ${
                activeTab === "editor"
                  ? "bg-white/10 text-white"
                  : "hover:bg-white/5 text-zinc-400"
              }`}
            >
              <FileCode2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Editor.tsx</span>
            </button>

            <button
              onClick={() => setActiveTab("schema")}
              className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-left transition-colors ${
                activeTab === "schema"
                  ? "bg-white/10 text-white"
                  : "hover:bg-white/5 text-zinc-400"
              }`}
            >
              <FileCode2 className="w-3.5 h-3.5 text-amber-400" />
              <span>convex.schema.ts</span>
            </button>

            <button
              onClick={() => setActiveTab("ai")}
              className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-left transition-colors ${
                activeTab === "ai"
                  ? "bg-white/10 text-white"
                  : "hover:bg-white/5 text-zinc-400"
              }`}
            >
              <FileCode2 className="w-3.5 h-3.5 text-purple-400" />
              <span>ai-copilot.ts</span>
            </button>

            <div className="pt-2 text-zinc-500 text-[10px] space-y-1">
              <div className="px-2 py-0.5">▸ components/</div>
              <div className="px-2 py-0.5">▸ convex/</div>
              <div className="px-2 py-0.5">⚙ package.json</div>
            </div>
          </div>
        </div>

        {/* Center: Editor Tabs & Code Canvas */}
        <div className="md:col-span-6 bg-[#07080d] flex flex-col justify-between">
          <div>
            {/* Tab Bar */}
            <div className="flex items-center bg-[#0a0b12] border-b border-white/[0.06] overflow-x-auto">
              <button
                onClick={() => setActiveTab("editor")}
                className={`flex items-center gap-2 px-3 py-2 text-[11px] border-r border-white/[0.06] ${
                  activeTab === "editor"
                    ? "bg-[#07080d] text-white border-t-2 border-t-indigo-500"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <FileCode2 className="w-3 h-3 text-indigo-400" />
                <span>Editor.tsx</span>
              </button>
              <button
                onClick={() => setActiveTab("schema")}
                className={`flex items-center gap-2 px-3 py-2 text-[11px] border-r border-white/[0.06] ${
                  activeTab === "schema"
                    ? "bg-[#07080d] text-white border-t-2 border-t-amber-500"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <FileCode2 className="w-3 h-3 text-amber-400" />
                <span>convex.schema.ts</span>
              </button>
              <button
                onClick={() => setActiveTab("ai")}
                className={`flex items-center gap-2 px-3 py-2 text-[11px] border-r border-white/[0.06] ${
                  activeTab === "ai"
                    ? "bg-[#07080d] text-white border-t-2 border-t-purple-500"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <Sparkles className="w-3 h-3 text-purple-400" />
                <span>ai-copilot.ts</span>
              </button>
            </div>

            {/* Code Content */}
            <div className="p-4 overflow-x-auto text-[11px] leading-relaxed">
              {activeTab === "editor" && (
                <pre className="text-zinc-300">
                  <code>
                    <span className="text-zinc-600 select-none">01 </span>
                    <span className="text-purple-400">import</span> {"{ WebContainer }"} <span className="text-purple-400">from</span> <span className="text-emerald-300">&apos;@webcontainer/api&apos;</span>;{"\n"}
                    <span className="text-zinc-600 select-none">02 </span>
                    <span className="text-purple-400">import</span> {"{ useMutation, useQuery }"} <span className="text-purple-400">from</span> <span className="text-emerald-300">&apos;convex/react&apos;</span>;{"\n"}
                    <span className="text-zinc-600 select-none">03 </span>
                    {"\n"}
                    <span className="text-zinc-600 select-none">04 </span>
                    <span className="text-indigo-400">{"// Initialize client-side Node environment"}</span>{"\n"}
                    <span className="text-zinc-600 select-none">05 </span>
                    <span className="text-purple-400">export async function</span> <span className="text-amber-300">bootSandbox</span>() {"{\n"}
                    <span className="text-zinc-600 select-none">06 </span>
                    {"  "}
                    <span className="text-purple-400">const</span> container = <span className="text-purple-400">await</span> WebContainer.<span className="text-blue-300">boot</span>();{"\n"}
                    <span className="text-zinc-600 select-none">07 </span>
                    {"  "}
                    <span className="text-purple-400">await</span> container.<span className="text-blue-300">mount</span>(fileTreeSnapshot);{"\n"}
                    <span className="text-zinc-600 select-none">08 </span>
                    {"  "}
                    <span className="text-purple-400">return</span> container;{"\n"}
                    <span className="text-zinc-600 select-none">09 </span>
                    {"}"}{"\n"}
                    <span className="text-zinc-600 select-none">10 </span>
                    <span className="text-indigo-400">{"// Real-time collaborative sync"}</span>{"\n"}
                    <span className="text-zinc-600 select-none">11 </span>
                    <span className="text-purple-400">export const</span> syncDocument = <span className="text-blue-300">useMutation</span>(api.docs.update);
                  </code>
                </pre>
              )}

              {activeTab === "schema" && (
                <pre className="text-zinc-300">
                  <code>
                    <span className="text-zinc-600 select-none">01 </span>
                    <span className="text-purple-400">import</span> {"{ defineSchema, defineTable }"} <span className="text-purple-400">from</span> <span className="text-emerald-300">&apos;convex/server&apos;</span>;{"\n"}
                    <span className="text-zinc-600 select-none">02 </span>
                    <span className="text-purple-400">import</span> {"{ v }"} <span className="text-purple-400">from</span> <span className="text-emerald-300">&apos;convex/values&apos;</span>;{"\n"}
                    <span className="text-zinc-600 select-none">03 </span>
                    {"\n"}
                    <span className="text-zinc-600 select-none">04 </span>
                    <span className="text-purple-400">export default</span> <span className="text-blue-300">defineSchema</span>({"{\n"}
                    <span className="text-zinc-600 select-none">05 </span>
                    {"  "}projects: <span className="text-blue-300">defineTable</span>({"{\n"}
                    <span className="text-zinc-600 select-none">06 </span>
                    {"    "}name: v.<span className="text-blue-300">string</span>(),{"\n"}
                    <span className="text-zinc-600 select-none">07 </span>
                    {"    "}userId: v.<span className="text-blue-300">string</span>(),{"\n"}
                    <span className="text-zinc-600 select-none">08 </span>
                    {"    "}files: v.<span className="text-blue-300">array</span>(v.<span className="text-blue-300">any</span>()),{"\n"}
                    <span className="text-zinc-600 select-none">09 </span>
                    {"    "}isCollaborative: v.<span className="text-blue-300">boolean</span>(),{"\n"}
                    <span className="text-zinc-600 select-none">10 </span>
                    {"  "}{"}"}).<span className="text-blue-300">index</span>(<span className="text-emerald-300">&quot;by_user&quot;</span>, [<span className="text-emerald-300">&quot;userId&quot;</span>]),{"\n"}
                    <span className="text-zinc-600 select-none">11 </span>
                    {"}"});
                  </code>
                </pre>
              )}

              {activeTab === "ai" && (
                <pre className="text-zinc-300">
                  <code>
                    <span className="text-zinc-600 select-none">01 </span>
                    <span className="text-purple-400">import</span> {"{ OpenAI }"} <span className="text-purple-400">from</span> <span className="text-emerald-300">&apos;openai&apos;</span>;{"\n"}
                    <span className="text-zinc-600 select-none">02 </span>
                    {"\n"}
                    <span className="text-zinc-600 select-none">03 </span>
                    <span className="text-purple-400">export async function</span> <span className="text-amber-300">generateCodeDiff</span>(prompt: <span className="text-cyan-300">string</span>) {"{\n"}
                    <span className="text-zinc-600 select-none">04 </span>
                    {"  "}
                    <span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> openai.chat.completions.<span className="text-blue-300">create</span>({"{\n"}
                    <span className="text-zinc-600 select-none">05 </span>
                    {"    "}model: <span className="text-emerald-300">&apos;gpt-4o&apos;</span>,{"\n"}
                    <span className="text-zinc-600 select-none">06 </span>
                    {"    "}messages: [{`{ role: 'system', content: 'You are Nexus IDE Copilot.' }`}],{"\n"}
                    <span className="text-zinc-600 select-none">07 </span>
                    {"    "}stream: <span className="text-purple-400">true</span>,{"\n"}
                    <span className="text-zinc-600 select-none">08 </span>
                    {"  "}{"}"});{"\n"}
                    <span className="text-zinc-600 select-none">09 </span>
                    {"  "}
                    <span className="text-purple-400">return</span> response;{"\n"}
                    <span className="text-zinc-600 select-none">10 </span>
                    {"}"}
                  </code>
                </pre>
              )}
            </div>
          </div>

          {/* Bottom Simulated Terminal */}
          <div className="p-2.5 bg-[#0a0b12] border-t border-white/[0.06] text-[10px] text-zinc-400 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TerminalIcon className="w-3.5 h-3.5 text-zinc-500" />
              <span>nexus-ide: server running at http://localhost:3000</span>
            </div>
            <div className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3 h-3" />
              <span>0 errors</span>
            </div>
          </div>
        </div>

        {/* Right Pane: AI Assistant Dock */}
        <div className="md:col-span-3 bg-[#0a0c14] border-l border-white/[0.06] p-3 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
              <div className="flex items-center gap-1.5 text-indigo-400 font-semibold text-[11px]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Nexus Copilot</span>
              </div>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-indigo-500/20 text-indigo-300 font-mono">
                GPT-4o
              </span>
            </div>

            <div className="space-y-2 text-[10px]">
              <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-zinc-300">
                <span className="text-zinc-400 block text-[9px] uppercase font-mono">
                  Prompt
                </span>
                Add real-time WebContainer execution logic with error boundary.
              </div>

              <div className="p-2 rounded-lg bg-indigo-950/30 border border-indigo-500/20 text-indigo-200">
                <span className="text-indigo-400 block text-[9px] uppercase font-mono">
                  Suggested Action
                </span>
                Mounting virtual file system and spawning compiler subprocess.
              </div>

              {aiResponse && (
                <div className="p-2 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-emerald-300 text-[10px]">
                  <pre className="overflow-x-auto">{aiResponse}</pre>
                </div>
              )}
            </div>
          </div>

          {/* Interactive AI Prompt Form */}
          <form onSubmit={handleAiPrompt} className="mt-3 pt-2 border-t border-white/[0.06]">
            <div className="relative">
              <input
                type="text"
                placeholder="Ask Nexus AI..."
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                className="w-full pl-2.5 pr-7 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-indigo-500/50"
              />
              <button
                type="submit"
                disabled={isSimulating}
                className="absolute right-1 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-indigo-400 transition-colors"
              >
                {isSimulating ? (
                  <RefreshCw className="w-3 h-3 animate-spin text-indigo-400" />
                ) : (
                  <Send className="w-3 h-3" />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
