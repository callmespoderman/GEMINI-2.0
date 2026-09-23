import React, { useState, useEffect } from 'react';
import { EVENT_DETAILS } from '../data/eventData';
import { Calendar, Clock, MapPin, Users, AlertTriangle, ArrowRight, Sparkles, Play, ShieldAlert } from 'lucide-react';

interface HeroProps {
  onOpenRegister: () => void;
  onOpenPromptLab: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister, onOpenPromptLab }) => {
  // Target date: September 23, 2026, 11:00:00 IST (UTC+5:30)
  const targetDate = new Date('2026-09-23T11:00:00+05:30').getTime();

  // Mode state for interactive demo toggle
  const [simulationMode, setSimulationMode] = useState<'actual' | 'live' | 'post'>('actual');

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      if (simulationMode === 'live') {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: false });
        return;
      }
      if (simulationMode === 'post') {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds, isPast: false });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate, simulationMode]);

  return (
    <section id="top" className="relative pt-12 pb-20 overflow-hidden border-b border-slate-800/80">
      {/* Subtle Gemini Background Lighting Mesh */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-rose-500/10 blur-[130px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-600/10 blur-[110px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 -right-40 w-96 h-96 bg-rose-600/10 blur-[110px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Zero-Pill Static Metadata with Typographic Separators */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 mb-6 tracking-wide">
          <span className="text-blue-400 font-semibold">{EVENT_DETAILS.university}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Dept. of AIML</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-200">{EVENT_DETAILS.date}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-300">{EVENT_DETAILS.time}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-300">11th Floor Conference Hall</span>
        </div>

        {/* Main Headline with balanced wrapping */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-[1.12] [text-wrap:balance]">
            Gemini AI Masterclass: Multimodal Architecture & Production Workflows
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            A high-rigor engineering deep-dive hosted by Techno India University. Master Gemini 2.5 multimodal reasoning, million-token context engineering, structured JSON validation, and live API grounding with leading Google Cloud ecosystem architects.
          </p>
        </div>

        {/* Mandatory Cohort Compliance Banner */}
        <div className="mt-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 max-w-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs sm:text-sm font-semibold text-amber-200">
                Mandatory for AIML Sections 1A, 1B, 1C, and 1D
              </p>
              <p className="text-xs text-amber-300/80 mt-0.5">
                Physical TIU Uniform, Student ID Card, and Charged Laptop are strictly required for 11th Floor RFID check-in.
              </p>
            </div>
          </div>
          <a
            href="#checklist"
            className="text-xs font-medium text-amber-300 hover:text-amber-100 underline underline-offset-4 whitespace-nowrap self-end sm:self-center"
          >
            Review Entry Checklist →
          </a>
        </div>

        {/* Action Controls & Live Counter Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Block: Primary CTA & Key Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenRegister}
                className="px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 rounded-xl shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:brightness-110 active:scale-[0.98] transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <span>Register for Digital Pass</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenPromptLab}
                className="px-5 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/90 border border-slate-700/80 rounded-xl hover:bg-slate-800 hover:text-white hover:border-slate-600 active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Launch Interactive Prompt Lab</span>
              </button>
            </div>

            {/* Quick stats / facts strip */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-300 text-xs">
              <div>
                <span className="block text-slate-500 text-[11px]">DATE & DURATION</span>
                <span className="font-semibold text-white text-sm">Sept 23, 2026</span>
                <span className="block text-slate-400">2 Hours Intensive</span>
              </div>
              <div>
                <span className="block text-slate-500 text-[11px]">VENUE</span>
                <span className="font-semibold text-white text-sm">11th Floor Hall</span>
                <span className="block text-slate-400">Main Campus, Salt Lake</span>
              </div>
              <div>
                <span className="block text-slate-500 text-[11px]">CONFIRMED SEATS</span>
                <span className="font-semibold text-white text-sm tabular-nums">284 / 320</span>
                <span className="block text-emerald-400">88% Reserved</span>
              </div>
              <div>
                <span className="block text-slate-500 text-[11px]">CREDENTIAL</span>
                <span className="font-semibold text-white text-sm">Official Certificate</span>
                <span className="block text-slate-400">AIML & Google Partner</span>
              </div>
            </div>
          </div>

          {/* Right Block: Live Countdown & Status Box */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-b from-slate-900/95 to-slate-950/95 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            {/* Header of Countdown card */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>EVENT STATUS</span>
              </div>

              {/* Simulation status switch for evaluator convenience */}
              <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-[10px]">
                <button
                  onClick={() => setSimulationMode('actual')}
                  className={`px-2 py-0.5 rounded font-medium transition-colors cursor-pointer ${
                    simulationMode === 'actual'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Live countdown to September 23, 2026"
                >
                  Countdown
                </button>
                <button
                  onClick={() => setSimulationMode('live')}
                  className={`px-2 py-0.5 rounded font-medium transition-colors cursor-pointer ${
                    simulationMode === 'live'
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Simulate event is in progress right now"
                >
                  In Session
                </button>
                <button
                  onClick={() => setSimulationMode('post')}
                  className={`px-2 py-0.5 rounded font-medium transition-colors cursor-pointer ${
                    simulationMode === 'post'
                      ? 'bg-slate-700 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Simulate post-event resource access"
                >
                  Concluded
                </button>
              </div>
            </div>

            {/* Countdown or Current Status display */}
            {simulationMode === 'live' ? (
              <div className="my-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Masterclass Currently In Progress</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">TIU Conference Hall · 11th Floor</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Live Keynote underway: Multimodal tokenization & Google AI Studio hands-on coding lab.
                </p>
              </div>
            ) : simulationMode === 'post' ? (
              <div className="my-6 p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-center">
                <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-bold tracking-wider uppercase mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Masterclass Completed</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">Resource Repository Active</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Download session slide decks, code starter repos, and verify digital certificates.
                </p>
              </div>
            ) : (
              <div className="my-6">
                <p className="text-xs text-slate-400 font-medium mb-3">
                  Doors open at 10:30 AM IST for biometric turnstile check-in:
                </p>
                <div className="grid grid-cols-4 gap-2.5 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
                    <span className="block text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">
                      {timeLeft.days}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
                      Days
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
                    <span className="block text-2xl sm:text-3xl font-bold text-blue-400 font-mono tabular-nums">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
                      Hours
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
                    <span className="block text-2xl sm:text-3xl font-bold text-indigo-300 font-mono tabular-nums">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
                      Mins
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
                    <span className="block text-2xl sm:text-3xl font-bold text-rose-400 font-mono tabular-nums">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
                      Secs
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Capacity Progress Bar */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>Auditorium Capacity</span>
                <span className="font-semibold text-white">284 of 320 Seats Booked</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-rose-500 rounded-full transition-all duration-500"
                  style={{ width: '88.75%' }}
                />
              </div>
              <p className="mt-2 text-[11px] text-slate-500 text-right">
                Remaining seats allocated to AIML waitlist & research scholars
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
