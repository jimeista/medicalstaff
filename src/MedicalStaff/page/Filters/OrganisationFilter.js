/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useMemo, useEffect } from 'react'
import { Menu, Dropdown, Button, Checkbox, Input } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import {
  getFilteredMedicalStaff,
  resetFilteredMedicalStaff,
} from '../../features/medicalstaff/medicalstaffSlice'

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

  //   console.log('loading organisation filter', organisations_)

  const onSubmit = () => {
    let checked_values = options.filter((o) => o.checked).map((op) => op.value)

    dispatch(
      getFilteredMedicalStaff(
        modifyParams({
          ...params,
          'medical-organisations': checked_values,
          genders: [],
        })
      )
    )
    setValue(checked_values)
    setVisible(false)
  }

  const onReset = () => {
    setOptions((options) =>
      options.map((option) => ({ ...option, checked: false }))
    )

    if (inptRef.current && inptRef.current.state) {
      inptRef.current.state.value = ''
      setFiltered()
    }

    setValue([])
    params['medical-organisations'] = []
    let pars = modifyParams(params)

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

    setVisible(false)
  }

  const onChange = (_, value) => {
    setOptions((options) =>
      options.map((o) =>
        o.value === value ? { ...o, checked: !o.checked } : o
      )
    )
  }

  const onSearch = (e) => {
    setFiltered(
      options.filter((i) =>
        i.value.toLowerCase().includes(e.target.value.toLowerCase())
      )
    )
  }

  const menu = () => {
    const data = filtered ? filtered : options

    return (
      <Menu className='Ant_Drop_Block_Style'>
        <div>
          <div>
            <Input
              placeholder='Поиск'
              allowClear
              onChange={onSearch}
              ref={inptRef}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              overflow: 'scroll',
              maxHeight: 300,
              padding: 3,
            }}
          >
            {data.map((option) => (
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
      overlay={menu()}
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
