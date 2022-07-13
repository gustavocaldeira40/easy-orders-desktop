import Header from 'components/Header'
import HeaderDefault from 'components/HeaderDefault'
import Menu from 'components/Menu'
import React, { useState } from 'react'
import {
  Container,
  ContainerCenter,
  ContainerContent,
  ContainerMenu,
  ContainerTextMenu,
  TextMenu,
} from './style'

type TypeOptions = {
  selected: 'inProgress' | 'approved'
}

const ListClients: React.FC = () => {
  /*
   *   CONTEXT
   */

  /*
   *   REFS
   */

  /*
   *   STATES
   */

  const [showInformation, setShowInformation] = useState(false)
  const [options, setOptions] = useState<TypeOptions>({
    selected: 'inProgress',
  })

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
    <Container xl={12}>
      <Header
        withRightSide
        logoOnLeft
        titleOneWord="List "
        titleSecondWord="Clients"
      />
      <ContainerCenter>
        <HeaderDefault
          titleMain="Welcome the List of clients"
          showInformation={showInformation}
          setShowInformation={setShowInformation}
        />
        <ContainerMenu>
          <ContainerTextMenu>
            <TextMenu
              onClick={() => setOptions({ ...options, selected: 'inProgress' })}
              isFocused={options.selected === 'inProgress'}
            >
              In Progress
            </TextMenu>
            <TextMenu
              onClick={() => setOptions({ ...options, selected: 'approved' })}
              isFocused={options.selected === 'approved'}
              marginRight="50%"
            >
              Approved
            </TextMenu>
          </ContainerTextMenu>
          <Menu />
        </ContainerMenu>
      </ContainerCenter>
    </Container>
  )
}

export default ListClients
