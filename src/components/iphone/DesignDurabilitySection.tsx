import React, { useState } from 'react';
import { Droplet, Battery, Sparkles, Shield, Compass, Waves } from 'lucide-react';

export const DesignDurabilitySection: React.FC = () => {
  const [isWaterActive, setIsWaterActive] = useState(false);

  return (
    <section className="py-24 bg-[#050608] text-white border-t border-neutral-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#86868B] mb-2">
            Design & Durability
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-[#F5F5F7]">
            Obsession is in our nature.
          </h2>
          <p className="mt-4 text-base text-[#86868B] leading-relaxed">
            Milled from a single sheet of glass. Sculpted with atomic precision. Reinforced with
            surgical-grade stainless steel.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Water Resistance Interactive Test */}
          <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between relative overflow-hidden group">
            {/* Water animation overlay */}
            <div
              className={`absolute inset-0 bg-blue-900/20 backdrop-blur-[1px] transition-opacity duration-500 pointer-events-none flex items-center justify-center ${
                isWaterActive ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="text-center text-blue-300 font-mono text-xs">
                <Waves className="w-8 h-8 mx-auto mb-2 animate-bounce" />
                <span>4 METERS SUBMERSION TEST · IP68 CERTIFIED</span>
              </div>
            </div>

            <div>
              <div className="w-10 h-10 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-4">
                <Droplet className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider">
                Water Resistance
              </span>
              <h3 className="text-2xl font-bold font-display text-white mt-1">
                Holds its breath up to 4 meters for 30 minutes.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                The most water-resistant iPhone ever. Rated IP68 under IEC standard 60529 — double
                the depth rating of iPhone XS. And it’s spill-resistant against everyday liquids like
                coffee, tea, and soda.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-xs text-neutral-500">Submersion Simulation</span>
              <button
                onClick={() => setIsWaterActive(!isWaterActive)}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/40 transition-colors cursor-pointer"
              >
                {isWaterActive ? 'Surface Phone' : 'Submerge 4m Water'}
              </button>
            </div>
          </div>

          {/* Card 2: Battery Life & Fast Charging */}
          <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4">
                <Battery className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                Battery Breakthrough
              </span>
              <h3 className="text-2xl font-bold font-display text-white mt-1">
                Up to 5 more hours of battery life.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                Our most dramatic leap in battery life ever. Up to 4 hours more in iPhone 11 Pro, and
                up to 5 hours more in iPhone 11 Pro Max. Plus, fast-charge capable with the included
                18W USB-C Power Adapter.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-neutral-800 grid grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <span className="text-neutral-500 block text-[10px]">INCLUDED CHARGER</span>
                <strong className="text-white text-sm">18W Fast Adapter</strong>
              </div>
              <div>
                <span className="text-neutral-500 block text-[10px]">SPEED</span>
                <strong className="text-emerald-400 text-sm">50% in 30 mins</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Precision Matte Glass Note */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border border-neutral-800 text-center">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-1">
            MATERIAL INNOVATION
          </div>
          <h4 className="text-xl sm:text-2xl font-bold font-display text-white">
            Dual-Ion Exchange Glass & Surgical Stainless Steel
          </h4>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-xl mx-auto leading-relaxed">
            The toughest glass in a smartphone, front and back. The textured matte finish is milled
            from a single glass pane using dual-ion exchange process for maximum molecular strength.
          </p>
        </div>
      </div>
    </section>
  );
};
