import React, { useRef, useMemo, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Cpu, Sparkles, Eye, Zap, Layers, Binary, ChevronRight, ChevronDown, Activity, Network, Terminal, Cloud, Users, ShieldCheck } from 'lucide-react';

export const CinematicScrollExperience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within this 380vh pinned track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Buttery-smooth spring physics with gentle damping for zero-jitter, cinematic transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 30,
    mass: 0.6,
    restDelta: 0.0001,
  });

  // =========================================================================
  // MULTI-VELOCITY LAYER-BASED PARALLAX TRANSFORMS (GPU Compositor Only)
  // =========================================================================

  // --- LAYER 0: DEEP CELESTIAL BACKGROUND (Velocity: ~0.25x) ---
  const bgStarsY = useTransform(smoothProgress, [0, 1], [-80, 100]);
  const bgOrbY = useTransform(smoothProgress, [0, 1], [-60, 75]);
  const bgOrbScale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1.12, 1]);
  const bgCircuitRotate = useTransform(smoothProgress, [0, 1], [-12, 38]);

  // --- LAYER 1: MIDGROUND TELEMETRY & TENSOR GLYPHS (Velocity: ~0.55x) ---
  const midLeftY = useTransform(smoothProgress, [0, 1], [120, -150]);
  const midLeftOpacity = useTransform(smoothProgress, [0, 0.18, 0.82, 1], [0.2, 0.75, 0.75, 0.2]);
  const midRightY = useTransform(smoothProgress, [0, 1], [-90, 160]);
  const midRightOpacity = useTransform(smoothProgress, [0, 0.18, 0.82, 1], [0.2, 0.75, 0.75, 0.2]);

  // --- LAYER 2: 3D EXPLODED SILICON FOCAL CORE (Baseline Velocity: 1.0x) ---
  const scale = useTransform(smoothProgress, [0, 0.25, 0.5, 0.8, 1], [0.78, 1.04, 1, 0.96, 0.9]);
  const rotateX = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [24, 0, -12, 10, 0]);
  const rotateY = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [-18, 0, 14, -10, 0]);

  // Exploded hardware layer mechanics (smooth cubic trajectory)
  const layer1Y = useTransform(smoothProgress, [0.2, 0.5, 0.75, 0.9], [0, -135, -115, 0]);
  const layer1Z = useTransform(smoothProgress, [0.2, 0.5, 0.75, 0.9], [0, 95, 80, 0]);
  const layer1Opacity = useTransform(smoothProgress, [0, 0.1, 0.85, 1], [0.8, 1, 1, 0.9]);

  const layer2Y = useTransform(smoothProgress, [0.2, 0.5, 0.75, 0.9], [0, 0, 10, 0]);
  const layer2Scale = useTransform(smoothProgress, [0.2, 0.5, 0.75, 0.9], [1, 1.07, 1.03, 1]);

  const layer3Y = useTransform(smoothProgress, [0.2, 0.5, 0.75, 0.9], [0, 145, 125, 0]);
  const layer3Z = useTransform(smoothProgress, [0.2, 0.5, 0.75, 0.9], [0, -95, -80, 0]);

  // Specular Glare light sweep across silicon die
  const glareX = useTransform(smoothProgress, [0, 1], [-140, 240]);
  const glareOpacity = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8, 1], [0.1, 0.55, 0.85, 0.5, 0.15]);

  // =========================================================================
  // GOOGLE LOGO EXPLOSION TRANSFORMS (The 4 Iconic Color Quadrants Explode in 3D)
  // =========================================================================

  // RED QUADRANT (#EA4335): Explodes Top-Left -> Gemini 2.5 Neural Foundation
  const gRedX = useTransform(smoothProgress, [0.18, 0.44, 0.74, 0.92], [0, -42, -34, 0]);
  const gRedY = useTransform(smoothProgress, [0.18, 0.44, 0.74, 0.92], [0, -36, -28, 0]);
  const gRedRotate = useTransform(smoothProgress, [0.18, 0.44, 0.74, 0.92], [0, -16, -10, 0]);
  const gRedScale = useTransform(smoothProgress, [0.18, 0.44, 0.74, 0.92], [1, 1.16, 1.1, 1]);

  // BLUE QUADRANT (#4285F4): Explodes Top-Right / Horizontal -> Google Cloud & Vertex AI TPU
  const gBlueX = useTransform(smoothProgress, [0.18, 0.44, 0.74, 0.92], [0, 46, 36, 0]);
  const gBlueY = useTransform(smoothProgress, [0.18, 0.44, 0.74, 0.92], [0, -22, -16, 0]);
  const gBlueRotate = useTransform(smoothProgress, [0.18, 0.44, 0.74, 0.92], [0, 16, 10, 0]);
  const gBlueScale = useTransform(smoothProgress, [0.18, 0.44, 0.74, 0.92], [1, 1.16, 1.1, 1]);

  // YELLOW QUADRANT (#FBBC05): Explodes Bottom-Left -> Academic Developer Ecosystem & TIU
  const gYellowX = useTransform(smoothProgress, [0.18, 0.44, 0.74, 0.92], [0, -44, -34, 0]);
  const gYellowY = useTransform(smoothProgress, [0.18, 0.44, 0.74, 0.92], [0, 34, 26, 0]);
  const gYellowRotate = useTransform(smoothProgress, [0.18, 0.44, 0.74, 0.92], [0, -18, -12, 0]);
  const gYellowScale = useTransform(smoothProgress, [0.18, 0.44, 0.74, 0.92], [1, 1.16, 1.1, 1]);

  // GREEN QUADRANT (#34A853): Explodes Bottom-Right -> Multimodal Sensory & Realtime Tools
  const gGreenX = useTransform(smoothProgress, [0.18, 0.44, 0.74, 0.92], [0, 40, 30, 0]);
  const gGreenY = useTransform(smoothProgress, [0.18, 0.44, 0.74, 0.92], [0, 38, 28, 0]);
  const gGreenRotate = useTransform(smoothProgress, [0.18, 0.44, 0.74, 0.92], [0, 18, 12, 0]);
  const gGreenScale = useTransform(smoothProgress, [0.18, 0.44, 0.74, 0.92], [1, 1.16, 1.1, 1]);

  // INNER QUANTUM GEMINI DIE (Revealed in the center as Google quadrants separate)
  const innerDieOpacity = useTransform(smoothProgress, [0.18, 0.32, 0.74, 0.88], [0, 1, 1, 0]);
  const innerDieScale = useTransform(smoothProgress, [0.18, 0.35, 0.74, 0.88], [0.65, 1.1, 1.05, 0.65]);

  // FLOATING FEATURE CALLOUT TAGS FOR EACH EXPLODED GOOGLE QUADRANT
  const googleTagsOpacity = useTransform(smoothProgress, [0.26, 0.36, 0.70, 0.80], [0, 1, 1, 0]);
  const googleTagsScale = useTransform(smoothProgress, [0.26, 0.36, 0.70, 0.80], [0.85, 1, 1, 0.85]);

  // --- LAYER 3: FOREGROUND TYPOGRAPHY CONTAINERS ---
  const textContainerParallax = useTransform(smoothProgress, [0, 1], [25, -35]);

  // Typography Phase Transitions
  const text1Opacity = useTransform(smoothProgress, [0, 0.06, 0.2, 0.26], [1, 1, 0.7, 0]);
  const text1Y = useTransform(smoothProgress, [0, 0.26], [0, -28]);

  const text2Opacity = useTransform(smoothProgress, [0.24, 0.3, 0.46, 0.52], [0, 1, 1, 0]);
  const text2Y = useTransform(smoothProgress, [0.24, 0.32, 0.52], [28, 0, -28]);

  const text3Opacity = useTransform(smoothProgress, [0.5, 0.56, 0.72, 0.78], [0, 1, 1, 0]);
  const text3Y = useTransform(smoothProgress, [0.5, 0.58, 0.78], [28, 0, -28]);

  const text4Opacity = useTransform(smoothProgress, [0.76, 0.82, 0.96, 1], [0, 1, 1, 1]);
  const text4Y = useTransform(smoothProgress, [0.76, 0.85], [28, 0]);

  // --- LAYER 4: OPTICAL FOREGROUND BOKEH PARTICLES (~1.5x) ---
  const fgBokehY = useTransform(smoothProgress, [0, 1], [150, -270]);
  const fgBokehX = useTransform(smoothProgress, [0, 1], [-35, 45]);

  // =========================================================================
  // SUBTLE SECTION-BY-SECTION ANIMATED CHEVRON GUIDES
  // =========================================================================

  // Stage 1 Guide: Visible in Section 1 -> Guides to Section 2 (Exploded Google Logo & Hardware)
  const chevron1Opacity = useTransform(smoothProgress, [0, 0.04, 0.18, 0.24], [1, 1, 0.8, 0]);
  const chevron1Y = useTransform(smoothProgress, [0, 0.24], [0, 12]);

  // Stage 2 Guide: Visible in Section 2 -> Guides to Section 3 (1M Context)
  const chevron2Opacity = useTransform(smoothProgress, [0.24, 0.3, 0.46, 0.52], [0, 1, 1, 0]);
  const chevron2Y = useTransform(smoothProgress, [0.24, 0.32, 0.52], [10, 0, 10]);

  // Stage 3 Guide: Visible in Section 3 -> Guides to Section 4 (Masterclass Stage)
  const chevron3Opacity = useTransform(smoothProgress, [0.5, 0.56, 0.72, 0.78], [0, 1, 1, 0]);
  const chevron3Y = useTransform(smoothProgress, [0.5, 0.58, 0.78], [10, 0, 10]);

  // Stage 4 Guide: Visible in Section 4 -> Guides into Speakers Section
  const chevron4Opacity = useTransform(smoothProgress, [0.76, 0.82, 0.98, 1], [0, 1, 1, 1]);
  const chevron4Y = useTransform(smoothProgress, [0.76, 0.85], [10, 0]);

  // HUD Progress indicator width
  const progressPercent = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  // Pre-allocated static arrays for performance
  const tpuCells = useMemo(() => Array.from({ length: 8 }), []);

  // Smooth scroll jumps to exact checkpoints
  const scrollToStage = useCallback((percentage: number) => {
    if (containerRef.current) {
      const targetOffset =
        containerRef.current.offsetTop + containerRef.current.offsetHeight * percentage;
      window.scrollTo({ top: targetOffset, behavior: 'smooth' });
    }
  }, []);

  const handleSkipAnimation = useCallback(() => {
    if (containerRef.current) {
      const top =
        containerRef.current.offsetTop + containerRef.current.offsetHeight - window.innerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  const handleScrollToSpeakers = useCallback(() => {
    const el = document.getElementById('speakers');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleSkipAnimation();
    }
  }, [handleSkipAnimation]);

  return (
    <section
      ref={containerRef}
      id="cinematic-showcase"
      className="relative h-[380vh] bg-[#04060A] text-white will-change-transform"
      style={{ contain: 'paint' }}
    >
      {/* Pinned Sticky 100vh Viewport Window */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between items-center px-4 sm:px-8 py-3 select-none transform-gpu">
        
        {/* ================================================================= */}
        {/* PARALLAX LAYER 0: DEEPEST BACKGROUND (Velocity: ~0.25x)           */}
        {/* ================================================================= */}
        <motion.div
          style={{ y: bgStarsY }}
          className="absolute inset-0 pointer-events-none overflow-hidden z-0 will-change-transform"
        >
          {/* Ambient Glow Radial Orb */}
          <motion.div
            style={{ y: bgOrbY, scale: bgOrbScale }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[680px] h-[680px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-rose-500/10 rounded-full blur-[140px] will-change-transform"
          />

          {/* Deep Starfield Matrix */}
          <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1.2px,transparent_1.2px)] [background-size:36px_36px] opacity-20 pointer-events-none" />

          {/* Slow-Rotating Deep Geometry Ring */}
          <motion.div
            style={{ rotate: bgCircuitRotate }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] sm:w-[780px] h-[620px] sm:h-[780px] rounded-full border border-blue-500/10 pointer-events-none opacity-40 flex items-center justify-center will-change-transform"
          >
            <div className="w-[500px] sm:w-[630px] h-[500px] sm:h-[630px] rounded-full border border-dashed border-indigo-500/15" />
          </motion.div>
        </motion.div>

        {/* ================================================================= */}
        {/* PARALLAX LAYER 1: MIDGROUND TENSOR TELEMETRY (Velocity: ~0.55x)   */}
        {/* ================================================================= */}
        <motion.div
          style={{ y: midLeftY, opacity: midLeftOpacity }}
          className="absolute left-4 sm:left-10 top-1/3 z-10 pointer-events-none hidden md:flex flex-col gap-3 font-mono text-[11px] will-change-transform"
        >
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-sm shadow-xl max-w-[210px]">
            <div className="flex items-center gap-1.5 text-blue-400 font-bold mb-1">
              <Network className="w-3.5 h-3.5" />
              <span>ATTENTION KERNEL</span>
            </div>
            <div className="text-slate-400 text-[10px] leading-relaxed">
              <code>Attention(Q,K,V) = softmax(QKᵀ / √dₖ)V</code>
            </div>
            <div className="mt-1 text-slate-500 text-[9px]">
              Layer velocity: 0.55x midground
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-blue-950/30 border border-blue-900/40 text-blue-300 text-[10px]">
            <span>d_model: 8,192 · Heads: 64</span>
          </div>
        </motion.div>

        <motion.div
          style={{ y: midRightY, opacity: midRightOpacity }}
          className="absolute right-4 sm:right-10 top-1/4 z-10 pointer-events-none hidden md:flex flex-col gap-3 font-mono text-[11px] will-change-transform"
        >
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-sm shadow-xl max-w-[210px]">
            <div className="flex items-center gap-1.5 text-indigo-400 font-bold mb-1">
              <Activity className="w-3.5 h-3.5" />
              <span>TPU v5e TOPOLOGY</span>
            </div>
            <div className="text-slate-400 text-[10px] leading-relaxed">
              256-Chip Interconnect Torus
              <br />
              Bandwidth: 3.2 Tbps optical
            </div>
            <div className="mt-1 text-emerald-400 text-[9px] font-bold">
              ✓ Sub-300ms Flash Cycle
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-indigo-950/30 border border-indigo-900/40 text-indigo-300 text-[10px]">
            <span>Rotary Embedding (RoPE)</span>
          </div>
        </motion.div>

        {/* Top HUD / Status Bar */}
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between z-30 pt-1">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono tracking-widest text-blue-400 uppercase font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping inline-block" />
              Gemini 2.5 Architecture Breakdown
            </span>
            <span className="hidden sm:inline text-slate-600 text-xs">|</span>
            <span className="hidden sm:inline text-xs text-slate-400 font-medium">
              TIU AIML Masterclass Interactive Teardown
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-1.5 text-[10px] font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
              <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Google Explode Matrix Active
              </span>
            </div>

            <button
              onClick={handleSkipAnimation}
              className="text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Skip breakdown</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ================================================================= */}
        {/* PARALLAX LAYER 2: CENTER STAGE 3D SILICON CORE (Baseline 1.0x)    */}
        {/* ================================================================= */}
        <div className="relative w-full max-w-4xl flex-1 flex items-center justify-center my-auto z-20 perspective-[1200px]">
          <motion.div
            style={{
              scale,
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="relative w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] md:w-[460px] md:h-[460px] flex items-center justify-center cursor-grab active:cursor-grabbing will-change-transform"
          >
            {/* LAYER 3: BASE TPU SILICON SUBSTRATE */}
            <motion.div
              style={{
                y: layer3Y,
                z: layer3Z,
                transformStyle: 'preserve-3d',
              }}
              className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#0B101D] via-[#080B13] to-[#04060A] border-2 border-slate-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] p-6 flex flex-col justify-between will-change-transform"
            >
              <div className="absolute inset-0 rounded-[38px] opacity-30 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 border-b border-slate-800/80 pb-2">
                <span>SUBSTRATE: GOOGLE TPU v5e</span>
                <span className="text-blue-400 font-bold">197 TFLOPS / ACCELERATOR</span>
              </div>

              <div className="grid grid-cols-4 gap-2.5 my-auto px-2">
                {tpuCells.map((_, i) => (
                  <div
                    key={i}
                    className="h-10 rounded-lg bg-slate-900/90 border border-slate-700/60 flex items-center justify-center relative overflow-hidden"
                  >
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-60" />
                    <Binary className="w-3.5 h-3.5 text-slate-500 opacity-70" />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
                <span className="font-mono text-slate-500">BUS: 3.2 Tbps INTERCONNECT</span>
                <span className="text-emerald-400 font-mono text-[10px] bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                  REAL-TIME PIPELINE ACTIVE
                </span>
              </div>
            </motion.div>

            {/* LAYER 2: MIDDLE CROSS-ATTENTION TOKENIZER BOARD & EXPLODING GOOGLE LOGO */}
            <motion.div
              style={{
                y: layer2Y,
                scale: layer2Scale,
                transformStyle: 'preserve-3d',
              }}
              className="absolute inset-2 rounded-[36px] bg-gradient-to-br from-[#111827] via-[#0E1524] to-[#0A0E17] border border-blue-500/40 shadow-2xl p-5 flex flex-col justify-between will-change-transform overflow-visible"
            >
              <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-slate-950 via-[#0B0F19] to-slate-950 border border-slate-700/80 p-4 flex flex-col items-center justify-center overflow-visible">
                <motion.div
                  style={{
                    x: glareX,
                    opacity: glareOpacity,
                  }}
                  className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 pointer-events-none will-change-transform"
                />

                {/* ------------------------------------------------------------- */}
                {/* EXPLODING GOOGLE LOGO CORE MATRIX                              */}
                {/* ------------------------------------------------------------- */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
                  
                  {/* Inner Quantum Gemini Crystal (Revealed in the center as the 4 quadrants separate) */}
                  <motion.div
                    style={{
                      opacity: innerDieOpacity,
                      scale: innerDieScale,
                    }}
                    className="absolute z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-blue-600/40 via-indigo-500/40 to-rose-500/40 p-[1.5px] shadow-[0_0_40px_rgba(66,133,244,0.6)] backdrop-blur-md pointer-events-none flex items-center justify-center"
                  >
                    <div className="w-full h-full rounded-full bg-slate-950/90 flex flex-col items-center justify-center text-center p-1">
                      <Sparkles className="w-6 h-6 text-cyan-300 animate-pulse" />
                      <span className="text-[8px] font-mono text-cyan-200 font-bold tracking-wider uppercase">
                        GEMINI 2.5
                      </span>
                    </div>
                  </motion.div>

                  {/* SVG Google "G" Emblem Container */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                    
                    {/* QUADRANT 1: RED (#EA4335) - Explodes Top-Left */}
                    <motion.div
                      style={{
                        x: gRedX,
                        y: gRedY,
                        scale: gRedScale,
                        rotate: gRedRotate,
                      }}
                      className="absolute inset-0 flex items-center justify-center will-change-transform cursor-pointer group"
                      title="Google DeepMind: Gemini 2.5 Neural Foundation Models"
                    >
                      <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow-[0_0_14px_rgba(234,67,53,0.7)]">
                        <path
                          fill="#EA4335"
                          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                        />
                      </svg>

                      {/* Floating Callout for Red Quadrant */}
                      <motion.div
                        style={{ opacity: googleTagsOpacity, scale: googleTagsScale }}
                        className="absolute -top-6 -left-16 sm:-left-24 px-2 py-0.5 rounded-full bg-red-950/90 border border-red-500/70 text-[9px] font-mono text-red-200 whitespace-nowrap shadow-lg flex items-center gap-1 pointer-events-none"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
                        <span>GEMINI 2.5 MODELS</span>
                      </motion.div>
                    </motion.div>

                    {/* QUADRANT 2: BLUE (#4285F4) - Explodes Top-Right */}
                    <motion.div
                      style={{
                        x: gBlueX,
                        y: gBlueY,
                        scale: gBlueScale,
                        rotate: gBlueRotate,
                      }}
                      className="absolute inset-0 flex items-center justify-center will-change-transform cursor-pointer group"
                      title="Google Cloud Platform: Vertex AI & TPU v5e Clusters"
                    >
                      <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow-[0_0_14px_rgba(66,133,244,0.7)]">
                        <path
                          fill="#4285F4"
                          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                        />
                      </svg>

                      {/* Floating Callout for Blue Quadrant */}
                      <motion.div
                        style={{ opacity: googleTagsOpacity, scale: googleTagsScale }}
                        className="absolute -top-6 -right-16 sm:-right-24 px-2 py-0.5 rounded-full bg-blue-950/90 border border-blue-500/70 text-[9px] font-mono text-blue-200 whitespace-nowrap shadow-lg flex items-center gap-1 pointer-events-none"
                      >
                        <Cloud className="w-2.5 h-2.5 text-blue-400" />
                        <span>CLOUD TPU v5e</span>
                      </motion.div>
                    </motion.div>

                    {/* QUADRANT 3: YELLOW (#FBBC05) - Explodes Bottom-Left */}
                    <motion.div
                      style={{
                        x: gYellowX,
                        y: gYellowY,
                        scale: gYellowScale,
                        rotate: gYellowRotate,
                      }}
                      className="absolute inset-0 flex items-center justify-center will-change-transform cursor-pointer group"
                      title="Google Developer Student Clubs & Techno India University Community"
                    >
                      <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow-[0_0_14px_rgba(251,188,5,0.7)]">
                        <path
                          fill="#FBBC05"
                          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                        />
                      </svg>

                      {/* Floating Callout for Yellow Quadrant */}
                      <motion.div
                        style={{ opacity: googleTagsOpacity, scale: googleTagsScale }}
                        className="absolute -bottom-6 -left-16 sm:-left-24 px-2 py-0.5 rounded-full bg-amber-950/90 border border-amber-500/70 text-[9px] font-mono text-amber-200 whitespace-nowrap shadow-lg flex items-center gap-1 pointer-events-none"
                      >
                        <Users className="w-2.5 h-2.5 text-amber-400" />
                        <span>TIU CAMPUS GDG</span>
                      </motion.div>
                    </motion.div>

                    {/* QUADRANT 4: GREEN (#34A853) - Explodes Bottom-Right */}
                    <motion.div
                      style={{
                        x: gGreenX,
                        y: gGreenY,
                        scale: gGreenScale,
                        rotate: gGreenRotate,
                      }}
                      className="absolute inset-0 flex items-center justify-center will-change-transform cursor-pointer group"
                      title="Google Developer Ecosystem: Real-time Multimodal Tools & Function Calling"
                    >
                      <svg viewBox="0 0 48 48" className="w-full h-full drop-shadow-[0_0_14px_rgba(52,168,83,0.7)]">
                        <path
                          fill="#34A853"
                          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                        />
                      </svg>

                      {/* Floating Callout for Green Quadrant */}
                      <motion.div
                        style={{ opacity: googleTagsOpacity, scale: googleTagsScale }}
                        className="absolute -bottom-6 -right-16 sm:-right-24 px-2 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-500/70 text-[9px] font-mono text-emerald-200 whitespace-nowrap shadow-lg flex items-center gap-1 pointer-events-none"
                      >
                        <Terminal className="w-2.5 h-2.5 text-emerald-400" />
                        <span>TOOL RUNTIME</span>
                      </motion.div>
                    </motion.div>

                  </div>
                </div>

                <div className="mt-3 text-center z-10">
                  <div className="text-xs font-mono font-bold text-indigo-300">
                    GOOGLE SILICON TENSOR ENGINE
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    Multimodal attention matrix fusing vision, speech, and tool invocation
                  </div>
                </div>
              </div>
            </motion.div>

            {/* LAYER 1: TOP OPTICAL SAPPHIRE SENSORY ARRAY */}
            <motion.div
              style={{
                y: layer1Y,
                z: layer1Z,
                opacity: layer1Opacity,
                transformStyle: 'preserve-3d',
              }}
              className="absolute inset-0 rounded-[42px] bg-gradient-to-b from-slate-900/60 to-slate-950/80 border-2 border-slate-600/50 backdrop-blur-md shadow-2xl p-5 flex flex-col justify-between pointer-events-none will-change-transform"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-blue-400 tracking-wider">
                  OPTICAL INPUT MATRIX
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
              </div>

              <div className="flex items-center justify-around my-auto">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-slate-800 to-black border-2 border-blue-500/70 p-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-950/80 border border-blue-400/80 flex items-center justify-center">
                      <Eye className="w-5 h-5 text-blue-300" />
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-300 font-semibold">
                    VISION 4K/60fps
                  </span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-slate-800 to-black border-2 border-indigo-500/70 p-2 shadow-[0_0_20px_rgba(99,102,241,0.3)] flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-950/80 border border-indigo-400/80 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-indigo-300" />
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-300 font-semibold">
                    LIVE SPEECH
                  </span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-slate-800 to-black border-2 border-rose-500/70 p-2 shadow-[0_0_20px_rgba(244,63,94,0.3)] flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-rose-950/80 border border-rose-400/80 flex items-center justify-center">
                      <Cpu className="w-5 h-5 text-rose-300" />
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-300 font-semibold">
                    TOOL CALLING
                  </span>
                </div>
              </div>

              <div className="text-center text-[10px] font-mono text-slate-400">
                DIRECT TENSOR SENSORY INGESTION · ZERO INTERMEDIATE PIPELINES
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ================================================================= */}
        {/* PARALLAX LAYER 4: OPTICAL FOREGROUND BOKEH PARTICLES (~1.5x)      */}
        {/* ================================================================= */}
        <motion.div
          style={{ y: fgBokehY, x: fgBokehX }}
          className="absolute inset-0 pointer-events-none z-25 overflow-hidden will-change-transform"
        >
          <div className="absolute top-1/4 left-[15%] w-16 h-16 rounded-full bg-blue-400/20 blur-md border border-blue-400/30 pointer-events-none" />
          <div className="absolute top-2/3 right-[18%] w-20 h-20 rounded-full bg-rose-400/15 blur-lg border border-rose-400/20 pointer-events-none" />
          <div className="absolute top-1/2 left-[82%] w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_12px_#38bdf8] pointer-events-none" />
          <div className="absolute top-1/3 left-[28%] w-2.5 h-2.5 rounded-full bg-indigo-300 shadow-[0_0_10px_#818cf8] pointer-events-none" />
        </motion.div>

        {/* ================================================================= */}
        {/* PARALLAX LAYER 3: FOREGROUND TEXT CONTAINERS                      */}
        {/* ================================================================= */}
        <motion.div
          style={{ y: textContainerParallax }}
          className="w-full max-w-4xl mx-auto min-h-[115px] flex items-center justify-center text-center relative z-30 pb-1 will-change-transform"
        >
          {/* Phase 1 Copy: Monolithic Silicon */}
          <motion.div
            style={{ opacity: text1Opacity, y: text1Y }}
            className="absolute inset-x-0 mx-auto px-4 pointer-events-none will-change-transform"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>STAGE 01 · UNIFIED GOOGLE ARCHITECTURE</span>
            </div>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight [text-wrap:balance]">
              Google AI Ecosystem. Unified & Engineered for Scale.
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Scroll down to explode the Google logo into its four foundational pillars: Gemini 2.5, Cloud TPU v5e, GDG Campus Community, and Multimodal Tool Runtimes.
            </p>
          </motion.div>

          {/* Phase 2 Copy: Exploded Sensory Tokenizer & Google Pillars */}
          <motion.div
            style={{ opacity: text2Opacity, y: text2Y }}
            className="absolute inset-x-0 mx-auto px-4 pointer-events-none will-change-transform"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-semibold mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>STAGE 02 · 3D EXPLODED GOOGLE SILICON MATRIX</span>
            </div>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight [text-wrap:balance]">
              Four Pillars Disassemble. Revealing Raw Quantum Speed.
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Watch the Google logo separate outward in 3D: Red for Gemini 2.5 Neural Models, Blue for Cloud TPUs, Yellow for TIU Student Community, and Green for Tool Execution.
            </p>
          </motion.div>

          {/* Phase 3 Copy: 1,000,000+ Token Attention Horizon */}
          <motion.div
            style={{ opacity: text3Opacity, y: text3Y }}
            className="absolute inset-x-0 mx-auto px-4 pointer-events-none will-change-transform"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>STAGE 03 · 1M+ CONTEXT HORIZON</span>
            </div>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight [text-wrap:balance]">
              Sub-300ms Flash Inference & 99.8% Needle Recall.
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Drop an entire semester’s textbook or a 60,000-line codebase into memory. Gemini recalls nuances instantaneously with grounded function execution.
            </p>
          </motion.div>

          {/* Phase 4 Copy: Convergence & Masterclass Invitation */}
          <motion.div
            style={{ opacity: text4Opacity, y: text4Y }}
            className="absolute inset-x-0 mx-auto px-4 will-change-transform"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>STAGE 04 · HANDS-ON MASTERCLASS STAGE</span>
            </div>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight [text-wrap:balance]">
              Master This Google Architecture Live on Sept 23.
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-3">
              Join Arti Dwivedi & Ankita Shaw at TIU 11th Floor Conference Hall. Bring your laptop and code live with the Gemini SDK.
            </p>
            <div className="flex items-center justify-center gap-3">
              <a
                href="#speakers"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Meet Keynote Speakers</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#curriculum"
                className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 font-semibold text-xs sm:text-sm transition-all cursor-pointer"
              >
                View Agenda Timeline
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* ================================================================= */}
        {/* SUBTLE, ANIMATED CHEVRON GUIDES AT BOTTOM OF EACH SECTION         */}
        {/* ================================================================= */}
        <div className="relative z-30 h-13 w-full flex items-center justify-center">
          {/* Section 1 Chevron: Guides into Section 2 (Exploded Google Logo & Hardware) */}
          <motion.div
            style={{
              opacity: chevron1Opacity,
              y: chevron1Y,
            }}
            className="absolute flex flex-col items-center gap-1 cursor-pointer group will-change-transform"
            onClick={() => scrollToStage(0.36)}
            title="Scroll or click to explode Google logo and silicon layers"
          >
            <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-900/85 border border-slate-800 text-[11px] font-mono text-slate-300 group-hover:text-blue-300 group-hover:border-blue-500/40 transition-all shadow-lg shadow-black/50">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span>SCROLL DOWN · EXPLODE GOOGLE LOGO</span>
            </div>
            <div className="flex flex-col items-center -space-y-2 py-0.5">
              <motion.div
                animate={{ y: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ChevronDown className="w-4 h-4 text-blue-400" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 4, 0], opacity: [0.2, 0.7, 0.2] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.25 }}
              >
                <ChevronDown className="w-4 h-4 text-indigo-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Section 2 Chevron: Guides into Section 3 (1M Context) */}
          <motion.div
            style={{
              opacity: chevron2Opacity,
              y: chevron2Y,
            }}
            className="absolute flex flex-col items-center gap-1 cursor-pointer group will-change-transform"
            onClick={() => scrollToStage(0.65)}
            title="Scroll or click to view 1M+ context engine"
          >
            <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-900/85 border border-slate-800 text-[11px] font-mono text-slate-300 group-hover:text-indigo-300 group-hover:border-indigo-500/40 transition-all shadow-lg shadow-black/50">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span>CONTINUE SCROLL · REVEAL 1M+ CONTEXT</span>
            </div>
            <div className="flex flex-col items-center -space-y-2 py-0.5">
              <motion.div
                animate={{ y: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ChevronDown className="w-4 h-4 text-indigo-400" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 4, 0], opacity: [0.2, 0.7, 0.2] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.25 }}
              >
                <ChevronDown className="w-4 h-4 text-cyan-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Section 3 Chevron: Guides into Section 4 (Masterclass Stage) */}
          <motion.div
            style={{
              opacity: chevron3Opacity,
              y: chevron3Y,
            }}
            className="absolute flex flex-col items-center gap-1 cursor-pointer group will-change-transform"
            onClick={() => scrollToStage(0.90)}
            title="Scroll or click to enter keynote stage"
          >
            <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-900/85 border border-slate-800 text-[11px] font-mono text-slate-300 group-hover:text-cyan-300 group-hover:border-cyan-500/40 transition-all shadow-lg shadow-black/50">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>CONTINUE SCROLL · ENTER KEYNOTE STAGE</span>
            </div>
            <div className="flex flex-col items-center -space-y-2 py-0.5">
              <motion.div
                animate={{ y: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ChevronDown className="w-4 h-4 text-cyan-400" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 4, 0], opacity: [0.2, 0.7, 0.2] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.25 }}
              >
                <ChevronDown className="w-4 h-4 text-rose-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Section 4 Chevron: Guides smoothly into Speakers Section */}
          <motion.div
            style={{
              opacity: chevron4Opacity,
              y: chevron4Y,
            }}
            className="absolute flex flex-col items-center gap-1 cursor-pointer group will-change-transform"
            onClick={handleScrollToSpeakers}
            title="Scroll down to view speakers & event timeline"
          >
            <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-900/85 border border-slate-800 text-[11px] font-mono text-slate-300 group-hover:text-rose-300 group-hover:border-rose-500/40 transition-all shadow-lg shadow-black/50">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
              <span>SCROLL TO SPEAKERS & AGENDA</span>
            </div>
            <div className="flex flex-col items-center -space-y-2 py-0.5">
              <motion.div
                animate={{ y: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ChevronDown className="w-4 h-4 text-rose-400" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 4, 0], opacity: [0.2, 0.7, 0.2] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.25 }}
              >
                <ChevronDown className="w-4 h-4 text-blue-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM TIMELINE SCRUBBER BAR (Interactive Checkpoints) */}
        <div className="w-full max-w-md mx-auto flex flex-col items-center gap-2 z-30 pb-1">
          <div className="w-full h-1 bg-slate-800/80 rounded-full overflow-hidden">
            <motion.div
              style={{ width: progressPercent }}
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-rose-500 will-change-transform"
            />
          </div>

          <div className="w-full flex items-center justify-between text-[10px] font-mono text-slate-400">
            <button
              onClick={() => scrollToStage(0.0)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              01 UNIFIED
            </button>
            <button
              onClick={() => scrollToStage(0.36)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              02 EXPLODED
            </button>
            <button
              onClick={() => scrollToStage(0.65)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              03 1M CONTEXT
            </button>
            <button
              onClick={() => scrollToStage(0.90)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              04 MASTERCLASS
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
