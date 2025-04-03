// app/video/[id]/page.tsx
import { notFound } from "next/navigation";
import VideoPlayer from "../../../components/sections/VideoPlayer";
import VideoCard from "../../../components/ui/VideoCard";
import projectVideos from "../../../data/projectVideos";

// Generate static params for all videos
export async function generateStaticParams() {
  return projectVideos.map((video) => ({
    id: video.id,
  }));
}

// Metadata generation
export async function generateMetadata({ params }: { params: { id: string } }) {
  const video = projectVideos.find((v) => v.id === params.id);

  return {
    title: video ? video.title : "Project Video",
    description: video?.description || "Project details",
  };
}

export default function VideoPage({ params }: { params: { id: string } }) {
  // Find the video by ID
  const video = projectVideos.find((v) => v.id === params.id);

  // Return 404 if video not found
  if (!video) {
    notFound();
  }

  // Get related videos (same category or similar tech stack)
  const relatedVideos = projectVideos
    .filter(
      (v) =>
        v.id !== video.id &&
        (v.category === video.category ||
          (v.techStack &&
            video.techStack &&
            v.techStack.some((tech) => video.techStack.includes(tech))))
    )
    .slice(0, 5);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 md:p-6">
      {/* Main Video Content */}
      <div className="w-full lg:w-2/3">
        <VideoPlayer video={video} />

        {/* Detailed Project Information */}
        <div className="mt-6 space-y-6 bg-gray-50 p-4 rounded-lg">
          {/* Project Description */}
          {video.description && (
            <div>
              <h2 className="text-xl font-bold mb-3">Project Overview</h2>
              <p className="text-gray-700 whitespace-pre-line">
                {video.description}
              </p>
            </div>
          )}

          {/* Key Features */}
          {video.features && video.features.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {video.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Development Challenges */}
          {video.challenges && video.challenges.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Development Challenges
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {video.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Implementation Details */}
          {video.implementation && (
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Technical Implementation
              </h3>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm text-gray-800 overflow-x-auto whitespace-pre-wrap">
                {video.implementation}
              </pre>
            </div>
          )}

          {/* Real-Time Use Cases */}
          {video.realTimeUseCases && video.realTimeUseCases.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Real-World Applications
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {video.realTimeUseCases.map((useCase, index) => (
                  <li key={index}>{useCase}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Conclusion */}
          {video.conclusion && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Project Conclusion</h3>
              <p className="text-gray-700 whitespace-pre-line">
                {video.conclusion}
              </p>
            </div>
          )}

          {/* Tech Stack */}
          {video.techStack && video.techStack.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {video.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Videos Sidebar */}
      <div className="w-full lg:w-1/3">
        <h2 className="text-lg font-semibold mb-4">Related Projects</h2>
        <div className="space-y-4">
          {relatedVideos.map((relatedVideo) => (
            <VideoCard key={relatedVideo.id} video={relatedVideo} />
          ))}
        </div>
      </div>
    </div>
  );
}
