'use client'

// MUI Imports
import type { ChangeEvent } from 'react'
import { useEffect, useState } from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Component Imports
import axios from 'axios'

import PhoneCard from './PhoneCard'
import CustomTextField from '@/@core/components/mui/TextField'

const Phone = () => {
  // Vars

  const [user, setUser] = useState<string>({})
  const [number, setNumber] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value)
  }

  useEffect(() => {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://cms.app.khi.local/items/telcode?fields=code,person.*.*.*&filter[code][_starts_with]=${number}`,
      headers: {}
    }

    axios
      .request(config)
      .then(response => {
        // console.log(response.data.data[0].code)
        setUser(response.data?.data[0])
      })
      .catch(error => {
        console.log(error)
      })
  }, [number])
  console.log(user)

  return (
    <Card className=' bg-gradient-to-tr	from-[#182da3] to-[#6b81fc] rounded-md'>
      {/* {number ? <PhoneCard data={user} /> : <Cardcontent />}
       */}

      <CardContent className='flex flex-col gap-6'>
        <div className='flex items-center justify-between'>
          <div className='flex justify-center flex-col gap-4 mt-5'>
            {number ? (
              <>
                <div className='flex align-center justify-between flex-wrap gap-x-4 gap-y-2'>
                  <div className='flex items-center gap-2.5'>
                    <img src='/images/avatars/avataruser.png' className='w-16' />
                    <Typography className='text-white'>
                      {user?.person?.first_name} {user?.person?.last_name}
                    </Typography>
                  </div>
                  <div className='flex items-center gap-1.5'>
                    <Typography variant='body2' className='text-white text-3xl'>
                      {user?.code}
                    </Typography>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Typography variant='h5' color='common.white' className='font-bold text-2xl'>
                  دفترچه تلفن موسسه
                </Typography>
                <Typography color='common.white'>جستجوی نام یا تلفن مورد نظر</Typography>
              </>
            )}
          </div>
          <img src='/images/icons/phone.png' className='-mis-7 -mbe-7 w-24' />
        </div>
      </CardContent>

      <div className='p-5'>
        <CustomTextField
          placeholder='جستجوی تلفن'
          value={number}
          onChange={handleChange}
          className='bg-white rounded-md w-full'
          type='number'
        />
      </div>
    </Card>
  )
}

export default Phone

// function Cardcontent() {
//   return (
//     <CardContent className='flex flex-col gap-6'>
//       <div className='flex items-center justify-between'>
//         <div className='flex flex-col gap-4'>
//           <Typography variant='h5' color='common.white' className='font-bold text-2xl'>
//             دفترچه تلفن موسسه
//           </Typography>
//           <Typography color='common.white'>جستجوی نام یا تلفن مورد نظر</Typography>
//         </div>
//         <img src='/images/icons/phone.png' className='-mis-7 -mbe-7 w-32' />
//       </div>
//     </CardContent>
//   )
// }
