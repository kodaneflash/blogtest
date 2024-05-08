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
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self';" +
                   "script-src 'self' 'unsafe-eval' https://metrics.aibuzz.us;" +
                   "connect-src 'self' https://metrics.aibuzz.us;" +
                   "img-src 'self' https://cdn.sanity.io;" +
                   "style-src 'self' 'unsafe-inline';" +
                   "font-src 'self';"
          }
        ]
      },
    ];
  },
}

module.exports = nextConfig
