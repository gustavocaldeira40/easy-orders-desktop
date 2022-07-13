import { Colors } from 'styles/colors'
import { Button } from 'antd'
import styled from 'styled-components'

export const ButtonPersonalized = styled(Button)<any>`
    background: ${(props) =>
        props.outlined
            ? 'transparent'
            : props.secondary
            ? Colors.bgButtonSecondary
            : Colors.bgButton};
    border-radius: 10px;
    width: 10vw;
    border: ${(props) => (props.outlined ? '1px solid white' : 'none')};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 15px 20px;
    margin: ${(props) => (props.margin ? props.margin : 0)};
    font-weight: bold;
    color: white;
    font-size: 1em;
    cursor: pointer;
`
