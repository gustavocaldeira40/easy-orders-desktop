import styled from 'styled-components'

import BGScreen from 'assets/images/bg-lines.png'
import { Col, Typography } from 'antd'
import { Colors } from 'styles/colors'

const { Text } = Typography

export const Container = styled(Col)`
    background-image: url(${BGScreen});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
`

export const ContainerCenter = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ContainerMenu = styled(Col)`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`

export const ContainerTextMenu = styled(Col)`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const TextMenu = styled(Text)<any>`
    font-family: 'Roboto';
    font-style: ${(props) => (props.isFocused ? 'normal' : 'italic')};
    font-weight: ${(props) => (props.isFocused ? 700 : 400)};
    font-size: 1.2em;
    margin: 0 20px;
    padding: 0 20px;
    color: ${(props) => (props.isFocused ? Colors.white : Colors.secondary)};
`

export const ContainerContent = styled(Col)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
