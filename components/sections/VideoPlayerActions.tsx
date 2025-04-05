// components/sections/VideoPlayerActions.tsx
import React from "react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import { Video } from "../../types";
import useViewCounter from "../../hooks/useViewCounter";

interface VideoPlayerActionsProps {
  video: Video;
  activeTab: string;
  showFullDescription: boolean;
  toggleDescription: () => void;
  timeAgo: string;
  formattedDate: string;
}

const VideoPlayerActions = ({
  video,
  activeTab,
  showFullDescription,
  toggleDescription,
  timeAgo,
  formattedDate,
}: VideoPlayerActionsProps) => {
  // Use the view counter hook to track views and get current count
  const viewCount = useViewCounter(video.id, video.views || 0);

  // Get features/challenges from video or use defaults
  const features = video.features || [
    "Real-time data visualization dashboard",
    "Interactive geolocation mapping",
    "Multiple weather data sources integration",
    "Custom weather alert system",
    "Mobile-responsive design with offline capabilities",
  ];

  const challenges = video.challenges || [
    "Integrating multiple weather APIs with different data formats",
    "Ensuring accurate geolocation with privacy considerations",
    "Optimizing performance with large datasets",
    "Implementing real-time updates without excessive API calls",
    "Creating intuitive UI for complex weather data",
  ];

  // Implementation details
  const implementation =
    video.implementation ||
    `The project was implemented using a modern tech stack focused on performance and scalability. The frontend leverages React with custom hooks for state management, while the backend uses Spring Boot with RESTful APIs.

Key architectural decisions include:
• Microservices architecture for independent scaling
• Redis caching layer for API responses
• WebSocket integration for real-time updates
• Progressive Web App (PWA) for offline capabilities
• Containerized deployment using Docker and Kubernetes

The development process followed an Agile methodology with two-week sprints and regular stakeholder feedback.`;

  // Render Overview Tab
  if (activeTab === "overview") {
    return (
      <div>
        {/* Project stats */}
        <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
          <span>{viewCount.toLocaleString()} views</span>
          <span className="text-xs">•</span>
          <span>{timeAgo}</span>
        </div>

        {/* Description text */}
        <div className="mb-4">
          <div
            className={`text-sm text-gray-800 dark:text-gray-200 whitespace-pre-line ${
              !showFullDescription && "line-clamp-3"
            }`}
          >
            {video.description || "No description available."}
          </div>

          {/* Show more/less button */}
          {video.description && video.description.length > 150 && (
            <button
              onClick={toggleDescription}
              className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-2 flex items-center"
            >
              {showFullDescription ? (
                <>
                  Show less <ChevronUpIcon className="h-4 w-4 ml-1" />
                </>
              ) : (
                <>
                  Show more <ChevronDownIcon className="h-4 w-4 ml-1" />
                </>
              )}
            </button>
          )}
        </div>

        {/* Key features section */}
        <div className="mb-4">
          <h3 className="text-md font-semibold mb-2 dark:text-white">
            Key Features
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            {features.map((feature, index) => (
              <li
                key={index}
                className="text-sm text-gray-800 dark:text-gray-200"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges section */}
        <div>
          <h3 className="text-md font-semibold mb-2 dark:text-white">
            Development Challenges
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            {challenges.map((challenge, index) => (
              <li
                key={index}
                className="text-sm text-gray-800 dark:text-gray-200"
              >
                {challenge}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // Render Details Tab
  if (activeTab === "details") {
    return (
      <div>
        <div className="flex items-center gap-2 mb-4">
          <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          <span className="text-sm text-gray-800 dark:text-gray-200">
            Published on {formattedDate}
          </span>
        </div>

        <div className="mb-6">
          <h3 className="text-md font-semibold mb-2 dark:text-white">
            Project Implementation
          </h3>
          <p className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-line">
            {implementation}
          </p>
        </div>

        {video.projectUrl && (
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 flex items-start gap-3 mb-4">
            <div className="mt-1 text-blue-500 dark:text-blue-400">
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-1">
                Live Project
              </h4>
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                Check out the live version of this project
              </p>
              <a
                href={video.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-700 dark:text-blue-300 hover:underline text-sm font-medium"
              >
                Visit live project{" "}
                <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
        )}

        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 flex items-start gap-3">
          <div className="mt-1 text-green-500 dark:text-green-400">
            <CodeBracketIcon className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-medium text-green-700 dark:text-green-300 mb-1">
              Source Code Available
            </h4>
            <p className="text-sm text-green-600 dark:text-green-400 mb-2">
              View the source code and documentation
            </p>
            <a
              href={video.projectUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-green-700 dark:text-green-300 hover:underline text-sm font-medium"
            >
              View GitHub repository{" "}
              <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Render Tech Stack Tab
  if (activeTab === "tech") {
    return (
      <div>
        {/* Tech stack tags */}
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-3 dark:text-white">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {video.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-gray-200 dark:bg-zinc-700 rounded-md text-sm text-gray-800 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Tech categories */}
        <div className="space-y-4">
          {/* Frontend Category */}
          <div>
            <h4 className="text-sm font-semibold mb-2 dark:text-white">
              Frontend
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {video.techStack
                .filter((t) =>
                  [
                    "React",
                    "JavaScript",
                    "HTML",
                    "CSS",
                    "Redux",
                    "TypeScript",
                    "Next.js",
                    "Angular",
                    "Vue",
                  ].includes(t)
                )
                .map((tech, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded text-sm text-center text-blue-700 dark:text-blue-300"
                  >
                    {tech}
                  </div>
                ))}
            </div>
          </div>

          {/* Backend Category */}
          <div>
            <h4 className="text-sm font-semibold mb-2 dark:text-white">
              Backend
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {video.techStack
                .filter((t) =>
                  [
                    "Java",
                    "Spring Boot",
                    "Node.js",
                    "Express",
                    "Python",
                    "Django",
                    ".NET",
                    "PHP",
                  ].includes(t)
                )
                .map((tech, index) => (
                  <div
                    key={index}
                    className="bg-green-50 dark:bg-green-900/20 p-2 rounded text-sm text-center text-green-700 dark:text-green-300"
                  >
                    {tech}
                  </div>
                ))}
            </div>
          </div>

          {/* Tools & Deployment Category */}
          <div>
            <h4 className="text-sm font-semibold mb-2 dark:text-white">
              Tools & Deployment
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {video.techStack
                .filter((t) =>
                  [
                    "AWS",
                    "Vercel",
                    "Docker",
                    "Git",
                    "GitHub",
                    "GitLab",
                    "Jenkins",
                    "CI/CD",
                  ].includes(t)
                )
                .map((tech, index) => (
                  <div
                    key={index}
                    className="bg-purple-50 dark:bg-purple-900/20 p-2 rounded text-sm text-center text-purple-700 dark:text-purple-300"
                  >
                    {tech}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If no tab matches, return null
  return null;
};

export default VideoPlayerActions;
