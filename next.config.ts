import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Preserve the official site's source assets byte-for-byte instead of
    // generating lower-quality derivatives through Next's image optimizer.
    unoptimized: true,
  },
};

export default nextConfig;
