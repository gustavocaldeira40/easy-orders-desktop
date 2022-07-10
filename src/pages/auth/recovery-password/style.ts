import { Colors } from 'styles/colors'
import { Col, Typography } from 'antd'
import styled from 'styled-components'

import BGScreen from 'assets/images/bg-lines.png'

const { Title, Text } = Typography

export const Container = styled(Col)`
    background-image: url(${BGScreen});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

export const ContainerCenter = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerTop = styled(Col)`
    margin-top: 30px;
    display: flex;
    align-items: center;
    flex: 1;
    flex-direction: column;
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

export const TextDescription = styled(Text)`
    font-style: italic;
    font-weight: 400;
    font-size: 1.4em;
    text-align: center;
    width: 25vw;
    color: ${Colors.secondary};
    margin-bottom: 20px;

    margin-top: 40px;
`

export const ContainerButton = styled(Col)`
    justify-content: flex-end;
    display: flex;
`
