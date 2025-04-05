// components/ui/ProjectThumbnail.tsx
"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ProjectThumbnailProps {
  projectId: string;
  title: string;
  category?: string;
  videoUrl?: string;
  imageUrl?: string;
}

const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({
  projectId,
  title,
  category,
  videoUrl,
  imageUrl,
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    setIsVideoPlaying(false);
  }, [videoUrl, projectId]);

  const handleThumbnailClick = () => {
    if (videoUrl) {
      setIsVideoPlaying(true);
    }
  };

  // If video is playing, show the video player
  if (videoUrl && isVideoPlaying) {
    return (
      <video
        src={videoUrl}
        controls
        autoPlay
        className="w-full h-full object-cover"
        onError={() => setIsVideoPlaying(false)}
      >
        Your browser does not support the video tag.
      </video>
    );
  }

  // If custom image is available, show that with play button overlay if there's a video
  if (imageUrl) {
    return (
      <div
        className="w-full h-full relative cursor-pointer"
        onClick={handleThumbnailClick}
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-black/60 rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
            </div>
          </div>
        )}
      </div>
    );
  }
  // Select SVG based on projectId
  switch (projectId) {
    case "1": // WeatherWise
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
          {/* Background gradient */}
          <defs>
            <linearGradient id="skyGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6ABEF5" />
              <stop offset="100%" stopColor="#1A6ED8" />
            </linearGradient>
          </defs>

          {/* Background */}
          <rect width="800" height="450" fill="url(#skyGradient1)" />

          {/* Sun */}
          <circle cx="200" cy="120" r="60" fill="#FFEB3B" />

          {/* Clouds */}
          <g>
            <ellipse
              cx="270"
              cy="150"
              rx="70"
              ry="40"
              fill="white"
              opacity="0.9"
            />
            <ellipse
              cx="230"
              cy="170"
              rx="50"
              ry="30"
              fill="white"
              opacity="0.9"
            />
            <ellipse
              cx="330"
              cy="170"
              rx="60"
              ry="35"
              fill="white"
              opacity="0.9"
            />
          </g>

          {/* Temperature Display */}
          <rect
            x="480"
            y="100"
            width="200"
            height="100"
            rx="10"
            fill="rgba(255, 255, 255, 0.2)"
            stroke="white"
            strokeWidth="2"
          />
          <text
            x="580"
            y="145"
            fontFamily="Arial, sans-serif"
            fontSize="48"
            fontWeight="bold"
            fill="white"
            textAnchor="middle"
          >
            23°C
          </text>
          <text
            x="580"
            y="175"
            fontFamily="Arial, sans-serif"
            fontSize="18"
            fill="white"
            textAnchor="middle"
          >
            Partly Cloudy
          </text>

          {/* WeatherWise Logo and Title */}
          <g transform="translate(100, 300)">
            <rect
              x="0"
              y="0"
              width="320"
              height="100"
              rx="10"
              fill="rgba(0, 82, 155, 0.7)"
            />
            <text
              x="160"
              y="50"
              fontFamily="Arial, sans-serif"
              fontSize="32"
              fontWeight="bold"
              fill="white"
              textAnchor="middle"
            >
              WeatherWise
            </text>
            <text
              x="160"
              y="80"
              fontFamily="Arial, sans-serif"
              fontSize="16"
              fill="white"
              textAnchor="middle"
            >
              Real-Time Weather Tracking
            </text>
          </g>
          {videoUrl && (
            <g>
              <circle cx="400" cy="225" r="50" fill="rgba(0,0,0,0.7)" />
              <path d="M385 200 L385 250 L425 225 Z" fill="white" />
            </g>
          )}
        </svg>
      );

    case "2": // JobFinder
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
          {/* Background gradient */}
          <defs>
            <linearGradient
              id="bgGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>

          {/* Background */}
          <rect width="800" height="450" fill="url(#bgGradient2)" />

          {/* Main title card */}
          <rect
            x="100"
            y="80"
            width="600"
            height="100"
            rx="10"
            fill="#FFFFFF"
          />
          <text
            x="400"
            y="140"
            fontFamily="Arial, sans-serif"
            fontSize="48"
            fontWeight="bold"
            fill="#1E3A8A"
            textAnchor="middle"
          >
            JobFinder
          </text>
          <text
            x="400"
            y="170"
            fontFamily="Arial, sans-serif"
            fontSize="20"
            fill="#64748B"
            textAnchor="middle"
          >
            Job Search and Application Platform
          </text>

          {/* Job cards */}
          <g transform="translate(120, 220)">
            <rect width="250" height="160" rx="10" fill="white" />
            <rect width="250" height="40" rx="10" fill="#F0F9FF" />
            <text
              x="20"
              y="25"
              fontFamily="Arial, sans-serif"
              fontSize="16"
              fontWeight="bold"
              fill="#0369A1"
            >
              Full Stack Developer
            </text>
          </g>

          <g transform="translate(430, 220)">
            <rect width="250" height="160" rx="10" fill="white" />
            <rect width="250" height="40" rx="10" fill="#F0F9FF" />
            <text
              x="20"
              y="25"
              fontFamily="Arial, sans-serif"
              fontSize="16"
              fontWeight="bold"
              fill="#0369A1"
            >
              UX/UI Designer
            </text>
          </g>
          {videoUrl && (
            <g>
              <circle cx="400" cy="225" r="50" fill="rgba(0,0,0,0.7)" />
              <path d="M385 200 L385 250 L425 225 Z" fill="white" />
            </g>
          )}
        </svg>
      );

    case "3": // PixelPeek
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
          {/* Background gradient */}
          <defs>
            <linearGradient
              id="bgGradient3"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#2D3748" />
              <stop offset="100%" stopColor="#1A202C" />
            </linearGradient>
          </defs>

          {/* Background */}
          <rect width="800" height="450" fill="url(#bgGradient3)" />

          {/* Chrome browser mockup */}
          <rect x="150" y="80" width="500" height="300" rx="8" fill="#FFF" />

          {/* Browser toolbar */}
          <rect x="150" y="80" width="500" height="35" rx="8" fill="#F0F0F0" />
          <rect x="150" y="115" width="500" height="265" rx="0" fill="#FFF" />

          {/* Browser buttons */}
          <circle cx="175" cy="97" r="6" fill="#FF5F57" />
          <circle cx="195" cy="97" r="6" fill="#FEBC2E" />
          <circle cx="215" cy="97" r="6" fill="#28C840" />

          {/* Image preview */}
          <rect x="200" y="140" width="400" height="200" fill="#4299E1" />

          {/* Dimension overlay */}
          <rect
            x="250"
            y="180"
            width="300"
            height="120"
            fill="rgba(0, 0, 0, 0.7)"
          />
          <text
            x="400"
            y="245"
            fontFamily="monospace"
            fontSize="32"
            fontWeight="bold"
            fill="white"
            textAnchor="middle"
          >
            1200 × 800 px
          </text>

          {/* Logo and title area */}
          <g transform="translate(270, 370)">
            <text
              x="0"
              y="0"
              fontFamily="Arial, sans-serif"
              fontSize="28"
              fontWeight="bold"
              fill="white"
            >
              PixelPeek
            </text>
            <text
              x="0"
              y="30"
              fontFamily="Arial, sans-serif"
              fontSize="16"
              fill="#A0AEC0"
            >
              Chrome Extension for Media Dimensions
            </text>
          </g>
          {videoUrl && (
            <g>
              <circle cx="400" cy="225" r="50" fill="rgba(0,0,0,0.7)" />
              <path d="M385 200 L385 250 L425 225 Z" fill="white" />
            </g>
          )}
        </svg>
      );

    case "4": // TrueScreenshot
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
          {/* Background gradient */}
          <defs>
            <linearGradient
              id="bgGradient4"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1E1E1E" />
              <stop offset="100%" stopColor="#2D2D2D" />
            </linearGradient>
          </defs>

          {/* VS Code dark theme background */}
          <rect width="800" height="450" fill="url(#bgGradient4)" />

          {/* VS Code editor mockup */}
          <g transform="translate(50, 50)">
            {/* Title Bar */}
            <rect width="700" height="30" fill="#3C3C3C" />
            <text
              x="20"
              y="20"
              fontFamily="Arial, sans-serif"
              fontSize="12"
              fill="#CCCCCC"
            >
              script.js - TrueScreenshot - Visual Studio Code
            </text>
            <circle cx="680" cy="15" r="6" fill="#FF605C" />
            <circle cx="660" cy="15" r="6" fill="#FFBD44" />
            <circle cx="640" cy="15" r="6" fill="#00CA4E" />

            {/* Sidebar */}
            <rect x="0" y="30" width="50" height="320" fill="#333333" />

            {/* Editor Area */}
            <rect x="50" y="30" width="650" height="320" fill="#1E1E1E" />
          </g>

          {/* Camera lens icon */}
          <g transform="translate(680, 100)">
            <circle cx="0" cy="0" r="40" fill="#007ACC" opacity="0.9" />
            <circle
              cx="0"
              cy="0"
              r="32"
              fill="none"
              stroke="white"
              strokeWidth="3"
            />
            <circle
              cx="0"
              cy="0"
              r="18"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
            <circle cx="0" cy="0" r="8" fill="white" />
          </g>

          {/* Title and Product information */}
          <g transform="translate(150, 380)">
            <text
              x="0"
              y="0"
              fontFamily="Arial, sans-serif"
              fontSize="32"
              fontWeight="bold"
              fill="white"
            >
              TrueScreenshot
            </text>
            <text
              x="0"
              y="30"
              fontFamily="Arial, sans-serif"
              fontSize="16"
              fill="#CCCCCC"
            >
              VS Code Extension for Accurate Code Screenshots
            </text>
          </g>
          {videoUrl && (
            <g>
              <circle cx="400" cy="225" r="50" fill="rgba(0,0,0,0.7)" />
              <path d="M385 200 L385 250 L425 225 Z" fill="white" />
            </g>
          )}
        </svg>
      );

    case "5": // Agile Retrospective Tool
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
          {/* Background gradient */}
          <defs>
            <linearGradient
              id="bgGradient5"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#0D1B2A" />
              <stop offset="100%" stopColor="#1B263B" />
            </linearGradient>
          </defs>

          {/* Background */}
          <rect width="800" height="450" fill="url(#bgGradient5)" />

          {/* Header bar */}
          <rect x="0" y="0" width="800" height="60" fill="#161F30" />
          <text
            x="50"
            y="38"
            fontFamily="Arial, sans-serif"
            fontSize="24"
            fontWeight="bold"
            fill="#E0E1DD"
          >
            Agile Retro Tool
          </text>

          {/* Kanban board columns */}
          {/* What went well column */}
          <g transform="translate(30, 80)">
            <rect width="230" height="340" rx="6" fill="#2A3954" />
            <rect width="230" height="40" rx="6" fill="#1F2A40" />
            <text
              x="15"
              y="25"
              fontFamily="Arial, sans-serif"
              fontSize="16"
              fontWeight="bold"
              fill="#4EBBDD"
            >
              What Went Well
            </text>
          </g>

          {/* Needs Improvement column */}
          <g transform="translate(285, 80)">
            <rect width="230" height="340" rx="6" fill="#2A3954" />
            <rect width="230" height="40" rx="6" fill="#1F2A40" />
            <text
              x="15"
              y="25"
              fontFamily="Arial, sans-serif"
              fontSize="16"
              fontWeight="bold"
              fill="#FFB347"
            >
              Needs Improvement
            </text>
          </g>

          {/* Action Items column */}
          <g transform="translate(540, 80)">
            <rect width="230" height="40" rx="6" fill="#1F2A40" />
            <text
              x="15"
              y="25"
              fontFamily="Arial, sans-serif"
              fontSize="16"
              fontWeight="bold"
              fill="#77DD77"
            >
              Action Items
            </text>
          </g>
          {videoUrl && (
            <g>
              <circle cx="400" cy="225" r="50" fill="rgba(0,0,0,0.7)" />
              <path d="M385 200 L385 250 L425 225 Z" fill="white" />
            </g>
          )}
        </svg>
      );

    case "6": // E-Commerce Platform
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
          {/* Background gradient */}
          <defs>
            <linearGradient
              id="bgGradient6"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#F9FAFB" />
              <stop offset="100%" stopColor="#F3F4F6" />
            </linearGradient>
          </defs>

          {/* Background */}
          <rect width="800" height="450" fill="url(#bgGradient6)" />

          {/* Header */}
          <rect x="0" y="0" width="800" height="70" fill="#1F2937" />
          <text
            x="50"
            y="40"
            fontFamily="Arial, sans-serif"
            fontSize="24"
            fontWeight="bold"
            fill="white"
          >
            EcomStore
          </text>

          {/* Product Grid */}
          {/* Product 1 */}
          <g transform="translate(50, 140)">
            <rect width="220" height="260" rx="10" fill="white" />
            <rect width="220" height="150" fill="#E5E7EB" rx="10" />
            <text
              x="20"
              y="180"
              fontFamily="Arial, sans-serif"
              fontSize="16"
              fontWeight="bold"
              fill="#111827"
            >
              Wireless Headphones
            </text>
            <text
              x="20"
              y="230"
              fontFamily="Arial, sans-serif"
              fontSize="18"
              fontWeight="bold"
              fill="#111827"
            >
              $149.99
            </text>
          </g>

          {/* Product 2 */}
          <g transform="translate(290, 140)">
            <rect width="220" height="260" rx="10" fill="white" />
            <rect width="220" height="150" fill="#E5E7EB" rx="10" />
            <text
              x="20"
              y="180"
              fontFamily="Arial, sans-serif"
              fontSize="16"
              fontWeight="bold"
              fill="#111827"
            >
              Smartphone Pro
            </text>
            <text
              x="20"
              y="230"
              fontFamily="Arial, sans-serif"
              fontSize="18"
              fontWeight="bold"
              fill="#111827"
            >
              $999.00
            </text>
          </g>

          {/* Product 3 */}
          <g transform="translate(530, 140)">
            <rect width="220" height="260" rx="10" fill="white" />
            <rect width="220" height="150" fill="#E5E7EB" rx="10" />
            <text
              x="20"
              y="180"
              fontFamily="Arial, sans-serif"
              fontSize="16"
              fontWeight="bold"
              fill="#111827"
            >
              Smart Watch
            </text>
            <text
              x="20"
              y="230"
              fontFamily="Arial, sans-serif"
              fontSize="18"
              fontWeight="bold"
              fill="#111827"
            >
              $299.95
            </text>
          </g>
          {videoUrl && (
            <g>
              <circle cx="400" cy="225" r="50" fill="rgba(0,0,0,0.7)" />
              <path d="M385 200 L385 250 L425 225 Z" fill="white" />
            </g>
          )}
        </svg>
      );

    case "7": // Make a Receipt
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
          {/* Background gradient */}
          <defs>
            <linearGradient
              id="bgGradient7"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#F3F4F6" />
              <stop offset="100%" stopColor="#E5E7EB" />
            </linearGradient>
          </defs>

          {/* Background */}
          <rect width="800" height="450" fill="url(#bgGradient7)" />

          {/* Mobile phone frame */}
          <g transform="translate(230, 40)">
            <rect width="340" height="370" rx="40" fill="#111827" />
            <rect
              x="10"
              y="10"
              width="320"
              height="350"
              rx="30"
              fill="#4F46E5"
            />

            {/* App header */}
            <rect
              x="10"
              y="10"
              width="320"
              height="80"
              rx="30"
              fill="#4338CA"
            />
            <text
              x="170"
              y="58"
              fontFamily="Arial, sans-serif"
              fontSize="22"
              fontWeight="bold"
              fill="white"
              textAnchor="middle"
            >
              Make a Receipt
            </text>
          </g>

          {/* Receipt */}
          <g transform="translate(550, 100)">
            <rect width="220" height="300" fill="white" />

            <g transform="translate(0, 0)">
              <rect width="220" height="50" fill="#F3F4F6" />
              <text
                x="110"
                y="20"
                fontFamily="monospace"
                fontSize="14"
                fontWeight="bold"
                fill="#111827"
                textAnchor="middle"
              >
                GROCERY RECEIPT
              </text>
              <text
                x="110"
                y="40"
                fontFamily="monospace"
                fontSize="12"
                fill="#111827"
                textAnchor="middle"
              >
                May 12, 2023 10:45 AM
              </text>
            </g>
          </g>

          {/* Title and footer */}
          <g transform="translate(400, 380)">
            <text
              x="0"
              y="50"
              fontFamily="Arial, sans-serif"
              fontSize="24"
              fontWeight="bold"
              fill="#4338CA"
              textAnchor="middle"
            >
              Make a Receipt
            </text>
          </g>
          {videoUrl && (
            <g>
              <circle cx="400" cy="225" r="50" fill="rgba(0,0,0,0.7)" />
              <path d="M385 200 L385 250 L425 225 Z" fill="white" />
            </g>
          )}
        </svg>
      );

    case "8": // Interactive To-Do List
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
          {/* Background gradient */}
          <defs>
            <linearGradient
              id="bgGradient8"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#EDE9FE" />
              <stop offset="100%" stopColor="#DDD6FE" />
            </linearGradient>
          </defs>

          {/* Background */}
          <rect width="800" height="450" fill="url(#bgGradient8)" />

          {/* App container */}
          <rect x="150" y="50" width="500" height="350" rx="10" fill="white" />

          {/* App header */}
          <rect x="150" y="50" width="500" height="70" rx="10" fill="#8B5CF6" />
          <text
            x="400"
            y="95"
            fontFamily="Arial, sans-serif"
            fontSize="24"
            fontWeight="bold"
            fill="white"
            textAnchor="middle"
          >
            Interactive To-Do List
          </text>

          {/* Task input section */}
          <rect
            x="170"
            y="140"
            width="460"
            height="50"
            rx="8"
            fill="#F9FAFB"
            stroke="#E5E7EB"
            strokeWidth="1"
          />
          <rect
            x="180"
            y="150"
            width="30"
            height="30"
            rx="6"
            fill="#8B5CF6"
            opacity="0.1"
            stroke="#8B5CF6"
            strokeWidth="2"
          />
          <text
            x="230"
            y="170"
            fontFamily="Arial, sans-serif"
            fontSize="16"
            fill="#9CA3AF"
          >
            Add a new task...
          </text>

          {/* Tasks */}
          <g transform="translate(170, 250)">
            <rect
              width="460"
              height="60"
              rx="8"
              fill="white"
              stroke="#FDE68A"
              strokeWidth="2"
            />
            <rect x="10" y="15" width="30" height="30" rx="6" fill="#8B5CF6" />
            <text
              x="50"
              y="32"
              fontFamily="Arial, sans-serif"
              fontSize="16"
              fill="#111827"
            >
              Complete project presentation
            </text>
            <text
              x="50"
              y="50"
              fontFamily="Arial, sans-serif"
              fontSize="14"
              fill="#6B7280"
            >
              Due today
            </text>
          </g>

          <g transform="translate(170, 320)">
            <rect
              width="460"
              height="60"
              rx="8"
              fill="white"
              stroke="#E5E7EB"
              strokeWidth="2"
            />
            <rect
              x="10"
              y="15"
              width="30"
              height="30"
              rx="6"
              fill="white"
              stroke="#8B5CF6"
              strokeWidth="2"
            />
            <text
              x="50"
              y="32"
              fontFamily="Arial, sans-serif"
              fontSize="16"
              fill="#111827"
            >
              Buy groceries for the week
            </text>
            <text
              x="50"
              y="50"
              fontFamily="Arial, sans-serif"
              fontSize="14"
              fill="#6B7280"
            >
              Due tomorrow
            </text>
          </g>
          {videoUrl && (
            <g>
              <circle cx="400" cy="225" r="50" fill="rgba(0,0,0,0.7)" />
              <path d="M385 200 L385 250 L425 225 Z" fill="white" />
            </g>
          )}
        </svg>
      );

    default:
      // Default thumbnail for any other project
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
          <linearGradient id="defaultBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <rect width="800" height="450" fill="url(#defaultBg)" />
          <rect
            x="100"
            y="100"
            width="600"
            height="250"
            rx="20"
            fill="rgba(255,255,255,0.1)"
          />
          <text
            x="400"
            y="225"
            fontFamily="Arial, sans-serif"
            fontSize="28"
            fontWeight="bold"
            fill="white"
            textAnchor="middle"
          >
            {title}
          </text>
          {category && (
            <text
              x="400"
              y="275"
              fontFamily="Arial, sans-serif"
              fontSize="18"
              fill="white"
              textAnchor="middle"
            >
              {category}
            </text>
          )}
          {videoUrl && (
            <g>
              <circle cx="400" cy="225" r="50" fill="rgba(0,0,0,0.7)" />
              <path d="M385 200 L385 250 L425 225 Z" fill="white" />
            </g>
          )}
        </svg>
      );
  }
};

export default ProjectThumbnail;
