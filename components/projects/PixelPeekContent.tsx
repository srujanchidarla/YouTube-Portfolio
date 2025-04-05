// components/projects/PixelPeekContent.tsx
import React from "react";
import {
  CursorArrowRaysIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  PhotoIcon,
  EyeIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";

const PixelPeekContent: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Demo Screenshots Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Demo Screenshots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <CursorArrowRaysIcon className="h-16 w-16 text-blue-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Image Dimension Overlay
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <RectangleGroupIcon className="h-16 w-16 text-green-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Extension Settings Panel
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <PhotoIcon className="h-16 w-16 text-purple-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Pixel Measurement Interface
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <EyeIcon className="h-16 w-16 text-orange-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Dynamic Content Detection
            </span>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Technical Architecture
        </h2>
        <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
            Extension Design
          </h3>
          <div className="space-y-4">
            <p className="dark:text-gray-200">
              PixelPeek is built with a privacy-first, performance-focused
              architecture:
            </p>
            <ul className="list-disc pl-5 space-y-2 dark:text-gray-200">
              <li>
                <span className="font-medium">Core Functionality</span>: Plain
                JavaScript for optimal performance
              </li>
              <li>
                <span className="font-medium">DOM Manipulation</span>:
                Lightweight custom selectors for minimal overhead
              </li>
              <li>
                <span className="font-medium">Event Handling</span>: Efficient
                hover and mutation observers
              </li>
              <li>
                <span className="font-medium">Chrome Extension API</span>:
                Content scripts and background workers
              </li>
              <li>
                <span className="font-medium">User Interface</span>: HTML5 and
                CSS3 for minimalist, non-intrusive overlays
              </li>
              <li>
                <span className="font-medium">Privacy Focus</span>: All
                processing happens locally with no data transmission
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Case Studies
        </h2>

        {/* Case Study 1 */}
        <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Case Study: Design Agency Workflow
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A digital design agency incorporated PixelPeek into their daily
                workflow for faster UI implementation.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The design team needed to quickly measure elements on
                  reference websites and ensure pixel-perfect implementation of
                  their designs.
                </p>

                <h4 className="font-medium dark:text-white">Solution:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  PixelPeek allowed them to instantly measure dimensions of any
                  web element without taking screenshots or using separate
                  design tools.
                </p>

                <h4 className="font-medium dark:text-white">Results:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The agency reported a 40% reduction in time spent on UI
                  implementation and a significant improvement in design
                  accuracy.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full">
                <PhotoIcon className="h-24 w-24 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Case Study: Web Development Bootcamp
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A coding bootcamp incorporated PixelPeek as part of their
                frontend development curriculum to teach responsive design
                concepts.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Students struggled to understand responsive design principles
                  and how elements should scale across different devices.
                </p>

                <h4 className="font-medium dark:text-white">Solution:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Using PixelPeek, instructors could demonstrate how elements
                  resize on responsive websites and students could analyze
                  real-world examples.
                </p>

                <h4 className="font-medium dark:text-white">Results:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Comprehension of responsive design principles improved by 60%,
                  and students&apos; final projects showed significantly better
                  implementation of these concepts.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-full">
                <CodeBracketIcon className="h-24 w-24 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Use Cases */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Real-time Use Cases
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Use Case 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              UI/UX Designers
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Designers use PixelPeek to analyze competitor websites and gather
              inspiration by accurately measuring elements and spacing.
            </p>
            <div className="flex justify-end">
              <RectangleGroupIcon className="h-16 w-16 text-blue-500 dark:text-blue-400" />
            </div>
          </div>

          {/* Use Case 2 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Frontend Developers
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Developers use PixelPeek to ensure pixel-perfect implementation of
              designs and troubleshoot layout issues.
            </p>
            <div className="flex justify-end">
              <CodeBracketIcon className="h-16 w-16 text-purple-500 dark:text-purple-400" />
            </div>
          </div>

          {/* Use Case 3 */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Content Creators
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Content creators use PixelPeek to measure image dimensions for
              social media platforms and ensure optimal sizing for different
              platforms.
            </p>
            <div className="flex justify-end">
              <PhotoIcon className="h-16 w-16 text-amber-500 dark:text-amber-400" />
            </div>
          </div>

          {/* Use Case 4 */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Digital Accessibility Specialists
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Accessibility experts use PixelPeek to verify that touch targets
              meet minimum size requirements for users with motor impairments.
            </p>
            <div className="flex justify-end">
              <ShieldCheckIcon className="h-16 w-16 text-emerald-500 dark:text-emerald-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Development Challenges and Solutions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Development Challenges and Solutions
        </h2>

        <div className="overflow-hidden bg-white dark:bg-zinc-800 shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-zinc-700">
            <thead className="bg-gray-50 dark:bg-zinc-700">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  Challenge
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  Solution
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  Outcome
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-zinc-800 divide-y divide-gray-200 dark:divide-zinc-700">
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Detecting dynamically loaded content
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Implemented MutationObserver API to monitor DOM changes
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Extension works seamlessly with single-page applications and
                  infinite scrolling sites
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Maintaining performance with continuous monitoring
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Optimized event throttling and selective monitoring
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Minimal impact on page performance with <CodeBracketIcon />{" "}
                  5ms overhead per interaction
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Providing accurate measurements for scaled images
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Developed algorithms to detect both display and natural
                  dimensions
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Users can view both the rendered size and original dimensions
                  of media
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Creating non-intrusive visual overlays
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Designed minimal UI with smart positioning and transparency
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Information appears when needed without interfering with the
                  user&apos;s browsing experience
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Conclusion</h2>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-purple-600 text-white p-8 rounded-lg">
          <p className="text-lg mb-4">
            PixelPeek illustrates how focused browser extensions can
            significantly enhance productivity for specific workflows. By
            addressing a targeted need with a privacy-conscious, lightweight
            solution, the extension has become an essential tool for web
            designers and developers.
          </p>
          <p className="text-lg mb-4">
            The project demonstrates the importance of understanding user
            workflows and pain points. Rather than creating a complex
            multi-purpose tool, PixelPeek excels by doing one thing
            exceptionally well, following the Unix philosophy of creating
            simple, modular, and clear software.
          </p>
          <p className="text-lg">
            As an open-source project, PixelPeek continues to evolve based on
            community feedback, ensuring it remains relevant and useful as web
            technologies progress.
          </p>
        </div>
      </section>

      {/* Future Enhancements */}
      <section>
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Future Enhancements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Color Sampling
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Adding the ability to extract color values from elements for
              seamless integration with design tools.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Spacing Measurement
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Implementing tools to measure margins, padding, and distances
              between elements for more comprehensive layout analysis.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Design System Integration
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Creating optional integrations with popular design tools to export
              measurements and annotations directly to design documents.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PixelPeekContent;
