// components/projects/JobFinderContent.tsx
import React from "react";
import {
  BriefcaseIcon,
  MagnifyingGlassIcon,
  UserIcon,
  GlobeAltIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const JobFinderContent: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Demo Screenshots Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Demo Screenshots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <BriefcaseIcon className="h-16 w-16 text-blue-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Job Listings Dashboard
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <MagnifyingGlassIcon className="h-16 w-16 text-green-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Advanced Search Interface
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <UserIcon className="h-16 w-16 text-purple-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              User Profile Management
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <ComputerDesktopIcon className="h-16 w-16 text-orange-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Responsive Mobile Design
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
            System Design
          </h3>
          <div className="space-y-4">
            <p className="dark:text-gray-200">
              JobFinder is built with a modern tech stack focused on performance
              and user experience:
            </p>
            <ul className="list-disc pl-5 space-y-2 dark:text-gray-200">
              <li>
                <span className="font-medium">Frontend Layer</span>: React with
                TailwindCSS for responsive design
              </li>
              <li>
                <span className="font-medium">State Management</span>: Redux for
                centralized application state
              </li>
              <li>
                <span className="font-medium">Routing</span>: React Router for
                seamless navigation
              </li>
              <li>
                <span className="font-medium">Backend Services</span>: Node.js
                with Express for API handling
              </li>
              <li>
                <span className="font-medium">External API Integration</span>:
                Adzuna API for comprehensive job listings
              </li>
              <li>
                <span className="font-medium">Deployment</span>: Vercel for
                continuous deployment and optimal performance
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
                Case Study: Career Transition Success
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A group of professionals seeking to transition from traditional
                industries to tech roles used JobFinder to identify relevant
                opportunities.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  These professionals needed to filter opportunities that valued
                  transferable skills and were open to career changers without
                  direct experience.
                </p>

                <h4 className="font-medium dark:text-white">Solution:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  JobFinder&apos;s advanced filtering allowed them to identify
                  companies with career transition programs and entry-level tech
                  positions suitable for their backgrounds.
                </p>

                <h4 className="font-medium dark:text-white">Results:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  78% of participants found relevant positions within 8 weeks,
                  with 42% successfully transitioning to new tech roles within 6
                  months.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full">
                <UserIcon className="h-24 w-24 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Case Study: Remote Work Opportunities
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A community of digital nomads used JobFinder to discover
                remote-first companies and location-independent positions.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Finding genuine remote positions that offered full flexibility
                  and weren&apos;t limited by geographic restrictions.
                </p>

                <h4 className="font-medium dark:text-white">Solution:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  JobFinder&apos;s specialized remote work filters and company
                  verification system helped identify truly remote-friendly
                  employers.
                </p>

                <h4 className="font-medium dark:text-white">Results:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The community saw a 65% increase in suitable job matches and a
                  40% reduction in time spent sorting through misleading
                  &quot;remote&quot; listings.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-full">
                <GlobeAltIcon className="h-24 w-24 text-green-600 dark:text-green-400" />
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Use Case 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Recent Graduates
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              New graduates use JobFinder to discover entry-level positions that
              match their qualifications and career aspirations.
            </p>
            <div className="flex justify-end">
              <UserIcon className="h-16 w-16 text-blue-500 dark:text-blue-400" />
            </div>
          </div>

          {/* Use Case 2 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Career Transitions
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Professionals looking to change industries use JobFinder to
              identify transferable skills and relevant opportunities.
            </p>
            <div className="flex justify-end">
              <BriefcaseIcon className="h-16 w-16 text-purple-500 dark:text-purple-400" />
            </div>
          </div>

          {/* Use Case 3 */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Remote Work Seekers
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Digital nomads and remote workers use JobFinder to discover
              location-independent opportunities worldwide.
            </p>
            <div className="flex justify-end">
              <GlobeAltIcon className="h-16 w-16 text-amber-500 dark:text-amber-400" />
            </div>
          </div>

          {/* Use Case 4 */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Tech Industry Job Hunters
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Tech professionals use JobFinder&apos;s specialized filters to
              find positions matching their specific skills and technology stack
              preferences.
            </p>
            <div className="flex justify-end">
              <ComputerDesktopIcon className="h-16 w-16 text-emerald-500 dark:text-emerald-400" />
            </div>
          </div>

          {/* Use Case 5 */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              International Job Seekers
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Professionals looking for international opportunities use
              JobFinder to identify positions with visa sponsorship and
              relocation benefits.
            </p>
            <div className="flex justify-end">
              <GlobeAltIcon className="h-16 w-16 text-red-500 dark:text-red-400" />
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
                  Integrating multiple job APIs with inconsistent data formats
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Developed a unified data adapter layer with provider-specific
                  parsers
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Seamless integration of diverse job sources with standardized
                  frontend consumption
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Creating effective search algorithms for job relevance
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Implemented weighted keyword matching and skill correlation
                  algorithms
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Improved search relevance by 25% compared to standard keyword
                  matching
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Maintaining UI/UX consistency across devices
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Utilized TailwindCSS with custom design system and component
                  library
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Achieved seamless responsive experience across all devices
                  with 40% faster development time
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Optimizing performance with large job datasets
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Implemented virtualized lists and pagination with client-side
                  caching
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Reduced loading times by 60% and improved scroll performance
                  on mobile devices
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
            JobFinder represents a significant advancement in how job seekers
            discover opportunities. By focusing on user experience, intelligent
            filtering, and robust technology, we&apos;ve created a platform that
            makes the job hunting process more efficient and effective.
          </p>
          <p className="text-lg mb-4">
            The project demonstrates the power of modern web technologies when
            applied to solving real-world problems. Through thoughtful design
            and engineering, we&apos;ve transformed a traditionally frustrating
            process into an intuitive, empowering experience.
          </p>
          <p className="text-lg">
            As the job market continues to evolve, particularly with the rise of
            remote work and career transitions, tools like JobFinder will play
            an increasingly vital role in connecting talent with opportunity.
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
              AI-Powered Job Matching
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Implementing machine learning algorithms to match candidates with
              positions based on skill compatibility and career progression.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Skills Assessment Integration
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Adding integrated skills assessments to help job seekers validate
              their abilities and stand out to employers.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Personalized Career Recommendations
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Developing a recommendation engine that suggests career paths and
              learning opportunities based on user profiles and market trends.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobFinderContent;
