/* eslint-disable @typescript-eslint/no-unused-vars */
// components/ui/SearchBar.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Import Next.js Image component
import { projectVideos } from "../../data/projectVideos";
import { videos } from "../../data/videos";
import { Video } from "../../types";
import { normalizeProjectId } from "../../app/utils/projectMapping";

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Video[]>([]);
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the search component
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Get updated view counts
  const getUpdatedViewCount = (video: Video): number => {
    try {
      const viewedVideosJson = localStorage.getItem("srujan_tube_views");
      if (viewedVideosJson) {
        const viewedVideos = JSON.parse(viewedVideosJson);
        // If this video has been viewed, increment the initial view count
        if (viewedVideos[normalizeProjectId(video.id)]) {
          return (video.views || 0) + 1;
        }
      }
      return video.views || 0;
    } catch (e) {
      return video.views || 0;
    }
  };

  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    // Combine project videos and regular videos for searching
    const allVideos = [...projectVideos, ...videos];

    // Filter videos based on search query
    const results = allVideos.filter((video) => {
      const lowercaseQuery = query.toLowerCase();

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
    setShowResults(true);
  };

  // Handle search submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (searchQuery.trim() !== "") {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowResults(false);
    }
  };

  // Navigate to the selected video
  const handleVideoSelect = (videoId: string) => {
    const normalizedId = normalizeProjectId(videoId);
    router.push(`/video/${normalizedId}`);
    setShowResults(false);
    setSearchQuery("");
  };

  // Format view count
  const formatViewCount = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M views`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K views`;
    }
    return `${count} views`;
  };

  return (
    <div className="relative w-full max-w-xl" ref={searchRef}>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative">
          <input
            type="text"
            placeholder="Search projects"
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => searchQuery.trim() !== "" && setShowResults(true)}
            className="w-full py-2 pl-4 pr-10 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-white rounded-full border border-gray-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </button>
        </div>
      </form>

      {/* Search results dropdown */}
      {showResults && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 max-h-96 overflow-y-auto bg-white dark:bg-zinc-900 rounded-lg shadow-lg z-50">
          <ul className="py-2">
            {searchResults.map((result) => (
              <li
                key={result.id}
                onClick={() => handleVideoSelect(result.id)}
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-200 dark:bg-zinc-800 rounded overflow-hidden mr-3">
                    {result.thumbnail ? (
                      <div className="relative w-10 h-10">
                        <Image
                          src={result.thumbnail}
                          alt={result.title}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-blue-100 dark:bg-blue-900/30">
                        <span className="text-blue-600 dark:text-blue-400 font-medium">
                          {result.title.substring(0, 2).toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {result.title}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                      <span>
                        {formatViewCount(getUpdatedViewCount(result))}
                      </span>
                      <span>•</span>
                      <span>{result.category || "Uncategorized"}</span>
                    </div>
                    {result.techStack && result.techStack.length > 0 && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {result.techStack.slice(0, 2).join(", ")}
                        {result.techStack.length > 2 && " ..."}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* No results message */}
      {showResults &&
        searchQuery.trim() !== "" &&
        searchResults.length === 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-zinc-900 rounded-lg shadow-lg z-50">
            <div className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
              No projects found matching &quot;{searchQuery}&quot;
            </div>
          </div>
        )}
    </div>
  );
};

export default SearchBar;
