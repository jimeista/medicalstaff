import React from 'react'

import { MedicalStaffChart } from '../MedicalStaffChart'
import { MTFirstChartOption, MTFirstChartData } from '../ChartOption'

export const FBMED = () => {
  return (
    <div className='MedicalStaff_body_wrap first_block'>
      <div className='MedicalStaff_body'>
        <div className='MedicalStaff_body_graph HorizontalBar_graph_one'>
          <span>Кол-во мед. персонала в ФБ</span>
          <div className='MedicalStaff_body_graph_item '>
            <MedicalStaffChart
              typeChart='HorizontalBar'
              dataSet={MTFirstChartData}
              option={MTFirstChartOption}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
