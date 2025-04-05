// context/LoadingContext.tsx
"use client";

import React, { createContext, useState, useContext, useEffect } from "react";

interface LoadingContextType {
  isLoading: boolean;
  setLoaded: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    // Always show loading on each page load
    setIsLoading(true);
    setInitialized(true);

    // Automatically hide after 2 seconds if not manually hidden
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const setLoaded = () => {
    setIsLoading(false);
  };

  // Don't render anything until we've initialized
  if (!initialized) {
    return null;
  }

  return (
    <LoadingContext.Provider value={{ isLoading, setLoaded }}>
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
