// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'

const PhoneCard = ({ data }: any) => {
  return (
    <Card className='bg-linkedin/0'>
      <CardContent>
        {/* <div className='flex items-center gap-2 mbe-4'>
          <i className='tabler-user text-3xl text-white' />
          <Typography variant='h5' className='text-white'>
            LinkedIn Card
          </Typography>
        </div>
        <Typography className='mbe-4 text-white'>
          With the Internet spreading like wildfire and reaching every part of our daily life, more and more traffic is
          directed.
        </Typography> */}
        <div className='flex align-center justify-between flex-wrap gap-x-4 gap-y-2'>
          <div className='flex items-center gap-2.5'>
            <img src='/images/avatars/avataruser.png' className='w-16' />
            <Typography className='text-white'>
              {data?.person?.first_name} {data?.person?.last_name}
            </Typography>
          </div>
          <div className='flex items-center gap-1.5'>
            <Typography variant='body2' className='text-white text-3xl'>
              {data?.code}
            </Typography>
            <i className='tabler-phone text-3xl text-white' />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default PhoneCard
