import BlackContainer from 'components/BlackContainer'
import Header from 'components/Header'
import HeaderDefault from 'components/HeaderDefault'
import InputComponent from 'components/Input'
import InputMaskComponent from 'components/InputMask'
import { useFormik } from 'formik'
import React, { useRef, useState } from 'react'
import * as yup from 'yup'

import CheckIcon from 'assets/icons/check.png'
import ErrorIcon from 'assets/icons/error.png'
import { Input } from 'antd'
import SearchRounded from 'assets/icons/search-rounded.png'
import {
  Container,
  ContainerAddress,
  ContainerCenter,
  ContainerContent,
  ContainerDocument,
  ContainerIcon,
  ContainerMessageField,
  ContainerRow,
  Icon,
  IconAddress,
  Separator,
  TextDescription,
  TextIcon,
} from './style'

const RegisterClients: React.FC = () => {
  /*
   *   CONTEXT
   */

  /*
   *   REFS
   */
  const corporateNameRef = useRef(null)
  const documentRef = useRef(null)
  const addressRef = useRef(null)
  const numberRef = useRef(null)
  const cityRef = useRef(null)
  const stateRef = useRef(null)

  /*
   *   STATES
   */

  const [showInformation, setShowInformation] = useState(false)
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
        corporate_name: '',
        document: '',
        address: '',
        number: '',
        city: '',
        state: '',
      },
      enableReinitialize: true,
      validationSchema: yup.object().shape({
        corportate_name: yup
          .string()
          .required('Inform the your corportate name'),
        document: yup.string().required('Inform the your document'),
        address: yup.string().required('Inform the your address'),
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
        withRightSide
        logoOnLeft
        titleOneWord="New "
        titleSecondWord="Client"
      />

      <ContainerCenter>
        <BlackContainer>
          <HeaderDefault
            titleMain="Welcome Again"
            showInformation={showInformation}
            setShowInformation={setShowInformation}
            withMenu
          />
          <ContainerContent>
            <TextDescription>Fill in the fields below</TextDescription>
            <ContainerRow xl={12}>
              <InputComponent
                passRef={corporateNameRef}
                defaultValue={values.corporate_name}
                onChange={handleChange('corporate_name')}
                placeholder="Comporate Name"
                errorMessage={errors.corporate_name}
              />
              <Separator />
              <ContainerDocument>
                <InputMaskComponent
                  passRef={documentRef}
                  width="65%"
                  defaultValue={values.document}
                  value={values.document}
                  onChange={handleChange('document')}
                  placeholder="Document"
                  errorMessage={errors.document}
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
              </ContainerDocument>
              <ContainerMessageField>
                <ContainerAddress>
                  <InputComponent
                    passRef={addressRef}
                    defaultValue={values.address}
                    onChange={handleChange('address')}
                    placeholder="Address"
                    errorMessage={errors.address}
                    width="35vw"
                  />
                  <IconAddress src={SearchRounded} alt="search rounded" />
                </ContainerAddress>
                <TextDescription withMarginBottom withoutMT isSmall>
                  Enter your address to autocomplete
                </TextDescription>
              </ContainerMessageField>
              <Separator />
              <InputComponent
                passRef={numberRef}
                defaultValue={values.number}
                onChange={handleChange('number')}
                placeholder="N.º"
                errorMessage={errors.number}
                isInputNumber
                maxLength={5}
                width="5vw"
                disabled
              />
              <Separator />
              <InputComponent
                passRef={cityRef}
                defaultValue={values.city}
                onChange={handleChange('city')}
                placeholder="City"
                errorMessage={errors.city}
                width="15vw"
                disabled
              />
              <Separator />
              <InputComponent
                passRef={stateRef}
                defaultValue={values.state}
                onChange={handleChange('state')}
                placeholder="State"
                errorMessage={errors.state}
                width="10vw"
                disabled
              />
            </ContainerRow>
          </ContainerContent>
        </BlackContainer>
      </ContainerCenter>
    </Container>
  )
}

export default RegisterClients
