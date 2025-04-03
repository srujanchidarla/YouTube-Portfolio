// app/layout.tsx
"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "../components/layout/Layout";
import YouTubeLoading from "../components/loading/YouTubeLoading";
import { LoadingProvider, useLoading } from "./context/LoadingContext";

const inter = Inter({ subsets: ["latin"] });

// This component handles the loading screen
function AppContent({ children }: { children: React.ReactNode }) {
  const { isLoading } = useLoading();

  return (
    <>
      {isLoading && <YouTubeLoading />}
      <Layout>{children}</Layout>
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Srujan Chidarla | Portfolio</title>
        <meta
          name="description"
          content="A YouTube-style portfolio showcasing projects and skills of Srujan Chidarla"
        />
      </head>
      <body className={inter.className}>
        <LoadingProvider>
          <AppContent>{children}</AppContent>
        </LoadingProvider>
      </body>
    </html>
  );
}
