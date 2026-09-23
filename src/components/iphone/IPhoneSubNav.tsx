import React from 'react';

interface IPhoneSubNavProps {
  onOpenBuy: () => void;
  onOpenSpecs: () => void;
}

export const IPhoneSubNav: React.FC<IPhoneSubNavProps> = ({ onOpenBuy, onOpenSpecs }) => {
  return (
    <div className="sticky top-11 z-40 w-full bg-[#000000]/80 backdrop-blur-md border-b border-white/[0.08] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">
        {/* Product Brand */}
        <div className="flex items-baseline space-x-3">
          <a href="#" className="font-semibold text-lg sm:text-xl tracking-tight font-display">
            iPhone 11 Pro
          </a>
        </div>

        {/* Section Links & Buy CTA */}
        <div className="flex items-center space-x-4 sm:space-x-6 text-xs text-[#86868B]">
          <nav className="hidden sm:flex items-center space-x-5">
            <a href="#overview" className="text-white hover:text-white transition-colors">
              Overview
            </a>
            <a href="#camera" className="hover:text-white transition-colors">
              Camera
            </a>
            <a href="#display" className="hover:text-white transition-colors">
              Display
            </a>
            <a href="#chip" className="hover:text-white transition-colors">
              A13 Bionic
            </a>
            <button
              onClick={onOpenSpecs}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Tech Specs
            </button>
          </nav>

          <span className="hidden md:inline text-[11px] text-[#A1A1A6]">
            From $999 or $41.62/mo.
          </span>

          <button
            onClick={onOpenBuy}
            className="px-3 py-1 sm:px-3.5 sm:py-1 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium text-xs transition-all active:scale-[0.98] cursor-pointer shadow-sm shadow-blue-500/30"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};
