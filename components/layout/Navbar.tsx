// components/layout/Navbar.tsx
"use client";

import { JSX, useState } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  BellIcon,
  UserCircleIcon,
  VideoCameraIcon,
  EnvelopeIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import SearchBar from "../ui/SearchBar";
import ContactModal from "../ui/ContactModal";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps): JSX.Element => {
  const [showMobileSearch, setShowMobileSearch] = useState<boolean>(false);
  const [showContactModal, setShowContactModal] = useState<boolean>(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-14 bg-white dark:bg-zinc-900 flex items-center px-4 justify-between z-50 border-b border-gray-200 dark:border-zinc-700">
        {/* Left section - Logo and menu toggle */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800"
            aria-label="Toggle sidebar"
          >
            <Bars3Icon className="h-6 w-6 text-gray-700 dark:text-white" />
          </button>

          <Link href="/" className="flex items-center gap-1">
            <VideoCameraIcon className="h-6 w-6 text-red-600" />
            <span className="text-lg font-semibold dark:text-white hidden sm:inline">
              SrujanChidarla
            </span>
            <span className="text-lg font-semibold dark:text-white sm:hidden">
              SC
            </span>
          </Link>
        </div>

        {/* Middle section - Search bar */}
        <div className="hidden sm:flex items-center justify-center flex-grow max-w-2xl mx-4">
          <SearchBar />
        </div>

        {/* Mobile search overlay */}
        {showMobileSearch && (
          <div className="fixed inset-0 bg-white dark:bg-zinc-900 z-50 p-4 sm:hidden">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowMobileSearch(false)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700 dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <div className="flex-grow">
                <SearchBar />
              </div>
            </div>
          </div>
        )}

        {/* Right section - Icons */}
        <div className="flex items-center gap-1 sm:gap-3">
          {/* Mobile Search Icon */}
          <button
            className="block sm:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800"
            onClick={() => setShowMobileSearch(true)}
            aria-label="Search"
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-700 dark:text-white" />
          </button>

          {/* Analytics Button */}
          <Link
            href="/category/analytics"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800"
            aria-label="Analytics & Skills"
          >
            <ChartBarIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
          </Link>

          {/* Contact Button */}
          <button
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800"
            onClick={() => setShowContactModal(true)}
            aria-label="Contact"
          >
            <EnvelopeIcon className="h-6 w-6 text-gray-700 dark:text-white" />
          </button>

          {/* Notification Bell */}
          <button
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 hidden sm:flex"
            aria-label="Notifications"
          >
            <BellIcon className="h-6 w-6 text-gray-700 dark:text-white" />
          </button>

          {/* User Avatar */}
          <Link
            href="/channel"
            className="flex items-center"
            aria-label="Profile"
          >
            <div className="relative h-8 w-8 rounded-full overflow-hidden">
              <div className="h-full w-full bg-blue-500 flex items-center justify-center text-white">
                <UserCircleIcon className="h-8 w-8" />
              </div>
            </div>
          </Link>
        </div>
      </nav>

      {/* Contact Modal */}
      <ContactModal
        isOpen={showContactModal}
        closeModal={() => setShowContactModal(false)}
      />
    </>
  );
};

export default Navbar;
