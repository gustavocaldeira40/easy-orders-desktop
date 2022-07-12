import { Col } from 'antd'
import InputMask from 'react-input-mask'
import styled from 'styled-components'
import { Colors } from 'styles/colors'

export const ContainerInput = styled(Col)`
    flex: 1;
    display: flex;
    flex-direction: column;
`

export const InputStyled = styled(InputMask)<any>`
    background: ${Colors.bgInput};
    border: 1px solid
        ${(props) => (props.isFocused ? Colors.white : `${Colors.white}50`)};
    border-radius: 15px;
    font-family: Roboto;
    font-style: italic;
    font-weight: 400;
    margin-bottom: ${(props) => (props.errorMessage ? 0 : 20)}px;

    width: ${(props) => (props.width ? props.width : '40vw')};
    /* height: 8vh; */
    font-size: 1.1em;
    padding: 20px;
    color: ${Colors.white};
`
