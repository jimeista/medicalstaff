import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getFunctionalBlocks } from '../../features/medicalstaff/medicalstaffSlice'

import { Spinner } from '../Spinner'
import { MedicalStaffChart } from '../MedicalStaffChart'
import {
  setHorizontalBarDataSet,
  setHorizontalBarOptions,
} from '../../utils/chart'

export const FBMED = () => {
  const dispatch = useDispatch()
  const { functional_blocks } = useSelector((state) => state.medicalstaff)

  useEffect(() => {
    dispatch(getFunctionalBlocks({}))
  }, [])

  const { status, data, filtered } = functional_blocks
  let arr = filtered ? filtered : data
  arr = Object.keys(data)
    .map((key) => ({ label: key, value: data[key] }))
    .sort((a, b) => b.value - a.value)

  return (
    <div className='MedicalStaff_body_wrap first_block'>
      <div className='MedicalStaff_body'>
        <div className='MedicalStaff_body_graph HorizontalBar_graph_one'>
          <span>Кол-во мед. персонала в ФБ</span>
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
}
