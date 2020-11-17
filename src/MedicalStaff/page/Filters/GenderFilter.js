import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Dropdown, Button, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'

import {
  getAgesGenders,
  getFunctionalBlocks,
  getMedicalCareForms,
  getPositionMed,
  getTypes,
  setGender,
  resetFiltered,
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

  useEffect(() => {
    setOptions(
      ['Мужчины', 'Женщины'].map((value) => ({
        value,
        checked: false,
      }))
    )
  }, [setOptions])

  const filterAll = (pars) => {
    dispatch(getAgesGenders({ params: pars, isFilter: true }))
    dispatch(getFunctionalBlocks({ params: pars, isFilter: true }))
    dispatch(getMedicalCareForms({ params: pars, isFilter: true }))
    dispatch(getPositionMed({ params: pars, isFilter: true }))
    dispatch(getTypes({ params: pars, isFilter: true }))
  }

  const onSubmit = (pars) => {
    let gender = {}
    options.forEach((o) => {
      if (o.checked) {
        gender = { ...gender, [o.value]: o.value }
      }
    })
    dispatch(setGender(gender))
    filterAll(pars)
  }

  const onReset = (pars) => {
    let count = 0
    Object.values(pars).forEach((val) => {
      if (val.length > 0) {
        count++
      }
    })

    dispatch(setGender({ Мужчины: 'Мужчины', Женщины: 'Женщины' }))

    if (count > 0) {
      filterAll(pars)
    } else {
      dispatch(resetFiltered())
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
