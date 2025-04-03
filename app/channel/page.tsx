// app/channel/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import VideoGrid from "../../components/sections/VideoGrid";
import { videos } from "../../data/videos";
import { categories } from "../../data/Categories";

// For a real app, you would fetch this from an API or database
const channelInfo = {
  name: "Srujan Chidarla",
  avatar: "/profile.jpg",
  banner: "/thumbnails/channel-banner.jpg",
  subscribers: 1650,
  description: `As a Software Engineer, I specialize in transforming complex ideas into intuitive, user-centered digital experiences. Proficient in JavaScript, ReactJS, AngularJS, NodeJS, Java, and Spring Boot, I create tools that enhance team collaboration and drive user engagement. 

At Cognizant, I designed an Agile Retro Tool integrated with Azure DevOps, boosting team alignment, and led a hardware testing automation project that raised efficiency by 15%. 

Beyond my professional roles, I developed JobFinder, a responsive job platform with smart filtering, and PixelPeek, a Chrome extension offering seamless image recognition and media analysis—projects that reflect my dedication to secure, responsive, and meaningful user experiences.

I'm always open to connecting on innovative tech projects that make an impact.`,
  links: [
    { name: "GitHub", url: "https://github.com/srujanchidarla" },
    { name: "LinkedIn", url: "https://linkedin.com/in/srujanchidarla" },
    { name: "Portfolio", url: "https://srujan.tech" },
    { name: "Email", url: "mailto:srujanchidarla99@gmail.com" },
  ],
  joinDate: "Aug 2021",
};

const tabs = [
  { id: "projects", name: "Projects" },
  { id: "about", name: "About" },
  { id: "experience", name: "Experience" },
  { id: "education", name: "Education" },
  { id: "certifications", name: "Certifications" },
  { id: "achievements", name: "Achievements" },
];

