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
    height: 100vh;
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

export const ContainerStatus = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TextStatus = styled(Text)`
    font-style: italic;
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
    /* margin: 0 20px; */
    margin-right: 20px;
    margin-left: 20px;
    padding: 10px 30px;
    border-radius: 20px;
    color: ${(props) => (props.isFocused ? Colors.white : Colors.secondary)};

    &:hover {
        background-color: #00000055;
    }
`

export const ContainerContent = styled(Col)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Line = styled(Col)`
    border: 1px solid #252525;
    border-radius: 20px;
    height: 20px;
`

export const IconsActions = styled.img<any>`
    width: 20px;
    height: 20px;
    margin: 10px;
    cursor: ${(props) => (props.isButton ? 'pointer' : 'default')};
`

export const ContainerIcons = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: center;
`
