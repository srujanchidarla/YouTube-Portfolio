// app/video/[id]/page.tsx
"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import VideoCard from "../../../components/ui/VideoCard";
import VideoPlayerContent from "../../../components/ui/VideoPlayerContent";
import { videos } from "../../../data/videos";
import { projectVideos } from "../../../data/projectVideos";
import {
  ArrowRightIcon,
  FireIcon,
  AcademicCapIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/24/outline";
import { Video } from "../../../types";
import Reviews from "@/components/sections/Reviews";
import {
  numericToProjectId,
  getProjectDisplayName,
  normalizeProjectId,
} from "../../utils/projectMapping";
import { useReactions } from "../../../hooks/useReactions";
import ShareMenu from "../../../components/ui/ShareMenu";
import VideoPlayerHeader from "../../../components/sections/VideoPlayerHeader";

// Simple placeholder component to replace the problematic ProjectContentProvider
const ProjectDetails = ({ projectId }: { projectId: string }) => {
  // Normalize the project ID to make sure we're using the project name format
  const normalizedId = normalizeProjectId(projectId);
  const project = projectVideos.find((p) => p.id === normalizedId);

  if (!project) return null;

  // Get the display name using our utility function
  const projectName = getProjectDisplayName(normalizedId);

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm overflow-hidden p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4 dark:text-white">
          {projectName}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>
      </div>

      {/* Tech Stack */}
      {project.techStack && project.techStack.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-3 dark:text-white">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Features */}
      {project.features && project.features.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-3 dark:text-white">
            Key Features
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Challenges */}
      {project.challenges && project.challenges.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-3 dark:text-white">
            Development Challenges
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            {project.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Implementation */}
      {project.implementation && (
        <div>
          <h3 className="text-xl font-semibold mb-3 dark:text-white">
            Implementation Details
          </h3>
          <div className="prose dark:prose-invert text-gray-700 dark:text-gray-300">
            <pre className="bg-gray-50 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto text-sm whitespace-pre-wrap">
              {project.implementation}
            </pre>
          </div>
        </div>
      )}

      {/* Conclusion */}
      {project.conclusion && (
        <div>
          <h3 className="text-xl font-semibold mb-3 dark:text-white">
            Project Conclusion
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            {project.conclusion}
          </p>
        </div>
      )}

      {/* Real-Time Use Cases */}
      {project.realTimeUseCases && project.realTimeUseCases.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-3 dark:text-white">
            Real-Time Use Cases
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            {project.realTimeUseCases.map((useCase) => (
              <li key={useCase}>{useCase}</li>
            ))}
          </ul>
        </div>
      )}

      {/* External Links */}
      <div className="flex space-x-4">
        {project.projectUrl && (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
            GitHub Repository
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

const VideoPage = () => {
  // Use the useParams hook to get the ID parameter
  const params = useParams();
  const videoId = params?.id as string;
  const router = useRouter();

  const [video, setVideo] = useState<Video | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [relatedVideos, setRelatedVideos] = useState<Video[]>([]);
  const [suggestedVideos, setSuggestedVideos] = useState<Video[]>([]);
  const [trendingVideos, setTrendingVideos] = useState<Video[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Use our reactions hook
  const { viewCount, currentReaction, reactionCounts, handleReaction } =
    useReactions(normalizeProjectId(videoId));

  // Handle scroll events to show scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Redirect numeric IDs to project name routes
  useEffect(() => {
    if (videoId && !isNaN(Number(videoId)) && numericToProjectId[videoId]) {
      // Redirect to the project name route
      router.replace(`/video/${numericToProjectId[videoId]}`);
    }
  }, [videoId, router]);

  // Handle 404 cases - this useEffect must be called unconditionally
  useEffect(() => {
    if (!isLoading && !video && videoId) {
      router.push("/404"); // Use router.push instead of window.location
    }
  }, [isLoading, video, videoId, router]);

  // Load video data
  useEffect(() => {
    if (!videoId) return;

    // If we're in the process of redirecting, don't load data yet
    if (!isNaN(Number(videoId)) && numericToProjectId[videoId]) {
      return;
    }

    setIsLoading(true);

    // Normalize the ID to ensure we're using project name format
    const normalizedId = normalizeProjectId(videoId);

    // Find video data by project ID
    const projectVideo = projectVideos.find((v) => v.id === normalizedId);

    if (projectVideo) {
      setVideo(projectVideo);

      // Get all videos for related/suggested videos
      const allVideos = [...videos, ...projectVideos];

      // Track video view
      console.log(`Viewing project: ${projectVideo.title}`);

      // Get related videos (same category, excluding current video)
      const related = allVideos
        .filter((v) => {
          // Make sure we're not including duplicates or the current video
          if (v.id === normalizedId) return false;

          // Only include videos with the same category
          return v.category === projectVideo.category;
        })
        .slice(0, 3);

      // Get suggested videos (different category but similar tech stack)
      const suggested = allVideos
        .filter((v) => {
          // Make sure we're not including duplicates or the current video
          if (v.id === normalizedId) return false;

          // Only include videos from different categories but with similar tech
          return (
            v.category !== projectVideo.category &&
            v.techStack?.some((tech) => projectVideo.techStack?.includes(tech))
          );
        })
        .slice(0, 2);

      // Get trending videos (most views, excluding current)
      const trending = allVideos
        .filter((v) => v.id !== normalizedId)
        .sort((a, b) => (b.views || 0) - (a.views || 0))
        .slice(0, 3);

      setRelatedVideos(related);
      setSuggestedVideos(suggested);
      setTrendingVideos(trending);

      // Scroll to top when changing videos
      window.scrollTo(0, 0);
    }

    setIsLoading(false);
  }, [videoId, router]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Return null if no video is loaded yet
  if (!video) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg text-gray-500">Loading content...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 md:p-6">
      {/* Main content */}
      <div className="w-full lg:w-2/3">
        {/* Always use our custom content player for project videos now */}
        <div className="aspect-video mb-4">
          <VideoPlayerContent
            project={{
              id: video.id,
              title: video.title,
              description: video.description || "",
              category: video.category,
              projectUrl: video.projectUrl,
              techStack: video.techStack,
            }}
            extendedContent={<ProjectDetails projectId={video.id} />}
          />
        </div>

        {/* Channel info and subscribe button */}
        <VideoPlayerHeader video={video} />

        {/* Add reaction buttons similar to the image */}
        <div className="flex items-center gap-4 mb-6 flex-wrap">
          {/* Like Button */}
          <button
            onClick={() => handleReaction("like")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
              currentReaction === "like"
                ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                : "bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-zinc-700"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
            <span>{reactionCounts.like}</span>
          </button>

          {/* Heart Button */}
          <button
            onClick={() => handleReaction("heart")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
              currentReaction === "heart"
                ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                : "bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-zinc-700"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            <span>{reactionCounts.heart}</span>
          </button>

          {/* Clap Button */}
          <button
            onClick={() => handleReaction("clap")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
              currentReaction === "clap"
                ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                : "bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-zinc-700"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z"
                clipRule="evenodd"
              />
            </svg>
            <span>{reactionCounts.clap}</span>
          </button>

          {/* Idea/Lightbulb Button */}
          <button
            onClick={() => handleReaction("idea")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
              currentReaction === "idea"
                ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400"
                : "bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-zinc-700"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
            </svg>
            <span>{reactionCounts.idea}</span>
          </button>

          {/* Share Button with Menu */}
          <ShareMenu
            url={typeof window !== "undefined" ? window.location.href : ""}
            title={video?.title || "Check out this project"}
          />

          {/* View Project Button */}
          <a
            href={video?.projectUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
            <span>View Project</span>
          </a>

          {/* View Count */}
          <div className="ml-auto text-sm text-gray-600 dark:text-gray-400">
            <span>{viewCount.toLocaleString()} views</span>
          </div>
        </div>

        <Reviews projectId={normalizeProjectId(videoId)} />
      </div>

      {/* Sidebar with related videos */}
      <div className="w-full lg:w-1/3">
        {/* Autoplay option */}
        <div className="flex items-center justify-between mb-4 bg-gray-50 dark:bg-zinc-800/70 rounded-lg p-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white">
              <ArrowRightIcon className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-medium dark:text-white">Up next</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Autoplay related projects
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              if (relatedVideos.length > 0) {
                // Use normalized ID for consistent routing
                const nextVideoId = normalizeProjectId(relatedVideos[0].id);
                router.push(`/video/${nextVideoId}`);
              }
            }}
            className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-medium"
          >
            Next
          </button>
        </div>

        {/* Related videos section */}
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4 dark:text-white flex items-center gap-2">
            <span>Related Projects</span>
            {video.category && (
              <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full">
                {video.category}
              </span>
            )}
          </h2>
          <div className="space-y-3">
            {relatedVideos.length > 0 ? (
              relatedVideos.map((relatedVideo) => (
                <VideoCard
                  key={relatedVideo.id}
                  video={relatedVideo}
                  layout="horizontal"
                />
              ))
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                No related projects found.
              </p>
            )}
          </div>
        </div>

        {/* Trending videos section */}
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4 dark:text-white flex items-center gap-2">
            <FireIcon className="h-5 w-5 text-red-500" />
            <span>Trending Projects</span>
          </h2>
          <div className="space-y-3">
            {trendingVideos.map((trendingVideo) => (
              <VideoCard
                key={trendingVideo.id}
                video={trendingVideo}
                layout="horizontal"
              />
            ))}
          </div>
        </div>

        {/* Developer professional info */}
        <div className="bg-gray-50 dark:bg-zinc-800/70 rounded-lg p-4 mb-6">
          <h2 className="text-lg font-medium mb-3 dark:text-white flex items-center gap-2">
            <AcademicCapIcon className="h-5 w-5 text-blue-500" />
            <span>About the Developer</span>
          </h2>
          <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <p>Srujan Chidarla is a Full-Stack Developer with expertise in:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>JavaScript (ES6+), Java, ReactJS, AngularJS</li>
              <li>Node.js, Spring Boot, Express.js, NextJs</li>
              <li>MongoDB, MySQL, AWS (EC2, Lambda, S3)</li>
              <li>Docker, Kubernetes, UI/UX, Responsive Design</li>
            </ul>
            <p className="mt-2">
              Currently pursuing a Master&apos;s in Computer Science at
              University of Fairfax with a GPA of 4.0/4.0.
            </p>
            <div className="mt-3">
              <a
                href="/channel"
                className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Full Profile
              </a>
            </div>
          </div>
        </div>

        {/* Suggested videos section */}
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4 dark:text-white">
            You might also like
          </h2>
          <div className="space-y-3">
            {suggestedVideos.map((suggestedVideo) => (
              <VideoCard
                key={suggestedVideo.id}
                video={suggestedVideo}
                layout="horizontal"
              />
            ))}
          </div>
        </div>

        {/* Scroll to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-gray-800 dark:bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUpCircleIcon className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoPage;
