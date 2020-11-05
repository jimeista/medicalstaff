export const setTypeMed = (data) => {
  let counter = {
    'Врачебный персонал': 0,
    'Средний медицинский персонал': 0,
    'Младший медицинский персонал': 0,
    'Прочий персонал': 0,
  }

  data.forEach((i) => {
    let key = i['contact-info']
    if (key) {
      counter = {
        ...counter,
        [key]: ++counter[key],
      }
    }
  })

  return {
    labels: Object.keys(counter),
    datasets: [
      {
        label: true,
        borderWidth: 0.5,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        backgroundColor: ['#5a9173', '#ce4257', '#255f85', '#ec9a29'],
        data: Object.values(counter),
      },
    ],
  }
}

export const setFormmed = (data) => {
  let helps = {
    'Амбулаторная помощь': 0,
    'Стационарная помощь': 0,
    прочее: 0,
    'не указано': 0,
  }

  data.forEach((i) => {
    let key = i['medical-care-form']

    if (key === null) {
      helps = { ...helps, 'не указано': ++helps['не указано'] }
    }
    if (key === 'Амбулаторно-поликлиническая помощь') {
      helps = {
        ...helps,
        'Амбулаторная помощь': ++helps['Амбулаторная помощь'],
      }
    }
    if (key === 'Стационарная помощь') {
      helps = { ...helps, [key]: ++helps[key] }
    } else {
      helps = { ...helps, прочее: ++helps['прочее'] }
    }
  })

  return {
    labels: Object.keys(helps),
    datasets: [
      {
        label: true,
        borderWidth: 0.5,

        borderColor: 'rgba(255, 255, 255, 0.5)',
        backgroundColor: ['#5a9173', '#ce4257', '#255f85', '#ec9a29'],
        data: Object.values(helps),
      },
    ],
  }
}
