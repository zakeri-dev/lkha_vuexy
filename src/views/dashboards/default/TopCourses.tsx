// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

// Type Imports
import type { ThemeColor } from '@core/types'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'
import OptionMenu from '@core/components/option-menu'
import CustomIconButton from '@/@core/components/mui/IconButton'

type DataType = {
  title: string
  views: string
  icon: string
  color: ThemeColor
}

// Vars
const data: DataType[] = [
  { title: 'دفترچه تلفن', views: '948', icon: 'tabler-phone', color: 'primary' },
  { title: 'ابزار های ویرایش فایل pdf', views: '1.2k', icon: 'tabler-pdf', color: 'error' },
  { title: 'وایت بورد ساده', views: '834', icon: 'tabler-pencil', color: 'info' },
  { title: 'ارسال ایمین فایل همکاران', views: '2.5k', icon: 'tabler-share', color: 'warning' },
  { title: 'وایت بورد پیشرفته', views: '3.7k', icon: 'tabler-chalkboard', color: 'success' }
]

const TopCourses = () => {
  return (
    <Card className='h-full'>
      <CardHeader title='نرم افزار های کاربردی' action={<OptionMenu options={['ابزارها', 'پیشنهاد ابزار']} />} />
      <CardContent className='flex flex-col gap-6'>
        {data.map((item, i) => (
          <div key={i} className='flex items-center gap-4'>
            <CustomAvatar variant='rounded' skin='light' color={item.color}>
              <i className={item.icon} />
            </CustomAvatar>
            <div className='flex justify-between items-center gap-4 is-full flex-wrap'>
              <Typography className='font-medium flex-1' color='text.primary'>
                {item.title}
              </Typography>
              {/* <Chip label={`${item.views} Views`} variant='tonal' size='small' color='secondary' /> */}
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

export default TopCourses
