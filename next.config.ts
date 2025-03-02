import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "dist", // Change .next to dist (or use "build" if you prefer)
  output: "export", // Optional: Enables static export
  images: {
    unoptimized: true, // Required if using "export"
  },
};

export default nextConfig;