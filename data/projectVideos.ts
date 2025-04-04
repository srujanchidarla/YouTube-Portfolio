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
  {
    id: "pixelpeek",
    title: "PixelPeek: Chrome Extension for Media Dimension Analysis",
    description: `PixelPeek is an open-source Chrome extension designed to measure the pixel dimensions of images, videos, and other media elements on any webpage. It offers a lightweight, easy-to-use interface for web developers, designers, and anyone who needs to inspect the size of media content.

The extension provides instant, accurate measurements by simply hovering over elements, making it an essential tool for front-end development and design work.`,
    views: 1400,
    createdAt: "2023-04-05T08:15:00Z",
    channelName: "Srujan Chidarla",
    subscribers: 1245,
    projectUrl: "https://github.com/srujanchidarla/pixelpeek",
    category: "Browser Extension",
    techStack: ["JavaScript", "HTML5", "CSS3", "Chrome Extensions API"],
    likes: 156,
    features: [
      "Real-time pixel dimensions display",
      "Works with images, videos, iframes, and more",
      "Dynamic content observation",
      "Privacy-focused local processing",
      "Zero performance impact",
    ],
    challenges: [
      "Detecting dynamically loaded content",
      "Creating non-intrusive visual UI",
      "Ensuring cross-site compatibility",
      "Handling scaled and responsive elements",
      "Maintaining extension performance",
    ],
    implementation: `Technical Implementation:
• Core functionality built with vanilla JavaScript
• Chrome Extensions API for browser integration
• MutationObserver for tracking dynamic content changes
• Event delegation pattern for efficient event handling
• CSS-in-JS for isolated styling

Development Approach:
1. Privacy-First Design: All operations occur locally
2. Performance Optimization: Minimal DOM manipulation
3. Event Throttling: Prevents performance bottlenecks`,
    conclusion: `PixelPeek demonstrates that focused, purpose-built tools can significantly improve workflow efficiency. By addressing a specific pain point for developers and designers, this extension streamlines the process of measuring and implementing precise designs.

Future Roadmap:
• Color sampling capabilities
• Spacing measurement between elements
• Design system integration options`,
    realTimeUseCases: [
      "UI/UX designers verifying implementations",
      "Frontend developers implementing pixel-perfect designs",
      "Content creators preparing media for specific platforms",
      "Design teams collaborating on specifications",
      "Digital accessibility specialists verifying element sizes",
    ],
  },
  {
    id: "truescreenshot",
    title: "TrueScreenshot: VS Code Extension for Accurate Code Screenshots",
    description: `TrueScreenshot is a VS Code extension that captures exact visual replicas of your code as you see it in the editor, including all syntax highlighting, error indicators, and editor decorations.

Unlike standard code screenshot tools that only capture plain text with basic styling, TrueScreenshot preserves the complete visual state of your code editor - perfect for documentation, troubleshooting, and sharing code examples with team members.`,
    views: 1400,
    createdAt: "2022-04-15T09:25:00Z",
    channelName: "Srujan Chidarla",
    subscribers: 1245,
    projectUrl:
      "https://marketplace.visualstudio.com/items?itemName=srujanchidarla.truescreenshot",
    category: "Developer Tools",
    techStack: [
      "TypeScript",
      "VS Code API",
      "HTML Canvas",
      "Node.js",
      "Webpack",
    ],
    likes: 124,
    features: [
      "Captures true visual representation including error underlines and warnings",
      "Supports long screenshots for extensive code selections",
      "High-resolution output for clear documentation",
      "Preserves theme colors and styling",
      "Easy sharing options",
    ],
    challenges: [
      "Accessing editor rendering information",
      "Converting editor elements to canvas",
      "Handling various VS Code themes",
      "Supporting different screen resolutions",
      "Optimizing performance for large files",
    ],
    implementation: `Technical Implementation:
• VS Code Extension API for editor integration
• Custom rendering pipeline for accurate visual replication
• Canvas-based drawing for high-quality output
• Theme detection and color mapping
• Screenshot optimization algorithms

Development Process:
1. Editor State Analysis: Deep integration with VS Code rendering
2. Canvas Rendering: Pixel-perfect recreation of editor state
3. Theme Compatibility: Support for all VS Code themes`,
    conclusion: `TrueScreenshot fills an important gap in developer tools by providing accurate visual representation of code for documentation and communication. It demonstrates how extending existing tools can significantly improve developer workflows.

Future Roadmap:
• Automatic code snippet generation
• Integration with documentation platforms
• Custom branding and templates`,
    realTimeUseCases: [
      "Creating technical documentation",
      "Reporting bugs with visual context",
      "Sharing code examples in presentations",
      "Educational content creation",
      "Technical blog writing",
    ],
  },
  {
    id: "agile-retro",
    title: "Agile Retrospective Tool: Team Collaboration Platform",
    description: `An Agile Retrospective Tool designed for development teams to conduct effective sprint retrospectives. This web-based platform facilitates structured feedback collection, discussion, and action item tracking to continuously improve team performance.

The tool provides customizable templates for different retrospective formats, real-time collaboration features, and integration with popular project management systems.`,
    views: 1800,
    createdAt: "2021-05-20T14:30:00Z",
    channelName: "Srujan Chidarla",
    subscribers: 1245,
    projectUrl: "https://github.com/srujanchidarla/agile-retro",
    category: "Project Management",
    techStack: [
      "Angular",
      "Spring Boot",
      "WebSockets",
      "Azure DevOps API",
      "MongoDB",
      "Docker",
      "AWS",
    ],
    likes: 178,
    features: [
      "Real-time collaboration board",
      "Multiple retrospective templates",
      "Action item tracking with assignments",
      "Azure DevOps integration",
      "Anonymous feedback option",
      "Meeting timer and facilitator tools",
    ],
    challenges: [
      "Implementing real-time updates across clients",
      "Creating intuitive UI for diverse retrospective formats",
      "Securing sensitive team feedback",
      "Integrating with external project management tools",
      "Supporting concurrent editing without conflicts",
    ],
    implementation: `Technical Architecture:
• Angular frontend with responsive design
• Spring Boot microservices backend
• WebSockets for real-time collaboration
• MongoDB for flexible document storage
• Azure DevOps API integration for work item synchronization
• Containerized deployment on AWS

Key Implementation Decisions:
1. Event-Driven Architecture: Ensures real-time updates
2. Microservices Design: Allows for scalability and modularity
3. Comprehensive Security Model: Protects sensitive team feedback`,
    conclusion: `The Agile Retrospective Tool demonstrates how purpose-built software can enhance team processes and communication. By providing a dedicated space for retrospectives, teams can more effectively identify improvements and track their implementation.

Future Plans:
• Enhanced analytics for retrospective trends
• Additional integrations with JIRA, GitHub, and other tools
• AI-assisted retrospective facilitation`,
    realTimeUseCases: [
      "Scrum teams conducting sprint retrospectives",
      "Agile coaches facilitating team improvement",
      "Remote development teams collaborating across time zones",
      "Product organizations tracking improvement initiatives",
      "Agile transformation programs measuring team progress",
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform: Full-Featured Shopping Application",
    description: `A comprehensive e-commerce solution built using the MERN stack (MongoDB, Express, React, Node.js). This platform provides end-to-end functionality for online retail, including product management, shopping cart, secure checkout, and admin dashboard.

Designed with scalability in mind, the system supports both small businesses and growing enterprises with a flexible architecture and customizable features.`,
    views: 2100,
    createdAt: "2021-01-10T11:20:00Z",
    channelName: "Srujan Chidarla",
    subscribers: 1245,
    projectUrl: "https://github.com/srujanchidarla/ecommerce-platform",
    category: "Web Development",
    techStack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Redux",
      "PayPal API",
      "JWT",
      "AWS S3",
    ],
    likes: 215,
    features: [
      "Product catalog with categories and search",
      "User authentication and profiles",
      "Shopping cart and wishlist functionality",
      "Secure payment processing via PayPal",
      "Order management and tracking",
      "Admin dashboard for inventory and order management",
      "Product reviews and ratings",
    ],
    challenges: [
      "Implementing secure payment processing",
      "Designing efficient product search and filtering",
      "Managing cart persistence across sessions",
      "Creating responsive design for all devices",
      "Optimizing database queries for performance",
      "Handling image uploads and storage",
    ],
    implementation: `Technical Architecture:
• MongoDB for flexible product and order data storage
• Express.js backend with RESTful API design
• React frontend with Redux for state management
• Node.js server environment
• JWT authentication for security
• PayPal API integration for payments
• AWS S3 for product image storage

Development Approach:
1. Modular Component Design: Reusable UI components
2. API-First Development: Clear separation of concerns
3. Responsive Mobile-First Design: Consistent experience across devices`,
    conclusion: `This e-commerce platform demonstrates the power of the MERN stack for building complex, scalable web applications. By focusing on core e-commerce functionality while maintaining flexibility, the system provides a solid foundation for various online retail businesses.

Future Enhancements:
• Multi-vendor marketplace support
• AI-powered product recommendations
• Enhanced analytics dashboard
• Subscription-based product options`,
    realTimeUseCases: [
      "Small businesses launching online stores",
      "Artisan collectives selling handcrafted products",
      "Specialty retailers with niche products",
      "Direct-to-consumer brands",
      "Content creators selling merchandise",
    ],
  },
  {
    id: "make-receipt",
    title: "Make a Receipt: Mobile App for Digital Receipt Management",
    description: `Make a Receipt is a React Native mobile application that allows users to create, store, and manage digital receipts. The app simplifies expense tracking for individuals and small businesses by providing an intuitive interface for receipt generation and organization.

With built-in templates, custom fields, and cloud synchronization, users can maintain accurate financial records without the hassle of paper receipts.`,
    views: 980,
    createdAt: "2020-05-18T15:45:00Z",
    channelName: "Srujan Chidarla",
    subscribers: 1245,
    projectUrl: "https://github.com/srujanchidarla/make-receipt",
    category: "Mobile Apps",
    techStack: [
      "React Native",
      "Firebase",
      "Redux",
      "Cloud Firestore",
      "Firebase Auth",
      "Expo",
    ],
    likes: 87,
    features: [
      "Digital receipt creation with customizable templates",
      "Receipt scanning and data extraction",
      "Expense categorization and tagging",
      "Cloud synchronization across devices",
      "Export to PDF and CSV formats",
      "Receipt sharing via email and messaging",
      "Budget tracking and reporting",
    ],
    challenges: [
      "Implementing OCR for receipt scanning",
      "Creating intuitive mobile UI for complex forms",
      "Ensuring data security for financial information",
      "Optimizing offline functionality",
      "Handling cross-platform differences",
      "Managing cloud synchronization conflicts",
    ],
    implementation: `Technical Architecture:
• React Native for cross-platform mobile development
• Firebase for backend services and authentication
• Cloud Firestore for scalable NoSQL database
• Firebase Storage for receipt images
• Redux for state management
• Expo for simplified development and deployment

Key Implementation Details:
1. Offline-First Architecture: Full functionality without connectivity
2. Progressive Enhancement: Advanced features load conditionally
3. Secure Data Model: End-to-end encryption for sensitive information`,
    conclusion: `Make a Receipt demonstrates the power of modern mobile development frameworks for creating practical solutions to everyday problems. By digitizing receipt management, the app helps users save time, reduce paper waste, and maintain better financial records.

Future Roadmap:
• Advanced reporting and analytics
• Expense reimbursement workflow
• Accounting software integration
• Business-specific customizations`,
    realTimeUseCases: [
      "Freelancers tracking business expenses",
      "Small business owners managing receipts",
      "Individuals monitoring personal spending",
      "Business travelers tracking reimbursable expenses",
      "Roommates splitting shared expenses",
    ],
  },
  {
    id: "todo",
    title: "Interactive To-Do List: Task Management Application",
    description: `A minimalistic yet powerful task management app designed to help users stay organized with ease. This application focuses on simplicity and usability while providing essential features for effective task management.

Built with vanilla JavaScript, HTML5, and CSS3, the Interactive To-Do List demonstrates how powerful functionality can be achieved without complex frameworks or dependencies.`,
    views: 850,
    createdAt: "2020-01-25T09:30:00Z",
    channelName: "Srujan Chidarla",
    subscribers: 1245,
    projectUrl: "https://github.com/srujanchidarla/interactive-todo",
    category: "Web Development",
    techStack: ["HTML5", "CSS3", "JavaScript", "LocalStorage API"],
    likes: 76,
    features: [
      "Task creation with due dates",
      "Priority levels (Low, Medium, High)",
      "Task completion tracking",
      "Filtering and sorting options",
      "Persistent storage using localStorage",
      "Responsive design for all devices",
      "Keyboard shortcuts for power users",
    ],
    challenges: [
      "Creating an intuitive UI without frameworks",
      "Implementing data persistence without a backend",
      "Managing complex state with vanilla JavaScript",
      "Ensuring cross-browser compatibility",
      "Designing accessible interactive elements",
    ],
    implementation: `Technical Approach:
• HTML5 semantic markup for accessibility
• CSS3 with Flexbox and Grid for responsive layout
• Vanilla JavaScript with module pattern
• LocalStorage API for data persistence
• Event delegation for efficient event handling
• Custom drag-and-drop implementation

Development Decisions:
1. Framework-Free Approach: Demonstrating core web technologies
2. Progressive Enhancement: Core functionality works in all browsers
3. Mobile-First Design: Responsive from the ground up`,
    conclusion: `The Interactive To-Do List shows that effective productivity tools don't need to be complex. By focusing on core functionality and user experience, this application delivers a streamlined task management solution that's accessible to everyone.

Future Enhancements:
• Task categories and tags
• Recurring task support
• Optional cloud synchronization
• Data export and import options`,
    realTimeUseCases: [
      "Students managing assignments and deadlines",
      "Professionals organizing daily work tasks",
      "Households coordinating chores and responsibilities",
      "Event planners tracking preparation tasks",
      "Personal goal tracking and habit formation",
    ],
  },
];

export default projectVideos;
