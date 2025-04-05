// app/category/analytics/components/SkillsSection.tsx

import React from "react";
import {
  CodeBracketIcon,
  ServerIcon,
  CircleStackIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";
import { Skill } from "../types";

const SkillsSection = () => {
  // Skill proficiency levels (out of 10)
  const frontendSkills: Skill[] = [
    { name: "TypeScript", proficiency: 9 },
    { name: "React.js", proficiency: 9 },
    { name: "Next.js", proficiency: 8 },
    { name: "TailwindCSS", proficiency: 9 },
    { name: "JavaScript", proficiency: 9 },
    { name: "HTML/CSS", proficiency: 9 },
  ];

  const backendSkills: Skill[] = [
    { name: "Node.js", proficiency: 8 },
    { name: "Express.js", proficiency: 8 },
    { name: "Spring Boot", proficiency: 7 },
    { name: "RESTful APIs", proficiency: 9 },
    { name: "GraphQL", proficiency: 7 },
  ];

  const databaseSkills: Skill[] = [
    { name: "MongoDB", proficiency: 8 },
    { name: "PostgreSQL", proficiency: 7 },
    { name: "MySQL", proficiency: 8 },
    { name: "Firebase", proficiency: 8 },
  ];

  const mobileSkills: Skill[] = [
    { name: "React Native", proficiency: 8 },
    { name: "Flutter", proficiency: 6 },
    { name: "Expo", proficiency: 8 },
  ];

  const devOpsTools: Skill[] = [
    { name: "Git/GitHub", proficiency: 9 },
    { name: "Docker", proficiency: 7 },
    { name: "AWS", proficiency: 7 },
    { name: "CI/CD", proficiency: 7 },
  ];

  const designTools: Skill[] = [
    { name: "Figma", proficiency: 8 },
    { name: "Adobe XD", proficiency: 7 },
    { name: "Photoshop", proficiency: 6 },
  ];

  const renderSkillBar = (skill: Skill) => {
    const percentage = (skill.proficiency / 10) * 100;
    return (
      <div key={skill.name} className="mb-3">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {skill.name}
          </span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {skill.proficiency}/10
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="mb-12">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Frontend Skills */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow border border-gray-200 dark:border-zinc-700">
          <div className="flex items-center mb-4">
            <CodeBracketIcon className="h-6 w-6 text-blue-500 mr-2" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Frontend
            </h3>
          </div>
          {frontendSkills.map((skill) => renderSkillBar(skill))}
        </div>

        {/* Backend Skills */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow border border-gray-200 dark:border-zinc-700">
          <div className="flex items-center mb-4">
            <ServerIcon className="h-6 w-6 text-green-500 mr-2" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Backend
            </h3>
          </div>
          {backendSkills.map((skill) => renderSkillBar(skill))}
        </div>

        {/* Database Skills */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow border border-gray-200 dark:border-zinc-700">
          <div className="flex items-center mb-4">
            <CircleStackIcon className="h-6 w-6 text-yellow-500 mr-2" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Databases & Cloud
            </h3>
          </div>
          {databaseSkills.map((skill) => renderSkillBar(skill))}
        </div>

        {/* Mobile Skills */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow border border-gray-200 dark:border-zinc-700">
          <div className="flex items-center mb-4">
            <DevicePhoneMobileIcon className="h-6 w-6 text-purple-500 mr-2" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Mobile Development
            </h3>
          </div>
          {mobileSkills.map((skill) => renderSkillBar(skill))}
        </div>

        {/* DevOps Tools */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow border border-gray-200 dark:border-zinc-700">
          <div className="flex items-center mb-4">
            <WrenchScrewdriverIcon className="h-6 w-6 text-red-500 mr-2" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              DevOps & Tools
            </h3>
          </div>
          {devOpsTools.map((skill) => renderSkillBar(skill))}
        </div>

        {/* Design Tools */}
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow border border-gray-200 dark:border-zinc-700">
          <div className="flex items-center mb-4">
            <PaintBrushIcon className="h-6 w-6 text-pink-500 mr-2" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Design Tools
            </h3>
          </div>
          {designTools.map((skill) => renderSkillBar(skill))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
