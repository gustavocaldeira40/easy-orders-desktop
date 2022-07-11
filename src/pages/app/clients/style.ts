import { Colors } from 'styles/colors'
import { Affix, Col, Typography } from 'antd'
import styled from 'styled-components'

import BGScreen from 'assets/images/bg-lines.png'

const { Title, Text } = Typography

export const Container = styled(Col)`
    background-image: url(${BGScreen});
    background-size: cover;
    background-repeat: no-repeat;
`

export const ContainerCenter = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ContainerTitle = styled(Col)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 20px;
    width: 100%;
    padding: 0 20px 0;
`

export const TitleScreen = styled(Title)`
    font-style: normal;
    font-weight: bold;
    flex: 1;
    text-align: center;
    color: ${Colors.white};
`

export const ContainerInformationMessage = styled(Col)`
    width: 250px;
    height: 80px;
    background: ${Colors.blackMatte};
    opacity: 0.9;
    border: 1px solid #252525;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 20px 20px 20px;

    display: flex;
    align-items: center;

    position: absolute;
    right: -250px;
    top: 40px;
`

export const TextInformationMessage = styled(Text)`
    font-family: 'Roboto';
    font-style: italic;
    text-align: center;
    font-size: 15px;
    padding: 10px;

    color: ${Colors.white};
`

export const ContainerTitleMain = styled(Col)`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
`

export const IconInformations = styled.img`
    width: 30px;
    height: 30px;
    margin-left: 10px;
    cursor: pointer;
`

export const ArrowIconRight = styled.img`
    min-width: 10%;
    width: 30%;
`

export const ArrowIconLeft = styled.img`
    min-width: 10%;
    width: 30%;
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
