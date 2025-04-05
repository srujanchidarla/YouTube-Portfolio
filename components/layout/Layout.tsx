"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

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
