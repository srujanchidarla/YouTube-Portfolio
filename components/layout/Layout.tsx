"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Check if this is the first time the user is visiting
    const hasVisitedBefore = localStorage.getItem("sidebarStateSet");

    if (!hasVisitedBefore) {
      // First visit, keep sidebar closed
      setSidebarOpen(false);
      localStorage.setItem("sidebarStateSet", "true");
    } else {
      // Subsequent visits, restore previous sidebar state
      const savedSidebarState = localStorage.getItem("sidebarOpen");
      setSidebarOpen(savedSidebarState === "true");
    }

    setIsInitialLoad(false);
  }, []);

  const toggleSidebar = () => {
    const newState = !sidebarOpen;
    setSidebarOpen(newState);
    localStorage.setItem("sidebarOpen", newState.toString());
  };

  if (isInitialLoad) {
    return null; // Prevent flash of incorrect state
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <main
        className={`pt-14 transition-all duration-300 ease-in-out 
          ${sidebarOpen ? "sm:pl-56" : "sm:pl-20"}`}
      >
        <div className="p-4 md:p-6">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
