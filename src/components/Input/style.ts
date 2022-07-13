import { Colors } from 'styles/colors'
import { Col, Input, InputNumber, Typography } from 'antd'
import styled from 'styled-components'

export const ContainerInput = styled(Col)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const InputPersonalized = styled(Input)<any>`
    background: ${Colors.bgInput};
    border: 1px solid
        ${(props) => (props.isFocused ? Colors.white : `${Colors.white}50`)};
    border-radius: 15px;
    font-family: Roboto;
    font-style: italic;
    font-weight: 400;
    margin-bottom: ${(props) =>
        props.withMB
            ? props.withMB
            : props.withoutMB
            ? 0
            : props.errorMessage
            ? 0
            : 20}px;

    width: ${(props) => (props.width ? props.width : '40vw')};

    font-size: 1.2em;
    padding: 20px;
    color: ${Colors.white};
`

export const InputWithMessage = styled(Input)<any>`
    background: ${Colors.bgInput};
    border: 1px solid
        ${(props) => (props.isFocused ? Colors.white : `${Colors.white}50`)};
    border-radius: 15px;
    font-family: Roboto;
    font-style: italic;
    font-weight: 400;
    margin-bottom: ${(props) =>
        props.withMB ? props.withMB : props.errorMessage ? 0 : 20}px;

    width: ${(props) => (props.width ? props.width : '20vw')};

    font-size: 1.2em;
    padding: 20px;
    color: ${Colors.white};

    /* Firefox */
    input[type='number'] {
        -moz-appearance: textfield;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`

export const InputStyled = styled(Input)<any>`
    background: ${Colors.bgInput};
    border: 1px solid
        ${(props) => (props.isFocused ? Colors.white : `${Colors.white}50`)};
    border-radius: 20px;
    width: ${(props) => (props.width ? props.width : '40vw')};
    margin-bottom: ${(props) =>
        props.withMB ? props.withMB : props.errorMessage ? 0 : 20}px;

    color: ${Colors.white};

    input {
        font-size: 1.2em;
        background: transparent;
        border: none;
        padding: 20px;
        border-radius: 20px;
        margin-right: 20px;
        color: ${Colors.white};
        min-width: 90%;
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
