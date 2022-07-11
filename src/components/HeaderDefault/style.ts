import { Col, Typography } from 'antd'
import styled from 'styled-components'
import { Colors } from 'styles/colors'

const { Title, Text } = Typography

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
