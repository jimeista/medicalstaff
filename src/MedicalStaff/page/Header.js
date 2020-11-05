import React from 'react'

import { ReactComponent as IconChart } from '../img/bar-chart.svg'
// import { ReactComponent as IconChart2 } from '../img/info_diagram.svg'
import { ReactComponent as IconChart3 } from '../img/chart_r.svg'
import { ReactComponent as IconChart4 } from '../img/chart_lite.svg'

export const Header = ({
  status,
  ActiveChart1,
  ActiveChart2,
  ActiveChart3,
  ActiveChart4,
  setActiveChart1,
  setActiveChart2,
  setActiveChart3,
  setActiveChart4,
}) => {
  return (
    <div className='MedicalStaff_title_wrap'>
      <div className='MedicalStaff_title_block'>ПЕРСОНАЛ</div>
      <div className='MedicalStaff_filter_btn'>
        {status === 'success' && (
          <>
            {' '}
            <div
              title={' Вертикальная диаграмма 1'}
              className={`MedicalStaff_filter_btn_icon ${
                ActiveChart1 ? 'active' : ''
              }`}
              onClick={() => {
                setActiveChart1(!ActiveChart1)
              }}
            >
              <IconChart />
            </div>
            <div
              title={'Кольцевая диаграмма'}
              className={`MedicalStaff_filter_btn_icon ${
                ActiveChart2 ? 'active' : ''
              }`}
              onClick={() => {
                setActiveChart2(!ActiveChart2)
              }}
            >
              <IconChart3 />
            </div>
            <div
              title={'Вертикальная диаграмма 2'}
              className={`MedicalStaff_filter_btn_icon ${
                ActiveChart3 ? 'active' : ''
              }`}
              onClick={() => {
                setActiveChart3(!ActiveChart3)
              }}
            >
              <IconChart />
            </div>
            <div
              title={'Горизонтальная диаграмма'}
              className={`MedicalStaff_filter_btn_icon ${
                ActiveChart4 ? 'active' : ''
              }`}
              onClick={() => {
                setActiveChart4(!ActiveChart4)
              }}
            >
              <IconChart4 />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
