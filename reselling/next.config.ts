import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["gateway.pinata.cloud", "ipfs.io", "cloudflare-ipfs.com"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        os: require.resolve("os-browserify/browser"),
        path: require.resolve("path-browserify"),
        zlib: require.resolve("browserify-zlib"),
      };
    }
    return config;
  },
  // Updated server external packages configuration
  serverExternalPackages: ["@spruceid/ssx-server"],
  transpilePackages: ["@wagmi/core", "viem", "abitype"],
};

export default nextConfig;
