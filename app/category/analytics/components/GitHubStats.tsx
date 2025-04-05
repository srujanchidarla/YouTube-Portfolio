// app/category/analytics/components/GitHubStats.tsx

import React from "react";

const GitHubStats = () => {
  // GitHub Stats
  const githubStats = {
    totalStars: 5,
    totalCommits: 90,
    totalPRs: 1,
    totalIssues: 1,
    contributedLastYear: 3,
    totalContributions: 106,
    currentStreak: 5,
    longestStreak: 8,
    currentStreakDates: "Apr 2 - Apr 5",
    longestStreakDates: "Oct 20, 2024 - Oct 24, 2024",
    startDate: "May 20, 2021",
    languageStats: [
      { name: "TypeScript", percentage: 55.67, color: "bg-blue-500" },
      { name: "JavaScript", percentage: 22.7, color: "bg-yellow-400" },
      { name: "HTML", percentage: 16.93, color: "bg-orange-500" },
      { name: "CSS", percentage: 4.7, color: "bg-purple-500" },
    ],
  };

  return (
    <div className="mb-12">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
        <svg
          className="h-6 w-6 mr-2 text-gray-700 dark:text-gray-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
        GitHub Stats
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-lg border border-gray-200 dark:border-zinc-700 overflow-hidden shadow-sm">
          <div className="bg-gray-50 dark:bg-zinc-800 px-6 py-4 border-b border-gray-200 dark:border-zinc-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Srujan_chidarla&lsquo;s GitHub Stats
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 dark:text-gray-400">
                  Total Stars Earned:
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {githubStats.totalStars}
                </p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">
                  Total Commits:
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {githubStats.totalCommits}
                </p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Total PRs:</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {githubStats.totalPRs}
                </p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">
                  Total Issues:
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {githubStats.totalIssues}
                </p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">
                  Contributed to (last year):
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {githubStats.contributedLastYear}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 dark:border-zinc-700 overflow-hidden shadow-sm">
          <div className="bg-gray-50 dark:bg-zinc-800 px-6 py-4 border-b border-gray-200 dark:border-zinc-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Contribution Activity
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="col-span-1">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {githubStats.totalContributions}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Total Contributions
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  {githubStats.startDate} - Present
                </p>
              </div>
              <div className="col-span-1">
                <div className="flex justify-center">
                  <div className="relative h-16 w-16 flex items-center justify-center">
                    <svg
                      viewBox="0 0 100 100"
                      className="absolute h-full w-full"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#374151"
                        strokeWidth="10"
                        className="dark:opacity-20 opacity-10"
                      ></circle>
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="10"
                        strokeDasharray="251.2"
                        strokeDashoffset="188.4"
                        className="transform -rotate-90 origin-center"
                      ></circle>
                    </svg>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {githubStats.currentStreak}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Current Streak
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  {githubStats.currentStreakDates}
                </p>
              </div>
              <div className="col-span-1">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {githubStats.longestStreak}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Longest Streak
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  {githubStats.longestStreakDates}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Language Distribution */}
      <div className="mt-6">
        <div className="rounded-lg border border-gray-200 dark:border-zinc-700 overflow-hidden shadow-sm">
          <div className="bg-gray-50 dark:bg-zinc-800 px-6 py-4 border-b border-gray-200 dark:border-zinc-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Most Used Languages
            </h3>
          </div>
          <div className="p-6">
            <div className="h-6 w-full flex rounded-full overflow-hidden mb-6">
              {githubStats.languageStats.map((lang) => (
                <div
                  key={lang.name}
                  className={`${lang.color}`}
                  style={{ width: `${lang.percentage}%` }}
                ></div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {githubStats.languageStats.map((lang) => (
                <div key={lang.name} className="flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full ${lang.color} mr-2`}
                  ></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {lang.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {lang.percentage}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
