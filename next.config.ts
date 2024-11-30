import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["fakeimg.pl"],
  },
  async rewrites() {
    return [
      {
        source: "/api/movies/:path*",
        destination: "https://freetestapi.com/api/v1/movies/:path*",
      },
    ];
  },
};

export default nextConfig;
