// app/page.jsx
"use client";

import { useState, useEffect } from "react";
import VideoGrid from "../components/sections/VideoGrid";
import { videos } from "../data/videos";
import { categories } from "../data/Categories";
import SimpleLoading from "../components/loading/SimpleLoading";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loading after a delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {loading && <SimpleLoading />}
      <h1 className="sr-only">Srujan Chidarla Portfolio</h1>
      <VideoGrid videos={videos} categories={categories} />
    </div>
  );
}
