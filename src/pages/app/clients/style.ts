import { Colors } from 'styles/colors'
import { Affix, Col, Typography } from 'antd'
import styled from 'styled-components'

import BGScreen from 'assets/images/bg-lines.png'

const { Title, Text } = Typography

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

export const ContainerContent = styled(Col)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ContainerLeft = styled(Col)`
    padding: 40px 20px;
    margin: 10px;
`

export const TextDescriptionScreen = styled(Text)`
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 300;
    font-size: 1.5em;
    color: ${Colors.tertiary};
`

export const ContainerItems = styled(Col)<any>`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: ${(props) => (props.margin ? props.margin : '10px')};
`

export const TextItems = styled(Text)`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    margin-left: 10px;
    color: ${Colors.white};
`

export const IconItems = styled.img`
    width: 30px;
    height: 30px;
`

export const ContainerRight = styled(Col)`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ImageRight = styled.img`
    width: 67%;
    max-width: 100%;
    height: auto;
`

export const AffixPersonality = styled(Affix)`
    position: absolute;
    right: 30px;
    bottom: 20px;
    cursor: pointer;
`

export const ImageFloatingButton = styled.img`
    width: 5.13vw;
`
