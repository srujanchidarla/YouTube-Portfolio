// data/categories.ts - Complete with all needed categories
import { Category } from "../types";

export const categories: Category[] = [
  // New innovative tech domains (featured first)
  { id: "agritech", name: "AgriTech" },
  { id: "healthtech", name: "HealthTech" },
  { id: "edtech", name: "EdTech" },
  { id: "traveltech", name: "Travel Tech" },
  { id: "sportstech", name: "Sports Tech" },

  // Core development categories
  { id: "web", name: "Web Development" },
  { id: "mobile", name: "Mobile Apps" },
  { id: "extensions", name: "Browser Extensions" },
  { id: "devtools", name: "Developer Tools" },
  { id: "project-management", name: "Project Management" },

  // Technology stack categories
  { id: "full-stack", name: "Full Stack" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },

  // Framework/Library categories
  { id: "react", name: "React" },
  { id: "angular", name: "Angular" },
  { id: "nextjs", name: "Next.js" },

  // Language categories
  { id: "javascript", name: "JavaScript" },
  { id: "typescript", name: "TypeScript" },
  { id: "nodejs", name: "Node.js" },
];
