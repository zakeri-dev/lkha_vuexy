'use client'

// React Imports
import { useEffect, useState } from 'react'
import type { SyntheticEvent } from 'react'

// MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import axios from 'axios'
import { Card, Grid2 } from '@mui/material'

import { Grid } from 'swiper/modules'

import BrowserStates from './ListOfContent'
import ContentCardWithUser from './ContentCardWithUser'

const TabsCentered = () => {
  // States
  const [value, setValue] = useState<string>('1')
  const [orgs, setOrgs] = useState<any[]>([])
  const [orgsContent, setOrgsContent] = useState<{ [key: string]: any[] }>({})

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  useEffect(() => {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://cms.app.khi.local/items/org_chart?fields=title,id&limit=5',
      headers: {}
    }

    axios
      .request(config)
      .then(response => {
        // console.log(response.data.data)
        setValue(response.data?.data[0].id)
        setOrgs(response.data?.data)
        response.data.data.map((org: any) => {
          GetContent(org.id)
        })
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  function GetContent(orgid: any) {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://cms.app.khi.local/items/article?fields=*.*.*&filter[ref_org_chart][item:org_chart][id][_eq]=${orgid}`,
      headers: {}
    }

    axios
      .request(config)
      .then(response => {
        // console.log(response.data?.data)
        setOrgsContent(orgsContent => ({ ...orgsContent, [orgid]: response.data?.data }))
      })
      .catch(error => {
        console.log(error)
      })
  }

  // console.log(orgsContent['2'])

  // console.log(orgs)

  return (
    <Card className='p-4'>
      <TabContext value={value}>
        <TabList centered onChange={handleChange} aria-label='centered tabs example'>
          {orgs.map((org: any) => (
            <Tab key={org.id} value={org.id} label={org.title} className='whitespace-nowrap ' />
          ))}
        </TabList>
        {orgs.map((org: any) => (
          <TabPanel key={org.id} value={org.id} className=''>
            <Grid2 container spacing={6}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                {orgsContent[org.id] ? <BrowserStates data={orgsContent[org.id]} /> : null}
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                {orgsContent[org.id] && orgsContent[org.id].length > 0 ? (
                  <ContentCardWithUser data={orgsContent[org.id][0]} />
                ) : (
                  <></>
                )}
              </Grid2>
            </Grid2>
          </TabPanel>
        ))}
      </TabContext>
    </Card>
  )
}

export default TabsCentered
