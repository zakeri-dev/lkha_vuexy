import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  basePath: process.env.BASEPATH,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/fa/dashboards/crm',
        permanent: true,
        locale: false
      },
      {
        source: '/:lang(en|fr|ar|fa)',
        destination: '/:lang/dashboards/crm',
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
  }
}

export default nextConfig
