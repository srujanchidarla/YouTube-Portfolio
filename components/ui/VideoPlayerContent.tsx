// components/ui/VideoPlayerContent.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  PlayIcon,
  PauseIcon,
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  LinkIcon,
  DocumentTextIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";

interface VideoPlayerContentProps {
  project: {
    id: string;
    title: string;
    description: string;
    category?: string;
    projectUrl?: string;
    link?: string;
    techStack?: string[];
  };
  extendedContent?: React.ReactNode;
}

const VideoPlayerContent: React.FC<VideoPlayerContentProps> = ({
  project,
  extendedContent,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(180); // Default 3 minutes duration
  const [currentTime, setCurrentTime] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);

  // Calculate duration based on content length when content is loaded
  useEffect(() => {
    if (contentRef.current) {
      // Get the content length to estimate a reasonable duration
      // We're using content height to approximate a suitable duration
      const contentHeight = contentRef.current.scrollHeight;
      // Calculate a dynamic duration - 1 second for every 20px of content
      // with minimum of 2 minutes and maximum of 10 minutes
      const calculatedDuration = Math.max(
        120,
        Math.min(600, Math.floor(contentHeight / 20))
      );
      setDuration(calculatedDuration);
    }
  }, [contentRef.current?.scrollHeight]);

  // Simulate video progress
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentTime((prev) => {
          const newTime = prev + 1;
          if (newTime <= duration) {
            setProgress((newTime / duration) * 100);
            return newTime;
          } else {
            setIsPlaying(false);
            return duration;
          }
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  // Handle auto-scrolling
  useEffect(() => {
    if (contentRef.current && containerRef.current) {
      if (isPlaying) {
        // Calculate scroll speed based on content height and duration
        const contentHeight =
          contentRef.current.scrollHeight - containerRef.current.clientHeight;
        const pixelsPerSecond = contentHeight / duration;
        const scrollIncrement = pixelsPerSecond / 20; // Divide by frequency of interval (20 times per second)

        scrollInterval.current = setInterval(() => {
          if (containerRef.current) {
            containerRef.current.scrollTop += scrollIncrement;
          }
        }, 50); // 20 times per second for smoother scrolling
      } else if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
      }
    }

    return () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
      }
    };
  }, [isPlaying, duration]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      }

      if (e.key === " ") {
        // Space bar
        e.preventDefault();
        togglePlayPause();
      }
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (containerRef.current?.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const percentage = ((e.clientX - rect.left) / rect.width) * 100;
      const newTime = (percentage / 100) * duration;

      setCurrentTime(newTime);
      setProgress(percentage);

      // Simulate seeking by adjusting scroll position
      if (contentRef.current && containerRef.current) {
        const totalScrollHeight =
          contentRef.current.scrollHeight - containerRef.current.clientHeight;
        containerRef.current.scrollTop = totalScrollHeight * (percentage / 100);
      }
    }
  };

  // Format time (mm:ss)
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  // Get reference links based on project ID
  const getProjectReferences = () => {
    // Base references that apply to most projects
    const baseReferences = [
      {
        label: "GitHub Repository",
        url:
          project.projectUrl ||
          `https://github.com/srujanchidarla/${project.id}`,
        icon: <CodeBracketIcon className="h-5 w-5 mr-2" />,
      },
    ];

    // Project-specific references
    switch (project.id.toLowerCase()) {
      case "weatherwise":
        return [
          ...baseReferences,
          {
            label: "OpenWeatherMap API",
            url: "https://openweathermap.org/api",
            icon: <LinkIcon className="h-5 w-5 mr-2" />,
          },
          {
            label: "Leaflet.js Documentation",
            url: "https://leafletjs.com/",
            icon: <DocumentTextIcon className="h-5 w-5 mr-2" />,
          },
        ];
      case "jobfinder":
        return [
          ...baseReferences,
          {
            label: "Adzuna API Documentation",
            url: "https://developer.adzuna.com/",
            icon: <LinkIcon className="h-5 w-5 mr-2" />,
          },
          {
            label: "React Router Documentation",
            url: "https://reactrouter.com/",
            icon: <DocumentTextIcon className="h-5 w-5 mr-2" />,
          },
        ];
      case "pixelpeek":
        return [
          ...baseReferences,
          {
            label: "Chrome Extensions API",
            url: "https://developer.chrome.com/docs/extensions/reference/",
            icon: <LinkIcon className="h-5 w-5 mr-2" />,
          },
          {
            label: "PixelPeek Website",
            url: "https://pixelpeek.site",
            icon: <DocumentTextIcon className="h-5 w-5 mr-2" />,
          },
        ];
      case "truescreenshot":
        return [
          ...baseReferences,
          {
            label: "VS Code Extension Marketplace",
            url: "https://marketplace.visualstudio.com/items?itemName=srujanchidarla.truescreenshot",
            icon: <LinkIcon className="h-5 w-5 mr-2" />,
          },
          {
            label: "VS Code Extension API",
            url: "https://code.visualstudio.com/api",
            icon: <DocumentTextIcon className="h-5 w-5 mr-2" />,
          },
        ];
      case "agile-retro":
        return [
          ...baseReferences,
          {
            label: "Azure DevOps API",
            url: "https://docs.microsoft.com/en-us/rest/api/azure/devops/",
            icon: <LinkIcon className="h-5 w-5 mr-2" />,
          },
          {
            label: "Spring Boot Documentation",
            url: "https://spring.io/projects/spring-boot",
            icon: <DocumentTextIcon className="h-5 w-5 mr-2" />,
          },
        ];
      default:
        return baseReferences;
    }
  };

  return (
    <div
      className={`relative overflow-hidden ${
        isFullscreen
          ? "fixed inset-0 z-50 bg-white dark:bg-black"
          : "rounded-xl bg-gray-100 dark:bg-zinc-800 h-full"
      }`}
      ref={containerRef}
    >
      {/* Video content area */}
      <div
        className="h-full overflow-auto pb-16"
        ref={contentRef}
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="p-6 md:p-10">
          {/* Project title */}
          <h1 className="text-2xl md:text-4xl font-bold mb-6 dark:text-white">
            {project.title}
          </h1>

          {/* Project description */}
          <div className="prose dark:prose-invert max-w-none mb-8">
            <div className="whitespace-pre-line text-lg">
              {project.description}
            </div>
          </div>

          {/* Extended content (case studies, use cases, etc.) */}
          {extendedContent}

          {/* References section */}
          <section className="mt-16 pt-8 border-t border-gray-200 dark:border-zinc-700">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">
              References & Resources
            </h2>

            <ul className="space-y-3">
              {getProjectReferences().map((reference, index) => (
                <li key={index}>
                  <a
                    href={reference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {reference.icon}
                    {reference.label}
                  </a>
                </li>
              ))}

              {/* Tech stack references */}
              {project.techStack && project.techStack.length > 0 && (
                <li className="mt-6">
                  <h3 className="text-lg font-medium mb-2 dark:text-white">
                    Technology Documentation
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                    {project.techStack.map((tech, index) => {
                      // Map tech to documentation URLs
                      const techDocs = getTechDocLink(tech);
                      return (
                        <a
                          key={index}
                          href={techDocs.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <DocumentTextIcon className="h-4 w-4 mr-2" />
                          {tech}
                        </a>
                      );
                    })}
                  </div>
                </li>
              )}
            </ul>
          </section>
        </div>
      </div>

      {/* Control bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-3">
        {/* Progress bar */}
        <div
          className="h-1 bg-gray-600 w-full cursor-pointer mb-3"
          onClick={handleProgressClick}
        >
          <div
            className="h-full bg-red-600"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Play/Pause button */}
            <button
              onClick={togglePlayPause}
              className="hover:text-gray-300"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <PauseIcon className="h-6 w-6" />
              ) : (
                <PlayIcon className="h-6 w-6" />
              )}
            </button>

            {/* Mute button */}
            <button
              onClick={toggleMute}
              className="hover:text-gray-300"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <SpeakerXMarkIcon className="h-6 w-6" />
              ) : (
                <SpeakerWaveIcon className="h-6 w-6" />
              )}
            </button>

            {/* Time display */}
            <div className="text-sm">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          <div className="flex items-center">
            {/* Fullscreen button */}
            <button
              onClick={toggleFullscreen}
              className="hover:text-gray-300"
              aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            >
              {isFullscreen ? (
                <ArrowsPointingInIcon className="h-6 w-6" />
              ) : (
                <ArrowsPointingOutIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get documentation links for technologies
const getTechDocLink = (tech: string) => {
  const techMap: { [key: string]: string } = {
    ReactJS: "https://reactjs.org/docs/getting-started.html",
    React: "https://reactjs.org/docs/getting-started.html",
    "Java Spring Boot": "https://spring.io/projects/spring-boot",
    "Spring Boot": "https://spring.io/projects/spring-boot",
    "Leaflet.js": "https://leafletjs.com/reference.html",
    "OpenWeatherMap API": "https://openweathermap.org/api",
    Axios: "https://axios-http.com/docs/intro",
    Docker: "https://docs.docker.com/",
    AWS: "https://docs.aws.amazon.com/",
    TailwindCSS: "https://tailwindcss.com/docs",
    "Adzuna API": "https://developer.adzuna.com/",
    "React Router": "https://reactrouter.com/docs/en/v6",
    Redux: "https://redux.js.org/introduction/getting-started",
    "Node.js": "https://nodejs.org/en/docs/",
    Express: "https://expressjs.com/",
    "Express.js": "https://expressjs.com/",
    Vercel: "https://vercel.com/docs",
    JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    HTML5: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    CSS3: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    "Chrome Extensions API":
      "https://developer.chrome.com/docs/extensions/reference/",
    TypeScript: "https://www.typescriptlang.org/docs/",
    "VS Code API": "https://code.visualstudio.com/api",
    "HTML Canvas":
      "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API",
    Webpack: "https://webpack.js.org/concepts/",
    Angular: "https://angular.io/docs",
    WebSockets:
      "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
    "Azure DevOps API":
      "https://docs.microsoft.com/en-us/rest/api/azure/devops/",
    MongoDB: "https://docs.mongodb.com/",
    JWT: "https://jwt.io/introduction",
    "React Native": "https://reactnative.dev/docs/getting-started",
    Firebase: "https://firebase.google.com/docs",
    "Cloud Firestore": "https://firebase.google.com/docs/firestore",
    "Firebase Auth": "https://firebase.google.com/docs/auth",
    Expo: "https://docs.expo.dev/",
    "LocalStorage API":
      "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
  };

  // Default documentation URL if tech is not in the map
  const defaultUrl = `https://www.google.com/search?q=${encodeURIComponent(
    tech + " documentation"
  )}`;

  return {
    url: techMap[tech] || defaultUrl,
  };
};

export default VideoPlayerContent;
