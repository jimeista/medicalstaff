import React, { useState } from 'react'
import { Menu, Dropdown, Button, Checkbox } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'

import {
  getFilteredMedicalStaff,
  setGender,
  resetFilteredMedicalStaff,
} from '../../features/medicalstaff/medicalstaffSlice'

export const GenderFilter = ({
  value,
  setValue,
  options,
  setOptions,
  params,
}) => {
  const [visible, setVisible] = useState(false)

  const dispatch = useDispatch()

  const onSubmit = () => {
    let gender = {}
    let checked_values = options
      .filter((o) => o.checked)
      .map((op) => {
        gender = { ...gender, [op.value]: op.value }
        return op.value
      })
    dispatch(setGender(gender))
    setValue(checked_values)
    setVisible(false)
  }

  const onReset = () => {
    setOptions((options) =>
      options.map((option) => ({ ...option, checked: false }))
    )
    setValue([])
    let pars = modifyParams(params)

    let count = 0
    Object.values(params).forEach((val) => {
      if (val.length > 0) {
        count++
      }
    })

    if (count > 0) {
      dispatch(getFilteredMedicalStaff({ ...pars, genders: [] }))
    } else {
      dispatch(resetFilteredMedicalStaff())
    }

    setVisible(false)
  }

  const onChange = (_, value) => {
    setOptions((options) =>
      options.map((o) =>
        o.value === value ? { ...o, checked: !o.checked } : o
      )
    )
  }

  const menu = () => {
    return (
      <Menu className='Ant_Drop_Block_Style'>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {options.map((option) => (
              <Checkbox
                key={option.value}
                checked={option.checked}
                onChange={(_) => onChange(_, option.value)}
              >
                {option.value}
              </Checkbox>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              padding: '5px',
            }}
          >
            <>
              {value.length > 0 && (
                <Button className='ant_drop_btn' onClick={onReset}>
                  Сбросить
                </Button>
              )}

              {options.filter((o) => o.checked).length > 0 && (
                <Button className='ant_drop_btn' onClick={onSubmit}>
                  Применить
                </Button>
              )}
            </>
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
  if (params.ages.length > 0) {
    prs = {
      ...prs,
      ages: params.ages.map((a) => (a === '70 +' ? '70-120' : a)),
    }
  }

  return prs
}
