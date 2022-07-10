import { Col, Typography } from 'antd'
import styled from 'styled-components'
import { Colors } from '../../styles/colors'

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

export const ContainerTitle = styled(Col)`
    flex: 1;
    display: flex;
    justify-content: center;
    margin-right: 15%;
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
