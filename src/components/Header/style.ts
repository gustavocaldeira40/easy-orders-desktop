import { Col, Input, Typography } from 'antd'
import styled from 'styled-components'
import { Colors } from 'styles/colors'

const { Text } = Typography

export const ContainerGeneral = styled(Col)``

export const Container = styled(Col)<any>`
    display: flex;

    background: ${Colors.blackStrong};
    align-items: center;
    justify-content: ${(props) =>
        props.justify
            ? 'space-between'
            : props.alignLeft
            ? 'flex-start'
            : 'center'};
    border-radius: 0px 0px 15px 15px;
    padding: 5px 20px;
`

export const ImgPersonalized = styled.img`
    width: auto;
    min-width: 100px;
    height: 7vh;
`

export const ContainerTitle = styled(Col)<any>`
    flex: 1;
    display: flex;
    justify-content: center;
    margin-right: ${(props) => (props.haveRightSide ? 0 : '15%')};
    margin-left: ${(props) => (props.isVisibleSearchField ? '20%' : 0)};
    align-items: flex-end;
`

export const TextOneWord = styled(Text)`
    font-family: 'Roboto';
    font-style: normal;
    font-size: 1.6em;
    margin-right: 5px;

    color: ${Colors.secondary};
`

export const TextSecondWord = styled(Text)`
    font-family: 'Roboto';
    font-weight: 550;
    font-size: 1.7em;

    color: ${Colors.white};
`

export const ContainerInput = styled(Col)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const InputSearch = styled(Input)<any>`
    background: ${Colors.bgInput};
    border: 2px solid
        ${(props) => (props.isFocused ? Colors.white : `${Colors.white}50`)};
    border-radius: 15px;
    height: 7vh;
    color: ${Colors.white};

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;

    input {
        font-size: 1.2em;
        background: transparent;
        border: none;
        border-radius: 20px;
        margin-right: 10px;
        color: ${Colors.white};
    }
`

export const ContainerError = styled(Col)`
    justify-content: flex-start;
    margin: 10px;
    width: 80%;
    display: flex;
`

export const ErrorMessage = styled(Text)`
    color: ${Colors.error};
    text-align: left;
    font-size: 1em;
`

export const ContainerIcons = styled(Col)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Icon = styled.img<any>`
    width: ${(props) => (props.isSmall ? '20px' : '25px')};
    height: ${(props) => (props.isSmall ? '20px' : '25px')};
    margin: ${(props) => (props.withoutMargin ? 0 : '0 10px')};
    cursor: pointer;
`

export const AvatarIcon = styled.img`
    width: 35px;
    height: 35px;
    margin: 10px;
`
