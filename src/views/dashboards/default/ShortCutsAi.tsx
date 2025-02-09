// MUI Imports
import { Fragment } from 'react'

import Image from 'next/image'

// Components Imports
import classNames from 'classnames'

import Slider from '@/components/slider/slider'
import AiShortcut from '@/components/card-statistics/AiShortcut'

const defaultSlide = [
  {
    title: 'دانا',
    stats: 'گفتگو با هوش مصنوعی',
    imageIcon: '/images/agents/danaq.webp',
    color: 'primary'
  },
  {
    title: 'زبان یار',
    stats: 'ترجمه و آموزش زبان',
    imageIcon: '/images/agents/translateq.webp',
    color: 'bg-black'
  },
  {
    title: 'نکته یار',
    stats: 'مدیریت پروژه',
    imageIcon: '/images/agents/noktehq.webp',
    color: 'error'
  },
  {
    title: 'خِرَد یار',
    stats: 'خلاصه سازی محتوا',
    imageIcon: '/images/agents/noktehyarq.webp',
    color: 'info'
  },
  {
    title: 'پیش نگار',
    stats: 'تصحیح نگارش و پیشنهاداملا',
    imageIcon: '/images/agents/pishnegarq.webp',
    color: 'warning'
  },
  {
    title: 'سروش',
    stats: 'عنوان، زیرعنوان و موضوع محتوا',
    imageIcon: '/images/agents/soroushnq.webp',
    color: 'bg-black'
  },
  {
    title: 'پُرسانا',
    stats: 'تهیه سوال از محتوا',
    imageIcon: '/images/agents/porsanamq.webp',
    color: 'info'
  },
  {
    title: 'واژه بان',
    stats: 'استخراج کلمات معنایی و مهم محتوا',
    imageIcon: '/images/agents/vajebanq.webp',
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
                <AiShortcut {...item} />
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
