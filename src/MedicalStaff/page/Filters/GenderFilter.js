import React, { useState, useRef, useMemo } from 'react'
import { Menu, Dropdown, Button, Checkbox } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import {
  getFilteredMedicalStaff,
  resetFilteredMedicalStaff,
} from '../../features/medicalstaff/medicalstaffSlice'

export const GenderFilter = ({ value, setValue, params }) => {
  const [visible, setVisible] = useState(false)
  const [options, setOptions] = useState([])

  const dispatch = useDispatch()

  useMemo(() => {
    setOptions(
      ['Мужчины', 'Женщины'].map((i) => ({
        label: i,
        value: i,
        checked: false,
        disabled: false,
      }))
    )
  }, [])

  const handleSubmit = () => {
    let checked_values = options.filter((o) => o.checked).map((i) => i.value)

    dispatch(
      getFilteredMedicalStaff(
        modifyParams({ ...params, genders: checked_values })
      )
    )
    setValue(checked_values)
    setVisible(false)
  }

  const handleReset = () => {
    setValue([])
    params.genders = []
    let pars = modifyParams(params)

    let count = 0
    Object.values(params).forEach((val) => {
      if (val.length > 0) {
        count++
      }
    })

    setOptions((state) =>
      state.map((op) => ({ ...op, disabled: false, checked: false }))
    )

    if (count > 0) {
      dispatch(getFilteredMedicalStaff(pars))
    } else {
      dispatch(resetFilteredMedicalStaff())
    }

    setVisible(false)
  }

  const handleChange = (val) => {
    setOptions((state) =>
      state.map((op) =>
        val.includes(op.value) ? { ...op, checked: !op.checked } : op
      )
    )
  }

  const menu = () => {
    return (
      <Menu className='Ant_Drop_Block_Style'>
        <div>
          <Checkbox.Group
            className='Ant_Drop_Block_Style_Checkbox checkbox_overflow'
            options={options}
            onChange={handleChange}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              padding: '5px',
            }}
          >
            {value.length > 0 && (
              <Button className='ant_drop_btn' onClick={handleReset}>
                Сбросить
              </Button>
            )}
            {options.filter((o) => o.checked && o.value).length > 0 && (
              <Button className='ant_drop_btn' onClick={handleSubmit}>
                Применить
              </Button>
            )}
          </div>
        </div>
      </Menu>
    )
  }

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

const modifyParams = (params) => {
  let prs = params
  if (params.genders.length > 0) {
    prs = {
      ...prs,
      genders: params.genders.map((g) => (g === 'Мужчины' ? 'male' : 'female')),
    }
  }
  if (params.ages.length > 0) {
    prs = {
      ...prs,
      ages: params.ages.map((a) => (a === '70 +' ? '70-120' : a)),
    }
  }

  return prs
}
