import { Colors } from 'styles/colors'
import { Col, Divider, Typography } from 'antd'
import styled from 'styled-components'
import Drawer from 'react-modern-drawer'

const { Text } = Typography

export const DrawerStyled = styled(Drawer)`
    border: 5px solid #252525;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px 0px 0px 70px;
`

export const ContainerTextClose = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    padding: 30px 20px;
`

export const TextClose = styled(Text)`
    color: ${Colors.white};
    text-transform: uppercase;
    font-size: 0.8em;
`

export const ContainerItem = styled(Col)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    cursor: pointer;

    &:hover {
        background: ${Colors.bgInput};
        border-radius: 0px 0px 25px 0px;
    }
`

export const ContainerTextItem = styled(Col)`
    align-items: center;
    display: flex;
`

export const TextItem = styled(Text)`
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 300;
    font-size: 1.2em;
    line-height: 35px;
    margin-left: 10px;
    color: ${Colors.white}80;
`

export const IconItem = styled.img`
    width: 30px;
    height: 30px;
`

export const Separator = styled(Divider)`
    border: 0.5px solid ${Colors.border};
    border-radius: 10px;
`
