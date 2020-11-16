import React, { useState, useRef, useMemo, useEffect } from 'react'
import { Menu, Dropdown, Button, Checkbox, Input } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import {
  getFilteredMedicalStaff,
  getOrganisations,
  resetFilteredMedicalStaff,
} from '../../features/medicalstaff/medicalstaffSlice'

export const OrganisationFilter = ({ value, setValue, params }) => {
  const [visible, setVisible] = useState(false)
  const [filtered, setFiltered] = useState()
  const [options, setOptions] = useState([])

  const inptRef = useRef(null)

  const dispatch = useDispatch()
  const { organisations_ } = useSelector((state) => state.medicalstaff)

  useEffect(() => {
    dispatch(getOrganisations({}))
  }, [])

  useMemo(() => {
    organisations_ &&
      setOptions(
        organisations_.map((i) => ({
          label: i,
          value: i,
          checked: false,
          disabled: false,
        }))
      )
  }, [organisations_])

  const handleSubmit = () => {
    let checked_values = options.filter((o) => o.checked).map((i) => i.value)

    dispatch(
      getFilteredMedicalStaff(
        modifyParams({ ...params, 'medical-organisations': checked_values })
      )
    )
    setValue(checked_values)
    setVisible(false)
  }

  const handleReset = () => {
    setValue([])
    params['medical-organisations'] = []
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

    if (inptRef.current && inptRef.current.state) {
      inptRef.current.state.value = ''
      setFiltered()
    }

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

  const handleSearch = (e) => {
    setFiltered(
      options.filter((i) =>
        i.value.toLowerCase().includes(e.target.value.toLowerCase())
      )
    )
  }

  const menu = () => {
    return (
      <Menu className='Ant_Drop_Block_Style'>
        <div>
          <div>
            <Input
              placeholder='Поиск'
              allowClear
              onChange={handleSearch}
              ref={inptRef}
            />
          </div>
          <Checkbox.Group
            className='Ant_Drop_Block_Style_Checkbox checkbox_overflow'
            options={filtered ? filtered : options}
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
        Мед. организация
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