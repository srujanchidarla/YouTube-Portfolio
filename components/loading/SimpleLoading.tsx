// components/loading/SimpleLoading.tsx
"use client";

import { useState, useEffect } from "react";

export default function SimpleLoading() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Check if the loading screen has been shown before
    const hasLoadedBefore = localStorage.getItem("firstLoadComplete");

    // If it has been shown before, immediately hide the loading screen
    if (hasLoadedBefore) {
      setVisible(false);
      return;
    }

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    // Hide after animation completes and mark as loaded
    const timer = setTimeout(() => {
      setVisible(false);
      localStorage.setItem("firstLoadComplete", "true");
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-white dark:bg-zinc-900 z-50 flex flex-col items-center justify-center">
      {/* Play button container */}
      <div className="w-28 h-20 bg-red-600 rounded-2xl flex items-center justify-center animate-pulse">
        {/* Play triangle */}
        <div className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-white ml-2"></div>
      </div>

      {/* YouTube text */}
      <div className="mt-3 mb-8 text-center">
        <h1 className="text-2xl font-bold dark:text-white">Srujan Chidarla</h1>
      </div>

      {/* Progress bar */}
      <div className="w-64 h-1.5 bg-gray-200 dark:bg-zinc-700 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-red-600 transition-all duration-100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="text-gray-700 dark:text-gray-300 text-sm">Loading...</div>
    </div>
  );
}
