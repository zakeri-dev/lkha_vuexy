'use client'

// MUI Imports
import { Fragment, useEffect, useState } from 'react'

import Image from 'next/image'

// Components Imports

import axios from 'axios'

import classNames from 'classnames'

import Slider from './components/slider'

const ContentSlider = () => {
  const [sliderContent, setSliderContent] = useState([])

  useEffect(() => {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_CMS_URL}/items/slider?fields=*.*`,
      headers: {}
    }

    axios
      .request(config)
      .then(response => {
        // console.log(response.data?.data)
        setSliderContent(response.data?.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <Slider slidesPerView={1} className={'w-full items-stretc rounded-md overflow-hidden cursor-pointer'}>
      {sliderContent?.map((slide: any, i: number) => {
        // console.log(slide)

        return (
          <Fragment key={i}>
            <div className='relative w-full h-full flex items-end p-5'>
              <div className='absolute bottom-0 left-0 w-full h-1/2 z-10 bg-gradient-to-t from-black'></div>
              <img
                src={`${process.env.NEXT_PUBLIC_CMS_URL_ASSETS}/${slide?.image?.id}/${slide?.image?.filename_download}`}
                alt='slide'
                className='absolute top-0 left-0 w-full h-full object-cover z-0'
              />
              <div>
                <span className='relative z-10 text-primary text-base font-bold'>معاونت</span>
                <h1 className='relative z-10 text-white text-xl'>{slide.Title}</h1>
              </div>
            </div>
          </Fragment>
        )
      })}
    </Slider>
  )
}

export default ContentSlider

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
