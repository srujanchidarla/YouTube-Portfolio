// hooks/useViewCounter.ts
"use client";

import { useState, useEffect } from "react";
import { Video } from "../types";
import { projectVideos } from "../data/projectVideos";
import { videos } from "../data/videos";

// Local storage keys
const VIEW_COUNTER_KEY = "srujan_tube_views";
const LIKE_STATUS_KEY = "srujan_tube_likes";
const SUBSCRIBE_STATUS_KEY = "srujan_tube_subscriptions";

interface ViewedVideos {
  [videoId: string]: number; // videoId: timestamp
}

interface LikedVideos {
  [videoId: string]: boolean; // videoId: isLiked
}

interface Subscriptions {
  [channelName: string]: boolean; // channelName: isSubscribed
}

export const useViewCounter = (videoId: string) => {
  const [video, setVideo] = useState<Video | null>(null);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [viewCount, setViewCount] = useState<number>(0);
  const [likeCount, setLikeCount] = useState<number>(0);
  const [subscriberCount, setSubscriberCount] = useState<number>(0);

  // Find the video in our data
  const findVideo = () => {
    // First check in projectVideos
    let foundVideo = projectVideos.find((v) => v.id === videoId);
    if (!foundVideo) {
      // Then check in videos
      foundVideo = videos.find((v) => v.id === videoId);
    }
    return foundVideo || null;
  };

  // Initialize view counter
  useEffect(() => {
    if (!videoId) return;

    const foundVideo = findVideo();
    if (!foundVideo) return;

    setVideo(foundVideo);
    setViewCount(foundVideo.views || 0);
    setLikeCount(foundVideo.likes || 0);
    setSubscriberCount(foundVideo.subscribers || 0);

    // Get viewed videos from localStorage
    const viewedVideosJson = localStorage.getItem(VIEW_COUNTER_KEY);
    const viewedVideos: ViewedVideos = viewedVideosJson
      ? JSON.parse(viewedVideosJson)
      : {};

    // Get liked videos from localStorage
    const likedVideosJson = localStorage.getItem(LIKE_STATUS_KEY);
    const likedVideos: LikedVideos = likedVideosJson
      ? JSON.parse(likedVideosJson)
      : {};
    setIsLiked(likedVideos[videoId] || false);

    // Get subscriptions from localStorage
    const subscriptionsJson = localStorage.getItem(SUBSCRIBE_STATUS_KEY);
    const subscriptions: Subscriptions = subscriptionsJson
      ? JSON.parse(subscriptionsJson)
      : {};
    setIsSubscribed(subscriptions[foundVideo.channelName || ""] || false);

    // Check if this is a new view (either no previous view or last view was more than 1 hour ago)
    const now = Date.now();
    const lastViewTime = viewedVideos[videoId] || 0;
    const oneHourMs = 60 * 60 * 1000; // 1 hour in milliseconds

    if (!lastViewTime || now - lastViewTime > oneHourMs) {
      // Record this view
      viewedVideos[videoId] = now;
      localStorage.setItem(VIEW_COUNTER_KEY, JSON.stringify(viewedVideos));

      // Increment view count
      const newViewCount = viewCount + 1;
      setViewCount(newViewCount);

      // Update in-memory data (this doesn't persist after page refresh, but gives immediate feedback)
      if (foundVideo) {
        foundVideo.views = newViewCount;
      }

      // Update your backend here in a real application
      console.log(`View count for ${videoId} increased to ${newViewCount}`);
    }
  }, [videoId]);

  // Toggle like status
  const toggleLike = () => {
    if (!video) return;

    // Get current liked videos
    const likedVideosJson = localStorage.getItem(LIKE_STATUS_KEY);
    const likedVideos: LikedVideos = likedVideosJson
      ? JSON.parse(likedVideosJson)
      : {};

    // Toggle the like status
    const newLikeStatus = !isLiked;
    likedVideos[videoId] = newLikeStatus;

    // Save to localStorage
    localStorage.setItem(LIKE_STATUS_KEY, JSON.stringify(likedVideos));

    // Update state
    setIsLiked(newLikeStatus);

    // Update like count
    const countDelta = newLikeStatus ? 1 : -1;
    const newLikeCount = likeCount + countDelta;
    setLikeCount(newLikeCount);

    // Update in-memory data
    if (video) {
      video.likes = newLikeCount;
    }

    // Update your backend here in a real application
    console.log(
      `Like count for ${videoId} ${
        newLikeStatus ? "increased" : "decreased"
      } to ${newLikeCount}`
    );
  };

  // Toggle subscription status
  const toggleSubscription = () => {
    if (!video || !video.channelName) return;

    // Get current subscriptions
    const subscriptionsJson = localStorage.getItem(SUBSCRIBE_STATUS_KEY);
    const subscriptions: Subscriptions = subscriptionsJson
      ? JSON.parse(subscriptionsJson)
      : {};

    // Toggle the subscription status
    const newSubscriptionStatus = !isSubscribed;
    subscriptions[video.channelName] = newSubscriptionStatus;

    // Save to localStorage
    localStorage.setItem(SUBSCRIBE_STATUS_KEY, JSON.stringify(subscriptions));

    // Update state
    setIsSubscribed(newSubscriptionStatus);

    // Update subscriber count
    const countDelta = newSubscriptionStatus ? 1 : -1;
    const newSubscriberCount = subscriberCount + countDelta;
    setSubscriberCount(newSubscriberCount);

    // Update in-memory data
    if (video) {
      video.subscribers = newSubscriberCount;
    }

    // Update your backend here in a real application
    console.log(
      `Subscriber count for ${video.channelName} ${
        newSubscriptionStatus ? "increased" : "decreased"
      } to ${newSubscriberCount}`
    );
  };

  return {
    video,
    viewCount,
    likeCount,
    subscriberCount,
    isLiked,
    isSubscribed,
    toggleLike,
    toggleSubscription,
  };
};
