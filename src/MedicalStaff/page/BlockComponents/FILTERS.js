import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

import CheckBoxMenu from '../CheckBoxMenu'
import { age, types } from '../ChartOption'

export const FILTERS = () => {
  const { organisations } = useSelector((state) => state.medicalstaff)

  const organisation_checkbox = useMemo(() => {
    return (
      <div className='MedicalStaff_filter_item'>
        <CheckBoxMenu
          titleBtn={'Мед. организация'}
          checkBox={
            organisations.status === 'success' ? organisations.data : []
          }
          search={true}
          type={'medical-organisations'}
        />
      </div>
    )
  }, [organisations])

  return (
    <div className='MedicalStaff_filter'>
      <div className='MedicalStaff_filter_filter'>
        {organisation_checkbox}
        <div className='MedicalStaff_filter_item'>
          <CheckBoxMenu titleBtn={'Возраст'} checkBox={age} type={'ages'} />
        </div>
        <div className='MedicalStaff_filter_item'>
          <CheckBoxMenu titleBtn={'Пол'} checkBox={types} type={'genders'} />
        </div>
      </div>
    </div>
  )
}
