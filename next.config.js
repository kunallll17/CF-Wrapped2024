/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/CF-Wrapped2024',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'userpic.codeforces.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'userpic.codeforces.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.codeforces.com',
        pathname: '/**',
      }
    ],
  },
};

module.exports = nextConfig;
