// components/ui/ProjectThumbnail.tsx
"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ProjectThumbnailProps {
  projectId: string;
  title: string;
  category?: string | string[];
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

  // Get primary category for display
  const getPrimaryCategory = (): string => {
    if (Array.isArray(category)) {
      return category[0] || "";
    }
    return category || "";
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

  // Select SVG based on projectId (handle both old numbered and new string IDs)
  switch (projectId) {
    // NEW INNOVATIVE PROJECTS
    case "agriwise":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="agriGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22C55E" />
              <stop offset="100%" stopColor="#15803D" />
            </linearGradient>
          </defs>

          {/* Background */}
          <rect width="800" height="450" fill="url(#agriGradient)" />

          {/* Farm landscape */}
          <path
            d="M0 300 Q200 280 400 300 T800 300 L800 450 L0 450 Z"
            fill="#16A34A"
          />

          {/* Sun */}
          <circle cx="700" cy="80" r="50" fill="#FCD34D" />

          {/* Crops/plants */}
          <g fill="#065F46">
            <path
              d="M100 280 Q110 260 120 280 Q130 260 140 280"
              stroke="#065F46"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M200 285 Q210 265 220 285 Q230 265 240 285"
              stroke="#065F46"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M300 275 Q310 255 320 275 Q330 255 340 275"
              stroke="#065F46"
              strokeWidth="3"
              fill="none"
            />
          </g>

          {/* Smart device/tablet */}
          <rect
            x="450"
            y="200"
            width="200"
            height="130"
            rx="10"
            fill="#1F2937"
          />
          <rect
            x="460"
            y="210"
            width="180"
            height="110"
            rx="5"
            fill="#3B82F6"
          />

          {/* Data visualization on screen */}
          <g transform="translate(470, 220)">
            <rect width="160" height="80" fill="#1E40AF" />
            <text
              x="80"
              y="25"
              fontFamily="Arial, sans-serif"
              fontSize="16"
              fontWeight="bold"
              fill="white"
              textAnchor="middle"
            >
              Soil Analysis
            </text>
            <rect x="10" y="35" width="40" height="30" fill="#22C55E" />
            <rect x="60" y="40" width="40" height="25" fill="#FCD34D" />
            <rect x="110" y="45" width="40" height="20" fill="#EF4444" />
          </g>

          {/* Logo */}
          <g transform="translate(50, 350)">
            <text
              x="0"
              y="30"
              fontFamily="Arial, sans-serif"
              fontSize="36"
              fontWeight="bold"
              fill="white"
            >
              AgriWise
            </text>
            <text
              x="0"
              y="60"
              fontFamily="Arial, sans-serif"
              fontSize="18"
              fill="#E5E7EB"
            >
              Digital Agriculture Platform
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

    case "studyglobal":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
          <defs>
            <linearGradient
              id="studyGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
          </defs>

          {/* Background */}
          <rect width="800" height="450" fill="url(#studyGradient)" />

          {/* Globe */}
          <circle cx="400" cy="200" r="120" fill="#1E3A8A" opacity="0.8" />
          <circle
            cx="400"
            cy="200"
            r="120"
            fill="none"
            stroke="#60A5FA"
            strokeWidth="2"
          />

          {/* Globe lines */}
          <path
            d="M280 200 Q400 120 520 200 Q400 280 280 200"
            fill="none"
            stroke="#60A5FA"
            strokeWidth="1"
          />
          <path
            d="M320 150 Q400 180 480 150"
            fill="none"
            stroke="#60A5FA"
            strokeWidth="1"
          />
          <path
            d="M320 250 Q400 220 480 250"
            fill="none"
            stroke="#60A5FA"
            strokeWidth="1"
          />

          {/* Graduation cap */}
          <g transform="translate(350, 140)">
            <rect x="0" y="30" width="100" height="8" fill="#FCD34D" />
            <path d="M50 20 L10 35 L50 50 L90 35 Z" fill="#111827" />
            <rect x="80" y="40" width="3" height="30" fill="#111827" />
            <rect x="78" y="35" width="7" height="8" fill="#111827" />
          </g>

          {/* Connection points */}
          <circle cx="300" cy="150" r="8" fill="#FCD34D" />
          <circle cx="500" cy="180" r="8" fill="#FCD34D" />
          <circle cx="350" cy="300" r="8" fill="#FCD34D" />
          <circle cx="480" cy="280" r="8" fill="#FCD34D" />

          {/* Connection lines */}
          <path
            d="M300 150 L400 200"
            stroke="#FCD34D"
            strokeWidth="2"
            opacity="0.6"
          />
          <path
            d="M500 180 L400 200"
            stroke="#FCD34D"
            strokeWidth="2"
            opacity="0.6"
          />
          <path
            d="M350 300 L400 200"
            stroke="#FCD34D"
            strokeWidth="2"
            opacity="0.6"
          />
          <path
            d="M480 280 L400 200"
            stroke="#FCD34D"
            strokeWidth="2"
            opacity="0.6"
          />

          {/* Logo */}
          <g transform="translate(250, 360)">
            <text
              x="0"
              y="30"
              fontFamily="Arial, sans-serif"
              fontSize="36"
              fontWeight="bold"
              fill="white"
            >
              StudyGlobal
            </text>
            <text
              x="0"
              y="60"
              fontFamily="Arial, sans-serif"
              fontSize="18"
              fill="#E5E7EB"
            >
              International Student Services Platform
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

    case "flightbuddy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
          <defs>
            <linearGradient
              id="flightGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#0369A1" />
            </linearGradient>
          </defs>

          {/* Background - sky */}
          <rect width="800" height="450" fill="url(#flightGradient)" />

          {/* Clouds */}
          <g fill="white" opacity="0.7">
            <ellipse cx="150" cy="100" rx="60" ry="30" />
            <ellipse cx="120" cy="110" rx="40" ry="20" />
            <ellipse cx="180" cy="110" rx="50" ry="25" />

            <ellipse cx="650" cy="80" rx="50" ry="25" />
            <ellipse cx="620" cy="90" rx="35" ry="18" />
            <ellipse cx="680" cy="90" rx="40" ry="20" />
          </g>

          {/* Airplane */}
          <g transform="translate(350, 180) rotate(-15)">
            <rect x="0" y="15" width="120" height="20" rx="10" fill="#374151" />
            <path d="M120 25 L140 20 L140 30 Z" fill="#374151" />
            <rect x="30" y="5" width="60" height="10" rx="5" fill="#6B7280" />
            <rect x="30" y="35" width="60" height="10" rx="5" fill="#6B7280" />
            <rect x="90" y="0" width="15" height="50" rx="7" fill="#6B7280" />
          </g>

          {/* Flight path */}
          <path
            d="M100 300 Q300 200 500 250 T700 280"
            stroke="#FCD34D"
            strokeWidth="3"
            fill="none"
            strokeDasharray="10,5"
          />

          {/* Connection icons */}
          <g fill="#FCD34D">
            <circle cx="150" cy="320" r="12" />
            <text
              x="150"
              y="327"
              fontFamily="Arial, sans-serif"
              fontSize="16"
              fill="#0369A1"
              textAnchor="middle"
            >
              A
            </text>

            <circle cx="350" cy="260" r="12" />
            <text
              x="350"
              y="267"
              fontFamily="Arial, sans-serif"
              fontSize="16"
              fill="#0369A1"
              textAnchor="middle"
            >
              B
            </text>

            <circle cx="550" cy="290" r="12" />
            <text
              x="550"
              y="297"
              fontFamily="Arial, sans-serif"
              fontSize="16"
              fill="#0369A1"
              textAnchor="middle"
            >
              C
            </text>
          </g>

          {/* Logo */}
          <g transform="translate(250, 360)">
            <text
              x="0"
              y="30"
              fontFamily="Arial, sans-serif"
              fontSize="36"
              fontWeight="bold"
              fill="white"
            >
              Flight Buddy
            </text>
            <text
              x="0"
              y="60"
              fontFamily="Arial, sans-serif"
              fontSize="18"
              fill="#E5E7EB"
            >
              Travelers Connection Platform
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

    case "sportsplatform":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
          <defs>
            <linearGradient
              id="sportsGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>

          {/* Background */}
          <rect width="800" height="450" fill="url(#sportsGradient)" />

          {/* Sports field */}
          <rect
            x="100"
            y="150"
            width="600"
            height="200"
            rx="20"
            fill="#16A34A"
          />
          <rect
            x="100"
            y="150"
            width="600"
            height="200"
            rx="20"
            fill="none"
            stroke="white"
            strokeWidth="3"
          />

          {/* Center circle */}
          <circle
            cx="400"
            cy="250"
            r="50"
            fill="none"
            stroke="white"
            strokeWidth="3"
          />
          <circle cx="400" cy="250" r="8" fill="white" />

          {/* Center line */}
          <line
            x1="400"
            y1="150"
            x2="400"
            y2="350"
            stroke="white"
            strokeWidth="3"
          />

          {/* Goal areas */}
          <rect
            x="100"
            y="200"
            width="40"
            height="100"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <rect
            x="660"
            y="200"
            width="40"
            height="100"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />

          {/* Sports equipment icons */}
          <g transform="translate(200, 100)">
            {/* Dumbbell */}
            <rect x="0" y="8" width="60" height="4" fill="#FCD34D" />
            <rect x="-5" y="0" width="10" height="20" fill="#FCD34D" />
            <rect x="55" y="0" width="10" height="20" fill="#FCD34D" />
          </g>

          <g transform="translate(500, 100)">
            {/* Tennis racket */}
            <ellipse
              cx="15"
              cy="15"
              rx="12"
              ry="20"
              fill="none"
              stroke="#FCD34D"
              strokeWidth="3"
            />
            <rect x="12" y="35" width="6" height="25" fill="#FCD34D" />
            <line
              x1="8"
              y1="15"
              x2="22"
              y2="15"
              stroke="#FCD34D"
              strokeWidth="1"
            />
            <line
              x1="15"
              y1="8"
              x2="15"
              y2="22"
              stroke="#FCD34D"
              strokeWidth="1"
            />
          </g>

          {/* Platform cards */}
          <g transform="translate(150, 380)">
            <rect
              width="200"
              height="50"
              rx="10"
              fill="rgba(255,255,255,0.9)"
            />
            <text
              x="100"
              y="25"
              fontFamily="Arial, sans-serif"
              fontSize="18"
              fontWeight="bold"
              fill="#047857"
              textAnchor="middle"
            >
              FitConnect
            </text>
            <text
              x="100"
              y="42"
              fontFamily="Arial, sans-serif"
              fontSize="12"
              fill="#047857"
              textAnchor="middle"
            >
              Venue Booking
            </text>
          </g>

          <g transform="translate(450, 380)">
            <rect
              width="200"
              height="50"
              rx="10"
              fill="rgba(255,255,255,0.9)"
            />
            <text
              x="100"
              y="25"
              fontFamily="Arial, sans-serif"
              fontSize="18"
              fontWeight="bold"
              fill="#047857"
              textAnchor="middle"
            >
              TrainHub
            </text>
            <text
              x="100"
              y="42"
              fontFamily="Arial, sans-serif"
              fontSize="12"
              fill="#047857"
              textAnchor="middle"
            >
              Trainer Discovery
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

    case "healthrecords":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
          <defs>
            <linearGradient
              id="healthGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="100%" stopColor="#B91C1C" />
            </linearGradient>
          </defs>

          {/* Background */}
          <rect width="800" height="450" fill="url(#healthGradient)" />

          {/* Medical cross */}
          <g transform="translate(350, 120)">
            <rect x="35" y="0" width="30" height="100" fill="white" />
            <rect x="0" y="35" width="100" height="30" fill="white" />
          </g>

          {/* Health records */}
          <g transform="translate(500, 150)">
            <rect width="200" height="140" rx="10" fill="white" />
            <rect x="10" y="10" width="180" height="20" fill="#EF4444" />
            <text
              x="100"
              y="25"
              fontFamily="Arial, sans-serif"
              fontSize="14"
              fontWeight="bold"
              fill="white"
              textAnchor="middle"
            >
              Health Records
            </text>

            {/* Record lines */}
            <line
              x1="20"
              y1="50"
              x2="180"
              y2="50"
              stroke="#E5E7EB"
              strokeWidth="2"
            />
            <line
              x1="20"
              y1="70"
              x2="150"
              y2="70"
              stroke="#E5E7EB"
              strokeWidth="2"
            />
            <line
              x1="20"
              y1="90"
              x2="170"
              y2="90"
              stroke="#E5E7EB"
              strokeWidth="2"
            />
            <line
              x1="20"
              y1="110"
              x2="140"
              y2="110"
              stroke="#E5E7EB"
              strokeWidth="2"
            />
          </g>

          {/* Heart monitor line */}
          <g transform="translate(100, 300)">
            <path
              d="M0 20 L20 20 L30 0 L40 40 L50 0 L60 20 L200 20"
              stroke="#FCD34D"
              strokeWidth="3"
              fill="none"
            />
          </g>

          {/* Security icons */}
          <g transform="translate(150, 200)">
            <rect
              x="15"
              y="0"
              width="20"
              height="15"
              rx="10"
              fill="none"
              stroke="#FCD34D"
              strokeWidth="3"
            />
            <rect x="10" y="10" width="30" height="20" rx="5" fill="#FCD34D" />
            <circle cx="25" cy="20" r="3" fill="white" />
          </g>

          {/* Logo */}
          <g transform="translate(200, 360)">
            <text
              x="0"
              y="30"
              fontFamily="Arial, sans-serif"
              fontSize="32"
              fontWeight="bold"
              fill="white"
            >
              HealthRecords
            </text>
            <text
              x="0"
              y="60"
              fontFamily="Arial, sans-serif"
              fontSize="16"
              fill="#FEE2E2"
            >
              Secure Health Management System
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

    // EXISTING PROJECTS (support both old numbered and new string IDs)
    case "1":
    case "weatherwise":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="skyGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6ABEF5" />
              <stop offset="100%" stopColor="#1A6ED8" />
            </linearGradient>
          </defs>

          <rect width="800" height="450" fill="url(#skyGradient1)" />
          <circle cx="200" cy="120" r="60" fill="#FFEB3B" />

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

    case "2":
    case "jobfinder":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
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

          <rect width="800" height="450" fill="url(#bgGradient2)" />

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

    case "3":
    case "pixelpeek":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
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

          <rect width="800" height="450" fill="url(#bgGradient3)" />
          <rect x="150" y="80" width="500" height="300" rx="8" fill="#FFF" />
          <rect x="150" y="80" width="500" height="35" rx="8" fill="#F0F0F0" />
          <rect x="150" y="115" width="500" height="265" rx="0" fill="#FFF" />

          <circle cx="175" cy="97" r="6" fill="#FF5F57" />
          <circle cx="195" cy="97" r="6" fill="#FEBC2E" />
          <circle cx="215" cy="97" r="6" fill="#28C840" />

          <rect x="200" y="140" width="400" height="200" fill="#4299E1" />
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

    case "4":
    case "truescreenshot":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
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

          <rect width="800" height="450" fill="url(#bgGradient4)" />

          <g transform="translate(50, 50)">
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
            <rect x="0" y="30" width="50" height="320" fill="#333333" />
            <rect x="50" y="30" width="650" height="320" fill="#1E1E1E" />
          </g>

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

    case "5":
    case "agile-retro":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
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

          <rect width="800" height="450" fill="url(#bgGradient5)" />
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

    case "6":
    case "ecommerce":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
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

          <rect width="800" height="450" fill="url(#bgGradient6)" />
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

    case "7":
    case "make-receipt":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
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

          <rect width="800" height="450" fill="url(#bgGradient7)" />

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

    case "8":
    case "todo":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
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

          <rect width="800" height="450" fill="url(#bgGradient8)" />
          <rect x="150" y="50" width="500" height="350" rx="10" fill="white" />
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
          {getPrimaryCategory() && (
            <text
              x="400"
              y="275"
              fontFamily="Arial, sans-serif"
              fontSize="18"
              fill="white"
              textAnchor="middle"
            >
              {getPrimaryCategory()}
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
