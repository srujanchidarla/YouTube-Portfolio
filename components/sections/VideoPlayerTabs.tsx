// components/sections/VideoPlayerTabs.tsx
import React from "react";

interface VideoPlayerTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const VideoPlayerTabs: React.FC<VideoPlayerTabsProps> = ({
  activeTab,
  setActiveTab,
}) => {
  return (
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
  );
};

export default VideoPlayerTabs;
