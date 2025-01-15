// MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AvatarGroup from '@mui/material/AvatarGroup'

const ContentCardWithUser = ({ data }: any) => {
  return (
    <Card>
      <CardMedia
        image={`${process.env.NEXT_PUBLIC_CMS_URL_ASSETS}/${data?.Thumb?.id}/${data?.Thumb?.filename_download}`}
        className='bs-[180px]'
      />
      <CardContent className='relative'>
        <div className='flex w-full justify-strat items-center flex-wrap -top-12 absolute right-0 px-3'>
          <Avatar
            src='/images/avatars/avataruser.png'
            alt='محمد علوی'
            className='bg-white shadow-md w-24 h-24 border-[5px] border-backgroundPaper'

            // className='is-[78px] bs-[78px] border-[5px] border-backgroundPaper absolute start-[11px] block-start-[-39px]'
          />
          <Typography
            variant='h5'
            className='bg-white p-2 px-6 rounded-md shadow-md -mr-3'
          >
            محمد علوی
          </Typography>
          {/* <Button variant='contained'>Send Request</Button> */}
        </div>
        <p className='mt-10 font-bold'>{data?.title}</p>
        <p className='mt-2'>{data?.lead}</p>
        {/* <div className='flex justify-between items-center flex-wrap gap-x-4 gap-y-2'>
          <Typography variant='subtitle2' color='text.disabled'>
            18 mutual friends
          </Typography>
          <AvatarGroup max={4}>
            <Avatar src='/images/avatars/1.png' />
            <Avatar src='/images/avatars/5.png' />
            <Avatar src='/images/avatars/4.png' />
            <Avatar src='/images/avatars/6.png' />
            <Avatar src='/images/avatars/7.png' />
            <Avatar src='/images/avatars/8.png' />
          </AvatarGroup>
        </div> */}
      </CardContent>
    </Card>
  )
}

export default ContentCardWithUser
