// context/LoadingContext.tsx
"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

interface LoadingContextType {
  isFirstVisit: boolean;
  setVisited: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isFirstVisit, setIsFirstVisit] = useState<boolean>(true);
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    // Check localStorage to see if user has visited before
    const hasVisited = localStorage.getItem("hasVisitedSrujanTube");

    if (hasVisited) {
      setIsFirstVisit(false);
    }

    setInitialized(true);
  }, []);

  const setVisited = () => {
    localStorage.setItem("hasVisitedSrujanTube", "true");
    setIsFirstVisit(false);
  };

  // Don't render anything until we've checked localStorage
  if (!initialized) {
    return null;
  }

  return (
    <LoadingContext.Provider value={{ isFirstVisit, setVisited }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
