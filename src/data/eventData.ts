import { Speaker, AgendaItem, PromptScenario, FaqItem } from '../types/event';

export const EVENT_DETAILS = {
  title: 'Gemini AI Masterclass',
  subtitle: 'Multimodal Architectures, Real-World Reasoning & Production Workflows',
  university: 'Techno India University',
  department: 'Department of Artificial Intelligence & Machine Learning',
  date: 'September 23, 2026',
  dateIso: '2026-09-23T11:00:00+05:30',
  time: '11:00 AM – 1:00 PM IST',
  duration: '2 Hours Intensive',
  location: 'TIU Conference Hall, 11th Floor',
  address: 'EM-4, Sector V, Bidhannagar, Kolkata, West Bengal 700091',
  mandatoryNotice: 'Mandatory attendance for all B.Tech AIML students of Sections 1A, 1B, 1C, and 1D. Biometric RFID check-in opens at 10:30 AM.',
  capacity: 320,
  registeredCount: 284,
};

export const SPEAKERS: Speaker[] = [
  {
    id: 'arti-dwivedi',
    name: 'Arti Dwivedi',
    role: 'Gemini Adoption Lead',
    organization: 'Google Cloud Ecosystem & Developer Platforms',
    badge: 'Keynote Speaker',
    bio: 'Pioneering global developer ecosystems and enterprise AI transformation. Leads strategic adoption frameworks for Gemini multimodal models, specialized context engineering, and autonomous enterprise systems across South Asia.',
    keynoteTitle: 'Architecting the Next Frontier: Multimodal Reasoning & Native Audio-Visual Workflows',
    sessionTime: '11:20 AM – 12:00 PM',
    topics: [
      'Gemini 2.5 Multi-million Token Architecture',
      'Native Audio, Video & Spatial Context Comprehension',
      'Cross-Modal Grounding & Enterprise Retrieval',
      'Agentic Tool Calling at Sub-second Latencies',
    ],
    gradient: 'from-blue-600 via-indigo-600 to-cyan-400',
    accentColor: '#38BDF8',
    initials: 'AD',
    linkedinUrl: 'https://linkedin.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'ankita-shaw',
    name: 'Ankita Shaw',
    role: 'Google-Certified Trainer & AI Advocate',
    organization: 'Google Developer Community & Machine Learning Lead',
    badge: 'Hands-on Lab Lead',
    bio: 'Recognized Google-Certified Trainer specializing in Generative AI architectures, applied prompt engineering, and production deployment with the Google Gen AI SDK. Mentored over 15,000 university engineers in modern AI systems.',
    keynoteTitle: 'Live Coding Lab: From Prompt Engineering to Production with Google AI Studio & Gemini SDK',
    sessionTime: '12:00 PM – 12:40 PM',
    topics: [
      'Structured JSON Outputs via Strict Pydantic/Zod Schemas',
      'Function Calling with Campus Database APIs',
      'System Instruction Tuning & Thinking Budgets',
      'Live Deployment to Cloud Run with Node & Python SDKs',
    ],
    gradient: 'from-purple-600 via-pink-600 to-rose-400',
    accentColor: '#F43F5E',
    initials: 'AS',
    linkedinUrl: 'https://linkedin.com',
    githubUrl: 'https://github.com',
  },
];

