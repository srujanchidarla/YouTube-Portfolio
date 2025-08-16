// data/videos.ts - Updated with multiple categories for each project
import { Video } from "../types";

export const videos: Video[] = [
  // NEW INNOVATIVE PROJECTS (First 5)
  {
    id: "9",
    title: "AgriWise – Complete Digital Agriculture Platform",
    thumbnail: "/thumbnails/agriwise.svg",
    description:
      "A comprehensive digital agriculture ecosystem for Indian farmers covering crop planning, cultivation guidance, market intelligence, and financial services. Features soil analysis, crop recommendations, real-time market prices, and community support.",
    views: 1200,
    likes: 89,
    createdAt: "2024-12-15",
    duration: 320,
    channelName: "Srujan Chidarla",
    channelAvatar: "/profile.svg",
    subscribers: 1650,
    category: ["AgriTech", "Full Stack", "Web Development"], // Multiple categories
    projectUrl: "https://github.com/srujanchidarla/agriwise",
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "TailwindCSS",
      "Google Maps API",
    ],
  },
  {
    id: "10",
    title: "StudyGlobal – International Student Services Platform",
    thumbnail: "/thumbnails/studyglobal.svg",
    description:
      "A comprehensive digital platform supporting international students through their entire academic journey. Features include essential services hub, interactive tools, cost calculators, and community features for seamless student experience abroad.",
    views: 850,
    likes: 67,
    createdAt: "2024-11-20",
    duration: 280,
    channelName: "Srujan Chidarla",
    channelAvatar: "/profile.svg",
    subscribers: 1650,
    category: ["EdTech", "Web Development", "Next.js", "TypeScript"], // Multiple categories
    projectUrl: "https://github.com/srujanchidarla/studyglobal",
    techStack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Contentful",
      "Stripe",
      "AWS S3",
    ],
  },
  {
    id: "11",
    title: "Flight Buddy – Travelers Connection Platform",
    thumbnail: "/thumbnails/flightbuddy.svg",
    description:
      "A platform connecting travelers on long-distance flights before their journey. Features flight matching, traveler profiles, in-app messaging, luggage sharing, and airport guides. Includes AI-powered recommendations and real-time flight tracking for enhanced travel experience.",
    views: 950,
    likes: 78,
    createdAt: "2024-10-10",
    duration: 295,
    channelName: "Srujan Chidarla",
    channelAvatar: "/profile.svg",
    subscribers: 1650,
    category: ["Travel Tech", "Full Stack", "React", "Backend"], // Multiple categories
    projectUrl: "https://github.com/srujanchidarla/flightbuddy",
    techStack: [
      "React",
      "Spring Boot",
      "PostgreSQL",
      "Flight APIs",
      "WebSocket",
      "Docker",
    ],
  },
  {
    id: "12",
    title: "Sports & Fitness Platform – FitConnect + TrainHub",
    thumbnail: "/thumbnails/sportsplatform.svg",
    description:
      "A dual-platform ecosystem combining FitConnect (sports venue booking) and TrainHub (fitness trainer discovery). Features venue search, trainer matching, booking systems, community features, and comprehensive fitness tools for active lifestyles.",
    views: 1100,
    likes: 92,
    createdAt: "2024-09-15",
    duration: 340,
    channelName: "Srujan Chidarla",
    channelAvatar: "/profile.svg",
    subscribers: 1650,
    category: ["Sports Tech", "Full Stack", "Web Development", "Next.js"], // Multiple categories
    projectUrl: "https://github.com/srujanchidarla/sportsplatform",
    techStack: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Google Maps",
      "Stripe",
    ],
  },
  {
    id: "13",
    title: "Health Records Management System",
    thumbnail: "/thumbnails/healthrecords.svg",
    description:
      "End-to-end health records management system tracking patients from birth through their entire healthcare journey. Features secure document storage, prescription management, appointment reminders, and analytics with HIPAA compliance for comprehensive patient care.",
    views: 750,
    likes: 64,
    createdAt: "2024-08-25",
    duration: 305,
    channelName: "Srujan Chidarla",
    channelAvatar: "/profile.svg",
    subscribers: 1650,
    category: ["HealthTech", "Full Stack", "TypeScript", "Next.js"], // Multiple categories
    projectUrl: "https://github.com/srujanchidarla/healthrecords",
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "AWS",
      "HIPAA Compliance",
    ],
  },

  // EXISTING PROJECTS (Last 8) - Updated with multiple categories
  {
    id: "1",
    title: "WeatherWise – Real-Time Global Weather Tracking Application",
    thumbnail: "/thumbnails/weatherwise.svg",
    description:
      "A comprehensive weather tracking app that provides users with current weather information and 5-day forecasts for cities worldwide. It combines data visualization with geolocation features for a rich, interactive experience.\n\nKey Features:\n- Real-Time Weather and Forecast with data including temperature, humidity, wind speed, and weather conditions\n- Interactive Map built with Leaflet.js showing weather data for major cities\n- Geolocation-Based Weather automatically detecting the user's location\n- Search Functionality for any city to view current weather data\n\nTechnologies Used: ReactJS, Java Spring Boot, Leaflet.js, OpenWeatherMap API, and Axios.",
    views: 2450,
    likes: 178,
    createdAt: "2023-11-15",
    duration: 285,
    channelName: "Srujan Chidarla",
    channelAvatar: "/profile.svg",
    subscribers: 1650,
    category: ["Web Development", "Full Stack", "React"], // Multiple categories
    projectUrl: "https://github.com/srujanchidarla/weatherwise",
    techStack: [
      "ReactJS",
      "Java Spring Boot",
      "Leaflet.js",
      "OpenWeatherMap API",
      "Axios",
    ],
  },
  {
    id: "2",
    title: "JobFinder – Job Search and Application Platform",
    thumbnail: "/thumbnails/jobfinder.svg",
    description:
      'JobFinder is a dynamic job search platform that simplifies the job-hunting process for users. Built with a focus on responsiveness and user-friendly design, it offers a seamless experience across devices.\n\nKey Features:\n- Category-Based Filtering by industry, role, or location\n- Real-Time Job Listings integrated with the Adzuna API\n- Direct Application Links with "Apply Here" buttons\n- Show More/Less Toggle for job descriptions\n\nTechnologies Used: React, TailwindCSS, Adzuna API, React Router, and Vercel for deployment. The platform delivers an intuitive job search experience, empowering users to explore various roles effortlessly.',
    views: 1890,
    likes: 145,
    createdAt: "2023-09-20",
    duration: 240,
    channelName: "Srujan Chidarla",
    channelAvatar: "/profile.svg",
    subscribers: 1650,
    category: ["Web Development", "React", "Frontend"], // Multiple categories
    projectUrl: "https://github.com/srujanchidarla/jobfinder",
    techStack: ["React", "TailwindCSS", "Adzuna API", "React Router", "Vercel"],
  },
  {
    id: "3",
    title: "PixelPeek – Chrome Extension for Media Dimension Analysis",
    thumbnail: "/thumbnails/pixelpeek.svg",
    description:
      "PixelPeek is an open-source Chrome extension tailored for developers, designers, and web enthusiasts, allowing them to measure media dimensions on any webpage instantly.\n\nKey Features:\n- Real-Time Pixel Dimensions by hovering over images, videos, or iframes\n- Privacy-Focused with all operations occurring locally in the browser\n- Continuous Content Observation monitoring dynamic content changes\n\nTechnologies Used: JavaScript, Chrome Extensions API, HTML5, and CSS3. PixelPeek streamlines media analysis, making it a valuable tool for professionals who need precise media measurements without compromising security.",
    views: 3200,
    likes: 267,
    createdAt: "2023-08-10",
    duration: 210,
    channelName: "Srujan Chidarla",
    channelAvatar: "/profile.svg",
    subscribers: 1650,
    category: ["Browser Extensions", "Developer Tools", "JavaScript"], // Multiple categories
    projectUrl: "https://github.com/srujanchidarla/pixelpeek",
    techStack: ["JavaScript", "Chrome Extensions API", "HTML5", "CSS3"],
  },
  {
    id: "4",
    title: "TrueScreenshot – VS Code Extension for Accurate Code Screenshots",
    thumbnail: "/thumbnails/truescreenshot.svg",
    description:
      "TrueScreenshot is a VS Code extension that captures exact visual replicas of your code as you see it in the editor, including all syntax highlighting, error indicators, and editor decorations.\n\nKey Features:\n- Captures true visual representation including error underlines and warnings\n- Supports long screenshots for extensive code selections\n- High-resolution output for clear documentation\n- Preserves your theme colors and styling\n\nTechnologies Used: TypeScript, VS Code Extension API, HTML Canvas, and Node.js. Unlike standard code screenshot tools that only capture plain text with basic styling, TrueScreenshot preserves the complete visual state of your code editor - perfect for documentation, troubleshooting, and sharing code examples with team members.",
    views: 1450,
    likes: 203,
    createdAt: "2024-02-15",
    duration: 195,
    channelName: "Srujan Chidarla",
    channelAvatar: "/profile.svg",
    subscribers: 1650,
    category: ["Developer Tools", "TypeScript"], // Multiple categories
    projectUrl:
      "https://marketplace.visualstudio.com/items?itemName=srujanchidarla.truescreenshot",
    techStack: [
      "TypeScript",
      "VS Code Extension API",
      "HTML Canvas",
      "Node.js",
    ],
  },
  {
    id: "5",
    title: "Agile Retrospective Tool – Team Collaboration Platform",
    thumbnail: "/thumbnails/agiletool.svg",
    description:
      "An internal Agile Retro Tool developed during my time at Cognizant, using AngularJS and Java Spring Boot to streamline project management and team collaboration.\n\nKey Features:\n- Integration with Azure DevOps APIs for fetching scrum details\n- Real-time updates on user stories, backlog, and tasks\n- Seamless sprint tracking across Azure and the internal Agile tool\n- Responsive design with reusable components\n\nTechnologies Used: AngularJS, Java Spring Boot, Azure DevOps APIs, AWS, and MVC architecture. The tool improved UI/UX with responsive design and structured folder organization for better maintainability, while optimized SPA routing and service-based API integrations reduced page load times by 30%.",
    views: 1750,
    likes: 128,
    createdAt: "2023-06-05",
    duration: 320,
    channelName: "Srujan Chidarla",
    channelAvatar: "/profile.svg",
    subscribers: 1650,
    category: ["Project Management", "Full Stack", "Angular"], // Multiple categories
    projectUrl: "https://github.com/srujanchidarla/agile-retro-tool",
    techStack: [
      "AngularJS",
      "Java Spring Boot",
      "Azure DevOps APIs",
      "AWS",
      "MVC Architecture",
    ],
  },
  {
    id: "6",
    title: "E-Commerce Platform – Full-Featured Shopping Application",
    thumbnail: "/thumbnails/ecommerce.svg",
    description:
      "A custom e-commerce platform built using the MERN stack during my training period at Cognizant. This project includes essential e-commerce functionalities, providing users with a seamless shopping experience.\n\nKey Features:\n- Shopping Cart for adding products and viewing them at checkout\n- Secure Payments integrated with PayPal for transactions\n- Admin Dashboard for managing products, orders, and customers\n- Product Reviews and Ratings system\n- Search and Filtering with carousel displays and pagination\n\nTechnologies Used: MongoDB, Express, React, Node.js, Redux, and PayPal API. This project demonstrates full-stack e-commerce capabilities, providing a robust and scalable shopping platform.",
    views: 2150,
    likes: 156,
    createdAt: "2022-02-10",
    duration: 270,
    channelName: "Srujan Chidarla",
    channelAvatar: "/profile.svg",
    subscribers: 1650,
    category: ["Full Stack", "Web Development", "React"], // Multiple categories
    projectUrl: "https://github.com/srujanchidarla/ecommerce-platform",
    techStack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Redux",
      "PayPal API",
    ],
  },
  {
    id: "7",
    title: "Make a Receipt – Mobile App for Digital Receipt Management",
    thumbnail: "/thumbnails/makereceipt.svg",
    description:
      "Contributed to the development of the Make a Receipt app during my internship at Tarushi Software Solutions, focusing on enhancing user experience and convenience for businesses and customers.\n\nKey Features:\n- Cross-platform functionality for Android and iOS devices\n- Real-time data storage with Firebase integration\n- Secure management of user-generated receipts\n- Scalable features supporting 5,000+ users\n\nTechnologies Used: React Native, Firebase, JavaScript, and UI/UX design principles. The app was designed to ensure seamless performance across different mobile platforms, making digital receipt management more accessible and efficient.",
    views: 980,
    likes: 87,
    createdAt: "2020-04-15",
    duration: 185,
    channelName: "Srujan Chidarla",
    channelAvatar: "/profile.svg",
    subscribers: 1650,
    category: ["Mobile Apps", "Full Stack"], // Multiple categories
    projectUrl: "https://github.com/srujanchidarla/make-a-receipt",
    techStack: ["React Native", "Firebase", "JavaScript", "Mobile UI/UX"],
  },
  {
    id: "8",
    title: "Interactive To-Do List – Task Management Application",
    thumbnail: "/thumbnails/todolist.svg",
    description:
      "A minimalistic yet powerful task management app designed to help users stay organized with ease.\n\nKey Features:\n- Task Addition and Deletion with specific names, due dates, and priority levels\n- Mark as Completed functionality\n- Priority Levels (Low, Medium, High) for task categorization\n- Responsive Design for mobile and desktop devices\n\nTechnologies Used: HTML, CSS, and JavaScript. The Interactive To-Do List provides a simple yet effective way to manage daily tasks, ideal for personal organization and productivity.",
    views: 850,
    likes: 75,
    createdAt: "2021-09-05",
    duration: 150,
    channelName: "Srujan Chidarla",
    channelAvatar: "/profile.svg",
    subscribers: 1650,
    category: ["Web Development", "JavaScript", "Frontend"], // Multiple categories
    projectUrl: "https://github.com/srujanchidarla/interactive-todo",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
];
