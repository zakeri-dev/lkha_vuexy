'use client'

// MUI Imports
import Image from 'next/image'

import Link from 'next/link'

import MuiCard from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// Types Imports

const Card = styled(MuiCard)<Props>(({ color }) => ({
  transition: 'border 0.3s ease-in-out, box-shadow 0.3s ease-in-out, margin 0.3s ease-in-out',
  borderBottomWidth: '2px',
  borderBottomColor: `var(--mui-palette-${color}-darkerOpacity)`,
  '[data-skin="bordered"] &:hover': {
    boxShadow: 'none'
  },
  '&:hover': {
    borderBottomWidth: '3px',
    borderBottomColor: `var(--mui-palette-${color}-main) !important`,
    boxShadow: 'var(--mui-customShadows-lg)',
    marginBlockEnd: '-1px'
  }
}))

const AiShortcut = (props: any) => {
  // Props
  const { title, stats, avatarq, color, agent } = props

  return (
    <Link href={agent !== 'dana' ? `apps/ai-services?agent=${agent}` : `http://192.168.100.27:3002/`}>
      <Card color={color || 'primary'} className='aspect-square rounded-full'>
        <Image src={avatarq} alt='alt' width={100} height={100} unoptimized className='w-full h-full ' />
      </Card>
      <Typography className='mt-4 text-lg font-bold w-full text-center'>{title}</Typography>
      <Typography className='text-center pb-1'>{stats}</Typography>
    </Link>
  )
}

export default AiShortcut
