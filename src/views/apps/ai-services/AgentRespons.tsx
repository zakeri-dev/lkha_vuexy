'use client'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid2'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import ReactMarkdown from 'react-markdown'

// Components Imports
// import OptionMenu from '@core/components/option-menu'
import axios from 'axios'

import { useSelector } from 'react-redux'

import SendMsgForm from './SendMsgForm'

const AgentRespons = ({ agentData }: any) => {
  //rquest data from API

  // Hooks
  const agents = useSelector((state: any) => state.agentsReducer)

  const sorushHanler = () => {}

  // console.log(agents.selected.msg)

  return (
    <Card className='light:bg-[#f3f2f5]'>
      {/* <CardHeader
      title='گفتگو'
      action={<OptionMenu options={['Refresh', 'Update', 'Share']} />}
      /> */}
      <CardContent>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-row-reverse'>
            <div className='max-w-[85%] light:bg-white dark:border-2 border-white shadow-md p-3 rounded-tr-xl rounded-tl-xl rounded-br-xl'>
              {agentData.message}
            </div>
          </div>
          {agents?.selected?.msg && (
            <div className='flex'>
              <div className='max-w-[85%] bg-[#3366ff] text-white shadow-md p-3 rounded-tr-xl rounded-tl-xl rounded-bl-xl'>
                {agents?.selected?.msg}
              </div>
            </div>
          )}
          {agents?.selected?.result ? (
            <div className='flex flex-row-reverse'>
              <div
                className='max-w-[85%] flex flex-col gap-2 light:bg-white dark:border-2 border-white shadow-md p-3 rounded-tr-xl rounded-tl-xl rounded-br-xl'
                dangerouslySetInnerHTML={{ __html: agents?.selected?.result }}
              >
                {/* {JSON.parse(agents?.selected?.result).map((item, index) => (
                  <div key={index} className='mb-4 p-4 border rounded-lg shadow-md bg-white'>
                    <h2 className='text-lg font-bold mb-2'>{item.question1}</h2>
                    <ul className='list-disc pr-5 mb-2'>
                      {Object.entries(item.answers).map(([key, answer]) => (
                        <li key={key} className='text-gray-700'>{`${key}: ${answer}`}</li>
                      ))}
                    </ul>
                    <p className='text-gray-600 italic'>{item.evaluations}</p>
                  </div>
                ))} */}
              </div>
            </div>
          ) : agents?.selected?.loading ? (
            <div className='flex flex-row-reverse'>
              <div className='max-w-[85%] flex flex-col gap-2 light:bg-white dark:border-2 border-white shadow-md p-3 rounded-tr-xl rounded-tl-xl rounded-br-xl'>
                <i className='tabler-loader-quarter animate-spin' />
              </div>
            </div>
          ) : null}

          <Grid size={{ xs: 12, sm: 12 }} alignSelf='center'>
            <SendMsgForm submitHandler={sorushHanler} />
          </Grid>
        </div>
      </CardContent>
    </Card>
  )
}

export default AgentRespons
