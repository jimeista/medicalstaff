import React, { useState } from 'react'
import 'chartjs-plugin-datalabels'

import { Header } from './Header'
import { FILTERS } from './FILTERS'

import { FBMED } from './BlockComponents/FBMED'
import { FORMMED } from './BlockComponents/FORMMED'
import { POSITIONMED } from './BlockComponents/POSITIONMED'
import { TYPEMED } from './BlockComponents/TYPEMED'
import { GENDERMED } from './BlockComponents/GENDERMED'

const MedicalStaffBlock = () => {
  const [ActiveChart1, setActiveChart1] = useState(true)
  const [ActiveChart2, setActiveChart2] = useState(true)
  const [ActiveChart3, setActiveChart3] = useState(true)
  const [ActiveChart4, setActiveChart4] = useState(true)

  return (
    <div className='MedicalStaff_main'>
      <div className='MedicalStaff_wrapper'>
        <Header
          ActiveChart1={ActiveChart1}
          ActiveChart2={ActiveChart2}
          ActiveChart3={ActiveChart3}
          ActiveChart4={ActiveChart4}
          setActiveChart1={setActiveChart1}
          setActiveChart2={setActiveChart2}
          setActiveChart3={setActiveChart3}
          setActiveChart4={setActiveChart4}
        />

        {<FILTERS />}
        <div
          className={`MedicalStaff_Tab_One_Style btn_action ${
            ActiveChart1 ? 'first_on' : 'first_off'
          } ${ActiveChart2 ? 'second_on' : 'second_off'} ${
            ActiveChart3 ? 'third_on' : 'third_off'
          } ${ActiveChart4 ? 'fourth_on' : 'fourth_off'}`}
        >
          <div className={`MedicalStaff_body_wrapper `}>
            <FBMED />
            <POSITIONMED />
            <TYPEMED />
            <FORMMED />
            <GENDERMED />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MedicalStaffBlock
