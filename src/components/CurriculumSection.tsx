import React, { useState } from 'react';
import { AGENDA } from '../data/eventData';
import { Clock, CheckCircle2, ChevronRight, Layers, FileCode2, Award } from 'lucide-react';

export const CurriculumSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number>(1); // Default to Arti's deep dive or Ankita's lab

  return (
    <section id="curriculum" className="py-20 border-b border-slate-800/80 bg-[#080B11]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            <Layers className="w-4 h-4" />
            <span>Masterclass Curriculum & Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight [text-wrap:balance]">
            Two Hours of Rigorous Multimodal AI Engineering
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Every minute is engineered for maximum technical depth: from transformer internals to hands-on SDK integration in Google AI Studio.
          </p>
        </div>

        {/* Timeline Grid: Left timeline list, Right deep details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Timeline List */}
          <div className="lg:col-span-6 space-y-4">
            {AGENDA.map((item, idx) => {
              const isActive = selectedItem === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedItem(idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 border-blue-500/80 shadow-lg shadow-blue-500/10'
                      : 'bg-[#0B0F16] border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold tabular-nums">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.time}</span>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {item.format}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mt-2 leading-snug">
                    {item.title}
                  </h3>

                  <div className="mt-2 text-xs text-slate-400 flex items-center justify-between">
                    <span>{item.speaker}</span>
                    <span className="text-blue-400 flex items-center gap-1 font-medium">
                      <span>{isActive ? 'Selected' : 'View Details'}</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Milestone Deep-Dive Panel */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#0B0F16] border border-slate-800 shadow-xl relative sticky top-24">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="text-xs font-mono text-blue-400 font-semibold tabular-nums">
                {AGENDA[selectedItem].time}
              </div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {AGENDA[selectedItem].format}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white font-display leading-snug">
              {AGENDA[selectedItem].title}
            </h3>

            <div className="mt-3 text-xs sm:text-sm text-slate-400">
              <strong className="text-slate-200">{AGENDA[selectedItem].speaker}</strong>
              <span className="text-slate-500"> — {AGENDA[selectedItem].speakerRole}</span>
            </div>

            <p className="mt-5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {AGENDA[selectedItem].description}
            </p>

            {/* Focus Topics */}
            <div className="mt-6 pt-5 border-t border-slate-800">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Key Technical Takeaways & Outcomes
              </h4>
              <ul className="space-y-2.5">
                {AGENDA[selectedItem].takeaways.map((takeaway, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preparation notice for hands-on session */}
            {AGENDA[selectedItem].format === 'Hands-on Lab' && (
              <div className="mt-6 p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-start gap-3 text-xs text-blue-200">
                <FileCode2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong>Laptop Required:</strong> You will write live code using the Google Gen AI SDK. Ensure your browser is logged in to{' '}
                  <code className="text-white bg-blue-900/60 px-1 py-0.5 rounded">aistudio.google.com</code>.
                </div>
              </div>
            )}

            {AGENDA[selectedItem].format === 'Interactive Q&A' && (
              <div className="mt-6 p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-start gap-3 text-xs text-purple-200">
                <Award className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <strong>Attendance Verification:</strong> RFID scanner active at the doors. Attendance report will be submitted to the Controller of Examinations for AIML credit records.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
