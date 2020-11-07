import React, { useState } from 'react'
import { Menu, Dropdown, Button, Checkbox, Input } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import {
  getFilteredMedicalStaff,
  resetFilteredMedicalStaff,
} from '../features/medicalstaff/medicalstaffSlice'

const CheckBoxMenu = ({
  titleBtn,
  checkBox,
  type,
  search,
  state,
  setState,
  params,
}) => {
  const [visible, setVisible] = useState(false)
  const [filtered, setFiltered] = useState()

  const dispatch = useDispatch()

  const handleSubmit = () => {
    let pars = modifyParams(params)
    dispatch(getFilteredMedicalStaff(pars))
    setVisible(false)
  }

  const handleReset = () => {
    setState([])
    params[type] = []
    let pars = modifyParams(params)

    let count = 0
    Object.values(pars).forEach((p) => {
      if (p.length > 0) {
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

  const menu = () => {
    return (
      <Menu className='Ant_Drop_Block_Style'>
        <div>
          {search && (
            <Input
              placeholder='Поиск'
              allowClear
              onChange={(e) => {
                setFiltered(
                  checkBox.filter((i) =>
                    i.toLowerCase().includes(e.target.value.toLowerCase())
                  )
                )
              }}
            />
          )}
          <Checkbox.Group
            value={state}
            className='Ant_Drop_Block_Style_Checkbox checkbox_overflow'
            options={filtered ? filtered : checkBox}
            onChange={(val) => setState(val)}
          />
          {state.length > 0 && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                padding: '5px',
              }}
            >
              <Button className='ant_drop_btn' onClick={handleReset}>
                Сбросить
              </Button>
              <Button className='ant_drop_btn' onClick={handleSubmit}>
                Применить
              </Button>
            </div>
          )}
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
        {titleBtn}
        <DownOutlined />
      </Button>
    </Dropdown>
  )
}

export default CheckBoxMenu

const modifyParams = (params) => {
  let pars = params
  if (params.genders.length > 0) {
    pars = {
      ...pars,
      genders: params.genders.map((g) => (g === 'Мужчины' ? 'male' : 'female')),
    }
  }
  if (params.ages.length > 0) {
    pars = {
      ...pars,
      ages: params.ages.map((a) => (a === '70 +' ? '70-120' : a)),
    }
  }

  return pars
}