export const AGENDA: AgendaItem[] = [
  {
    time: '11:00 AM – 11:20 AM',
    title: 'Welcome Address & The Generative AI Paradigm Shift',
    speaker: 'Prof. (Dr.) S. Mukherjee & Faculty Convenors',
    speakerRole: 'Head of Department, AIML · Techno India University',
    description: 'Inauguration of the Masterclass, overview of TIU AIML research initiatives, and framing of Google Gemini evolutionary timeline from early LLMs to native multimodal agents.',
    format: 'Keynote',
    tags: ['Inauguration', 'Overview', 'TIU AIML'],
    takeaways: [
      'Masterclass objectives & live lab guidelines',
      'Overview of student hackathon & API credits',
      'Foundational shift towards multimodal context windows',
    ],
  },
  {
    time: '11:20 AM – 12:00 PM',
    title: 'Deep-Dive: Gemini Architecture & Multimodal Reasoning',
    speaker: 'Arti Dwivedi',
    speakerRole: 'Gemini Adoption Lead · Google Cloud Ecosystem',
    description: 'Comprehensive architectural teardown of Gemini 2.5 Flash and Pro models. Demonstrating native multimodal tokenization, cross-modal attention, and industrial workflows in vision, audio, and code understanding.',
    format: 'Deep Dive',
    tags: ['Architecture', 'Multimodal', 'Enterprise Workflows'],
    takeaways: [
      'How Gemini processes interleaved audio, video, and text in single context passes',
      'Techniques for managing 1M+ token context windows without needle-in-haystack degradation',
      'Strategies for high-throughput enterprise reasoning pipelines',
    ],
  },
  {
    time: '12:00 PM – 12:40 PM',
    title: 'Hands-on Technical Lab: Code to Production with Gemini SDK',
    speaker: 'Ankita Shaw',
    speakerRole: 'Google-Certified Trainer & AI Developer Advocate',
    description: 'Interactive live coding session where all students follow along on their laptops. Building an end-to-end autonomous research assistant using Google AI Studio, the @google/genai SDK, structured schema enforcement, and tool calling.',
    format: 'Hands-on Lab',
    tags: ['Live Coding', 'Google AI Studio', 'Function Calling', 'TypeScript / Python'],
    takeaways: [
      'Hands-on setup of Google AI Studio & API credentials',
      'Building zero-hallucination structured responses using JSON schema validation',
      'Wiring live external APIs as tools for autonomous Gemini execution',
    ],
  },
  {
    time: '12:40 PM – 1:00 PM',
    title: 'Interactive Q&A, Project Showcase & Certificate Verification',
    speaker: 'Arti Dwivedi & Ankita Shaw with TIU Faculty',
    speakerRole: 'Joint Panel Session',
    description: 'Open mic session for student questions on research, career pathways in Generative AI, and graduate programs. Announcement of the TIU Gemini Innovation Challenge and digital certificate distribution.',
    format: 'Interactive Q&A',
    tags: ['Open Q&A', 'Career Insights', 'Certificates'],
    takeaways: [
      'Career pathways in applied AI engineering and Google certification tracks',
      'Announcement of 2-week TIU Gemini AI Buildathon with cash awards',
      'Biometric attendance verification for official university records',
    ],
  },
];

export const MANDATORY_CHECKLIST = [
  {
    id: 'laptop',
    title: 'Personal Laptop & Power Charger',
    description: 'Charged to at least 80%. Every desk in 11th floor hall is equipped with individual AC power sockets.',
    importance: 'Strictly Mandatory for Hands-on Coding Lab',
  },
  {
    id: 'uniform',
    title: 'University Formal Uniform',
    description: 'Full official TIU uniform as per university discipline standards. Casual attire is not permitted.',
    importance: 'Mandatory for All AIML 1A, 1B, 1C, 1D Students',
  },
  {
    id: 'id-card',
    title: 'Physical University Student ID Card',
    description: 'Required for barcode/RFID biometric check-in at the 11th Floor auditorium turnstiles.',
    importance: 'Required for Campus Security & Hall Access',
  },
  {
    id: 'google-account',
    title: 'Active Google / Google AI Studio Account',
    description: 'Ensure you can log in to aistudio.google.com with your student or personal Google account.',
    importance: 'Required to generate sandbox API keys during workshop',
  },
  {
    id: 'dev-environment',
    title: 'Node.js (v18+) or Python (3.10+) Installed',
    description: 'VS Code, Cursor, or Jupyter Notebook ready for rapid package installation during the hands-on sprint.',
    importance: 'Recommended for local code experimentation',
  },
];

