// components/ui/VideoCard.tsx
import React from "react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { Video } from "../../types";
import ProjectThumbnail from "./ProjectThumbnail";

interface VideoCardProps {
  video: Video;
  layout?: "vertical" | "horizontal";
}

const VideoCard: React.FC<VideoCardProps> = ({
  video,
  layout = "vertical",
}) => {
  const {
    id,
    title,
    views,
    createdAt,
    channelName,
    category,
    techStack = [],
  } = video;

  // Handle multiple categories
  const getPrimaryCategory = (): string => {
    if (Array.isArray(category)) {
      return category[0] || "";
    }
    return category || "";
  };

  const getAllCategories = (): string[] => {
    if (Array.isArray(category)) {
      return category;
    }
    return category ? [category] : [];
  };

  // Format date
  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true });

  // Format view count
  const formatViewCount = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M views`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K views`;
    }
    return `${count} views`;
  };

  // Get primary tech category for badges
  const getPrimaryTechCategory = (): string => {
    if (techStack.includes("React") || techStack.includes("ReactJS"))
      return "React";
    if (techStack.includes("Angular") || techStack.includes("AngularJS"))
      return "Angular";
    if (techStack.includes("Next.js") || techStack.includes("NextJs"))
      return "Next.js";
    if (techStack.includes("Node.js") || techStack.includes("Express"))
      return "Node.js";
    if (techStack.includes("Spring Boot")) return "Spring Boot";
    if (techStack.includes("TypeScript")) return "TypeScript";
    if (techStack.includes("JavaScript")) return "JavaScript";
    return techStack[0] || "";
  };

  // Get category color based on type - UPDATED WITH NEW CATEGORIES
  const getCategoryColor = (cat: string): string => {
    const categoryColors: { [key: string]: string } = {
      // NEW INNOVATIVE TECH DOMAINS
      AgriTech:
        "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
      HealthTech:
        "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
      EdTech:
        "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
      "Travel Tech":
        "bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300",
      "Sports Tech":
        "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300",

      // Core development categories
      "Web Development":
        "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
      "Web Application":
        "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
      "Mobile Apps":
        "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300",
      "Browser Extensions":
        "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
      "Browser Extension":
        "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
      "Developer Tools":
        "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300",
      "Project Management":
        "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300",

      // Tech stack categories
      "Full Stack":
        "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300",
      Frontend:
        "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
      Backend:
        "bg-slate-100 dark:bg-slate-900/30 text-slate-700 dark:text-slate-300",

      // Framework categories
      React: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
      Angular: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
      "Next.js":
        "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300",

      // Language categories
      JavaScript:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
      TypeScript:
        "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
      "Node.js":
        "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
    };

    return (
      categoryColors[cat] ||
      "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300"
    );
  };

  // Check if this is a new innovative project
  const isNewProject = (): boolean => {
    const newProjectIds = [
      "agriwise",
      "studyglobal",
      "flightbuddy",
      "sportsplatform",
      "healthrecords",
    ];
    return newProjectIds.includes(id);
  };

  return (
    <Link href={`/video/${id}`} className="group">
      <div
        className={`flex ${
          layout === "horizontal" ? "flex-row gap-3" : "flex-col gap-2"
        }`}
      >
        {/* Thumbnail */}
        <div
          className={`relative rounded-xl overflow-hidden bg-gray-100 dark:bg-zinc-800 ${
            layout === "horizontal"
              ? "w-40 h-24 flex-shrink-0"
              : "w-full aspect-video"
          }`}
        >
          {/* Force ProjectThumbnail for all projects to ensure SVGs show */}
          <ProjectThumbnail projectId={id} title={title} category={category} />

          {/* NEW badge for innovative projects */}
          {isNewProject() && (
            <div className="absolute top-2 left-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-2 py-1 rounded-full font-bold">
              NEW
            </div>
          )}

          {/* Primary category badge */}
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
            {getPrimaryCategory()}
          </div>

          {/* Multiple categories indicator */}
          {getAllCategories().length > 1 && (
            <div className="absolute bottom-2 left-2 bg-blue-600/80 text-white text-xs px-1.5 py-0.5 rounded">
              +{getAllCategories().length - 1}
            </div>
          )}
        </div>

        {/* Video info */}
        <div className={layout === "horizontal" ? "flex-1 min-w-0" : ""}>
          <h3
            className={`font-medium line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 ${
              layout === "horizontal" ? "text-sm" : "text-base mt-2"
            } dark:text-white`}
          >
            {title}
          </h3>

          <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>{formatViewCount(views)}</span>
            <span>•</span>
            <span>{timeAgo}</span>
          </div>

          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>{channelName}</span>
          </div>

          {/* Category badges for vertical layout */}
          {layout === "vertical" && getAllCategories().length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {getAllCategories()
                .slice(0, 3)
                .map((cat, index) => (
                  <span
                    key={index}
                    className={`px-2 py-0.5 rounded text-xs font-medium ${getCategoryColor(
                      cat
                    )}`}
                  >
                    {cat}
                  </span>
                ))}
              {getAllCategories().length > 3 && (
                <span className="px-2 py-0.5 bg-gray-100 dark:bg-zinc-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                  +{getAllCategories().length - 3}
                </span>
              )}
            </div>
          )}

          {/* Tech stack badges - only show in horizontal layout */}
          {layout === "horizontal" && techStack.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              <span className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs">
                {getPrimaryTechCategory()}
              </span>
              {techStack.length > 1 && (
                <span className="px-1.5 py-0.5 bg-gray-100 dark:bg-zinc-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                  +{techStack.length - 1}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
