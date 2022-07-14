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

  useEffect(() => {
    const pathActually = location.pathname

    if (pathActually) {
      if (pathActually === '/clients' || '/**/clients') {
        setOptions({ ...options, selected: 'clients' })
      } else {
        setOptions({ ...options, selected: 'sales' })
      }
    }
  }, [])

  return (
    <Container>
      <ContainerSelected
        onClick={() => {
          setOptions({ selected: 'clients' })
          navigate('/clients')
        }}
        isActive={options.selected === 'clients'}
      >
        {/* <LinkComponent style={styleDefault} path="/clients"> */}
        <ItemActive isActive={options.selected === 'clients'}>
          Clients
        </ItemActive>
        {/* </LinkComponent> */}
      </ContainerSelected>
      <ContainerSelected
        onClick={() => {
          setOptions({ selected: 'sales' })
          navigate('/sales-orders')
        }}
        isActive={options.selected === 'sales'}
      >
        {/* <LinkComponent style={styleDefault} path="/sales-orders"> */}
        <ItemActive isActive={options.selected === 'sales'}>
          Sales Orders
        </ItemActive>
        {/* </LinkComponent> */}
      </ContainerSelected>
    </Container>
  )
}

export default Menu
