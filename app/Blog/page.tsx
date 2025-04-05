"use client";

import React from "react";
// import Image from "next/image";
import Link from "next/link";
import {
  BookOpenIcon,
  HomeIcon,
  CalendarIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const BlogPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-2">
          <Link
            href="/"
            className="hover:text-blue-500 dark:hover:text-blue-400 flex items-center gap-1"
          >
            <HomeIcon className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link
            href="/Blog"
            className="hover:text-blue-500 dark:hover:text-blue-400 flex items-center gap-1"
          >
            <BookOpenIcon className="h-4 w-4" />
            <span>Blog</span>
          </Link>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Beyond Code: A Journey from Dreams to Reality
        </h1>
        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 text-sm">
          <div className="flex items-center gap-1">
            <CalendarIcon className="h-4 w-4" />
            <span>March 15, 2025</span>
          </div>
          <div className="flex items-center gap-1">
            <UserIcon className="h-4 w-4" />
            <span>Srujan Chidarla</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-64 sm:h-96 w-full mb-10 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-800 flex items-center justify-center">
          {/* SVG Illustration */}
          <div className="absolute inset-0 opacity-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 500"
              className="w-full h-full"
            >
              {/* House to Graduation Cap Journey Path */}
              <path
                d="M100,400 C250,350 300,150 500,200 C700,250 750,350 900,200"
                stroke="white"
                strokeWidth="4"
                strokeDasharray="10,10"
                fill="none"
                className="journey-path"
              />

              {/* Small House (Starting Point) */}
              <g transform="translate(100, 400) scale(0.7)">
                <path
                  d="M30,100 L30,60 L50,40 L70,60 L70,100 Z"
                  fill="white"
                  strokeWidth="2"
                  stroke="white"
                />
                <rect x="45" y="80" width="10" height="20" fill="#3b82f6" />
                <path
                  d="M30,60 L50,40 L70,60"
                  fill="none"
                  strokeWidth="2"
                  stroke="white"
                />
                <rect x="30" y="100" width="40" height="5" fill="#6366f1" />
              </g>

              {/* Family Home (Middle Stage) */}
              <g transform="translate(500, 200) scale(0.9)">
                <path
                  d="M0,50 L50,0 L100,50 L100,100 L0,100 Z"
                  fill="none"
                  strokeWidth="2"
                  stroke="white"
                />
                <rect
                  x="40"
                  y="70"
                  width="20"
                  height="30"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
                <rect
                  x="10"
                  y="60"
                  width="15"
                  height="15"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
                <rect
                  x="75"
                  y="60"
                  width="15"
                  height="15"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
              </g>

              {/* Graduation Cap (End Point) */}
              <g transform="translate(900, 200) scale(0.8)">
                <rect x="25" y="60" width="50" height="10" fill="white" />
                <path
                  d="M50,30 L10,50 L50,70 L90,50 Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M70,50 L70,75"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="70" cy="75" r="5" fill="#a855f7" />
              </g>

              {/* Stars scattered throughout */}
              <g className="stars">
                <circle cx="200" cy="300" r="2" fill="white" />
                <circle cx="300" cy="250" r="2" fill="white" />
                <circle cx="400" cy="350" r="3" fill="white" />
                <circle cx="600" cy="150" r="2" fill="white" />
                <circle cx="700" cy="300" r="3" fill="white" />
                <circle cx="800" cy="170" r="2" fill="white" />
                <circle cx="250" cy="200" r="3" fill="white" />
                <circle cx="350" cy="300" r="2" fill="white" />
                <circle cx="450" cy="150" r="2" fill="white" />
                <circle cx="650" cy="350" r="3" fill="white" />
                <circle cx="750" cy="200" r="2" fill="white" />
                <circle cx="850" cy="300" r="2" fill="white" />
              </g>

              {/* Airplane silhouette flying toward the graduation cap */}
              <g transform="translate(750, 230) rotate(-15) scale(0.5)">
                <path
                  d="M0,20 L100,10 L90,20 L100,30 L0,20 M20,10 L40,0 L40,40 L20,30 Z"
                  fill="white"
                  strokeWidth="1"
                  stroke="white"
                />
              </g>
            </svg>
          </div>

          <div className="text-center px-4 z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              From a Small Tile-Roof House
            </h2>
            <p className="text-xl font-bold text-blue-100">
              to Pursuing a Master&apos;s Degree in the USA
            </p>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <article className="prose prose-lg dark:prose-invert max-w-none">
        {/* First Section */}
        <h2>The Beginning: Humble Beginnings and Big Dreams</h2>
        <p>
          My story begins in a small tile-roof house with holes that let the
          rain seep in, a constant reminder of the struggles my family endured.
          Growing up in such conditions was tough, but my parents never let us
          feel the weight of our hardships. They worked tirelessly, sacrificing
          their comforts to ensure that my sister and I received a good
          education.
        </p>
        <p>
          For over 20 years, we managed with that house, but my parents always
          dreamed of building a home we could proudly call our own. That dream
          finally came to fruition in <strong>December 2023</strong>, a moment
          etched in my heart forever.
        </p>

        {/* Timeline Section */}
        <div className="my-12 border-l-2 border-gray-300 dark:border-gray-700 pl-5 space-y-10">
          <div className="relative">
            <div className="absolute -left-7 w-5 h-5 bg-blue-500 rounded-full border-4 border-white dark:border-zinc-900"></div>
            <h3 className="text-xl font-bold mt-0">
              Graduation & First Job - 2021
            </h3>
            <p className="mt-2">
              Graduating in 2021 and securing a job was a turning point for me
              and my family. It was then that my father decided it was time to
              fulfill the dream of building our home. With a plan in place by
              the end of 2022, we embarked on the journey of constructing our
              dream house.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-7 w-5 h-5 bg-green-500 rounded-full border-4 border-white dark:border-zinc-900"></div>
            <h3 className="text-xl font-bold mt-0">
              Dream Home - December 2023
            </h3>
            <p className="mt-2">
              When our home was finally completed in December 2023, we held a
              housewarming ceremony. Seeing my mother cry tears of joy in that
              moment was overwhelming. It was then I realized that my purpose in
              life wasn&apos;t just to succeed for myself but to ensure my
              family&apos;s happiness and security.
            </p>
            <p>
              That day, I promised myself to aim higher, work harder, and
              achieve more.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-7 w-5 h-5 bg-purple-500 rounded-full border-4 border-white dark:border-zinc-900"></div>
            <h3 className="text-xl font-bold mt-0">
              The USA Journey - January 2024
            </h3>
            <p className="mt-2">
              In <strong>January 2024</strong>, I received my university
              admission and visa, and I embarked on the next chapter of my life.
              Moving to the USA was a cultural and personal shock—a world of
              different people, traditions, and challenges awaited me.
            </p>
          </div>
        </div>

        <h2>A Bold Decision: The Path to the USA</h2>
        <p>
          Coming from a middle-class family, my aspirations were always grounded
          in reality. But after witnessing my parents&apos; joy, I decided to
          push the boundaries of what I thought was possible. I set my sights on
          pursuing a master&apos;s degree in the USA, knowing that it would open
          new doors for me to secure a brighter future.
        </p>

        <h2>New Beginnings: Challenges and Growth</h2>
        <p>
          The journey wasn&apos;t easy. Adjusting to a new environment was
          tough, and I faced moments of doubt and difficulty. But each challenge
          taught me resilience and adaptability. Slowly, I started working on my
          skills, refining them, and even developing new ones. I began keeping a
          journal of my ideas and translating them into projects, some of which
          I&apos;m incredibly proud of today.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
          <h3 className="text-blue-700 dark:text-blue-300 font-bold">
            Lessons Learned Along the Way
          </h3>
          <ul className="list-disc ml-6 mt-4 space-y-2 text-blue-800 dark:text-blue-200">
            <li>Perseverance in the face of obstacles</li>
            <li>The importance of family support</li>
            <li>
              Setting ambitious goals and working tirelessly to achieve them
            </li>
            <li>Adaptability in new environments and situations</li>
            <li>Translating ideas into tangible projects</li>
            <li>Growing beyond your comfort zone</li>
          </ul>
        </div>

        <h2>Evolving Aspirations</h2>
        <p>
          When I started earning, my aspirations were modest—stability,
          security, and helping my family. But as my journey unfolded, those
          aspirations began to grow. The house that once symbolized the pinnacle
          of our dreams became the foundation for even bigger goals. Now, my
          dreams have no bounds, and I&apos;m eager to see where life takes me.
        </p>

        <h2>What&apos;s Next?</h2>
        <p>
          The path ahead is uncertain, but one thing is clear: I am committed to
          working hard and staying true to the promises I made to myself and my
          family. My journey from a small tile-roof house to a master&apos;s
          degree in the USA is a testament to the power of perseverance and the
          unwavering support of loved ones.
        </p>
        <p>
          This is just the beginning of a story still being written—a story of
          dreams, dedication, and a relentless pursuit of a better tomorrow.
        </p>

        {/* Quote */}
        <blockquote className="text-center italic border-l-0 pl-0 my-10">
          &quot;The house that once symbolized the pinnacle of our dreams became
          the foundation for even bigger goals. Now, my dreams have no
          bounds.&quot;
        </blockquote>
      </article>

      {/* Additional Personal Journey Section */}
      <div className="mt-16 border-t border-gray-200 dark:border-gray-800 pt-10">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          My Journey: Hobbies & Personal Interests
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-zinc-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Playing Sports
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              I am passionate about playing volleyball, high jump, and track &
              field events. These activities help me stay active, foster
              teamwork, and build resilience.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-zinc-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Image & Video Editing
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              I enjoy working with photo and video editing tools to enhance
              visuals and create engaging content, which also sharpens my
              attention to detail and creativity.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-zinc-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Exploring Technology
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              I constantly explore new technologies and contribute to
              open-source projects like PixelPeek, reflecting my curiosity and
              drive to innovate.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-zinc-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Travel & Google Maps
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              I have an avid interest in traveling to new destinations and
              sharing my experiences as a Google Maps Local Guide, adding
              reviews, photos, and videos to help others navigate and discover
              new places.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Looking Forward
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          As I continue my education and career in the USA, I remain grounded in
          the values my parents instilled in me: hard work, perseverance, and
          gratitude. Every challenge I overcome and every goal I achieve is a
          testament to their sacrifices and unwavering support.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          I invite you to join me on this journey through my blog, where
          I&apos;ll share my experiences, lessons learned, and the projects
          I&apos;m working on. Together, we&apos;ll explore the intersection of
          technology, personal growth, and the pursuit of dreams.
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
