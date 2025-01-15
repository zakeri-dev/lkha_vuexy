// MUI Imports
import { Fragment } from 'react'

import Image from 'next/image'

// Components Imports
import classNames from 'classnames'

import Slider from '@/components/slider/slider'
import AppsShortcut from '@/components/card-statistics/AppsShortcut'

const defaultSlide = [
  {
    title: 'On route vehicles',
    stats: 42,
    trendNumber: 18.2,
    avatarIcon: 'tabler-truck',
    color: 'primary'
  },
  {
    title: 'Vehicles with errors',
    stats: 8,
    trendNumber: -8.7,
    avatarIcon: 'tabler-alert-triangle',
    color: 'warning'
  },
  {
    title: 'Deviated from route',
    stats: 27,
    trendNumber: 4.3,
    avatarIcon: 'tabler-git-fork',
    color: 'error'
  },
  {
    title: 'Late vehicles',
    stats: 13,
    trendNumber: 2.5,
    avatarIcon: 'tabler-clock',
    color: 'info'
  },
  {
    title: 'Late vehicles',
    stats: 13,
    trendNumber: 2.5,
    avatarIcon: 'tabler-clock',
    color: 'info'
  },
  {
    title: 'Late vehicles',
    stats: 13,
    trendNumber: 2.5,
    avatarIcon: 'tabler-clock',
    color: 'info'
  },
  {
    title: 'Late vehicles',
    stats: 13,
    trendNumber: 2.5,
    avatarIcon: 'tabler-clock',
    color: 'info'
  }
]

const ShortCutsApp = () => {
  return (
    <Slider slidesPerView={5} className={'w-full overflow-hidden  object-cover !h-auto'}>
      {defaultSlide?.map((item: any, i: number) => {
        // console.log(slide)
        return (
          <Fragment key={i}>
            <div className='p-3'>
              <AppsShortcut {...item} />
            </div>
          </Fragment>
        )
      })}
    </Slider>
  )
}

export default ShortCutsApp

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
