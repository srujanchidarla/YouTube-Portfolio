// components/projects/ProjectContentProvider.tsx
"use client";

import React from "react";

interface ProjectContentProviderProps {
  projectId: string;
}

const ProjectContentProvider: React.FC<ProjectContentProviderProps> = ({
  projectId,
}) => {
  // Get a display-friendly project name
  const getProjectName = () => {
    const nameMap: Record<string, string> = {
      weatherwise: "WeatherWise",
      jobfinder: "JobFinder",
      pixelpeek: "PixelPeek",
      truescreenshot: "TrueScreenshot",
      "agile-retro": "Agile Retrospective Tool",
      ecommerce: "E-Commerce Platform",
      "make-receipt": "Make a Receipt",
      todo: "Interactive To-Do List",
    };

    return nameMap[projectId.toLowerCase()] || `Project ${projectId}`;
  };

  // Generate placeholder content
  const getPlaceholderContent = () => {
    return (
      <div className="p-8">
        <h2 className="text-xl font-bold mb-6 dark:text-white">
          {getProjectName()}
        </h2>

        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Project Overview
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              This is a placeholder for the detailed content of{" "}
              {getProjectName()}. The full project information will be displayed
              here.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Key Features
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Feature placeholder 1</li>
              <li>Feature placeholder 2</li>
              <li>Feature placeholder 3</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Technical Highlights
            </h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TailwindCSS", "TypeScript"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm overflow-hidden">
      {getPlaceholderContent()}
    </div>
  );
};

export default ProjectContentProvider;
