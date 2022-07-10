import { Colors } from 'styles/colors'
import { Col, Input, Typography } from 'antd'
import styled from 'styled-components'

const { Text } = Typography

export const ContainerInput = styled(Col)`
    flex: 1;
    display: flex;
    flex-direction: column;
`

export const InputPersonalized = styled(Input)<any>`
    background: ${Colors.bgInput};
    border: 1px solid
        ${(props) => (props.isFocused ? Colors.white : `${Colors.white}50`)};
    border-radius: 15px;
    font-family: Roboto;
    margin-bottom: ${(props) => (props.errorMessage ? 0 : 20)}px;

    width: 40vw;
    height: 8vh;
    font-size: 1.2em;
    padding: 30px;
    color: ${Colors.white};
`

export const InputStyled = styled(Input)<any>`
    background: ${Colors.bgInput};
    border: 1px solid
        ${(props) => (props.isFocused ? Colors.white : `${Colors.white}50`)};
    border-radius: 20px;
    width: ${(props) => (props.width ? props.width : '40vw')};
    margin-bottom: ${(props) => (props.errorMessage ? 0 : 20)}px;
    line-height: 35px;

    color: ${Colors.white};

    input {
        flex: 1;
        min-width: 90%;
        font-size: 1.2em;
        background: transparent;
        border: none;
        height: 8vh;
        padding: 30px;
        border-radius: 20px;
        margin-right: 20px;
        color: ${Colors.white};
    }
`

export const ContainerError = styled(Col)`
    justify-content: flex-start;
    margin: 10px;
    width: 80%;
    display: flex;
`

export const ErrorMessage = styled(Typography.Text)`
    color: ${Colors.error};
    text-align: left;
    font-size: 1em;
`
