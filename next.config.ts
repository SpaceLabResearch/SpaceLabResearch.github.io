import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves pre-built static files. The site currently has no
  // server-only features, so exporting it keeps every page fast and portable.
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
