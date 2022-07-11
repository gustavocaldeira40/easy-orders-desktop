import React from 'react'
import AppContext from 'context/appContext'
import MainRoutes from 'routes'
import GlobalStyle from './styles/global'

const App: React.FC = () => {
  return (
    <AppContext>
      <GlobalStyle />
      <MainRoutes />
    </AppContext>
  )
}

export default App
