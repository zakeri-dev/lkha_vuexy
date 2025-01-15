'use client'

// React Imports
import { useEffect, useState } from 'react'
import type { SyntheticEvent } from 'react'

// MUI Imports
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import { Card } from '@mui/material'

const TabsCentered = () => {
  // States
  const [value, setValue] = useState<string>('1')
  const [orgs, setOrgs] = useState<any[]>([])
  const [orgsContent, setOrgsContent] = useState({})

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
        console.log(response.data.data)
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
      url: `https://cms.app.khi.local/items/article?fields=*.*.*&filter[ref_org_chart][item:org_chart][id][_eq]=${id || 1}`,
      headers: {}
    }

    axios
      .request(config)
      .then(response => {
        console.log(response.data?.data)
        setOrgsContent({ ...orgsContent})
      })
      .catch(error => {
        console.log(error)
      })
  }

  console.log(orgsContent)

  return (
    <Card className='p-4'>
      <TabContext value={value}>
        <TabList centered onChange={handleChange} aria-label='centered tabs example'>
          {orgs.map((org: any) => (
            <Tab key={org.id} value={org.id} label={org.title} className='whitespace-nowrap ' />
          ))}
        </TabList>
        {orgs.map((org: any) => (
          <TabPanel key={org.id} value={org.id} className='bg- border rounded-md grow m-3'>
            {}
          </TabPanel>
        ))}
      </TabContext>
    </Card>
  )
}

export default TabsCentered
