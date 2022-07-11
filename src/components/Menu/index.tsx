import { DataContext } from 'context/appContext'
import React, { useContext, useState } from 'react'
import { Container, ContainerSelected, ItemActive } from './style'

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
        onClick={() => setOptions({ selected: 'clients' })}
        isActive={options.selected === 'clients'}
      >
        <ItemActive isActive={options.selected === 'clients'}>
          Clients
        </ItemActive>
      </ContainerSelected>

      <ContainerSelected
        onClick={() => setOptions({ selected: 'sales' })}
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
