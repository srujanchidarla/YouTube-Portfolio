"use client";

import React from "react";
import {
  DevicePhoneMobileIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

const MobileAppsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <DevicePhoneMobileIcon className="h-8 w-8 text-purple-500" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Mobile App Projects
        </h1>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-8">
        My mobile development portfolio showcases applications built with React
        Native and Flutter, focusing on performance, user experience, and
        cross-platform functionality.
      </p>

      {/* Detailed Make a Receipt Project Showcase */}
      <div className="border border-gray-200 dark:border-zinc-700 rounded-lg overflow-hidden shadow-md">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white flex items-center">
            <DevicePhoneMobileIcon className="h-6 w-6 mr-2" />
            Make a Receipt: Mobile App for Digital Receipt Management
          </h2>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  Make a Receipt is a React Native mobile application that
                  allows users to create, store, and manage digital receipts.
                  The app simplifies expense tracking for individuals and small
                  businesses by providing an intuitive interface for receipt
                  generation and organization. With built-in templates, custom
                  fields, and cloud synchronization, users can maintain accurate
                  financial records without the hassle of paper receipts.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-3 text-gray-900 dark:text-white">
                  Key Features
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Digital receipt creation with customizable templates</li>
                  <li>Receipt scanning and data extraction</li>
                  <li>Expense categorization and tagging</li>
                  <li>Cloud synchronization across devices</li>
                  <li>Export to PDF and CSV formats</li>
                  <li>Receipt sharing via email and messaging</li>
                  <li>Budget tracking and reporting</li>
                </ul>

                <h3 className="text-lg font-semibold mt-6 mb-3 text-gray-900 dark:text-white">
                  Development Challenges
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Implementing OCR for receipt scanning</li>
                  <li>Creating intuitive mobile UI for complex forms</li>
                  <li>Ensuring data security for financial information</li>
                  <li>Optimizing offline functionality</li>
                  <li>Handling cross-platform differences</li>
                  <li>Managing cloud synchronization conflicts</li>
                </ul>

                <h3 className="text-lg font-semibold mt-6 mb-3 text-gray-900 dark:text-white">
                  Implementation Details
                </h3>
                <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded-md text-sm">
                  <p className="font-medium mb-2 text-gray-900 dark:text-white">
                    Technical Architecture:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>React Native for cross-platform mobile development</li>
                    <li>Firebase for backend services and authentication</li>
                    <li>Cloud Firestore for scalable NoSQL database</li>
                    <li>Firebase Storage for receipt images</li>
                    <li>Redux for state management</li>
                    <li>Expo for simplified development and deployment</li>
                  </ul>

                  <p className="font-medium mt-4 mb-2 text-gray-900 dark:text-white">
                    Key Implementation Details:
                  </p>
                  <ol className="list-decimal pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>
                      Offline-First Architecture: Full functionality without
                      connectivity
                    </li>
                    <li>
                      Progressive Enhancement: Advanced features load
                      conditionally
                    </li>
                    <li>
                      Secure Data Model: End-to-end encryption for sensitive
                      information
                    </li>
                  </ol>
                </div>

                <h3 className="text-lg font-semibold mt-6 mb-3 text-gray-900 dark:text-white">
                  Real-Time Use Cases
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Freelancers tracking business expenses</li>
                  <li>Small business owners managing receipts</li>
                  <li>Individuals monitoring personal spending</li>
                  <li>Business travelers tracking reimbursable expenses</li>
                  <li>Roommates splitting shared expenses</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="mb-6 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 800 600"
                  className="w-full h-auto"
                >
                  {/* Background */}
                  <rect width="800" height="600" fill="#f0f4f8" />

                  {/* Phone Outline */}
                  <rect
                    x="260"
                    y="60"
                    width="280"
                    height="480"
                    rx="30"
                    fill="#ffffff"
                    stroke="#9333ea"
                    strokeWidth="10"
                  />

                  {/* Phone Screen */}
                  <rect
                    x="280"
                    y="100"
                    width="240"
                    height="400"
                    rx="5"
                    fill="#f3f4f6"
                  />

                  {/* Receipt */}
                  <rect
                    x="310"
                    y="140"
                    width="180"
                    height="320"
                    rx="4"
                    fill="#ffffff"
                    stroke="#d1d5db"
                    strokeWidth="1"
                  />

                  {/* Receipt Top Edge (Zigzag) */}
                  <path
                    d="M310,140 L490,140"
                    stroke="#d1d5db"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />

                  {/* Receipt Header */}
                  <rect
                    x="330"
                    y="160"
                    width="140"
                    height="20"
                    rx="2"
                    fill="#9333ea"
                    fillOpacity="0.2"
                  />
                  <rect
                    x="330"
                    y="160"
                    width="140"
                    height="20"
                    rx="2"
                    fill="none"
                    stroke="#9333ea"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                  />
                  <text
                    x="400"
                    y="175"
                    fontFamily="Arial"
                    fontSize="12"
                    fill="#9333ea"
                    textAnchor="middle"
                  >
                    RECEIPT
                  </text>

                  {/* Store Name */}
                  <rect
                    x="350"
                    y="190"
                    width="100"
                    height="10"
                    rx="2"
                    fill="#6b7280"
                  />

                  {/* Date Line */}
                  <rect
                    x="330"
                    y="210"
                    width="60"
                    height="8"
                    rx="2"
                    fill="#9ca3af"
                  />
                  <rect
                    x="400"
                    y="210"
                    width="70"
                    height="8"
                    rx="2"
                    fill="#9ca3af"
                  />

                  {/* Receipt Items */}
                  <rect x="330" y="230" width="140" height="1" fill="#e5e7eb" />

                  {/* Item 1 */}
                  <rect
                    x="330"
                    y="240"
                    width="80"
                    height="8"
                    rx="2"
                    fill="#6b7280"
                  />
                  <rect
                    x="430"
                    y="240"
                    width="40"
                    height="8"
                    rx="2"
                    fill="#6b7280"
                  />

                  {/* Item 2 */}
                  <rect
                    x="330"
                    y="260"
                    width="70"
                    height="8"
                    rx="2"
                    fill="#6b7280"
                  />
                  <rect
                    x="430"
                    y="260"
                    width="40"
                    height="8"
                    rx="2"
                    fill="#6b7280"
                  />

                  {/* Item 3 */}
                  <rect
                    x="330"
                    y="280"
                    width="90"
                    height="8"
                    rx="2"
                    fill="#6b7280"
                  />
                  <rect
                    x="430"
                    y="280"
                    width="40"
                    height="8"
                    rx="2"
                    fill="#6b7280"
                  />

                  {/* Item 4 */}
                  <rect
                    x="330"
                    y="300"
                    width="60"
                    height="8"
                    rx="2"
                    fill="#6b7280"
                  />
                  <rect
                    x="430"
                    y="300"
                    width="40"
                    height="8"
                    rx="2"
                    fill="#6b7280"
                  />

                  {/* Subtotal Line */}
                  <rect x="330" y="320" width="140" height="1" fill="#e5e7eb" />

                  {/* Subtotal */}
                  <rect
                    x="330"
                    y="330"
                    width="60"
                    height="8"
                    rx="2"
                    fill="#9ca3af"
                  />
                  <rect
                    x="430"
                    y="330"
                    width="40"
                    height="8"
                    rx="2"
                    fill="#9ca3af"
                  />

                  {/* Tax */}
                  <rect
                    x="330"
                    y="350"
                    width="40"
                    height="8"
                    rx="2"
                    fill="#9ca3af"
                  />
                  <rect
                    x="430"
                    y="350"
                    width="40"
                    height="8"
                    rx="2"
                    fill="#9ca3af"
                  />

                  {/* Total Line */}
                  <rect x="330" y="370" width="140" height="2" fill="#9333ea" />

                  {/* Total */}
                  <rect
                    x="330"
                    y="380"
                    width="50"
                    height="10"
                    rx="2"
                    fill="#6b7280"
                  />
                  <rect
                    x="420"
                    y="380"
                    width="50"
                    height="10"
                    rx="2"
                    fill="#9333ea"
                  />

                  {/* Barcode */}
                  <rect
                    x="350"
                    y="410"
                    width="100"
                    height="30"
                    rx="2"
                    fill="#f3f4f6"
                  />
                  <rect x="355" y="415" width="2" height="20" fill="#6b7280" />
                  <rect x="360" y="415" width="1" height="20" fill="#6b7280" />
                  <rect x="364" y="415" width="3" height="20" fill="#6b7280" />
                  <rect x="370" y="415" width="2" height="20" fill="#6b7280" />
                  <rect x="375" y="415" width="4" height="20" fill="#6b7280" />
                  <rect x="382" y="415" width="1" height="20" fill="#6b7280" />
                  <rect x="385" y="415" width="3" height="20" fill="#6b7280" />
                  <rect x="390" y="415" width="2" height="20" fill="#6b7280" />
                  <rect x="395" y="415" width="3" height="20" fill="#6b7280" />
                  <rect x="400" y="415" width="1" height="20" fill="#6b7280" />
                  <rect x="403" y="415" width="4" height="20" fill="#6b7280" />
                  <rect x="410" y="415" width="2" height="20" fill="#6b7280" />
                  <rect x="415" y="415" width="1" height="20" fill="#6b7280" />
                  <rect x="418" y="415" width="3" height="20" fill="#6b7280" />
                  <rect x="424" y="415" width="2" height="20" fill="#6b7280" />
                  <rect x="429" y="415" width="3" height="20" fill="#6b7280" />
                  <rect x="435" y="415" width="1" height="20" fill="#6b7280" />
                  <rect x="438" y="415" width="4" height="20" fill="#6b7280" />
                  <rect x="443" y="415" width="2" height="20" fill="#6b7280" />

                  {/* Camera Icon */}
                  <circle
                    cx="170"
                    cy="240"
                    r="50"
                    fill="#9333ea"
                    fillOpacity="0.2"
                  />
                  <circle
                    cx="170"
                    cy="240"
                    r="30"
                    fill="#ffffff"
                    stroke="#9333ea"
                    strokeWidth="2"
                  />
                  <circle
                    cx="170"
                    cy="240"
                    r="15"
                    fill="#9333ea"
                    fillOpacity="0.2"
                  />
                  <circle cx="185" cy="225" r="5" fill="#ffffff" />

                  {/* Cloud Icon */}
                  <circle
                    cx="630"
                    cy="240"
                    r="50"
                    fill="#9333ea"
                    fillOpacity="0.2"
                  />
                  <path
                    d="M600,250 Q600,230 615,230 Q615,210 635,210 Q655,210 655,230 Q670,230 670,250 Q670,270 650,270 Q620,270 600,270 Q600,270 600,250"
                    fill="#ffffff"
                    stroke="#9333ea"
                    strokeWidth="2"
                  />

                  {/* Export Icon */}
                  <circle cx="400" cy="530" r="30" fill="#9333ea" />
                  <path
                    d="M385,530 L415,530 M400,515 L400,545 M390,525 L400,515 L410,525"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div className="bg-gray-100 dark:bg-zinc-800 rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "React Native",
                    "Firebase",
                    "Redux",
                    "Cloud Firestore",
                    "Firebase Auth",
                    "Expo",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded dark:bg-purple-900/30 dark:text-purple-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    Project Stats
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Downloads:
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        4,200+
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        GitHub Stars:
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        43
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Active Users:
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        2,800+
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href="https://github.com/srujanchidarla/make-a-receipt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:text-white font-medium py-2 px-4 rounded"
                  >
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View on GitHub
                  </a>

                  <a
                    href="https://make-a-receipt.srujan.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium py-2 px-4 rounded"
                  >
                    <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2" />
                    View Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-zinc-700">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Project Conclusion
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Make a Receipt demonstrates the power of modern mobile development
              frameworks for creating practical solutions to everyday problems.
              By digitizing receipt management, the app helps users save time,
              reduce paper waste, and maintain better financial records.
            </p>

            <div className="mt-4">
              <p className="font-medium text-gray-900 dark:text-white mb-2">
                Future Roadmap:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Advanced reporting and analytics</li>
                <li>Expense reimbursement workflow</li>
                <li>Accounting software integration</li>
                <li>Business-specific customizations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppsPage;
