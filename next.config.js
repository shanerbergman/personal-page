/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  experimental: {
    serverActions: true,
    appDir: true,
  },
};

module.exports = nextConfig;