export const PROMPT_SCENARIOS: PromptScenario[] = [
  {
    id: 'multimodal',
    title: 'Multimodal Engineering & Code Review',
    badge: 'Gemini 2.5 Flash',
    description: 'Analyzing architectural system diagrams, UI screenshots, and code simultaneously.',
    model: 'gemini-2.5-flash',
    systemInstruction: 'You are an expert senior systems architect and staff software engineer. Provide concise, high-rigor architectural evaluations with concrete remediation steps.',
    userPrompt: 'Analyze this distributed microservices telemetry diagram. Identify cascading failure vectors in the Redis queue under 10k RPS spike, and output the recommended circuit breaker configuration.',
    mockResponse: `**Architecture Audit Summary:**
1. **Primary Bottleneck:** Redis queue cluster exhibits unbounded connection pooling during spike intervals (>8,500 RPS).
2. **Cascading Failure Vector:** Downstream worker nodes exhaust memory waiting on un-throttled synchronous message desync.

**Remediation: Circuit Breaker & Adaptive Throttling**
\`\`\`typescript
const breakerConfig = {
  failureThreshold: 0.15, // 15% error rate triggers trip
  resetTimeoutMs: 5000,
  halfOpenMaxRequests: 100,
  fallback: () => ({ status: 'QUEUED_IN_BACKUP_S3', retryAfter: 12 })
};
\`\`\`
*Confidence Score: 98.4% · Grounded on Google Distributed Systems Patterns*`,
    pythonSnippet: `from google import genai
from google.genai import types

client = genai.Client()
response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=["Analyze this architecture diagram for circuit breaker risks...", image_bytes],
    config=types.GenerateContentConfig(
        system_instruction="You are a senior systems architect.",
        temperature=0.2
    )
)
print(response.text)`,
    jsSnippet: `import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({});
const response = await ai.models.generateContent({
  model: 'gemini-2.5-flash',
  contents: ['Analyze diagram for 10k RPS failure vectors...', imagePart],
  config: {
    systemInstruction: 'You are a senior systems architect.',
    temperature: 0.2
  }
});
console.log(response.text);`,
    tokens: { prompt: 248, response: 312, total: 560 },
    latency: '340ms',
  },
  {
    id: 'structured-json',
    title: 'Strict Structured JSON Output Schema',
    badge: 'Guaranteed Type Safety',
    description: 'Enforcing deterministic JSON responses matching university student project grading rubrics.',
    model: 'gemini-2.5-flash',
    systemInstruction: 'Output purely valid JSON conforming strictly to the requested schema. Do not wrap in markdown or commentary.',
    userPrompt: 'Evaluate student project "Autonomous Rover using Jetson Nano" against TIU AIML Capstone rubric. Grade Innovation (1-25), Hardware Integration (1-25), Algorithm Efficiency (1-25), Documentation (1-25).',
    mockResponse: `{
  "project_title": "Autonomous Rover using Jetson Nano",
  "department": "AIML",
  "evaluation": {
    "innovation_score": 23,
    "hardware_integration_score": 24,
    "algorithm_efficiency_score": 22,
    "documentation_score": 25,
    "total_score": 94,
    "grade": "O (Outstanding)"
  },
  "key_strengths": [
    "Clean TensorRT model optimization on edge Jetson platform",
    "Comprehensive Kalman filter telemetry log analysis"
  ],
  "recommended_refinements": [
    "Implement battery health telemetry via I2C bus monitoring"
  ],
  "verified_by": "Gemini Schema Evaluator v2.5"
}`,
    pythonSnippet: `from google import genai
from pydantic import BaseModel

class ProjectGrade(BaseModel):
    innovation_score: int
    hardware_score: int
    total_score: int
    recommendation: list[str]

client = genai.Client()
res = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="Evaluate AIML Capstone Project...",
    config=dict(response_mime_type="application/json", response_schema=ProjectGrade)
)
print(res.text)`,
    jsSnippet: `import { GoogleGenAI, Type } from '@google/genai';

const ai = new GoogleGenAI({});
const res = await ai.models.generateContent({
  model: 'gemini-2.5-flash',
  contents: 'Evaluate AIML Capstone Project...',
  config: {
    responseMimeType: 'application/json',
    responseSchema: {
      type: Type.OBJECT,
      properties: {
        totalScore: { type: Type.INTEGER },
        grade: { type: Type.STRING },
        strengths: { type: Type.ARRAY, items: { type: Type.STRING } }
      }
    }
  }
});`,
    tokens: { prompt: 190, response: 180, total: 370 },
    latency: '260ms',
  },
  {
    id: 'function-calling',
    title: 'Autonomous Tool Use & Function Calling',
    badge: 'Real-time Agentic APIs',
    description: 'Equipping Gemini with callable tools for real-time university portal timetable queries.',
    model: 'gemini-2.5-pro',
    systemInstruction: 'You are a campus AI assistant with access to TIU Academic Calendar and Room Allocation APIs.',
    userPrompt: 'Check if TIU 11th Floor Conference Hall is booked after 1:00 PM on Sept 23, 2026, and find the nearest available lab for AIML 1B extra project discussion.',
    mockResponse: `[Tool Call Dispatched: queryRoomAvailability({ floor: 11, room: "Main Conference Hall", date: "2026-09-23", timeAfter: "13:00" })]
[Tool Return: { available: false, nextEvent: "Departmental Research Symposium", bookedUntil: "17:00" }]

[Tool Call Dispatched: findNearbyAvailableLabs({ department: "AIML", capacity: 60, time: "13:30" })]
[Tool Return: { room: "Lab 7B (9th Floor)", capacity: 65, status: "AVAILABLE", hasProjector: true }]

**Assistant Synthesis:**
The 11th Floor Conference Hall is scheduled for the *Departmental Research Symposium* starting immediately at 1:15 PM until 5:00 PM. 

For the **AIML Section 1B** project discussion, **Lab 7B on the 9th Floor** is currently reserved and vacant with 65 workstations and dual 4K displays.`,
    pythonSnippet: `from google import genai
from google.genai import types

def query_room(room_id: str, date: str) -> dict:
    return {"status": "available"}

client = genai.Client()
res = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="Check room availability...",
    config=types.GenerateContentConfig(
        tools=[query_room]
    )
)`,
    jsSnippet: `// Function declaration passed directly to Gemini SDK
const toolDeclaration = {
  name: 'queryRoomAvailability',
  description: 'Query room booking schedule on TIU campus',
  parameters: { /* JSON Schema */ }
};

const response = await ai.models.generateContent({
  model: 'gemini-2.5-flash',
  contents: 'Check 11th floor conference hall status...',
  config: { tools: [{ functionDeclarations: [toolDeclaration] }] }
});`,
    tokens: { prompt: 310, response: 240, total: 550 },
    latency: '410ms',
  },
];

