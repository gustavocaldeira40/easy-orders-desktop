import AppContext from 'context/appContext'
import React from 'react'
import MainRoutes from 'routes'
import { Colors } from './styles/colors'
import GlobalStyle from './styles/global'

const App = () => {
  return (
    <AppContext>
      <GlobalStyle />
      <MainRoutes />
    </AppContext>
  )
}

export default App
