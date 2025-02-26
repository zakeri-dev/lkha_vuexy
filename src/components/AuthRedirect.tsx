'use client'

import { useEffect } from 'react'
// Next Imports
import { useRouter, usePathname } from 'next/navigation'

// Type Imports
import type { Locale } from '@configs/i18n'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

const AuthRedirect = ({ lang }: { lang: Locale }) => {
  const pathname = usePathname()
  const router = useRouter()

  // ℹ️ Bring me `lang`
  const redirectUrl = `/${lang}/login?redirectTo=${pathname}`
  const login = `/${lang}/login`
  const homePage = getLocalizedUrl(themeConfig.homePageUrl, lang)

  useEffect(() => {
    if (pathname !== login && pathname !== homePage) {
      router.push(redirectUrl)
    } else {
      router.push(login)
    }
  }, [pathname, login, homePage, redirectUrl, router])

  return null
}

export default AuthRedirect
