import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const baseConfig = {
  experimental: {
    appDir: true,
    reactCompiler: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos"
      }
    ]
  },
  reactStrictMode: true
};

export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true
})(baseConfig);