// components/projects/StudyGlobalContent.tsx
import React from "react";
import {
  GlobeAltIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  MapIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const StudyGlobalContent: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Demo Screenshots Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          International Student Platform Showcase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 aspect-video rounded-lg flex items-center justify-center">
            <AcademicCapIcon className="h-16 w-16 text-blue-600" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              University Matching
            </span>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 aspect-video rounded-lg flex items-center justify-center">
            <CurrencyDollarIcon className="h-16 w-16 text-green-600" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Cost Calculator
            </span>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 aspect-video rounded-lg flex items-center justify-center">
            <DocumentTextIcon className="h-16 w-16 text-purple-600" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Document Management
            </span>
          </div>
          <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 aspect-video rounded-lg flex items-center justify-center">
            <UserGroupIcon className="h-16 w-16 text-orange-600" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Community Support
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
            International Education Technology Platform Design
          </h3>
          <div className="space-y-4">
            <p className="dark:text-gray-200">
              StudyGlobal leverages modern web technologies for a comprehensive
              international student experience:
            </p>
            <ul className="list-disc pl-5 space-y-2 dark:text-gray-200">
              <li>
                <span className="font-medium">Frontend Framework</span>: Next.js
                14 with App Router for optimal performance and SEO
              </li>
              <li>
                <span className="font-medium">Type Safety</span>: TypeScript for
                comprehensive type safety and developer experience
              </li>
              <li>
                <span className="font-medium">Database</span>: MongoDB with
                flexible schema design for diverse international data
              </li>
              <li>
                <span className="font-medium">Content Management</span>:
                Contentful CMS for multi-country content management
              </li>
              <li>
                <span className="font-medium">Payment Processing</span>: Stripe
                Connect for secure international payments
              </li>
              <li>
                <span className="font-medium">Cloud Storage</span>: AWS S3 with
                CloudFront for global document delivery
              </li>
              <li>
                <span className="font-medium">Search Engine</span>: Algolia for
                fast university and service discovery
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Student Success Stories
        </h2>

        {/* Case Study 1 */}
        <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Case Study: Indian Students in Canada
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                2,500+ Indian students used StudyGlobal to navigate the complete
                process of studying in Canada, from research to post-graduation
                transitions.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Students struggled with complex visa processes, finding
                  reliable housing, understanding healthcare systems, and
                  navigating banking requirements.
                </p>

                <h4 className="font-medium dark:text-white">Solution:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Platform&apos;s comprehensive service hub provided
                  step-by-step guidance, verified service providers, and peer
                  mentor connections.
                </p>

                <h4 className="font-medium dark:text-white">Results:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  90% faster settlement process and 60% reduction in common
                  first-year mistakes, with improved academic performance and
                  satisfaction.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full">
                <GlobeAltIcon className="h-24 w-24 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Case Study: University International Offices
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                12 major universities integrated StudyGlobal services to
                supplement their international student support programs.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  University international offices were overwhelmed with
                  practical life guidance requests beyond academic support.
                </p>

                <h4 className="font-medium dark:text-white">Solution:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Universities white-labeled StudyGlobal&apos;s comprehensive
                  student life platform for their incoming international
                  students.
                </p>

                <h4 className="font-medium dark:text-white">Results:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  40% reduction in support requests to international offices and
                  85% improvement in student satisfaction with orientation
                  services.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-6 rounded-full">
                <AcademicCapIcon className="h-24 w-24 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Use Cases */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Real-time Student Support Applications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Use Case 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Essential Services Hub
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Centralized access to banking, insurance, housing, mobile
              services, and other essentials with verified providers and student
              discounts.
            </p>
            <div className="flex justify-end">
              <MapIcon className="h-16 w-16 text-blue-500 dark:text-blue-400" />
            </div>
          </div>

          {/* Use Case 2 */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Cost of Living Calculator
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Interactive calculator with real-time currency conversion, city
              comparisons, and budget planning tools for different study
              destinations.
            </p>
            <div className="flex justify-end">
              <CurrencyDollarIcon className="h-16 w-16 text-green-500 dark:text-green-400" />
            </div>
          </div>

          {/* Use Case 3 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Secure Document Management
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Cloud-based document storage with encryption, easy sharing with
              institutions, and automated reminders for document renewals.
            </p>
            <div className="flex justify-end">
              <DocumentTextIcon className="h-16 w-16 text-purple-500 dark:text-purple-400" />
            </div>
          </div>

          {/* Use Case 4 */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Community & Mentorship
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Connect with local student ambassadors, alumni networks, and peer
              support groups for cultural integration and academic guidance.
            </p>
            <div className="flex justify-end">
              <UserGroupIcon className="h-16 w-16 text-orange-500 dark:text-orange-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Development Challenges and Solutions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          International Education Platform Challenges and Solutions
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
                  Multi-country service integration across different regulatory
                  environments
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Built flexible API gateway with country-specific adapters and
                  compliance layers
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Seamless integration across 15+ countries with automated
                  compliance checking
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Complex university data management with varying international
                  standards
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Developed standardized university data model with flexible
                  attribute mapping
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Unified search across 5,000+ universities with consistent user
                  experience
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Secure document storage and privacy compliance with
                  international laws
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Implemented end-to-end encryption with GDPR and regional
                  privacy compliance
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  100% secure document handling with automatic privacy law
                  compliance
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Real-time currency and cost updates across multiple countries
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Integrated multiple financial APIs with intelligent caching
                  and update scheduling
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Accurate cost calculations with sub-hour currency rate updates
                  globally
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Transforming International Education
        </h2>

        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-600 dark:to-indigo-600 text-white p-8 rounded-lg">
          <p className="text-lg mb-4">
            StudyGlobal bridges the critical gap between academic support and
            practical life guidance for international students. By centralizing
            essential services and community support, the platform creates a
            comprehensive ecosystem that significantly improves the study abroad
            experience.
          </p>
          <p className="text-lg mb-4">
            The platform&apos;s strength lies in its holistic approach to
            international student support, addressing not just academic needs
            but the complete life experience of studying abroad. This
            comprehensive support system can dramatically improve student
            success rates and satisfaction.
          </p>
          <p className="text-lg">
            With integration across 15+ countries and support for 5,000+
            universities, StudyGlobal serves as the digital bridge connecting
            international students to their new academic and cultural homes.
          </p>
        </div>
      </section>

      {/* Future Enhancements */}
      <section>
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          International Education Innovation Roadmap
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              AI-Powered Personalization
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Machine learning algorithms for personalized recommendations on
              universities, services, and opportunities based on student
              profiles.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Virtual Reality Orientation
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Immersive VR campus tours and cultural orientation programs to
              help students prepare before arrival.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Blockchain Credentials
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Blockchain-verified credential system for academic and
              professional certificates with global recognition.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyGlobalContent;
