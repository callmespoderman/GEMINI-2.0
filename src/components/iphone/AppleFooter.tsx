import React from 'react';

export const AppleFooter: React.FC = () => {
  return (
    <footer className="bg-[#0D0D11] text-[#86868B] text-[11px] py-12 border-t border-neutral-900 leading-relaxed">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Footnotes List */}
        <div className="space-y-2.5 pb-8 border-b border-neutral-800 text-[11px]">
          <p>
            * Trade-in values will vary based on the condition, year, and configuration of your eligible
            trade-in device. Not all devices are eligible for credit. You must be at least 18 years old
            to be eligible to trade in for credit or for an Apple Gift Card.
          </p>
          <p>
            1. The display has rounded corners that follow a beautiful curved design, and these corners
            are within a standard rectangle. When measured as a standard rectangular shape, the screen
            is 5.85 inches (iPhone 11 Pro) or 6.46 inches (iPhone 11 Pro Max) diagonally. Actual viewable
            area is less.
          </p>
          <p>
            2. iPhone 11 Pro and iPhone 11 Pro Max are splash, water, and dust resistant and were tested
            under controlled laboratory conditions with a rating of IP68 under IEC standard 60529
            (maximum depth of 4 meters up to 30 minutes). Splash, water, and dust resistance are not
            permanent conditions and resistance might decrease as a result of normal wear.
          </p>
          <p>
            3. Battery life claim refers to larger models. All battery claims depend on network
            configuration and many other factors; actual results will vary. Battery has limited recharge
            cycles and may eventually need to be replaced by an Apple service provider.
          </p>
        </div>

        {/* Directory Breadcrumb */}
        <div className="py-4 flex items-center gap-2 text-neutral-400">
          <svg className="w-3 h-3.5 fill-current opacity-70" viewBox="0 0 170 170">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.7-7.83-12-14.37-6.06-9.13-10.9-19.34-14.53-30.64-3.62-11.3-5.44-22.31-5.44-33.04 0-14.63 3.65-26.69 10.96-36.17 7.3-9.48 16.5-14.28 27.59-14.42 4.9.12 10.23 1.34 16.01 3.67 5.77 2.33 9.47 3.63 11.09 3.9 2.58-.6 6.56-2.03 11.95-4.29 5.39-2.26 10.15-3.28 14.27-3.07 10.88.54 19.82 4.47 26.83 11.79-9.58 5.77-14.26 13.88-14.04 24.33.22 8.27 3.44 15.25 9.68 20.93 6.24 5.69 13.78 9.07 22.62 10.14-2.17 6.42-4.8 12.87-7.89 19.35zM119.22 31.84c0-6.19 2.29-12.38 6.87-18.57 4.58-6.19 10.37-10.61 17.37-13.27.32 1.3.49 2.6.49 3.9 0 6.3-2.39 12.63-7.17 19-4.78 6.36-10.74 10.66-17.89 12.89-.33-1.3-.49-2.6-.49-3.95z" />
          </svg>
          <span>›</span>
          <span className="hover:text-white cursor-pointer">iPhone</span>
          <span>›</span>
          <span className="text-white">iPhone 11 Pro</span>
        </div>

        {/* Global Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 py-6 border-b border-neutral-800 text-[11px]">
          <div>
            <span className="font-semibold text-white block mb-2">Shop and Learn</span>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-white">Store</a></li>
              <li><a href="#" className="hover:text-white">Mac</a></li>
              <li><a href="#" className="hover:text-white">iPad</a></li>
              <li><a href="#" className="hover:text-white">iPhone</a></li>
              <li><a href="#" className="hover:text-white">Watch</a></li>
            </ul>
          </div>
          <div>
            <span className="font-semibold text-white block mb-2">Account</span>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-white">Manage Your Apple ID</a></li>
              <li><a href="#" className="hover:text-white">Apple Store Account</a></li>
              <li><a href="#" className="hover:text-white">iCloud.com</a></li>
            </ul>
          </div>
          <div>
            <span className="font-semibold text-white block mb-2">Entertainment</span>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-white">Apple TV+</a></li>
              <li><a href="#" className="hover:text-white">Apple Music</a></li>
              <li><a href="#" className="hover:text-white">Apple Arcade</a></li>
              <li><a href="#" className="hover:text-white">Apple Podcasts</a></li>
            </ul>
          </div>
          <div>
            <span className="font-semibold text-white block mb-2">Apple Store</span>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-white">Find a Store</a></li>
              <li><a href="#" className="hover:text-white">Genius Bar</a></li>
              <li><a href="#" className="hover:text-white">Today at Apple</a></li>
              <li><a href="#" className="hover:text-white">Apple Camp</a></li>
            </ul>
          </div>
          <div>
            <span className="font-semibold text-white block mb-2">About Apple</span>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-white">Newsroom</a></li>
              <li><a href="#" className="hover:text-white">Apple Leadership</a></li>
              <li><a href="#" className="hover:text-white">Career Opportunities</a></li>
              <li><a href="#" className="hover:text-white">Investors</a></li>
              <li><a href="#" className="hover:text-white">Ethics & Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-neutral-500">
          <div>
            Copyright © 2026 Apple Inc. All rights reserved. Webflow showcase homage.
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Sales Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Legal</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
