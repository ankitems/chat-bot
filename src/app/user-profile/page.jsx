'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'

// Component Imports
import CustomTabList from '@core/components/mui/TabList'
import UserProfileHeader from './UserProfileHeader'

const UserProfile = ({ tabContentList, data }) => {
  // State
  const [activeTab, setActiveTab] = useState('profile')

  const handleChange = (event, value) => {
    setActiveTab(value)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <UserProfileHeader data={data?.profileHeader} />
      </Grid>
      {activeTab === undefined ? null : (
        <Grid item xs={12} className='flex flex-col gap-6'>
          <TabContext value={activeTab}>
            <CustomTabList onChange={handleChange} variant='scrollable' pill='true'>
              <Tab
                label={
                  <div className='flex items-center gap-2'>
                    <i className='ri-user-3-line text-lg' />
                    Profile
                  </div>
                }
                value='profile'
              />
              <Tab
                label={
                  <div className='flex items-center gap-2'>
                    <i className='ri-team-line text-lg' />
                    Teams
                  </div>
                }
                value='teams'
              />
              <Tab
                label={
                  <div className='flex items-center gap-2'>
                    <i className='ri-computer-line text-lg' />
                    Projects
                  </div>
                }
                value='projects'
              />
              <Tab
                label={
                  <div className='flex items-center gap-2'>
                    <i className='ri-link-m text-lg' />
                    Connections
                  </div>
                }
                value='connections'
              />
            </CustomTabList>

            {/* Add a guard clause to ensure `tabContentList` and `tabContentList[activeTab]` exist */}
            <TabPanel value={activeTab} className='p-0'>
              {tabContentList && tabContentList[activeTab] ? (
                tabContentList[activeTab]
              ) : (
                <div>No content available for this tab.</div>
              )}
            </TabPanel>
          </TabContext>
        </Grid>
      )}
    </Grid>
  )
}

export default UserProfile
