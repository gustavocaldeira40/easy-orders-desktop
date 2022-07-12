import React, { ReactNode } from 'react'
import LinkProps from 'types/link'
import { LinkText } from './style'

const LinkComponent: React.FC<LinkProps> = ({ children, path }) => {
  return <LinkText to={path}>{children}</LinkText>
}

export default LinkComponent
