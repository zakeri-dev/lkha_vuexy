'use client'

// React Imports
import { useEffect, useState } from 'react'
import type { SyntheticEvent } from 'react'

// MUI Imports
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'

// Component Imports
import axios from 'axios'

import { Card } from '@mui/material'

import classNames from 'classnames'

import CustomTabList from '@core/components/mui/TabList'

const CardWithTabs = () => {
  // States
  const [value, setValue] = useState<string>('1')
  const [orgs, setOrgs] = useState<any[]>([])

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  useEffect(() => {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://cms.app.khi.local/items/org_chart?fields=title,id',
      headers: {}
    }

    axios
      .request(config)
      .then(response => {
        console.log(response.data.data)
        setOrgs(response.data?.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <Card className='p-4'>
      <TabContext value={value}>
        <div className='flex'>
          <CustomTabList
            className=''
            pill='true'
            orientation='vertical'
            onChange={handleChange}
            aria-label='customized vertical tabs example'
          >
            {orgs.map((org: any) => (
              <Tab key={org.id} value={org.id} label={org.title} className='whitespace-nowrap min-w-52 ' />
            ))}
          </CustomTabList>
          {orgs.map((org: any) => (
            <TabPanel key={org.id} value={org.id} className='bg- border rounded-md grow m-3'>
              <Typography>{org.title}</Typography>
            </TabPanel>
          ))}
        </div>
      </TabContext>
    </Card>
  )
}

export default CardWithTabs
