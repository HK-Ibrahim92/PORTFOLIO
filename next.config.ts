import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false, // ignore fs in browser
    }
    return config
  },
};

export default nextConfig;
