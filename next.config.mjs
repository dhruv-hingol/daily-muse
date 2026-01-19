/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  devIndicators: {
    buildActivity: false,
    appIsrStatus: false,
    buildActivityPosition: "bottom-right",
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/daily-muse" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/daily-muse/" : "",
};

export default nextConfig;
