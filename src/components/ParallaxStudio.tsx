import React, { useState, useRef } from 'react';
import { Layers, Copy, Check, Sliders, Eye, Code2, Sparkles, X, Compass, Info } from 'lucide-react';

interface ParallaxStudioProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ParallaxStudio: React.FC<ParallaxStudioProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'css-3d' | 'scroll-timeline' | 'tips'>('preview');
  const [perspective, setPerspective] = useState(300);
  const [deepZ, setDeepZ] = useState(-300);
  const [midZ, setMidZ] = useState(-150);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // Scroll container ref for interactive preview
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  if (!isOpen) return null;

  // Calculate required scale to preserve natural size: scale = 1 + (-translateZ / perspective)
  const deepScale = Math.max(1, 1 + (-deepZ / perspective)).toFixed(2);
  const midScale = Math.max(1, 1 + (-midZ / perspective)).toFixed(2);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const maxScroll = el.scrollHeight - el.clientHeight;
    if (maxScroll > 0) {
      setScrollProgress(Math.min(100, Math.round((el.scrollTop / maxScroll) * 100)));
    }
  };

  const handleCopy = (code: string, type: string) => {
    navigator.clipboard.writeText(code);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const htmlCode = `<!-- HTML Structure for Multi-Speed CSS Parallax -->
<div class="parallax-container">
  <!-- Group 1: Hero Parallax Scene -->
  <section class="parallax-group">
    <!-- Deep Layer: Moves at ~50% scroll speed -->
    <div class="parallax-layer parallax-layer--deep">
      <div class="layer-content stars-bg"></div>
    </div>

    <!-- Mid Layer: Moves at ~67% scroll speed -->
    <div class="parallax-layer parallax-layer--mid">
      <div class="layer-content mountain-grid"></div>
    </div>

    <!-- Base Layer: Standard 100% scroll speed (Content & Text) -->
    <div class="parallax-layer parallax-layer--base">
      <div class="hero-content">
        <h1>Multi-Speed Parallax</h1>
        <p>Pure CSS 3D perspective effect with zero JavaScript lag.</p>
      </div>
    </div>
  </section>

  <!-- Group 2: Regular Content Section -->
  <section class="content-group">
    <div class="content-inner">
      <h2>Section Two</h2>
      <p>Content scrolls naturally over the preceding parallax landscape.</p>
    </div>
  </section>
</div>`;

  const css3dCode = `/* CSS: Pure 3D Perspective Parallax (Multi-Speed) */

/* 1. Setup the 3D scroll viewport */
.parallax-container {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  /* Perspective defines virtual camera distance */
  perspective: ${perspective}px;
  perspective-origin: 50% 50%;
  scroll-behavior: smooth;
}

/* 2. Preserve 3D transforms for children */
.parallax-group {
  position: relative;
  height: 100vh;
  transform-style: preserve-3d;
}

/* 3. Base layer positioning */
.parallax-layer {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 
 * 4. Multi-Speed Depth Layers
 * Speed Formula: Moving an element further away on the Z-axis (negative translateZ)
 * makes it appear smaller and scroll SLOWER.
 * Scale formula to maintain 100% visual screen fit:
 * scale = 1 + (-translateZ / perspective)
 */

/* Deep Background: translateZ(${deepZ}px) -> ~50% speed */
.parallax-layer--deep {
  transform: translateZ(${deepZ}px) scale(${deepScale});
  z-index: 1;
}

/* Midground: translateZ(${midZ}px) -> ~67% speed */
.parallax-layer--mid {
  transform: translateZ(${midZ}px) scale(${midScale});
  z-index: 2;
}

/* Foreground / Base: translateZ(0) -> 100% normal speed */
.parallax-layer--base {
  transform: translateZ(0);
  z-index: 3;
}

/* Regular content section covering previous group */
.content-group {
  position: relative;
  z-index: 10;
  min-height: 100vh;
  background-color: #0b0f17;
  padding: 4rem 2rem;
}`;

  const scrollTimelineCode = `/* Modern CSS Scroll-Driven Animations (Chrome 115+, Edge 115+) */

@keyframes parallax-deep {
  from {
    transform: translateY(0);
  }
  to {
    /* Moves upwards slower than the scroll */
    transform: translateY(180px);
  }
}

@keyframes parallax-mid {
  from {
    transform: translateY(0);
  }
  to {
    /* Moves at moderate offset */
    transform: translateY(90px);
  }
}

.parallax-layer--deep {
  animation: parallax-deep linear both;
  animation-timeline: scroll();
  will-change: transform;
}

.parallax-layer--mid {
  animation: parallax-mid linear both;
  animation-timeline: scroll();
  will-change: transform;
}

.parallax-layer--base {
  /* Scrolls at normal 1:1 speed */
  position: relative;
  z-index: 3;
}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl rounded-2xl bg-[#090D14] border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-[#0C1019]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white font-display flex items-center gap-2">
                <span>CSS Parallax Engineering Studio</span>
                <span className="text-[11px] font-semibold text-blue-400 px-2 py-0.5 rounded bg-blue-950/80 border border-blue-800/60 hidden sm:inline">
                  Pure CSS Multi-Speed
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Live interactive multi-layer parallax engine with step-by-step code and mathematical speed formulas.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close studio"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-800/80 bg-[#0A0E17] text-xs overflow-x-auto">
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-4 py-2 font-semibold border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'preview'
                ? 'border-blue-500 text-white'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5 text-blue-400" />
            <span>Interactive Simulator</span>
          </button>

          <button
            onClick={() => setActiveTab('css-3d')}
            className={`px-4 py-2 font-semibold border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'css-3d'
                ? 'border-blue-500 text-white'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>HTML & 3D CSS Snippet</span>
          </button>

          <button
            onClick={() => setActiveTab('scroll-timeline')}
            className={`px-4 py-2 font-semibold border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'scroll-timeline'
                ? 'border-blue-500 text-white'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Modern Scroll-Timeline</span>
          </button>

          <button
            onClick={() => setActiveTab('tips')}
            className={`px-4 py-2 font-semibold border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'tips'
                ? 'border-blue-500 text-white'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Info className="w-3.5 h-3.5 text-rose-400" />
            <span>Speed & Placement Guide</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#070A0F]">
          {activeTab === 'preview' && (
            <div className="space-y-6">
              {/* Controls Bar */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <div className="flex items-center justify-between mb-1 text-slate-300">
                    <span className="font-semibold">Perspective: {perspective}px</span>
                    <span className="text-slate-500">Camera distance</span>
                  </div>
                  <input
                    type="range"
                    min="150"
                    max="600"
                    step="25"
                    value={perspective}
                    onChange={(e) => setPerspective(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1 text-slate-300">
                    <span className="font-semibold">Deep Layer Z: {deepZ}px</span>
                    <span className="text-blue-400 font-mono">Scale: {deepScale}x</span>
                  </div>
                  <input
                    type="range"
                    min="-500"
                    max="-100"
                    step="25"
                    value={deepZ}
                    onChange={(e) => setDeepZ(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1 text-slate-300">
                    <span className="font-semibold">Mid Layer Z: {midZ}px</span>
                    <span className="text-indigo-400 font-mono">Scale: {midScale}x</span>
                  </div>
                  <input
                    type="range"
                    min="-300"
                    max="-50"
                    step="25"
                    value={midZ}
                    onChange={(e) => setMidZ(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Interactive Scroll Window */}
              <div className="relative rounded-2xl border border-slate-700/80 overflow-hidden shadow-2xl">
                <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-400 font-mono">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                    <span className="ml-2 text-slate-300">Live 3D Viewport — Scroll inside box below 👇</span>
                  </div>
                  <span className="text-blue-400 font-mono font-semibold">Scroll: {scrollProgress}%</span>
                </div>

                {/* 3D Perspective Scroll Container */}
                <div
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  className="h-[360px] sm:h-[420px] overflow-y-auto overflow-x-hidden relative"
                  style={{
                    perspective: `${perspective}px`,
                    perspectiveOrigin: '50% 50%',
                  }}
                >
                  {/* Group 1: 3D Multi-Layer Scene */}
                  <div
                    className="relative h-[650px] w-full preserve-3d"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Layer 1: Deep Sky & Stars (Moves slowest: translateZ) */}
                    <div
                      className="absolute inset-0 flex flex-col justify-start items-center pt-8 pointer-events-none"
                      style={{
                        transform: `translateZ(${deepZ}px) scale(${deepScale})`,
                        zIndex: 1,
                      }}
                    >
                      <div className="w-full h-full bg-gradient-to-b from-[#0F172A] via-[#1E1B4B] to-[#0A0D14] relative overflow-hidden flex flex-col items-center">
                        {/* Constellation Dots */}
                        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px]" />
                        <div className="mt-8 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-mono font-bold tracking-wider uppercase">
                          Deep Layer 1 (Slowest: ~45% Speed · Z: {deepZ}px)
                        </div>
                      </div>
                    </div>

                    {/* Layer 2: Midground Mountain / Neural Grid */}
                    <div
                      className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none"
                      style={{
                        transform: `translateZ(${midZ}px) scale(${midScale})`,
                        zIndex: 2,
                      }}
                    >
                      {/* Stylized geometric mountain peaks SVG */}
                      <div className="w-full h-full flex flex-col justify-end">
                        <svg
                          viewBox="0 0 1200 400"
                          className="w-full h-64 text-indigo-950/90 fill-current opacity-80"
                          preserveAspectRatio="none"
                        >
                          <path d="M0,400 L0,240 L200,120 L400,280 L600,80 L850,260 L1050,140 L1200,230 L1200,400 Z" />
                          <path
                            d="M0,400 L0,280 L180,190 L380,310 L580,160 L800,300 L1020,200 L1200,280 L1200,400 Z"
                            fill="#1e1b4b"
                            opacity="0.6"
                          />
                        </svg>
                        <div className="text-center pb-8 bg-gradient-to-t from-[#090D14] to-transparent">
                          <span className="px-4 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-xs font-mono font-bold">
                            Mid Layer 2 (Moderate: ~70% Speed · Z: {midZ}px)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Layer 3: Foreground Content (100% standard speed) */}
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-start pt-20 px-4 text-center z-10"
                      style={{
                        transform: 'translateZ(0)',
                      }}
                    >
                      <span className="px-3 py-1 rounded bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                        Foreground Layer 3 (100% Scroll Speed · Z: 0)
                      </span>
                      <h3 className="text-2xl sm:text-4xl font-bold font-display text-white max-w-xl [text-wrap:balance]">
                        Notice How Each Layer Scrolls At Different Velocities
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-md">
                        The distant starfield moves gracefully slow, the mountains travel moderately, and this text moves with direct 1:1 scroll touch.
                      </p>
                    </div>
                  </div>

                  {/* Group 2: Solid Content Section that covers Group 1 */}
                  <div className="relative z-20 bg-[#0C111C] border-t border-slate-700/80 p-8 min-h-[400px]">
                    <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                      Ground Group 2
                    </span>
                    <h4 className="text-xl font-bold text-white mt-1">
                      Smooth Transition into Standard Flow
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed max-w-2xl">
                      By setting a high z-index and standard relative positioning on following sections, content slides naturally over the 3D parallax viewport without glitching or overflow clipping.
                    </p>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                        <strong className="text-white block mb-1">0% CPU JS Lag</strong>
                        <span className="text-slate-400">All rendering calculations are managed directly by browser GPU compositor matrices.</span>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                        <strong className="text-white block mb-1">Scale Correction</strong>
                        <span className="text-slate-400">Scaling compensates for distance to keep image edges perfectly aligned.</span>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                        <strong className="text-white block mb-1">Mobile Friendly</strong>
                        <span className="text-slate-400">Works seamlessly with touch gestures without hijacked momentum scroll.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'css-3d' && (
            <div className="space-y-6">
              {/* HTML Snippet */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-300">Step 1: HTML Markup</span>
                    <span className="text-[11px] text-slate-500 font-mono">index.html</span>
                  </div>
                  <button
                    onClick={() => handleCopy(htmlCode, 'html')}
                    className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedType === 'html' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy HTML</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
                  {htmlCode}
                </pre>
              </div>

              {/* CSS Snippet */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-300">Step 2: 3D Perspective CSS</span>
                    <span className="text-[11px] text-slate-500 font-mono">styles.css</span>
                  </div>
                  <button
                    onClick={() => handleCopy(css3dCode, 'css')}
                    className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedType === 'css' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy CSS</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-indigo-300 overflow-x-auto leading-relaxed">
                  {css3dCode}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'scroll-timeline' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-xs text-emerald-300">
                <strong>Modern W3C Standard:</strong> Modern browsers support <code className="bg-emerald-900/60 px-1 py-0.5 rounded text-white">animation-timeline: scroll()</code>. This allows animating layers directly relative to the page scroll offset without setting 3D perspective or affecting standard page layout flow.
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-300">Scroll-Timeline CSS Snippet</span>
                <button
                  onClick={() => handleCopy(scrollTimelineCode, 'timeline')}
                  className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedType === 'timeline' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto leading-relaxed">
                {scrollTimelineCode}
              </pre>
            </div>
          )}

          {activeTab === 'tips' && (
            <div className="space-y-5 text-xs text-slate-300 leading-relaxed">
              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800">
                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-blue-400" />
                  <span>1. The Mathematical Scaling Formula (Anti-Shrink)</span>
                </h4>
                <p>
                  When you push an element back into 3D space with <code className="text-white font-mono bg-slate-950 px-1 py-0.5 rounded">translateZ(-X px)</code>, the browser naturally renders it smaller. To keep the background layer exactly filling the screen edges, you must counter-scale it with the exact mathematical ratio:
                </p>
                <div className="p-3 my-2 rounded bg-slate-950 font-mono text-blue-300 text-xs">
                  scale = 1 + (Math.abs(translateZ) / perspective)
                </div>
                <p className="text-slate-400">
                  Example: If <code className="text-white">perspective: 300px</code> and <code className="text-white">translateZ: -300px</code>, the scale must be <code className="text-emerald-400 font-bold">1 + (300 / 300) = 2.0</code>.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800">
                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-indigo-400" />
                  <span>2. Speed Tuning Cheatsheet</span>
                </h4>
                <ul className="space-y-2 text-slate-300">
                  <li>
                    <strong className="text-white">Deepest Background (Clouds/Stars):</strong> Use <code className="text-blue-300 font-mono">translateZ(-300px) scale(2)</code>. Moves at ~50% speed.
                  </li>
                  <li>
                    <strong className="text-white">Midground (Mountains/Buildings):</strong> Use <code className="text-indigo-300 font-mono">translateZ(-150px) scale(1.5)</code>. Moves at ~67% speed.
                  </li>
                  <li>
                    <strong className="text-white">Foreground / Text:</strong> Use <code className="text-slate-200 font-mono">translateZ(0) scale(1)</code>. Moves at standard 100% speed.
                  </li>
                  <li>
                    <strong className="text-white">Hyper-foreground (Floating particles):</strong> Use <code className="text-rose-300 font-mono">translateZ(50px) scale(0.83)</code>. Moves FASTER than user scroll (~120%).
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800">
                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>3. Image Placement & Bleed Tips</span>
                </h4>
                <ul className="space-y-2 text-slate-300">
                  <li>
                    <strong>Avoid White Edge Gaps:</strong> Always provide at least <code className="text-white font-mono">min-height: 120vh</code> and <code className="text-white font-mono">background-size: cover</code> on image layers to prevent borders slipping into view during high-speed inertia scrolling.
                  </li>
                  <li>
                    <strong>Mobile & prefers-reduced-motion:</strong> Always include an accessibility fallback to disable 3D transformations when users request reduced motion:
                    <div className="p-2.5 my-2 rounded bg-slate-950 font-mono text-slate-400 text-[11px]">
                      @media (prefers-reduced-motion: reduce) &#123; .parallax-layer &#123; transform: none !important; &#125; &#125;
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
