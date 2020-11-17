import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'

import {
  getOrganisations,
  resetFilteredMedicalStaff,
} from '../features/medicalstaff/medicalstaffSlice'

import { AgeFilter } from './Filters/AgeFilter'
import { GenderFilter } from './Filters/GenderFilter'
import { OrganisationFilter } from './Filters/OrganisationFilter'

export const FILTERS = () => {
  const { organisations_ } = useSelector((state) => state.medicalstaff)
  const inptRef = useRef(null)

  const [organisations, setOrganisations] = useState([])
  const [ages, setAges] = useState([])
  const [genders, setGenders] = useState([])
  let [organisations_options, setOrganisationsOptions] = useState([])
  let [ages_options, setAgesOptions] = useState(
    ['20-29', '30-39', '40-49', '50-59', '60-69', '70 +'].map((value) => ({
      value,
      checked: false,
    }))
  )
  let [genders_options, setGendersOptions] = useState(
    ['Мужчины', 'Женщины'].map((value) => ({
      value,
      checked: false,
    }))
  )

  useEffect(() => {
    if (organisations_.length > 0) {
      setOrganisationsOptions(
        organisations_.map((value) => ({ value, checked: false }))
      )
    }
  }, [organisations_])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrganisations())
  }, [])

  const handleReset = useCallback(() => {
    setOrganisationsOptions((state) =>
      state.map((o) => ({ ...o, checked: false }))
    )
    setAgesOptions((state) => state.map((o) => ({ ...o, checked: false })))
    setGendersOptions((state) => state.map((o) => ({ ...o, checked: false })))
    setAges([])
    setOrganisations([])
    setGenders([])

    if (inptRef.current && inptRef.current.state.value) {
      inptRef.current.state.value = ''
    }

    dispatch(resetFilteredMedicalStaff())
  }, [])

  const organisation_checkbox = useMemo(() => {
    if (organisations_.length > 0) {
      return (
        <div className='MedicalStaff_filter_item'>
          <OrganisationFilter
            value={organisations}
            setValue={setOrganisations}
            options={organisations_options}
            setOptions={setOrganisationsOptions}
            params={{ ages, genders }}
            inptRef={inptRef}
          />
        </div>
      )
    }
    return null
  }, [organisations, ages, genders, organisations_options, organisations_])

  const ages_checkbox = useMemo(() => {
    return (
      <div className='MedicalStaff_filter_item'>
        <AgeFilter
          value={ages}
          setValue={setAges}
          options={ages_options}
          setOptions={setAgesOptions}
          params={{ 'medical-organisations': organisations, genders }}
        />
      </div>
    )
  }, [organisations, ages, genders, ages_options])

  const genders_checkbox = useMemo(() => {
    return (
      <div className='MedicalStaff_filter_item'>
        <GenderFilter
          value={genders}
          setValue={setGenders}
          options={genders_options}
          setOptions={setGendersOptions}
          params={{ ages, 'medical-organisations': organisations }}
        />
      </div>
    )
  }, [organisations, ages, genders, genders_options])

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
