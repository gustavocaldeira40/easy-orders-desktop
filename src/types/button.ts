import { BaseButtonProps } from 'antd/lib/button/button'

export interface ButtonProps extends BaseButtonProps {
    children: any
    outlined?: boolean
    secondary?: boolean
    onClick?: () => void
    margin?: string | number
}
