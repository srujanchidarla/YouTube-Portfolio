"use client";

import { useState, useEffect } from "react";

export default function SimpleLoading() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hasLoadedBefore = localStorage.getItem("firstLoadComplete");

    if (hasLoadedBefore) {
      setVisible(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

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
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div className="text-center flex flex-col items-center justify-center">
        {/* YouTube-like play button */}
        <div
          className="w-40 h-28 rounded-xl flex items-center justify-center mb-6"
          style={{ backgroundColor: "rgb(220, 38, 38)" }}
        >
          <div className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-white ml-2"></div>
        </div>

        {/* Name */}
        <h1 className="text-3xl font-bold mb-6 text-center">Srujan Chidarla</h1>

        {/* Progress bar */}
        <div
          className="w-80 h-1.5 rounded-full overflow-hidden mb-4"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
        >
          <div
            className="h-full transition-all duration-100"
            style={{
              width: `${progress}%`,
              backgroundColor: "rgb(220, 38, 38)",
            }}
          ></div>
        </div>

        {/* Loading text */}
        <div className="text-sm animate-ellipsis text-center">
          Loading Portfolio
        </div>
      </div>
    </div>
  );
}
2