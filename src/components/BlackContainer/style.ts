import { Colors } from 'styles/colors'
import { Col } from 'antd'
import styled from 'styled-components'

export const ContainerMain = styled(Col)`
    background-color: ${Colors.blackMatte};
    border-radius: 25px;
    min-height: 80vh;
    width: 80%;
    margin: 30px;
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`
