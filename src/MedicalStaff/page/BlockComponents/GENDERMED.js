import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAgesGenders } from '../../features/medicalstaff/medicalstaffSlice'

import { Spinner } from '../Spinner'

import { MedicalStaffChart } from '../MedicalStaffChart'
import { TabTwoPOption } from '../ChartOption'
import { setGenderMed } from '../../utils/chart'

export const GENDERMED = () => {
  const dispatch = useDispatch()
  const { ages_genders, gender } = useSelector((state) => state.medicalstaff)

  useEffect(() => {
    dispatch(getAgesGenders({ params: {}, isFilter: false }))
  }, [dispatch])

  const { status, data, filtered } = ages_genders

  const component = useMemo(() => {
    return (
      <div className='MedicalStaff_body_wrap second_block'>
        <div className='MedicalStaff_body'>
          <div className='MedicalStaff_body_graph HorizontalBar_graph_two'>
            <span>Кол-во медецинского персонала по возрасту и полу</span>
            <div className='MedicalStaff_body_graph_item '>
              {status === 'success' ? (
                <MedicalStaffChart
                  typeChart='Bar'
                  dataSet={setGenderMed(filtered ? filtered : data, gender)}
                  option={TabTwoPOption}
                />
              ) : (
                <Spinner />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }, [status, filtered, data, gender])

  return component
}
