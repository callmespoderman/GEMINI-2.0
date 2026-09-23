import React from 'react';
import { SPEAKERS } from '../data/eventData';
import { SpeakerCard3D } from './SpeakerCard3D';
import { Sparkles, Terminal } from 'lucide-react';

export const SpeakersSection: React.FC = () => {
  return (
    <section id="speakers" className="py-20 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Keynote Luminaries & Instructors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight [text-wrap:balance]">
            Learn Directly from Google Ecosystem Architects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Gain firsthand insights into Google's latest multimodal foundation models, production system design, and practical developer workflows. Cards feature interactive 3D perspective response.
          </p>
        </div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {SPEAKERS.map((speaker) => (
            <SpeakerCard3D key={speaker.id} speaker={speaker} />
          ))}
        </div>

        {/* Speaker Co-host / Department Note */}
        <div className="mt-12 p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 text-slate-300">
            <Terminal className="w-4 h-4 text-blue-400 shrink-0" />
            <span>
              Session moderated by <strong className="text-white">TIU AIML Department Faculty & Student AI Council</strong>
            </span>
          </div>
          <span className="text-slate-500">Interactive live coding session starts at 12:00 PM IST</span>
        </div>
      </div>
    </section>
  );
};
