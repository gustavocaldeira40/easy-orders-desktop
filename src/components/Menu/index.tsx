import React, { useState } from 'react'
import { Container, ContainerSelected, ItemActive } from './style'

type MenuProps = {
  selects: 'clients' | 'sales'
}

const Menu: React.FC = () => {
  /*
   *   CONTEXT
   */

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
  const [options, setOptions] = useState<MenuProps>({ selects: 'clients' })

  /*
   *   EFFECTS
   */

  return (
    <Container>
      <ContainerSelected
        onClick={() => setOptions({ selects: 'clients' })}
        isActive={options.selects === 'clients'}
      >
        <ItemActive isActive={options.selects === 'clients'}>
          Clients
        </ItemActive>
      </ContainerSelected>

      <ContainerSelected
        onClick={() => setOptions({ selects: 'sales' })}
        isActive={options.selects === 'sales'}
      >
        <ItemActive isActive={options.selects === 'sales'}>
          Sales Orders
        </ItemActive>
      </ContainerSelected>
    </Container>
  )
}

export default Menu
