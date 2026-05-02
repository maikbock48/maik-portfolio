/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 768, 1024, 1280, 1600],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
