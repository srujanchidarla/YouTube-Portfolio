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
    case "9": // AgriWise
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
          <defs>
            <linearGradient
              id="agriGradient9"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#22C55E" />
              <stop offset="50%" stopColor="#16A34A" />
              <stop offset="100%" stopColor="#15803D" />
            </linearGradient>
            <linearGradient
              id="agriSkyGradient9"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#87CEEB" />
              <stop offset="100%" stopColor="#4682B4" />
            </linearGradient>
          </defs>

          {/* Sky Background */}
          <rect width="800" height="300" fill="url(#agriSkyGradient9)" />

          {/* Ground */}
          <path
            d="M0 280 Q200 260 400 280 T800 280 L800 450 L0 450 Z"
            fill="url(#agriGradient9)"
          />

          {/* Sun */}
          <circle cx="680" cy="80" r="45" fill="#FCD34D" opacity="0.9" />
          <circle cx="680" cy="80" r="50" fill="#FEF3C7" opacity="0.5" />

          {/* Clouds */}
          <g fill="white" opacity="0.8">
            <ellipse cx="120" cy="90" rx="40" ry="20" />
            <ellipse cx="100" cy="100" rx="30" ry="15" />
            <ellipse cx="140" cy="100" rx="35" ry="18" />

            <ellipse cx="300" cy="70" rx="35" ry="18" />
            <ellipse cx="285" cy="80" rx="25" ry="12" />
            <ellipse cx="315" cy="80" rx="28" ry="14" />
          </g>

          {/* Farm Fields */}
          <rect
            x="50"
            y="300"
            width="150"
            height="80"
            fill="#16A34A"
            opacity="0.7"
          />
          <rect
            x="220"
            y="310"
            width="180"
            height="70"
            fill="#22C55E"
            opacity="0.7"
          />
          <rect
            x="420"
            y="305"
            width="160"
            height="75"
            fill="#15803D"
            opacity="0.7"
          />

          {/* Crops/Plants */}
          <g fill="#065F46">
            <path
              d="M80 320 Q85 305 90 320 Q95 305 100 320"
              stroke="#065F46"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M120 325 Q125 310 130 325 Q135 310 140 325"
              stroke="#065F46"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M160 318 Q165 303 170 318 Q175 303 180 318"
              stroke="#065F46"
              strokeWidth="2"
              fill="none"
            />

            <path
              d="M250 330 Q255 315 260 330 Q265 315 270 330"
              stroke="#065F46"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M290 335 Q295 320 300 335 Q305 320 310 335"
              stroke="#065F46"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M330 328 Q335 313 340 328 Q345 313 350 328"
              stroke="#065F46"
              strokeWidth="2"
              fill="none"
            />

            <path
              d="M450 325 Q455 310 460 325 Q465 310 470 325"
              stroke="#065F46"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M490 330 Q495 315 500 330 Q505 315 510 330"
              stroke="#065F46"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M530 322 Q535 307 540 322 Q545 307 550 322"
              stroke="#065F46"
              strokeWidth="2"
              fill="none"
            />
          </g>

          {/* Smart Tablet/Device */}
          <rect
            x="580"
            y="200"
            width="160"
            height="110"
            rx="12"
            fill="#1F2937"
          />
          <rect x="590" y="210" width="140" height="90" rx="8" fill="#3B82F6" />

          {/* Screen Content - Dashboard */}
          <g transform="translate(600, 220)">
            <rect width="120" height="70" fill="#1E40AF" rx="4" />

            <text
              x="60"
              y="15"
              fontFamily="Arial, sans-serif"
              fontSize="12"
              fontWeight="bold"
              fill="white"
              textAnchor="middle"
            >
              AgriWise Dashboard
            </text>

            <rect x="10" y="25" width="30" height="15" fill="#22C55E" rx="2" />
            <rect x="45" y="30" width="25" height="10" fill="#FCD34D" rx="2" />
            <rect x="75" y="28" width="35" height="12" fill="#EF4444" rx="2" />

            <circle cx="15" cy="50" r="4" fill="#10B981" />
            <circle cx="35" cy="50" r="4" fill="#F59E0B" />
            <circle cx="55" cy="50" r="4" fill="#EF4444" />

            <text
              x="10"
              y="65"
              fontFamily="Arial, sans-serif"
              fontSize="8"
              fill="#E5E7EB"
            >
              Soil pH: 6.8
            </text>
            <text
              x="70"
              y="65"
              fontFamily="Arial, sans-serif"
              fontSize="8"
              fill="#E5E7EB"
            >
              Moisture: 45%
            </text>
          </g>

          {/* Tractor */}
          <g transform="translate(620, 320)">
            <rect x="0" y="15" width="40" height="15" rx="3" fill="#DC2626" />
            <rect x="35" y="10" width="25" height="25" rx="3" fill="#991B1B" />
            <circle cx="10" cy="35" r="8" fill="#374151" />
            <circle cx="45" cy="35" r="8" fill="#374151" />
            <circle cx="10" cy="35" r="5" fill="#6B7280" />
            <circle cx="45" cy="35" r="5" fill="#6B7280" />
          </g>

          {/* IoT Sensors */}
          <g fill="#3B82F6">
            <circle cx="150" cy="290" r="3" />
            <circle cx="280" cy="285" r="3" />
            <circle cx="480" cy="288" r="3" />
          </g>

          {/* Connection Lines */}
          <g
            stroke="#60A5FA"
            strokeWidth="1"
            strokeDasharray="3,3"
            opacity="0.6"
          >
            <line x1="150" y1="290" x2="660" y2="255" />
            <line x1="280" y1="285" x2="660" y2="255" />
            <line x1="480" y1="288" x2="660" y2="255" />
          </g>

          {/* Title */}
          <g transform="translate(50, 400)">
            <text
              x="0"
              y="30"
              fontFamily="Arial, sans-serif"
              fontSize="32"
              fontWeight="bold"
              fill="white"
            >
              AgriWise
            </text>
            <text
              x="0"
              y="55"
              fontFamily="Arial, sans-serif"
              fontSize="16"
              fill="#D1FAE5"
            >
              Complete Digital Agriculture Platform
            </text>
          </g>

          {videoUrl && (
            <g>
              <circle cx="400" cy="225" r="40" fill="rgba(0,0,0,0.7)" />
              <path d="M385 210 L385 240 L415 225 Z" fill="white" />
            </g>
          )}
        </svg>
      );

    case "10": // StudyGlobal
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
          <defs>
            <linearGradient
              id="studyGradient10"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
            <radialGradient id="studyGlobeGradient10" cx="50%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#1E40AF" />
            </radialGradient>
          </defs>

          {/* Background */}
          <rect width="800" height="450" fill="url(#studyGradient10)" />

          {/* Central Globe */}
          <circle
            cx="400"
            cy="200"
            r="100"
            fill="url(#studyGlobeGradient10)"
            opacity="0.9"
          />
          <circle
            cx="400"
            cy="200"
            r="100"
            fill="none"
            stroke="#93C5FD"
            strokeWidth="2"
          />

          {/* Globe Grid Lines */}
          <g stroke="#DBEAFE" strokeWidth="1" opacity="0.7">
            <path d="M300 200 Q400 120 500 200 Q400 280 300 200" fill="none" />
            <path d="M330 160 Q400 140 470 160" fill="none" />
            <path d="M330 240 Q400 260 470 240" fill="none" />

            <ellipse cx="400" cy="200" rx="100" ry="30" fill="none" />
            <ellipse cx="400" cy="200" rx="100" ry="60" fill="none" />
          </g>

          {/* Graduation Cap on Globe */}
          <g transform="translate(360, 170)">
            <rect x="0" y="25" width="80" height="6" fill="#FCD34D" rx="3" />
            <path d="M40 15 L10 28 L40 41 L70 28 Z" fill="#111827" />
            <rect x="65" y="32" width="2" height="20" fill="#111827" />
            <rect x="64" y="29" width="4" height="6" fill="#111827" />
          </g>

          {/* Country/University Nodes */}
          <g>
            <circle cx="200" cy="160" r="12" fill="#FCD34D" />
            <text
              x="200"
              y="145"
              fontFamily="Arial, sans-serif"
              fontSize="10"
              fontWeight="bold"
              fill="white"
              textAnchor="middle"
            >
              USA
            </text>

            <circle cx="380" cy="140" r="12" fill="#FCD34D" />
            <text
              x="380"
              y="125"
              fontFamily="Arial, sans-serif"
              fontSize="10"
              fontWeight="bold"
              fill="white"
              textAnchor="middle"
            >
              UK
            </text>

            <circle cx="180" cy="120" r="12" fill="#FCD34D" />
            <text
              x="180"
              y="105"
              fontFamily="Arial, sans-serif"
              fontSize="10"
              fontWeight="bold"
              fill="white"
              textAnchor="middle"
            >
              CAN
            </text>

            <circle cx="580" cy="280" r="12" fill="#FCD34D" />
            <text
              x="580"
              y="265"
              fontFamily="Arial, sans-serif"
              fontSize="10"
              fontWeight="bold"
              fill="white"
              textAnchor="middle"
            >
              AUS
            </text>

            <circle cx="420" cy="160" r="12" fill="#FCD34D" />
            <text
              x="420"
              y="145"
              fontFamily="Arial, sans-serif"
              fontSize="10"
              fontWeight="bold"
              fill="white"
              textAnchor="middle"
            >
              GER
            </text>
          </g>

          {/* Connection Lines */}
          <g stroke="#FCD34D" strokeWidth="2" opacity="0.6">
            <line x1="200" y1="160" x2="400" y2="200" />
            <line x1="380" y1="140" x2="400" y2="200" />
            <line x1="180" y1="120" x2="400" y2="200" />
            <line x1="580" y1="280" x2="400" y2="200" />
            <line x1="420" y1="160" x2="400" y2="200" />
          </g>

          {/* Services Hub */}
          <g transform="translate(580, 100)">
            <rect
              width="150"
              height="80"
              rx="8"
              fill="rgba(255,255,255,0.15)"
            />
            <text
              x="75"
              y="20"
              fontFamily="Arial, sans-serif"
              fontSize="12"
              fontWeight="bold"
              fill="white"
              textAnchor="middle"
            >
              Services Hub
            </text>

            <g transform="translate(20, 30)">
              <rect x="0" y="0" width="20" height="15" rx="2" fill="#FCD34D" />
              <text
                x="10"
                y="25"
                fontFamily="Arial, sans-serif"
                fontSize="8"
                fill="white"
                textAnchor="middle"
              >
                Bank
              </text>
            </g>

            <g transform="translate(50, 30)">
              <rect x="0" y="0" width="20" height="15" rx="2" fill="#FCD34D" />
              <text
                x="10"
                y="25"
                fontFamily="Arial, sans-serif"
                fontSize="8"
                fill="white"
                textAnchor="middle"
              >
                House
              </text>
            </g>

            <g transform="translate(80, 30)">
              <rect x="0" y="0" width="20" height="15" rx="2" fill="#FCD34D" />
              <text
                x="10"
                y="25"
                fontFamily="Arial, sans-serif"
                fontSize="8"
                fill="white"
                textAnchor="middle"
              >
                Mobile
              </text>
            </g>

            <g transform="translate(110, 30)">
              <rect x="0" y="0" width="20" height="15" rx="2" fill="#FCD34D" />
              <text
                x="10"
                y="25"
                fontFamily="Arial, sans-serif"
                fontSize="8"
                fill="white"
                textAnchor="middle"
              >
                Card
              </text>
            </g>
          </g>

          {/* Cost Calculator */}
          <g transform="translate(50, 320)">
            <rect
              width="200"
              height="60"
              rx="8"
              fill="rgba(255,255,255,0.15)"
            />
            <text
              x="100"
              y="20"
              fontFamily="Arial, sans-serif"
              fontSize="14"
              fontWeight="bold"
              fill="white"
              textAnchor="middle"
            >
              Cost Calculator
            </text>
            <text
              x="100"
              y="35"
              fontFamily="Arial, sans-serif"
              fontSize="12"
              fill="#FCD34D"
              textAnchor="middle"
            >
              Living: $2,500/month
            </text>
            <text
              x="100"
              y="50"
              fontFamily="Arial, sans-serif"
              fontSize="12"
              fill="#FCD34D"
              textAnchor="middle"
            >
              Tuition: $25,000/year
            </text>
          </g>

          {/* Title */}
          <g transform="translate(280, 370)">
            <text
              x="0"
              y="30"
              fontFamily="Arial, sans-serif"
              fontSize="32"
              fontWeight="bold"
              fill="white"
            >
              StudyGlobal
            </text>
            <text
              x="0"
              y="55"
              fontFamily="Arial, sans-serif"
              fontSize="16"
              fill="#DBEAFE"
            >
              International Student Services Platform
            </text>
          </g>

          {videoUrl && (
            <g>
              <circle cx="400" cy="225" r="40" fill="rgba(0,0,0,0.7)" />
              <path d="M385 210 L385 240 L415 225 Z" fill="white" />
            </g>
          )}
        </svg>
      );

    case "11": // FlightBuddy
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
          <defs>
            <linearGradient
              id="flightSkyGradient11"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="50%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0369A1" />
            </linearGradient>
          </defs>

          {/* Sky Background */}
          <rect width="800" height="450" fill="url(#flightSkyGradient11)" />

          {/* Clouds */}
          <g fill="white" opacity="0.8">
            <ellipse cx="120" cy="80" rx="50" ry="25" />
            <ellipse cx="90" cy="90" rx="35" ry="18" />
            <ellipse cx="150" cy="90" rx="40" ry="20" />

            <ellipse cx="600" cy="60" rx="45" ry="22" />
            <ellipse cx="575" cy="70" rx="30" ry="15" />
            <ellipse cx="625" cy="70" rx="35" ry="17" />

            <ellipse cx="350" cy="120" rx="40" ry="20" />
            <ellipse cx="325" cy="130" rx="25" ry="12" />
            <ellipse cx="375" cy="130" rx="30" ry="15" />
          </g>

          {/* Main Airplane */}
          <g transform="translate(300, 180) rotate(-10)">
            <ellipse cx="60" cy="25" rx="80" ry="12" fill="#E5E7EB" />
            <rect x="0" y="18" width="120" height="14" rx="7" fill="#374151" />
            <path d="M120 25 L145 20 L145 30 Z" fill="#374151" />

            {/* Wings */}
            <rect x="25" y="8" width="70" height="8" rx="4" fill="#6B7280" />
            <rect x="25" y="32" width="70" height="8" rx="4" fill="#6B7280" />

            {/* Tail */}
            <rect x="85" y="5" width="12" height="40" rx="6" fill="#6B7280" />

            {/* Windows */}
            <circle cx="30" cy="25" r="3" fill="#60A5FA" />
            <circle cx="45" cy="25" r="3" fill="#60A5FA" />
            <circle cx="60" cy="25" r="3" fill="#60A5FA" />
            <circle cx="75" cy="25" r="3" fill="#60A5FA" />
          </g>

          {/* Flight Path */}
          <path
            d="M80 300 Q200 200 350 250 Q500 220 650 280"
            stroke="#FCD34D"
            strokeWidth="4"
            fill="none"
            strokeDasharray="15,10"
            opacity="0.8"
          />

          {/* Airport/City Markers */}
          <g>
            {/* Departure City */}
            <g transform="translate(80, 300)">
              <circle cx="0" cy="0" r="15" fill="#FCD34D" />
              <text
                x="0"
                y="5"
                fontFamily="Arial, sans-serif"
                fontSize="14"
                fontWeight="bold"
                fill="#0369A1"
                textAnchor="middle"
              >
                A
              </text>
              <rect
                x="-30"
                y="20"
                width="60"
                height="25"
                rx="4"
                fill="rgba(255,255,255,0.9)"
              />
              <text
                x="0"
                y="35"
                fontFamily="Arial, sans-serif"
                fontSize="10"
                fontWeight="bold"
                fill="#0369A1"
                textAnchor="middle"
              >
                New York
              </text>
            </g>

            {/* Destination City */}
            <g transform="translate(650, 280)">
              <circle cx="0" cy="0" r="15" fill="#FCD34D" />
              <text
                x="0"
                y="5"
                fontFamily="Arial, sans-serif"
                fontSize="14"
                fontWeight="bold"
                fill="#0369A1"
                textAnchor="middle"
              >
                B
              </text>
              <rect
                x="-25"
                y="20"
                width="50"
                height="25"
                rx="4"
                fill="rgba(255,255,255,0.9)"
              />
              <text
                x="0"
                y="35"
                fontFamily="Arial, sans-serif"
                fontSize="10"
                fontWeight="bold"
                fill="#0369A1"
                textAnchor="middle"
              >
                London
              </text>
            </g>

            {/* Layover City */}
            <g transform="translate(350, 250)">
              <circle cx="0" cy="0" r="12" fill="#F59E0B" />
              <text
                x="0"
                y="4"
                fontFamily="Arial, sans-serif"
                fontSize="12"
                fontWeight="bold"
                fill="white"
                textAnchor="middle"
              >
                C
              </text>
              <rect
                x="-25"
                y="18"
                width="50"
                height="20"
                rx="3"
                fill="rgba(255,255,255,0.9)"
              />
              <text
                x="0"
                y="30"
                fontFamily="Arial, sans-serif"
                fontSize="9"
                fontWeight="bold"
                fill="#0369A1"
                textAnchor="middle"
              >
                Dubai
              </text>
            </g>
          </g>

          {/* Traveler Connection Cards */}
          <g transform="translate(500, 120)">
            <rect
              width="250"
              height="100"
              rx="12"
              fill="rgba(255,255,255,0.95)"
            />
            <rect width="250" height="30" rx="12" fill="#0369A1" />
            <text
              x="125"
              y="20"
              fontFamily="Arial, sans-serif"
              fontSize="14"
              fontWeight="bold"
              fill="white"
              textAnchor="middle"
            >
              Flight Connections
            </text>

            {/* Traveler profiles */}
            <g transform="translate(20, 40)">
              <circle cx="15" cy="15" r="12" fill="#FCD34D" />
              <text
                x="15"
                y="19"
                fontFamily="Arial, sans-serif"
                fontSize="10"
                fontWeight="bold"
                fill="#0369A1"
                textAnchor="middle"
              >
                JS
              </text>
              <text
                x="35"
                y="15"
                fontFamily="Arial, sans-serif"
                fontSize="10"
                fill="#374151"
              >
                John Smith
              </text>
              <text
                x="35"
                y="25"
                fontFamily="Arial, sans-serif"
                fontSize="8"
                fill="#6B7280"
              >
                Software Engineer
              </text>
            </g>

            <g transform="translate(130, 40)">
              <circle cx="15" cy="15" r="12" fill="#10B981" />
              <text
                x="15"
                y="19"
                fontFamily="Arial, sans-serif"
                fontSize="10"
                fontWeight="bold"
                fill="white"
                textAnchor="middle"
              >
                ML
              </text>
              <text
                x="35"
                y="15"
                fontFamily="Arial, sans-serif"
                fontSize="10"
                fill="#374151"
              >
                Maria Lopez
              </text>
              <text
                x="35"
                y="25"
                fontFamily="Arial, sans-serif"
                fontSize="8"
                fill="#6B7280"
              >
                Designer
              </text>
            </g>

            <g transform="translate(75, 65)">
              <rect
                x="0"
                y="0"
                width="100"
                height="20"
                rx="10"
                fill="#FCD34D"
              />
              <text
                x="50"
                y="13"
                fontFamily="Arial, sans-serif"
                fontSize="10"
                fontWeight="bold"
                fill="#0369A1"
                textAnchor="middle"
              >
                Connect Now
              </text>
            </g>
          </g>

          {/* Luggage Sharing Feature */}
          <g transform="translate(50, 120)">
            <rect
              width="180"
              height="80"
              rx="10"
              fill="rgba(255,255,255,0.9)"
            />
            <text
              x="90"
              y="20"
              fontFamily="Arial, sans-serif"
              fontSize="12"
              fontWeight="bold"
              fill="#0369A1"
              textAnchor="middle"
            >
              Luggage Sharing
            </text>

            {/* Suitcase icon */}
            <g transform="translate(70, 30)">
              <rect x="0" y="10" width="40" height="25" rx="5" fill="#6B7280" />
              <rect x="5" y="5" width="30" height="8" rx="2" fill="#374151" />
              <circle cx="35" cy="40" r="4" fill="#374151" />
              <circle cx="5" cy="40" r="4" fill="#374151" />
            </g>

            <text
              x="90"
              y="60"
              fontFamily="Arial, sans-serif"
              fontSize="9"
              fill="#374151"
              textAnchor="middle"
            >
              Share space • Save costs
            </text>
          </g>

          {/* Title */}
          <g transform="translate(260, 370)">
            <text
              x="0"
              y="30"
              fontFamily="Arial, sans-serif"
              fontSize="32"
              fontWeight="bold"
              fill="white"
            >
              Flight Buddy
            </text>
            <text
              x="0"
              y="55"
              fontFamily="Arial, sans-serif"
              fontSize="16"
              fill="#BAE6FD"
            >
              Travelers Connection Platform
            </text>
          </g>

          {videoUrl && (
            <g>
              <circle cx="400" cy="225" r="40" fill="rgba(0,0,0,0.7)" />
              <path d="M385 210 L385 240 L415 225 Z" fill="white" />
            </g>
          )}
        </svg>
      );

    case "12": // Sports Platform
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
          <defs>
            <linearGradient
              id="sportsGradient12"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#059669" />
              <stop offset="50%" stopColor="#047857" />
              <stop offset="100%" stopColor="#065F46" />
            </linearGradient>
          </defs>

          {/* Background */}
          <rect width="800" height="450" fill="url(#sportsGradient12)" />

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

          {/* Basketball */}
          <g transform="translate(350, 80)">
            <circle cx="0" cy="0" r="20" fill="#F97316" />
            <path
              d="M-20 0 Q0 -10 20 0"
              stroke="#1F2937"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M-20 0 Q0 10 20 0"
              stroke="#1F2937"
              strokeWidth="2"
              fill="none"
            />
            <line
              x1="0"
              y1="-20"
              x2="0"
              y2="20"
              stroke="#1F2937"
              strokeWidth="2"
            />
          </g>

          {/* Platform cards */}
          <g transform="translate(150, 380)">
            <rect
              width="200"
              height="50"
              rx="10"
              fill="rgba(255,255,255,0.95)"
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
              Venue Booking Platform
            </text>
          </g>

          <g transform="translate(450, 380)">
            <rect
              width="200"
              height="50"
              rx="10"
              fill="rgba(255,255,255,0.95)"
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
              Trainer Discovery Platform
            </text>
          </g>

          {videoUrl && (
            <g>
              <circle cx="400" cy="225" r="40" fill="rgba(0,0,0,0.7)" />
              <path d="M385 210 L385 240 L415 225 Z" fill="white" />
            </g>
          )}
        </svg>
      );

    case "13": // Health Records
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 450"
          className="w-full h-full"
        >
          <defs>
            <linearGradient
              id="healthGradient13"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="50%" stopColor="#B91C1C" />
              <stop offset="100%" stopColor="#991B1B" />
            </linearGradient>
            <radialGradient id="crossGradient13" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F3F4F6" />
            </radialGradient>
          </defs>

          {/* Background */}
          <rect width="800" height="450" fill="url(#healthGradient13)" />

          {/* Medical Cross */}
          <g transform="translate(350, 100)">
            <circle cx="50" cy="50" r="60" fill="rgba(255,255,255,0.1)" />
            <rect
              x="35"
              y="10"
              width="30"
              height="80"
              fill="url(#crossGradient13)"
              rx="5"
            />
            <rect
              x="15"
              y="30"
              width="70"
              height="30"
              fill="url(#crossGradient13)"
              rx="5"
            />
          </g>

          {/* Health Records Dashboard */}
          <g transform="translate(500, 120)">
            <rect
              width="250"
              height="180"
              rx="12"
              fill="rgba(255,255,255,0.95)"
            />
            <rect width="250" height="35" rx="12" fill="#DC2626" />
            <text
              x="125"
              y="25"
              fontFamily="Arial, sans-serif"
              fontSize="16"
              fontWeight="bold"
              fill="white"
              textAnchor="middle"
            >
              Health Records
            </text>

            {/* Patient Info */}
            <g transform="translate(20, 50)">
              <circle cx="20" cy="20" r="15" fill="#FEE2E2" />
              <text
                x="20"
                y="25"
                fontFamily="Arial, sans-serif"
                fontSize="12"
                fontWeight="bold"
                fill="#DC2626"
                textAnchor="middle"
              >
                JS
              </text>
              <text
                x="45"
                y="18"
                fontFamily="Arial, sans-serif"
                fontSize="12"
                fontWeight="bold"
                fill="#374151"
              >
                John Smith
              </text>
              <text
                x="45"
                y="30"
                fontFamily="Arial, sans-serif"
                fontSize="10"
                fill="#6B7280"
              >
                DOB: 01/15/1985
              </text>
            </g>

            {/* Record lines */}
            <g transform="translate(20, 80)">
              <rect x="0" y="0" width="210" height="15" rx="2" fill="#FEE2E2" />
              <text
                x="10"
                y="10"
                fontFamily="Arial, sans-serif"
                fontSize="9"
                fill="#DC2626"
              >
                Prescription: Medication ABC - Dr. Williams
              </text>

              <rect
                x="0"
                y="20"
                width="210"
                height="15"
                rx="2"
                fill="#F3F4F6"
              />
              <text
                x="10"
                y="30"
                fontFamily="Arial, sans-serif"
                fontSize="9"
                fill="#374151"
              >
                Lab Results: Blood Test - Normal Range
              </text>

              <rect
                x="0"
                y="40"
                width="210"
                height="15"
                rx="2"
                fill="#FEE2E2"
              />
              <text
                x="10"
                y="50"
                fontFamily="Arial, sans-serif"
                fontSize="9"
                fill="#DC2626"
              >
                Appointment: Cardiology - 03/15/2025
              </text>

              <rect
                x="0"
                y="60"
                width="210"
                height="15"
                rx="2"
                fill="#F3F4F6"
              />
              <text
                x="10"
                y="70"
                fontFamily="Arial, sans-serif"
                fontSize="9"
                fill="#374151"
              >
                Vaccination: COVID-19 Booster - Complete
              </text>

              <rect
                x="0"
                y="80"
                width="210"
                height="15"
                rx="2"
                fill="#FEE2E2"
              />
              <text
                x="10"
                y="90"
                fontFamily="Arial, sans-serif"
                fontSize="9"
                fill="#DC2626"
              >
                Insurance: Health Plan XYZ - Active
              </text>
            </g>
          </g>

          {/* Heart Monitor Line */}
          <g transform="translate(50, 280)">
            <path
              d="M0 20 L30 20 L40 0 L50 40 L60 0 L70 20 L100 20 L130 20 L140 0 L150 40 L160 0 L170 20 L200 20"
              stroke="#FCD34D"
              strokeWidth="3"
              fill="none"
            />
          </g>

          {/* Security Lock Icon */}
          <g transform="translate(100, 180)">
            <rect x="15" y="20" width="40" height="35" rx="8" fill="#FCD34D" />
            <rect
              x="20"
              y="10"
              width="30"
              height="20"
              rx="15"
              fill="none"
              stroke="#FCD34D"
              strokeWidth="4"
            />
            <circle cx="35" cy="32" r="4" fill="#DC2626" />
            <rect x="33" y="35" width="4" height="8" fill="#DC2626" />
          </g>

          {/* HIPAA Compliance Badge */}
          <g transform="translate(100, 120)">
            <rect
              width="120"
              height="40"
              rx="20"
              fill="rgba(255,255,255,0.15)"
            />
            <text
              x="60"
              y="18"
              fontFamily="Arial, sans-serif"
              fontSize="12"
              fontWeight="bold"
              fill="white"
              textAnchor="middle"
            >
              HIPAA
            </text>
            <text
              x="60"
              y="32"
              fontFamily="Arial, sans-serif"
              fontSize="10"
              fill="#FEE2E2"
              textAnchor="middle"
            >
              Compliant
            </text>
          </g>

          {/* Emergency Access */}
          <g transform="translate(300, 320)">
            <rect
              width="200"
              height="60"
              rx="10"
              fill="rgba(255,255,255,0.15)"
            />
            <text
              x="100"
              y="20"
              fontFamily="Arial, sans-serif"
              fontSize="14"
              fontWeight="bold"
              fill="white"
              textAnchor="middle"
            >
              Emergency Access
            </text>
            <text
              x="100"
              y="35"
              fontFamily="Arial, sans-serif"
              fontSize="10"
              fill="#FEE2E2"
              textAnchor="middle"
            >
              Critical health info available 24/7
            </text>
            <text
              x="100"
              y="50"
              fontFamily="Arial, sans-serif"
              fontSize="10"
              fill="#FEE2E2"
              textAnchor="middle"
            >
              Blood Type: O+ | Allergies: Penicillin
            </text>
          </g>

          {/* Title */}
          <g transform="translate(200, 390)">
            <text
              x="0"
              y="30"
              fontFamily="Arial, sans-serif"
              fontSize="28"
              fontWeight="bold"
              fill="white"
            >
              HealthRecords
            </text>
            <text
              x="0"
              y="55"
              fontFamily="Arial, sans-serif"
              fontSize="14"
              fill="#FEE2E2"
            >
              Secure Health Management System
            </text>
          </g>

          {videoUrl && (
            <g>
              <circle cx="400" cy="225" r="40" fill="rgba(0,0,0,0.7)" />
              <path d="M385 210 L385 240 L415 225 Z" fill="white" />
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
