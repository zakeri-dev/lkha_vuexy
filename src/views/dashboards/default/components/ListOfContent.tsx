'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const BrowserStates = ({ data }: any) => {
  // console.log(data)

  return (
    <Card className=' shadow-none bg-white/0 !p-0 h-full'>
      <Typography className='font-bold'>آخرین مطالب:</Typography>
      <CardContent className='flex flex-col gap-4 !px-0'>
        {data?.slice(1)?.map((item: any, index: number) => (
          <div
            key={index}
            className='group flex items-center gap-4 p-2 hover:bg-[#182da3] hover:text-white rounded-md transform duration-150 cursor-pointer'
          >
            <img
              src={`${process.env.NEXT_PUBLIC_CMS_URL_ASSETS}/${item?.Thumb?.id}/${item?.Thumb?.filename_download}`}
              alt={item.title}
              className='w-20 aspect-video object-cover rounded-sm'
            />
            <Typography className='font-bold group-hover:text-white transform duration-150'>{item.title}</Typography>
            {/* <div className='flex flex-wrap justify-between items-center gap-x-4 gap-y-1 is-full'>
              <Typography className='font-medium' color='text.primary'>
                {item.title}
              </Typography>
              <div className='flex items-center gap-4'>
                <Typography>{item.percentage}</Typography>
                <div className='flex relative'>
                  <CircularProgress
                    variant='determinate'
                    size={26}
                    value={100}
                    thickness={5}
                    sx={{ position: 'absolute', color: 'var(--mui-palette-customColors-trackBg)' }}
                  />
                  <CircularProgress
                    variant='determinate'
                    size={26}
                    value={item.progress}
                    thickness={5}
                    color={item.progressColor}
                    sx={{ '& .MuiCircularProgress-circle': { strokeLinecap: 'round' } }}
                  />
                </div>
              </div>
            </div> */}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default BrowserStates
