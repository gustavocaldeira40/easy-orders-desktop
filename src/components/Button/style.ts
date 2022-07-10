import { Colors } from 'styles/colors'
import { Button } from 'antd'
import styled from 'styled-components'

export const ButtonPersonalized = styled(Button)`
    background: ${Colors.bgButton};
    border-radius: 10px;
    width: 10vw;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 15px 20px;

    font-weight: bold;
    color: white;
    font-size: 1em;
    cursor: pointer;
`
