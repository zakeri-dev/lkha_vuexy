// Third-party Imports
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Type Imports
import axios from 'axios'

// Data Imports
import { agentsInfo } from '../fake-db/agents'

export const soroushHandler = createAsyncThunk('agents/soroushHandler', async (Msg: string, { getState, dispatch }) => {
  // const state = getState() as { agentsReducer: { selected: { msg: string } } }

  dispatch(sendMsg({ msg: Msg }))

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://flow-getway.app.khi.local/webhook/e8b2b74b-29c0-4547-b259-1f6519466509',
    headers: {
      'Content-Type': 'application/json'
    },
    data: { chatInput: Msg }
  }

  const res = await axios.request(config)

  return {
    res: res.data[0]
  }
})

export const kheradYarHandler = createAsyncThunk(
  'agents/kheradYarHandler',
  async (Msg: string, { getState, dispatch }) => {
    // const state = getState() as { agentsReducer: { selected: { msg: string } } }

    dispatch(sendMsg({ msg: Msg }))

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://flow-getway.app.khi.local/webhook/d676016f-3deb-4e27-8ed5-87329e6aae96',
      headers: {
        'Content-Type': 'application/json'
      },
      data: { chatInput: Msg }
    }

    const res = await axios.request(config)

    return {
      res: res.data[0].summary
    }
  }
)

export const agentsSlice = createSlice({
  name: 'agents',
  initialState: {
    agents: agentsInfo,
    selected: {
      loading: false,
      msg: '',
      result: null as string | null
    },
    kheradYar: {
      loading: false,
      msg: '',
      result: ``
    }
  },
  reducers: {
    sendMsg: (state, action: PayloadAction<{ msg: string }>) => {
      const { msg } = action.payload

      // console.log(msg)
      state.selected.msg = msg
    }
  },
  extraReducers: builder => {
    builder.addCase(soroushHandler.fulfilled, (state, action) => {
      state.selected.loading = false

      const result = `
                  <p>
                  <strong><span className='font-bold'>عنوان :</span></strong> ${action.payload.res.title || ''}
                  </p>
                  <p>
                  <strong><span className='font-bold'>زیر عنوان :</span></strong> ${action.payload.res.subtitle || ''}
                  </p>
                  <p>
                  <strong><span className='font-bold'>موضوعات مطرح شده :</span></strong>
                  </p>
                  <p>
                  <span className='font-bold mr-4'>موضوع اول :</span> ${action.payload.res.topics[0] || ''}
                  </p>
                  <p>
                  <span className='font-bold mr-4'>موضوع دوم :</span> ${action.payload.res.topics[1] || ''}
                  </p>
                  <p>
                  <span className='font-bold mr-4'>موضوع سوم :</span> ${action.payload.res.topics[2] || ''}
                  </p>
                  <p>
                  <span className='font-bold mr-4'>موضوع چهارم :</span> ${action.payload.res.topics[3] || ''}
                  </p>
                  <p>
                  <span className='font-bold mr-4'>موضوع پنجم :</span> ${action.payload.res.topics[4] || ''}
                  </p>
                  `

      state.selected.result = result

      // console.log(action.payload.res)
    })
    builder.addCase(soroushHandler.pending, state => {
      state.selected.loading = true
    })

    // Kherad Yar
    builder.addCase(kheradYarHandler.fulfilled, (state, action) => {
      state.selected.loading = false

      const result = `
                  <strong><span className='font-bold'>خلاصه :</span></strong> ${action.payload.res || ''}
                  `

      state.selected.result = result

      // console.log(action.payload)
    })
    builder.addCase(kheradYarHandler.pending, state => {
      state.selected.loading = true
    })
  }
})

export const { sendMsg } = agentsSlice.actions

export default agentsSlice.reducer
