// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'

// Type Imports
import type { ThemeColor } from '@core/types'

// Components Imports
import CustomIconButton from '@core/components/mui/IconButton'
import OptionMenu from '@core/components/option-menu'
import DirectionalIcon from '@components/DirectionalIcon'

type DataType = {
  title: string
  tasks: string
  progress: number
  color: ThemeColor
}

// Vars
const data: DataType[] = [
  { title: 'مدل های هوشمند زبانی', tasks: 'فراهم سازی گفتگو ایمن باهوش مصنوعی', progress: 68, color: 'primary' },
  { title: 'VOD هوشمند', tasks: 'تلویزیون اینترنتی هوشمند', progress: 60, color: 'info' },
  { title: 'پرسش و پاسخ استفتائات', tasks: 'پاسخگویی به سوالات شرعی', progress: 48, color: 'success' },
  { title: 'کتابخانه هوشمند', tasks: 'جستجو هوشمند در آثار امام خامنه ای', progress: 15, color: 'error' }
]

const AiSoftwareList = () => {
  return (
    <Card className='h-full bg-white/0 shadow-none'>
      <div className='flex items-center px-4'>
        <i className='tabler-sparkles text-[22px]' />
        <CardHeader
          title='نرم افزار های هوشمند'
          action={<OptionMenu options={['همه نرم افزارها', 'پیشنهاد نرم افزار']} />}
          className='p-1 w-full justify-between'
        />
      </div>
      <CardContent className='flex flex-col gap-3'>
        {data.map((item, i) => (
          <div key={i} className='flex items-center gap-4 bg-white p-2 rounded-md'>
            <div className='relative flex items-center justify-center'>
              <CircularProgress
                variant='determinate'
                size={54}
                value={100}
                thickness={3}
                className='absolute text-[var(--mui-palette-customColors-trackBg)]'
              />
              <CircularProgress
                variant='determinate'
                size={54}
                value={item.progress}
                thickness={3}
                color={item.color}
                sx={{ '& .MuiCircularProgress-circle': { strokeLinecap: 'round' } }}
              />
              <Typography className='absolute font-medium' color='text.primary'>
                {`${item.progress}%`}
              </Typography>
            </div>
            <div className='flex justify-between items-center is-full gap-4'>
              <div>
                <Typography className='font-medium mbe-1.5' color='text.primary'>
                  {item.title}
                </Typography>
                <Typography variant='body2'>{`${item.tasks}`}</Typography>
              </div>
              <CustomIconButton size='small' variant='tonal' color='secondary' className='min-is-fit'>
                {/* <DirectionalIcon ltrIconClass='tabler-chevron-right' rtlIconClass='tabler-chevron-left' /> */}
                <span className='text-sm'>به زودی</span>
              </CustomIconButton>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default AiSoftwareList
