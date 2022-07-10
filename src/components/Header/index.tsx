import React from 'react'

import { Typography } from 'antd'
import Logo from '../../assets/visual/easy-orders.png'
import {
  Container,
  ContainerGeneral,
  ContainerTitle,
  ImgPersonalized,
  TextOneWord,
  TextSecondWord,
} from './style'
import { HeaderProps } from '../../types/header'

const Header: React.FC<HeaderProps> = ({
  logoOnCenter,
  logoOnLeft,
  titleOneWord,
  titleSecondWord,
}) => {
  return (
    <Container justify={titleOneWord} alignLeft={logoOnLeft} xl={12}>
      {logoOnLeft ? <ImgPersonalized src={Logo} alt="logo" /> : null}

      {titleOneWord ? (
        <ContainerTitle>
          <TextOneWord> {titleOneWord}</TextOneWord>
          <TextSecondWord> {titleSecondWord}</TextSecondWord>
        </ContainerTitle>
      ) : null}

      {logoOnCenter ? (
        <Container xl={12}>
          <ImgPersonalized src={Logo} alt="logo" />
        </Container>
      ) : null}
    </Container>
  )
}

export default Header
