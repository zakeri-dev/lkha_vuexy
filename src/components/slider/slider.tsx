'use client'
import { useRef } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Slider = ({ children, slidesPerView, breakpoints, spaceBetween, className }: any) => {
  // console.log(children)
  // const navigationNextRef = useRef(null)
  // const navigationPrevRef = useRef(null)
  const swiperRef = useRef<SwiperType>()

  return (
    <Swiper
      className='mySwiper relative'
      dir='rtl'
      slidesPerView={slidesPerView || 1}
      breakpoints={breakpoints}
      loop={true}
      spaceBetween={spaceBetween || 10}
      onBeforeInit={swiper => {
        swiperRef.current = swiper
      }}
      modules={[Navigation]}

      // pagination={{
      //     clickable: true,
      // }}
      // navigation={{
      //   prevEl: navigationPrevRef.current,
      //   nextEl: navigationNextRef.current
      // }}

      // onSlideChange={() => console.log('slide change')}
      // onSwiper={swiper => console.log(swiper)}
    >
      {Array.isArray(children) ? (
        children.map((item, index) => {
          return (
            <SwiperSlide key={index} className={`${className} overflow-hidden w-full`}>
              {item.props.children}
            </SwiperSlide>
          )
        })
      ) : (
        <SwiperSlide className=''>{children.props.children}</SwiperSlide>
      )}
      {/* <div className='absolute bottom-0 right-0 z-10 w-[300px] bg-white pb-64 skew-y-[144deg] origin-[110%_100%] '></div> */}
      <div className='absolute left-0 top-[40%] w-full flex gap-3 justify-between'>
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className=' text-black z-50  bg-primary p-1 rounded-md cursor-pointer'
        >
          <i className='tabler-caret-right text-[22px] text-white' />
          {/* <div className='w-3 md:w-14 h-8 bg-primary  left-0 bottom-0 skew-y-[0] skew-x-[35deg]'></div> */}
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className=' text-black z-50  bg-primary p-1 rounded-md cursor-pointer'
        >
          <i className='tabler-caret-left text-[22px] text-white' />
          {/* <div className='w-3 md:w-14 h-8 bg-primary  right-0 top-0 skew-y-[0] skew-x-[35deg]'></div> */}
        </button>
      </div>
    </Swiper>
  )
}

export default Slider
