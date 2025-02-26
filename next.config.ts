import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  basePath: process.env.BASEPATH,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/fa/dashboards',
        permanent: true,
        locale: false
      },
      {
        source: '/:lang(en|fr|ar|fa)',
        destination: '/:lang/dashboards',
        permanent: true,
        locale: false
      },
      {
        source: '/((?!(?:en|fr|ar|fa|front-pages|favicon.ico)\\b)):path',
        destination: '/fa/:path',
        permanent: true,
        locale: false
      }
    ]
  },
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_CMS_PROTOCOL as 'http' | 'https',
        hostname: `${process.env.NEXT_PUBLIC_CMS_URL}`,
        port: `${process.env.NEXT_PUBLIC_CMS_PORT}`,
        pathname: '/**'
      }
    ]
  }
}

export default nextConfig
