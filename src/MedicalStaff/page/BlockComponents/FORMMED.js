import React, { useEffect, useMemo } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getMedicalCareForms } from '../../features/medicalstaff/medicalstaffSlice'

import { Spinner } from '../Spinner'
import { MedicalStaffChart } from '../MedicalStaffChart'
import { personalOption2 } from '../ChartOption'
import { setFormMed } from '../../utils/chart'

export const FORMMED = () => {
  const dispatch = useDispatch()
  const { medical_care_forms } = useSelector((state) => state.medicalstaff)

  useEffect(() => {
    dispatch(getMedicalCareForms({ params: {}, isFilter: false }))
  }, [dispatch])

  const { status, data, filtered } = medical_care_forms
  const component = useMemo(() => {
    return (
      <div className='MedicalStaff_body_wrap second_block'>
        <div className='MedicalStaff_body'>
          <div className='MedicalStaff_body_graph Doughnut_graph_one'>
            <span>Форма оказываемой мед. помощи</span>
            <div className='MedicalStaff_body_graph_item '>
              {status === 'success' ? (
                <MedicalStaffChart
                  typeChart='Doughnut'
                  dataSet={setFormMed(filtered ? filtered : data)}
                  option={personalOption2}
                />
              ) : (
                <Spinner />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }, [status, filtered, data])

  return component
}
