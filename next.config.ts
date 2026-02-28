import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/sathish-portfolio' : '',
  assetPrefix: isProd ? '/sathish-portfolio/' : '',
};

export default nextConfig;
