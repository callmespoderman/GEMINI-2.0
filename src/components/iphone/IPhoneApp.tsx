import React, { useState } from 'react';
import { IPhoneColor } from '../../types/iphone';
import { AppleGlobalNav } from './AppleGlobalNav';
import { IPhoneSubNav } from './IPhoneSubNav';
import { IPhoneHero } from './IPhoneHero';
import { CameraExperience } from './CameraExperience';
import { DisplayExperience } from './DisplayExperience';
import { A13BionicSection } from './A13BionicSection';
import { DesignDurabilitySection } from './DesignDurabilitySection';
import { BuyModal } from './BuyModal';
import { TechSpecsModal } from './TechSpecsModal';
import { AppleFooter } from './AppleFooter';
import { ShoppingBag, X, Check, ArrowRight } from 'lucide-react';

interface IPhoneAppProps {
  onSwitchToMasterclass?: () => void;
}

export const IPhoneApp: React.FC<IPhoneAppProps> = ({ onSwitchToMasterclass }) => {
  const [selectedColor, setSelectedColor] = useState<IPhoneColor>('midnight-green');
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [isSpecsModalOpen, setIsSpecsModalOpen] = useState(false);
  const [bagItems, setBagItems] = useState<
    Array<{ model: string; finish: string; storage: string; price: number; monthlyPrice: number }>
  >([]);
  const [isBagOpen, setIsBagOpen] = useState(false);

  const handleAddToBag = (order: {
    model: string;
    finish: string;
    storage: string;
    price: number;
    monthlyPrice: number;
  }) => {
    setBagItems((prev) => [order, ...prev]);
    setIsBagOpen(true);
  };

  const totalBagPrice = bagItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-black text-[#F5F5F7] font-sans selection:bg-[#0071E3] selection:text-white flex flex-col">
      {/* Top Banner with Webflow Showcase Homage & Switcher */}
      <div className="bg-[#1D1D1F] border-b border-white/10 px-4 py-2 text-center text-xs text-[#86868B] flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
          <span className="text-[#F5F5F7] font-medium">
            Made in Webflow Showcase: iPhone 11 Pro Website
          </span>
          <span className="hidden md:inline text-neutral-500">·</span>
          <span className="hidden md:inline">
            Faithfully recreated with interactive 3D perspective, triple camera viewfinder, and XDR display
          </span>
        </div>

        {onSwitchToMasterclass && (
          <button
            onClick={onSwitchToMasterclass}
            className="mx-auto sm:mx-0 px-3 py-1 rounded-full bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/40 text-[11px] font-medium transition-colors cursor-pointer"
          >
            ← Switch to Gemini Masterclass & Parallax Lab
          </button>
        )}
      </div>

      {/* Apple Global Nav */}
      <AppleGlobalNav
        onOpenBag={() => setIsBagOpen(true)}
        cartCount={bagItems.length}
      />

      {/* Sticky iPhone 11 Pro SubNav */}
      <IPhoneSubNav
        onOpenBuy={() => setIsBuyModalOpen(true)}
        onOpenSpecs={() => setIsSpecsModalOpen(true)}
      />

      {/* Main Product Showcase Sections */}
      <main className="flex-1">
        <IPhoneHero
          selectedColor={selectedColor}
          onColorChange={setSelectedColor}
          onOpenBuy={() => setIsBuyModalOpen(true)}
        />

        <CameraExperience />

        <DisplayExperience />

        <A13BionicSection />

        <DesignDurabilitySection />
      </main>

      {/* Apple Footer */}
      <AppleFooter />

      {/* Buy Configurator Modal */}
      <BuyModal
        isOpen={isBuyModalOpen}
        onClose={() => setIsBuyModalOpen(false)}
        selectedColor={selectedColor}
        onColorChange={setSelectedColor}
        onAddToBag={handleAddToBag}
      />

      {/* Tech Specs Modal */}
      <TechSpecsModal
        isOpen={isSpecsModalOpen}
        onClose={() => setIsSpecsModalOpen(false)}
      />

      {/* Apple Bag Slide-Over Drawer */}
      {isBagOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-md h-full bg-[#161618] border-l border-neutral-800 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div className="flex items-center gap-2 font-display text-lg font-bold text-white">
                  <ShoppingBag className="w-5 h-5 text-[#2997FF]" />
                  <span>Review Your Apple Bag</span>
                </div>
                <button
                  onClick={() => setIsBagOpen(false)}
                  className="p-1 rounded-lg text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {bagItems.length === 0 ? (
                <div className="py-16 text-center text-xs text-neutral-400">
                  Your Apple Bag is currently empty.
                </div>
              ) : (
                <div className="mt-6 space-y-4">
                  {bagItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-start justify-between gap-4"
                    >
                      <div>
                        <strong className="text-white text-sm block font-display">
                          {item.model}
                        </strong>
                        <span className="text-xs text-neutral-400 block">
                          Finish: {item.finish} · {item.storage}
                        </span>
                        <span className="text-xs text-[#2997FF] block mt-1">
                          Free standard shipping & returns
                        </span>
                      </div>
                      <div className="text-right">
                        <strong className="text-white text-sm block">${item.price}</strong>
                        <span className="text-[10px] text-neutral-500">
                          or ${item.monthlyPrice}/mo.
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {bagItems.length > 0 && (
              <div className="pt-6 border-t border-neutral-800">
                <div className="flex items-center justify-between mb-4 text-sm font-bold text-white">
                  <span>Bag Total</span>
                  <span>${totalBagPrice}</span>
                </div>
                <button
                  onClick={() => {
                    alert('Order confirmed! Simulated Apple Store checkout successful.');
                    setBagItems([]);
                    setIsBagOpen(false);
                  }}
                  className="w-full py-3.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-xs font-bold text-white shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Check Out with Apple Pay</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
