'use client'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const Baner = () => {
  return (
    <>
      <Card className=' bg-gradient-to-tr	from-amber-700 to-amber-400 rounded-md'>
        <CardContent className='flex flex-col gap-6 p-3'>
          <div className='flex items-center justify-between'>
            <div className='flex justify-center flex-col gap-3'>
              <Typography variant='h5' color='common.white' className='font-bold text-2xl'>
                مجله فناوری
              </Typography>
              <Typography color='common.white'>بررسی بروز ترین فناوری و تکنولوژی ها مرتبط</Typography>
            </div>
            <img src='/images/icons/ai.png' className=' w-20' />
          </div>
        </CardContent>
      </Card>
      <Card className=' bg-gradient-to-tr	from-cyan-700 to-cyan-400 rounded-md'>
        <CardContent className='flex flex-col gap-6'>
          <div className='flex items-center justify-between'>
            <div className='flex justify-center flex-col gap-3'>
              <Typography variant='h5' color='common.white' className='font-bold text-2xl'>
                پژوهشگاه
              </Typography>
              <Typography color='common.white'>بررسی بروز ترین مقالات و دوره های مرتبط</Typography>
            </div>
            <img src='/images/icons/articke.png' className=' w-16' />
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default Baner