export const FAQS: FaqItem[] = [
  {
    category: 'Attendance',
    question: 'Is attendance mandatory for all students?',
    answer: 'Yes. Attendance is strictly mandatory for all B.Tech AIML students belonging to Sections 1A, 1B, 1C, and 1D. Biometric RFID check-in records will be synchronized directly with the ERP academic attendance register. Students from other departments (CSE, IT, ECE) may register as guest participants subject to hall seating limits.',
  },
  {
    category: 'Preparation',
    question: 'What do I need to prepare before arriving at the 11th Floor Conference Hall?',
    answer: 'Ensure your laptop is charged to at least 80% (all desks have dedicated charging outlets), wear the official TIU university uniform, carry your physical Student ID card, and have an active Google Account ready to access Google AI Studio (aistudio.google.com). Having Node.js or Python pre-installed is recommended for hands-on exercises.',
  },
  {
    category: 'Curriculum',
    question: 'Do I need advanced machine learning background to understand the sessions?',
    answer: 'No prior advanced AI specialization is required. The masterclass is curated specifically for undergraduate engineering students, starting from foundational prompt architecture and progressing to practical, industry-grade API integration with live guided coding by Google-certified experts.',
  },
  {
    category: 'Certification',
    question: 'Will students receive an official Certificate of Participation?',
    answer: 'Yes! All attendees with verified biometric RFID entrance and exit scans will receive an official verifiable digital credential co-issued by Techno India University Department of AIML and Google ecosystem speakers, suitable for LinkedIn and academic resumes.',
  },
  {
    category: 'Preparation',
    question: 'Can I attend if I forgot my laptop or uniform?',
    answer: 'Discipline and professional readiness are paramount at Techno India University. University uniform and ID cards are mandatory for entry past security. For laptops, students without laptops will be seated in designated peer-pairing rows with fellow section mates to ensure complete participation in the hands-on lab.',
  },
  {
    category: 'Curriculum',
    question: 'Will code repositories and presentation decks be made available after the event?',
    answer: 'Yes. All presentation slide decks, Google AI Studio notebooks, starter code repositories, and cheat sheets for the @google/genai SDK will be shared immediately via the digital pass portal after the 1:00 PM session conclusion.',
  },
];
