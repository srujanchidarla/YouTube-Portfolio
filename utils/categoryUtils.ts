// utils/categoryUtils.ts - Clean utility functions only

import { Video } from "../types";

/**
 * Check if a video belongs to a specific category
 * Handles both single category (string) and multiple categories (string[])
 */
export const videoHasCategory = (
  video: Video,
  categoryName: string
): boolean => {
  if (!video.category) return false;

  // If category is a string, do direct comparison
  if (typeof video.category === "string") {
    return video.category === categoryName;
  }

  // If category is an array, check if it includes the category
  if (Array.isArray(video.category)) {
    return video.category.includes(categoryName);
  }

  return false;
};

/**
 * Get all categories for a video as an array
 */
export const getVideoCategories = (video: Video): string[] => {
  if (!video.category) return [];

  if (typeof video.category === "string") {
    return [video.category];
  }

  if (Array.isArray(video.category)) {
    return video.category;
  }

  return [];
};

/**
 * Filter videos by selected category
 */
export const filterVideosByCategory = (
  videos: Video[],
  selectedCategory: string
): Video[] => {
  // If "All" is selected, return all videos
  if (selectedCategory === "All") {
    return videos;
  }

  // Filter videos that have the selected category
  return videos.filter((video) => videoHasCategory(video, selectedCategory));
};
