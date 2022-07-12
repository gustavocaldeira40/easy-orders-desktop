import { InputRef } from 'antd'

export interface InputMaskedProps {
    defaultValue: string | number
    value?: string
    onChange: (value: any) => void
    passRef?: React.Ref<any>
    placeholder?: string
    isPassword?: boolean
    errorMessage: any
    width?: string | number
}
