/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost.ionatec.com.br",
        protocol: "http",
      },
    ],
  },
};

export default nextConfig;