// Experience data
const experiences = [
  {
    company: "WalletGyde",
    role: "Full-Stack Web Developer",
    period: "Dec 2024 - Present",
    location: "Denver, USA (Remote)",
    description: [
      "Developing landing pages and main beta website using Next.js, Node.js, and Supabase for a responsive and scalable platform.",
      "Built RESTful APIs for authentication, data management, and third-party integrations, ensuring secure transactions and analytics.",
      "Enhanced UI/UX and landing pages, improving SEO, page speed, and mobile responsiveness for better user engagement.",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Full-Stack Developer",
    period: "Mar 2021 - Apr 2024",
    location: "Hyderabad, India",
    description: [
      "Enhanced the Angular-based frontend of the Agile Retrospective Tool, improving UI/UX with responsive design, reusable components, and structured folder organization for better maintainability.",
      "Optimized SPA routing and service-based API integrations, reducing page load times by 30% and improving application responsiveness.",
      "Developed Spring Boot microservices, following MVC architecture, enabling efficient backend API handling and seamless frontend integration.",
      "Integrated Azure DevOps APIs to fetch scrum details (user stories, backlog, tasks), ensuring seamless sprint tracking across Azure and Cognizant's Agile tool.",
      "Deployed the system on AWS, ensuring scalability, high availability, and secure deployment for optimal performance.",
      "Built a full-featured E-Commerce platform during the training period using MERN stack, including authentication, shopping cart, and order management.",
    ],
  },
  {
    company: "Tarushi Software Solutions",
    role: "Web Development Intern",
    period: "May 2019 - Jul 2020",
    location: "Hyderabad, India",
    description: [
      "Contributed to Make a Receipt app using React Native & Firebase, enhancing digital receipt management.",
      "Built scalable features supporting 5,000+ users for seamless transactions.",
    ],
  },
];

// Education data
const education = [
  {
    institution: "University of Fairfax",
    degree: "Master's in Computer Science",
    period: "Aug 2024 - Aug 2026",
    gpa: "GPA: 4.0/4.0",
    description:
      "Focusing on cloud computing and artificial intelligence, this program enhances my ability to develop innovative solutions for real-world challenges.",
  },
  {
    institution: "VNR Vignana Jyothi Institute of Engineering & Technology",
    degree: "Bachelor of Technology in Information Technology",
    period: "Aug 2018 - Aug 2021",
    gpa: "GPA: 7.63/10",
    description:
      "Developed a strong foundation in full-stack development and algorithms, complemented by active participation in sports and leadership roles.",
  },
  {
    institution: "Abdul Kalam Institute of Technological Sciences",
    degree: "Diploma in Mining and Mineral Engineering",
    period: "Aug 2015 - Jun 2018",
    gpa: "Grade: 92%",
    description:
      "Excelled academically while representing the institution in state-level sports events, showcasing discipline and focus.",
  },
  {
    institution: "Telangana State Residential School",
    degree: "High School",
    period: "Jul 2009 - May 2015",
    gpa: "Grade: 85%",
    description:
      "Balanced academics and extracurricular activities, fostering teamwork and resilience.",
  },
];

// Certifications data
const certifications = [
  {
    name: "Learning Next.js",
    issuer: "LinkedIn",
    date: "Feb 2025",
    credential: "next-js-credential",
  },
  {
    name: "Become a React Native Developer",
    issuer: "LinkedIn",
    date: "Dec 2024",
    credential: "react-native-credential",
  },
  {
    name: "Postman Essential Training",
    issuer: "LinkedIn",
    date: "Dec 2024",
    credential: "postman-credential",
  },
  {
    name: "Angular",
    issuer: "Udemy",
    date: "Dec 2022",
    credential: "angular-credential",
  },
  {
    name: "Modern Java Certified",
    issuer: "Udemy",
    date: "Dec 2022",
    credential: "java-credential",
  },
  {
    name: "ReactJs Certified",
    issuer: "Udemy",
    date: "Sep 2022",
    credential: "reactjs-credential",
  },
  {
    name: "Javascript Certified",
    issuer: "Udemy",
    date: "Mar 2022",
    credential: "javascript-credential",
  },
  {
    name: "Git Certified",
    issuer: "Udemy",
    date: "Feb 2022",
    credential: "git-credential",
  },
  {
    name: "MySQL Certified",
    issuer: "Udemy",
    date: "Feb 2022",
    credential: "mysql-credential",
  },
  {
    name: "Bootstrap Certified",
    issuer: "Udemy",
    date: "Jan 2022",
    credential: "bootstrap-credential",
  },
  {
    name: "HTML & CSS Certified",
    issuer: "Udemy",
    date: "Jan 2022",
    credential: "html-css-credential",
  },
];

// Achievements data
const achievements = [
  {
    title: "Sports Achievements",
    items: [
      "Gold Medal in State-Level Handball competition.",
      "Bronze Medal in State-Level High Jump competition.",
      "1st place in Relay (4x100m) at Indian Open Inter Engineering Collegiate Sports Fest.",
      "1st place in Relay (4x400m) at Indian Open Inter Engineering Collegiate Sports Fest.",
      "2nd place in Relay (4x100m) at Vignan Mahotsav.",
      "Represented School & college in various athletics events, including track & field, Handball, and volleyball.",
      "Participation in State-level volleyball and Handball tournaments.",
      "Participation in State-level Badminton Tournaments.",
    ],
  },
  {
    title: "Google Maps Local Guide",
    items: [
      "Enhanced Google Maps by adding and editing places, sharing reviews, and contributing multimedia content, improving navigation accuracy and user experience.",
      "Active contributor to improving navigation and enriching the user experience on a global scale.",
      "Provided detailed reviews, shared high-quality multimedia, and added valuable location data.",
    ],
  },
  {
    title: "Open-Source Contributions",
    items: [
      "Created PixelPeek, a Chrome extension for real-time media dimension analysis, ensuring privacy by processing all data locally.",
      "Developed TrueScreenshot, a VS Code extension for capturing exact visual replicas of code with syntax highlighting and formatting.",
      "Contributed to various open-source projects, helping improve documentation and fixing bugs.",
    ],
  },
];

export default function ChannelPage() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState<string>(tabParam || "projects");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  // Update active tab when URL param changes
  useEffect(() => {
    if (tabParam && tabs.some((tab) => tab.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  // Format subscriber count
  const formatSubscriberCount = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <div className="min-h-screen pb-10">
      {/* Channel banner */}
      <div className="relative w-full h-40 sm:h-56 bg-gray-200 dark:bg-zinc-800 overflow-hidden">
        {/* Inline SVG banner */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 300"
          className="absolute w-full h-full"
        >
          <defs>
            <linearGradient
              id="bannerGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <pattern
              id="gridPattern"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>

          {/* Background */}
          <rect width="1200" height="300" fill="url(#bannerGradient)" />

          {/* Grid overlay */}
          <rect width="1200" height="300" fill="url(#gridPattern)" />

          {/* Code bubbles decoration */}
          <g opacity="0.2">
            <circle cx="200" cy="100" r="60" fill="#FFFFFF" />
            <text
              x="200"
              y="115"
              fontFamily="monospace"
              fontSize="24"
              fill="#1E3A8A"
              textAnchor="middle"
            >
              &lt;/&gt;
            </text>

            <circle cx="1000" cy="180" r="80" fill="#FFFFFF" />
            <text
              x="1000"
              y="195"
              fontFamily="monospace"
              fontSize="30"
              fill="#1E3A8A"
              textAnchor="middle"
            >
              {"{}"}
            </text>

            <circle cx="350" cy="200" r="40" fill="#FFFFFF" />
            <text
              x="350"
              y="212"
              fontFamily="monospace"
              fontSize="20"
              fill="#1E3A8A"
              textAnchor="middle"
            >
              ( )
            </text>

            <circle cx="850" cy="80" r="50" fill="#FFFFFF" />
            <text
              x="850"
              y="95"
              fontFamily="monospace"
              fontSize="24"
              fill="#1E3A8A"
              textAnchor="middle"
            >
              []
            </text>
          </g>

          {/* Name */}
          <text
            x="600"
            y="180"
            fontFamily="Arial, sans-serif"
            fontSize="48"
            fontWeight="bold"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            Srujan Chidarla
          </text>

          {/* Tagline */}
          <text
            x="600"
            y="230"
            fontFamily="Arial, sans-serif"
            fontSize="24"
            fill="#E0E7FF"
            textAnchor="middle"
          >
            Full-Stack Developer & Software Engineer
          </text>
        </svg>
      </div>

      {/* Channel info */}
      <div className="px-4 md:px-8 -mt-14 relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 mb-6">
          {/* Channel avatar */}
          {/* Channel avatar */}
          <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-white dark:border-zinc-900 bg-gray-200 dark:bg-zinc-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              className="w-full h-full"
            >
              <defs>
                <linearGradient
                  id="avatarGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#1E40AF" />
                </linearGradient>
              </defs>

              {/* Background */}
              <circle cx="100" cy="100" r="100" fill="url(#avatarGradient)" />

              {/* Simple profile silhouette */}
              <g transform="translate(40, 40)">
                {/* Head */}
                <circle cx="60" cy="45" r="40" fill="#FFFFFF" />

                {/* Body */}
                <path d="M20,160 C20,100 100,100 100,160" fill="#FFFFFF" />

                {/* Initial */}
                <text
                  x="60"
                  y="65"
                  fontFamily="Arial, sans-serif"
                  fontSize="50"
                  fontWeight="bold"
                  fill="#3B82F6"
                  textAnchor="middle"
                >
                  S
                </text>
              </g>
            </svg>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4">
            <div>
              <h1 className="text-2xl font-bold dark:text-white">
                {channelInfo.name}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {formatSubscriberCount(channelInfo.subscribers)} subscribers •
                Joined {channelInfo.joinDate}
              </p>
            </div>

            <button
              onClick={() => setIsSubscribed(!isSubscribed)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium ${
                isSubscribed
                  ? "bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-gray-200"
                  : "bg-red-600 text-white hover:bg-red-700"
              }`}
            >
              {isSubscribed ? "Subscribed" : "Subscribe"}
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-zinc-700">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-black dark:text-white border-b-2 border-black dark:border-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="mt-6">
          {activeTab === "projects" && (
            <VideoGrid videos={videos} categories={categories} />
          )}

          {activeTab === "about" && (
            <div className="max-w-3xl">
              <h2 className="text-lg font-semibold mb-4 dark:text-white">
                About
              </h2>
              <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line mb-6">
                {channelInfo.description}
              </p>

              <h3 className="text-md font-semibold mb-2 dark:text-white">
                Links
              </h3>
              <div className="flex flex-wrap gap-2">
                {channelInfo.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-md text-sm text-gray-800 dark:text-gray-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-md font-semibold mb-4 dark:text-white">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {[
                    "JavaScript (ES6+)",
                    "TypeScript",
                    "ReactJS",
                    "AngularJS",
                    "Node.js",
                    "Express.js",
                    "Next.js",
                    "Java",
                    "Spring Boot",
                    "React Native",
                    "MongoDB",
                    "MySQL",
                    "AWS",
                    "Docker",
                    "Kubernetes",
                    "Git",
                    "UI/UX",
                    "Responsive Design",
                    "Figma",
                    "RESTful APIs",
                    "Firebase",
                    "Chrome Extensions",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="bg-gray-100 dark:bg-zinc-800 rounded-lg p-3 text-center"
                    >
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="max-w-3xl">
              <h2 className="text-lg font-semibold mb-4 dark:text-white">
                Professional Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-gray-300 dark:border-zinc-700 pl-4 ml-1"
                  >
                    <h3 className="text-md font-semibold dark:text-white">
                      {exp.role} @ {exp.company}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {exp.period} • {exp.location}
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-800 dark:text-gray-200"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div className="max-w-3xl">
              <h2 className="text-lg font-semibold mb-4 dark:text-white">
                Education
              </h2>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-gray-300 dark:border-zinc-700 pl-4 ml-1"
                  >
                    <h3 className="text-md font-semibold dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      {edu.period} • {edu.gpa}
                    </p>
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "certifications" && (
            <div className="max-w-3xl">
              <h2 className="text-lg font-semibold mb-4 dark:text-white">
                Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 dark:bg-zinc-800 rounded-lg p-4 flex flex-col"
                  >
                    <h3 className="text-md font-semibold dark:text-white">
                      {cert.name}
                    </h3>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {cert.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "achievements" && (
            <div className="max-w-3xl">
              <h2 className="text-lg font-semibold mb-6 dark:text-white">
                Achievements
              </h2>

              <div className="space-y-10">
                {achievements.map((achievement, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-md font-semibold dark:text-white border-b border-gray-200 dark:border-zinc-700 pb-2">
                      {achievement.title}
                    </h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {achievement.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-800 dark:text-gray-200"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
