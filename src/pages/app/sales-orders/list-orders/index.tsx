import Header from 'components/Header'
import HeaderDefault from 'components/HeaderDefault'
import Menu from 'components/Menu'
import TableComponent from 'components/Table'
import React, { useState } from 'react'
import IconInProgress from 'assets/icons/timer.png'
import IconEdit from 'assets/icons/edit-list.png'
import IconRemove from 'assets/icons/delete.png'
import IconCheck from 'assets/icons/check.png'
import IconEyes from 'assets/icons/eye.png'
import { moneyMask } from 'utils/convert'
import ModalComponent from 'components/Modal'
import {
  Container,
  ContainerCenter,
  ContainerContent,
  ContainerIcons,
  ContainerMenu,
  ContainerStatus,
  ContainerTextMenu,
  IconsActions,
  Line,
  TextMenu,
  TextStatus,
} from './style'

type TypeOptions = {
  selected: 'inProgress' | 'approved'
}

const ListOrders: React.FC = () => {
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
  const [showModalRemove, setShowModalRemove] = useState(false)
  const [options, setOptions] = useState<TypeOptions>({
    selected: 'inProgress',
  })

  const dataSource = [
    {
      key: 1,
      client: 'E. ECia',
      product: 'Bis 32 px',
      saleValue: moneyMask('100,00'),
    },
    {
      key: 2,
      client: 'E. ECia',
      product: 'Bis 32 px',
      saleValue: moneyMask('50,00'),
    },
    {
      key: 3,
      client: 'E. ECia',
      product: 'Bis 32 px',
      saleValue: moneyMask('200,00'),
    },
    {
      key: 4,
      client: 'E. ECia',
      product: 'Bis 32 px',
      saleValue: moneyMask('90,00'),
    },
  ]

  const columns = [
    {
      title: 'Client',
      dataIndex: 'client',
      key: 'client',
      width: 300,
      align: 'center',
    },
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
      width: 200,
      align: 'center',
    },
    {
      title: 'Sale Value',
      dataIndex: 'saleValue',
      key: 'saleValue',
      width: 200,
      align: 'center',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 200,
      align: 'center',
      render: () => (
        <ContainerStatus>
          {options.selected === 'inProgress' ? (
            <>
              <IconsActions src={IconInProgress} alt="timer icon" />
              <TextStatus>Waiting for confirmation</TextStatus>
            </>
          ) : (
            <>
              <IconsActions src={IconCheck} alt="check icon" />
              <TextStatus>Confirmed order</TextStatus>
            </>
          )}
        </ContainerStatus>
      ),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      width: 200,
      align: 'center',
      render: () =>
        options.selected === 'inProgress' ? (
          <ContainerIcons>
            <IconsActions isButton src={IconEdit} alt="icon of edit" />
            <Line />
            <IconsActions
              isButton
              src={IconRemove}
              alt="icon of remove"
              onClick={() => setShowModalRemove(true)}
            />
          </ContainerIcons>
        ) : (
          <IconsActions isButton src={IconEyes} alt="icon of eyes" />
        ),
    },
  ]

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
    <>
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
                onClick={() =>
                  setOptions({
                    ...options,
                    selected: 'inProgress',
                  })
                }
                isFocused={options.selected === 'inProgress'}
              >
                In Progress
              </TextMenu>
              <TextMenu
                onClick={() =>
                  setOptions({
                    ...options,
                    selected: 'approved',
                  })
                }
                isFocused={options.selected === 'approved'}
                marginRight="50%"
              >
                Approved
              </TextMenu>
            </ContainerTextMenu>
            <Menu />
          </ContainerMenu>

          <TableComponent columns={columns} data={dataSource} />
        </ContainerCenter>
      </Container>
      <ModalComponent
        visible={showModalRemove}
        handleOk={() => {}}
        handleCancel={() => setShowModalRemove(false)}
      />
    </>
  )
}

export default ListOrders
