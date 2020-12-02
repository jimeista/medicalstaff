import React from 'react'
import { Checkbox } from 'antd'

const CheckBoxMenu = ({
  options,
  setOptions,
  value,
  setValue,
  setVisible,
  type,
  params,
  handleSubmit,
  handleReset,
}) => {
  const onSubmit = () => {
    setVisible(false)
    let checked_values = options.filter((o) => o.checked).map((op) => op.value)
    setValue(checked_values)
    handleSubmit(modifyParams({ ...params, [type]: checked_values }))
  }

  const onReset = () => {
    setVisible(false)
    params[type] = []
    handleReset(modifyParams(params))
    setOptions((options) =>
      options.map((option) => ({ ...option, checked: false }))
    )
    setValue([])
  }

  const onChange = (_, value) => {
    setOptions((options) =>
      options.map((o) =>
        o.value === value ? { ...o, checked: !o.checked } : o
      )
    )
  }

  return (
    <div className='Check_scroll_wrap'>
      <div className='Check_scroll'>
        {options.map((option) => (
          <Checkbox
            key={option.value}
            checked={option.checked}
            onChange={(_) => onChange(_, option.value)}
          >
            {option.value}
          </Checkbox>
        ))}
      </div>
      <div>
        {value.length > 0 && (
          <div className='Ant_Drop_Block_Style_btn'>
            <span className='ant_drop_btn default_btn_style ' onClick={onReset}>
              Сбросить
            </span>
          </div>
        )}
        {options.filter((o) => o.checked).length > 0 && (
          <div className='Ant_Drop_Block_Style_btn'>
            <span
              className='ant_drop_btn default_btn_style self_style'
              onClick={onSubmit}
            >
              Применить
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default React.memo(CheckBoxMenu)

const modifyParams = (params) => {
  let prs = params
  if (params.genders.length > 0) {
    prs = {
      ...prs,
      genders: params.genders.map((g) => (g === 'Мужчины' ? 'male' : 'female')),
    }
  }
  if (params.ages.length > 0) {
    prs = {
      ...prs,
      ages: params.ages.map((a) => (a === '70 +' ? '70-120' : a)),
    }
  }

  return prs
}
