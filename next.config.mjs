/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  devIndicators: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
