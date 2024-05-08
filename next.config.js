/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      }
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*', // This applies the headers to all paths
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; font-src 'self' https://ray.st; script-src 'self' 'unsafe-inline' https://metrics.aibuzz.us;"
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig
