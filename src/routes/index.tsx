import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from 'pages/auth/login'
import RecoveryPassword from 'pages/auth/recovery-password'
import Register from 'pages/auth/register'

import SalesOrders from 'pages/app/sales-orders'
import RegisterOrders from 'pages/app/sales-orders/register-orders'
import ListOrders from 'pages/app/sales-orders/list-orders'

import Clients from 'pages/app/clients'
import RegisterClients from 'pages/app/clients/register-clients'
import ListClients from 'pages/app/clients/list-clients'

const MainRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication */}
        <Route path="/" element={<Login />} />
        <Route path="/recovery-password" element={<RecoveryPassword />} />
        <Route path="/register" element={<Register />} />
        {/* App */}
        <Route path="/sales-orders" element={<SalesOrders />} />
        <Route path="/register-orders" element={<RegisterOrders />} />
        <Route path="/list-orders" element={<ListOrders />} />

        <Route path="/clients" element={<Clients />} />
        <Route path="/register-clients" element={<RegisterClients />} />
        <Route path="/list-clients" element={<ListClients />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes
