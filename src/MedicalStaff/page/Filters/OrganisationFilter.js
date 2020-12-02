/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Dropdown, Button, Menu, Input } from 'antd'
import { DownOutlined } from '@ant-design/icons'

import {
  getAgesGenders,
  getFunctionalBlocks,
  getMedicalCareForms,
  getPositionMed,
  getTypes,
  getOrganisations,
  resetFiltered,
} from '../../features/medicalstaff/medicalstaffSlice'

import CheckBoxMenu from './CheckBoxMenu'

const OrganisationFilter = ({
  value,
  setValue,
  options,
  setOptions,
  params,
  inptRef,
}) => {
  const dispatch = useDispatch()
  const { organisations_ } = useSelector((state) => state.medicalstaff)

  const [visible, setVisible] = useState(false)
  const [filtered, setFiltered] = useState()

  useEffect(() => {
    dispatch(getOrganisations())
  }, [])

  useEffect(() => {
    if (organisations_.length > 0) {
      setOptions(organisations_.map((value) => ({ value, checked: false })))
    }
  }, [organisations_])

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
      filterAll(pars)
    } else {
      dispatch(resetFiltered())
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
    <Menu className='Ant_Drop_Block_Style medFilter'>
      <Input placeholder='Поиск' allowClear onChange={onSearch} ref={inptRef} />

      <CheckBoxMenu
        value={value}
        setValue={setValue}
        options={filtered ? filtered : options.slice(0, 50)}
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

export default React.memo(OrganisationFilter)
