// React Imports
import { useState } from 'react'
import type { FormEvent, KeyboardEvent } from 'react'

// MUI Imports
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { useDispatch, useSelector } from 'react-redux'

import { sendMsg } from '@/redux-store/slices/agents'

const SendMsgForm = ({}: any) => {
  const dispatch = useDispatch()
  const agents = useSelector((state: any) => state.agentsReducer.agents)

  // States
  const [msg, setMsg] = useState('')

  const handleSendMsg = (event: FormEvent | KeyboardEvent, msg: string) => {
    event.preventDefault()

    if (msg.trim() !== '') {
      dispatch(sendMsg({ msg }))
      setMsg('')
    }
  }

  console.log(agents)

  const handleInputEndAdornment = () => {
    return (
      <div className='flex items-center gap-1'>
        <>
          {/* <IconButton>
            <i className='tabler-microphone text-textPrimary' />
          </IconButton>
          <IconButton component='label' htmlFor='upload-img'>
            <i className='tabler-paperclip text-textPrimary' />
            <input hidden type='file' id='upload-img' />
          </IconButton> */}
          {/* <CustomIconButton variant='contained' color='primary' type='submit'>
            <i className='tabler-send' />
          </CustomIconButton> */}
          <Button variant='contained' color='primary' type='submit' endIcon={<i className='tabler-send' />}>
            ارسال
          </Button>
        </>
      </div>
    )
  }

  return (
    <form autoComplete='off' onSubmit={event => handleSendMsg(event, msg)}>
      <TextField
        fullWidth
        multiline
        maxRows={10}
        placeholder='متن خود را ابنجا بنویسید ...'
        value={msg}
        className=''
        onChange={e => setMsg(e.target.value)}
        sx={{
          '& fieldset': { border: '0' },
          '& .MuiOutlinedInput-root': {
            background: 'var(--mui-palette-background-paper)',
            boxShadow: 'var(--mui-customShadows-xs) !important'
          }
        }}
        onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            handleSendMsg(e, msg)
          }
        }}
        size='small'
        slotProps={{ input: { endAdornment: handleInputEndAdornment() } }}
      />
    </form>
  )
}

export default SendMsgForm
