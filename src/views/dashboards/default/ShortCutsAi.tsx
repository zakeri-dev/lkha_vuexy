// MUI Imports
import { Fragment } from 'react'

import Image from 'next/image'

// Components Imports
import classNames from 'classnames'

import Slider from '@/components/slider/slider'
import AppsShortcut from '@/components/card-statistics/AppsShortcut'

const defaultSlide = [
  {
    title: 'چارگون',
    stats: 'اتوماسیون اداری',
    imageIcon: '/images/icons/chargoon.png',
    color: 'primary'
  },
  {
    title: 'میزیتو',
    stats: 'مدیریت پروژه',
    imageIcon: '/images/icons/mizito.png',
    color: 'error'
  },
  {
    title: 'فکور',
    stats: 'آرشیو و مدیریت اسناد',
    imageIcon: '/images/icons/fakoor2.png',
    color: 'info'
  },
  {
    title: 'رستوران',
    stats: 'سامانه رزرو غذا',
    imageIcon: '/images/icons/food.png',
    color: 'warning'
  },
  {
    title: 'خدمات',
    stats: 'سامانه رزرو غذا',
    imageIcon: '/images/icons/MEET.png',
    color: '#fff'
  },
  {
    title: 'سجاد',
    stats: 'مدیریت پروژه',
    imageIcon: '/images/icons/logo-b.png',
    color: 'bg-black'
  }
]

const ShortCutsAi = () => {
  return (
    <div className='ai-shortcuts'>
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
                <AppsShortcut {...item} />
              </div>
            </Fragment>
          )
        })}
      </Slider>
    </div>
  )
}

export default ShortCutsAi

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
