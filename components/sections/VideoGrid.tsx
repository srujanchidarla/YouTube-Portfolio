// components/sections/VideoGrid.tsx
"use client";

import React, { useState, useMemo } from "react";
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
  const filteredVideos = useMemo(() => {
    if (selectedCategory === "All") {
      return videos;
    }

    return videos.filter((video) => {
      // Handle both string and array category formats
      if (Array.isArray(video.category)) {
        return video.category.some(
          (cat) => cat.toLowerCase() === selectedCategory.toLowerCase()
        );
      } else {
        return video.category?.toLowerCase() === selectedCategory.toLowerCase();
      }
    });
  }, [videos, selectedCategory]);

  // Enhanced categories with proper ordering and All option
  const allCategories: Category[] = useMemo(() => {
    const defaultCategories: Category[] = [
      { id: "all", name: "All" },

      // Innovative tech domains (featured first)
      { id: "agritech", name: "AgriTech" },
      { id: "healthtech", name: "HealthTech" },
      { id: "edtech", name: "EdTech" },
      { id: "traveltech", name: "Travel Tech" },
      { id: "sportstech", name: "Sports Tech" },

      // Core development categories
      { id: "web", name: "Web Development" },
      { id: "mobile", name: "Mobile Apps" },
      { id: "extensions", name: "Browser Extensions" },
      { id: "devtools", name: "Developer Tools" },
      { id: "project-management", name: "Project Management" },

      // Technology stack categories
      { id: "full-stack", name: "Full Stack" },
      { id: "frontend", name: "Frontend" },
      { id: "backend", name: "Backend" },

      // Framework/Library categories
      { id: "react", name: "React" },
      { id: "angular", name: "Angular" },
      { id: "nextjs", name: "Next.js" },

      // Language categories
      { id: "javascript", name: "JavaScript" },
      { id: "typescript", name: "TypeScript" },
      { id: "nodejs", name: "Node.js" },
    ];

    // Merge with provided categories, removing duplicates
    if (categories && categories.length > 0) {
      const providedCategoryNames = new Set(
        categories.map((cat) => cat.name.toLowerCase())
      );
      const uniqueDefaultCategories = defaultCategories.filter(
        (cat) =>
          cat.name === "All" ||
          !providedCategoryNames.has(cat.name.toLowerCase())
      );
      return [...uniqueDefaultCategories, ...categories];
    }

    return defaultCategories;
  }, [categories]);

  // Get category counts for better UX
  const getCategoryCount = (categoryName: string): number => {
    if (categoryName === "All") return videos.length;

    return videos.filter((video) => {
      if (Array.isArray(video.category)) {
        return video.category.some(
          (cat) => cat.toLowerCase() === categoryName.toLowerCase()
        );
      } else {
        return video.category?.toLowerCase() === categoryName.toLowerCase();
      }
    }).length;
  };

  // Filter out categories with no videos
  const availableCategories = allCategories.filter(
    (category) => getCategoryCount(category.name) > 0
  );

  return (
    <div className="w-full">
      {/* Category pills for filtering */}
      <div className="mb-6 pb-4 border-b border-gray-200 dark:border-zinc-800">
        <CategoryPills
          categories={availableCategories}
          selectedCategory={selectedCategory}
          onSelect={(category) => setSelectedCategory(category)}
        />

        {/* Category info */}
        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {selectedCategory === "All"
              ? `Showing all ${filteredVideos.length} projects`
              : `${filteredVideos.length} projects in ${selectedCategory}`}
          </p>

          {selectedCategory !== "All" && (
            <button
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              onClick={() => setSelectedCategory("All")}
            >
              Clear filter
            </button>
          )}
        </div>
      </div>

      {/* Grid of videos */}
      {filteredVideos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-16 h-16 mb-4 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No projects found
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            No projects match the selected category &quot;{selectedCategory}
            &quot;.
          </p>
          <button
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
