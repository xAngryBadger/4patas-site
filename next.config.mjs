/** @type {import('next').NextConfig} */
const isPages = process.env.GITHUB_ACTIONS === "true";
const nextConfig = {
  output: "export",
  ...(isPages ? { basePath: "/4patas-site", assetPrefix: "/4patas-site/" } : {}),
};
export default nextConfig;
