// Third-party Imports
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Type Imports
import axios from 'axios'
import FormData from 'form-data'

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

export const vajeBanHandler = createAsyncThunk('agents/vajeBanHandler', async (Msg: string, { getState, dispatch }) => {
  // const state = getState() as { agentsReducer: { selected: { msg: string } } }

  dispatch(sendMsg({ msg: Msg }))

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://flow-getway.app.khi.local/webhook/3671ed58-29ff-4f81-bab6-86e12d08ff19',
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

export const zabanYarHandler = createAsyncThunk(
  'agents/zabanYarHandler',
  async (Msg: string, { getState, dispatch }) => {
    // const state = getState() as { agentsReducer: { selected: { msg: string } } }

    dispatch(sendMsg({ msg: Msg }))

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://flow-getway.app.khi.local/webhook/7dcf6be1-c4ba-4390-bb74-74b5cd3064be',
      headers: {
        'Content-Type': 'application/json'
      },
      data: { chatInput: Msg, lang_from: 'persian', lang_to: 'english', lang_tone: 'formal' }
    }

    const res = await axios.request(config)

    return {
      res: res.data[0]
    }
  }
)

export const porsanaHandler = createAsyncThunk('agents/porsanaHandler', async (Msg: string, { getState, dispatch }) => {
  // const state = getState() as { agentsReducer: { selected: { msg: string } } }

  dispatch(sendMsg({ msg: Msg }))

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://flow-getway.app.khi.local/webhook/dbf5247d-b324-4b9d-a39a-a7deb859160d',
    headers: {
      'Content-Type': 'application/json'
    },
    data: { chatInput: Msg, number: 5, subject: '', title: '' }
  }

  const res = await axios.request(config)

  return {
    res: res.data[0]
  }
})

export const shivaHandler = createAsyncThunk('agents/shivaHandler', async (props: any, { getState, dispatch }) => {
  // const state = getState() as { agentsReducer: { selected: { msg: string } } }

  // dispatch(sendMsg({ msg: `${props.file[0]}` }))

  // console.log(props)
  const data = new FormData()

  data.append('file', props.file[0])
  data.append('model', props.Msg)

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://flow-getway.app.khi.local/webhook/192b59b7-3b9e-4175-8593-6a7368203dcc',
    data: data
  }

  const res = await axios.request(config)

  return {
    res: res.data[0]
  }
})

export const avaHandler = createAsyncThunk('agents/avaHandler', async (Msg: string, { getState, dispatch }) => {
  // const state = getState() as { agentsReducer: { selected: { msg: string } } }

  dispatch(sendMsg({ msg: Msg }))

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://flow-getway.app.khi.local/webhook/38ef870f-e5db-4b2a-87e9-2b436df52d44',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      input_text: `${Msg}`,
      sample_rate: 0,
      compress: true
    }
  }

  const res = await axios.request(config)

  return {
    res: res.data[0]
  }
})

