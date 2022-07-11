import BlackContainer from 'components/BlackContainer'
import Header from 'components/Header'
import React, { useContext, useState } from 'react'

import WomanImage from 'assets/images/woman.png'
import AddIcon from 'assets/icons/add.png'
import EditIcon from 'assets/icons/edit.png'
import ListIcon from 'assets/icons/list.png'
import MoreIcon from 'assets/icons/more.png'
import MoreFloatingIcon from 'assets/icons/more-floating.png'

import Menu from 'components/Menu'
import { DataContext } from 'context/appContext'
import HeaderDefault from 'components/HeaderDefault'
import DrawerComponent from 'components/Drawer'
import { Drawer } from 'antd'
import {
    AffixPersonality,
    Container,
    ContainerCenter,
    ContainerContent,
    ContainerItems,
    ContainerLeft,
    ContainerRight,
    IconItems,
    ImageFloatingButton,
    ImageRight,
    TextDescriptionScreen,
    TextItems,
} from './style'

const Clients: React.FC = () => {
    /*
     *   CONTEXT
     */
    const { options } = useContext(DataContext)

    /*
     *   REFS
     */

    /*
     *   STATES
     */
    const [showInformation, setShowInformation] = useState(false)

    const [visible, setVisible] = useState(false)

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
        <>
            {options.selected === 'clients' && (
                <Container xl={12}>
                    <Header
                        withRightSide
                        logoOnLeft
                        titleOneWord="Register "
                        titleSecondWord="Clients"
                    />
                    <ContainerCenter>
                        <HeaderDefault
                            titleMain="Welcome Again"
                            showInformation={showInformation}
                            setShowInformation={setShowInformation}
                            withMenu
                        />

                        <ContainerContent>
                            <ContainerLeft>
                                <TextDescriptionScreen>
                                    You can register your customers after that
                                    place their orders
                                </TextDescriptionScreen>

                                <ContainerItems margin="50px">
                                    <IconItems src={AddIcon} alt="add icon" />
                                    <TextItems>
                                        Register with just some data
                                    </TextItems>
                                </ContainerItems>
                                <ContainerItems>
                                    <IconItems src={ListIcon} alt="list icon" />
                                    <TextItems>
                                        Track your customers and the options
                                        below
                                    </TextItems>
                                </ContainerItems>
                                <ContainerItems>
                                    <IconItems src={EditIcon} alt="edit icon" />
                                    <TextItems>
                                        Edit easily and quickly
                                    </TextItems>
                                </ContainerItems>
                                <ContainerItems>
                                    <IconItems
                                        src={MoreIcon}
                                        alt="much more icon"
                                    />
                                    <TextItems>And much more...</TextItems>
                                </ContainerItems>
                            </ContainerLeft>
                            <ContainerRight>
                                <ImageRight
                                    src={WomanImage}
                                    alt="woman image"
                                />
                            </ContainerRight>
                        </ContainerContent>

                        {visible !== true && (
                            <AffixPersonality>
                                <ImageFloatingButton
                                    src={MoreFloatingIcon}
                                    alt="floating button for see more"
                                    onClick={() => setVisible(!visible)}
                                />
                            </AffixPersonality>
                        )}
                    </ContainerCenter>

                    <DrawerComponent
                        visible={visible}
                        onClose={() => setVisible(false)}
                    />
                </Container>
            )}
        </>
    )
}

export default Clients
