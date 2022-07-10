import React from 'react'
import { Col } from 'antd'

interface SeparatorProps {
    width?: string | number
    height?: string | number
    style?: any
}

const Separator: React.FC<SeparatorProps> = ({ width, style, height }) => {
    return (
        <Col
            style={{
                width: width || 20,
                height: `${height}px` || 20,
                ...style,
            }}
        />
    )
}

export default Separator
