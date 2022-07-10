import Login from 'pages/auth/login'
import RecoveryPassword from 'pages/auth/recovery-password'
import Register from 'pages/auth/register'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import { Container } from './styles';

const MainRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route
                    path="/recovery-password"
                    element={<RecoveryPassword />}
                />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    )
}

export default MainRoutes
