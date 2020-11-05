import React from 'react'

import { MedicalStaffChart } from '../MedicalStaffChart'
import { personalOption1 } from '../ChartOption'
import { setTypeMed } from '../../utils/chart'

export const TYPEMED = ({ data }) => {
  return (
    <div className='MedicalStaff_body_wrap second_block'>
      <div className='MedicalStaff_body'>
        <div className='MedicalStaff_body_graph Doughnut_graph_one'>
          <span>Вид мед. персонала</span>

          {/*   <div className='MedicalStaff_body_graph_item'><MedicalStaffChart typeChart='HorizontalBar' dataSet={firstChartData}
                                                                                       option={firstChartOption}/></div>*/}
          <div className='MedicalStaff_body_graph_item '>
            <MedicalStaffChart
              typeChart='Doughnut'
              dataSet={setTypeMed(data)}
              option={personalOption1}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
