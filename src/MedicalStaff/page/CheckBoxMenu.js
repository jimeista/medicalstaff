import React, { useMemo, useCallback, useState } from 'react'
import { Menu, Dropdown, Button, Checkbox } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import {
  getFilteredMedicalStaff,
  setParams,
  resetParams,
} from '../features/medicalstaff/medicalstaffSlice'

const CheckBoxMenu = ({ titleBtn, checkBox, type, state, setState }) => {
  const [visible, setVisible] = useState(false)

  const dispatch = useDispatch()
  const { params } = useSelector((state) => state.medicalstaff)

  const handleSubmit = () => {
    if (type === 'genders') {
      state = state.map((g) => (g === 'Мужчины' ? 'male' : 'female'))
    }
    let ob = { ...params, [type]: state }
    dispatch(setParams({ [type]: state }))
    dispatch(getFilteredMedicalStaff(ob))

    setVisible(false)
  }

  const handleReset = () => {
    dispatch(resetParams())
    setState([])
    setVisible(false)
  }

  const menu = () => {
    return (
      <Menu className='Ant_Drop_Block_Style'>
        <div>
          <Checkbox.Group
            value={state}
            className='Ant_Drop_Block_Style_Checkbox checkbox_overflow'
            options={checkBox}
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
