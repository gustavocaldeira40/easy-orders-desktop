/* eslint-disable no-constant-condition */
import LinkComponent from 'components/Link'
import { DataContext } from 'context/appContext'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container, ContainerSelected, ItemActive } from './style'

const styleDefault = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const Menu: React.FC = () => {
  /*
   *   CONTEXT
   */

  const { options, setOptions } = useContext(DataContext)

  /*
   *   REFS
   */

  /*
   *   STATES
   */

  /*
   *   HOOKS
   */
  const navigate = useNavigate()
  const location = useLocation()

  /*
   *   LAYOUT
   */

  /*
   *   FORMIK
   */

  /*
   *   FUNCTIONS
   */

  /*
   *   EFFECTS
   */

  return (
    <Container>
      <ContainerSelected
        onClick={() => {
          setOptions({ selected: 'clients' })
          navigate('/clients')
        }}
        isActive={options.selected === 'clients'}
      >
        <ItemActive isActive={options.selected === 'clients'}>
          Clients
        </ItemActive>
      </ContainerSelected>
      <ContainerSelected
        onClick={() => {
          setOptions({ selected: 'sales' })
          navigate('/sales-orders')
        }}
        isActive={options.selected === 'sales'}
      >
        <ItemActive isActive={options.selected === 'sales'}>
          Sales Orders
        </ItemActive>
      </ContainerSelected>
    </Container>
  )
}

export default Menu
