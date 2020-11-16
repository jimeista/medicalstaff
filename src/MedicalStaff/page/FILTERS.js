import React, { useState, useMemo, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'

import {
  getOrganisations,
  resetFilteredMedicalStaff,
} from '../features/medicalstaff/medicalstaffSlice'
// import CheckBoxMenu from './CheckBoxMenu'
import { AgeFilter } from './Filters/AgeFilter'
import { GenderFilter } from './Filters/GenderFilter'
import { OrganisationFilter } from './Filters/OrganisationFilter'

export const FILTERS = () => {
  const [organisations, setOrganisations] = useState([])
  let [ages, setAges] = useState(
    ['20-29', '30-39', '40-49', '50-59', '60-69', '70 +'].map((value) => ({
      value,
      checked: false,
    }))
  )
  let [genders, setGender] = useState(
    ['Мужчины', 'Женщины'].map((value) => ({
      value,
      checked: false,
    }))
  )

  const { organisations_ } = useSelector((state) => state.medicalstaff)

  // console.log('loading filters')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrganisations())
  }, [])

  const handleReset = useCallback(() => {
    setOrganisations([])
    setAges([])
    setGender([])
    dispatch(resetFilteredMedicalStaff())
  }, [])

  // const organisation_checkbox = useMemo(() => {
  //   if (organisations_.length > 0) {
  //     return (
  //       <div className='MedicalStaff_filter_item'>
  //         <OrganisationFilter
  //           value={organisations}
  //           setValue={setOrganisations}
  //           params={{ ages, genders }}
  //         />
  //       </div>
  //     )
  //   }
  //   return null
  // }, [organisations, ages, genders, organisations_])

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
  }, [organisations, ages, genders])

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
  }, [organisations, ages, genders])

  const resetBtn = () => {
    if (
      ages.filter((o) => o.checked).length > 0 ||
      genders.filter((o) => o.checked).length > 0 ||
      organisations.filter((o) => o.checked).length > 0
    ) {
      return <Button onClick={handleReset}> reset </Button>
    }

    return null
  }

  return (
    <div className='MedicalStaff_filter'>
      <div className='MedicalStaff_filter_filter'>
        {/* {organisation_checkbox} */}
        {ages_checkbox}
        {genders_checkbox}
        {resetBtn()}
      </div>
    </div>
  )
}
