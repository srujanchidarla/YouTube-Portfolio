// components/loading/YouTubeLoading.tsx
"use client";

import { useState, useEffect } from "react";
import { useLoading } from "../../app/context/LoadingContext";

const YouTubeLoading = () => {
  const [progress, setProgress] = useState(0);
  const { setLoaded } = useLoading();

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4; // Increase by 4% every interval
      });
    }, 80); // Update every 80ms for a 2 second total

    return () => clearInterval(interval);
  }, []);

  // When loading is complete
  useEffect(() => {
    if (progress === 100) {
      // Wait a bit before hiding to show 100% completion
      const finishTimer = setTimeout(() => {
        setLoaded();
      }, 200);
      return () => clearTimeout(finishTimer);
    }
  }, [progress, setLoaded]);

  const handleSkip = () => {
    setLoaded();
  };

  return (
    <div className="fixed inset-0 bg-white dark:bg-zinc-900 z-50 flex flex-col items-center justify-center transition-opacity duration-500">
      {/* Skip button */}
      <button
        onClick={handleSkip}
        className="absolute top-4 right-4 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
      >
        Skip
      </button>

      {/* YouTube logo animation */}
      <div className="relative mb-10">
        {/* Play button container with pulsing animation */}
        <div className="w-28 h-20 bg-red-600 rounded-2xl flex items-center justify-center animate-pulse">
          {/* Play triangle */}
          <div className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-white ml-2"></div>
        </div>

        {/* YouTube text */}
        <div className="mt-3 text-center">
          <h2 className="text-2xl font-bold dark:text-white">
            Srujan Chidarla
          </h2>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-64 h-1.5 bg-gray-200 dark:bg-zinc-700 rounded-full overflow-hidden mb-6">
        <div
          className="h-full bg-red-600 transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Loading text with ellipsis animation */}
      <div className="text-gray-700 dark:text-gray-300 text-sm flex items-center">
        Loading your portfolio
        <span className="w-5 text-left overflow-hidden inline-block">
          <span className="animate-ellipsis">...</span>
        </span>
      </div>
    </div>
  );
};

export default YouTubeLoading;
