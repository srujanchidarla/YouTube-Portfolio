// app/utils/projectMapping.ts - Fixed with consistent imports

import AgileRetroContent from "@/components/projects/AgileRetroContent";
import AgriWiseContent from "@/components/projects/AgriWiseContent";
import ECommerceContent from "@/components/projects/ECommerceContent";
import FlightBuddyContent from "@/components/projects/FlightBuddyContent";
import HealthRecordsContent from "@/components/projects/HealthRecordsContent";
import JobFinderContent from "@/components/projects/JobFinderContent";
import MakeReceiptContent from "@/components/projects/MakeReceiptContent";
import PixelPeekContent from "@/components/projects/PixelPeekContent";
import SportsPlatformContent from "@/components/projects/SportsPlatformContent";
import StudyGlobalContent from "@/components/projects/StudyGlobalContent";
import TodoContent from "@/components/projects/TodoContent";
import TrueScreenshotContent from "@/components/projects/TrueScreenshotContent";
import WeatherWiseContent from "@/components/projects/WeatherWiseContent";

// Project ID normalization
export const normalizeProjectId = (id: string): string => {
  // Handle numeric IDs by converting them to project names
  if (numericToProjectId[id]) {
    return numericToProjectId[id];
  }
  return id.toLowerCase();
};

// Map numeric IDs to project names for backwards compatibility
export const numericToProjectId: Record<string, string> = {
  "1": "weatherwise",
  "2": "jobfinder",
  "3": "pixelpeek",
  "4": "truescreenshot",
  "5": "agile-retro",
  "6": "ecommerce",
  "7": "make-receipt",
  "8": "todo",
  // New projects map to project names
  "9": "agriwise",
  "10": "studyglobal",
  "11": "flightbuddy",
  "12": "sportsplatform",
  "13": "healthrecords",
};

// Project display names
export const getProjectDisplayName = (projectId: string): string => {
  const displayNames: Record<string, string> = {
    weatherwise: "WeatherWise: Real-Time Weather Tracking",
    jobfinder: "JobFinder: Job Search Platform",
    pixelpeek: "PixelPeek: Chrome Extension",
    truescreenshot: "TrueScreenshot: VS Code Extension",
    "agile-retro": "Agile Retrospective Tool",
    ecommerce: "E-Commerce Platform",
    "make-receipt": "Make a Receipt: Mobile App",
    todo: "Interactive To-Do List",
    // New projects with project name IDs
    agriwise: "AgriWise: Digital Agriculture Platform",
    studyglobal: "StudyGlobal: International Student Services",
    flightbuddy: "Flight Buddy: Travelers Connection Platform",
    sportsplatform: "Sports & Fitness Platform",
    healthrecords: "Health Records Management System",
  };

  return displayNames[projectId] || projectId;
};

// Project content mapping
export const projectMapping = {
  // NEW INNOVATIVE PROJECTS - using project name IDs
  agriwise: AgriWiseContent,
  studyglobal: StudyGlobalContent,
  flightbuddy: FlightBuddyContent,
  sportsplatform: SportsPlatformContent,
  healthrecords: HealthRecordsContent,

  // EXISTING PROJECTS - using string IDs
  weatherwise: WeatherWiseContent,
  jobfinder: JobFinderContent,
  pixelpeek: PixelPeekContent,
  truescreenshot: TrueScreenshotContent,
  "agile-retro": AgileRetroContent,
  ecommerce: ECommerceContent,
  "make-receipt": MakeReceiptContent,
  todo: TodoContent,
};
