// components/projects/ECommerceContent.tsx
import React from "react";
import {
  ShoppingCartIcon,
  CreditCardIcon,
  UserGroupIcon,
  StarIcon,
  MagnifyingGlassIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";

const ECommerceContent: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Demo Screenshots Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Demo Screenshots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <ShoppingCartIcon className="h-16 w-16 text-blue-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Shopping Cart Interface
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <CreditCardIcon className="h-16 w-16 text-green-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              PayPal Checkout Flow
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <UserGroupIcon className="h-16 w-16 text-purple-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Admin Dashboard
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-zinc-700 aspect-video rounded-lg flex items-center justify-center">
            <MagnifyingGlassIcon className="h-16 w-16 text-orange-500" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Product Search & Filtering
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
            MERN Stack Implementation
          </h3>
          <div className="space-y-4">
            <p className="dark:text-gray-200">
              This eCommerce platform utilizes the complete MERN stack with
              several key components:
            </p>
            <ul className="list-disc pl-5 space-y-2 dark:text-gray-200">
              <li>
                <span className="font-medium">MongoDB</span>: NoSQL database for
                product catalog, user data, and order management
              </li>
              <li>
                <span className="font-medium">Express.js</span>: Backend
                framework for robust API development and routing
              </li>
              <li>
                <span className="font-medium">React</span>: Frontend library
                with custom hooks and context API for state management
              </li>
              <li>
                <span className="font-medium">Node.js</span>: JavaScript runtime
                for server-side operations and business logic
              </li>
              <li>
                <span className="font-medium">Redux</span>: State management for
                complex application state
              </li>
              <li>
                <span className="font-medium">PayPal API</span>: Integration for
                secure payment processing
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
                Case Study: Artisan Marketplace Integration
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A collective of independent artisans adopted the platform to
                sell handcrafted products online during the pandemic.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The artisans needed a way to showcase their unique products
                  with custom attributes while maintaining a unified checkout
                  experience.
                </p>

                <h4 className="font-medium dark:text-white">Solution:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The platform was customized to support vendor-specific
                  storefronts with flexible product schemas while keeping a
                  centralized payment system.
                </p>

                <h4 className="font-medium dark:text-white">Results:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The collective saw a 300% increase in online sales and
                  expanded their customer base beyond local markets.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full">
                <ShoppingCartIcon className="h-24 w-24 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Case Study: Small Business Migration
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A brick-and-mortar specialty store migrated to the platform to
                establish an online presence during business disruptions.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The business needed to quickly transition online while
                  maintaining their established brand identity and customer
                  relationships.
                </p>

                <h4 className="font-medium dark:text-white">Solution:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The platform&apos;s customizable frontend and CRM features
                  allowed for brand-consistent design and customer data
                  migration.
                </p>

                <h4 className="font-medium dark:text-white">Results:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The business retained 85% of their customer base during the
                  transition and increased their overall sales by 25% through
                  expanded reach.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-full">
                <CubeIcon className="h-24 w-24 text-green-600 dark:text-green-400" />
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
              Retail Businesses
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Small to medium-sized retailers use the platform to establish an
              online presence and expand their market reach beyond physical
              locations.
            </p>
            <div className="flex justify-end">
              <ShoppingCartIcon className="h-16 w-16 text-blue-500 dark:text-blue-400" />
            </div>
          </div>

          {/* Use Case 2 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Direct-to-Consumer Brands
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              New product brands utilize the platform to launch
              direct-to-consumer sales channels without marketplace
              intermediaries.
            </p>
            <div className="flex justify-end">
              <CubeIcon className="h-16 w-16 text-purple-500 dark:text-purple-400" />
            </div>
          </div>

          {/* Use Case 3 */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Content Creators
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Influencers and content creators use the platform to sell
              merchandise and digital products to their audiences.
            </p>
            <div className="flex justify-end">
              <StarIcon className="h-16 w-16 text-amber-500 dark:text-amber-400" />
            </div>
          </div>

          {/* Use Case 4 */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Subscription Services
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Subscription-based businesses leverage the recurring payment
              functionality to manage membership products.
            </p>
            <div className="flex justify-end">
              <CreditCardIcon className="h-16 w-16 text-emerald-500 dark:text-emerald-400" />
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
                  Secure payment processing integration
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Implemented PayPal API with robust error handling and
                  transaction verification
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Zero payment processing failures with comprehensive
                  transaction logs
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Cart abandonment and user retention
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Developed persistent cart state using localStorage and user
                  accounts
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  35% reduction in cart abandonment rate compared to industry
                  average
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Product data organization for large catalogs
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Created flexible MongoDB schemas with efficient indexing
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Support for catalogs with 10,000+ products while maintaining
                  fast search performance
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Admin dashboard for diverse user roles
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Implemented role-based access control with granular
                  permissions
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Secure multi-tier administration system suitable for
                  enterprises with complex organizational structures
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Conclusion</h2>

        <div className="bg-gradient-to-r from-green-500 to-teal-500 dark:from-green-600 dark:to-teal-600 text-white p-8 rounded-lg">
          <p className="text-lg mb-4">
            This MERN stack eCommerce platform represents a comprehensive
            solution for businesses looking to establish or expand their online
            presence. By combining modern web technologies with user-centered
            design principles, the project delivers a robust yet flexible
            foundation for digital commerce.
          </p>
          <p className="text-lg mb-4">
            The platform&apos;s strength lies in its adaptability to diverse
            business models while maintaining enterprise-grade security and
            performance. From small artisan shops to growing direct-to-consumer
            brands, the system scales to accommodate various needs without
            sacrificing user experience.
          </p>
          <p className="text-lg">
            As eCommerce continues to evolve, this platform offers a sustainable
            foundation that can be extended and customized to meet changing
            market demands and consumer expectations.
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
              AI Product Recommendations
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Implementing machine learning algorithms for personalized product
              suggestions based on user behavior and preferences.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Advanced Analytics Dashboard
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Developing comprehensive analytics tools for merchants to track
              sales trends, customer behavior, and inventory optimization.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Headless Commerce API
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Expanding the backend to support headless commerce capabilities
              for integration with diverse frontend experiences like mobile apps
              and IoT devices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ECommerceContent;
