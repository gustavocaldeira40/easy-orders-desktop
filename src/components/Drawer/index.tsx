import React, { useState } from 'react'
import { Colors } from 'styles/colors'

import ListIcon from 'assets/icons/list.png'
import AddIcon from 'assets/icons/add.png'
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
}

const DrawerComponent: React.FC<DrawerProps> = ({ onClose, visible }) => {
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
            <ContainerItem>
                <LinkComponent path="/register-clients">
                    <ContainerTextItem>
                        <IconItem src={AddIcon} alt="add icon" />
                        <TextItem>New Client</TextItem>
                    </ContainerTextItem>
                </LinkComponent>
                <IconItem src={ArrowRight} alt="arrow right" />
            </ContainerItem>
            <Separator />
            <ContainerItem>
                <LinkComponent path="/list-clients">
                    <ContainerTextItem>
                        <IconItem src={ListIcon} alt="add icon" />
                        <TextItem>List of Client</TextItem>
                    </ContainerTextItem>
                </LinkComponent>
                <IconItem src={ArrowRight} alt="arrow right" />
            </ContainerItem>
            <Separator />
        </DrawerStyled>
    )
}

export default DrawerComponent