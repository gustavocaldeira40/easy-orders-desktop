import BlackContainer from 'components/BlackContainer'
import Header from 'components/Header'
import React, { useRef, useState } from 'react'
import ArrowLeft from 'assets/icons/arrow-left.png'
import ArrowRight from 'assets/icons/arrow-right.png'
import ButtonComponent from 'components/Button'
import { useFormik } from 'formik'
import * as yup from 'yup'
import InputComponent from 'components/Input'
import CheckIcon from 'assets/icons/check.png'
import ErrorIcon from 'assets/icons/error.png'
import {
  ArrowIconLeft,
  ArrowIconRight,
  Container,
  ContainerButton,
  ContainerCenter,
  ContainerHaveAccont,
  ContainerIcon,
  ContainerNickname,
  ContainerRow,
  ContainerTitle,
  ContainerTop,
  Icon,
  LinkText,
  TextDescription,
  TextIcon,
  TextScreen,
  TitleScreen,
} from './style'

const Register: React.FC = () => {
  /*
   *   CONTEXT
   */

  /*
   *   STATES
   */
  const [check, setCheck] = useState(false)

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
        full_name: '',
        email: '',
        nickname: '',
        password: '',
        password_confirmation: '',
      },
      enableReinitialize: true,
      validationSchema: yup.object().shape({
        full_name: yup.string().required('Inform the your full name'),
        nickname: yup.string().required('Inform the nickname'),
        email: yup
          .string()
          .required('Inform the email')
          .email('Please provide a valid email'),
        password: yup
          .string()
          .required('Enter the password')
          .min(6, 'Password must contain at least 6 characters'),
        password_confirmation: yup.string().when('password', {
          is: (val: string) => val?.length > 0,
          then: yup
            .string()
            .required('Provide password confirmation')
            .oneOf([yup.ref('password')], 'Passwords must be the same'),
        }),
      }),
      onSubmit: async (_values, { setSubmitting }) => {
        setSubmitting(true)
      },
    })

  /*
   *   REFS
   */
  const nameFullRef = useRef(null)
  const emailRef = useRef(null)
  const nicknameRef = useRef(null)
  const passwordRef = useRef(null)
  const confirmPasswordRef = useRef((values as any)?.password_confirmation)

  /*
   *   FUNCTIONS
   */

  /*
   *   EFFECTS
   */

  return (
    <Container xl={12}>
      <Header logoOnLeft titleOneWord="Register " titleSecondWord="User" />
      <ContainerCenter>
        <BlackContainer>
          <ContainerTop>
            <ContainerTitle>
              <ArrowIconRight src={ArrowRight} alt="arrow-right" />
              <TitleScreen>Welcome to</TitleScreen>
              <ArrowIconLeft src={ArrowLeft} alt="arrow-right" />
            </ContainerTitle>
            <TextDescription>
              To access the platform, you must register
            </TextDescription>
            <InputComponent
              passRef={nameFullRef}
              defaultValue={values.full_name}
              onChange={handleChange('full_name')}
              placeholder="Full Name"
              errorMessage={errors.full_name}
            />
            <ContainerNickname>
              <InputComponent
                passRef={nicknameRef}
                defaultValue={values.nickname}
                onChange={handleChange('nickname')}
                placeholder="Nickname"
                errorMessage={errors.nickname}
                isCheck
              />
              {check ? (
                <ContainerIcon>
                  <TextIcon isCheck={check}>Avaliable User</TextIcon>
                  <Icon src={CheckIcon} alt="check icon" />
                </ContainerIcon>
              ) : (
                <ContainerIcon>
                  <TextIcon isCheck={check}>User not avaliable</TextIcon>
                  <Icon src={ErrorIcon} alt="error icon" />
                </ContainerIcon>
              )}
            </ContainerNickname>

            <InputComponent
              passRef={passwordRef}
              defaultValue={values.password}
              onChange={handleChange('password')}
              placeholder="Password"
              errorMessage={errors.password}
              isPassword
            />
            <InputComponent
              passRef={confirmPasswordRef}
              defaultValue={(values as any).password_confirmation}
              onChange={handleChange('password_confirmation')}
              placeholder="Password Confirmation"
              errorMessage={errors.password_confirmation}
              isPassword
            />
          </ContainerTop>
          <ContainerRow>
            <ContainerHaveAccont>
              <TextScreen haveML fontSize={1.1} isMatte isItalic haveMR>
                Already have an account created?
              </TextScreen>
              <LinkText to="/">
                <TextScreen fontSize={1.2} isBold isWhite>
                  Login
                </TextScreen>
              </LinkText>
            </ContainerHaveAccont>
            <ContainerButton>
              <ButtonComponent disabled={!isValid} onClick={() => {}}>
                Register
              </ButtonComponent>
            </ContainerButton>
          </ContainerRow>
        </BlackContainer>
      </ContainerCenter>
    </Container>
  )
}

export default Register
