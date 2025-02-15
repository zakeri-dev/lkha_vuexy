'use client'
import { useState, type SyntheticEvent } from 'react'

import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { Card } from '@mui/material'

import ShortCutsApp from '../ShortCutsApp'
import ShortCutsAi from '../ShortCutsAi'

export default function ShortcutsTab() {
  const [value, setValue] = useState<string>('1')

  const handleChange = (_: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Card className='p-4 bg-white/0 shadow-none border-dashed border'>
      <TabContext value={value}>
        <TabList centered onChange={handleChange} aria-label='centered tabs example'>
          <Tab value={'1'} label={'سامانه ها'} className='whitespace-nowrap ' />
          <Tab value={'2'} label={'خدمات هوشمند'} className='whitespace-nowrap ' />
        </TabList>
        <TabPanel value={'1'} className=''>
          <ShortCutsApp />
        </TabPanel>
        <TabPanel value={'2'} className=''>
          <ShortCutsAi />
        </TabPanel>
      </TabContext>
    </Card>
  )
}
