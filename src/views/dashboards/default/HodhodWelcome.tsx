// MUI Imports
import Link from 'next/link'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'

type DataType = {
  icon: string
  title: string
  value: string
}

// Vars
// const data: DataType[] = [
//   { icon: 'tabler-calendar', title: '17 Nov 23', value: 'Date' },
//   { icon: 'tabler-clock', title: '32 Minutes', value: 'Duration' }
// ]

const HodhodWelcome = () => {
  return (
    <Card className='h-full'>
      <CardContent className='flex flex-col gap-4'>
        <div className='flex justify-center rounded bg-primaryLight aspect-video overflow-hidden'>
          <img
            src='/images/agents/danam.webp'
            className='w-full object-cover
           '
          />
        </div>
        <div>
          <Typography variant='h5' className='mbe-2 text-center'>
            گفتگو با دانا
          </Typography>
          <Typography variant='body2' className=' text-center'>
            سلام همکار خوبم، من هدهد هستم. اومدم تا در مسیری که هستی کمکت کنم! آماده ای شروع کنیم؟
          </Typography>
        </div>
        {/* <div className='flex flex-wrap justify-between gap-4'>
          {data.map((item, i) => (
            <div key={i} className='flex items-center gap-3'>
              <CustomAvatar variant='rounded' skin='light' color='primary'>
                <i className={classnames('text-[28px]', item.icon)} />
              </CustomAvatar>
              <div>
                <Typography color='text.primary' className='font-medium'>
                  {item.title}
                </Typography>
                <Typography variant='body2'>{item.value}</Typography>
              </div>
            </div>
          ))}
        </div> */}
        {/* <Link href={`http://192.168.100.27:3002/`}> */}
        <Button href='http://192.168.100.27:3002/' variant='contained' className=''>
          آغاز گفتگو (به زودی)
        </Button>
        {/* </Link> */}
      </CardContent>
    </Card>
  )
}

export default HodhodWelcome
