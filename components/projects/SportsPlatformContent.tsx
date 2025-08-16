// components/projects/SportsPlatformContent.tsx
import React from "react";
import {
  MapIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  TrophyIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const SportsPlatformContent: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Demo Screenshots Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Sports & Fitness Platform Showcase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 aspect-video rounded-lg flex items-center justify-center">
            <MapIcon className="h-16 w-16 text-emerald-600" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Venue Discovery
            </span>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 aspect-video rounded-lg flex items-center justify-center">
            <UserGroupIcon className="h-16 w-16 text-blue-600" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Trainer Matching
            </span>
          </div>
          <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 aspect-video rounded-lg flex items-center justify-center">
            <CalendarDaysIcon className="h-16 w-16 text-orange-600" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Booking System
            </span>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 aspect-video rounded-lg flex items-center justify-center">
            <ChartBarIcon className="h-16 w-16 text-purple-600" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Fitness Tracking
            </span>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Technical Architecture
        </h2>
        <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-emerald-700 dark:text-emerald-300">
            Dual-Platform Sports & Fitness Ecosystem Design
          </h3>
          <div className="space-y-4">
            <p className="dark:text-gray-200">
              Sports Platform combines FitConnect and TrainHub into a unified
              ecosystem for active lifestyles:
            </p>
            <ul className="list-disc pl-5 space-y-2 dark:text-gray-200">
              <li>
                <span className="font-medium">Frontend Framework</span>: Next.js
                monorepo with shared component library and utilities
              </li>
              <li>
                <span className="font-medium">Backend Services</span>: Node.js
                microservices with API gateway pattern for business logic
              </li>
              <li>
                <span className="font-medium">Database Architecture</span>:
                MongoDB for user data and PostgreSQL for transactional data
              </li>
              <li>
                <span className="font-medium">Real-time Features</span>:
                Socket.io for live chat, notifications, and booking updates
              </li>
              <li>
                <span className="font-medium">Location Services</span>: Google
                Maps API for venue discovery and distance calculations
              </li>
              <li>
                <span className="font-medium">Payment Processing</span>: Stripe
                Connect for multi-party payment handling
              </li>
              <li>
                <span className="font-medium">Caching Layer</span>: Redis for
                session management and performance optimization
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Platform Components */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Dual Platform Components
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* FitConnect */}
          <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <MapIcon className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mr-3" />
              <h3 className="text-xl font-semibold dark:text-white">
                FitConnect
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Comprehensive venue booking and game coordination system for
              sports facilities and team activities.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center dark:text-gray-200">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                Venue discovery with real-time availability
              </li>
              <li className="flex items-center dark:text-gray-200">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                Sports community and game coordination
              </li>
              <li className="flex items-center dark:text-gray-200">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                Team formation and tournament organization
              </li>
              <li className="flex items-center dark:text-gray-200">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                Facility management tools for owners
              </li>
            </ul>
          </div>

          {/* TrainHub */}
          <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <UserGroupIcon className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold dark:text-white">
                TrainHub
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Advanced trainer discovery and session management platform for
              personalized fitness journeys.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center dark:text-gray-200">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Trainer matching with skill-based filtering
              </li>
              <li className="flex items-center dark:text-gray-200">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Session booking and progress tracking
              </li>
              <li className="flex items-center dark:text-gray-200">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Comprehensive fitness tools and analytics
              </li>
              <li className="flex items-center dark:text-gray-200">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Professional trainer business management
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Active Lifestyle Success Stories
        </h2>

        {/* Case Study 1 */}
        <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Case Study: Urban Tennis Community
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                500+ tennis players in metropolitan areas used FitConnect to
                discover courts, find practice partners, and organize
                tournaments.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Players struggled to find available courts, practice partners
                  of similar skill levels, and lacked organized competitive
                  opportunities.
                </p>

                <h4 className="font-medium dark:text-white">Solution:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  FitConnect&apos;s venue discovery, skill-based matching, and
                  tournament organization features created a thriving tennis
                  community.
                </p>

                <h4 className="font-medium dark:text-white">Results:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  300% increase in court utilization, 85% of players found
                  regular practice partners, and 12 monthly tournaments
                  organized.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 p-6 rounded-full">
                <TrophyIcon className="h-24 w-24 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Case Study: Personal Trainer Network
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                200+ certified personal trainers used TrainHub to build their
                client base and manage their fitness business efficiently.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Trainers struggled with client acquisition, schedule
                  management, and lacked tools for tracking client progress and
                  business growth.
                </p>

                <h4 className="font-medium dark:text-white">Solution:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  TrainHub&apos;s comprehensive platform provided client
                  matching, session management, progress tracking, and business
                  analytics.
                </p>

                <h4 className="font-medium dark:text-white">Results:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  150% increase in trainer income, 90% client retention rate,
                  and 75% reduction in administrative overhead.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full">
                <HeartIcon className="h-24 w-24 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Use Cases */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Real-time Sports & Fitness Applications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Use Case 1 */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Venue Discovery & Booking
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Real-time venue availability with geolocation search, amenity
              filtering, and instant booking confirmation for sports facilities.
            </p>
            <div className="flex justify-end">
              <MapIcon className="h-16 w-16 text-emerald-500 dark:text-emerald-400" />
            </div>
          </div>

          {/* Use Case 2 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Trainer Matching & Sessions
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Advanced trainer discovery with skill-based filtering, session
              booking, and integrated progress tracking for personalized fitness
              journeys.
            </p>
            <div className="flex justify-end">
              <UserGroupIcon className="h-16 w-16 text-blue-500 dark:text-blue-400" />
            </div>
          </div>

          {/* Use Case 3 */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Community & Game Coordination
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Sports community features for team formation, game organization,
              tournaments, and league management with automated scheduling.
            </p>
            <div className="flex justify-end">
              <TrophyIcon className="h-16 w-16 text-orange-500 dark:text-orange-400" />
            </div>
          </div>

          {/* Use Case 4 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Fitness Tools & Analytics
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Comprehensive fitness tracking with progress analytics, goal
              setting, workout planning, and performance insights for continuous
              improvement.
            </p>
            <div className="flex justify-end">
              <ChartBarIcon className="h-16 w-16 text-purple-500 dark:text-purple-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Development Challenges and Solutions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Sports Platform Challenges and Solutions
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
                  Impact
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-zinc-800 divide-y divide-gray-200 dark:divide-zinc-700">
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Dual-platform architecture management with shared components
                  and services
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Built Next.js monorepo with modular architecture and shared
                  component library
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  70% code reusability with consistent user experience across
                  both platforms
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Real-time booking conflict resolution across multiple time
                  zones
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Implemented distributed locking mechanism with automated
                  conflict detection
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Zero double-bookings with real-time availability updates
                  globally
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Geolocation-based search optimization for fast venue discovery
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Created spatial indexing with intelligent caching and
                  proximity algorithms
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Sub-second venue search results with accurate distance
                  calculations
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Multi-stakeholder user experience design for different user
                  types
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Developed role-based interfaces with personalized dashboards
                  and workflows
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  95% user satisfaction across venue owners, trainers, and
                  fitness enthusiasts
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Revolutionizing Active Lifestyles
        </h2>

        <div className="bg-gradient-to-r from-emerald-500 to-green-500 dark:from-emerald-600 dark:to-green-600 text-white p-8 rounded-lg">
          <p className="text-lg mb-4">
            The Sports & Fitness Platform creates a comprehensive ecosystem that
            addresses every aspect of active lifestyle management. By combining
            venue booking with trainer discovery, the platform maximizes user
            engagement while creating new business opportunities for fitness
            professionals and venue owners.
          </p>
          <p className="text-lg mb-4">
            The platform&apos;s strength lies in its integrated approach, where
            users can seamlessly transition from discovering venues to finding
            trainers to tracking their fitness journey. This holistic experience
            creates strong user retention and network effects that benefit all
            stakeholders.
          </p>
          <p className="text-lg">
            With real-time booking systems and AI-powered matching, the platform
            ensures optimal facility utilization while helping individuals
            achieve their fitness goals through personalized guidance and
            community support.
          </p>
        </div>
      </section>

      {/* Future Enhancements */}
      <section>
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Sports & Fitness Innovation Roadmap
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              AI-Powered Fitness Recommendations
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Machine learning algorithms for personalized workout
              recommendations, trainer matching, and performance optimization
              based on user goals.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Wearable Device Integration
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Seamless integration with fitness trackers and smartwatches for
              automatic progress tracking and real-time health insights.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Virtual Training Platform
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Live streaming capabilities for virtual training sessions,
              interactive fitness classes, and remote coaching experiences.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SportsPlatformContent;
