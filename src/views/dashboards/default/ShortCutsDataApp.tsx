// MUI Imports
import { Fragment } from 'react'

import Image from 'next/image'

// Components Imports
import classNames from 'classnames'

import Slider from '@/components/slider/slider'
import AppsShortcut from '@/components/card-statistics/AppsShortcut'
import DataAppsShortcut from '@/components/card-statistics/DataAppsShortcut'

const defaultSlide = [
  {
    title: 'اتاق وضعیت تلسکوپی',
    stats: 'اتوماسیون اداری',
    imageIcon: '/images/icons/data/telescope.png',
    color: 'primary',
    url: 'https://status.brandmi.ir/monitoring/'
  },
  {
    title: 'اتاق وضعیت میکروسکوپی',
    stats: 'اتوماسیون اداری',
    imageIcon: '/images/icons/data/microscope.png',
    color: 'secondary',
    url: 'https://status.brandmi.ir/'
  },
  {
    title: 'تحلیل دیتامی',
    stats: 'اتوماسیون اداری',
    imageIcon: '/images/icons/data/glass.png',
    color: 'info',
    url: 'https://datami.ir/login'
  },

]

const ShortCutsDataApp = () => {
  return (
    <div className='app-shortcuts'>
      <Slider
        slidesPerView={7}
        breakpoints={{
          340: {
            slidesPerView: 2
          },
          640: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 5
          },
          1024: {
            slidesPerView: 6
          },
          1280: {
            slidesPerView: 7
          }
        }}
        className={'w-full overflow-hidden  object-cover !h-auto items-stretc justify-center items-center'}
      >
        {defaultSlide?.map((item: any, i: number) => {
          // console.log(slide)
          return (
            <Fragment key={i}>
              <div className='p-3 items-stretc h-full cursor-pointer'>
                <DataAppsShortcut {...item} />
              </div>
            </Fragment>
          )
        })}
      </Slider>
    </div>
  )
}

export default ShortCutsDataApp

{
  /* <Image
  src={slide.filec}
  alt='baner'
  width={100}
  height={100}
  unoptimized
  className='w-full aspect-video md:aspect-auto object-cover md:max-h-[370px] lg:max-h-[450px] xl:max-h-[39rem] 2xl::max-h-[650px]'
/> */
}
