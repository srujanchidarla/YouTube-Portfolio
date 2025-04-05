"use client";

import React from "react";
import {
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  stats?: {
    views: number;
    stars: number;
  };
}

const WebDevelopmentPage = () => {
  const webProjects: Project[] = [
    {
      id: "weatherwise",
      title: "WeatherWise - Real-Time Weather App",
      description:
        "A dynamic weather application with geolocation-based forecasts and interactive maps using Leaflet.js, improving API response times by 10%.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "Leaflet.js",
        "OpenWeatherMap API",
      ],
      liveUrl: "https://weatherwise.online",
      githubUrl: "https://github.com/srujanchidarla/weatherwise",
      featured: true,
      stats: {
        views: 1240,
        stars: 45,
      },
    },
    {
      id: "jobfinder",
      title: "JobFinder - Job Search Platform",
      description:
        "A job portal integrating Adzuna API for real-time listings, improving search relevance by 25% through advanced filtering capabilities.",
      technologies: ["React", "TailwindCSS", "Next.js", "Adzuna API"],
      liveUrl: "ob-finder-pink-mu.vercel.app",
      githubUrl: "https://github.com/srujanchidarla/jobfinder",
      featured: true,
      stats: {
        views: 980,
        stars: 37,
      },
    },
    {
      id: "ecommerce",
      title: "E-Commerce Platform (MERN Stack)",
      description:
        "A full-featured shopping platform with secure payments and product reviews, using PayPal API and MongoDB for robust data management.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "PayPal API"],
      githubUrl: "https://github.com/srujanchidarla/ecommerce-platform",
      stats: {
        views: 860,
        stars: 29,
      },
    },
    {
      id: "portfolio",
      title: "YouTube-Inspired Portfolio",
      description:
        "A creative portfolio website designed to mimic YouTube's interface, showcasing projects and skills in an engaging and familiar format.",
      technologies: ["Next.js", "TailwindCSS", "TypeScript", "Framer Motion"],
      liveUrl: "https://srujan.tech",
      githubUrl: "https://github.com/srujanchidarla/portfolio",
      stats: {
        views: 1520,
        stars: 52,
      },
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <CodeBracketIcon className="h-8 w-8 text-blue-500" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Web Development Projects
        </h1>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-8">
        My web development projects showcase expertise in modern frameworks like
        React, Next.js, and full-stack technologies. Each project demonstrates
        problem-solving skills and attention to user experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {webProjects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-200 dark:border-zinc-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-48 w-full">
              <div className="absolute inset-0 bg-gray-200 dark:bg-zinc-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 800 600"
                  className="w-full h-full"
                >
                  {/* Background */}
                  <rect width="800" height="600" fill="#f0f4f8" />

                  {/* Browser Window */}
                  <rect
                    x="100"
                    y="100"
                    width="600"
                    height="400"
                    rx="8"
                    fill="#ffffff"
                    stroke="#cbd5e1"
                    strokeWidth="2"
                  />

                  {/* Browser Header */}
                  <rect
                    x="100"
                    y="100"
                    width="600"
                    height="40"
                    rx="8"
                    fill="#f1f5f9"
                    stroke="#cbd5e1"
                    strokeWidth="2"
                  />

                  {/* Browser Buttons */}
                  <circle cx="130" cy="120" r="8" fill="#ef4444" />
                  <circle cx="160" cy="120" r="8" fill="#f59e0b" />
                  <circle cx="190" cy="120" r="8" fill="#10b981" />

                  {/* Address Bar */}
                  <rect
                    x="220"
                    y="110"
                    width="380"
                    height="20"
                    rx="4"
                    fill="#e2e8f0"
                  />
                  <circle cx="235" cy="120" r="3" fill="#64748b" />

                  {/* Header Bar */}
                  <rect
                    x="130"
                    y="170"
                    width="540"
                    height="60"
                    rx="4"
                    fill="#3b82f6"
                  />

                  {/* Navigation Items */}
                  <rect
                    x="160"
                    y="190"
                    width="60"
                    height="20"
                    rx="4"
                    fill="#ffffff"
                    fillOpacity="0.2"
                  />
                  <rect
                    x="240"
                    y="190"
                    width="60"
                    height="20"
                    rx="4"
                    fill="#ffffff"
                    fillOpacity="0.2"
                  />
                  <rect
                    x="320"
                    y="190"
                    width="60"
                    height="20"
                    rx="4"
                    fill="#ffffff"
                    fillOpacity="0.2"
                  />

                  {/* Hero Section */}
                  <rect
                    x="130"
                    y="250"
                    width="540"
                    height="120"
                    rx="4"
                    fill="#e2e8f0"
                  />

                  {/* Hero Content */}
                  <rect
                    x="160"
                    y="270"
                    width="240"
                    height="25"
                    rx="4"
                    fill="#94a3b8"
                  />
                  <rect
                    x="160"
                    y="310"
                    width="320"
                    height="10"
                    rx="4"
                    fill="#cbd5e1"
                  />
                  <rect
                    x="160"
                    y="330"
                    width="320"
                    height="10"
                    rx="4"
                    fill="#cbd5e1"
                  />
                  <rect
                    x="160"
                    y="350"
                    width="100"
                    height="30"
                    rx="4"
                    fill="#3b82f6"
                  />

                  {/* Content Cards */}
                  <rect
                    x="130"
                    y="390"
                    width="160"
                    height="80"
                    rx="4"
                    fill="#ffffff"
                    stroke="#cbd5e1"
                    strokeWidth="2"
                  />
                  <rect
                    x="150"
                    y="410"
                    width="120"
                    height="10"
                    rx="2"
                    fill="#94a3b8"
                  />
                  <rect
                    x="150"
                    y="430"
                    width="100"
                    height="8"
                    rx="2"
                    fill="#cbd5e1"
                  />
                  <rect
                    x="150"
                    y="450"
                    width="100"
                    height="8"
                    rx="2"
                    fill="#cbd5e1"
                  />

                  <rect
                    x="320"
                    y="390"
                    width="160"
                    height="80"
                    rx="4"
                    fill="#ffffff"
                    stroke="#cbd5e1"
                    strokeWidth="2"
                  />
                  <rect
                    x="340"
                    y="410"
                    width="120"
                    height="10"
                    rx="2"
                    fill="#94a3b8"
                  />
                  <rect
                    x="340"
                    y="430"
                    width="100"
                    height="8"
                    rx="2"
                    fill="#cbd5e1"
                  />
                  <rect
                    x="340"
                    y="450"
                    width="100"
                    height="8"
                    rx="2"
                    fill="#cbd5e1"
                  />

                  <rect
                    x="510"
                    y="390"
                    width="160"
                    height="80"
                    rx="4"
                    fill="#ffffff"
                    stroke="#cbd5e1"
                    strokeWidth="2"
                  />
                  <rect
                    x="530"
                    y="410"
                    width="120"
                    height="10"
                    rx="2"
                    fill="#94a3b8"
                  />
                  <rect
                    x="530"
                    y="430"
                    width="100"
                    height="8"
                    rx="2"
                    fill="#cbd5e1"
                  />
                  <rect
                    x="530"
                    y="450"
                    width="100"
                    height="8"
                    rx="2"
                    fill="#cbd5e1"
                  />

                  {/* Code Symbols */}
                  <text
                    x="650"
                    y="280"
                    fontFamily="monospace"
                    fontSize="40"
                    fill="#3b82f6"
                  >
                    &lt;/&gt;
                  </text>
                </svg>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full dark:bg-yellow-900/30 dark:text-yellow-500">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm h-12 overflow-hidden">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded dark:bg-blue-900/30 dark:text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded dark:bg-gray-800 dark:text-gray-400">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center mr-3">
                    <StarIcon className="h-4 w-4 mr-1" />
                    {project.stats?.stars}
                  </span>
                  <span>{project.stats?.views} views</span>
                </div>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebDevelopmentPage;
