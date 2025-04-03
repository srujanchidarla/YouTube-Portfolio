"use client";

import { JSX, useState } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  BellIcon,
  UserCircleIcon,
  MicrophoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-white dark:bg-zinc-900 flex items-center px-4 justify-between z-50 border-b border-gray-200 dark:border-zinc-700">
      {/* Left section - Logo and menu toggle */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800"
        >
          <Bars3Icon className="h-6 w-6 text-gray-700 dark:text-white" />
        </button>

        <Link href="/" className="flex items-center gap-1">
          <VideoCameraIcon className="h-6 w-6 text-red-600" />
          <span className="text-lg font-semibold dark:text-white">
            SrujanTube
          </span>
        </Link>
      </div>

      {/* Middle section - Search bar */}
      <div className="hidden sm:flex items-center justify-center flex-grow max-w-2xl mx-4">
        <div className="flex w-full">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search projects"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-l-full focus:outline-none dark:bg-zinc-800 dark:text-white"
            />
          </div>
          <button className="px-6 py-2 bg-gray-100 dark:bg-zinc-700 border border-l-0 border-gray-300 dark:border-zinc-600 rounded-r-full hover:bg-gray-200 dark:hover:bg-zinc-600">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 dark:text-gray-300" />
          </button>
          <button className="p-2 ml-2 bg-gray-100 dark:bg-zinc-700 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-600">
            <MicrophoneIcon className="h-5 w-5 text-gray-500 dark:text-gray-300" />
          </button>
        </div>
      </div>

      {/* Right section - Icons */}
      <div className="flex items-center gap-3">
        <button className="block sm:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-700 dark:text-white" />
        </button>

        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800">
          <BellIcon className="h-6 w-6 text-gray-700 dark:text-white" />
        </button>

        <Link href="/channel" className="flex items-center">
          <div className="relative h-8 w-8 rounded-full overflow-hidden">
            <div className="h-full w-full bg-blue-500 flex items-center justify-center text-white">
              <UserCircleIcon className="h-8 w-8" />
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
