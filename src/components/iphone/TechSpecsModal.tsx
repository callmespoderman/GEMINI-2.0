import React from 'react';
import { TECH_SPECS } from '../../data/iphoneData';
import { X, CheckCircle, Sliders } from 'lucide-react';

interface TechSpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechSpecsModal: React.FC<TechSpecsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#0F1117] border border-neutral-800 shadow-2xl p-6 sm:p-8 my-8 text-white max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-8">
          <span className="text-xs font-mono text-[#86868B] uppercase tracking-wider font-semibold">
            Full Specification Sheet
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
            iPhone 11 Pro & iPhone 11 Pro Max
          </h2>
        </div>

        {/* Categories */}
        <div className="space-y-8 divide-y divide-neutral-800">
          {TECH_SPECS.map((cat, idx) => (
            <div key={idx} className={idx === 0 ? '' : 'pt-6'}>
              <h3 className="text-lg font-bold font-display text-white mb-4 text-[#2997FF]">
                {cat.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {cat.items.map((item, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-900">
                    <span className="text-[#86868B] block text-[11px] font-medium mb-1">
                      {item.label}
                    </span>
                    <strong className="text-white font-normal leading-relaxed">{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-xs font-semibold text-white cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
