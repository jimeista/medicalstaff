import React, { useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd'

import {
  resetParams,
  resetFilteredMedicalStaff,
} from '../../features/medicalstaff/medicalstaffSlice'
import CheckBoxMenu from '../CheckBoxMenu'

export const FILTERS = () => {
  const { data, status } = useSelector((state) => state.medicalstaff)
  const [organisations, setOrganisations] = useState([])
  const [ages, setAges] = useState([])
  let [gender, setGender] = useState([])

  const dispatch = useDispatch()

  const handleReset = () => {
    setOrganisations([])
    setAges([])
    setGender([])
    dispatch(resetFilteredMedicalStaff())
    dispatch(resetParams())
  }

  const organisation_checkbox = useMemo(() => {
    let checkbox = status === 'success' ? setCheckbox(data) : []
    return (
      <div className='MedicalStaff_filter_item'>
        <CheckBoxMenu
          titleBtn={'Мед. организация'}
          checkBox={checkbox}
          search={true}
          type={'medical-organisations'}
          state={organisations}
          setState={setOrganisations}
        />
      </div>
    )
  }, [data, status, organisations, setOrganisations])

  const gender_checkbox = useMemo(() => {
    return (
      <div className='MedicalStaff_filter_item'>
        <CheckBoxMenu
          titleBtn={'Пол'}
          checkBox={['Мужчины', 'Женщины']}
          type={'genders'}
          state={ages}
          setState={setAges}
        />
      </div>
    )
  }, [ages, setAges])

  const ages_checkbox = useMemo(() => {
    return (
      <div className='MedicalStaff_filter_item'>
        <CheckBoxMenu
          titleBtn={'Возраст'}
          checkBox={['20-29', '30-39', '40-49', '50-59', '60-69', '70 +']}
          type={'ages'}
          state={gender}
          setState={setGender}
        />
      </div>
    )
  }, [gender, setGender])

  return (
    <div className='MedicalStaff_filter'>
      <div className='MedicalStaff_filter_filter'>
        {organisation_checkbox}
        {ages_checkbox}
        {gender_checkbox}
        <Button onClick={handleReset}> reset </Button>
      </div>
    </div>
  )
}

const setCheckbox = (data) => {
  let ob = {}

  data.forEach((i) => {
    ob = { ...ob, [i['medical-organisation']]: i['medical-organisation'] }
  })

  let arr = Object.values(ob).splice(0, 9)
  return arr
}
