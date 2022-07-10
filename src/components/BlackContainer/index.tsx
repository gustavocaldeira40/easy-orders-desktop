import React from 'react'
import { BlackContainerProps } from 'types/container'
import { ContainerMain } from './style'

const BlackContainer: React.FC<BlackContainerProps> = ({ children }) => {
    return <ContainerMain>{children}</ContainerMain>
}

export default BlackContainer
