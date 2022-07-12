import styled from 'styled-components'

import BGScreen from 'assets/images/bg-lines.png'
import { Col, Row, Typography } from 'antd'
import { Colors } from 'styles/colors'

const { Text } = Typography

export const Container = styled(Col)`
    background-image: url(${BGScreen});
    background-size: cover;
    background-repeat: no-repeat;
`

export const Separator = styled(Col)`
    width: 20px;
`

export const ContainerCenter = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ContainerRow = styled(Col)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`

export const TextDescription = styled(Text)<any>`
    font-style: italic;
    font-weight: 400;
    font-size: ${(props) => (props.isSmall ? '1' : '1.2em')};
    color: ${Colors.secondary};
    margin-bottom: ${(props) => (props.withMarginBottom ? '20px' : 0)};
    margin-top: ${(props) => (props.withoutMT ? 0 : '20px')};
    margin-left: 10px;
`

export const ContainerContent = styled(Col)`
    flex-direction: column;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 30px;
`

export const ContainerDocument = styled(Col)`
    flex: 1;
    display: flex;
`

export const ContainerMessageField = styled(Col)``

export const ContainerAddress = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const IconAddress = styled.img`
    width: 4vw;
    height: auto;
    margin-left: 10px;
    cursor: pointer;
`

export const ContainerIcon = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
`

export const TextIcon = styled(Text)<any>`
    font-family: 'Roboto';
    font-style: italic;
    font-size: 12px;
    line-height: 33px;
    margin-right: 10px;
    color: ${(props) => (props.isCheck ? Colors.success : Colors.error)};
`

export const Icon = styled.img`
    width: 30px;
    height: 30px;
`
