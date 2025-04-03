// data/projectVideos.ts
import { Video } from "../types";

export const projectVideos: Video[] = [
  {
    id: "weatherwise",
    title: "WeatherWise: Revolutionizing Real-Time Weather Tracking",
    description: `Dive into WeatherWise, a cutting-edge weather tracking application that transforms how we interact with meteorological data. This project goes beyond traditional weather apps by providing an immersive, interactive experience that puts real-time global weather information at your fingertips.

Project Motivation:
In an era of increasing climate variability, access to accurate, real-time weather information is more crucial than ever. WeatherWise was conceived to bridge the gap between complex meteorological data and user-friendly visualization.`,
    views: 5623,
    createdAt: "2023-09-15T10:30:00Z",
    channelName: "Srujan Chidarla",
    subscribers: 1245,
    projectUrl: "https://github.com/srujanchidarla/weatherwise",
    category: "Web Application",
    techStack: [
      "ReactJS",
      "Java Spring Boot",
      "Leaflet.js",
      "OpenWeatherMap API",
      "Axios",
      "Docker",
      "AWS",
    ],
    likes: 342,
    features: [
      "Real-Time Weather and Forecast",
      "Interactive Geolocation Mapping",
      "Multiple Weather Data Sources",
      "Custom Weather Alert System",
      "Mobile-Responsive Design",
    ],
    challenges: [
      "Integrating Multiple Weather APIs",
      "Ensuring Accurate Geolocation",
      "Optimizing Performance with Large Datasets",
      "Implementing Real-Time Updates",
      "Creating Intuitive UI for Complex Data",
    ],
    implementation: `Technical Architecture:
• Frontend developed using React for dynamic, responsive UI
• Backend powered by Java Spring Boot with RESTful APIs
• Leaflet.js integrated for interactive geographical visualization
• OpenWeatherMap API for comprehensive weather data
• Implemented caching strategies to optimize performance

Key Technical Decisions:
1. Microservices Architecture: Enabled independent scaling and improved system resilience
2. Real-Time Data Processing: WebSocket integration for live updates
3. Comprehensive Error Handling: Robust mechanisms for API failures and data inconsistencies`,
    conclusion: `WeatherWise represents more than just a weather tracking application. It's a testament to how thoughtful design and advanced technologies can transform complex data into an intuitive, user-friendly experience.

Future Roadmap:
• AI-Powered Predictive Modeling
• Extended Climate Change Visualization
• Enhanced Machine Learning Forecasting`,
    realTimeUseCases: [
      "Travelers planning international trips",
      "Agricultural professionals monitoring crop conditions",
      "Emergency response teams tracking severe weather",
      "Outdoor event planners",
      "Climate researchers and environmentalists",
    ],
  },
  {
    id: "jobfinder",
    title: "JobFinder: Revolutionizing Job Search with Smart Technology",
    description: `JobFinder is a next-generation job search platform designed to simplify and enhance the job hunting experience. By leveraging cutting-edge technology and intelligent filtering, we're bridging the gap between talented professionals and innovative employers.

Project Vision:
In today's dynamic job market, finding the right opportunity can be challenging. JobFinder aims to transform this process by providing a seamless, intuitive, and intelligent job search experience.`,
    views: 4782,
    createdAt: "2023-11-20T14:45:00Z",
    channelName: "Srujan Chidarla",
    subscribers: 987,
    projectUrl: "https://github.com/srujanchidarla/jobfinder",
    category: "Web Application",
    techStack: [
      "React",
      "TailwindCSS",
      "Adzuna API",
      "React Router",
      "Redux",
      "Node.js",
      "Express",
      "Vercel",
    ],
    likes: 289,
    features: [
      "Advanced Job Filtering",
      "Real-Time Job Listings",
      "Direct Application Links",
      "Responsive Design",
      "User Profile Management",
    ],
    challenges: [
      "Integrating Multiple Job APIs",
      "Creating Effective Search Algorithms",
      "Maintaining UI/UX Consistency",
      "Handling Dynamic Content",
      "Optimizing Search Relevance",
    ],
    implementation: `Technical Overview:
• Frontend built with React and TailwindCSS for responsive design
• State management implemented using Redux
• Adzuna API integration for comprehensive job listings
• Advanced search and filtering mechanisms
• Deployed on Vercel for optimal performance

Architectural Highlights:
1. Modular Component Design
2. Efficient State Management
3. API Error Handling and Fallback Mechanisms`,
    conclusion: `JobFinder is more than a job search platform – it's a career navigation tool that empowers professionals to find their ideal opportunities with unprecedented ease.

Future Enhancements:
• AI-Powered Job Matching
• Skills Assessment Integration
• Personalized Career Recommendations`,
    realTimeUseCases: [
      "Recent graduates seeking first jobs",
      "Professionals looking for career transitions",
      "Remote work seekers",
      "Tech industry job hunters",
      "International job market explorers",
    ],
  },
  // Add more project videos here
];

export default projectVideos;
