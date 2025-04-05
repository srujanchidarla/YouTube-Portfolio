/* eslint-disable @typescript-eslint/no-unused-vars */
// app/search/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import VideoCard from "../../components/ui/VideoCard";
import { projectVideos } from "../../data/projectVideos";
import { videos } from "../../data/videos";
import { Video } from "../../types";
import CategoryPills from "@/components/ui/CategoryPills";
import { normalizeProjectId } from "../../app/utils/projectMapping";

interface Category {
  id: string;
  name: string;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams?.get("q") || "";
  const [searchResults, setSearchResults] = useState<Video[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [filteredResults, setFilteredResults] = useState<Video[]>([]);
  const [categories, setCategories] = useState<Category[]>([
    { id: "all", name: "All" },
  ]);

  // Get updated view counts for videos
  const getUpdatedVideos = (videos: Video[]): Video[] => {
    try {
      const viewedVideosJson = localStorage.getItem("srujan_tube_views");
      if (!viewedVideosJson) return videos;

      const viewedVideos = JSON.parse(viewedVideosJson);

      return videos.map((video) => {
        const normalizedId = normalizeProjectId(video.id);
        if (viewedVideos[normalizedId]) {
          return {
            ...video,
            views: (video.views || 0) + 1,
          };
        }
        return video;
      });
    } catch (e) {
      return videos;
    }
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setFilteredResults([]);
      return;
    }

    // Combine project videos and regular videos for searching
    const allVideos = [...projectVideos, ...videos];

    // Update view counts from localStorage
    const updatedVideos = getUpdatedVideos(allVideos);

    // Filter videos based on search query
    const results = updatedVideos.filter((video) => {
      const lowercaseQuery = searchQuery.toLowerCase();

      // Search in title, description, category, and tech stack
      return (
        video.title.toLowerCase().includes(lowercaseQuery) ||
        (video.description &&
          video.description.toLowerCase().includes(lowercaseQuery)) ||
        (video.category &&
          video.category.toLowerCase().includes(lowercaseQuery)) ||
        (video.techStack &&
          video.techStack.some((tech) =>
            tech.toLowerCase().includes(lowercaseQuery)
          ))
      );
    });

    setSearchResults(results);

    // Extract unique categories from search results
    const uniqueCategories = [
      { id: "all", name: "All" },
      ...Array.from(
        new Set(results.map((video) => video.category || "Uncategorized"))
      )
        .filter(Boolean)
        .map((category) => ({
          id:
            typeof category === "string"
              ? category.toLowerCase().replace(/\s+/g, "-")
              : "unknown",
          name: category as string,
        })),
    ];

    setCategories(uniqueCategories);
  }, [searchQuery]);

  // Filter results based on selected category
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredResults(searchResults);
    } else {
      const filtered = searchResults.filter(
        (video) => video.category === selectedCategory
      );
      setFilteredResults(filtered);
    }
  }, [selectedCategory, searchResults]);

  return (
    <div className="p-4 md:p-6 mt-14">
      {" "}
      {/* Added mt-14 to account for navbar */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold dark:text-white mb-2">
          Search results for &quot;{searchQuery}&quot;
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {searchResults.length}{" "}
          {searchResults.length === 1 ? "project" : "projects"} found
        </p>
      </div>
      {/* Category pills */}
      {categories.length > 1 && (
        <div className="mb-6 overflow-x-auto pb-2">
          <CategoryPills
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>
      )}
      {/* Search results grid */}
      {filteredResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredResults.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="text-gray-400 dark:text-gray-500 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            No results found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-md">
            We couldn&apos;t find any projects matching &quot;{searchQuery}
            &quot;
            {selectedCategory !== "All"
              ? ` in the ${selectedCategory} category`
              : ""}
            .
            <br />
            Try using different keywords or removing filters.
          </p>
        </div>
      )}
    </div>
  );
}
