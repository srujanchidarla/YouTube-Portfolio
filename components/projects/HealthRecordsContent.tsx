// components/projects/HealthRecordsContent.tsx
import React from "react";
import {
  HeartIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ChartBarIcon,
  LockClosedIcon,
  CloudIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

const HealthRecordsContent: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Demo Screenshots Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Healthcare Platform Showcase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30 aspect-video rounded-lg flex items-center justify-center">
            <HeartIcon className="h-16 w-16 text-red-600" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Patient Lifecycle Tracking
            </span>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 aspect-video rounded-lg flex items-center justify-center">
            <DocumentTextIcon className="h-16 w-16 text-blue-600" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Secure Document Management
            </span>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 aspect-video rounded-lg flex items-center justify-center">
            <ShieldCheckIcon className="h-16 w-16 text-green-600" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              HIPAA Compliance Dashboard
            </span>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 aspect-video rounded-lg flex items-center justify-center">
            <UserGroupIcon className="h-16 w-16 text-purple-600" />
            <span className="ml-2 text-gray-700 dark:text-gray-200">
              Healthcare Provider Portal
            </span>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Technical Architecture
        </h2>
        <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-red-700 dark:text-red-300">
            HIPAA-Compliant Healthcare Platform Design
          </h3>
          <div className="space-y-4">
            <p className="dark:text-gray-200">
              Health Records Management System uses enterprise-grade security
              and compliance frameworks:
            </p>
            <ul className="list-disc pl-5 space-y-2 dark:text-gray-200">
              <li>
                <span className="font-medium">Frontend Layer</span>: Next.js
                with TypeScript for type-safe healthcare data handling
              </li>
              <li>
                <span className="font-medium">Security Framework</span>:
                HIPAA-compliant infrastructure with AWS hosting and encryption
              </li>
              <li>
                <span className="font-medium">Database Layer</span>: PostgreSQL
                with Prisma ORM for robust relational data management
              </li>
              <li>
                <span className="font-medium">Authentication</span>:
                Multi-factor authentication required for all healthcare
                providers
              </li>
              <li>
                <span className="font-medium">Data Encryption</span>: AES-256
                encryption at rest and TLS 1.3 in transit
              </li>
              <li>
                <span className="font-medium">Healthcare Integration</span>: HL7
                FHIR compatibility for EHR system integration
              </li>
              <li>
                <span className="font-medium">Caching & Performance</span>:
                Redis for session management with healthcare-grade security
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Healthcare Impact Stories
        </h2>

        {/* Case Study 1 */}
        <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Case Study: Chronic Disease Management
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                A network of 1,000+ diabetic patients used the platform to
                manage their complete health history across multiple healthcare
                specialists and providers.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Patients struggled to coordinate care between
                  endocrinologists, cardiologists, and primary care physicians,
                  leading to fragmented care and duplicate tests.
                </p>

                <h4 className="font-medium dark:text-white">Solution:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The platform&apos;s unified health records enabled seamless
                  data sharing between providers with patient-controlled access
                  permissions.
                </p>

                <h4 className="font-medium dark:text-white">Results:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  40% improvement in care coordination and 25% reduction in
                  duplicate tests, with better patient outcomes and satisfaction
                  scores.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="bg-red-100 dark:bg-red-900/30 p-6 rounded-full">
                <HeartIcon className="h-24 w-24 text-red-600 dark:text-red-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="bg-white dark:bg-zinc-800 shadow-md rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Case Study: Emergency Medical Response
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Emergency departments across 5 major hospitals implemented the
                platform to access critical patient information during emergency
                situations.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Challenge:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Emergency physicians lacked immediate access to patient
                  allergies, medications, and medical history during critical
                  care situations.
                </p>

                <h4 className="font-medium dark:text-white">Solution:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Platform&apos;s emergency access features provided instant
                  access to critical health information with proper
                  authentication protocols.
                </p>

                <h4 className="font-medium dark:text-white">Results:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  60% faster emergency treatment decisions and 30% reduction in
                  adverse drug reactions during critical care scenarios.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full">
                <ShieldCheckIcon className="h-24 w-24 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Use Cases */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Real-time Healthcare Applications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Use Case 1 */}
          <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Complete Health Journey
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Patients access their complete medical history from birth,
              including vaccinations, procedures, medications, and family health
              history.
            </p>
            <div className="flex justify-end">
              <HeartIcon className="h-16 w-16 text-red-500 dark:text-red-400" />
            </div>
          </div>

          {/* Use Case 2 */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Secure Document Access
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Healthcare providers access encrypted patient documents, lab
              results, and imaging with role-based permissions and audit trails.
            </p>
            <div className="flex justify-end">
              <DocumentTextIcon className="h-16 w-16 text-blue-500 dark:text-blue-400" />
            </div>
          </div>

          {/* Use Case 3 */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Medication Management
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Automated prescription tracking with drug interaction checking,
              refill reminders, and pharmacy integration for seamless medication
              management.
            </p>
            <div className="flex justify-end">
              <LockClosedIcon className="h-16 w-16 text-green-500 dark:text-green-400" />
            </div>
          </div>

          {/* Use Case 4 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Provider Collaboration
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Healthcare teams collaborate with comprehensive patient views,
              care coordination tools, and clinical decision support
              integration.
            </p>
            <div className="flex justify-end">
              <UserGroupIcon className="h-16 w-16 text-purple-500 dark:text-purple-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Development Challenges and Solutions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Healthcare-Specific Challenges and Solutions
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
                  HIPAA compliance implementation with comprehensive audit
                  trails
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Built comprehensive compliance framework with automated audit
                  logging and encryption
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  100% HIPAA compliance with zero security breaches and full
                  audit traceability
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Secure data encryption and storage with end-to-end protection
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Implemented AES-256 encryption with zero-knowledge
                  architecture
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Military-grade security with encrypted data access and
                  administrator privacy
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Complex healthcare system integration with legacy EHR systems
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Developed HL7 FHIR-compliant API gateway with transformation
                  layers
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Seamless integration with 50+ EHR systems and healthcare
                  databases
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Multi-stakeholder access control with role-based permissions
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Created sophisticated RBAC system with emergency access
                  protocols
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900 dark:text-gray-200">
                  Granular access control with patient consent management and
                  emergency override
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Transforming Healthcare Data Management
        </h2>

        <div className="bg-gradient-to-r from-red-500 to-pink-500 dark:from-red-600 dark:to-pink-600 text-white p-8 rounded-lg">
          <p className="text-lg mb-4">
            The Health Records Management System addresses the critical need for
            comprehensive, secure, and accessible healthcare data management. By
            providing a complete patient journey view, the system improves
            healthcare outcomes, reduces medical errors, and enhances patient
            engagement in their own care.
          </p>
          <p className="text-lg mb-4">
            The platform&apos;s patient-centric approach, combined with robust
            security and compliance features, creates a foundation for modern
            healthcare delivery that benefits both patients and healthcare
            providers. The system&apos;s ability to aggregate and analyze health
            data across the entire patient lifecycle provides valuable insights
            for preventive care and population health management.
          </p>
          <p className="text-lg">
            With full HIPAA compliance and integration with 50+ EHR systems, the
            platform serves as a secure bridge between patients and their
            healthcare teams, enabling better coordination and improved health
            outcomes.
          </p>
        </div>
      </section>

      {/* Future Enhancements */}
      <section>
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Healthcare Innovation Roadmap
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              AI-Powered Health Predictions
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Machine learning algorithms for early warning systems and
              personalized health risk assessments based on patient data.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Wearable Device Integration
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Continuous health monitoring with automatic data updates from
              wearables and home health monitoring devices.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Blockchain Health Records
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Immutable health record verification ensuring data integrity and
              patient ownership of health data globally.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthRecordsContent;
export { HealthRecordsContent };
