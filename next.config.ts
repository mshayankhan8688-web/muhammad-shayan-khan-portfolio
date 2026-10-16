import type { NextConfig } from "next";

const repo = "muhammad-shayan-khan-portfolio";
const basePath = process.env.GITHUB_PAGES === "true" ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath, assetPrefix: `${basePath}/` } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
