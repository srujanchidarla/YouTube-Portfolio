// components/projects/WeatherWiseContent.tsx
import React from "react";
import {
  CloudIcon,
  MapIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  UserGroupIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const WeatherWiseContent: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Demo Screenshots Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Demo Screenshots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <CloudIcon className="h-16 w-16 text-blue-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Weather Dashboard Screenshot
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <MapIcon className="h-16 w-16 text-green-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Interactive Map View
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <DevicePhoneMobileIcon className="h-16 w-16 text-purple-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Mobile Responsive Design
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <ChartBarIcon className="h-16 w-16 text-orange-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Weather Trends Analytics
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
              WeatherWise follows a modern microservices architecture with the
              following components:
            </p>
            <ul className="list-disc pl-5 space-y-2 dark:text-gray-200">
              <li>
                <span className="font-medium">Frontend Layer</span>: React.js
                application with Redux for state management
              </li>
              <li>
                <span className="font-medium">API Gateway</span>: Spring Cloud
                Gateway for routing and load balancing
              </li>
              <li>
                <span className="font-medium">Weather Service</span>: Spring
                Boot microservice for processing weather data
              </li>
              <li>
                <span className="font-medium">Geolocation Service</span>: Spring
                Boot microservice for handling location data
              </li>
              <li>
                <span className="font-medium">User Service</span>: Spring Boot
                microservice for user preferences and authentication
              </li>
              <li>
                <span className="font-medium">Caching Layer</span>: Redis for
                caching frequent weather data requests
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
                Case Study: Emergency Response Planning
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A county emergency management department uses WeatherWise to
                monitor severe weather conditions and plan emergency responses
                accordingly.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The department needed real-time accurate weather data across
                  multiple locations to make informed decisions about emergency
                  resource allocation.
                </p>

                <h4 className="font-medium dark:text-white">Solution:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  WeatherWise&apos;s interactive map and customizable alerts
                  allowed them to visualize weather patterns and receive
                  immediate notifications for severe weather events.
                </p>

                <h4 className="font-medium dark:text-white">Results:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The department reduced response time by 27% and improved
                  resource allocation efficiency by 35% during severe weather
                  events.
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
                Case Study: Agricultural Planning
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A farming cooperative implemented WeatherWise to optimize
                planting schedules and irrigation systems based on weather
                forecasts.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The cooperative needed accurate precipitation forecasts and
                  temperature trends to make critical farming decisions.
                </p>

                <h4 className="font-medium dark:text-white">Solution:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  WeatherWise&apos;s 5-day forecast and historical weather data
                  analysis provided them with the insights needed to optimize
                  their agricultural operations.
                </p>

                <h4 className="font-medium dark:text-white">Results:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The cooperative reduced water usage by 22% and increased crop
                  yield by 15% through more informed decision-making.
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Use Case 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Outdoor Event Planning
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Event planners use WeatherWise to monitor weather conditions for
              outdoor venues, making informed decisions about setup and
              contingency plans.
            </p>
            <div className="flex justify-end">
              <DevicePhoneMobileIcon className="h-16 w-16 text-blue-500 dark:text-blue-400" />
            </div>
          </div>

          {/* Use Case 2 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Travel Planning
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Travelers use WeatherWise to check weather conditions at their
              destinations, helping them pack appropriately and plan activities.
            </p>
            <div className="flex justify-end">
              <MapIcon className="h-16 w-16 text-purple-500 dark:text-purple-400" />
            </div>
          </div>

          {/* Use Case 3 */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Construction Management
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Construction managers use WeatherWise to schedule
              weather-sensitive activities like concrete pouring and exterior
              painting.
            </p>
            <div className="flex justify-end">
              <ChartBarIcon className="h-16 w-16 text-amber-500 dark:text-amber-400" />
            </div>
          </div>

          {/* Use Case 4 */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Daily Commute Planning
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Commuters use WeatherWise to check morning weather conditions,
              helping them decide whether to walk, bike, or take public
              transportation.
            </p>
            <div className="flex justify-end">
              <CloudIcon className="h-16 w-16 text-emerald-500 dark:text-emerald-400" />
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
                  API rate limiting with multiple weather data providers
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Implemented Redis caching with intelligent TTL based on data
                  volatility
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Reduced API calls by 65% while maintaining data freshness
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Accurate geolocation with privacy considerations
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Created a hybrid approach using IP-based fallback with opt-in
                  precise location
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Balanced privacy concerns while providing accurate local
                  weather data
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Handling map rendering performance with many weather markers
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Implemented marker clustering and viewport-based loading
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Improved map performance by 40% on mobile devices
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Inconsistent weather data formats from different providers
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Created a unified data adapter pattern with provider-specific
                  parsers
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Standardized data format for frontend consumption with easy
                  provider swapping
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Conclusion</h2>

        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 text-white p-8 rounded-lg">
          <p className="text-lg mb-4">
            WeatherWise demonstrates how modern web technologies can transform
            weather data into an accessible, useful, and engaging user
            experience. By focusing on performance, accuracy, and user-centered
            design, the application provides practical value across multiple use
            cases.
          </p>
          <p className="text-lg mb-4">
            The project showcases effective integration of multiple APIs,
            responsive design principles, and thoughtful UX considerations that
            prioritize both functionality and user privacy.
          </p>
          <p className="text-lg">
            As weather patterns become increasingly unpredictable due to climate
            change, tools like WeatherWise will continue to grow in importance,
            helping individuals and organizations make better-informed decisions
            in response to changing conditions.
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
              Weather Alerts API
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Implementing push notifications for severe weather alerts and
              customizable alert thresholds.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Machine Learning Forecasts
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Implementing ML algorithms to improve forecast accuracy based on
              historical weather patterns.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Community Weather Reports
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Adding user-submitted weather reports to complement official data
              and improve hyperlocal accuracy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeatherWiseContent;
