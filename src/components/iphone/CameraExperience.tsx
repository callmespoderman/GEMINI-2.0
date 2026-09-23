import React, { useState } from 'react';
import { CAMERA_LENSES } from '../../data/iphoneData';
import { CameraLensId } from '../../types/iphone';
import { Camera, Moon, Sun, Sliders, Aperture, Video, Sparkles } from 'lucide-react';

export const CameraExperience: React.FC = () => {
  const [selectedLens, setSelectedLens] = useState<CameraLensId>('wide');
  const [nightModeSlider, setNightModeSlider] = useState<number>(65); // 0 to 100

  const activeLens = CAMERA_LENSES.find((l) => l.id === selectedLens) || CAMERA_LENSES[1];

  // Optical zoom scale multiplier for viewfinder simulation
  let zoomScale = 1;
  if (selectedLens === 'ultra-wide') zoomScale = 0.65;
  if (selectedLens === 'wide') zoomScale = 1;
  if (selectedLens === 'telephoto') zoomScale = 1.6;

  return (
    <section id="camera" className="py-24 bg-[#0A0A0C] text-white border-t border-neutral-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#86868B] mb-2">
            Pro Camera System
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-[#F5F5F7]">
            Three cameras that feel like one.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#86868B] leading-relaxed">
            Meet the first triple-camera system to combine cutting-edge technology with the legendary
            simplicity of iPhone. Capture up to four times more scene. Get beautiful images in
            drastically lower light. And shoot the highest-quality video in a smartphone.
          </p>
        </div>

        {/* Interactive Lens Switcher & Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left Controls: 3 Lenses */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-semibold text-[#86868B] uppercase tracking-wider mb-2">
              Select a Camera to Preview
            </div>

            {CAMERA_LENSES.map((lens) => {
              const isSelected = selectedLens === lens.id;
              return (
                <button
                  key={lens.id}
                  onClick={() => setSelectedLens(lens.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-neutral-900 border-[#0071E3] shadow-lg shadow-blue-500/10'
                      : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                          isSelected ? 'bg-[#0071E3] text-white' : 'bg-neutral-800 text-neutral-400'
                        }`}
                      >
                        {lens.zoomFactor}
                      </span>
                      <strong className="text-white text-base font-display">{lens.name}</strong>
                    </div>
                    <span className="text-xs text-[#86868B] font-mono">{lens.focalLength}</span>
                  </div>

                  <div className="mt-2 text-xs text-[#86868B] flex items-center gap-3">
                    <span>{lens.aperture}</span>
                    <span>•</span>
                    <span>{lens.fieldOfView}</span>
                  </div>

                  <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                    {lens.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Viewport: Live Simulated Camera Viewfinder */}
          <div className="lg:col-span-8">
            <div className="relative rounded-3xl bg-black border-4 border-neutral-800 overflow-hidden shadow-2xl">
              {/* Top Viewfinder Bar */}
              <div className="bg-black/80 px-5 py-3 flex items-center justify-between text-xs text-[#86868B] border-b border-neutral-900 z-20 relative">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                  <span className="text-white font-mono font-semibold">4K · 60 FPS</span>
                  <span className="text-neutral-500">EXTENDED DYNAMIC RANGE</span>
                </div>
                <div className="text-neutral-400 font-mono">
                  {activeLens.focalLength} · {activeLens.aperture}
                </div>
              </div>

              {/* Viewfinder Canvas with Animated Zoom */}
              <div className="relative h-[360px] sm:h-[460px] overflow-hidden bg-neutral-950 flex items-center justify-center">
                {/* Background Image that scales smoothly with zoom factor */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out"
                  style={{
                    backgroundImage: `url(${activeLens.sampleImage})`,
                    transform: `scale(${zoomScale})`,
                  }}
                >
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/60 pointer-events-none" />
                </div>

                {/* Focus Reticle Center */}
                <div className="relative z-10 w-16 h-16 border-2 border-yellow-400/80 rounded-md pointer-events-none flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-yellow-400/80 rounded-full" />
                </div>

                {/* Field-of-view HUD overlay */}
                <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs font-mono border border-white/10 flex items-center gap-2">
                  <Aperture className="w-3.5 h-3.5 text-yellow-400" />
                  <span>{activeLens.fieldOfView}</span>
                </div>
              </div>

              {/* Bottom Camera Dial & Shutter */}
              <div className="bg-black px-6 py-4 flex items-center justify-between border-t border-neutral-900">
                {/* Lens Zoom Indicator Buttons */}
                <div className="flex items-center gap-2 bg-neutral-900/90 p-1 rounded-full border border-neutral-800">
                  {(['ultra-wide', 'wide', 'telephoto'] as CameraLensId[]).map((id) => {
                    const l = CAMERA_LENSES.find((x) => x.id === id)!;
                    const isSelected = selectedLens === id;
                    return (
                      <button
                        key={id}
                        onClick={() => setSelectedLens(id)}
                        className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-yellow-400 text-black shadow'
                            : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        {l.zoomFactor}
                      </button>
                    );
                  })}
                </div>

                {/* Shutter Button Mock */}
                <div className="w-14 h-14 rounded-full border-4 border-white flex items-center justify-center p-1">
                  <div className="w-full h-full rounded-full bg-white active:scale-95 transition-transform" />
                </div>

                {/* Mode Label */}
                <div className="text-xs font-mono text-yellow-400 uppercase tracking-wider font-semibold">
                  PHOTO
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Night Mode Interactive Comparison Slider */}
        <div className="mt-20 p-6 sm:p-10 rounded-3xl bg-neutral-950 border border-neutral-800">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-yellow-400 uppercase tracking-wider mb-2">
              <Moon className="w-4 h-4" />
              <span>Night Mode · Computational Photography</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold font-display text-white">
              High tech meets low light.
            </h3>
            <p className="mt-2 text-sm text-[#86868B] leading-relaxed">
              From candlelit restaurants to moonlit beaches, the new Night mode uses intelligent
              software and A13 Bionic to deliver low‑light shots never before possible on iPhone. And
              it all happens automatically.
            </p>
          </div>

          {/* Interactive Split Comparison Viewport */}
          <div className="relative h-[320px] sm:h-[420px] rounded-2xl overflow-hidden select-none border border-neutral-800">
            {/* Base layer: Night Mode ON (Crisp, warm, computational light) */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=80)',
                filter: 'brightness(1.25) contrast(1.1) saturate(1.15)',
              }}
            >
              <span className="absolute top-4 right-4 px-3 py-1 rounded bg-black/70 backdrop-blur-md text-yellow-400 text-xs font-mono border border-yellow-400/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Night Mode ON</span>
              </span>
            </div>

            {/* Clipped top layer: Standard / Night Mode OFF (Dark, underexposed) */}
            <div
              className="absolute inset-0 bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=80)',
                filter: 'brightness(0.35) contrast(0.9) saturate(0.6)',
                clipPath: `polygon(0 0, ${nightModeSlider}% 0, ${nightModeSlider}% 100%, 0 100%)`,
              }}
            >
              <span className="absolute top-4 left-4 px-3 py-1 rounded bg-black/70 backdrop-blur-md text-neutral-400 text-xs font-mono border border-white/10">
                Without Night Mode
              </span>
            </div>

            {/* Slider Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] pointer-events-none"
              style={{ left: `${nightModeSlider}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-2xl font-bold text-xs">
                ⇄
              </div>
            </div>

            {/* Invisible Range Input for Dragging */}
            <input
              type="range"
              min="0"
              max="100"
              value={nightModeSlider}
              onChange={(e) => setNightModeSlider(Number(e.target.value))}
              className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
              aria-label="Night Mode before and after slider"
            />
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-[#86868B]">
            <span>Drag the slider to compare low-light performance</span>
            <span className="text-yellow-400 font-mono font-semibold">
              Exposure Enhancement: {nightModeSlider}%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
