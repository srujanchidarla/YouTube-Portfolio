import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Disable type checking during build if you're having persistent issues
    // ignoreBuildErrors: true,
  },
  eslint: {
    // Disable ESLint during build if you're having persistent issues
    // ignoreDuringBuilds: true,
  },
  // Add any other specific configurations
};

export default nextConfig;