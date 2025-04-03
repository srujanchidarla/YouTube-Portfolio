// components/ui/VideoCard.tsx
import Link from "next/link";
import ProjectThumbnail from "./ProjectThumbnail";
import { formatDistanceToNow } from "date-fns";
import { Video } from "../../types";
import { JSX } from "react";

interface VideoCardProps {
  video: Video;
}

const VideoCard = ({ video }: VideoCardProps): JSX.Element => {
  const { id, title, views, createdAt, duration, channelName, category } =
    video;

  // Format the date to show "2 weeks ago", "3 months ago", etc.
  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true });

  // Format view count (e.g., 1.2K, 3.5M)
  const formatViewCount = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  // Format duration (e.g., 10:30)
  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="group">
      <Link href={`/video/${id}`}>
        <div className="relative aspect-video rounded-xl overflow-hidden mb-2 bg-gray-100 dark:bg-zinc-800">
          {/* Using the inline SVG component instead of an Image */}
          <ProjectThumbnail projectId={id} title={title} category={category} />

          {/* Duration badge */}
          {duration && (
            <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs font-medium px-1 py-0.5 rounded">
              {formatDuration(duration)}
            </div>
          )}
        </div>
      </Link>

      <div className="flex gap-3">
        {/* Channel avatar - using inline SVG */}
        <Link href="/channel" className="flex-shrink-0 mt-1">
          <div className="h-9 w-9 rounded-full overflow-hidden bg-gray-200 dark:bg-zinc-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 36"
              className="w-full h-full"
            >
              <circle cx="18" cy="18" r="18" fill="#3B82F6" />
              <text
                x="18"
                y="23"
                fontFamily="Arial, sans-serif"
                fontSize="14"
                fontWeight="bold"
                fill="white"
                textAnchor="middle"
              >
                {channelName?.charAt(0).toUpperCase() || "S"}
              </text>
            </svg>
          </div>
        </Link>

        {/* Video info */}
        <div>
          <Link href={`/video/${id}`}>
            <h3 className="text-sm font-semibold line-clamp-2 dark:text-white">
              {title}
            </h3>
          </Link>

          <Link href="/channel">
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {channelName || "Srujan Chidarla"}
            </p>
          </Link>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {formatViewCount(views)} views • {timeAgo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
