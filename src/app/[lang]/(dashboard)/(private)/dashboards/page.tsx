// MUI Imports

import Grid from '@mui/material/Grid2'

// Server Action Imports
import classNames from 'classnames'

import ContentSlider from '@/views/dashboards/default/ContentSlider'
import ShortCutsApp from '@/views/dashboards/default/ShortCutsApp'
import Applicationsoftware from '@/views/dashboards/default/Applicationsoftware'
import HodhodWelcome from '@/views/dashboards/default/HodhodWelcome'
import AiSoftwareList from '@/views/dashboards/default/AiSoftwareList'
import TabsCentered from '@/views/dashboards/default/components/TabsCentered'
import Phone from '@/views/dashboards/default/components/Phone'
import Baner from '@/views/dashboards/default/components/Baner'
import { ChatPup } from '@/components/ai-chat/Popup'

// filec: `${process.env.NEXT_PUBLIC_API__URL_images}/${data?.s3_image?.id}/${data?.s3_image?.filename_download}`

const DashboardCRM = async () => {
  // Vars

  return (
    <Grid container spacing={6}>
      <ChatPup />
      <Grid size={{ xs: 12, lg: 8 }}>
        <ContentSlider />
      </Grid>
      {/* <Grid size={{ xs: 12, sm: 6, lg: 2 }}>
        <></>
      </Grid> */}
      <Grid size={{ xs: 12, sm: 6, lg: 4 }} className='bg-black rounded-lg overflow-hidden p-1'>
        <iframe
          src='http://192.168.5.81:8080/e3edc038-38e0-444c-9040-91808c71ea51.html'
          width='100%'
          height='100%'
          frameBorder='0'
          allowFullScreen
          className=' aspect-video rounded-lg'
        ></iframe>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <ShortCutsApp />
      </Grid>
      {/* <Grid size={{ xs: 12 }} className='pbs-12'>
        <Typography variant='h3'>Navigation Cards</Typography>
        <Divider />
      </Grid> */}
      <Grid size={{ xs: 12, md: 8 }}>
        <TabsCentered />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <div className='flex flex-col gap-3'>
          <Phone />
          <Baner />
        </div>
      </Grid>
      <Grid container spacing={4} className='bg-amber-300/70 p-6 rounded-md items-stretc !border-0 !shadow-none'>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Applicationsoftware />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <HodhodWelcome />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <AiSoftwareList />
        </Grid>
      </Grid>
      {/* <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
        <DistributedBarChartOrder />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
        <LineAreaYearlySalesChart />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
        <CardStatVertical
          title='Total Profit'
          subtitle='Last Week'
          stats='1.28k'
          avatarColor='error'
          avatarIcon='tabler-credit-card'
          avatarSkin='light'
          avatarSize={44}
          chipText='-12.2%'
          chipColor='error'
          chipVariant='tonal'
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
        <CardStatVertical
          title='Total Sales'
          subtitle='Last Week'
          stats='24.67k'
          avatarColor='success'
          avatarIcon='tabler-currency-dollar'
          avatarSkin='light'
          avatarSize={44}
          chipText='+24.67%'
          chipColor='success'
          chipVariant='tonal'
        />
      </Grid> */}
      {/* <Grid size={{ xs: 12, md: 8, lg: 4 }}>
        <BarChartRevenueGrowth />
      </Grid> */}
      {/* <Grid size={{ xs: 12, lg: 8 }}>
        <EarningReportsWithTabs />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <RadarSalesChart />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <SalesByCountries />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <ProjectStatus />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
        <ActiveProjects />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <LastTransaction serverMode={serverMode} />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <ActivityTimeline />
      </Grid> */}
    </Grid>
  )
}

export default DashboardCRM
