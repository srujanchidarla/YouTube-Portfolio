"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HomeIcon,
  FolderIcon,
  BookOpenIcon,
  EnvelopeIcon,
  UserIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  TrophyIcon,
  DocumentTextIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import ContactModal from "../ui/ContactModal";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface NavLink {
  name: string;
  icon: React.ReactNode;
  href: string;
  isContact?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [showContactModal, setShowContactModal] = useState(false);

  const mainLinks: NavLink[] = [
    { name: "Home", icon: <HomeIcon className="h-6 w-6" />, href: "/" },
    { name: "Projects", icon: <FolderIcon className="h-6 w-6" />, href: "/" },
    {
      name: "About",
      icon: <UserIcon className="h-6 w-6" />,
      href: "/channel?tab=about",
    },
    {
      name: "Experience",
      icon: <BriefcaseIcon className="h-6 w-6" />,
      href: "/channel?tab=experience",
    },
    {
      name: "Education",
      icon: <AcademicCapIcon className="h-6 w-6" />,
      href: "/channel?tab=education",
    },
    {
      name: "Certifications",
      icon: <DocumentTextIcon className="h-6 w-6" />,
      href: "/channel?tab=certifications",
    },
    {
      name: "Achievements",
      icon: <TrophyIcon className="h-6 w-6" />,
      href: "/channel?tab=achievements",
    },
    {
      name: "Contact",
      icon: <EnvelopeIcon className="h-6 w-6" />,
      href: "#",
      isContact: true,
    },
  ];

  const categoriesLinks: NavLink[] = [
    {
      name: "Analytics & Skills",
      icon: <ChartBarIcon className="h-6 w-6" />,
      href: "/category/analytics",
    },
    {
      name: "Web Development",
      icon: <CodeBracketIcon className="h-6 w-6" />,
      href: "/category/web",
    },
    {
      name: "Mobile Apps",
      icon: <DevicePhoneMobileIcon className="h-6 w-6" />,
      href: "/category/mobile",
    },
    {
      name: "Blog",
      icon: <BookOpenIcon className="h-6 w-6" />,
      href: "/Blog",
    },
  ];

  const handleNavLinkClick = (link: NavLink, e: React.MouseEvent) => {
    if (link.isContact) {
      e.preventDefault();
      setShowContactModal(true);
    } else if (typeof window !== "undefined" && window.innerWidth < 640) {
      toggleSidebar();
    }
  };

  return (
    <>
      <aside
        className={`
          fixed left-0 top-14 bottom-0 bg-white dark:bg-zinc-900 
          z-40 transition-all duration-300 ease-in-out
          border-r border-gray-200 dark:border-zinc-700 
          overflow-hidden
          ${isOpen ? "w-56 sm:w-56" : "w-0 sm:w-20"}
        `}
      >
        <div className="h-full overflow-y-auto py-3 px-2 scrollbar-hide">
          {/* Main Navigation */}
          <div className="mb-4">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-4 p-3 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg mb-1"
                onClick={(e) => handleNavLinkClick(link, e)}
              >
                <div className="text-gray-600 dark:text-gray-300">
                  {link.icon}
                </div>
                <span
                  className={`
                    text-sm font-medium dark:text-white 
                    ${!isOpen ? "hidden sm:hidden" : ""}
                  `}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 dark:border-zinc-700 my-2"></div>

          {/* Categories */}
          <div className="mt-4">
            <h3
              className={`
                text-sm font-semibold text-gray-500 dark:text-gray-400 
                px-3 mb-2 
                ${!isOpen ? "hidden sm:hidden" : ""}
              `}
            >
              PROJECT SHOWCASE
            </h3>
            {categoriesLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-4 p-3 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg mb-1"
                onClick={() => {
                  if (
                    typeof window !== "undefined" &&
                    window.innerWidth < 640
                  ) {
                    toggleSidebar();
                  }
                }}
              >
                <div className="text-gray-600 dark:text-gray-300">
                  {link.icon}
                </div>
                <span
                  className={`
                    text-sm font-medium dark:text-white 
                    ${!isOpen ? "hidden sm:hidden" : ""}
                  `}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </aside>

      {/* Contact Modal */}
      <ContactModal
        isOpen={showContactModal}
        closeModal={() => setShowContactModal(false)}
      />
    </>
  );
};

export default Sidebar;
