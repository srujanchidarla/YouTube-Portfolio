// components/sections/VideoPlayer.tsx
"use client";

import { JSX, useState } from "react";
import Link from "next/link";
import ProjectThumbnail from "../ui/ProjectThumbnail";
import {
  ShareIcon,
  LinkIcon,
  BookmarkIcon,
  EllipsisHorizontalIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  CalendarIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
} from "@heroicons/react/24/outline";
import { formatDistanceToNow } from "date-fns";
import { Video } from "../../types";

interface VideoPlayerProps {
  video: Video;
}

const VideoPlayer = ({ video }: VideoPlayerProps): JSX.Element => {
  const [showFullDescription, setShowFullDescription] =
    useState<boolean>(false);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);
  const [currentLikes, setCurrentLikes] = useState<number>(video.likes || 0);
  const [showShareOptions, setShowShareOptions] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("overview");

  if (!video) return <div>Loading...</div>;

  const {
    id,
    title,
    description,
    views,
    createdAt,
    channelName,
    subscribers,
    projectUrl,
    techStack = [],
    category,
  } = video;

  // Format date
  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true });
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Format subscriber count
  const formatSubscriberCount = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  // Toggle description collapse/expand
  const toggleDescription = (): void => {
    setShowFullDescription(!showFullDescription);
  };

  // Handle like button click
  const handleLike = (): void => {
    if (liked) {
      setCurrentLikes(currentLikes - 1);
    } else {
      setCurrentLikes(currentLikes + 1);
    }
    setLiked(!liked);
  };

  // Handle save button click
  const handleSave = (): void => {
    setSaved(!saved);
  };

  // Mock features/challenges data
  const features = [
    "Real-time data visualization dashboard",
    "Interactive geolocation mapping",
    "Multiple weather data sources integration",
    "Custom weather alert system",
    "Mobile-responsive design with offline capabilities",
  ];

  const challenges = [
    "Integrating multiple weather APIs with different data formats",
    "Ensuring accurate geolocation with privacy considerations",
    "Optimizing performance with large datasets",
    "Implementing real-time updates without excessive API calls",
    "Creating intuitive UI for complex weather data",
  ];

  // Mock implementation details
  const implementation = `The project was implemented using a modern tech stack focused on performance and scalability. The frontend leverages React with custom hooks for state management, while the backend uses Spring Boot with RESTful APIs.

Key architectural decisions include:
• Microservices architecture for independent scaling
• Redis caching layer for API responses
• WebSocket integration for real-time updates
• Progressive Web App (PWA) for offline capabilities
• Containerized deployment using Docker and Kubernetes

The development process followed an Agile methodology with two-week sprints and regular stakeholder feedback.`;

  return (
    <div className="max-w-full">
      {/* Video/project showcase container */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-zinc-800 mb-4">
        <ProjectThumbnail projectId={id} title={title} category={category} />
      </div>

      {/* Video title */}
      <h1 className="text-xl font-semibold mb-3 dark:text-white">{title}</h1>

      {/* Channel info and action buttons */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-3 border-b border-gray-200 dark:border-zinc-700 mb-4">
        <div className="flex items-start gap-3">
          {/* Channel avatar */}
          <Link href="/channel" className="flex-shrink-0">
            <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200 dark:bg-zinc-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                className="w-full h-full"
              >
                <defs>
                  <linearGradient
                    id="avatarGradientSmall"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#1E40AF" />
                  </linearGradient>
                </defs>
                <circle
                  cx="20"
                  cy="20"
                  r="20"
                  fill="url(#avatarGradientSmall)"
                />
                <text
                  x="20"
                  y="25"
                  fontFamily="Arial, sans-serif"
                  fontSize="14"
                  fontWeight="bold"
                  fill="white"
                  textAnchor="middle"
                >
                  S
                </text>
              </svg>
            </div>
          </Link>

          {/* Channel name and stats */}
          <div>
            <Link href="/channel">
              <h3 className="text-base font-medium dark:text-white">
                {channelName || "Srujan Chidarla"}
              </h3>
            </Link>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {formatSubscriberCount(subscribers || 0)} subscribers
            </p>
          </div>

          {/* Subscribe button */}
          <button
            onClick={() => setIsSubscribed(!isSubscribed)}
            className={`ml-2 px-4 py-2 rounded-full text-sm font-medium ${
              isSubscribed
                ? "bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-gray-200"
                : "bg-black text-white dark:bg-white dark:text-black"
            }`}
          >
            {isSubscribed ? "Subscribed" : "Subscribe"}
          </button>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden h-10">
            <button
              className={`flex items-center gap-1 px-3 py-2 hover:bg-gray-200 dark:hover:bg-zinc-700 ${
                liked ? "text-blue-500" : "text-gray-600 dark:text-gray-300"
              }`}
              onClick={handleLike}
            >
              <HandThumbUpIcon className="h-5 w-5" />
              <span className="text-sm text-gray-800 dark:text-gray-200">
                {currentLikes}
              </span>
            </button>
            <div className="h-10 w-px bg-gray-300 dark:bg-zinc-700"></div>
            <button className="flex items-center px-3 py-2 hover:bg-gray-200 dark:hover:bg-zinc-700">
              <HandThumbDownIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          {/* Share button */}
          <div className="relative">
            <button
              className="flex items-center gap-1 px-3 py-2 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-full text-gray-800 dark:text-gray-200"
              onClick={() => setShowShareOptions(!showShareOptions)}
            >
              <ShareIcon className="h-5 w-5" />
              <span className="text-sm">Share</span>
            </button>

            {/* Share options dropdown */}
            {showShareOptions && (
              <div className="absolute top-12 right-0 bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-2 w-48 z-10">
                <button className="flex items-center gap-2 w-full p-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded">
                  <svg
                    className="h-5 w-5 text-[#1DA1F2]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  <span className="text-sm">Twitter</span>
                </button>
                <button className="flex items-center gap-2 w-full p-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded">
                  <svg
                    className="h-5 w-5 text-[#0A66C2]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-sm">LinkedIn</span>
                </button>
                <button className="flex items-center gap-2 w-full p-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded">
                  <svg
                    className="h-5 w-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.5 3.75a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75zm0 8.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75zm0 8.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75z" />
                  </svg>
                  <span className="text-sm">Copy link</span>
                </button>
              </div>
            )}
          </div>

          {/* Project URL button (if available) */}
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-full text-gray-800 dark:text-gray-200"
            >
              <LinkIcon className="h-5 w-5" />
              <span className="text-sm">View Project</span>
            </a>
          )}

          {/* Save button */}
          <button
            className={`flex items-center gap-1 px-3 py-2 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-full ${
              saved ? "text-blue-500" : "text-gray-800 dark:text-gray-200"
            }`}
            onClick={handleSave}
          >
            <BookmarkIcon className="h-5 w-5" />
            <span className="text-sm">{saved ? "Saved" : "Save"}</span>
          </button>

          {/* More button */}
          <button className="flex items-center px-2 py-2 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-full text-gray-800 dark:text-gray-200">
            <EllipsisHorizontalIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Tabs for different content sections */}
      <div className="border-b border-gray-200 dark:border-zinc-700 mb-4">
        <div className="flex overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
              activeTab === "overview"
                ? "text-black dark:text-white border-b-2 border-black dark:border-white"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("details")}
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
              activeTab === "details"
                ? "text-black dark:text-white border-b-2 border-black dark:border-white"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            }`}
          >
            Project Details
          </button>
          <button
            onClick={() => setActiveTab("tech")}
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
              activeTab === "tech"
                ? "text-black dark:text-white border-b-2 border-black dark:border-white"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            }`}
          >
            Tech Stack
          </button>
        </div>
      </div>

      {/* Tab content */}
      <div className="bg-gray-100 dark:bg-zinc-800 rounded-xl p-4 mb-6">
        {activeTab === "overview" && (
          <>
            {/* Video stats */}
            <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
              <span>{views.toLocaleString()} views</span>
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
                {description || "No description available."}
              </div>

              {/* Show more/less button */}
              {description && description.length > 150 && (
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
          </>
        )}

        {activeTab === "details" && (
          <>
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

            {projectUrl && (
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
                    href={projectUrl}
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
                  href={projectUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-green-700 dark:text-green-300 hover:underline text-sm font-medium"
                >
                  View GitHub repository{" "}
                  <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          </>
        )}

        {activeTab === "tech" && (
          <>
            {/* Tech stack tags */}
            <div className="mb-6">
              <h3 className="text-md font-semibold mb-3 dark:text-white">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
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
              <div>
                <h4 className="text-sm font-semibold mb-2 dark:text-white">
                  Frontend
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {techStack
                    .filter((t) =>
                      ["React", "JavaScript", "HTML", "CSS", "Redux"].includes(
                        t
                      )
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

              <div>
                <h4 className="text-sm font-semibold mb-2 dark:text-white">
                  Backend
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {techStack
                    .filter((t) =>
                      ["Java", "Spring Boot", "Node.js", "Express"].includes(t)
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

              <div>
                <h4 className="text-sm font-semibold mb-2 dark:text-white">
                  Tools & Deployment
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {techStack
                    .filter((t) =>
                      ["AWS", "Vercel", "Docker", "Git"].includes(t)
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
          </>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
