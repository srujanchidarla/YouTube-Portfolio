// components/sections/VideoGrid.tsx
"use client";

import React, { useState } from "react";
import VideoCard from "../ui/VideoCard";
import CategoryPills from "../ui/CategoryPills";
import { Video, Category } from "../../types";

interface VideoGridProps {
  videos: Video[];
  categories?: Category[];
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos, categories = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Filter videos based on selected category
  const filteredVideos =
    selectedCategory === "All"
      ? videos
      : videos.filter((video) => video.category === selectedCategory);

  // Transform categories for the CategoryPills component
  const allCategories: Category[] = [
    { id: "all", name: "All" },
    ...(categories || []),
  ];

  return (
    <div className="w-full">
      {/* Category pills for filtering */}
      {categories && categories.length > 0 && (
        <div className="mb-6 pb-4 border-b border-gray-200 dark:border-zinc-800">
          <CategoryPills
            categories={allCategories}
            selectedCategory={selectedCategory}
            onSelect={(category) => setSelectedCategory(category)}
          />
        </div>
      )}

      {/* Grid of videos */}
      {filteredVideos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-lg text-gray-500 dark:text-gray-400">
            No projects found for this category.
          </p>
          <button
            className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
            onClick={() => setSelectedCategory("All")}
          >
            View all projects
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoGrid;
