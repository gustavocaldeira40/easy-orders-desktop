import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Clients from 'pages/app/clients'
import Login from 'pages/auth/login'
import RecoveryPassword from 'pages/auth/recovery-password'
import Register from 'pages/auth/register'

const MainRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* Authentication */}
                <Route path="/" element={<Login />} />
                <Route
                    path="/recovery-password"
                    element={<RecoveryPassword />}
                />
                <Route path="/register" element={<Register />} />
                {/* App */}
                <Route path="/clients" element={<Clients />} />
            </Routes>
        </Router>
    )
}

export default MainRoutes
