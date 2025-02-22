'use client'
import { useState, type SyntheticEvent } from 'react'

import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { Card } from '@mui/material'

import ShortCutsApp from '../ShortCutsApp'
import ShortCutsAivideo from '../ShortCutsAivideo'
import ShortCutsDataApp from '../ShortCutsDataApp'
import ShortCutsAiText from '../ShortCutsAiText'
import ShortCutsAiAudio from '../ShortCutsAiAudio'

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
          <Tab value={'2'} label={'تحلیل داده'} className='whitespace-nowrap ' />
          <Tab value={'3'} label={'خدمات هوشمند متن'} className='whitespace-nowrap ' />
          <Tab value={'4'} label={'خدمات هوشمند صدا'} className='whitespace-nowrap ' />
          <Tab value={'5'} label={'خدمات هوشمند بینایی ماشین'} className='whitespace-nowrap ' />
        </TabList>
        <TabPanel value={'1'} className=''>
          <ShortCutsApp />
        </TabPanel>
        <TabPanel value={'2'} className=''>
          <ShortCutsDataApp />
        </TabPanel>
        <TabPanel value={'3'} className=''>
          <ShortCutsAiText />
        </TabPanel>
        <TabPanel value={'4'} className=''>
          <ShortCutsAiAudio />
        </TabPanel>
        <TabPanel value={'5'} className=''>
          <ShortCutsAivideo />
        </TabPanel>
      </TabContext>
    </Card>
  )
}
