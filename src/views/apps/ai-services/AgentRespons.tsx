'use client'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid2'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Components Imports
// import OptionMenu from '@core/components/option-menu'
import SendMsgForm from './SendMsgForm'

const AgentRespons = ({ agentData }: any) => {
  // Hooks

  return (
    <Card className='light:bg-[#f3f2f5]'>
      {/* <CardHeader
      title='گفتگو'
      action={<OptionMenu options={['Refresh', 'Update', 'Share']} />}
      /> */}
      <CardContent>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-row-reverse'>
            <div className='w-4/5 light:bg-white dark:border-2 border-white shadow-md p-3 rounded-tr-xl rounded-tl-xl rounded-br-xl'>
              {agentData.message}
            </div>
          </div>
          <div className='flex'>
            <div className='w-4/5 bg-[#3366ff] text-white shadow-md p-3 rounded-tr-xl rounded-tl-xl rounded-bl-xl'>
              {agentData.message}
            </div>
          </div>

          <Grid size={{ xs: 12, sm: 12 }} alignSelf='center'>
            <SendMsgForm />
          </Grid>
        </div>
      </CardContent>
    </Card>
  )
}

export default AgentRespons
