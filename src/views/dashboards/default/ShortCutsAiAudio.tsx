// MUI Imports
import { Fragment } from 'react'

import { useSelector } from 'react-redux'

import { filter } from 'lodash'

import Slider from '@/components/slider/slider'
import AiShortcut from '@/components/card-statistics/AiShortcut'

const ShortCutsAiAudio = () => {
  // Hooks
  const agents = useSelector((state: any) => state.agentsReducer.agents)

  const Items = filter(agents, { type: 'audio' }) || agents

  // console.log(agents)

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
        {Items?.map((item: any, i: number) => {
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

export default ShortCutsAiAudio

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
