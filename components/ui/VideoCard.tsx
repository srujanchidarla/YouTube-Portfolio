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

  // Get primary tech categories for badges
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
    return techStack[0] || "";
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
          <ProjectThumbnail projectId={id} title={title} category={category} />

          {/* Category badge */}
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
            {category}
          </div>
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
