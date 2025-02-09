'use client'

// MUI Imports
import Image from 'next/image'

import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

// Type Imports
import { Card } from '@mui/material'

const WelcomeAiAgentCard = ({ data }: any) => {
  // Hooks
  const theme = useTheme()
  const belowMdScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <div className='flex max-md:flex-col md:items-center gap-6 plb-6'>
      <div className='md:is-8/12'>
        <div className='flex items-baseline gap-1 mbe-2'>
          <Typography variant='h5'>سلام👋🏻 من</Typography>
          <Typography variant='h4' className='font-bold'>
            {data.title} : {data.des}
          </Typography>
          <Typography variant='h5'>هستم</Typography>
        </div>
        <div className='mbe-4'>
          <Typography>{data.bio}</Typography>
          {/* <Typography>{data.message}</Typography> */}
        </div>
      </div>
      <Divider orientation={belowMdScreen ? 'horizontal' : 'vertical'} flexItem />
      <div className='aspect-square w-64'>
        <Card color={data.color || 'primary'} className='aspect-square rounded-full'>
          <Image src={data.imageIcon} alt='alt' width={100} height={100} unoptimized className='w-full h-full ' />
        </Card>
      </div>
    </div>
  )
}

export default WelcomeAiAgentCard
