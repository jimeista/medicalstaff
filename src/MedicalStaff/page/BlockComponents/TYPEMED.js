import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getTypes } from '../../features/medicalstaff/medicalstaffSlice'

import { Spinner } from '../Spinner'

import { MedicalStaffChart } from '../MedicalStaffChart'
import { personalOption1 } from '../ChartOption'
import { setTypeMed } from '../../utils/chart'

export const TYPEMED = () => {
  const dispatch = useDispatch()
  const { types } = useSelector((state) => state.medicalstaff)

  useEffect(() => {
    dispatch(getTypes({ params: {}, isFilter: false }))
  }, [dispatch])

  const { status, data, filtered } = types

  const component = useMemo(() => {
    return (
      <div className='MedicalStaff_body_wrap second_block'>
        <div className='MedicalStaff_body'>
          <div className='MedicalStaff_body_graph Doughnut_graph_one'>
            <span>Вид мед. персонала</span>

            <div className='MedicalStaff_body_graph_item '>
              {status === 'success' ? (
                <MedicalStaffChart
                  typeChart='Doughnut'
                  dataSet={setTypeMed(filtered ? filtered : data)}
                  option={personalOption1}
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
