import { Col, Typography } from 'antd'
import styled from 'styled-components'
import { Colors } from 'styles/colors'

const { Title, Text } = Typography

export const ContainerButtons = styled(Col)`
    display: flex;
    justify-content: space-between;
`

export const ContainerContent = styled(Col)`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const ContainerTitleModal = styled(Col)`
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-left: 50px;
`

export const TitleModal = styled(Title)`
    color: ${Colors.white};
    font-weight: 600;
    flex: 1;
    text-align: center;
`

export const ContainerTextModal = styled(Col)`
    display: flex;
    justify-content: center;
`

export const TextModal = styled(Text)<any>`
    color: ${(props) => (props.isWhite ? Colors.white : Colors.secondary)};
    font-style: ${(props) => (props.isWhite ? 'normal' : 'italic')};
    font-size: ${(props) => (props.isWhite ? '1.5' : '1.8em')};
    margin-top: 10px;
    text-align: center;
    width: ${(props) => (props.auto ? 'auto' : '40%')};
    text-transform: ${(props) => (props.isWhite ? 'uppercase' : 'normal')};

    cursor: ${(props) => (props.isWhite ? 'pointer' : 'default')};
`
