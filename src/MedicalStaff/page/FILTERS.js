import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd'

import {
  getOrganisations,
  resetFilteredMedicalStaff,
} from '../features/medicalstaff/medicalstaffSlice'
import CheckBoxMenu from './CheckBoxMenu'

export const FILTERS = () => {
  const [organisations, setOrganisations] = useState([])
  let [ages, setAges] = useState([])
  let [genders, setGender] = useState([])

  const dispatch = useDispatch()
  const { organisations_, status } = useSelector((state) => state.medicalstaff)

  console.log('loading filters block', organisations_)

  useEffect(() => {
    dispatch(getOrganisations({}))
  }, [dispatch])

  const handleReset = useCallback(() => {
    setOrganisations([])
    setAges([])
    setGender([])
    dispatch(resetFilteredMedicalStaff())
  }, [dispatch])

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
          params={{ ages, genders }}
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
          params={{ genders, 'medical-organisations': organisations }}
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
          params={{ ages, 'medical-organisations': organisations }}
        />
      </div>
    )
  }, [genders, ages, organisations])

  const resetBtn = () => {
    if (ages.length > 0 || genders.length > 0 || organisations.length > 0) {
      return <Button onClick={handleReset}> reset </Button>
    }

    return null
  }

  return (
    status === 'success' && (
      <div className='MedicalStaff_filter'>
        <div className='MedicalStaff_filter_filter'>
          {organisation_checkbox}
          {ages_checkbox}
          {genders_checkbox}
          {resetBtn()}
        </div>
      </div>
    )
  )
}
