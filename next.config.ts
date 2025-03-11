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
  // Add HTTP response headers for security and caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self';",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        // Cache static assets for better performance
        source: '/(.*).(jpg|jpeg|png|svg|webp|avif|ico|css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
