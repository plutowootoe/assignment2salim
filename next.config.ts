import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // static export for github pages
  basePath: "/etp-caragh",
  assetPrefix: "/etp-caragh/",
  trailingSlash: true,
  publicRuntimeConfig: { // Ensure basePath is available in the frontend
    basePath: "/etp-caragh",
  },
};

export default nextConfig;
