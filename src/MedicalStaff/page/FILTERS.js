import React, { useState, useMemo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'antd'

import { resetFilteredMedicalStaff } from '../features/medicalstaff/medicalstaffSlice'
// import CheckBoxMenu from './CheckBoxMenu'
import { AgeFilter } from './Filters/AgeFilter'
import { GenderFilter } from './Filters/GenderFilter'
import { OrganisationFilter } from './Filters/OrganisationFilter'

export const FILTERS = () => {
  const [organisations, setOrganisations] = useState([])
  let [ages, setAges] = useState([])
  let [genders, setGender] = useState([])

  const dispatch = useDispatch()

  const handleReset = useCallback(() => {
    setOrganisations([])
    setAges([])
    setGender([])
    dispatch(resetFilteredMedicalStaff())
  }, [])

  const organisation_checkbox = useMemo(() => {
    return (
      <div className='MedicalStaff_filter_item'>
        <OrganisationFilter
          value={organisations}
          setValue={setOrganisations}
          params={{ ages, genders }}
        />
      </div>
    )
  }, [organisations, ages, genders])

  const ages_checkbox = useMemo(() => {
    return (
      <div className='MedicalStaff_filter_item'>
        <AgeFilter
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
        <GenderFilter
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
    <div className='MedicalStaff_filter'>
      <div className='MedicalStaff_filter_filter'>
        {organisation_checkbox}
        {ages_checkbox}
        {genders_checkbox}
        {resetBtn()}
      </div>
    </div>
  )
}
