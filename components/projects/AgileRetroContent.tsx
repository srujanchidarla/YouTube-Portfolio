// components/projects/AgileRetroContent.tsx
import React from "react";
import {
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  LightBulbIcon,
  ClipboardDocumentCheckIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

const AgileRetroContent: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Demo Screenshots Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Demo Screenshots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <UserGroupIcon className="h-16 w-16 text-blue-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Collaboration Board
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <LightBulbIcon className="h-16 w-16 text-yellow-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Retrospective Templates
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <ClipboardDocumentCheckIcon className="h-16 w-16 text-green-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Action Item Tracking
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <ArrowPathIcon className="h-16 w-16 text-purple-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Azure DevOps Integration
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
            System Architecture
          </h3>
          <div className="space-y-4">
            <p className="dark:text-gray-200">
              The Agile Retrospective Tool uses a modern, scalable architecture
              designed for real-time collaboration:
            </p>
            <ul className="list-disc pl-5 space-y-2 dark:text-gray-200">
              <li>
                <span className="font-medium">Angular</span>: Frontend framework
                with responsive design and reactive components
              </li>
              <li>
                <span className="font-medium">Spring Boot</span>: Microservices
                backend architecture
              </li>
              <li>
                <span className="font-medium">WebSockets</span>: Real-time
                updates and collaboration features
              </li>
              <li>
                <span className="font-medium">Azure DevOps API</span>:
                Integration for work item creation and tracking
              </li>
              <li>
                <span className="font-medium">MongoDB</span>: Document database
                for flexible retrospective storage
              </li>
              <li>
                <span className="font-medium">Docker & AWS</span>: Containerized
                deployment for scalability
              </li>
              <li>
                <span className="font-medium">JWT Authentication</span>: Secure
                user authentication and authorization
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
                Case Study: Distributed Development Team
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A global software company with development teams across four
                time zones used the Agile Retrospective Tool to improve their
                sprint processes.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The team struggled to conduct meaningful retrospectives with
                  members in different locations and time zones, leading to poor
                  engagement and limited improvement.
                </p>

                <h4 className="font-medium dark:text-white">Solution:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The Agile Retrospective Tool enabled asynchronous
                  participation with real-time updates, allowing team members to
                  contribute at different times while seeing others&apos; input.
                </p>

                <h4 className="font-medium dark:text-white">Results:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Team engagement in retrospectives increased by 85%, and the
                  implementation rate of improvement actions rose by 60% within
                  three months.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full">
                <UserGroupIcon className="h-24 w-24 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Case Study: Agile Transformation Program
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A financial services company undergoing an agile transformation
                used the tool to standardize retrospective practices across 12
                newly formed teams.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  New agile teams had inconsistent approaches to retrospectives,
                  with limited visibility into team improvements and cross-team
                  learning.
                </p>

                <h4 className="font-medium dark:text-white">Solution:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The platform provided structured templates and a centralized
                  view of action items, allowing agile coaches to guide teams
                  and share best practices.
                </p>

                <h4 className="font-medium dark:text-white">Results:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Teams completed 76% more improvement actions, and the
                  organization established a database of effective practices
                  that improved overall agile maturity scores by 35%.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-full">
                <ArrowPathIcon className="h-24 w-24 text-green-600 dark:text-green-400" />
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
              Scrum Teams
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Agile development teams use the platform for structured sprint
              retrospectives with customizable templates and action tracking.
            </p>
            <div className="flex justify-end">
              <UserGroupIcon className="h-16 w-16 text-blue-500 dark:text-blue-400" />
            </div>
          </div>

          {/* Use Case 2 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Agile Coaches
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Coaches use the tool to facilitate effective retrospectives and
              track improvement trends across multiple teams.
            </p>
            <div className="flex justify-end">
              <LightBulbIcon className="h-16 w-16 text-purple-500 dark:text-purple-400" />
            </div>
          </div>

          {/* Use Case 3 */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Remote Teams
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Distributed teams leverage the platform&apos;s real-time
              collaboration features to conduct effective retrospectives across
              time zones.
            </p>
            <div className="flex justify-end">
              <ChatBubbleLeftRightIcon className="h-16 w-16 text-amber-500 dark:text-amber-400" />
            </div>
          </div>

          {/* Use Case 4 */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Product Organizations
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Product teams use the tool to track continuous improvement
              initiatives and integrate action items with product backlogs.
            </p>
            <div className="flex justify-end">
              <ClipboardDocumentCheckIcon className="h-16 w-16 text-emerald-500 dark:text-emerald-400" />
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
                  Real-time collaboration with conflict resolution
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Implemented WebSocket-based event system with operational
                  transformation
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Seamless multi-user editing with zero conflicts even during
                  high concurrency
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Integration with external task management systems
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Created adapter pattern for Azure DevOps API integration with
                  fallback mechanisms
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Automatic synchronization of action items to work tracking
                  systems
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Supporting diverse retrospective formats
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Developed template engine with customizable boards and
                  visualization options
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Teams can choose from 12+ retrospective formats or create
                  custom templates
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Ensuring anonymity while maintaining accountability
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Built configurable privacy controls with role-based visibility
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Teams can switch between anonymous feedback and attributed
                  comments as needed
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Conclusion</h2>

        <div className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 text-white p-8 rounded-lg">
          <p className="text-lg mb-4">
            The Agile Retrospective Tool demonstrates how purpose-built software
            can significantly enhance team processes and communication. By
            providing a dedicated space for reflection and improvement, the
            platform helps teams transform retrospectives from a ceremonial
            meeting into a powerful driver of continuous improvement.
          </p>
          <p className="text-lg mb-4">
            The tool&apos;s success lies in its focus on the specific needs of
            agile teams: structured collaboration, action tracking, and
            integration with existing work management systems. By addressing
            these needs in a cohesive platform, it removes barriers to effective
            retrospectives.
          </p>
          <p className="text-lg">
            As organizations continue to adopt agile methodologies, especially
            in distributed environments, specialized tools like this will play
            an increasingly vital role in facilitating productive team
            interactions and driving meaningful improvements.
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
              Enhanced Analytics
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Developing advanced analytics dashboards to track team improvement
              trends, sentiment analysis, and retrospective effectiveness over
              time.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Additional Integrations
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Expanding integration capabilities to include JIRA, GitHub,
              GitLab, and other popular project management and development
              tools.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              AI-Assisted Facilitation
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Implementing AI features to help identify common themes in
              feedback, suggest action items, and provide retrospective
              facilitation guidance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgileRetroContent;
