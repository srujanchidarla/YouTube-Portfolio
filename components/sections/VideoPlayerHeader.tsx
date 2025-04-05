// components/sections/VideoPlayerHeader.tsx
"use client";

import Link from "next/link";
import { useReactions } from "../../hooks/useReactions";
import { normalizeProjectId } from "../../app/utils/projectMapping";
import { Video } from "../../types";

interface VideoPlayerHeaderProps {
  video: Video;
}

const VideoPlayerHeader: React.FC<VideoPlayerHeaderProps> = ({ video }) => {
  const normalizedId = normalizeProjectId(video.id);

  // Use our reactions hook
  const { isSubscribed, subscriberCount, toggleSubscription } =
    useReactions(normalizedId);

  // Format count
  const formatCount = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
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
              <circle cx="20" cy="20" r="20" fill="url(#avatarGradientSmall)" />
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

        {/* Creator name and stats */}
        <div>
          <Link href="/channel">
            <h3 className="text-base font-medium dark:text-white">
              {video.channelName || "Srujan Chidarla"}
            </h3>
          </Link>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {formatCount(subscriberCount)} subscribers
          </p>
        </div>

        {/* Subscribe button */}
        <button
          onClick={toggleSubscription}
          className={`ml-2 px-4 py-2 rounded-full text-sm font-medium ${
            isSubscribed
              ? "bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-gray-200"
              : "bg-red-600 text-white hover:bg-red-700"
          }`}
        >
          {isSubscribed ? "Subscribed" : "Subscribe"}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayerHeader;
