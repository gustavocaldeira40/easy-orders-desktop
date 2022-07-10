import { InputRef } from 'antd'

export interface HeaderProps {
    logoOnCenter?: boolean
    logoOnLeft?: boolean
    titleOneWord?: string
    titleSecondWord?: string

    withRightSide?: boolean

    defaultValue?: string | number
    onChange?: (value: any) => void
    passRef?: React.Ref<InputRef>
    placeholder?: string
    errorMessage?: any
}
