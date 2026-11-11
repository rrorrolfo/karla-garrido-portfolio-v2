import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every page is static, so the site exports to plain HTML in `out/`
  // and deploys to Netlify (or any static host) like the CRA build did.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
