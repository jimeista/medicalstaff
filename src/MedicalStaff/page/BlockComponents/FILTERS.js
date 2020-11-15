import React, { useState, useMemo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd'

import {
  resetFilteredMedicalStaff,
  getOrganisations,
} from '../../features/medicalstaff/medicalstaffSlice'
import CheckBoxMenu from '../CheckBoxMenu'

export const FILTERS = () => {
  const { organisations_ } = useSelector((state) => state.medicalstaff)
  const [organisations, setOrganisations] = useState([])
  let [ages, setAges] = useState([])
  let [genders, setGender] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrganisations())
  }, [dispatch])

  const handleReset = () => {
    setOrganisations([])
    setAges([])
    setGender([])
    dispatch(resetFilteredMedicalStaff())
  }

  const organisation_checkbox = useMemo(() => {
    return (
      <div className='MedicalStaff_filter_item'>
        <CheckBoxMenu
          titleBtn={'Мед. организация'}
          checkBox={organisations_}
          search={true}
          type={'medical-organisations'}
          value={organisations}
          setValue={setOrganisations}
          params={{ ages, genders, 'medical-organisations': organisations }}
        />
      </div>
    )
  }, [organisations, ages, genders, organisations_])

  const ages_checkbox = useMemo(() => {
    return (
      <div className='MedicalStaff_filter_item'>
        <CheckBoxMenu
          titleBtn={'Возраст'}
          checkBox={['20-29', '30-39', '40-49', '50-59', '60-69', '70 +']}
          type={'ages'}
          value={ages}
          setValue={setAges}
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
          value={genders}
          setValue={setGender}
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
