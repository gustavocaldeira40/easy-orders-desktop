import React, { useState } from 'react'
import { InputValuesProps } from 'types/input'

import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import { Colors } from 'styles/colors'
import {
  ContainerError,
  ContainerInput,
  ErrorMessage,
  InputPersonalized,
  InputStyled,
  InputWithMessage,
} from './style'

const InputComponent: React.FC<InputValuesProps> = ({
  defaultValue,
  onChange,
  passRef,
  placeholder,
  isPassword,
  errorMessage,
  isCheck,
  width,
  isInputNumber,
  maxLength,
  withMB,
  withoutMB,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  if (isInputNumber) {
    return (
      <ContainerInput xl={12}>
        <InputWithMessage
          {...rest}
          ref={passRef}
          width={width}
          autoComplete="none"
          isFocused={isFocused}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          defaultValue={defaultValue}
          onChange={onChange}
          placeholder={placeholder}
          errorMessage={errorMessage}
          maxLength={maxLength}
          withMB={withMB}
        />

        {errorMessage && (
          <ContainerError>
            <ErrorMessage>{errorMessage}</ErrorMessage>
          </ContainerError>
        )}
      </ContainerInput>
    )
  }

  if (isPassword) {
    return (
      <ContainerInput xl={12}>
        <InputStyled
          {...rest}
          width={width}
          autoComplete="none"
          errorMessage={errorMessage}
          isFocused={isFocused}
          defaultValue={defaultValue}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type={isVisible ? 'text' : 'password'}
          suffix={
            isVisible ? (
              <EyeInvisibleOutlined
                color={Colors.white}
                onClick={() => setIsVisible(!isVisible)}
              />
            ) : (
              <EyeOutlined
                color={Colors.white}
                onClick={() => setIsVisible(!isVisible)}
              />
            )
          }
        />

        {errorMessage && (
          <ContainerError>
            <ErrorMessage>{errorMessage}</ErrorMessage>
          </ContainerError>
        )}
      </ContainerInput>
    )
  }
  return (
    <ContainerInput xl={12}>
      <InputPersonalized
        {...rest}
        ref={passRef}
        autoComplete="none"
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        errorMessage={errorMessage}
        width={width}
        widthMB={withMB}
        withoutMB={withoutMB}
      />

      {errorMessage && (
        <ContainerError>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </ContainerError>
      )}
    </ContainerInput>
  )
}

export default InputComponent
