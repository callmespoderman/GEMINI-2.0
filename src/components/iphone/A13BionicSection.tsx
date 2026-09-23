import React, { useState } from 'react';
import { Cpu, Zap, Activity, Brain, Shield } from 'lucide-react';

export const A13BionicSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cpu' | 'gpu' | 'neural'>('neural');

  return (
    <section id="chip" className="py-24 bg-[#08090C] text-white border-t border-neutral-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#86868B] mb-2">
            A13 Bionic
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-[#F5F5F7]">
            A chip that’s so advanced, even we are trying to catch up to it.
          </h2>
          <p className="mt-4 text-base text-[#86868B] leading-relaxed">
            Custom‑built with a focus on machine learning across the entire silicon die — enabling
            experiences that simply don’t exist on any other smartphone. In fact, it’s so fast, so
            powerful, and so intelligent, it’s years ahead of any other chip.
          </p>
        </div>

        {/* Silicon Die Visualizer & Interactive Core Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Die Visualization Graphic */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-[280px] sm:w-[340px] h-[280px] sm:h-[340px] rounded-3xl bg-gradient-to-br from-[#1A1E29] to-[#0A0D14] border-2 border-neutral-700 p-6 flex flex-col items-center justify-center shadow-2xl overflow-hidden group">
              {/* Circuit Grid Pattern */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px]" />

              {/* Silicon Core Center Label */}
              <div className="relative z-10 text-center p-6 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-md">
                <span className="text-[11px] font-mono text-[#2997FF] tracking-widest uppercase">
                  APPLE SILICON
                </span>
                <div className="text-4xl font-extrabold font-display tracking-tight text-white mt-1">
                  A13
                </div>
                <div className="text-xs font-mono text-neutral-400 mt-0.5">BIONIC</div>
                <div className="mt-3 text-[10px] font-mono text-neutral-500">
                  8.5 BILLION TRANSISTORS · 7NM EUV
                </div>
              </div>

              {/* Animated Light Trails */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Interactive Core Selectors */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 p-1 rounded-xl bg-neutral-900 border border-neutral-800 text-xs">
              <button
                onClick={() => setActiveTab('neural')}
                className={`flex-1 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                  activeTab === 'neural'
                    ? 'bg-[#0071E3] text-white shadow'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Neural Engine
              </button>
              <button
                onClick={() => setActiveTab('cpu')}
                className={`flex-1 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                  activeTab === 'cpu'
                    ? 'bg-[#0071E3] text-white shadow'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                6-Core CPU
              </button>
              <button
                onClick={() => setActiveTab('gpu')}
                className={`flex-1 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                  activeTab === 'gpu'
                    ? 'bg-[#0071E3] text-white shadow'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                4-Core GPU
              </button>
            </div>

            {/* Content card for selected silicon block */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              {activeTab === 'neural' && (
                <div>
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-semibold uppercase mb-1">
                    <Brain className="w-4 h-4" />
                    <span>8-Core Neural Engine</span>
                  </div>
                  <h4 className="text-xl font-bold font-display text-white mt-1">
                    1 Trillion Operations Per Second
                  </h4>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    Drives the triple-camera system, Face ID, AR apps, and Deep Fusion computational
                    photography. Analyzes pixel by pixel across multiple exposures to optimize
                    texture and eliminate digital noise.
                  </p>
                  <div className="mt-4 pt-4 border-t border-neutral-800 grid grid-cols-2 gap-4 text-xs font-mono">
                    <div>
                      <span className="text-neutral-500 block text-[10px]">THROUGHPUT</span>
                      <strong className="text-white text-sm">1,000,000,000,000 ops/s</strong>
                    </div>
                    <div>
                      <span className="text-neutral-500 block text-[10px]">POWER SAVINGS</span>
                      <strong className="text-emerald-400 text-sm">15% Less Power</strong>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'cpu' && (
                <div>
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-mono font-semibold uppercase mb-1">
                    <Cpu className="w-4 h-4" />
                    <span>2 Performance + 4 Efficiency Cores</span>
                  </div>
                  <h4 className="text-xl font-bold font-display text-white mt-1">
                    Fastest CPU in a Smartphone
                  </h4>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    Two performance cores tackle complex computations up to 20% faster while using
                    30% less power. Four efficiency cores handle daily tasks using up to 40% less
                    energy.
                  </p>
                  <div className="mt-4 pt-4 border-t border-neutral-800 grid grid-cols-2 gap-4 text-xs font-mono">
                    <div>
                      <span className="text-neutral-500 block text-[10px]">PERFORMANCE CORES</span>
                      <strong className="text-white text-sm">20% Faster</strong>
                    </div>
                    <div>
                      <span className="text-neutral-500 block text-[10px]">EFFICIENCY CORES</span>
                      <strong className="text-emerald-400 text-sm">40% Less Power</strong>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'gpu' && (
                <div>
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-mono font-semibold uppercase mb-1">
                    <Zap className="w-4 h-4" />
                    <span>Apple-Designed 4-Core Graphics</span>
                  </div>
                  <h4 className="text-xl font-bold font-display text-white mt-1">
                    Console-Quality Gaming & AR
                  </h4>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    Up to 20% faster while drawing 15% less power. Designed to run the most demanding
                    Metal-accelerated 3D games and real-time 4K 60fps HDR video editing with zero thermal
                    throttling.
                  </p>
                  <div className="mt-4 pt-4 border-t border-neutral-800 grid grid-cols-2 gap-4 text-xs font-mono">
                    <div>
                      <span className="text-neutral-500 block text-[10px]">GRAPHICS SPEED</span>
                      <strong className="text-white text-sm">20% Faster</strong>
                    </div>
                    <div>
                      <span className="text-neutral-500 block text-[10px]">POWER EFFICIENCY</span>
                      <strong className="text-emerald-400 text-sm">15% Less Power</strong>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
