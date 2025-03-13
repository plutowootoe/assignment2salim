import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // static export for github pages
  basePath: "/assignment2salim",
  assetPrefix: "/assignment2salim/",
  trailingSlash: true,
};

export default nextConfig;
