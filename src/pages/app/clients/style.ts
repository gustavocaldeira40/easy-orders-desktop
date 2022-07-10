import { Col, Typography } from 'antd'
import styled from 'styled-components'

import BGScreen from 'assets/images/bg-lines.png'

const { Title, Text } = Typography

export const Container = styled(Col)`
    background-image: url(${BGScreen});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

export const ContainerCenter = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerTop = styled(Col)`
    margin-top: 30px;
    display: flex;
    align-items: center;
    flex: 1;
    flex-direction: column;
`
