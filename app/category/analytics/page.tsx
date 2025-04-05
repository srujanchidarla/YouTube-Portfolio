// Main Analytics page structure
// app/category/analytics/page.tsx

"use client";

import React from "react";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import GitHubStats from "./components/GitHubStats";
import SkillsSection from "./components/SkillsSection";
import ProjectStatistics from "./components/ProjectStatistics";
import DevelopmentJourney from "./components/DevelopmentJourney";

const AnalyticsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <ChartBarIcon className="h-8 w-8 text-green-500" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Analytics & Skills
        </h1>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-8">
        A comprehensive overview of my technical skills, project statistics, and
        GitHub activity, showcasing my development journey and areas of
        expertise.
      </p>

      {/* GitHub Stats Section */}
      <GitHubStats />

      {/* Skills Section */}
      <SkillsSection />

      {/* Project Statistics */}
      <ProjectStatistics />

      {/* Development Journey Timeline */}
      <DevelopmentJourney />
    </div>
  );
};

export default AnalyticsPage;
