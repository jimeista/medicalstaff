import React, { useMemo, useCallback, useState } from 'react'
import { Menu, Dropdown, Button, Checkbox } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import {
  getMedicalStaff,
  resetParams,
  setParams,
} from '../features/medicalstaff/medicalstaffSlice'

const CheckBoxMenu = ({ titleBtn, checkBox, type }) => {
  const { params } = useSelector((state) => state.medicalstaff)
  const dispatch = useDispatch()

  const [state, setState] = useState([])
  const [visible, setVisible] = useState(false)

  // console.log(type, state)
  const handleSubmit = () => {
    dispatch(getMedicalStaff(params))
    dispatch(setParams({ [type]: state }))
    setVisible(false)
  }

  const handleReset = () => {
    let prms = delete params[type]
    dispatch(getMedicalStaff(prms))
    dispatch(resetParams(type))
    setState([])
    setVisible(false)
  }

  // const menu = useMemo(() => {
  //   return (
  //     <Menu className='Ant_Drop_Block_Style'>
  //       <div>
  //         <Checkbox.Group
  //           className='Ant_Drop_Block_Style_Checkbox checkbox_overflow'
  //           options={checkBox}
  //           onChange={(val) => setState(val)}
  //         />
  //         {state.length > 0 && (
  //           <div
  //             style={{
  //               display: 'flex',
  //               justifyContent: 'space-between',
  //               width: '100%',
  //               padding: '5px',
  //             }}
  //           >
  //             <Button className='ant_drop_btn' onClick={handleReset}>
  //               Сбросить
  //             </Button>
  //             <Button className='ant_drop_btn' onClick={handleSubmit}>
  //               Применить
  //             </Button>
  //           </div>
  //         )}
  //       </div>
  //     </Menu>
  //   )
  // }, [handleReset, handleSubmit, checkBox, state])

  const menu = (
    <Menu className='Ant_Drop_Block_Style'>
      <div>
        <Checkbox.Group
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
