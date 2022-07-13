import React from 'react'

import ArrowRight from 'assets/icons/arrow-right.png'
import ArrowLeft from 'assets/icons/arrow-left.png'
import IconInformation from 'assets/icons/information.png'
import Menu from 'components/Menu'
import { HeaderDefaultProps } from 'types/headerDefault'
import {
  ArrowIconLeft,
  ArrowIconRight,
  ContainerInformationMessage,
  ContainerTitle,
  ContainerTitleMain,
  IconInformations,
  TextInformationMessage,
  TitleScreen,
} from './style'

const HeaderDefault: React.FC<HeaderDefaultProps> = ({
  showInformation,
  setShowInformation,
  titleMain,
  withMenu,
  fontSize,
}) => {
  return (
    <>
      <ContainerTitle>
        <ArrowIconRight src={ArrowRight} alt="arrow right" />
        <ContainerTitleMain>
          <TitleScreen fontSize={fontSize}>{titleMain}</TitleScreen>
          <IconInformations
            className="icon-information"
            src={IconInformation}
            alt="information icon"
            onClick={() => setShowInformation(!showInformation)}
          />

          {showInformation && (
            <ContainerInformationMessage>
              <TextInformationMessage>
                Click on the bottom of the screen to see the options
              </TextInformationMessage>
            </ContainerInformationMessage>
          )}
        </ContainerTitleMain>
        <ArrowIconLeft src={ArrowLeft} alt="arrow right" />
      </ContainerTitle>

      {withMenu && <Menu />}
    </>
  )
}

export default HeaderDefault
