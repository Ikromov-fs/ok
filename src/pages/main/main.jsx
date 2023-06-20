import React from 'react'
import Navbar from '../../companets/navbar/navbar'
import Saidbar from '../../companets/saidbar/saidbar'
import Dashboard from '../dashboard/dashboard'
import MyClients from '../myClients/myClients'
import AllService from '../allService/allService'
import Profile from '../profile/profile'
import MyService from '../myService/myService'
import MoneyMonitoring from '../moneyMonitoring/moneyMonitoring'
import SupportCenter from '../supportCenter/supportCenter'
import Reports from '../reports/reports'
import Help from '../help/help'
import { Routes, Route } from 'react-router-dom'
import CallSupport from '../../companets/callSupport/callSupport'
import { Box } from '@mui/system'
const Main = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={{ position: 'absolute', right: '16px', top: '80px', }}>
        <CallSupport />
      </Box>
      <Box>
        <Navbar />
        <Saidbar />
      </Box>
      <Box sx={{ position: 'absolute', left:{md: '50%',sm:'50%', xs:'50%',},  transform: 'translateX(-50%)' }}>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/myClients' element={<MyClients />} />
          <Route path='/allService' element={<AllService />} />
          <Route path='/myService' element={<MyService />} />
          <Route path='/moneyMonitoring' element={<MoneyMonitoring />} />
          <Route path='/supportCenter' element={<SupportCenter />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/help' element={<Help />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default Main;