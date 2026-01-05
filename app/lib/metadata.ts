import type { Metadata } from "next";
type PageKey =
  | "landingPage"
  | "aiUnifiedInbox"
  | "aiSmartCalendar"
  | "aiDiaryVoiceNotes"
  | "aiVoiceAssistant"
  | "aiCallAgent"
  | "aiBudgetModule"
  | "aiVault"
  | "aiHealthTracking"
  | "aiPrivacyPolicy"
  | "aiSupport"
  | "aiTermsServices"

export const siteConfig = {
  name: "Me Myself AI",
  description:
    "An all-in-one AI productivity platform to manage life, work, and health smarter.",
};

export const pageMetadata: Record<PageKey, Metadata> = {
  landingPage: {
    title: "AI Productivity Platform",
    description:
      "Manage your life with one AI-powered platform — calendar, inbox, voice, budget, health, and more.",
    keywords: [
      "AI productivity",
      "personal AI assistant",
      "life management AI",
      "smart productivity app",
      "AI all-in-one platform",
    ],
  },

  aiUnifiedInbox: {
    title: "AI Unified Inbox",
    description:
      "One smart inbox powered by AI to manage emails, messages, and notifications effortlessly.",
    keywords: [
      "AI unified inbox",
      "smart inbox AI",
      "email automation",
      "AI message management",
    ],
  },

  aiSmartCalendar: {
    title: "AI Smart Calendar",
    description:
      "Plan smarter with an AI calendar that schedules, prioritizes, and adapts to your life.",
    keywords: [
      "AI calendar",
      "smart scheduling",
      "AI time management",
      "productivity calendar",
    ],
  },

  aiDiaryVoiceNotes: {
    title: "AI Diary & Voice Notes",
    description:
      "Capture thoughts, moments, and ideas with AI-powered diary entries and voice notes.",
    keywords: [
      "AI diary",
      "voice notes AI",
      "personal journaling app",
      "AI note taking",
    ],
  },

  aiVoiceAssistant: {
    title: "AI Voice Assistant",
    description:
      "Your personal AI voice assistant to help you plan, track, and get things done faster.",
    keywords: [
      "AI voice assistant",
      "voice controlled AI",
      "personal assistant AI",
      "hands-free productivity",
    ],
  },

  aiCallAgent: {
    title: "AI Call Agent",
    description:
      "Automate calls with an intelligent AI call agent that handles conversations for you.",
    keywords: [
      "AI call agent",
      "automated calling AI",
      "AI phone assistant",
      "voice automation",
    ],
  },

  aiBudgetModule: {
    title: "AI Budget Module",
    description:
      "Track spending, manage budgets, and get AI-powered insights for smarter finances.",
    keywords: [
      "AI budget",
      "expense tracking AI",
      "personal finance AI",
      "smart money management",
    ],
  },

  aiVault: {
    title: "Vault",
    description:
      "Securely store your sensitive data, documents, and memories in an encrypted AI vault.",
    keywords: [
      "secure vault",
      "encrypted storage",
      "AI data security",
      "digital vault",
    ],
  },

  aiHealthTracking: {
    title: "AI Health Tracking",
    description:
      "Monitor your health with AI-driven insights, habits, and wellness tracking.",
    keywords: [
      "AI health tracking",
      "wellness AI",
      "health monitoring app",
      "AI fitness tracking",
    ],
  },
   aiSupport: {
    title: "AI Health Tracking",
    description:
      "Monitor your health with AI-driven insights, habits, and wellness tracking.",
    keywords: [
      "AI health tracking",
      "wellness AI",
      "health monitoring app",
      "AI fitness tracking",
    ],
  },
   aiPrivacyPolicy: {
    title: "AI Privacy Policy",
    description:
      "Monitor your health with AI-driven insights, habits, and wellness tracking.",
    keywords: [
      "AI health tracking",
      "wellness AI",
      "health monitoring app",
      "AI fitness tracking",
    ],
  },
   aiTermsServices: {
    title: "AI Terms of Services",
    description:
      "Monitor your health with AI-driven insights, habits, and wellness tracking.",
    keywords: [
      "AI health tracking",
      "wellness AI",
      "health monitoring app",
      "AI fitness tracking",
    ],
  },

};
