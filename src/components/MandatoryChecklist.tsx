import React, { useState } from 'react';
import { MANDATORY_CHECKLIST } from '../data/eventData';
import { CheckSquare, Square, AlertCircle, Laptop, ShieldCheck, UserCheck, KeyRound, TerminalSquare } from 'lucide-react';

export const MandatoryChecklist: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    laptop: true,
    uniform: true,
    'id-card': true,
    'google-account': false,
    'dev-environment': false,
  });

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const totalItems = MANDATORY_CHECKLIST.length;
  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const percentage = Math.round((completedCount / totalItems) * 100);

  const getIcon = (id: string) => {
    switch (id) {
      case 'laptop':
        return <Laptop className="w-5 h-5 text-blue-400" />;
      case 'uniform':
        return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
      case 'id-card':
        return <UserCheck className="w-5 h-5 text-rose-400" />;
      case 'google-account':
        return <KeyRound className="w-5 h-5 text-cyan-400" />;
      default:
        return <TerminalSquare className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="checklist" className="py-20 border-b border-slate-800/80 bg-[#080B11]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2">
            <AlertCircle className="w-4 h-4" />
            <span>Attendance & Compliance Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight [text-wrap:balance]">
            Mandatory Entry Requirements for AIML 1A, 1B, 1C & 1D
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            As mandated by the Department of Artificial Intelligence & Machine Learning, all enrolled students must fulfill the following technical and disciplinary criteria before entering the 11th Floor Conference Hall.
          </p>
        </div>

        {/* Readiness Meter Banner */}
        <div className="p-6 rounded-2xl bg-[#0C1017] border border-slate-800 mb-8 max-w-4xl shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Your Readiness Status
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                {percentage === 100
                  ? 'All Set: You are 100% Prepared for Entry!'
                  : `${completedCount} of ${totalItems} Requirements Verified`}
              </h3>
            </div>
            <span
              className={`text-2xl font-bold font-mono tabular-nums ${
                percentage === 100 ? 'text-emerald-400' : 'text-blue-400'
              }`}
            >
              {percentage}%
            </span>
          </div>

          <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full transition-all duration-300"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <p className="text-xs text-slate-500 mt-2">
            Click on any item below to check off your pre-session setup checklist.
          </p>
        </div>

        {/* Interactive Checklist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          {MANDATORY_CHECKLIST.map((item) => {
            const isChecked = !!checkedItems[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer select-none flex items-start gap-4 ${
                  isChecked
                    ? 'bg-slate-900/80 border-slate-700/90'
                    : 'bg-[#090D14] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-600" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {getIcon(item.id)}
                    <h4
                      className={`text-sm font-semibold transition-colors ${
                        isChecked ? 'text-white' : 'text-slate-300'
                      }`}
                    >
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-2">
                    {item.description}
                  </p>
                  <span className="text-[11px] font-semibold text-rose-300/90 block">
                    {item.importance}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 max-w-4xl text-xs text-slate-400 flex items-center justify-between">
          <span>
            Need temporary laptop charging or Wi-Fi configuration assistance? Technical volunteers will be stationed outside the 11th Floor lifts starting 10:15 AM.
          </span>
        </div>
      </div>
    </section>
  );
};
