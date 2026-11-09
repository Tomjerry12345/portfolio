// Edit this file to update the portfolio. No other file needs to change.

export const profile = {
  name: "Andri Alfiandi",
  role: "Frontend & Full-Stack Developer",
  location: "Bulukumba, South Sulawesi, Indonesia",
  email: "Andrialfiandi46@gmail.com",
  github: "https://github.com/Tomjerry12345",
  linkedin: "https://linkedin.com/in/andri-alfiandi",
  intro:
    "I build web and mobile apps with React, Next.js, TypeScript and Flutter. I spent a year building React.js interfaces for Kalla Group’s financial platform, and since 2024 I take on freelance web, mobile and AI projects.",
};

export type Project = {
  year: string;
  name: string;
  summary: string;
  stack: string;
  live?: string;
  code?: string;
  note?: string;
};

export const webProjects: Project[] = [
  {
    year: "2026",
    name: "SI-KILAT",
    summary:
      "Chatbot that answers civil registry questions (ID card, family card, birth certificate, office hours and location) on the official Dukcapil TTS Regency website, as a responsive popup widget and through a QR code.",
    stack: "Next.js, TypeScript, Gemini API",
    live: "https://dukcapil.ttskab.go.id",
  },
  {
    year: "2026",
    name: "Pelulu Tools",
    summary:
      "EXP calculator and item search for Toram Online players, with filters by stat, type and event. Built and maintained solo, updated as the game changes.",
    stack: "Next.js, TypeScript, Vercel",
    live: "https://pelulu-tools.vercel.app",
  },
  {
    year: "2026",
    name: "JudolScan",
    summary:
      "Checks whether a website is an online gambling site. A Python classifier and scraper sit behind a web interface for single checks, batch checks and check history.",
    stack: "Python, Next.js, machine learning",
    live: "https://judol-detector-frontend.vercel.app",
  },
  {
    year: "2024",
    name: "Luwu–Indonesian translator",
    summary:
      "Translates the Luwu language into Indonesian. I trained the neural machine translation model myself on a client’s dataset and integrated it into a web app.",
    stack: "Flask, Next.js, NMT, Google Colab",
  },
];

export const mobileProjects: Project[] = [
  {
    year: "2026",
    name: "Teleprint",
    summary:
      "Prints WiFi vouchers automatically. A Telegram bot and a Node.js backend send receipts to a thermal printer.",
    stack: "Android (Kotlin), Node.js, Telegram Bot API",
  },
  {
    year: "2025",
    name: "Tarkam Live Score",
    summary: "Live scores for local tournament matches. My undergraduate thesis project.",
    stack: "Android (Kotlin)",
    note: "Private repository",
  },
  {
    year: "Since 2024",
    name: "Flutter apps for clients",
    summary: "A library app, a seedling marketplace and a goat farming management app.",
    stack: "Flutter, Dart",
  },
  {
    year: "2023",
    name: "Coffee bean classification",
    summary: "Android app that classifies coffee bean images with a neural network.",
    stack: "Android (Kotlin)",
    code: "https://github.com/Tomjerry12345/klasifikasi-biji-kopi",
  },
  {
    year: "2022",
    name: "Myseum",
    summary: "Android app that detects objects with TensorFlow Lite and YOLO.",
    stack: "Android (Java), TensorFlow Lite",
    code: "https://github.com/Tomjerry12345/Myseum",
  },
  {
    year: "2022",
    name: "eHealth Calendar",
    summary:
      "Diabetes monitoring app with separate nurse and patient roles. I wrote the business logic and data processing; a teammate built the UI.",
    stack: "Android (Kotlin)",
    code: "https://github.com/Tomjerry12345/eCalendarHealth",
  },
];

export const experience = [
  {
    period: "Jun 2024 – now",
    title: "Freelance Software Developer",
    place: "Self-employed, remote",
    detail:
      "Web and mobile apps (Next.js, Flutter, Node.js) for government agencies, organizations and small businesses, including AI and machine learning features.",
  },
  {
    period: "Mar – May 2024",
    title: "Frontend Developer (Mobile)",
    place: "Orbit Tech Solution, contract, remote",
    detail:
      "React Native app for agricultural operations: field modules from soil preparation to harvest, farmer data, land management and photo documentation.",
  },
  {
    period: "Nov 2022 – Nov 2023",
    title: "Frontend Developer",
    place: "Kalla Group, contract",
    detail:
      "React.js financial system for all Kalla Group companies: accounting, financial reports and payroll, a real-time dashboard (revenue, COGS, gross profit, EBT, NCFO) and an in-browser spreadsheet with Excel import and export.",
  },
  {
    period: "2021 – 2023",
    title: "Freelance Android Developer",
    place: "Individual clients",
    detail:
      "Custom Android apps in Kotlin and Java, including image classification and object detection with TensorFlow Lite and YOLO.",
  },
  {
    period: "May – Aug 2022",
    title: "Android Developer (Freelance)",
    place: "CentraHealthIT, remote",
    detail: "Built eHealth Calendar with one other developer.",
  },
];

export const skills = [
  { group: "Frontend", items: "React.js, Next.js, TypeScript, JavaScript, TailwindCSS, Redux, Zustand, Recoil" },
  { group: "Backend", items: "Node.js, Express.js, Python (Flask), REST APIs, Telegram Bot API" },
  { group: "Mobile", items: "Flutter and Dart, Android (Kotlin, Java), React Native" },
  { group: "Data and tools", items: "MySQL, MongoDB, Firebase, SQLite, Supabase, Git, Vercel, Netlify, Cloudflare, Gemini API" },
];

export const education = {
  degree: "Bachelor of Informatics Engineering",
  school: "Universitas Islam Negeri (UIN) Alauddin Makassar, graduated 2025",
  detail: "GPA 3.38. Teaching assistant for several courses.",
};
