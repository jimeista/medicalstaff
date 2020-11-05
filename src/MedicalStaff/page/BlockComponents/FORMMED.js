import React from 'react'

import { MedicalStaffChart } from '../MedicalStaffChart'
import { personalOption2, personalData2 } from '../ChartOption'
import { setFormmed } from '../../utils/chart'

export const FORMMED = ({ data }) => {
  return (
    <div className='MedicalStaff_body_wrap second_block'>
      <div className='MedicalStaff_body'>
        <div className='MedicalStaff_body_graph Doughnut_graph_one'>
          <span>Форма оказываемой мед. помощи</span>

          {/*   <div className='MedicalStaff_body_graph_item'><MedicalStaffChart typeChart='HorizontalBar' dataSet={firstChartData}
                                                                                           option={firstChartOption}/></div>*/}
          <div className='MedicalStaff_body_graph_item '>
            <MedicalStaffChart
              typeChart='Doughnut'
              dataSet={setFormmed(data)}
              option={personalOption2}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
