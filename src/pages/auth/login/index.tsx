import Header from 'components/Header'
import React, { useRef } from 'react'

import ArrowRight from 'assets/icons/arrow-right.png'
import ArrowLeft from 'assets/icons/arrow-left.png'
import { useFormik } from 'formik'

import * as yup from 'yup'
import InputComponent from 'components/Input'
import BlackContainer from 'components/BlackContainer'
import ButtonComponent from 'components/Button'

import { Link } from 'react-router-dom'
import {
  ArrowIconLeft,
  ArrowIconRight,
  Container,
  ContainerCenter,
  ContainerLink,
  ContainerNewAccount,
  ContainerRow,
  ContainerTitle,
  ContainerTop,
  LinkText,
  Separator,
  TextDescription,
  TextScreen,
  TitleScreen,
} from './style'

const Login: React.FC = () => {
  /*
   *   CONTEXT
   */

  /*
   *   REFS
   */
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

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
        password: '',
      },
      enableReinitialize: true,
      validationSchema: yup.object().shape({
        email: yup
          .string()
          .required('Inform the email')
          .email('Please provide a valid email'),
        password: yup
          .string()
          .required('Enter the password')
          .min(6, 'Password must contain at least 6 characters'),
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
    <Container xl={12}>
      <Header logoOnCenter />
      <ContainerCenter>
        <BlackContainer>
          <ContainerTop>
            <ContainerTitle>
              <ArrowIconRight src={ArrowRight} alt="arrow-right" />
              <TitleScreen>Welcome to</TitleScreen>
              <ArrowIconLeft src={ArrowLeft} alt="arrow-right" />
            </ContainerTitle>

            <TextDescription>
              Easy order, to place your order I need to register
            </TextDescription>
            <Separator />

            <InputComponent
              passRef={emailRef}
              defaultValue={values.email}
              onChange={handleChange('email')}
              placeholder="Email"
              errorMessage={errors.email}
            />
            <InputComponent
              passRef={passwordRef}
              defaultValue={values.password}
              onChange={handleChange('password')}
              placeholder="Password"
              errorMessage={errors.password}
              isPassword
            />
            <ContainerLink>
              <LinkText to="/recovery-password">
                <TextScreen isItalic>Recovery Password</TextScreen>
              </LinkText>
            </ContainerLink>
          </ContainerTop>
          <ContainerRow>
            <ContainerNewAccount>
              <TextScreen haveML fontSize={1.1} isMatte isItalic haveMR>
                Don’t have a account ?
              </TextScreen>
              <LinkText to="/register">
                <TextScreen fontSize={1.2} isBold isWhite>
                  Register Now
                </TextScreen>
              </LinkText>
            </ContainerNewAccount>
            <Link to="/clients">
              <ButtonComponent>Login</ButtonComponent>
            </Link>
          </ContainerRow>
        </BlackContainer>
      </ContainerCenter>
    </Container>
  )
}

export default Login
