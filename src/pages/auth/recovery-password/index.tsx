import Header from 'components/Header'
import React, { useRef } from 'react'

import ArrowRight from 'assets/icons/arrow-right.png'
import ArrowLeft from 'assets/icons/arrow-left.png'
import BlackContainer from 'components/BlackContainer'
import { useFormik } from 'formik'
import * as yup from 'yup'
import InputComponent from 'components/Input'
import ButtonComponent from 'components/Button'
import {
    TitleScreen,
    ArrowIconLeft,
    ArrowIconRight,
    Container,
    ContainerTitle,
    ContainerCenter,
    TextDescription,
    ContainerTop,
    ContainerButton,
} from './style'

const RecoveryPassword: React.FC = () => {
    /*
     *   CONTEXT
     */

    /*
     *   REFS
     */

    const emailRef = useRef(null)

    /*
     *   STATES
     */

    /*
     *   HOOKS
     */

    /*
     *   LAYOUT
     */

    /*
     *   FORMIK
     */
    const { errors, handleSubmit, isValid, values, handleChange, handleBlur } =
        useFormik({
            initialValues: {
                email: '',
            },
            enableReinitialize: true,
            validationSchema: yup.object().shape({
                email: yup
                    .string()
                    .required('Inform the email')
                    .email('Please provide a valid email'),
            }),
            onSubmit: async (_values, { setSubmitting }) => {
                setSubmitting(true)
            },
        })

    /*
     *   FUNCTIONS
     */

    /*
     *   EFFECTS
     */

    return (
        <Container>
            <Header
                logoOnLeft
                titleOneWord="Recovery "
                titleSecondWord="Password"
            />
            <ContainerCenter>
                <BlackContainer>
                    <ContainerTop>
                        <ContainerTitle>
                            <ArrowIconRight
                                src={ArrowRight}
                                alt="arrow-right"
                            />
                            <TitleScreen>
                                Let’s recovery your account
                            </TitleScreen>
                            <ArrowIconLeft src={ArrowLeft} alt="arrow-right" />
                        </ContainerTitle>

                        <TextDescription>
                            Enter your email and for us to recover your account
                        </TextDescription>

                        <InputComponent
                            passRef={emailRef}
                            defaultValue={values.email}
                            onChange={handleChange('email')}
                            placeholder="Email"
                            errorMessage={errors.email}
                        />
                    </ContainerTop>
                    <ContainerButton>
                        <ButtonComponent disabled={!isValid} onClick={() => {}}>
                            Recovery
                        </ButtonComponent>
                    </ContainerButton>
                </BlackContainer>
            </ContainerCenter>
        </Container>
    )
}

export default RecoveryPassword
