import React from 'react'

import { MedicalStaffChart } from '../MedicalStaffChart'
import { MTFirstChartOption, MTFirstChartData2 } from '../ChartOption'

export const POSITIONMED = () => {
  return (
    <div className='MedicalStaff_body_wrap first_block'>
      <div className='MedicalStaff_body'>
        <div className='MedicalStaff_body_graph HorizontalBar_graph_one'>
          <span>Кол-во мед. персонала по должностям</span>
          <div className='MedicalStaff_body_graph_item '>
            <MedicalStaffChart
              typeChart='HorizontalBar'
              dataSet={MTFirstChartData2}
              option={MTFirstChartOption}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
