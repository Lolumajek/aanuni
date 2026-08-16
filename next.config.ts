import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hostinger Premium serves static files rather than a persistent Node.js
  // process. `next build` writes the deployable site to /out.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
    ],
  },
};

export default nextConfig;
