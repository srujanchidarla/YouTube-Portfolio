// components/projects/TrueScreenshotContent.tsx
import React from "react";
import {
  CodeBracketIcon,
  CameraIcon,
  DocumentTextIcon,
  PresentationChartBarIcon,
  ComputerDesktopIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

const TrueScreenshotContent: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Demo Screenshots Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Demo Screenshots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <CameraIcon className="h-16 w-16 text-blue-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              VS Code Extension Interface
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <CodeBracketIcon className="h-16 w-16 text-green-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Screenshot with Syntax Highlighting
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <DocumentTextIcon className="h-16 w-16 text-purple-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Error Indicators Preserved
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <ShareIcon className="h-16 w-16 text-orange-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Sharing Options
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
            VS Code Extension Architecture
          </h3>
          <div className="space-y-4">
            <p className="dark:text-gray-200">
              TrueScreenshot is built on modern technologies for VS Code
              extension development:
            </p>
            <ul className="list-disc pl-5 space-y-2 dark:text-gray-200">
              <li>
                <span className="font-medium">TypeScript</span>: Strongly typed
                language for robust extension development
              </li>
              <li>
                <span className="font-medium">VS Code Extension API</span>: Deep
                integration with editor capabilities
              </li>
              <li>
                <span className="font-medium">HTML Canvas</span>: Used for
                high-fidelity rendering of code screenshots
              </li>
              <li>
                <span className="font-medium">Node.js</span>: Runtime for
                extension processing
              </li>
              <li>
                <span className="font-medium">Webpack</span>: Module bundling
                for optimized distribution
              </li>
              <li>
                <span className="font-medium">Color Mapping Engine</span>:
                Custom algorithm for theme color detection and application
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
                Case Study: Technical Documentation Team
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A documentation team at a software company integrated
                TrueScreenshot into their workflow for creating developer guides
                and API documentation.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The team needed to include code examples with error
                  highlighting and compiler warnings in their documentation,
                  which standard code blocks couldn&apos;t represent.
                </p>

                <h4 className="font-medium dark:text-white">Solution:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  TrueScreenshot allowed them to capture exact visual
                  representations of code including all IDE annotations,
                  providing more context for developers.
                </p>

                <h4 className="font-medium dark:text-white">Results:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Documentation quality improved significantly, with developers
                  reporting 45% faster understanding of error cases and edge
                  conditions in the codebase.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full">
                <DocumentTextIcon className="h-24 w-24 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Case Study: Programming Course Development
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                An online learning platform used TrueScreenshot to create
                educational content for their programming courses.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Instructors needed to show common coding errors and their
                  visual indicators to help students recognize problems in their
                  own code.
                </p>

                <h4 className="font-medium dark:text-white">Solution:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  TrueScreenshot enabled the creation of visual examples that
                  preserved syntax highlighting and error indicators from the
                  IDE, providing a realistic reference.
                </p>

                <h4 className="font-medium dark:text-white">Results:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Student comprehension increased by 35%, and course completion
                  rates improved by 20% with the enhanced visual materials.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-full">
                <PresentationChartBarIcon className="h-24 w-24 text-green-600 dark:text-green-400" />
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
              Technical Documentation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Documentation writers use TrueScreenshot to create accurate visual
              references for code examples, including error states and warnings.
            </p>
            <div className="flex justify-end">
              <DocumentTextIcon className="h-16 w-16 text-blue-500 dark:text-blue-400" />
            </div>
          </div>

          {/* Use Case 2 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Bug Reporting
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Developers use TrueScreenshot to capture and share exact visual
              representations of code issues when reporting bugs.
            </p>
            <div className="flex justify-end">
              <CodeBracketIcon className="h-16 w-16 text-purple-500 dark:text-purple-400" />
            </div>
          </div>

          {/* Use Case 3 */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Educational Content
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Course creators and instructors use TrueScreenshot to capture code
              examples with syntax highlighting and error indicators for
              teaching materials.
            </p>
            <div className="flex justify-end">
              <PresentationChartBarIcon className="h-16 w-16 text-amber-500 dark:text-amber-400" />
            </div>
          </div>

          {/* Use Case 4 */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Technical Blogging
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Technical writers use TrueScreenshot to enhance blog posts with
              visually accurate code representations that preserve IDE features.
            </p>
            <div className="flex justify-end">
              <ComputerDesktopIcon className="h-16 w-16 text-emerald-500 dark:text-emerald-400" />
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
                  Accessing editor rendering information
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Developed custom hooks into VS Code&apos;s decoration
                  rendering APIs
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Achieved pixel-perfect capture of all editor visual elements,
                  including diagnostic markers
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Converting editor elements to canvas
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Implemented custom rendering pipeline that translates editor
                  DOM to canvas
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  High-fidelity screenshots that preserve all visual aspects of
                  the editor
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Supporting different VS Code themes
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Created a theme detection system that maps colors dynamically
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Screenshots maintain visual consistency with user&apos;s
                  preferred editor theme
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Handling high-resolution displays
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Implemented device pixel ratio scaling for retina and high-DPI
                  displays
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Crisp, clear screenshots regardless of display resolution
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Conclusion</h2>

        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-purple-600 dark:to-indigo-600 text-white p-8 rounded-lg">
          <p className="text-lg mb-4">
            TrueScreenshot addresses a specific but important need in the
            developer toolchain: the ability to create visually accurate
            representations of code in context. By capturing the complete visual
            state of the editor, it enables more effective communication about
            code.
          </p>
          <p className="text-lg mb-4">
            The extension demonstrates how targeted tools can significantly
            improve developer workflows by focusing on solving a specific pain
            point exceptionally well. Its success lies in understanding the
            limitations of existing solutions and leveraging VS Code&apos;s
            extensibility to overcome them.
          </p>
          <p className="text-lg">
            As software development continues to be a collaborative endeavor,
            tools like TrueScreenshot play an important role in bridging
            communication gaps, especially in remote and distributed teams where
            clear visual references are essential.
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
              Code Snippet Generation
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Automatically generating shareable code snippets alongside
              screenshots for platforms that support both visual and textual
              representation.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Documentation Integration
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Direct integration with documentation platforms like Confluence,
              Notion, and GitHub wikis for seamless publishing workflows.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Custom Branding Templates
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Adding support for custom templates with company branding, author
              attribution, and additional context for screenshots.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrueScreenshotContent;
