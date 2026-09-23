export interface Speaker {
  id: string;
  name: string;
  role: string;
  organization: string;
  badge: string;
  bio: string;
  keynoteTitle: string;
  sessionTime: string;
  topics: string[];
  gradient: string;
  accentColor: string;
  initials: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export interface AgendaItem {
  time: string;
  title: string;
  speaker: string;
  speakerRole: string;
  description: string;
  format: 'Keynote' | 'Deep Dive' | 'Hands-on Lab' | 'Interactive Q&A';
  tags: string[];
  takeaways: string[];
}

export interface RegistrationData {
  id: string;
  fullName: string;
  email: string;
  rollNumber: string;
  section: 'AIML 1A' | 'AIML 1B' | 'AIML 1C' | 'AIML 1D' | 'Other Department / Guest';
  laptopOs: 'macOS' | 'Windows' | 'Linux';
  experienceLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  question?: string;
  registeredAt: string;
  seatRow: string;
}

export interface PromptScenario {
  id: string;
  title: string;
  badge: string;
  description: string;
  model: string;
  systemInstruction: string;
  userPrompt: string;
  mockResponse: string;
  pythonSnippet: string;
  jsSnippet: string;
  tokens: { prompt: number; response: number; total: number };
  latency: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Attendance' | 'Preparation' | 'Curriculum' | 'Certification';
}
