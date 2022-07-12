import InputComponent from 'components/Input'
import React, { useState } from 'react'

import InputMask from 'react-input-mask'
import { InputMaskedProps } from 'types/inputMask'
import { InputStyled } from './style'

const InputMaskComponent: React.FC<InputMaskedProps> = ({
  defaultValue,
  value,
  onChange,
  passRef,
  errorMessage,
  placeholder,
  width,
}) => {
  const mask =
    (value as any).length === 14 ? '99.999.999/9999-99' : '999.999.99-99'

  const [isFocused, setIsFocused] = useState(false)

  return (
    <InputStyled
      width={width}
      isFocused={isFocused}
      errorMessag={errorMessage}
      ref={passRef}
      mask={mask}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
    />
  )
}

export default InputMaskComponent
