import React, { useState } from 'react';
import { Sun, Sparkles, Smartphone, Eye, Zap } from 'lucide-react';

export const DisplayExperience: React.FC = () => {
  const [activeModel, setActiveModel] = useState<'pro' | 'max'>('pro');
  const [brightness, setBrightness] = useState<number>(1000); // 800 to 1200 nits

  return (
    <section id="display" className="py-24 bg-[#000000] text-white border-t border-neutral-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#86868B] mb-2">
            Super Retina XDR
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-[#F5F5F7]">
            Pro display. A contrast in everything else.
          </h2>
          <p className="mt-4 text-base text-[#86868B] leading-relaxed">
            The Super Retina XDR display boasts not one but two new record levels of brightness and
            understands when to use them. It hits up to 800 nits when you’re out in the sun and up to
            1,200 nits when you’re viewing extreme dynamic range content.
          </p>
        </div>

        {/* Model Switcher Buttons */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveModel('pro')}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeModel === 'pro'
                ? 'bg-[#0071E3] text-white shadow-md shadow-blue-500/20'
                : 'bg-neutral-900 text-neutral-400 hover:text-white'
            }`}
          >
            iPhone 11 Pro (5.8″)
          </button>
          <button
            onClick={() => setActiveModel('max')}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeModel === 'max'
                ? 'bg-[#0071E3] text-white shadow-md shadow-blue-500/20'
                : 'bg-neutral-900 text-neutral-400 hover:text-white'
            }`}
          >
            iPhone 11 Pro Max (6.5″)
          </button>
        </div>

        {/* Interactive Display Canvas Mockup */}
        <div className="relative rounded-3xl bg-neutral-950 border border-neutral-800 p-6 sm:p-10 flex flex-col items-center shadow-2xl overflow-hidden">
          {/* Ambient Screen Glow depending on brightness slider */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] pointer-events-none transition-opacity duration-300"
            style={{
              width: activeModel === 'max' ? '460px' : '380px',
              height: activeModel === 'max' ? '460px' : '380px',
              backgroundColor: '#38BDF8',
              opacity: (brightness - 700) / 700,
            }}
          />

          {/* Screen Bezel */}
          <div
            className={`relative rounded-[48px] bg-black border-[8px] border-neutral-800 p-2.5 transition-all duration-500 shadow-2xl ${
              activeModel === 'max'
                ? 'w-[300px] sm:w-[340px] h-[580px] sm:h-[640px]'
                : 'w-[270px] sm:w-[300px] h-[520px] sm:h-[580px]'
            }`}
          >
            {/* OLED Display Area */}
            <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-black flex flex-col justify-between p-4">
              {/* Wallpaper Image with dynamic brightness filter */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-300"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80)',
                  filter: `brightness(${brightness / 900}) contrast(1.1)`,
                }}
              />

              {/* Notch */}
              <div className="relative z-20 self-center w-32 h-5 bg-black rounded-b-xl flex items-center justify-center space-x-2">
                <div className="w-8 h-1 bg-neutral-800 rounded-full" />
                <div className="w-2 h-2 bg-neutral-900 rounded-full" />
              </div>

              {/* In-Screen Spec Overlay */}
              <div className="relative z-20 bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center mx-2 mb-2">
                <div className="text-[11px] font-mono text-[#2997FF] uppercase tracking-wider font-semibold">
                  {activeModel === 'pro' ? '5.8-inch Super Retina XDR' : '6.5-inch Super Retina XDR'}
                </div>
                <div className="text-xl font-bold font-display text-white mt-0.5">
                  {brightness} Nits Peak
                </div>
                <div className="text-[10px] text-neutral-400 mt-1">
                  2,000,000:1 Contrast Ratio · P3 Wide Color · True Tone
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Brightness Slider Control */}
          <div className="mt-8 w-full max-w-md bg-neutral-900/80 backdrop-blur-md p-4 rounded-2xl border border-neutral-800 z-10">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="flex items-center gap-1.5 text-neutral-300 font-medium">
                <Sun className="w-4 h-4 text-amber-400" />
                <span>Simulate XDR Peak Brightness</span>
              </span>
              <span className="font-mono text-amber-400 font-bold">{brightness} nits</span>
            </div>

            <input
              type="range"
              min="800"
              max="1200"
              step="20"
              value={brightness}
              onChange={(e) => setBrightness(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer"
            />

            <div className="flex items-center justify-between text-[10px] text-neutral-500 font-mono mt-2">
              <span>800 nits (Sunlight)</span>
              <span>1,000 nits</span>
              <span>1,200 nits (HDR Video)</span>
            </div>
          </div>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-xs">
          <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-900">
            <div className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-3">
              <Sun className="w-4 h-4" />
            </div>
            <strong className="text-white text-sm block mb-1">Up to 800 nits in the sun</strong>
            <p className="text-neutral-400 leading-relaxed">
              Great for snapping photos and doing real work on the go in direct outdoor daylight.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-900">
            <div className="w-8 h-8 rounded-xl bg-amber-600/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-3">
              <Sparkles className="w-4 h-4" />
            </div>
            <strong className="text-white text-sm block mb-1">Up to 1,200 nits for HDR</strong>
            <p className="text-neutral-400 leading-relaxed">
              Like having a Pro Display XDR workstation monitor right in the palm of your hand.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-900">
            <div className="w-8 h-8 rounded-xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-3">
              <Zap className="w-4 h-4" />
            </div>
            <strong className="text-white text-sm block mb-1">15% More Power Efficient</strong>
            <p className="text-neutral-400 leading-relaxed">
              Custom OLED circuitry tailored to deliver massive battery life gains on both models.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
