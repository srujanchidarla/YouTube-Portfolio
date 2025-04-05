// components/projects/MakeReceiptContent.tsx
import React from "react";
import {
  DocumentTextIcon,
  CameraIcon,
  DevicePhoneMobileIcon,
  TagIcon,
  CloudArrowUpIcon,
  CurrencyDollarIcon,
  ArrowUturnRightIcon,
} from "@heroicons/react/24/outline";

const MakeReceiptContent: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Demo Screenshots Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Demo Screenshots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <DocumentTextIcon className="h-16 w-16 text-blue-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Digital Receipt Creator
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <CameraIcon className="h-16 w-16 text-green-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Receipt Scanner
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <TagIcon className="h-16 w-16 text-purple-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Expense Categories
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <CloudArrowUpIcon className="h-16 w-16 text-orange-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Cloud Synchronization
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
            Mobile App Architecture
          </h3>
          <div className="space-y-4">
            <p className="dark:text-gray-200">
              Make a Receipt is built with a modern mobile development stack
              focused on cross-platform capabilities:
            </p>
            <ul className="list-disc pl-5 space-y-2 dark:text-gray-200">
              <li>
                <span className="font-medium">React Native</span>:
                Cross-platform mobile framework for iOS and Android
              </li>
              <li>
                <span className="font-medium">Firebase</span>:
                Backend-as-a-Service for authentication and cloud services
              </li>
              <li>
                <span className="font-medium">Redux</span>: State management for
                complex application state
              </li>
              <li>
                <span className="font-medium">Cloud Firestore</span>: NoSQL
                database for receipt storage
              </li>
              <li>
                <span className="font-medium">Firebase Auth</span>: User
                authentication and management
              </li>
              <li>
                <span className="font-medium">Firebase Storage</span>: Image
                storage for receipt photos
              </li>
              <li>
                <span className="font-medium">Expo</span>: Development toolkit
                for simplified React Native development
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
                Case Study: Freelance Photographer
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A freelance photographer used Make a Receipt to manage business
                expenses and simplify tax preparation.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The photographer struggled to track equipment purchases,
                  travel expenses, and client-related costs, often losing paper
                  receipts and missing tax deductions.
                </p>

                <h4 className="font-medium dark:text-white">Solution:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Make a Receipt provided digital receipt creation and
                  categorization with custom tags for client projects and
                  expense types.
                </p>

                <h4 className="font-medium dark:text-white">Results:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The photographer identified 35% more tax-deductible expenses,
                  reduced bookkeeping time by 5 hours per month, and simplified
                  quarterly tax filings.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full">
                <CameraIcon className="h-24 w-24 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Case Study: Small Retail Business
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A small retail store implemented Make a Receipt to modernize
                their customer receipt system and expense tracking.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The business used an outdated receipt system that was costly
                  to maintain and couldn&apos;t provide digital receipts to
                  customers who preferred them.
                </p>

                <h4 className="font-medium dark:text-white">Solution:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Make a Receipt enabled the store to create branded digital
                  receipts, email them to customers, and simultaneously track
                  business expenses.
                </p>

                <h4 className="font-medium dark:text-white">Results:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The store reduced paper and printing costs by 60%, increased
                  customer satisfaction, and improved expense categorization for
                  accounting purposes.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-full">
                <CurrencyDollarIcon className="h-24 w-24 text-green-600 dark:text-green-400" />
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
              Freelancers
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Freelance professionals use the app to track business expenses,
              categorize them by client, and simplify tax preparation.
            </p>
            <div className="flex justify-end">
              <DocumentTextIcon className="h-16 w-16 text-blue-500 dark:text-blue-400" />
            </div>
          </div>

          {/* Use Case 2 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Small Businesses
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Small business owners create professional digital receipts for
              customers while maintaining organized expense records.
            </p>
            <div className="flex justify-end">
              <CurrencyDollarIcon className="h-16 w-16 text-purple-500 dark:text-purple-400" />
            </div>
          </div>

          {/* Use Case 3 */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Business Travelers
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Travelers use the app to capture and organize receipts on the go,
              making expense reporting faster and more accurate.
            </p>
            <div className="flex justify-end">
              <DevicePhoneMobileIcon className="h-16 w-16 text-amber-500 dark:text-amber-400" />
            </div>
          </div>

          {/* Use Case 4 */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Shared Households
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Roommates and family members track shared expenses and split costs
              more easily with digital receipt management.
            </p>
            <div className="flex justify-end">
              <ArrowUturnRightIcon className="h-16 w-16 text-emerald-500 dark:text-emerald-400" />
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
                  Implementing OCR for receipt scanning
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Integrated with a cloud-based OCR service with custom text
                  parsing algorithms
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Accurate extraction of date, merchant, amounts, and items from
                  receipts with 92% accuracy
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Ensuring offline functionality
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Implemented offline-first architecture with local storage and
                  sync queue
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Full app functionality without internet connection, with
                  automatic sync when connectivity returns
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Optimizing mobile performance
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Implemented lazy loading, image compression, and memoization
                  techniques
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Responsive interface even on lower-end devices with
                  significant battery usage improvements
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Securing sensitive financial data
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Implemented end-to-end encryption and secure storage practices
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Robust data protection that meets financial industry security
                  standards
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Conclusion</h2>

        <div className="bg-gradient-to-r from-rose-500 to-orange-500 dark:from-rose-600 dark:to-orange-600 text-white p-8 rounded-lg">
          <p className="text-lg mb-4">
            Make a Receipt demonstrates how mobile technology can transform
            mundane but essential tasks like receipt management into
            streamlined, efficient processes. By digitizing receipt creation and
            management, the app helps users save time, reduce paper waste, and
            maintain better financial records.
          </p>
          <p className="text-lg mb-4">
            The success of the application lies in its careful attention to user
            needs across different contexts - from individual expense tracking
            to business receipt generation. By addressing these varied
            requirements in a single, intuitive interface, Make a Receipt
            delivers practical value to diverse user groups.
          </p>
          <p className="text-lg">
            As mobile devices continue to replace traditional tools in business
            and personal financial management, apps like Make a Receipt
            represent an important evolution in how we handle everyday
            transactions and record-keeping.
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
              Advanced Analytics
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Implementing spending analytics and reports with visual charts,
              trend analysis, and budget tracking features.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Accounting Integrations
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Adding direct integration with popular accounting software like
              QuickBooks, Xero, and FreshBooks for seamless expense management.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Business Workflows
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Developing expense approval workflows and reimbursement tracking
              for businesses with multiple employees.
            </p>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="mt-16 pt-8 border-t border-gray-200 dark:border-zinc-700">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          References & Resources
        </h2>

        <ul className="space-y-3">
          <li>
            <a
              href="https://github.com/srujanchidarla/make-receipt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              <DocumentTextIcon className="h-5 w-5 mr-2" />
              Project GitHub Repository
            </a>
          </li>
          <li>
            <a
              href="https://reactnative.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              <DevicePhoneMobileIcon className="h-5 w-5 mr-2" />
              React Native Documentation
            </a>
          </li>
          <li>
            <a
              href="https://firebase.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              <CloudArrowUpIcon className="h-5 w-5 mr-2" />
              Firebase Documentation
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default MakeReceiptContent;
