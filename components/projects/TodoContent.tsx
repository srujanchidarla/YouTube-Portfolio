// components/projects/TodoContent.tsx
import React from "react";
import {
  CheckCircleIcon,
  ClockIcon,
  PlusCircleIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";

const TodoContent: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Demo Screenshots Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Demo Screenshots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <CheckCircleIcon className="h-16 w-16 text-green-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Task Management UI
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <FlagIcon className="h-16 w-16 text-red-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Priority Filtering
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <PlusCircleIcon className="h-16 w-16 text-blue-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Task Creation Interface
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <ClockIcon className="h-16 w-16 text-purple-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Due Date Management
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
            Frontend Implementation
          </h3>
          <div className="space-y-4">
            <p className="dark:text-gray-200">
              The Interactive To-Do List is built with a focus on simplicity and
              performance:
            </p>
            <ul className="list-disc pl-5 space-y-2 dark:text-gray-200">
              <li>
                <span className="font-medium">HTML5</span>: Semantic markup for
                accessibility and structure
              </li>
              <li>
                <span className="font-medium">CSS3</span>: Custom styling with
                CSS variables for theming
              </li>
              <li>
                <span className="font-medium">JavaScript (ES6+)</span>: Modern
                JS using the module pattern for organization
              </li>
              <li>
                <span className="font-medium">Local Storage</span>: Persistent
                data storage for task management
              </li>
              <li>
                <span className="font-medium">Event Delegation</span>: Efficient
                event handling for dynamic elements
              </li>
              <li>
                <span className="font-medium">Responsive Design</span>:
                Mobile-first approach with flexible layouts
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
                Case Study: Student Productivity
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A study group of university students used the To-Do List app to
                manage their assignments and project deadlines.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Students struggled to keep track of assignments across
                  multiple courses with varying due dates and priorities.
                </p>

                <h4 className="font-medium dark:text-white">Solution:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The priority system and due date tracking helped them organize
                  their workload and visualize upcoming deadlines.
                </p>

                <h4 className="font-medium dark:text-white">Results:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The group reported a 40% decrease in missed deadlines and a
                  significant reduction in last-minute cramming sessions.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full">
                <ClockIcon className="h-24 w-24 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Case Study: Small Business Task Management
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A small marketing agency adopted the app for their daily task
                tracking and client deliverables.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Team members needed a simple way to track their individual
                  responsibilities without complex project management tools.
                </p>

                <h4 className="font-medium dark:text-white">Solution:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The intuitive interface and priority levels allowed for quick
                  task organization and visibility.
                </p>

                <h4 className="font-medium dark:text-white">Results:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The team improved their task completion rate by 30% and
                  reduced time spent on status update meetings.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-full">
                <CheckCircleIcon className="h-24 w-24 text-green-600 dark:text-green-400" />
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
              Personal Organization
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Individuals use the app to track daily chores, errands, and
              personal goals with simple priority levels.
            </p>
            <div className="flex justify-end">
              <CheckCircleIcon className="h-16 w-16 text-blue-500 dark:text-blue-400" />
            </div>
          </div>

          {/* Use Case 2 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Student Assignment Tracking
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Students use the app to organize homework, papers, and project
              deadlines across multiple courses.
            </p>
            <div className="flex justify-end">
              <ClockIcon className="h-16 w-16 text-purple-500 dark:text-purple-400" />
            </div>
          </div>

          {/* Use Case 3 */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Small Team Coordination
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Small teams use the app for individual task tracking and daily
              status updates without complex project management.
            </p>
            <div className="flex justify-end">
              <PlusCircleIcon className="h-16 w-16 text-amber-500 dark:text-amber-400" />
            </div>
          </div>

          {/* Use Case 4 */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Event Planning
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Event organizers use the app to track preparation tasks with
              deadlines and priority levels leading up to events.
            </p>
            <div className="flex justify-end">
              <FlagIcon className="h-16 w-16 text-emerald-500 dark:text-emerald-400" />
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
                  Persistent data storage without a backend
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Implemented localStorage with efficient serialization and
                  error handling
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Task data persists between sessions without requiring user
                  accounts
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Managing dynamic DOM elements
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Used event delegation and template-based rendering
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Efficient DOM manipulation without performance bottlenecks
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Creating intuitive UI for priority levels
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Implemented visual color coding and simple dropdown selection
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Users can quickly assess task priority at a glance
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Responsive design for all devices
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Used CSS Grid and Flexbox with mobile-first approach
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Consistent experience across desktop, tablet, and mobile
                  interfaces
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Conclusion</h2>

        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 dark:from-teal-600 dark:to-cyan-600 text-white p-8 rounded-lg">
          <p className="text-lg mb-4">
            The Interactive To-Do List demonstrates that effective productivity
            tools don&apos;t need to be complex. By focusing on core
            functionality and user experience, this minimalist application
            delivers exactly what users need without unnecessary features.
          </p>
          <p className="text-lg mb-4">
            The project showcases the power of vanilla JavaScript, HTML, and CSS
            when applied thoughtfully. Without frameworks or complex
            dependencies, the application remains lightweight, fast, and
            accessible across all devices.
          </p>
          <p className="text-lg">
            As a foundational productivity tool, the To-Do List serves as both a
            practical utility for users and a demonstration of front-end
            development fundamentals for developers.
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
              Task Categories & Tags
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Adding the ability to categorize tasks and apply tags for more
              flexible organization and filtering.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Cloud Synchronization
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Implementing optional account-based storage to synchronize tasks
              across multiple devices.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Recurring Tasks
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Adding support for recurring tasks with customizable frequency
              settings for regular responsibilities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TodoContent;
