import React from 'react';
import { EVENT_DETAILS } from '../data/eventData';
import { Calendar, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenRegister: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRegister }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Techno India University//Gemini AI Masterclass//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:Gemini AI Masterclass - Techno India University
DESCRIPTION:Mandatory Masterclass on Gemini 2.5 Multimodal Architecture and Hands-on Lab with Arti Dwivedi and Ankita Shaw. Venue: TIU 11th Floor Conference Hall.
LOCATION:TIU Conference Hall\\, 11th Floor\\, Techno India University\\, Salt Lake Sector V\\, Kolkata
DTSTART:20260923T053000Z
DTEND:20260923T073000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Gemini_Masterclass_TIU.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-[#05070B] text-slate-400 text-xs py-14 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-900">
          {/* Brand & Department */}
          <div>
            <div className="text-base font-bold text-white font-display tracking-tight flex items-center gap-2">
              <span>Techno India University</span>
              <span className="text-slate-600 font-normal">/</span>
              <span className="text-blue-400 font-normal text-sm">AIML Masterclass</span>
            </div>
            <p className="text-xs text-slate-500 mt-1 max-w-md">
              Department of Artificial Intelligence & Machine Learning. Salt Lake Sector V, Kolkata. In academic partnership with Google Cloud & Google Developer Ecosystem.
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <a href="#speakers" className="hover:text-white transition-colors">
              Speakers
            </a>
            <a href="#curriculum" className="hover:text-white transition-colors">
              Curriculum
            </a>
            <a href="#prompt-lab" className="hover:text-white transition-colors">
              Prompt Lab
            </a>
            <a href="#checklist" className="hover:text-white transition-colors">
              Checklist
            </a>
            <a href="#venue" className="hover:text-white transition-colors">
              Venue
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </nav>

          {/* User actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadCalendar}
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Add to Calendar</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-600">
          <div>
            © 2026 Techno India University. All rights reserved. Mandatory academic event.
          </div>
          <div className="flex items-center gap-4">
            <span>Event Date: September 23, 2026</span>
            <span aria-hidden="true">·</span>
            <span>11:00 AM – 1:00 PM IST</span>
            <span aria-hidden="true">·</span>
            <span>11th Floor Conference Hall</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
