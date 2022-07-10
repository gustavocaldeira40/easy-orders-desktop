import React from 'react'
import { Col } from 'antd'
import styled from 'styled-components/'
import MainRoutes from 'routes'
import Header from './components/Header'
import { Colors } from './styles/colors'
import GlobalStyle from './styles/global'

const App = () => {
    return (
        <>
            <GlobalStyle />
            <MainRoutes />
        </>
    )
}

export default App
