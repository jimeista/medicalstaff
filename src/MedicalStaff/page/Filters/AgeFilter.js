import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Dropdown, Button, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'

import {
  getAgesGenders,
  getFunctionalBlocks,
  getMedicalCareForms,
  getPositionMed,
  getTypes,
  resetFiltered,
} from '../../features/medicalstaff/medicalstaffSlice'

import { CheckBoxMenu } from './CheckBoxMenu'

export const AgeFilter = ({ value, setValue, options, setOptions, params }) => {
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setOptions(
      ['20-29', '30-39', '40-49', '50-59', '60-69', '70 +'].map((value) => ({
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
    filterAll(pars)
  }

  const onReset = (pars) => {
    let count = 0
    Object.values(pars).forEach((val) => {
      if (val.length > 0) {
        count++
      }
    })

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
        type={'ages'}
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
        Возраст
        <DownOutlined />
      </Button>
    </Dropdown>
  )
}
