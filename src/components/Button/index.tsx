import { ButtonProps } from 'types/button'
import React from 'react'
import { ButtonPersonalized } from './style'

const ButtonComponent: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <ButtonPersonalized onClick={onClick}>{children}</ButtonPersonalized>
}

export default ButtonComponent
