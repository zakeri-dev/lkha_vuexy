// Component Imports

// MUI Imports
import Grid from '@mui/material/Grid2'

// Component Imports
import WelcomeAiAgentCard from '@/views/apps/ai-services/WelcomeAiAgentCard'
import AgentSetting from '@/views/apps/ai-services/AgentSetting'
import AgentRespons from '@/views/apps/ai-services/AgentRespons'

// Data Imports

const agent = {
  title: 'سروش',
  des: 'پیام‌آور هوشمند',
  stats: 'عنوان، زیرعنوان و موضوع محتوا',
  bio: 'در دنیای پرشتاب امروز، سامانه‌ای به نام “سروش” متولد شد که هدفش ساده کردن فهم و دسترسی به اطلاعات با استخراج پیام‌های اصلی از متون پیچیده و ارائه آن‌ها به صورت مختصر و روشن بود. این ایده توسط گروهی از پژوهشگران و مهندسان شکل گرفت که به دنبال ابزاری بودند که بتواند جوهره‌ی هر متن را در چند کلمه خلاصه کند و زیرعنوان‌هایی دقیق برای هر بخش تولید کند.',
  message:
    'من اینجا هستم تا شما را در میان انبوهی از اطلاعات همراهی کنم. مأموریت من این است که عنوان، زیر عنوان و پیام‌های اصلی را برایتان آشکار کنم، تا بتوانید با آرامش و اطمینان، بر آنچه واقعاً مهم است تمرکز کنید. من یاد می‌گیرم، رشد می‌کنم و هر روز بهتر می‌شوم، زیرا شما به من اعتماد کرده‌اید.',
  imageIcon: '/images/agents/soroushnq.webp',
  color: 'bg-black'
}

const ChatApp = () => {
  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }}>
        <WelcomeAiAgentCard data={agent} />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <AgentRespons />
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <AgentSetting />
      </Grid>
    </Grid>
  )
}

export default ChatApp
