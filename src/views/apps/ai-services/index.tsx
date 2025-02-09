'use client'

// Component Imports

import { useEffect, useState } from 'react'

import { useRouter, useSearchParams } from 'next/navigation'

import { useDispatch, useSelector } from 'react-redux'

import { filter, find } from 'lodash'

// MUI Imports
import Grid from '@mui/material/Grid2'

// Component Imports
import WelcomeAiAgentCard from '@/views/apps/ai-services/WelcomeAiAgentCard'
import AgentRespons from '@/views/apps/ai-services/AgentRespons'
import AgentSetting from '@/views/apps/ai-services/AgentSetting'
import agentsReducer from '@/redux-store/slices/agents'

// Data Imports

const agent = {
  agent: 'dana',
  title: 'دانا',
  stats: 'گفتگو با هوش مصنوعی',
  model: 'llama3.3:latest',
  wellcome: 'سلام! متن مورد نظر خودت رو ارسال کن تا برای شما ویرایش کنم.',
  description: 'پیام‌آور هوشمند',
  agentBio:
    'در دنیای پرشتاب امروز، سامانه‌ای به نام “سروش” متولد شد که هدفش ساده کردن فهم و دسترسی به اطلاعات با استخراج پیام‌های اصلی از متون پیچیده و ارائه آن‌ها به صورت مختصر و روشن بود. این ایده توسط گروهی از پژوهشگران و مهندسان شکل گرفت که به دنبال ابزاری بودند که بتواند جوهره‌ی هر متن را در چند کلمه خلاصه کند و زیرعنوان‌هایی دقیق برای هر بخش تولید کند.',
  selectedPersona: false,
  avatar: '/images/agents/danaq.webp',
  avatarq: '/images/agents/danaq.webp',
  chats: [{ role: 'system', content: 'Speek in persian' }],
  message:
    'من اینجا هستم تا شما را در میان انبوهی از اطلاعات همراهی کنم. مأموریت من این است که عنوان، زیر عنوان و پیام‌های اصلی را برایتان آشکار کنم، تا بتوانید با آرامش و اطمینان، بر آنچه واقعاً مهم است تمرکز کنید. من یاد می‌گیرم، رشد می‌کنم و هر روز بهتر می‌شوم، زیرا شما به من اعتماد کرده‌اید.',
  color: 'bg-black'
}

const ChatApp = () => {
  const [selectedAgent, setSelectedAgent] = useState(agent)

  // const router = useRouter()
  const searchParams = useSearchParams()

  // Hooks
  const agents = useSelector((state: any) => state.agentsReducer.agents)

  useEffect(() => {
    setSelectedAgent(find(agents, { agent: searchParams.get('agent') }) || agent)
  }, [agents, searchParams])

  // const dispatch = useDispatch()
  // console.log(find(agents, { agent: searchParams.get('agent') }))

  // console.log(searchParams.get('agent'))
  // console.log(agents)

  // console.log(selectedAgent)

  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }}>
        <WelcomeAiAgentCard data={selectedAgent} />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <AgentSetting />
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <AgentRespons agentData={selectedAgent} />
      </Grid>
    </Grid>
  )
}

export default ChatApp
