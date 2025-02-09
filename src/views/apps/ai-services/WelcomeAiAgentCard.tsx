'use client'

// MUI Imports
import Image from 'next/image'

import Typography from '@mui/material/Typography'

// Type Imports
import { Card } from '@mui/material'

const WelcomeAiAgentCard = ({ data }: any) => {
  // Hooks

  return (
    <Card className='grid grid-cols-12 max-md:flex-col md:items-center gap-6 plb-6 light:bg-white p-5 rounded-md shadow-md'>
      <div className='md:col-span-10 flex flex-col w-full'>
        <div className='flex items-baseline gap-1 mbe-2'>
          <Typography variant='h5'>سلام👋🏻 من</Typography>
          <Typography variant='h4' className='font-bold'>
            {data.title} : {data.description}
          </Typography>
          <Typography variant='h5'>هستم</Typography>
        </div>
        <div className='mbe-4'>
          <Typography>{data.agentBio}</Typography>
          {/* <Typography>{data.message}</Typography> */}
        </div>
      </div>
      <div className='aspect-square col-span-2'>
        <Card color={data.color || 'primary'} className='aspect-square bg-white/0'>
          <Image src={data.avatarq} alt='alt' width={100} height={100} unoptimized className='w-full h-full ' />
        </Card>
      </div>
    </Card>
  )
}

export default WelcomeAiAgentCard
