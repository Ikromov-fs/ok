import React from 'react'
import Main from './pages/main/main';
import './assets/main/main.css';
import Dashboard from './pages/dashboard/dashboard';
import MyClients from './pages/myClients/myClients';
import AllService from './pages/allService/allService';
import Profile from './pages/profile/profile';
import MyService from './pages/myService/myService';
import MoneyMonitoring from './pages/moneyMonitoring/moneyMonitoring';
import SupportCenter from './pages/supportCenter/supportCenter';
import Reports from './pages/reports/reports';
import Help from './pages/help/help';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Main />} >
          <Route path='/' element={<Dashboard />} />
          <Route path='/myClients' element={<MyClients />} />
          <Route path='/allService' element={<AllService />} />
          <Route path='/myService' element={<MyService />} />
          <Route path='/moneyMonitoring' element={<MoneyMonitoring />} />
          <Route path='/supportCenter' element={<SupportCenter />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/help' element={<Help />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;