import React, { useEffect, useMemo } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getPositionMed } from '../../features/medicalstaff/medicalstaffSlice'

import { Spinner } from '../Spinner'
import { MedicalStaffChart } from '../MedicalStaffChart'
import {
  setHorizontalBarDataSet,
  setHorizontalBarOptions,
} from '../../utils/chart'

const POSITIONMED = () => {
  const dispatch = useDispatch()
  const { position_med } = useSelector((state) => state.medicalstaff)
  const { status, data, filtered } = position_med

  useEffect(() => {
    dispatch(getPositionMed({ params: {}, isFilter: false }))
  }, [dispatch])

  let arr = useMemo(() => {
    let data_ = filtered ? filtered : data
    return Object.keys(data_)
      .map((key) => ({ label: key, value: data_[key] }))
      .sort((a, b) => b.value - a.value)
  }, [data, filtered])

  const component = useMemo(() => {
    return (
      <div className='MedicalStaff_body_wrap first_block'>
        <div className='MedicalStaff_body'>
          <div className='MedicalStaff_body_graph HorizontalBar_graph_one'>
            <span>Кол-во мед. персонала по должностям</span>
            <div className='MedicalStaff_body_graph_item '>
              {status === 'success' ? (
                <MedicalStaffChart
                  typeChart='HorizontalBar'
                  dataSet={setHorizontalBarDataSet(arr)}
                  option={setHorizontalBarOptions(arr)}
                />
              ) : (
                <Spinner />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }, [status, arr])

  return component
}

export default React.memo(POSITIONMED)
