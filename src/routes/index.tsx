import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from 'pages/auth/login'
import RecoveryPassword from 'pages/auth/recovery-password'
import Register from 'pages/auth/register'

import Clients from 'pages/app/clients'
import RegisterClients from 'pages/app/register-clients'
import ListClients from 'pages/app/list-clients'

const MainRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication */}
        <Route path="/" element={<Login />} />
        <Route path="/recovery-password" element={<RecoveryPassword />} />
        <Route path="/register" element={<Register />} />
        {/* App */}
        <Route path="/clients" element={<Clients />} />
        <Route path="/register-clients" element={<RegisterClients />} />
        <Route path="/list-clients" element={<ListClients />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes
