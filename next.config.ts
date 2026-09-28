import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    // Hay dos raíces (español e inglés), así que el 404 global vive en app/global-not-found.tsx.
    globalNotFound: true,
  },
};

export default nextConfig;
