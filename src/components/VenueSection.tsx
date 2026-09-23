import React from 'react';
import { EVENT_DETAILS } from '../data/eventData';
import { MapPin, Wifi, Zap, Building2, PhoneCall, Compass, Navigation } from 'lucide-react';

export const VenueSection: React.FC = () => {
  return (
    <section id="venue" className="py-20 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            <Compass className="w-4 h-4" />
            <span>Campus Logistics & Navigation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight [text-wrap:balance]">
            TIU 11th Floor Conference Hall
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Conveniently located at Techno India University's Salt Lake Sector V campus. Equipped with high-density gigabit Wi-Fi and power strips at every seat.
          </p>
        </div>

        {/* Venue Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Block: Map & Facility Highlights */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0A0E15] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                    Primary Convention Venue
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
                    {EVENT_DETAILS.location}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>{EVENT_DETAILS.address}</span>
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=Techno+India+University+Salt+Lake+Sector+V"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 text-xs font-medium text-blue-400 bg-blue-950/60 border border-blue-800/60 rounded-lg hover:text-white hover:bg-blue-900/80 transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                </a>
              </div>

              {/* Facility Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold mb-1">
                    <Building2 className="w-4 h-4" />
                    <span>Elevator Routing</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Take high-speed <strong>Lifts 3, 4, or 5</strong> from North Atrium directly to the 11th Floor Executive Wing.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold mb-1">
                    <Wifi className="w-4 h-4" />
                    <span>Dedicated Masterclass Wi-Fi</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    SSID: <code className="text-white font-mono bg-slate-900 px-1 py-0.5 rounded">TIU_GEMINI_HIGH_SPEED</code>
                    <br />
                    Portal password will be shown on presentation displays.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold mb-1">
                    <Zap className="w-4 h-4" />
                    <span>Desk Power Outlets</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Individual AC charging ports available at every theater row to power laptops throughout the coding sprint.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-1">
                    <PhoneCall className="w-4 h-4" />
                    <span>AIML Helpdesk Coordinator</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    For inquiries: <strong>aiml.events@technoindiaeducation.com</strong>
                    <br />
                    Ext: 1104 (Department Reception)
                  </p>
                </div>
              </div>
            </div>

            {/* Turnstile Schedule */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Doors open: 10:30 AM IST for RFID badge scan</span>
              <span className="text-amber-400 font-semibold">Doors close: 11:00 AM sharp</span>
            </div>
          </div>

          {/* Right Block: Hall Schematic & Seating Blueprint */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#0A0E15] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Auditorium Layout
              </div>
              <h3 className="text-lg font-bold text-white font-display">
                11th Floor Seating Allocation
              </h3>
              <p className="text-xs text-slate-400 mt-1 mb-6">
                Sections are assigned to specific theater tiers for optimal hands-on peer coding.
              </p>

              {/* Visual Floor Schematic */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                {/* Stage Indicator */}
                <div className="py-2 px-4 rounded-lg bg-blue-600/20 border border-blue-500/40 text-center text-xs font-bold text-blue-300 tracking-wider uppercase">
                  Presentation Stage & Keynote Podium (Arti & Ankita)
                </div>

                {/* Rows Blueprint */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between p-2 rounded bg-slate-900 text-xs">
                    <span className="text-white font-medium">Rows A – B</span>
                    <span className="text-blue-300 font-semibold">AIML Section 1A</span>
                    <span className="text-slate-500">60 Desks</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-slate-900 text-xs">
                    <span className="text-white font-medium">Rows C – D</span>
                    <span className="text-indigo-300 font-semibold">AIML Section 1B</span>
                    <span className="text-slate-500">60 Desks</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-slate-900 text-xs">
                    <span className="text-white font-medium">Rows E – F</span>
                    <span className="text-purple-300 font-semibold">AIML Section 1C</span>
                    <span className="text-slate-500">60 Desks</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-slate-900 text-xs">
                    <span className="text-white font-medium">Rows G – H</span>
                    <span className="text-rose-300 font-semibold">AIML Section 1D</span>
                    <span className="text-slate-500">60 Desks</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-slate-900 text-xs">
                    <span className="text-white font-medium">Rows J – K</span>
                    <span className="text-emerald-300 font-semibold">Faculty & Guests</span>
                    <span className="text-slate-500">80 Desks</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500">
              * Individual seat numbers are generated on your official digital entry pass.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
