// app/category/analytics/components/DevelopmentJourney.tsx

import React from "react";

const DevelopmentJourney = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Development Journey
      </h2>

      <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow border border-gray-200 dark:border-zinc-700">
        <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3">
          <div className="mb-10 ml-6">
            <div className="absolute w-6 h-6 bg-blue-500 rounded-full -left-3 border-4 border-white dark:border-zinc-900"></div>
            <div className="flex items-center">
              <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white mb-1">
                Full Stack Web Developer at WalletGyde
                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                  Current
                </span>
              </h3>
            </div>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2023 - Present
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Developing financial management application with React, Node.js,
              and MongoDB, focusing on security and scalability.
            </p>
          </div>

          <div className="mb-10 ml-6">
            <div className="absolute w-6 h-6 bg-green-500 rounded-full -left-3 border-4 border-white dark:border-zinc-900"></div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              Full Stack Developer at Cognizant Technology Solutions
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2021 - 2023
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Worked on enterprise applications for leading clients, utilizing
              Spring Boot, Angular, and PostgreSQL.
            </p>
          </div>

          <div className="ml-6">
            <div className="absolute w-6 h-6 bg-purple-500 rounded-full -left-3 border-4 border-white dark:border-zinc-900"></div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              Computer Science Education
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2019 - 2021
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Pursued Bachelor&apos;s in Computer Science, focusing on
              algorithms, data structures, and web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentJourney;
