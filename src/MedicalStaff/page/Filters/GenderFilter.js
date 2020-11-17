import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Dropdown, Button, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'

import {
  getFilteredMedicalStaff,
  setGender,
  resetFilteredMedicalStaff,
} from '../../features/medicalstaff/medicalstaffSlice'

import { CheckBoxMenu } from './CheckBoxMenu'

export const GenderFilter = ({
  value,
  setValue,
  options,
  setOptions,
  params,
}) => {
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)

  const onSubmit = (pars) => {
    let gender = {}
    options.forEach((o) => {
      if (o.checked) {
        gender = { ...gender, [o.value]: o.value }
      }
    })
    dispatch(setGender(gender))

    dispatch(getFilteredMedicalStaff(pars))
  }

  const onReset = (pars) => {
    let count = 0
    Object.values(pars).forEach((val) => {
      if (val.length > 0) {
        count++
      }
    })

    if (count > 0) {
      dispatch(getFilteredMedicalStaff({ ...pars, genders: [] }))
    } else {
      dispatch(resetFilteredMedicalStaff())
    }
  }

  const menu = (
    <Menu className='Ant_Drop_Block_Style'>
      <CheckBoxMenu
        options={options}
        setOptions={setOptions}
        value={value}
        setValue={setValue}
        setVisible={setVisible}
        params={params}
        type={'genders'}
        handleSubmit={onSubmit}
        handleReset={onReset}
      />
    </Menu>
  )

  return (
    <Dropdown
      overlay={menu}
      trigger={['click']}
      visible={visible}
      onVisibleChange={(val) => setVisible(val)}
      className='ant_drop_menu'
    >
      <Button className='ant_drop_btn'>
        Пол
        <DownOutlined />
      </Button>
    </Dropdown>
  )
}
