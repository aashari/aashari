import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enable static exports for Cloudflare Pages
  distDir: 'out', // Specify the output directory
  poweredByHeader: false, // Remove X-Powered-By header for security
  compress: true, // Enable gzip compression
  images: {
    formats: ['image/avif', 'image/webp'], // Use modern image formats
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'andi.ltd',
      },
    ],
    unoptimized: true, // Required for static exports
  },
  // Note: Headers are not applied in static exports, but kept here for reference
  // and for use in development mode. For production, these headers should be
  // configured in your hosting platform (Cloudflare Pages).
};

export default nextConfig;
