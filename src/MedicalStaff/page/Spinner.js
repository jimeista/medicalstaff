import React from 'react'
import { Spin } from 'antd'

export const Spinner = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '90vh',
      }}
    >
      <Spin size='large' />
    </div>
  )
}
