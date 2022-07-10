import { BaseButtonProps } from 'antd/lib/button/button'

export interface ButtonProps extends BaseButtonProps {
    children: any

    onClick?: () => void
}
