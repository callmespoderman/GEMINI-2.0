import React from 'react';
import { Sparkles, Ticket, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenPassView: () => void;
  onOpenParallaxStudio: () => void;
  hasSavedPass: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenRegister,
  onOpenPassView,
  onOpenParallaxStudio,
  hasSavedPass,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#07090E]/85 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-blue-400 transition-colors flex items-center gap-2 whitespace-nowrap"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-rose-400 animate-pulse" />
          <span>Techno India University</span>
          <span className="text-slate-500 font-normal text-xs sm:text-sm hidden sm:inline">
            / AIML Masterclass
          </span>
        </a>

        {/* Zone 2: 4–6 nav links, 1–2 word labels, single-line */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-300">
          <a
            href="#cinematic-showcase"
            className="hover:text-white text-blue-400 font-semibold transition-colors whitespace-nowrap flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block animate-pulse" />
            <span>Architecture</span>
          </a>
          <a
            href="#speakers"
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            Speakers
          </a>
          <a
            href="#curriculum"
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            Curriculum
          </a>
          <a
            href="#prompt-lab"
            className="hover:text-white transition-colors whitespace-nowrap flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Prompt Lab</span>
          </a>
          <button
            onClick={onOpenParallaxStudio}
            className="hover:text-white text-indigo-300 transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span>Parallax CSS Lab</span>
          </button>
          <a
            href="#checklist"
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            Guidelines
          </a>
          <a
            href="#venue"
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            Venue
          </a>
          <a
            href="#faq"
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1–2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {hasSavedPass && (
            <button
              onClick={onOpenPassView}
              className="px-3 py-1.5 text-xs font-medium text-blue-300 bg-blue-950/60 border border-blue-800/60 rounded-lg hover:bg-blue-900/60 hover:text-white transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>View My Pass</span>
            </button>
          )}

          <button
            onClick={onOpenRegister}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 hover:brightness-110 active:scale-[0.98] transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <Ticket className="w-4 h-4" />
            <span>{hasSavedPass ? 'Register Another' : 'Register Now'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
