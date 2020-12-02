import React, { useState, useCallback, useRef, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { ReactComponent as IconFilter } from '../img/icons8-clear-filters-100.svg'
import {
  resetFiltered,
  setGender,
} from '../features/medicalstaff/medicalstaffSlice'

import AgeFilter from './Filters/AgeFilter'
import GenderFilter from './Filters/GenderFilter'
import OrganisationFilter from './Filters/OrganisationFilter'

const FILTERS = () => {
  const inptRef = useRef(null)

  const [organisations, setOrganisations] = useState([])
  const [ages, setAges] = useState([])
  const [genders, setGenders] = useState([])
  let [organisations_options, setOrganisationsOptions] = useState([])
  let [ages_options, setAgesOptions] = useState([])
  let [genders_options, setGendersOptions] = useState([])

  const dispatch = useDispatch()

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

    dispatch(setGender({ Мужчины: 'Мужчины', Женщины: 'Женщины' }))
    dispatch(resetFiltered())
  }, [dispatch])

  const resetBtn = () => {
    if (ages.length > 0 || genders.length > 0 || organisations.length > 0) {
      return (
        <div
          className='MedicalStaff_filter_item clear_filter_wrap '
          onClick={handleReset}
        >
          <div className='clear_filter'>
            <IconFilter style={{ height: '100%' }} />
          </div>
        </div>
      )
    }

    return null
  }

  const organisations_component = useMemo(() => {
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
  }, [ages, genders, organisations, organisations_options])

  const ages_component = useMemo(() => {
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
  }, [ages, genders, organisations, ages_options])

  const genders_component = useMemo(() => {
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
  }, [ages, genders, organisations, genders_options])

  return (
    <div className='MedicalStaff_filter'>
      <div className='MedicalStaff_filter_filter'>
        {organisations_component}
        {ages_component}
        {genders_component}
        {resetBtn()}
      </div>
    </div>
  )
}

export default React.memo(FILTERS)
