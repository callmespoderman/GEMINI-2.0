import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

interface AppleGlobalNavProps {
  onOpenBag?: () => void;
  cartCount?: number;
}

export const AppleGlobalNav: React.FC<AppleGlobalNavProps> = ({ onOpenBag, cartCount = 0 }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    'Store',
    'Mac',
    'iPad',
    'iPhone',
    'Watch',
    'AirPods',
    'TV & Home',
    'Entertainment',
    'Accessories',
    'Support',
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#000000]/85 backdrop-blur-xl border-b border-white/[0.08] text-[#F5F5F7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-11 flex items-center justify-between text-xs tracking-tight">
        {/* Apple Logo */}
        <a
          href="#"
          className="opacity-80 hover:opacity-100 transition-opacity flex items-center cursor-pointer"
          aria-label="Apple"
        >
          <svg className="w-3.5 h-4.5 fill-current" viewBox="0 0 170 170">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.7-7.83-12-14.37-6.06-9.13-10.9-19.34-14.53-30.64-3.62-11.3-5.44-22.31-5.44-33.04 0-14.63 3.65-26.69 10.96-36.17 7.3-9.48 16.5-14.28 27.59-14.42 4.9.12 10.23 1.34 16.01 3.67 5.77 2.33 9.47 3.63 11.09 3.9 2.58-.6 6.56-2.03 11.95-4.29 5.39-2.26 10.15-3.28 14.27-3.07 10.88.54 19.82 4.47 26.83 11.79-9.58 5.77-14.26 13.88-14.04 24.33.22 8.27 3.44 15.25 9.68 20.93 6.24 5.69 13.78 9.07 22.62 10.14-2.17 6.42-4.8 12.87-7.89 19.35zM119.22 31.84c0-6.19 2.29-12.38 6.87-18.57 4.58-6.19 10.37-10.61 17.37-13.27.32 1.3.49 2.6.49 3.9 0 6.3-2.39 12.63-7.17 19-4.78 6.36-10.74 10.66-17.89 12.89-.33-1.3-.49-2.6-.49-3.95z" />
          </svg>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-7 text-[#D6D6D6] font-normal">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Action Icons */}
        <div className="flex items-center space-x-5 text-[#D6D6D6]">
          <button
            className="hover:text-white transition-colors cursor-pointer"
            aria-label="Search apple.com"
          >
            <Search className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onOpenBag}
            className="hover:text-white transition-colors relative cursor-pointer"
            aria-label="Shopping Bag"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#0071E3] text-white text-[9px] flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden hover:text-white transition-colors cursor-pointer"
            aria-label="Menu"
          >
            {isMobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileOpen && (
        <div className="md:hidden bg-[#000000] px-6 py-6 border-t border-white/10 space-y-4 text-base font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setIsMobileOpen(false)}
              className="block text-slate-300 hover:text-white py-1"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
