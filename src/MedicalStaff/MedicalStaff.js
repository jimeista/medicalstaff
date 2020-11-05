import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import medicalstaffReducer from './features/medicalstaff/medicalstaffSlice'
import MedicalStaffBlock from './page/MedicalStaffBlock'

import './MedicalStaff.css'
import 'antd/dist/antd.css'

const store = configureStore({
  reducer: {
    medicalstaff: medicalstaffReducer,
  },
})

const MedicalStaff = () => {
  return (
    <Provider store={store}>
      <MedicalStaffBlock />
    </Provider>
  )
}

export default MedicalStaff
