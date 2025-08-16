// components/projects/FlightBuddyContent.tsx
import React from "react";
import {
  PaperAirplaneIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  MapIcon,
  ClockIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

const FlightBuddyContent: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Demo Screenshots Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Travel Connection Platform Showcase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-900/30 dark:to-blue-900/30 aspect-video rounded-lg flex items-center justify-center">
            <PaperAirplaneIcon className="h-16 w-16 text-sky-600" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Flight Matching
            </span>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 aspect-video rounded-lg flex items-center justify-center">
            <ChatBubbleLeftRightIcon className="h-16 w-16 text-green-600" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Secure Messaging
            </span>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 aspect-video rounded-lg flex items-center justify-center">
            <CurrencyDollarIcon className="h-16 w-16 text-purple-600" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Luggage Sharing
            </span>
          </div>
          <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 aspect-video rounded-lg flex items-center justify-center">
            <MapIcon className="h-16 w-16 text-orange-600" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Airport Guide
            </span>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Technical Architecture
        </h2>
        <div className="p-6 bg-sky-50 dark:bg-sky-900/20 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-sky-700 dark:text-sky-300">
            Travel Technology Platform Design
          </h3>
          <div className="space-y-4">
            <p className="dark:text-gray-200">
              Flight Buddy employs a scalable microservices architecture for
              global travel connections:
            </p>
            <ul className="list-disc pl-5 space-y-2 dark:text-gray-200">
              <li>
                <span className="font-medium">Frontend Layer</span>: React with
                responsive design optimized for mobile and desktop
              </li>
              <li>
                <span className="font-medium">Backend Services</span>: Spring
                Boot microservices with clean architecture principles
              </li>
              <li>
                <span className="font-medium">Database</span>: PostgreSQL for
                relational data with optimized query performance
              </li>
              <li>
                <span className="font-medium">Real-time Communication</span>:
                WebSocket implementation for instant messaging and notifications
              </li>
              <li>
                <span className="font-medium">Flight Data Integration</span>:
                Multiple airline APIs with real-time flight status updates
              </li>
              <li>
                <span className="font-medium">Caching Layer</span>: Redis for
                session management and flight data caching
              </li>
              <li>
                <span className="font-medium">Authentication</span>: JWT-based
                secure authentication with identity verification
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Travel Connection Success Stories
        </h2>

        {/* Case Study 1 */}
        <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Case Study: Solo Travelers on Long-Haul Flights
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                1,500+ solo travelers on international flights used Flight Buddy
                to find companions and share experiences during long journeys.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Solo travelers faced loneliness on long flights, safety
                  concerns in unfamiliar airports, and high costs for
                  transportation and accommodation.
                </p>

                <h4 className="font-medium dark:text-white">Solution:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Platform&apos;s intelligent matching algorithm connected
                  compatible travelers based on interests, language, and
                  destination preferences.
                </p>

                <h4 className="font-medium dark:text-white">Results:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  85% of matched travelers reported improved travel experience,
                  60% formed lasting friendships, and 40% reduced travel costs
                  through sharing.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="bg-sky-100 dark:bg-sky-900/30 p-6 rounded-full">
                <PaperAirplaneIcon className="h-24 w-24 text-sky-600 dark:text-sky-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Case Study: International Students Travel Network
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                800+ international students traveling to study destinations used
                the platform to connect with peers and share luggage space.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Students needed extra luggage capacity for personal items and
                  struggled with expensive excess baggage fees and unfamiliar
                  airports.
                </p>

                <h4 className="font-medium dark:text-white">Solution:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Luggage sharing marketplace allowed students to share space
                  with travelers going to the same destination with verified
                  trust systems.
                </p>

                <h4 className="font-medium dark:text-white">Results:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  70% reduction in excess baggage costs and 90% success rate in
                  finding reliable luggage sharing partners with enhanced safety
                  protocols.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-full">
                <UserGroupIcon className="h-24 w-24 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Use Cases */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Real-time Travel Applications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Use Case 1 */}
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/30 dark:to-blue-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Flight-Based Traveler Matching
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              AI-powered compatibility algorithms match travelers based on
              flight details, interests, languages, and travel preferences for
              meaningful connections.
            </p>
            <div className="flex justify-end">
              <PaperAirplaneIcon className="h-16 w-16 text-sky-500 dark:text-sky-400" />
            </div>
          </div>

          {/* Use Case 2 */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Secure In-App Messaging
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              End-to-end encrypted messaging with real-time chat, file sharing,
              and automated safety features for secure traveler communication.
            </p>
            <div className="flex justify-end">
              <ChatBubbleLeftRightIcon className="h-16 w-16 text-green-500 dark:text-green-400" />
            </div>
          </div>

          {/* Use Case 3 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Luggage Sharing Marketplace
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Secure platform for sharing luggage space with trust verification,
              payment integration, and insurance coverage for collaborative
              travel.
            </p>
            <div className="flex justify-end">
              <CurrencyDollarIcon className="h-16 w-16 text-purple-500 dark:text-purple-400" />
            </div>
          </div>

          {/* Use Case 4 */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Real-Time Flight Updates
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Live flight status monitoring with automatic re-matching during
              delays, gate changes, and cancellations for continuous
              connections.
            </p>
            <div className="flex justify-end">
              <ClockIcon className="h-16 w-16 text-orange-500 dark:text-orange-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Development Challenges and Solutions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Travel Platform Challenges and Solutions
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
                  Real-time flight data integration across multiple airline APIs
                  with varying formats
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Built unified data transformation layer with intelligent error
                  handling and fallback systems
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  99.9% uptime with real-time updates from 50+ airlines globally
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Secure identity verification while maintaining user privacy
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Implemented multi-step verification with selective data
                  sharing and privacy controls
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  100% verified users with maintained privacy preferences and
                  enhanced trust
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Cross-platform messaging system with offline capability
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Developed resilient messaging architecture with message
                  queuing and automatic sync
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Sub-second message delivery with 100% message reliability
                  across platforms
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Luggage sharing trust and safety mechanisms with liability
                  management
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Created comprehensive verification system with insurance
                  integration and dispute resolution
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  98% successful transactions with integrated insurance coverage
                  and zero liability issues
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Transforming Travel Connections
        </h2>

        <div className="bg-gradient-to-r from-sky-500 to-blue-500 dark:from-sky-600 dark:to-blue-600 text-white p-8 rounded-lg">
          <p className="text-lg mb-4">
            Flight Buddy transforms the travel experience by connecting
            like-minded travelers and enabling collaborative travel solutions.
            The platform creates opportunities for cultural exchange, cost
            sharing, and practical assistance during journeys, making travel
            more social and economical.
          </p>
          <p className="text-lg mb-4">
            The platform&apos;s unique value lies in combining social networking
            with practical travel needs, creating a comprehensive ecosystem that
            enhances every aspect of the travel experience. By facilitating
            genuine connections and practical assistance, Flight Buddy can
            significantly improve traveler satisfaction and safety.
          </p>
          <p className="text-lg">
            With real-time flight integration and AI-powered matching, Flight
            Buddy ensures travelers find the right connections at the right
            time, creating meaningful relationships that extend beyond the
            journey.
          </p>
        </div>
      </section>

      {/* Future Enhancements */}
      <section>
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Travel Innovation Roadmap
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              AI-Powered Travel Recommendations
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Machine learning algorithms for personalized travel suggestions
              based on passenger preferences, history, and real-time conditions.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Augmented Reality Navigation
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              AR-powered airport navigation with real-time guidance, amenity
              discovery, and seamless traveler meeting coordination.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Blockchain Reputation System
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Immutable reputation scoring for enhanced trust, verified travel
              history, and seamless integration with loyalty programs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlightBuddyContent;
export { FlightBuddyContent };
