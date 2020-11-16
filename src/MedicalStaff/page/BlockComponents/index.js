import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  getMedicalStaff,
  resetMedicalStaff,
} from '../../features/medicalstaff/medicalstaffSlice'

import { FBMED } from './FBMED'
import { FORMMED } from './FORMMED'
import { POSITIONMED } from './POSITIONMED'
import { TYPEMED } from './TYPEMED'
import { GENDERMED } from './GENDERMED'
import { Spinner } from '../Spinner'

export const BlockComponent = () => {
  const dispatch = useDispatch()
  const { filtered_data, data, status } = useSelector(
    (state) => state.medicalstaff
  )

  useEffect(() => {
    dispatch(getMedicalStaff({}))
    return () => {
      dispatch(resetMedicalStaff())
    }
  }, [])

  return (
    <div className={`MedicalStaff_body_wrapper `}>
      {status !== 'success' ? (
        <Spinner />
      ) : (
        <>
          <FBMED
            data={
              filtered_data
                ? filtered_data['functional-blocks']
                : data['functional-blocks']
            }
          />
          <POSITIONMED
            data={filtered_data ? filtered_data.posts : data.posts}
          />
          <TYPEMED data={filtered_data ? filtered_data.types : data.types} />
          <FORMMED
            data={
              filtered_data
                ? filtered_data['medical-care-forms']
                : data['medical-care-forms']
            }
          />
          <GENDERMED
            data={
              filtered_data
                ? filtered_data['ages-genders']
                : data['ages-genders']
            }
          />
        </>
      )}
    </div>
  )
}
