'use client'

// Next Imports
import Link from 'next/link'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

const FooterContent = () => {
  // Hooks
  const { isBreakpointReached } = useVerticalNav()

  return (
    <div
      className={classnames(verticalLayoutClasses.footerContent, 'flex items-center justify-between flex-wrap gap-4')}
    >
      <p>
        <span className='text-textSecondary'>{`© 1443, طراحی شده `}</span>
        {/* <span className='text-textSecondary'>{`© ${new Date().getFullYear()}, طراحی شده `}</span> */}
        <span className='text-textSecondary'>{` در `}</span>
        {/* <span>{`❤️`}</span> */}
        <Link href='https://pixinvent.com' target='_blank' className='text-primary uppercase'>
          مرکز فناوری اطلاعات
        </Link>
      </p>
      {!isBreakpointReached && (
        <div className='flex items-center gap-4'>
          {/* <Link href='https://themeforest.net/licenses/standard' target='_blank' className='text-primary'>
            License
          </Link> */}
          <Link href='#' target='_blank' className='text-primary'>
            پشتیبانی
          </Link>
          <Link href='#' target='_blank' className='text-primary'>
            آموزش
          </Link>
          <Link href='#' target='_blank' className='text-primary'>
            اطلاعات بیشتر
          </Link>
        </div>
      )}
    </div>
  )
}

export default FooterContent
