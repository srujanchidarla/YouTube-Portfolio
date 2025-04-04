// components/projects/ProjectContentProvider.tsx
import React from "react";
import WeatherWiseContent from "./WeatherWiseContent";
import JobFinderContent from "./JobFinderContent";
import PixelPeekContent from "./PixelPeekContent";
import ECommerceContent from "./ECommerceContent";
import TodoContent from "./TodoContent";
import TrueScreenshotContent from "./TrueScreenshotContent";
import AgileRetroContent from "./AgileRetroContent";
import MakeReceiptContent from "./MakeReceiptContent";

interface ProjectContentProviderProps {
  projectId: string;
}

const ProjectContentProvider: React.FC<ProjectContentProviderProps> = ({
  projectId,
}) => {
  // Map project IDs to their respective content components
  const getProjectContent = () => {
    switch (projectId.toLowerCase()) {
      case "weatherwise":
        return <WeatherWiseContent />;
      case "jobfinder":
        return <JobFinderContent />;
      case "pixelpeek":
        return <PixelPeekContent />;
      case "ecommerce":
        return <ECommerceContent />;
      case "todo":
        return <TodoContent />;
      case "truescreenshot":
        return <TrueScreenshotContent />;
      case "agile-retro":
        return <AgileRetroContent />;
      case "make-receipt":
        return <MakeReceiptContent />;
      default:
        return (
          <div className="p-4 text-center text-gray-500">
            No detailed content available for this project.
          </div>
        );
    }
  };

  return getProjectContent();
};

export default ProjectContentProvider;
