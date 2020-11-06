import React from 'react'

import { MedicalStaffChart } from '../MedicalStaffChart'
import { TabTwoPOption } from '../ChartOption'
import { setGenderMed } from '../../utils/chart'

export const GENDERMED = ({ data }) => {
  return (
    <div className='MedicalStaff_body_wrap second_block'>
      <div className='MedicalStaff_body'>
        <div className='MedicalStaff_body_graph HorizontalBar_graph_two'>
          <span>Кол-во медецинского персонала по возрасту и полу</span>
          <div className='MedicalStaff_body_graph_item '>
            <MedicalStaffChart
              typeChart='Bar'
              dataSet={setGenderMed(data)}
              option={TabTwoPOption}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
