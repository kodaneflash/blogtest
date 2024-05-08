/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  headers: async () => {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self' metrics.aibuzz.us ray.st; font-src 'self' https://ray.st; style-src 'self' https://ray.st; script-src 'self' 'unsafe-inline' 'unsafe-eval';"
          },
        ],
      },
    ]
  },
};
