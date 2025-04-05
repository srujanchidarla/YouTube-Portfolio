// components/sections/VideoPlayer.tsx
"use client";

import { useState } from "react";
import ProjectThumbnail from "../ui/ProjectThumbnail";
import { formatDistanceToNow } from "date-fns";
import { Video } from "../../types";
import VideoPlayerHeader from "./VideoPlayerHeader";
import VideoPlayerActions from "./VideoPlayerActions";
import VideoPlayerTabs from "./VideoPlayerTabs";
// import Reviews from "./Reviews";

interface VideoPlayerProps {
  video: Video;
}

const VideoPlayer = ({ video }: VideoPlayerProps) => {
  const [showFullDescription, setShowFullDescription] =
    useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("overview");

  if (!video) return <div>Loading...</div>;

  const { id, title, category, createdAt } = video;

  // Format date
  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true });
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Toggle description collapse/expand
  const toggleDescription = (): void => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="max-w-full">
      {/* Video/project showcase container */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-zinc-800 mb-4">
        <ProjectThumbnail
          projectId={id}
          title={title}
          category={category}
          videoUrl={video.videoUrl}
          imageUrl={video.imageUrl}
        />
      </div>

      {/* Video title */}
      <h1 className="text-xl font-semibold mb-3 dark:text-white">{title}</h1>

      {/* Channel info and action buttons */}
      <VideoPlayerHeader video={video} />

      {/* Tabs for different content sections */}
      <div className="border-b border-gray-200 dark:border-zinc-700 mb-4">
        <VideoPlayerTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Tab content */}
      <div className="bg-gray-100 dark:bg-zinc-800 rounded-xl p-4 mb-6">
        <VideoPlayerActions
          video={video}
          activeTab={activeTab}
          showFullDescription={showFullDescription}
          toggleDescription={toggleDescription}
          timeAgo={timeAgo}
          formattedDate={formattedDate}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
