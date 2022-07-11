import { Col, Typography } from 'antd'
import styled from 'styled-components'
import { Colors } from 'styles/colors'

const { Text } = Typography

export const Container = styled(Col)`
    width: 50vw;
    height: 8vh;
    background: ${Colors.white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    display: flex;
    align-items: center;
    padding: 5px;
    align-self: center;
    margin: 10px 0;
`

export const ContainerSelected = styled(Col)<any>`
    width: 50%;
    height: 7vh;
    background: ${(props) =>
        props.isActive ? Colors.blackStrong : 'transparent'};
    border-radius: 25px;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const ItemActive = styled(Text)<any>`
    font-family: 'Roboto';
    font-style: ${(props) => (props.isActive ? 'normal' : 'italic')};
    font-weight: ${(props) => (props.isActive ? 550 : 400)};
    font-size: ${(props) => (props.isActive ? '20px' : '18px')};

    color: ${(props) => (props.isActive ? Colors.white : Colors.secondary)};
`
