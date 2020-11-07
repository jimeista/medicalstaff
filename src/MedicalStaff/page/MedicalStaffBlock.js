import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getMedicalStaff,
  resetMedicalStaff,
} from '../features/medicalstaff/medicalstaffSlice'
import 'chartjs-plugin-datalabels'

import { Header } from './Header'
import { Spinner } from './Spinner'
import {
  FBMED,
  FORMMED,
  FILTERS,
  POSITIONMED,
  TYPEMED,
  GENDERMED,
} from './BlockComponents'

const MedicalStaffBlock = () => {
  const [ActiveChart1, setActiveChart1] = useState(true)
  const [ActiveChart2, setActiveChart2] = useState(true)
  const [ActiveChart3, setActiveChart3] = useState(true)
  const [ActiveChart4, setActiveChart4] = useState(true)

  const { status, data, filtered_data } = useSelector(
    (state) => state.medicalstaff
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMedicalStaff({}))

    return () => {
      dispatch(resetMedicalStaff())
    }
  }, [dispatch])

  return (
    <div className='MedicalStaff_main'>
      <div className='MedicalStaff_wrapper'>
        <Header
          status={status}
          ActiveChart1={ActiveChart1}
          ActiveChart2={ActiveChart2}
          ActiveChart3={ActiveChart3}
          ActiveChart4={ActiveChart4}
          setActiveChart1={setActiveChart1}
          setActiveChart2={setActiveChart2}
          setActiveChart3={setActiveChart3}
          setActiveChart4={setActiveChart4}
        />

        <div
          className={`MedicalStaff_Tab_One_Style btn_action ${
            ActiveChart1 ? 'first_on' : 'first_off'
          } ${ActiveChart2 ? 'second_on' : 'second_off'} ${
            ActiveChart3 ? 'third_on' : 'third_off'
          } ${ActiveChart4 ? 'fourth_on' : 'fourth_off'}`}
        >
          <FILTERS />
          <div className={`MedicalStaff_body_wrapper `}>
            {status !== 'success' ? (
              <Spinner />
            ) : (
              <>
                <FBMED data={filtered_data.length > 0 ? filtered_data : data} />
                <POSITIONMED
                  data={filtered_data.length > 0 ? filtered_data : data}
                />
                <TYPEMED
                  data={filtered_data.length > 0 ? filtered_data : data}
                />
                <FORMMED
                  data={filtered_data.length > 0 ? filtered_data : data}
                />
                <GENDERMED
                  data={filtered_data.length > 0 ? filtered_data : data}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MedicalStaffBlock
