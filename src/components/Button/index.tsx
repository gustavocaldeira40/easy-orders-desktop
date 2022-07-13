import { ButtonProps } from 'types/button'
import React from 'react'
import { ButtonPersonalized } from './style'

const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  outlined,
  onClick,
  secondary,
  margin,
}) => {
  return (
    <ButtonPersonalized
      secondary={secondary}
      outlined={outlined}
      onClick={onClick}
      margin={margin}
    >
      {children}
    </ButtonPersonalized>
  )
}

export default ButtonComponent
