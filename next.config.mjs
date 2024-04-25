/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost.ionatec.com.br",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "static.orulo.com.br",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
