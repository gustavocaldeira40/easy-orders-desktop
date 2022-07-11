import React, { useEffect, useState } from 'react'

import Logo from 'assets/visual/easy-orders.png'
import { HeaderProps } from 'types/header'
import AvatarExample from 'assets/images/avatar-example.png'
import SearchIcon from 'assets/icons/search.png'
import CloseIcon from 'assets/icons/close.png'
import {
    Container,
    ContainerGeneral,
    ContainerTitle,
    ImgPersonalized,
    TextOneWord,
    TextSecondWord,
    ContainerIcons,
    AvatarIcon,
    Icon,
    ContainerInput,
    InputSearch,
} from './style'

const Header: React.FC<HeaderProps> = ({
    logoOnCenter,
    logoOnLeft,
    titleOneWord,
    titleSecondWord,
    withRightSide,

    defaultValue,
    errorMessage,
    onChange,
    passRef,
    placeholder,
    ...rest
}) => {
    /*
     *   CONTEXT
     */

    /*
     *   REFS
     */

    /*
     *   STATES
     */
    const [visible, setVisible] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

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
        <Container
            {...rest}
            justify={titleOneWord}
            alignLeft={logoOnLeft}
            xl={12}
        >
            {logoOnLeft && <ImgPersonalized src={Logo} alt="logo" />}

            {titleOneWord && (
                <ContainerTitle
                    isVisibleSearchField={visible}
                    haveRightSide={withRightSide}
                >
                    <TextOneWord> {titleOneWord}</TextOneWord>
                    <TextSecondWord> {titleSecondWord}</TextSecondWord>
                </ContainerTitle>
            )}

            {logoOnCenter && (
                <Container xl={12}>
                    <ImgPersonalized src={Logo} alt="logo" />
                </Container>
            )}

            {withRightSide && (
                <ContainerIcons>
                    {visible ? (
                        <ContainerInput>
                            <InputSearch
                                {...rest}
                                autoComplete="none"
                                errorMessage={errorMessage}
                                isFocused={isFocused}
                                defaultValue={defaultValue}
                                onChange={onChange}
                                placeholder={placeholder}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                suffix={
                                    <>
                                        <Icon
                                            src={SearchIcon}
                                            alt="search icon"
                                            withoutMargin
                                            smallIcon
                                        />
                                    </>
                                }
                            />

                            <Icon
                                withMargin
                                src={CloseIcon}
                                alt="close icon"
                                onClick={() => setVisible(!visible)}
                            />
                        </ContainerInput>
                    ) : (
                        <Icon
                            src={SearchIcon}
                            alt="search icon"
                            onClick={() => setVisible(!visible)}
                        />
                    )}
                    <AvatarIcon src={AvatarExample} alt="avatar user" />
                </ContainerIcons>
            )}
        </Container>
    )
}

export default Header
