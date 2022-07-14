import React, { useState } from 'react'
import ArrowRight from 'assets/icons/arrow.png'
import LinkComponent from 'components/Link'
import {
  ContainerItem,
  ContainerTextClose,
  ContainerTextItem,
  DrawerStyled,
  IconItem,
  Separator,
  TextClose,
  TextItem,
} from './style'

import 'react-modern-drawer/dist/index.css'

interface DrawerProps {
  onClose: () => void
  visible: boolean
  data: Array<any>
}

const DrawerComponent: React.FC<DrawerProps> = ({ onClose, visible, data }) => {
  return (
    <DrawerStyled
      direction="right"
      open={visible}
      duration={300}
      onClose={onClose}
      enableOverlay
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
    >
      <ContainerTextClose onClick={() => onClose()}>
        <TextClose>Fechar</TextClose>
      </ContainerTextClose>
      {data &&
        data?.map((item, index) => {
          return (
            <>
              <ContainerItem key={index}>
                <LinkComponent path={item?.path}>
                  <ContainerTextItem>
                    <IconItem src={item?.icon} alt="add icon" />
                    <TextItem>{item?.title}</TextItem>
                  </ContainerTextItem>
                </LinkComponent>
                <IconItem src={ArrowRight} alt="arrow right" />
              </ContainerItem>
              <Separator />
            </>
          )
        })}
      {/* <ContainerItem>
                <LinkComponent path="/list-clients">
                    <ContainerTextItem>
                        <IconItem src={ListIcon} alt="add icon" />

                        <TextItem>List of Client</TextItem>
                    </ContainerTextItem>
                </LinkComponent>
                <IconItem src={ArrowRight} alt="arrow right" />
            </ContainerItem>
            <Separator /> */}
    </DrawerStyled>
  )
}

export default DrawerComponent