export const agentsSlice = createSlice({
  name: 'agents',
  initialState: {
    agents: agentsInfo,
    selected: {
      loading: false,
      msg: '',
      result: null as string | null
    }
  },
  reducers: {
    sendMsg: (state, action: PayloadAction<{ msg: string }>) => {
      const { msg } = action.payload

      // console.log(msg)
      state.selected.msg = msg
    },
    clearAgent: (state) => {
      state.selected.msg = ''
      state.selected.result = ''
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

    // VajeBan Yar
    builder.addCase(vajeBanHandler.fulfilled, (state, action) => {
      state.selected.loading = false

      const result = `
                  <p>
                  <strong><span className='font-bold'>کلمات مهم و قابل توجه در متن :</span></strong>
                  </p>
                  <div className='flex gap-2 mb-2'>
                  ${action.payload.res.important_keywords.map((keyword: any) => {
                    return `<strong>${keyword}</strong>`
                  })}
                  </div>
                  <p>
                  <strong><span className='font-bold'>کلمات مهم معنایی :</span></strong>
                  </p>
                  <div className='flex gap-2 mb-2'>
                  ${action.payload.res.semantic_keywords.map((keyword: any) => {
                    return `<strong>${keyword}</strong>`
                  })}
                  </div>
                  <p>
                  <strong><span className='font-bold'>کلمات قابل استفاده در جهت یاد گیری هوش مصنوعی :</span></strong>
                  </p>
                  <div className='flex gap-2 mb-2'>
                  ${action.payload.res.deep_keywords.map((keyword: any) => {
                    return `<strong>${keyword}</strong>`
                  })}
                  </div>
                  `

      state.selected.result = result

      // console.log(action.payload)
    })
    builder.addCase(vajeBanHandler.pending, state => {
      state.selected.loading = true
    })

    // ZabanYar Yar
    builder.addCase(zabanYarHandler.fulfilled, (state, action) => {
      state.selected.loading = false

      const result = `
                  <p>
                  <strong><span className='font-bold mb-4'>ترجمه متن مورد نظر شما:</span></strong>
                  </p>
                  <p className='text-left'>
                  ${action.payload.res.translated}
                  </p>
                  `

      state.selected.result = result

      // console.log(action.payload)
    })
    builder.addCase(zabanYarHandler.pending, state => {
      state.selected.loading = true
    })

    // Porsana Yar
    builder.addCase(porsanaHandler.fulfilled, (state, action) => {
      state.selected.loading = false

      const easy = JSON.parse(action.payload.res.easy).map((item: any, index: number) => {
        return `<div key=${index} className='mb-4 p-4 border rounded-lg shadow-md bg-white'>
          <h2 className='text-lg font-bold mb-2'>${item.question1}</h2>
          <ul className='list-disc pr-5 mb-2'>
            ${Object.entries(item.answers).map(
              ([key, answer]) => `<li key={key} className='text-gray-700'>${key}: ${answer}</li>`
            )}
          </ul>
          <p className='text-gray-600 italic'>${item.evaluations}</p>
        </div>`
      })

      const mid = JSON.parse(action.payload.res.mid).map((item: any, index: number) => {
        return `<div key=${index} className='mb-4 p-4 border rounded-lg shadow-md bg-white'>
          <h2 className='text-lg font-bold mb-2'>${item.question1}</h2>
          <ul className='list-disc pr-5 mb-2'>
            ${Object.entries(item.answers).map(
              ([key, answer]) => `<li key={key} className='text-gray-700'>${key}: ${answer}</li>`
            )}
          </ul>
          <p className='text-gray-600 italic'>${item.evaluations}</p>
        </div>`
      })

      const hard = JSON.parse(action.payload.res.hard).map((item: any, index: number) => {
        return `<div key=${index} className='mb-4 p-4 border rounded-lg shadow-md bg-white'>
          <h2 className='text-lg font-bold mb-2'>${item.question1}</h2>
          <ul className='list-disc pr-5 mb-2'>
            ${Object.entries(item.answers).map(
              ([key, answer]) => `<li key={key} className='text-gray-700'>${key}: ${answer}</li>`
            )}
          </ul>
          <p className='text-gray-600 italic'>${item.evaluations}</p>
        </div>`
      })

      state.selected.result = `
      <div className='flex flex-col gap-2'>
      <h1>سوالات آسان</h1>
      <div className='p-2'>${easy}</div>
      <h1>سوالات متوسط</h1>
      <div className='p-2'>${mid}</div>
      <h1>سوالات سخت</h1>
      <div className='p-2'>${hard}</div>
      </div>
      `

      console.log(action.payload.res.easy)
    })
    builder.addCase(porsanaHandler.pending, state => {
      state.selected.loading = true
    })

    // shiva
    builder.addCase(shivaHandler.fulfilled, (state, action) => {
      state.selected.loading = false

      state.selected.result = action.payload.res.transcripts

      // console.log(action.payload.res.transcripts)
    })
    builder.addCase(shivaHandler.pending, state => {
      state.selected.loading = true
    })

    // ava
    builder.addCase(avaHandler.fulfilled, (state, action) => {
      state.selected.loading = false

      const result = `<audio controls playbackRate='0.5'>
                        <source src="${action.payload.res.play}" type="audio/mpeg">
                      </audio>`

      // console.log(action.payload.res.download_link)
      state.selected.result = result

      // console.log(action.payload.res.transcripts)
    })
    builder.addCase(avaHandler.pending, state => {
      state.selected.loading = true
    })
  }
})

export const { sendMsg, clearAgent } = agentsSlice.actions

export default agentsSlice.reducer
