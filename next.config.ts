import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Production: no client source maps in browser (cleaner DevTools “Sources”) */
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  compress: true,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },
};

export default nextConfig;
