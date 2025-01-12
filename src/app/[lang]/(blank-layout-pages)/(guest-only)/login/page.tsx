// Next Imports
import type { Metadata } from 'next'

// Component Imports
import Login from '@views/Login'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'
import { getDictionary } from '@/utils/getDictionary'

import type { ChildrenType } from '@core/types'
import type { Locale } from '@configs/i18n'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account'
}

const LoginPage = async (props: ChildrenType & { params: Promise<{ lang: Locale }> }) => {
  const params = await props.params
  const dictionary = await getDictionary(params.lang)

  // Vars
  const mode = await getServerMode()

  return <Login mode={mode} dictionary={dictionary} />
}

export default LoginPage
