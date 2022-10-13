/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "flagcdn.com",
      "images.unsplash.com",
      "via.placeholder.com",
      "s2.q4cdn.com",
      "image.shutterstock.com",
    ],
  },
};

module.exports = nextConfig;
