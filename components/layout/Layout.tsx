"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SimpleLoading from "../loading/SimpleLoading";
import { useLoading } from "../../app/context/LoadingContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isLoading } = useLoading();

  useEffect(() => {
    // Check sidebar state in localStorage
    const storedSidebarState = localStorage.getItem("sidebarOpen");

    // If there's a stored state, use it
    if (storedSidebarState !== null) {
      setSidebarOpen(storedSidebarState === "true");
    }
  }, []);

  const toggleSidebar = () => {
    const newState = !sidebarOpen;
    setSidebarOpen(newState);
    localStorage.setItem("sidebarOpen", newState.toString());
  };

  if (isLoading) {
    return <SimpleLoading />;
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
