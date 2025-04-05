// utils/projectMapping.ts

// Export these as named exports, not default exports
export const numericToProjectId: Record<string, string> = {
  "1": "weatherwise",
  "2": "jobfinder",
  "3": "pixelpeek",
  "4": "truescreenshot",
  "5": "agile-retro",
  "6": "ecommerce",
  "7": "make-receipt",
  "8": "todo",
};

// Map from project name IDs to display names
export const projectIdToDisplayName: Record<string, string> = {
  weatherwise: "WeatherWise",
  jobfinder: "JobFinder",
  pixelpeek: "PixelPeek",
  truescreenshot: "TrueScreenshot",
  "agile-retro": "Agile Retrospective Tool",
  ecommerce: "E-Commerce Platform",
  "make-receipt": "Make a Receipt",
  todo: "Interactive To-Do List",
};

// Utility function to get a project's display name
export const getProjectDisplayName = (projectId: string): string => {
  return (
    projectIdToDisplayName[projectId.toLowerCase()] || `Project ${projectId}`
  );
};

// Utility function to convert numeric IDs to project IDs if needed
export const normalizeProjectId = (id: string): string => {
  if (numericToProjectId[id]) {
    return numericToProjectId[id];
  }
  return id;
};

// Note: We're removing the isValidProjectId function as it was unused and
// likely caused the duplicate declaration issue
