import React from 'react'

import { MedicalStaffChart } from '../MedicalStaffChart'
import { TabTwoPData, TabTwoPOption } from '../ChartOption'

export const GENDERMED = () => {
  return (
    <div className='MedicalStaff_body_wrap second_block'>
      <div className='MedicalStaff_body'>
        <div className='MedicalStaff_body_graph HorizontalBar_graph_two'>
          <span>Кол-во медецинского персонала по возрасту и полу</span>
          <div className='MedicalStaff_body_graph_item '>
            <MedicalStaffChart
              typeChart='Bar'
              dataSet={TabTwoPData}
              option={TabTwoPOption}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
