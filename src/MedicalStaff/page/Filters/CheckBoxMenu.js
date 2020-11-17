import React from 'react'
import { Button, Checkbox } from 'antd'

export const CheckBoxMenu = ({
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

  const menu = () => {
    return (
      <>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'scroll',
            maxHeight: 300,
            padding: 5,
          }}
        >
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            padding: '5px',
          }}
        >
          {value.length > 0 && (
            <Button className='ant_drop_btn' onClick={onReset}>
              Сбросить
            </Button>
          )}

          {options.filter((o) => o.checked).length > 0 && (
            <Button className='ant_drop_btn' onClick={onSubmit}>
              Применить
            </Button>
          )}
        </div>
      </>
    )
  }

  return menu()
}

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
