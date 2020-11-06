import React from 'react'

import { MedicalStaffChart } from '../MedicalStaffChart'
import {
  setHorizontalBarDataSet,
  setHorizontalBarOptions,
} from '../../utils/chart'

export const POSITIONMED = ({ data }) => {
  return (
    <div className='MedicalStaff_body_wrap first_block'>
      <div className='MedicalStaff_body'>
        <div className='MedicalStaff_body_graph HorizontalBar_graph_one'>
          <span>Кол-во мед. персонала по должностям</span>
          <div className='MedicalStaff_body_graph_item '>
            <MedicalStaffChart
              typeChart='HorizontalBar'
              dataSet={setHorizontalBarDataSet(data, 'post-briefly')}
              option={setHorizontalBarOptions(data, 'post-briefly')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
