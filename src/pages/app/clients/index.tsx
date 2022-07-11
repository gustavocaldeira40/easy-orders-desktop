import BlackContainer from 'components/BlackContainer'
import Header from 'components/Header'
import React, { useState } from 'react'

import ArrowRight from 'assets/images/arrow-right.png'
import ArrowLeft from 'assets/images/arrow-left.png'
import IconInformation from 'assets/images/information.png'
import WomanImage from 'assets/images/woman.png'
import AddIcon from 'assets/images/add.png'
import EditIcon from 'assets/images/edit.png'
import ListIcon from 'assets/images/list.png'
import MoreIcon from 'assets/images/more.png'
import MoreFloatingIcon from 'assets/images/more-floating.png'

import Menu from 'components/Menu'
import { Affix } from 'antd'
import {
    AffixPersonality,
    ArrowIconLeft,
    ArrowIconRight,
    Container,
    ContainerCenter,
    ContainerContent,
    ContainerInformationMessage,
    ContainerItems,
    ContainerLeft,
    ContainerRight,
    ContainerTitle,
    ContainerTitleMain,
    IconInformations,
    IconItems,
    ImageFloatingButton,
    ImageRight,
    TextDescriptionScreen,
    TextInformationMessage,
    TextItems,
    TitleScreen,
} from './style'

const Clients: React.FC = () => {
    /*
     *   CONTEXT
     */

    /*
     *   REFS
     */

    /*
     *   STATES
     */
    const [showInformation, setShowInformation] = useState(false)
    /*
     *   HOOKS
     */

    /*
     *   LAYOUT
     */

    /*
     *   FORMIK
     */

    /*
     *   FUNCTIONS
     */

    /*
     *   EFFECTS
     */

    return (
        <Container xl={12}>
            <Header
                withRightSide
                logoOnLeft
                titleOneWord="Register "
                titleSecondWord="Clients"
            />
            <ContainerCenter>
                <ContainerTitle>
                    <ArrowIconRight src={ArrowRight} alt="arrow right" />
                    <ContainerTitleMain>
                        <TitleScreen>Welcome again</TitleScreen>
                        <IconInformations
                            className="icon-information"
                            src={IconInformation}
                            alt="information icon"
                            onClick={() => setShowInformation(!showInformation)}
                        />

                        {showInformation && (
                            <ContainerInformationMessage>
                                <TextInformationMessage>
                                    Click on the bottom of the screen to see the
                                    options
                                </TextInformationMessage>
                            </ContainerInformationMessage>
                        )}
                    </ContainerTitleMain>
                    <ArrowIconLeft src={ArrowLeft} alt="arrow right" />
                </ContainerTitle>

                <Menu />

                <ContainerContent>
                    <ContainerLeft>
                        <TextDescriptionScreen>
                            You can register your customers after that place
                            their orders
                        </TextDescriptionScreen>

                        <ContainerItems margin="50px">
                            <IconItems src={AddIcon} alt="add icon" />
                            <TextItems>Register with just some data</TextItems>
                        </ContainerItems>
                        <ContainerItems>
                            <IconItems src={ListIcon} alt="list icon" />
                            <TextItems>
                                Track your customers and the options below
                            </TextItems>
                        </ContainerItems>
                        <ContainerItems>
                            <IconItems src={EditIcon} alt="edit icon" />
                            <TextItems>Edit easily and quickly</TextItems>
                        </ContainerItems>
                        <ContainerItems>
                            <IconItems src={MoreIcon} alt="much more icon" />
                            <TextItems>And much more...</TextItems>
                        </ContainerItems>
                    </ContainerLeft>
                    <ContainerRight>
                        <ImageRight src={WomanImage} alt="woman image" />
                    </ContainerRight>
                </ContainerContent>
                <AffixPersonality>
                    <ImageFloatingButton
                        src={MoreFloatingIcon}
                        alt="floating button for see more"
                    />
                </AffixPersonality>
            </ContainerCenter>
        </Container>
    )
}

export default Clients
