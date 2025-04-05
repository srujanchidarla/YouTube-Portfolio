// app/category/analytics/types.ts

export interface Skill {
  name: string;
  proficiency: number;
}

export interface LanguageStat {
  name: string;
  percentage: number;
  color: string;
}

export interface GitHubStatsData {
  totalStars: number;
  totalCommits: number;
  totalPRs: number;
  totalIssues: number;
  contributedLastYear: number;
  totalContributions: number;
  currentStreak: number;
  longestStreak: number;
  currentStreakDates: string;
  longestStreakDates: string;
  startDate: string;
  languageStats: LanguageStat[];
}

export interface YearlyProject {
  year: string;
  count: number;
}

export interface Technology {
  name: string;
  count: number;
  type: "frontend" | "backend" | "database";
}

export interface ProjectStatsData {
  totalProjects: number;
  webProjects: number;
  mobileProjects: number;
  toolsProjects: number;
  projectsByYear: YearlyProject[];
  mostUsedTechnologies: Technology[];
}
