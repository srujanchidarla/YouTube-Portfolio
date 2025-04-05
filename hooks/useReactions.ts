// hooks/useReactions.ts
"use client";

import { useState, useEffect } from "react";
import { Video } from "../types";
import { projectVideos } from "../data/projectVideos";
import { videos } from "../data/videos";

// Local storage keys
const VIEW_COUNTER_KEY = "srujan_tube_views";
const REACTION_KEY = "srujan_tube_reactions";
const SUBSCRIBE_STATUS_KEY = "srujan_tube_subscriptions";

type ReactionType = "like" | "heart" | "clap" | "idea" | null;

interface ViewedVideos {
  [videoId: string]: number; // videoId: timestamp
}

interface VideoReactions {
  [videoId: string]: {
    type: ReactionType;
    timestamp: number;
  };
}

interface Subscriptions {
  [channelName: string]: boolean; // channelName: isSubscribed
}

interface ReactionCounts {
  like: number;
  heart: number;
  clap: number;
  idea: number;
}

export const useReactions = (videoId: string) => {
  const [video, setVideo] = useState<Video | null>(null);
  const [viewCount, setViewCount] = useState<number>(0);
  const [currentReaction, setCurrentReaction] = useState<ReactionType>(null);
  const [reactionCounts, setReactionCounts] = useState<ReactionCounts>({
    like: 0,
    heart: 0,
    clap: 0,
    idea: 0,
  });
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
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

  // Initialize view counter and reactions
  useEffect(() => {
    if (!videoId) return;

    const foundVideo = findVideo();
    if (!foundVideo) return;

    setVideo(foundVideo);

    // Set view count (starting from 0)
    setViewCount(0);

    // Set subscriber count (starting from 0)
    setSubscriberCount(0);

    // Get reaction data from localStorage
    const reactionsJson = localStorage.getItem(REACTION_KEY);
    const videoReactions: VideoReactions = reactionsJson
      ? JSON.parse(reactionsJson)
      : {};

    // Get user's current reaction for this video
    if (videoReactions[videoId]) {
      setCurrentReaction(videoReactions[videoId].type);
    } else {
      setCurrentReaction(null);
    }

    // Get viewed videos from localStorage
    const viewedVideosJson = localStorage.getItem(VIEW_COUNTER_KEY);
    const viewedVideos: ViewedVideos = viewedVideosJson
      ? JSON.parse(viewedVideosJson)
      : {};

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

      // Increment view count (starting from 0 + 1)
      const newViewCount = 1;
      setViewCount(newViewCount);

      console.log(`View count for ${videoId} increased to ${newViewCount}`);
    } else {
      // If already viewed in the last hour, just show 1 view
      setViewCount(1);
    }

    // Calculate reaction counts for this video (set all to 0 by default)
    const allReactionsJson = localStorage.getItem(REACTION_KEY);
    if (allReactionsJson) {
      const allReactions: VideoReactions = JSON.parse(allReactionsJson);

      // Count reactions by type for this video
      const counts: ReactionCounts = {
        like: 0,
        heart: 0,
        clap: 0,
        idea: 0,
      };

      // For demo purposes, we'll add ONE reaction of the user's previously selected type
      if (allReactions[videoId] && allReactions[videoId].type) {
        counts[allReactions[videoId].type as keyof ReactionCounts] = 1;
      }

      setReactionCounts(counts);
    }
  }, [videoId]);

  // Handle reaction selection
  const handleReaction = (type: ReactionType) => {
    if (!videoId) return;

    // If user clicks the current reaction, remove it
    const newReactionType = currentReaction === type ? null : type;

    // Get current reactions
    const reactionsJson = localStorage.getItem(REACTION_KEY);
    const reactions: VideoReactions = reactionsJson
      ? JSON.parse(reactionsJson)
      : {};

    // Update the reaction
    if (newReactionType) {
      reactions[videoId] = {
        type: newReactionType,
        timestamp: Date.now(),
      };
    } else {
      // Remove reaction if user clicked the same one
      delete reactions[videoId];
    }

    // Save to localStorage
    localStorage.setItem(REACTION_KEY, JSON.stringify(reactions));

    // Update state
    setCurrentReaction(newReactionType);

    // Update reaction counts
    const newCounts = {
      like: 0,
      heart: 0,
      clap: 0,
      idea: 0,
    };

    // Add 1 to the selected reaction type
    if (newReactionType) {
      newCounts[newReactionType] = 1;
    }

    setReactionCounts(newCounts);

    console.log(`Reaction for ${videoId} set to ${newReactionType}`);
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

    // Update subscriber count (0 or 1 for demo)
    const newSubscriberCount = newSubscriptionStatus ? 1 : 0;
    setSubscriberCount(newSubscriberCount);

    console.log(
      `Subscriber count for ${video.channelName} ${
        newSubscriptionStatus ? "increased" : "decreased"
      } to ${newSubscriberCount}`
    );
  };

  return {
    video,
    viewCount,
    currentReaction,
    reactionCounts,
    isSubscribed,
    subscriberCount,
    handleReaction,
    toggleSubscription,
  };
};
