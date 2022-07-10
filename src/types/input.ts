import { InputProps, InputRef } from 'antd'

export interface InputValuesProps extends InputProps {
    defaultValue: string | number
    onChange: (value: any) => void
    passRef?: React.Ref<InputRef>
    placeholder?: string
    isPassword?: boolean
    errorMessage: any
    isCheck?: boolean
}
