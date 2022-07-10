import Header from 'components/Header'
import React from 'react'
import { Container } from './style'

const Clients: React.FC = () => {
  return (
    <Container xl={12}>
      <Header
        withRightSide
        logoOnLeft
        titleOneWord="Register "
        titleSecondWord="Clients"
      />
    </Container>
  )
}

export default Clients
