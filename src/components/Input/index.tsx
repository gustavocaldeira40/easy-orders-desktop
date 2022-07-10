import React, { useState } from 'react'
import { InputValuesProps } from 'types/input'

import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import { Colors } from 'styles/colors'
import { Typography } from 'antd'
import {
    ContainerError,
    ContainerInput,
    ErrorMessage,
    InputPersonalized,
    InputStyled,
} from './style'

const InputComponent: React.FC<InputValuesProps> = ({
    defaultValue,
    onChange,
    passRef,
    placeholder,
    isPassword,
    errorMessage,
    isCheck,
    ...rest
}) => {
    const [isFocused, setIsFocused] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    if (isPassword) {
        return (
            <ContainerInput xl={12}>
                <InputStyled
                    {...rest}
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
