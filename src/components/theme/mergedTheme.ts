// Next Imports
import localFont from 'next/font/local'

// MUI Imports
import { deepmerge } from '@mui/utils'
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'
import type { SystemMode } from '@core/types'

// Core Theme Imports
import coreTheme from '@core/theme'

const IRANSansX = localFont({
  src: [
    {
      path: '../../assets/fonts/Woff2/IRANSansXFaNum-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../assets/fonts/Woff2/IRANSansXFaNum-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../assets/fonts/Woff2/IRANSansXFaNum-DemiBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../assets/fonts/Woff2/IRANSansXFaNum-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../assets/fonts/Woff2/IRANSansXFaNum-ExtraBold.woff2',
      weight: '800',
      style: 'normal'
    }
  ]
})

// const montserrat = Montserrat({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '600', '700', '800', '900']
// })

const mergedTheme = (settings: Settings, mode: SystemMode, direction: Theme['direction']) => {
  // Vars
  const userTheme = {
    typography: {
      // fontFamily: montserrat.style.fontFamily

      fontFamily: IRANSansX.style.fontFamily
    }

    // Write your overrides here.
  } as Theme

  return deepmerge(coreTheme(settings, mode, direction), userTheme)
}

export default mergedTheme
