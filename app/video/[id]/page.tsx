// app/video/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import VideoPlayer from "../../../components/sections/VideoPlayer";
import VideoCard from "../../../components/ui/VideoCard";
import Comments from "../../../components/sections/Comments";
import VideoPlayerContent from "../../../components/ui/VideoPlayerContent";
import ProjectContentProvider from "../../../components/projects/ProjectContentProvider";
import { videos } from "../../../data/videos";
import { projectVideos } from "../../../data/projectVideos";
import {
  ArrowRightIcon,
  FireIcon,
  AcademicCapIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/24/outline";
import { Video } from "../../../types";

export default function VideoPage() {
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

  // Handle 404 cases - this useEffect must be called unconditionally
  useEffect(() => {
    if (!isLoading && !video && videoId) {
      router.push("/404"); // Use router.push instead of window.location
    }
  }, [isLoading, video, videoId, router]);

  // Load video data
  useEffect(() => {
    if (!videoId) return;

    setIsLoading(true);

    // This function helps us find a video regardless of numeric or string id format
    const findVideoById = (searchId: string) => {
      // First check projectVideos (string IDs like 'weatherwise')
      const projectVideo = projectVideos.find((v) => v.id === searchId);
      if (projectVideo) return projectVideo;

      // Then check videos (numeric IDs like '1')
      const regularVideo = videos.find((v) => v.id === searchId);
      if (regularVideo) return regularVideo;

      // If not found directly, try mapping numeric IDs to project names
      const idMap: { [key: string]: string } = {
        "1": "weatherwise",
        "2": "jobfinder",
        "3": "pixelpeek",
        "4": "truescreenshot",
        "5": "agile-retro",
        "6": "ecommerce",
        "7": "make-receipt",
        "8": "todo",
      };

      // If it's a numeric ID that maps to a project name, try finding that project
      if (idMap[searchId]) {
        return projectVideos.find((v) => v.id === idMap[searchId]);
      }

      return null;
    };

    // Find the video by ID using our helper function
    const foundVideo = findVideoById(videoId);

    if (foundVideo) {
      setVideo(foundVideo);

      // Get all videos for related/suggested videos
      const allVideos = [...videos, ...projectVideos];

      // Track video view
      console.log(`Viewing project: ${foundVideo.title}`);

      // Get related videos (same category, excluding current video)
      const related = allVideos
        .filter((v) => {
          // Make sure we're not including duplicates or the current video
          if (v.id === videoId || v.id === foundVideo.id) return false;

          // Only include videos with the same category
          return v.category === foundVideo.category;
        })
        .slice(0, 3);

      // Get suggested videos (different category but similar tech stack)
      const suggested = allVideos
        .filter((v) => {
          // Make sure we're not including duplicates or the current video
          if (v.id === videoId || v.id === foundVideo.id) return false;

          // Only include videos from different categories but with similar tech
          return (
            v.category !== foundVideo.category &&
            v.techStack?.some((tech) => foundVideo.techStack?.includes(tech))
          );
        })
        .slice(0, 2);

      // Get trending videos (most views, excluding current)
      const trending = allVideos
        .filter((v) => v.id !== videoId && v.id !== foundVideo.id)
        .sort((a, b) => (b.views || 0) - (a.views || 0))
        .slice(0, 3);

      setRelatedVideos(related);
      setSuggestedVideos(suggested);
      setTrendingVideos(trending);

      // Scroll to top when changing videos
      window.scrollTo(0, 0);
    }

    setIsLoading(false);
  }, [videoId]);

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

  // Check if this is a project video that should use our content viewer
  // We use the projectVideos array to determine this
  const isProjectVideo = projectVideos.some((v) => v.id === video.id);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 md:p-6">
      {/* Main content */}
      <div className="w-full lg:w-2/3">
        {isProjectVideo ? (
          // Use our custom content player for project videos
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
              extendedContent={<ProjectContentProvider projectId={video.id} />}
            />
          </div>
        ) : (
          // Use regular video player for normal videos
          <VideoPlayer video={video} />
        )}
        <Comments videoId={videoId} />
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
                router.push(`/video/${relatedVideos[0].id}`);
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
}
