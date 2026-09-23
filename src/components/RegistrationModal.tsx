import React, { useState } from 'react';
import { RegistrationData } from '../types/event';
import { EVENT_DETAILS } from '../data/eventData';
import { X, CheckCircle, Ticket, Download, Printer, Calendar, QrCode, Sparkles, Laptop, ShieldCheck } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegistered: (data: RegistrationData) => void;
  existingPass: RegistrationData | null;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  onRegistered,
  existingPass,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    rollNumber: '',
    section: 'AIML 1A' as RegistrationData['section'],
    laptopOs: 'Windows' as RegistrationData['laptopOs'],
    experienceLevel: 'Beginner' as RegistrationData['experienceLevel'],
    question: '',
  });

  const [activePass, setActivePass] = useState<RegistrationData | null>(existingPass);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.rollNumber.trim()) {
      errs.rollNumber = 'University Roll / Registration No. is required.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Deterministic seat assignment based on section
    const randomRow = ['A', 'B', 'C', 'D', 'E', 'F'][Math.floor(Math.random() * 6)];
    const seatNum = Math.floor(Math.random() * 28) + 1;
    const seatRow = `Row ${randomRow} · Seat ${seatNum}`;

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const passId = `TIU-GEMINI-${randomSuffix}`;

    setTimeout(() => {
      const newPass: RegistrationData = {
        id: passId,
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        rollNumber: formData.rollNumber.trim().toUpperCase(),
        section: formData.section,
        laptopOs: formData.laptopOs,
        experienceLevel: formData.experienceLevel,
        question: formData.question.trim(),
        registeredAt: new Date().toISOString(),
        seatRow,
      };

      localStorage.setItem('tiu_gemini_pass', JSON.stringify(newPass));
      setActivePass(newPass);
      onRegistered(newPass);
      setIsSubmitting(false);
    }, 400);
  };

  const handlePrint = () => {
    window.print();
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#0B0F16] border border-slate-800 shadow-2xl p-6 sm:p-8 my-8 text-slate-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {activePass ? (
          /* Digital Pass Result View */
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <CheckCircle className="w-4 h-4" />
              <span>Registration Confirmed & Seat Allocated</span>
            </div>
            <h2 className="text-2xl font-bold font-display text-white">
              Your Masterclass Admission Pass
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Present this digital pass at the 11th floor biometric entrance turnstiles.
            </p>

            {/* Holographic Printable Badge */}
            <div
              id="printable-pass"
              className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#0B0F16] to-[#0A0D14] border border-blue-500/40 relative overflow-hidden shadow-2xl"
            >
              {/* Subtle top rainbow bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 via-rose-500 to-cyan-400" />

              <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4 mb-4">
                <div>
                  <div className="text-[11px] font-bold text-blue-400 tracking-wider uppercase">
                    TECHNO INDIA UNIVERSITY · DEPT. OF AIML
                  </div>
                  <h3 className="text-lg font-bold text-white font-display mt-0.5">
                    Gemini AI Masterclass 2026
                  </h3>
                  <div className="text-xs text-slate-400">
                    September 23, 2026 · 11:00 AM – 1:00 PM IST
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-500 block">PASS ID</span>
                  <span className="text-xs font-mono font-bold text-blue-300">
                    {activePass.id}
                  </span>
                </div>
              </div>

              {/* Pass details */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs py-2">
                <div>
                  <span className="text-slate-500 block text-[11px]">ATTENDEE</span>
                  <strong className="text-white text-sm">{activePass.fullName}</strong>
                  <span className="text-slate-400 block">{activePass.rollNumber}</span>
                </div>

                <div>
                  <span className="text-slate-500 block text-[11px]">COHORT / SECTION</span>
                  <strong className="text-blue-300 text-sm">{activePass.section}</strong>
                  <span className="text-slate-400 block">{activePass.laptopOs} Workstation</span>
                </div>

                <div>
                  <span className="text-slate-500 block text-[11px]">RESERVED SEAT</span>
                  <strong className="text-emerald-400 text-sm">{activePass.seatRow}</strong>
                  <span className="text-slate-400 block">11th Floor Main Hall</span>
                </div>
              </div>

              {/* Barcode & QR Code Simulation */}
              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white p-1 rounded-lg flex items-center justify-center shrink-0">
                    {/* Stylized QR Code SVG */}
                    <svg viewBox="0 0 24 24" className="w-full h-full text-black fill-current">
                      <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v4h-4v-4zm-4-2h2v2h-2v-2zm4-4h2v2h-2V8zm-2 2h2v2h-2v-2zm0 4h2v2h-2v-2zm-4 2h2v2h-2v-2zm2 2h2v2h-2v-2zm2 2h2v2h-2v-2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-300">
                      SCAN FOR HALL RFID CLEARANCE
                    </div>
                    <div className="text-[10px] text-slate-500">
                      TIU Entrance Gate B · North Tower Lifts
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block text-right">
                  <div className="text-[10px] text-slate-500 font-mono tracking-widest">
                    ||| | | || ||| | ||| |||| | |
                  </div>
                  <div className="text-[9px] text-slate-500 uppercase">
                    Non-Transferable Student Pass
                  </div>
                </div>
              </div>
            </div>

            {/* Pass Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setActivePass(null)}
                className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
              >
                ← Register Another Student
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownloadCalendar}
                  className="px-3.5 py-2 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-700 rounded-lg hover:bg-slate-800 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>Add to Calendar</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save Pass</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Registration Form View */
          <div>
            <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Ticket className="w-4 h-4" />
              <span>Student Registration & Badge Pass</span>
            </div>
            <h2 className="text-2xl font-bold font-display text-white">
              Reserve Your Masterclass Seat
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Mandatory for B.Tech AIML Sections 1A, 1B, 1C, 1D. Open to guest students and faculty.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Sourav Banerjee"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:border-blue-500 outline-none transition-colors"
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Roll Number */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    University Roll / Reg. No. *
                  </label>
                  <input
                    type="text"
                    value={formData.rollNumber}
                    onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                    placeholder="e.g. TIU/AIML/2024/042"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:border-blue-500 outline-none transition-colors uppercase font-mono"
                  />
                  {errors.rollNumber && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.rollNumber}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Student Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="student@technoindiaeducation.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:border-blue-500 outline-none transition-colors"
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Section Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Department & Cohort Section *
                  </label>
                  <select
                    value={formData.section}
                    onChange={(e) => setFormData({ ...formData, section: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:border-blue-500 outline-none transition-colors cursor-pointer"
                  >
                    <option value="AIML 1A">AIML — Section 1A (Mandatory)</option>
                    <option value="AIML 1B">AIML — Section 1B (Mandatory)</option>
                    <option value="AIML 1C">AIML — Section 1C (Mandatory)</option>
                    <option value="AIML 1D">AIML — Section 1D (Mandatory)</option>
                    <option value="Other Department / Guest">Other Dept (CSE/IT/ECE) / Guest</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Laptop OS */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Workstation OS (For Hands-on Setup)
                  </label>
                  <select
                    value={formData.laptopOs}
                    onChange={(e) => setFormData({ ...formData, laptopOs: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:border-blue-500 outline-none transition-colors cursor-pointer"
                  >
                    <option value="Windows">Windows 11 / 10</option>
                    <option value="macOS">macOS (Apple Silicon / Intel)</option>
                    <option value="Linux">Linux (Ubuntu / Debian / Fedora)</option>
                  </select>
                </div>

                {/* Experience Level */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    AI / LLM Experience Level
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:border-blue-500 outline-none transition-colors cursor-pointer"
                  >
                    <option value="Beginner">Beginner (Curious about Gemini & Prompting)</option>
                    <option value="Intermediate">Intermediate (Used OpenAI/Gemini APIs in Python/JS)</option>
                    <option value="Advanced">Advanced (Building fine-tuned agents / RAG)</option>
                  </select>
                </div>
              </div>

              {/* Question for Speakers */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Question for Arti Dwivedi or Ankita Shaw (Optional)
                </label>
                <input
                  type="text"
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  placeholder="e.g. How does Gemini 2.5 handle multimodal video attention without quadratic cost?"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:border-blue-500 outline-none transition-colors"
                />
              </div>

              {/* Compliance Confirmation */}
              <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-900/50 flex items-start gap-2.5 text-xs text-blue-200">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  By registering, I confirm I will carry my <strong>TIU ID Card</strong>, attend in <strong>College Uniform</strong>, and bring a <strong>charged laptop</strong> to the 11th Floor Conference Hall by 10:45 AM.
                </span>
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 rounded-lg shadow-lg shadow-blue-500/20 hover:brightness-110 active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Ticket className="w-4 h-4" />
                  <span>{isSubmitting ? 'Generating Digital Pass...' : 'Generate Official Entry Pass'}</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
