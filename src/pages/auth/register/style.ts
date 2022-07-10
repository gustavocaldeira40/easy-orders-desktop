import { Colors } from 'styles/colors'
import styled from 'styled-components'
import { Col, Row, Typography } from 'antd'

import BGScreen from 'assets/images/bg-lines.png'
import { Link } from 'react-router-dom'

const { Title, Text } = Typography

export const Container = styled(Col)`
    background-image: url(${BGScreen});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

export const ContainerTop = styled(Col)`
    margin-top: 30px;
    display: flex;
    align-items: center;
    flex: 1;
    flex-direction: column;
`

export const ContainerCenter = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerTitle = styled(Col)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const TitleScreen = styled(Title)`
    font-style: normal;
    font-weight: 500;
    flex: 1;
    text-align: center;
    color: ${Colors.white};
`

export const ArrowIconRight = styled.img`
    min-width: 10%;
    width: 30%;
`

export const ArrowIconLeft = styled.img`
    min-width: 10%;
    width: 30%;
`

export const ContainerRow = styled(Row)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-top: 20px;
`

export const TextDescription = styled(Text)`
    font-style: italic;
    font-weight: 400;
    font-size: 1.4em;
    text-align: center;
    width: 25vw;
    color: ${Colors.secondary};
    margin-bottom: 20px;

    margin-top: 20px;
`

export const ContainerNickname = styled(Col)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 150px;
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

export const ContainerHaveAccont = styled(Col)`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const LinkText = styled(Link)`
    text-decoration: none;
`

export const ContainerButton = styled(Col)`
    justify-content: flex-end;
    display: flex;
`

// MG = Margin Right
// MF = Margin Left
export const TextScreen = styled(Text)<any>`
    font-size: ${(props) => (props.fontSize ? `${props.fontSize}em` : '1em')};
    font-weight: ${(props) => (props.isBold ? 500 : 'normal')};
    font-style: ${(props) => (props.isItalic ? 'italic' : 'normal')};
    margin-right: ${(props) => (props.haveMR ? '10px' : 0)};
    margin-left: ${(props) => (props.haveML ? '100px' : 0)};
    font-family: 'Roboto';
    color: ${(props) =>
        props.isWhite
            ? Colors.white
            : props.isMatte
            ? Colors.secondary
            : Colors.white};
`
