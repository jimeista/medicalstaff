import React, { useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd'

import { resetFilteredMedicalStaff } from '../../features/medicalstaff/medicalstaffSlice'
import CheckBoxMenu from '../CheckBoxMenu'

export const FILTERS = () => {
  const { data, status } = useSelector((state) => state.medicalstaff)
  const [organisations, setOrganisations] = useState([])
  let [ages, setAges] = useState([])
  let [genders, setGender] = useState([])

  const dispatch = useDispatch()

  const handleReset = (params) => {
    setOrganisations([])
    setAges([])
    setGender([])
    dispatch(resetFilteredMedicalStaff())
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
          params={{ ages, genders, 'medical-organisations': organisations }}
        />
      </div>
    )
  }, [data, status, organisations, ages, genders])

  const ages_checkbox = useMemo(() => {
    return (
      <div className='MedicalStaff_filter_item'>
        <CheckBoxMenu
          titleBtn={'Возраст'}
          checkBox={['20-29', '30-39', '40-49', '50-59', '60-69', '70 +']}
          type={'ages'}
          state={ages}
          setState={setAges}
          params={{ ages, genders, 'medical-organisations': organisations }}
        />
      </div>
    )
  }, [ages, genders, organisations])

  const genders_checkbox = useMemo(() => {
    return (
      <div className='MedicalStaff_filter_item'>
        <CheckBoxMenu
          titleBtn={'Пол'}
          checkBox={['Мужчины', 'Женщины']}
          type={'genders'}
          state={genders}
          setState={setGender}
          params={{ ages, genders, 'medical-organisations': organisations }}
        />
      </div>
    )
  }, [genders, ages, organisations])

  return (
    <div className='MedicalStaff_filter'>
      <div className='MedicalStaff_filter_filter'>
        {organisation_checkbox}
        {ages_checkbox}
        {genders_checkbox}
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

  // let arr = Object.values(ob).splice(0, 9)
  let arr = Object.values(ob)

  return arr
}
