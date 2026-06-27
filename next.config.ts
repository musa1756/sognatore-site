import type { NextConfig } from "next";

// On GitHub Pages the site is served from /<repo>/, so prod builds need a
// basePath. Locally (next dev) we keep paths at the root.
const repo = "sognatore-site";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
};

export default nextConfig;
