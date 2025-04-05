// app/category/analytics/components/ProjectStatistics.tsx

import React from "react";
import {
  CodeBracketIcon,
  ServerIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";

const ProjectStatistics = () => {
  // Project statistics
  const projectStats = {
    totalProjects: 12,
    webProjects: 6,
    mobileProjects: 4,
    toolsProjects: 2,
    projectsByYear: [
      { year: "2021", count: 2 },
      { year: "2022", count: 3 },
      { year: "2023", count: 4 },
      { year: "2024", count: 5 },
    ],
    mostUsedTechnologies: [
      { name: "React", count: 8, type: "frontend" },
      { name: "Node.js", count: 6, type: "backend" },
      { name: "MongoDB", count: 5, type: "database" },
      { name: "Express", count: 5, type: "backend" },
      { name: "TailwindCSS", count: 4, type: "frontend" },
    ],
  };

  return (
    <div className="mb-12">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Project Statistics
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Project Distribution */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow border border-gray-200 dark:border-zinc-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Project Distribution
          </h3>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400">
                  Web Projects
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-blue-600 dark:text-blue-400">
                  {(
                    (projectStats.webProjects / projectStats.totalProjects) *
                    100
                  ).toFixed(0)}
                  %
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200 dark:bg-blue-900/30">
              <div
                style={{
                  width: `${
                    (projectStats.webProjects / projectStats.totalProjects) *
                    100
                  }%`,
                }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
              ></div>
            </div>

            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200 dark:bg-purple-900/30 dark:text-purple-400">
                  Mobile Projects
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-purple-600 dark:text-purple-400">
                  {(
                    (projectStats.mobileProjects / projectStats.totalProjects) *
                    100
                  ).toFixed(0)}
                  %
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200 dark:bg-purple-900/30">
              <div
                style={{
                  width: `${
                    (projectStats.mobileProjects / projectStats.totalProjects) *
                    100
                  }%`,
                }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
              ></div>
            </div>

            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 dark:bg-green-900/30 dark:text-green-400">
                  Tools Projects
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-green-600 dark:text-green-400">
                  {(
                    (projectStats.toolsProjects / projectStats.totalProjects) *
                    100
                  ).toFixed(0)}
                  %
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200 dark:bg-green-900/30">
              <div
                style={{
                  width: `${
                    (projectStats.toolsProjects / projectStats.totalProjects) *
                    100
                  }%`,
                }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                {projectStats.totalProjects}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Total Projects
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                {projectStats.projectsByYear.reduce(
                  (sum, year) => sum + year.count,
                  0
                )}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Completed Projects
              </p>
            </div>
          </div>
        </div>

        {/* Projects by Year */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow border border-gray-200 dark:border-zinc-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Projects by Year
          </h3>
          <div className="h-64 flex items-end justify-between">
            {projectStats.projectsByYear.map((year) => (
              <div key={year.year} className="flex flex-col items-center">
                <div
                  className="w-16 bg-indigo-500 dark:bg-indigo-600 rounded-t-lg"
                  style={{ height: `${year.count * 40}px` }}
                ></div>
                <div className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                  {year.year}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {year.count} projects
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Most Used Technologies */}
      <div className="mt-6">
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow border border-gray-200 dark:border-zinc-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Most Used Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {projectStats.mostUsedTechnologies.map((tech) => (
              <div
                key={tech.name}
                className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-4 text-center"
              >
                <div className="w-full flex justify-center mb-2">
                  {tech.type === "frontend" && (
                    <CodeBracketIcon className="h-8 w-8 text-blue-500" />
                  )}
                  {tech.type === "backend" && (
                    <ServerIcon className="h-8 w-8 text-green-500" />
                  )}
                  {tech.type === "database" && (
                    <CircleStackIcon className="h-8 w-8 text-yellow-500" />
                  )}
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {tech.name}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  {tech.count}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  projects
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStatistics;
