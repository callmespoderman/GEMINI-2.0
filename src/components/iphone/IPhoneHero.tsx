import React, { useState, useRef } from 'react';
import { IPhoneColor } from '../../types/iphone';
import { IPHONE_COLORS } from '../../data/iphoneData';
import { Play, RotateCw, Sparkles, Check, ChevronRight } from 'lucide-react';

interface IPhoneHeroProps {
  onOpenBuy: () => void;
  selectedColor: IPhoneColor;
  onColorChange: (color: IPhoneColor) => void;
}

export const IPhoneHero: React.FC<IPhoneHeroProps> = ({
  onOpenBuy,
  selectedColor,
  onColorChange,
}) => {
  const [viewAngle, setViewAngle] = useState<'back' | 'angle' | 'front'>('angle');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const activeColor = IPHONE_COLORS.find((c) => c.id === selectedColor) || IPHONE_COLORS[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Dynamic 3D transform based on angle + mouse tilt
  let baseRotateY = 0;
  let baseRotateX = 10;
  if (viewAngle === 'angle') {
    baseRotateY = -24 + mousePos.x * 12;
    baseRotateX = 8 + mousePos.y * -8;
  } else if (viewAngle === 'back') {
    baseRotateY = 0 + mousePos.x * 10;
    baseRotateX = mousePos.y * -8;
  } else if (viewAngle === 'front') {
    baseRotateY = 180 + mousePos.x * 10;
    baseRotateX = mousePos.y * -8;
  }

  return (
    <section
      id="overview"
      className="relative min-h-[92vh] bg-[#000000] text-white pt-12 pb-24 overflow-hidden flex flex-col justify-between"
    >
      {/* Top Ambient Glow matching active finish */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: activeColor.hex }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center z-10">
        {/* Apple Headline */}
        <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#86868B] mb-2">
          iPhone 11 Pro
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display tracking-tight text-[#F5F5F7]">
          And then there was Pro.
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#86868B] max-w-2xl mx-auto font-normal leading-relaxed">
          A transformative triple‑camera system that adds tons of capability without complexity.
          An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on
          machine learning.
        </p>

        {/* Pricing & CTA Line */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
          <span className="text-[#A1A1A6]">
            From $24.95/mo. or $599 with trade-in.*
          </span>
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="text-[#2997FF] hover:underline flex items-center gap-1 font-medium cursor-pointer"
          >
            <span>Watch the keynote film</span>
            <Play className="w-3.5 h-3.5 fill-current" />
          </button>
        </div>

        {/* Finish Selector Pills */}
        <div className="mt-10 flex flex-col items-center">
          <span className="text-xs text-[#86868B] mb-3">
            Finish: <strong className="text-white font-medium">{activeColor.name}</strong>
          </span>

          <div className="flex items-center gap-3 p-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] backdrop-blur-md">
            {IPHONE_COLORS.map((color) => {
              const isSelected = selectedColor === color.id;
              return (
                <button
                  key={color.id}
                  onClick={() => onColorChange(color.id)}
                  className={`relative w-8 h-8 rounded-full transition-transform active:scale-90 cursor-pointer ${
                    isSelected ? 'ring-2 ring-[#0071E3] ring-offset-2 ring-offset-black scale-110' : 'hover:scale-105'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  aria-label={color.name}
                >
                  {isSelected && (
                    <span className="absolute inset-0 flex items-center justify-center text-white text-[10px]">
                      <Check className="w-3 h-3 drop-shadow" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* View Angle Switcher */}
          <div className="mt-4 flex items-center gap-2 text-[11px] text-[#86868B]">
            <span>View:</span>
            <button
              onClick={() => setViewAngle('angle')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                viewAngle === 'angle' ? 'bg-white/20 text-white' : 'hover:text-white'
              }`}
            >
              Isometric 3D
            </button>
            <button
              onClick={() => setViewAngle('back')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                viewAngle === 'back' ? 'bg-white/20 text-white' : 'hover:text-white'
              }`}
            >
              Triple Camera Back
            </button>
            <button
              onClick={() => setViewAngle('front')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                viewAngle === 'front' ? 'bg-white/20 text-white' : 'hover:text-white'
              }`}
            >
              Super Retina Display
            </button>
          </div>
        </div>
      </div>

      {/* 3D Realistic iPhone Render Viewport */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full max-w-4xl mx-auto h-[480px] sm:h-[560px] flex items-center justify-center mt-6 perspective-[1200px]"
      >
        <div
          className="relative transition-transform duration-300 ease-out preserve-3d cursor-grab active:cursor-grabbing"
          style={{
            transform: `rotateY(${baseRotateY}deg) rotateX(${baseRotateX}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Phone Body Shell */}
          <div
            className="w-[260px] sm:w-[290px] h-[520px] sm:h-[580px] rounded-[52px] relative shadow-2xl transition-colors duration-500 overflow-hidden border-[5px]"
            style={{
              backgroundColor: activeColor.hex,
              borderColor: activeColor.edgeHex,
              boxShadow: `0 40px 100px -20px ${activeColor.hex}66, 0 20px 40px -10px rgba(0,0,0,0.9)`,
            }}
          >
            {/* Matte Glass Texture Glare */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-black/40 pointer-events-none" />
            <div className="absolute -inset-full bg-gradient-to-br from-white/15 to-transparent rotate-45 pointer-events-none opacity-40" />

            {viewAngle !== 'front' ? (
              /* Back Plate: Iconic Triple Camera Housing & Apple Logo */
              <div className="absolute inset-0 flex flex-col justify-between p-7">
                {/* Triple Camera Plateau */}
                <div
                  className="w-[120px] h-[120px] rounded-[36px] p-2.5 shadow-xl relative border border-white/10 backdrop-blur-md"
                  style={{
                    backgroundColor: activeColor.accentHex,
                  }}
                >
                  {/* Specular glare on camera glass */}
                  <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />

                  {/* 3 Camera Lenses arranged in Apple's iconic triangle */}
                  {/* Top-Left Lens: Wide 26mm */}
                  <div className="absolute top-3 left-3 w-11 h-11 rounded-full bg-[#111] border-[3px] border-black/80 flex items-center justify-center shadow-inner group">
                    <div className="w-8 h-8 rounded-full bg-[#05070A] border border-blue-900/60 relative flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-blue-950/80 ring-1 ring-blue-500/30" />
                      <div className="absolute w-1.5 h-1.5 rounded-full bg-white/40 top-1.5 right-1.5" />
                    </div>
                  </div>

                  {/* Bottom-Left Lens: Ultra Wide 13mm */}
                  <div className="absolute bottom-3 left-3 w-11 h-11 rounded-full bg-[#111] border-[3px] border-black/80 flex items-center justify-center shadow-inner">
                    <div className="w-8 h-8 rounded-full bg-[#05070A] border border-emerald-900/60 relative flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-emerald-950/80 ring-1 ring-emerald-500/30" />
                      <div className="absolute w-1.5 h-1.5 rounded-full bg-white/40 top-1.5 right-1.5" />
                    </div>
                  </div>

                  {/* Right-Middle Lens: Telephoto 52mm */}
                  <div className="absolute top-1/2 -translate-y-1/2 right-3 w-11 h-11 rounded-full bg-[#111] border-[3px] border-black/80 flex items-center justify-center shadow-inner">
                    <div className="w-8 h-8 rounded-full bg-[#05070A] border border-purple-900/60 relative flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-purple-950/80 ring-1 ring-purple-500/30" />
                      <div className="absolute w-1.5 h-1.5 rounded-full bg-white/40 top-1.5 right-1.5" />
                    </div>
                  </div>

                  {/* True Tone Flash */}
                  <div className="absolute top-3.5 right-4 w-4 h-4 rounded-full bg-amber-100 border border-amber-300 shadow-sm" />

                  {/* Rear Microphone pinhole */}
                  <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-black/90" />
                </div>

                {/* Mirrored Apple Logo in Exact Center */}
                <div className="self-center my-auto opacity-70">
                  <svg
                    className="w-10 h-12 fill-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                    viewBox="0 0 170 170"
                  >
                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.7-7.83-12-14.37-6.06-9.13-10.9-19.34-14.53-30.64-3.62-11.3-5.44-22.31-5.44-33.04 0-14.63 3.65-26.69 10.96-36.17 7.3-9.48 16.5-14.28 27.59-14.42 4.9.12 10.23 1.34 16.01 3.67 5.77 2.33 9.47 3.63 11.09 3.9 2.58-.6 6.56-2.03 11.95-4.29 5.39-2.26 10.15-3.28 14.27-3.07 10.88.54 19.82 4.47 26.83 11.79-9.58 5.77-14.26 13.88-14.04 24.33.22 8.27 3.44 15.25 9.68 20.93 6.24 5.69 13.78 9.07 22.62 10.14-2.17 6.42-4.8 12.87-7.89 19.35zM119.22 31.84c0-6.19 2.29-12.38 6.87-18.57 4.58-6.19 10.37-10.61 17.37-13.27.32 1.3.49 2.6.49 3.9 0 6.3-2.39 12.63-7.17 19-4.78 6.36-10.74 10.66-17.89 12.89-.33-1.3-.49-2.6-.49-3.95z" />
                  </svg>
                </div>

                {/* Regulatory text clean space */}
                <div className="h-6" />
              </div>
            ) : (
              /* Front View: Super Retina XDR Display with Notch & Wallpaper */
              <div className="absolute inset-0 bg-[#000] p-3 flex flex-col justify-between overflow-hidden">
                {/* Display Screen */}
                <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-gradient-to-b from-[#1C1917] via-[#0F172A] to-[#022C22] flex flex-col justify-between p-4 text-white">
                  {/* Top Notch with TrueDepth camera */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-6 bg-black rounded-b-2xl flex items-center justify-center space-x-3">
                    <div className="w-10 h-1 bg-neutral-800 rounded-full" />
                    <div className="w-2.5 h-2.5 bg-neutral-900 rounded-full border border-neutral-700" />
                  </div>

                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[11px] font-medium px-2 pt-1">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5 text-[10px]">
                      <span>5G</span>
                      <div className="w-5 h-2.5 border border-white rounded-sm p-0.5 flex items-center">
                        <div className="w-full h-full bg-white rounded-xs" />
                      </div>
                    </div>
                  </div>

                  {/* Lock Screen Centered Artwork */}
                  <div className="text-center my-auto">
                    <div className="text-4xl font-light tracking-tight font-display">9:41</div>
                    <div className="text-xs text-white/70">Tuesday, September 23</div>
                  </div>

                  {/* Home Bar Indicator */}
                  <div className="self-center w-28 h-1 bg-white/70 rounded-full mb-1" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-neutral-800">
              <span className="text-sm font-semibold text-white">
                Apple Special Event — Introducing iPhone 11 Pro
              </span>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="text-neutral-400 hover:text-white text-xs px-2 py-1 rounded bg-neutral-800 cursor-pointer"
              >
                Close
              </button>
            </div>
            <div className="aspect-video w-full bg-neutral-950 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#0071E3] flex items-center justify-center mb-4 shadow-lg shadow-blue-500/50">
                <Play className="w-8 h-8 text-white fill-current ml-1" />
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                "And Then There Was Pro"
              </h3>
              <p className="text-xs text-neutral-400 mt-2 max-w-md">
                Experience the official cinematic unveil of the first triple-camera system, A13 Bionic, and precision-milled matte glass design.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
