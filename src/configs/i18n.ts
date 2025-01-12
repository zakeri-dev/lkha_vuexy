export const i18n = {
  defaultLocale: 'fa',
  locales: ['en', 'fr', 'ar', 'fa'],
  langDirection: {
    en: 'ltr',
    fr: 'ltr',
    ar: 'rtl',
    fa: 'rtl'
  }
} as const

export type Locale = (typeof i18n)['locales'][number]
