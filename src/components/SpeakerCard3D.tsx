import React, { useRef, useState } from 'react';
import { Speaker } from '../types/event';
import { ExternalLink, CheckCircle, Award, Sparkles, BookOpen } from 'lucide-react';

interface SpeakerCard3DProps {
  speaker: Speaker;
  onSelectSpeaker?: (speaker: Speaker) => void;
}

export const SpeakerCard3D: React.FC<SpeakerCard3DProps> = ({ speaker }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Max tilt angle: 12 degrees for refined feel
    const rotateX = -((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTilt({ rotateX, rotateY, scale: 1.02 });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.18,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      className="perspective-1000 h-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className="preserve-3d relative h-full rounded-2xl bg-[#0C1017] border border-slate-800/90 p-6 sm:p-8 flex flex-col justify-between transition-transform duration-150 ease-out shadow-xl shadow-black/40 overflow-hidden group"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${tilt.scale}, ${tilt.scale}, ${tilt.scale})`,
          transition: isHovered ? 'transform 0.05s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Dynamic Specular Glare Layer */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.25) 0%, transparent 60%)`,
            opacity: glare.opacity,
          }}
          aria-hidden="true"
        />

        {/* Ambient Corner Glow */}
        <div
          className={`absolute -top-24 -right-24 w-52 h-52 bg-gradient-to-br ${speaker.gradient} opacity-20 blur-3xl pointer-events-none transition-opacity duration-300 group-hover:opacity-35`}
          aria-hidden="true"
        />

        {/* Card Header: Avatar & Badges */}
        <div>
          <div className="flex items-start justify-between gap-4 mb-6">
            {/* Stylized High-Fidelity Avatar with Monogram & Subtle Gradient Halo */}
            <div className="relative">
              <div
                className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-[2px] bg-gradient-to-tr ${speaker.gradient} shadow-lg shadow-blue-500/10`}
              >
                <div className="w-full h-full rounded-2xl bg-[#090D14] flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Subtle geometric background grid pattern */}
                  <svg
                    className="absolute inset-0 w-full h-full opacity-20"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.8" className="text-slate-400" />
                    <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.8" className="text-slate-400" />
                    <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.8" className="text-slate-500" />
                    <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.8" className="text-slate-500" />
                  </svg>
                  {/* Initials & Graphic */}
                  <span className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white z-10">
                    {speaker.initials}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 z-10">
                    {speaker.id === 'arti-dwivedi' ? 'Google Cloud' : 'Google Trainer'}
                  </span>
                </div>
              </div>

              {/* Verified Badge */}
              <div
                className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shadow-md"
                title="Google Ecosystem Verified Speaker"
              >
                <Award className="w-4 h-4 text-blue-400" />
              </div>
            </div>

            {/* Unboxed Metadata & Session Time */}
            <div className="text-right">
              <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                {speaker.badge}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-mono tabular-nums">
                {speaker.sessionTime}
              </div>
            </div>
          </div>

          {/* Speaker Identity */}
          <div>
            <h3 className="text-2xl font-bold text-white font-display tracking-tight flex items-center gap-2">
              <span>{speaker.name}</span>
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" aria-label="Verified" />
            </h3>
            <p className="text-sm font-semibold text-slate-300 mt-1">{speaker.role}</p>
            <p className="text-xs text-slate-400 mt-0.5">{speaker.organization}</p>
          </div>

          {/* Bio */}
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-4 line-clamp-3">
            {speaker.bio}
          </p>

          {/* Keynote Presentation Block */}
          <div className="mt-6 p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-1.5">
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              <span>SESSION FOCUS</span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
              {speaker.keynoteTitle}
            </p>
          </div>

          {/* Core Technical Highlights (Clean unboxed list) */}
          <div className="mt-6">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2.5">
              Keynote Deliverables
            </span>
            <ul className="space-y-2 text-xs text-slate-300">
              {speaker.topics.map((topic, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold shrink-0 mt-0.5">·</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer / Interactive Footer Link */}
        <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
          <span className="text-slate-500">Live Stage & Code Lab</span>
          <div className="flex items-center gap-3 text-blue-400 font-medium hover:text-blue-300 transition-colors">
            <span>View Session Details</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
