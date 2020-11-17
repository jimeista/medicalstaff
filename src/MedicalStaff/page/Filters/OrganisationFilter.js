/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Dropdown, Button, Menu, Input } from 'antd'
import { DownOutlined } from '@ant-design/icons'

import {
  getFilteredMedicalStaff,
  resetFilteredMedicalStaff,
} from '../../features/medicalstaff/medicalstaffSlice'

import { CheckBoxMenu } from './CheckBoxMenu'

export const OrganisationFilter = ({
  value,
  setValue,
  options,
  setOptions,
  params,
  inptRef,
}) => {
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)
  const [filtered, setFiltered] = useState()

  const onSubmit = (pars) => {
    dispatch(getFilteredMedicalStaff(pars))
  }

  const onReset = (pars) => {
    if (inptRef.current && inptRef.current.state) {
      inptRef.current.state.value = ''
    }
    setFiltered()

    let count = 0
    Object.values(params).forEach((val) => {
      if (val.length > 0) {
        count++
      }
    })

    if (count > 0) {
      dispatch(getFilteredMedicalStaff(pars))
    } else {
      dispatch(resetFilteredMedicalStaff())
    }
  }

  const onSearch = (e) => {
    setFiltered(
      options.filter((o) =>
        o.value.toLowerCase().includes(e.target.value.toLowerCase())
      )
    )
  }

  const menu = (
    <Menu className='Ant_Drop_Block_Style'>
      <div>
        <Input
          placeholder='Поиск'
          allowClear
          onChange={onSearch}
          ref={inptRef}
        />
      </div>
      <CheckBoxMenu
        value={value}
        setValue={setValue}
        options={filtered ? filtered : options}
        setOptions={setOptions}
        setVisible={setVisible}
        params={params}
        type={'medical-organisations'}
        handleReset={onReset}
        handleSubmit={onSubmit}
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
        Мед. организация
        <DownOutlined />
      </Button>
    </Dropdown>
  )
}
