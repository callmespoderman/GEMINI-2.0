import React, { useState, useEffect } from 'react';
import { RegistrationData } from './types/event';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpeakersSection } from './components/SpeakersSection';
import { CurriculumSection } from './components/CurriculumSection';
import { PromptLab } from './components/PromptLab';
import { MandatoryChecklist } from './components/MandatoryChecklist';
import { VenueSection } from './components/VenueSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [savedPass, setSavedPass] = useState<RegistrationData | null>(null);

  // Load any existing pass on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('tiu_gemini_pass');
      if (stored) {
        setSavedPass(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load pass from storage', e);
    }
  }, []);

  const handleOpenRegister = () => {
    setIsRegisterOpen(true);
  };

  const handleOpenPassView = () => {
    setIsRegisterOpen(true);
  };

  const handleRegistered = (pass: RegistrationData) => {
    setSavedPass(pass);
  };

  const handleScrollToPromptLab = () => {
    const el = document.getElementById('prompt-lab');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 selection:bg-blue-600 selection:text-white flex flex-col">
      {/* Top Navigation Bar */}
      <Navbar
        onOpenRegister={handleOpenRegister}
        onOpenPassView={handleOpenPassView}
        hasSavedPass={!!savedPass}
      />

      {/* Main Landing Sections */}
      <main className="flex-1">
        <Hero
          onOpenRegister={handleOpenRegister}
          onOpenPromptLab={handleScrollToPromptLab}
        />

        <SpeakersSection />

        <CurriculumSection />

        <PromptLab />

        <MandatoryChecklist />

        <VenueSection />

        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenRegister={handleOpenRegister} />

      {/* Interactive Registration & Holographic Pass Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onRegistered={handleRegistered}
        existingPass={savedPass}
      />
    </div>
  );
}
