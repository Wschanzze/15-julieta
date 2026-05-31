/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com https://s.ytimg.com",
              "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com",
              "connect-src 'self' https://www.youtube.com https://i.ytimg.com",
              "img-src 'self' data: blob: https://i.ytimg.com https://img.youtube.com https://*.vercel-storage.com https://hebbkx1anhila5yf.public.blob.vercel-storage.com",
              "media-src 'self' https://www.youtube.com",
              "style-src 'self' 'unsafe-inline'",
              "font-src 'self' https://fonts.gstatic.com",
            ].join("; "),
          },
        ],
      },
    ]
  },
}

export default nextConfig
