/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Either remotePatterns or domains, choose what you need
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
    ],
    domains: ["i.pinimg.com"], // optional if you want the old domains array
  },
};

module.exports = nextConfig;
