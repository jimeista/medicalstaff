import React from 'react'

import { MedicalStaffChart } from '../MedicalStaffChart'
// import { MTFirstChartOption, MTFirstChartData } from '../ChartOption'
import {
  setHorizontalBarDataSet,
  setHorizontalBarOptions,
} from '../../utils/chart'

export const FBMED = ({ data }) => {
  return (
    <div className='MedicalStaff_body_wrap first_block'>
      <div className='MedicalStaff_body'>
        <div className='MedicalStaff_body_graph HorizontalBar_graph_one'>
          <span>Кол-во мед. персонала в ФБ</span>
          <div className='MedicalStaff_body_graph_item '>
            <MedicalStaffChart
              typeChart='HorizontalBar'
              dataSet={setHorizontalBarDataSet(
                data,
                'functional-unit-grouping'
              )}
              option={setHorizontalBarOptions(data, 'functional-unit-grouping')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
