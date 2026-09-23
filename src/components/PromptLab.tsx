import React, { useState } from 'react';
import { PROMPT_SCENARIOS } from '../data/eventData';
import { Sparkles, Play, Copy, Check, Terminal, Sliders, Cpu } from 'lucide-react';

export const PromptLab: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState(PROMPT_SCENARIOS[0].id);
  const [temperature, setTemperature] = useState(0.2);
  const [selectedModel, setSelectedModel] = useState<'gemini-2.5-flash' | 'gemini-2.5-pro'>('gemini-2.5-flash');
  const [customPrompt, setCustomPrompt] = useState(PROMPT_SCENARIOS[0].userPrompt);
  const [activeCodeTab, setActiveCodeTab] = useState<'output' | 'python' | 'typescript'>('output');
  const [isExecuting, setIsExecuting] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);

  const activeScenario = PROMPT_SCENARIOS.find((s) => s.id === activeScenarioId) || PROMPT_SCENARIOS[0];

  const handleScenarioChange = (id: string) => {
    const scenario = PROMPT_SCENARIOS.find((s) => s.id === id);
    if (scenario) {
      setActiveScenarioId(id);
      setCustomPrompt(scenario.userPrompt);
      setActiveCodeTab('output');
    }
  };

  const handleExecute = () => {
    setIsExecuting(true);
    setTimeout(() => {
      setIsExecuting(false);
    }, 600);
  };

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section id="prompt-lab" className="py-20 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Technical Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight [text-wrap:balance]">
            Experience Gemini 2.5 Workflows Before You Arrive
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Test multimodal system prompts, strict JSON schema output contracts, and function calling tools. These exact paradigms will be coded during Ankita Shaw's 12:00 PM workshop.
          </p>
        </div>

        {/* Interactive Scenario Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {PROMPT_SCENARIOS.map((scenario) => {
            const isSelected = scenario.id === activeScenarioId;
            return (
              <button
                key={scenario.id}
                onClick={() => handleScenarioChange(scenario.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>{scenario.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Sandbox Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Prompt Configuration & Input */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-[#0A0E15] border border-slate-800 flex flex-col justify-between">
            <div>
              {/* Controls Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5 text-xs">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value as any)}
                    className="bg-slate-900 text-white text-xs rounded border border-slate-700 px-2 py-1 outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="gemini-2.5-flash">gemini-2.5-flash (Low Latency)</option>
                    <option value="gemini-2.5-pro">gemini-2.5-pro (Deep Reasoning)</option>
                  </select>
                </div>

                <div className="flex items-center gap-2 text-slate-400">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Temp:</span>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={temperature}
                    onChange={(e) => setTemperature(parseFloat(e.target.value))}
                    className="w-20 accent-blue-500 cursor-pointer"
                  />
                  <span className="font-mono tabular-nums text-white">{temperature.toFixed(1)}</span>
                </div>
              </div>

              {/* System Instruction */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-slate-400 mb-1">
                  System Instruction (Grounding Context)
                </label>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono leading-relaxed">
                  {activeScenario.systemInstruction}
                </div>
              </div>

              {/* User Prompt Input */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-slate-400 mb-1">
                  User Prompt
                </label>
                <textarea
                  rows={4}
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white font-mono leading-relaxed focus:border-blue-500 outline-none resize-none"
                  placeholder="Enter or modify prompt..."
                />
              </div>
            </div>

            {/* Execute Button */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Simulated response using TIU Masterclass test harness
              </span>
              <button
                onClick={handleExecute}
                disabled={isExecuting}
                className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Play className={`w-3.5 h-3.5 fill-current ${isExecuting ? 'animate-spin' : ''}`} />
                <span>{isExecuting ? 'Generating...' : 'Run Prompt'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Execution Output & Code Snippets */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-[#0A0E15] border border-slate-800 flex flex-col justify-between">
            <div>
              {/* Output Tabs & Copy button */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-2 text-xs">
                  <button
                    onClick={() => setActiveCodeTab('output')}
                    className={`px-3 py-1 rounded font-medium transition-colors cursor-pointer ${
                      activeCodeTab === 'output'
                        ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Model Response
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('python')}
                    className={`px-3 py-1 rounded font-medium transition-colors cursor-pointer ${
                      activeCodeTab === 'python'
                        ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Python (@google/genai)
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('typescript')}
                    className={`px-3 py-1 rounded font-medium transition-colors cursor-pointer ${
                      activeCodeTab === 'typescript'
                        ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    TypeScript SDK
                  </button>
                </div>

                <button
                  onClick={() => {
                    const textToCopy =
                      activeCodeTab === 'output'
                        ? activeScenario.mockResponse
                        : activeCodeTab === 'python'
                        ? activeScenario.pythonSnippet
                        : activeScenario.jsSnippet;
                    handleCopyCode(textToCopy);
                  }}
                  className="px-2.5 py-1 text-[11px] font-medium text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded flex items-center gap-1.5 cursor-pointer"
                >
                  {hasCopied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="relative min-h-[260px] max-h-[360px] overflow-y-auto rounded-lg bg-slate-950 p-4 border border-slate-800/80 font-mono text-xs leading-relaxed text-slate-200">
                {isExecuting ? (
                  <div className="h-full flex items-center justify-center py-16 text-slate-400 gap-2">
                    <Sparkles className="w-4 h-4 text-blue-400 animate-spin" />
                    <span>Inference stream settling...</span>
                  </div>
                ) : activeCodeTab === 'output' ? (
                  <pre className="whitespace-pre-wrap font-mono text-xs text-slate-200">
                    {activeScenario.mockResponse}
                  </pre>
                ) : activeCodeTab === 'python' ? (
                  <pre className="whitespace-pre-wrap font-mono text-xs text-emerald-300">
                    {activeScenario.pythonSnippet}
                  </pre>
                ) : (
                  <pre className="whitespace-pre-wrap font-mono text-xs text-cyan-300">
                    {activeScenario.jsSnippet}
                  </pre>
                )}
              </div>
            </div>

            {/* Telemetry Footer */}
            <div className="pt-4 border-t border-slate-800/80 mt-4 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-4">
                <span>
                  Latency: <strong className="text-emerald-400 font-mono">{activeScenario.latency}</strong>
                </span>
                <span>
                  Tokens: <strong className="text-slate-200 font-mono">{activeScenario.tokens.total}</strong>
                </span>
              </div>
              <span className="text-slate-500 font-mono">SDK: @google/genai 2.4.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
