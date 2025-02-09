// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'

// import OptionMenu from '@core/components/option-menu'

type DataType = {
  name: string
  profession: string
  totalCourses: number
  avatar: string
}

// Vars
const data: DataType[] = [
  {
    name: 'مقاله اهمیت فضای ....',
    profession: 'Business Intelligence',
    totalCourses: 33,
    avatar: '/images/avatars/avataruser.png'
  },
  { name: 'متن خلاصه بیانات ...', profession: 'Digital Marketing', totalCourses: 52, avatar: '/images/avatars/2.png' },
  { name: 'سخنان سال 136 ...', profession: 'UI/UX Design', totalCourses: 12, avatar: '/images/avatars/3.png' },
  { name: 'سخنان سال 136 ...', profession: 'UI/UX Design', totalCourses: 12, avatar: '/images/avatars/3.png' },
  { name: 'سخنان سال 136 ...', profession: 'UI/UX Design', totalCourses: 12, avatar: '/images/avatars/3.png' },
  { name: 'سخنان سال 136 ...', profession: 'UI/UX Design', totalCourses: 12, avatar: '/images/avatars/3.png' },
  { name: 'سخنان سال 136 ...', profession: 'UI/UX Design', totalCourses: 12, avatar: '/images/avatars/3.png' },
  { name: 'خلاصه حضور در جمع ...', profession: 'Vue', totalCourses: 8, avatar: '/images/avatars/4.png' }
]

const AgentSetting = () => {
  return (
    <Card className='bs-full '>
      <CardHeader
        title='تاریخچه گفتگو'

        //  action={<OptionMenu options={['Refresh', 'Update', 'Share']} />}
      />
      <Divider />
      <div className='flex justify-between plb-2 pli-6'>
        <Typography className='uppercase'>عنوان</Typography>
        <Typography className='uppercase'>وضعیت</Typography>
      </div>
      <Divider />
      <CardContent className='flex flex-col '>
        {data.map((item, i) => (
          <div
            key={i}
            className='group flex items-center gap-4 px-3 py-4 hover:text-white hover:bg-[#3366ff] hover:shadow-md rounded-md cursor-pointer'
          >
            {/* <CustomAvatar size={34} src={item.avatar} /> */}
            <div className='flex justify-between items-center is-full gap-4'>
              <div>
                <Typography className='font-medium group-hover:text-white'>{item.name}</Typography>
                {/* <Typography variant='body2'>{item.profession}</Typography> */}
              </div>
              <Typography className='font-medium group-hover:text-white'>{item.totalCourses}</Typography>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default AgentSetting
