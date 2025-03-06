import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // static export for github pages
  basePath: "/etp-caragh",
  assetPrefix: "/etp-caragh/"
};

export default nextConfig;
