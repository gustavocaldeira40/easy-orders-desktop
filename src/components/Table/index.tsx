import { Table } from 'antd'
import React from 'react'
import './style.css'
import ArrowRight from 'assets/icons/arrow-pagination-right.png'
import ArrowLeft from 'assets/icons/arrow-pagination-left.png'

import Icon from '@ant-design/icons'

interface TableProps {
    data: Array<any>
    columns: Array<any>
}

const TableComponent: React.FC<TableProps> = ({ columns, data }) => {
    return (
        <div
            style={{
                backgroundColor: '#00000055',
                marginTop: 50,
                borderRadius: 20,
            }}
        >
            <Table
                bordered
                pagination={false}
                rowClassName="row-table"
                className="table"
                dataSource={data}
                columns={columns}
            />
        </div>
    )
}

export default TableComponent
