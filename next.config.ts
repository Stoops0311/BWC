import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "brainwaveconsulting.co.in",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
