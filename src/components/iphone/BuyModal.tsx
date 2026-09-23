import React, { useState } from 'react';
import { IPhoneColor, IPhoneModel, StorageCapacity } from '../../types/iphone';
import { IPHONE_COLORS } from '../../data/iphoneData';
import { X, Check, ShoppingBag, ShieldCheck, Box, CreditCard, ArrowRight } from 'lucide-react';

interface BuyModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedColor: IPhoneColor;
  onColorChange: (c: IPhoneColor) => void;
  onAddToBag: (order: {
    model: string;
    finish: string;
    storage: string;
    price: number;
    monthlyPrice: number;
  }) => void;
}

export const BuyModal: React.FC<BuyModalProps> = ({
  isOpen,
  onClose,
  selectedColor,
  onColorChange,
  onAddToBag,
}) => {
  const [model, setModel] = useState<IPhoneModel>('pro');
  const [storage, setStorage] = useState<StorageCapacity>('256GB');
  const [tradeIn, setTradeIn] = useState<'none' | 'iphone-x' | 'iphone-xs'>('none');
  const [paymentOption, setPaymentOption] = useState<'full' | 'monthly'>('monthly');
  const [isOrdered, setIsOrdered] = useState(false);

  if (!isOpen) return null;

  // Base price calculation
  let basePrice = model === 'pro' ? 999 : 1099;
  if (storage === '256GB') basePrice += 150;
  if (storage === '512GB') basePrice += 350;

  // Trade-in discount
  let tradeInCredit = 0;
  if (tradeIn === 'iphone-x') tradeInCredit = 250;
  if (tradeIn === 'iphone-xs') tradeInCredit = 400;

  const finalPrice = basePrice - tradeInCredit;
  const monthlyPrice = (finalPrice / 24).toFixed(2);

  const activeColor = IPHONE_COLORS.find((c) => c.id === selectedColor) || IPHONE_COLORS[0];

  const handleOrder = () => {
    setIsOrdered(true);
    onAddToBag({
      model: model === 'pro' ? 'iPhone 11 Pro 5.8″' : 'iPhone 11 Pro Max 6.5″',
      finish: activeColor.name,
      storage,
      price: finalPrice,
      monthlyPrice: Number(monthlyPrice),
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#111318] border border-neutral-800 shadow-2xl p-6 sm:p-8 my-8 text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {isOrdered ? (
          /* Order Confirmation View */
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8" />
            </div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
              Added to Your Apple Bag
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
              {model === 'pro' ? 'iPhone 11 Pro' : 'iPhone 11 Pro Max'} {storage}
            </h3>
            <p className="text-xs text-neutral-400 mt-2">
              Finish: {activeColor.name} · Free 2-day delivery & in-store pickup available.
            </p>

            {/* Price badge */}
            <div className="my-6 p-4 rounded-2xl bg-neutral-950 border border-neutral-800 max-w-sm mx-auto">
              <div className="text-2xl font-bold font-display text-white">${finalPrice}</div>
              <div className="text-xs text-neutral-400 mt-0.5">
                or ${monthlyPrice}/mo. for 24 mo. with 0% APR Apple Card
              </div>
              {tradeInCredit > 0 && (
                <div className="text-xs text-emerald-400 font-medium mt-1">
                  Includes ${tradeInCredit} instant Apple Trade-In credit
                </div>
              )}
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setIsOrdered(false)}
                className="px-4 py-2 rounded-full bg-neutral-800 text-xs font-semibold text-neutral-300 hover:text-white cursor-pointer"
              >
                Configure Another
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-xs font-semibold text-white shadow-md shadow-blue-500/20 cursor-pointer"
              >
                Review Bag & Checkout
              </button>
            </div>
          </div>
        ) : (
          /* Store Configurator Form */
          <div>
            <span className="text-xs font-mono text-[#86868B] uppercase tracking-wider font-semibold">
              Apple Store Online
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
              Buy iPhone 11 Pro
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              Get up to $400 with Apple Trade In. Free shipping on all orders.
            </p>

            <div className="mt-8 space-y-6">
              {/* Step 1: Model Choice */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-2">
                  1. Choose your model.
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setModel('pro')}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      model === 'pro'
                        ? 'border-[#0071E3] bg-neutral-900 ring-1 ring-[#0071E3]'
                        : 'border-neutral-800 bg-neutral-950 hover:border-neutral-700'
                    }`}
                  >
                    <strong className="text-white text-sm block">iPhone 11 Pro</strong>
                    <span className="text-xs text-neutral-400 block mt-0.5">
                      5.8-inch Super Retina XDR display
                    </span>
                    <span className="text-xs font-semibold text-[#2997FF] mt-2 block">
                      From $999 or $41.62/mo.
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setModel('pro-max')}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      model === 'pro-max'
                        ? 'border-[#0071E3] bg-neutral-900 ring-1 ring-[#0071E3]'
                        : 'border-neutral-800 bg-neutral-950 hover:border-neutral-700'
                    }`}
                  >
                    <strong className="text-white text-sm block">iPhone 11 Pro Max</strong>
                    <span className="text-xs text-neutral-400 block mt-0.5">
                      6.5-inch Super Retina XDR display
                    </span>
                    <span className="text-xs font-semibold text-[#2997FF] mt-2 block">
                      From $1,099 or $45.79/mo.
                    </span>
                  </button>
                </div>
              </div>

              {/* Step 2: Finish Choice */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-2">
                  2. Choose your finish: <span className="text-[#2997FF]">{activeColor.name}</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {IPHONE_COLORS.map((color) => {
                    const isSelected = selectedColor === color.id;
                    return (
                      <button
                        key={color.id}
                        type="button"
                        onClick={() => onColorChange(color.id)}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-2 ${
                          isSelected
                            ? 'border-[#0071E3] bg-neutral-900 ring-1 ring-[#0071E3]'
                            : 'border-neutral-800 bg-neutral-950 hover:border-neutral-700'
                        }`}
                      >
                        <span
                          className="w-6 h-6 rounded-full border border-white/20 shadow-inner"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="text-xs text-white font-medium">{color.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Storage Capacity */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-2">
                  3. Choose your capacity.
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(['64GB', '256GB', '512GB'] as StorageCapacity[]).map((cap) => {
                    const isSelected = storage === cap;
                    let capPrice = model === 'pro' ? 999 : 1099;
                    if (cap === '256GB') capPrice += 150;
                    if (cap === '512GB') capPrice += 350;
                    return (
                      <button
                        key={cap}
                        type="button"
                        onClick={() => setStorage(cap)}
                        className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#0071E3] bg-neutral-900 ring-1 ring-[#0071E3]'
                            : 'border-neutral-800 bg-neutral-950 hover:border-neutral-700'
                        }`}
                      >
                        <span className="text-sm font-bold text-white block">{cap}</span>
                        <span className="text-[11px] text-neutral-400 mt-0.5 block">${capPrice}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Apple Trade In */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-2">
                  4. Apple Trade In (Optional)
                </label>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <button
                    type="button"
                    onClick={() => setTradeIn('none')}
                    className={`p-3 rounded-xl border transition-all cursor-pointer text-center ${
                      tradeIn === 'none'
                        ? 'border-[#0071E3] bg-neutral-900'
                        : 'border-neutral-800 bg-neutral-950'
                    }`}
                  >
                    No trade-in
                  </button>
                  <button
                    type="button"
                    onClick={() => setTradeIn('iphone-x')}
                    className={`p-3 rounded-xl border transition-all cursor-pointer text-center ${
                      tradeIn === 'iphone-x'
                        ? 'border-[#0071E3] bg-neutral-900'
                        : 'border-neutral-800 bg-neutral-950'
                    }`}
                  >
                    Trade iPhone X (-$250)
                  </button>
                  <button
                    type="button"
                    onClick={() => setTradeIn('iphone-xs')}
                    className={`p-3 rounded-xl border transition-all cursor-pointer text-center ${
                      tradeIn === 'iphone-xs'
                        ? 'border-[#0071E3] bg-neutral-900'
                        : 'border-neutral-800 bg-neutral-950'
                    }`}
                  >
                    Trade iPhone XS (-$400)
                  </button>
                </div>
              </div>

              {/* Bottom Summary Bar */}
              <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-2xl font-bold font-display text-white">${finalPrice}</div>
                  <div className="text-xs text-neutral-400">
                    or ${monthlyPrice}/mo. for 24 mo. at 0% APR
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleOrder}
                    className="flex-1 sm:flex-initial px-8 py-3 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-xs font-bold text-white shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
