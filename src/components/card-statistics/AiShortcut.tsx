'use client'

// MUI Imports
import Image from 'next/image'

import MuiCard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import type { CardProps } from '@mui/material/Card'

// Third-party Imports
import classnames from 'classnames'

// Types Imports
import type { ThemeColor } from '@core/types'
import type { CardStatsHorizontalWithBorderProps } from '@/types/pages/widgetTypes'

//Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

type Props = CardProps & {
  color: ThemeColor
}

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

const AiShortcut = (props: CardStatsHorizontalWithBorderProps) => {
  // Props
  const { title, stats, imageIcon, avatarIcon, color } = props

  return (
    <>
      <Card color={color || 'primary'} className='aspect-square rounded-full'>
        {/* <CustomAvatar color={color} skin='light' variant='rounded' className='w-full md:w-1/2 h-full'> */}
        {/* <i className={classnames(avatarIcon, 'text-[42px]')} /> */}
        <Image src={imageIcon} alt='alt' width={100} height={100} unoptimized className='w-full h-full ' />
        {/* </CustomAvatar> */}

        {/* <div className='flex flex-col gap-1'>
          <Typography>{title}</Typography>
          <div className='flex items-center gap-2'>
          <Typography
          color='text.primary'
          className='font-medium'
          >{`${trendNumber > 0 ? '+' : ''}${trendNumber}%`}</Typography>
          <Typography variant='body2' color='text.disabled'>
          than last week
          </Typography>
          </div>
          </div> */}
      </Card>
      <Typography className='mt-4 text-lg font-bold w-full text-center'>{title}</Typography>
      <Typography className='text-center pb-1'>{stats}</Typography>
    </>
  )
}

export default AiShortcut
