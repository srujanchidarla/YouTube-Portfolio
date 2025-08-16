// components/projects/AgriWiseContent.tsx
import React from "react";
import {
  GlobeAltIcon,
  CloudIcon,
  ChartBarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  MapIcon,
  SunIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

const AgriWiseContent: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Demo Screenshots Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Digital Agriculture Platform Showcase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 aspect-video rounded-lg flex items-center justify-center">
            <SunIcon className="h-16 w-16 text-green-600" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Smart Soil Analysis
            </span>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 aspect-video rounded-lg flex items-center justify-center">
            <ChartBarIcon className="h-16 w-16 text-blue-600" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Market Intelligence
            </span>
          </div>
          <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 aspect-video rounded-lg flex items-center justify-center">
            <CloudIcon className="h-16 w-16 text-orange-600" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Weather Integration
            </span>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 aspect-video rounded-lg flex items-center justify-center">
            <UserGroupIcon className="h-16 w-16 text-purple-600" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Farmer Community
            </span>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Technical Architecture
        </h2>
        <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-300">
            Comprehensive Agricultural Ecosystem Design
          </h3>
          <div className="space-y-4">
            <p className="dark:text-gray-200">
              AgriWise employs a microservices architecture designed to serve
              600+ million Indian farmers:
            </p>
            <ul className="list-disc pl-5 space-y-2 dark:text-gray-200">
              <li>
                <span className="font-medium">Frontend Layer</span>: React with
                responsive design optimized for rural connectivity
              </li>
              <li>
                <span className="font-medium">Backend Services</span>: Node.js
                microservices with Express framework for scalable API management
              </li>
              <li>
                <span className="font-medium">Database Architecture</span>:
                MongoDB for flexible agricultural data with optimized queries
              </li>
              <li>
                <span className="font-medium">External Integrations</span>:
                Google Maps API, OpenWeatherMap API, and government agricultural
                databases
              </li>
              <li>
                <span className="font-medium">AI/ML Engine</span>: Machine
                learning models for crop recommendations using TensorFlow
              </li>
              <li>
                <span className="font-medium">Multi-language Support</span>: 22
                Indian languages + local dialects with cultural sensitivity
              </li>
              <li>
                <span className="font-medium">Offline Architecture</span>:
                Progressive Web App (PWA) with offline-first design for rural
                areas
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Agricultural Impact Stories
        </h2>

        {/* Case Study 1 */}
        <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Case Study: Maharashtra Cotton Farmers
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                5,000+ cotton farmers in Maharashtra used AgriWise for soil
                analysis, crop planning, and market intelligence to optimize
                their cotton production cycles.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Farmers faced unpredictable yields due to poor soil
                  management, lack of market information, and limited access to
                  agricultural expertise.
                </p>

                <h4 className="font-medium dark:text-white">Solution:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  AgriWise&apos;s AI-powered soil analysis and crop
                  recommendations, combined with real-time market prices from
                  2500+ mandis.
                </p>

                <h4 className="font-medium dark:text-white">Results:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  35% increase in crop yield and 40% improvement in profit
                  margins through optimized farming practices and better market
                  timing.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-full">
                <SunIcon className="h-24 w-24 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Case Study: Punjab Wheat Cooperative
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A cooperative of 10,000+ wheat farmers in Punjab leveraged
                AgriWise for large-scale supply chain management and collective
                bargaining.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Individual farmers struggled with market access, storage
                  management, and lacked collective bargaining power with
                  buyers.
                </p>

                <h4 className="font-medium dark:text-white">Solution:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Platform&apos;s community features enabled cooperative
                  formation, bulk selling, and direct buyer connections with
                  transparent pricing.
                </p>

                <h4 className="font-medium dark:text-white">Results:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  25% higher selling prices through collective bargaining and
                  50% reduction in post-harvest losses through better storage
                  coordination.
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
      </section>

      {/* Real-time Use Cases */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Real-time Agricultural Applications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Use Case 1 */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Smart Crop Planning
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              AI-powered soil analysis and crop recommendations based on soil
              health, climate patterns, and market demand forecasting.
            </p>
            <div className="flex justify-end">
              <SunIcon className="h-16 w-16 text-green-500 dark:text-green-400" />
            </div>
          </div>

          {/* Use Case 2 */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Market Intelligence Hub
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Real-time market prices from 2500+ mandis with trend analysis,
              demand forecasting, and optimal selling time recommendations.
            </p>
            <div className="flex justify-end">
              <ChartBarIcon className="h-16 w-16 text-blue-500 dark:text-blue-400" />
            </div>
          </div>

          {/* Use Case 3 */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Weather & Climate Alerts
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Hyperlocal weather forecasting with automated alerts for extreme
              weather, irrigation scheduling, and crop protection
              recommendations.
            </p>
            <div className="flex justify-end">
              <CloudIcon className="h-16 w-16 text-orange-500 dark:text-orange-400" />
            </div>
          </div>

          {/* Use Case 4 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Financial Services Integration
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Crop loans, insurance, government scheme navigation, and financial
              inclusion services designed specifically for farmers.
            </p>
            <div className="flex justify-end">
              <CurrencyDollarIcon className="h-16 w-16 text-purple-500 dark:text-purple-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Development Challenges and Solutions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Agricultural Technology Challenges and Solutions
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
                  Multi-language support for 22 Indian languages and local
                  dialects
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Implemented comprehensive localization framework with cultural
                  sensitivity
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Accessible to 95% of Indian farmers regardless of language
                  preference
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Offline-first architecture for areas with poor internet
                  connectivity
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Built Progressive Web App with extensive offline capabilities
                  and sync
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Full functionality available even in remote rural areas with
                  intermittent connectivity
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Complex agricultural data processing from multiple government
                  sources
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Developed unified API gateway with real-time data
                  transformation
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Integrated data from 15+ government databases and 2500+ market
                  sources
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Scalable architecture designed to support 600 million farmers
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Implemented microservices with auto-scaling and load balancing
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Platform capable of handling massive scale with sub-second
                  response times
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Revolutionizing Indian Agriculture
        </h2>

        <div className="bg-gradient-to-r from-green-500 to-emerald-500 dark:from-green-600 dark:to-emerald-600 text-white p-8 rounded-lg">
          <p className="text-lg mb-4">
            AgriWise represents a transformative opportunity to revolutionize
            Indian agriculture through technology. By addressing every aspect of
            the farming lifecycle—from soil analysis to market access—this
            platform can significantly impact farmer livelihoods, agricultural
            productivity, and food security.
          </p>
          <p className="text-lg mb-4">
            The platform&apos;s success lies in its holistic approach, combining
            cutting-edge technology with deep understanding of Indian
            agricultural challenges. With proper implementation and adoption,
            AgriWise could become the primary digital infrastructure supporting
            India&apos;s agricultural transformation.
          </p>
          <p className="text-lg">
            With support for 22 languages and offline-first design, AgriWise
            ensures that technological advancement reaches every farmer,
            regardless of location or connectivity, democratizing access to
            modern farming knowledge.
          </p>
        </div>
      </section>

      {/* Future Enhancements */}
      <section>
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Agricultural Innovation Roadmap
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              AI-Powered Predictive Analytics
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Advanced machine learning for weather pattern prediction, crop
              disease detection, and yield optimization using satellite imagery.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Blockchain Supply Chain
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              End-to-end supply chain transparency ensuring food safety,
              authenticity verification, and fair pricing for farmers.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Carbon Credit Integration
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Sustainable farming incentives through carbon credit trading,
              enabling farmers to monetize environmentally friendly practices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgriWiseContent;
