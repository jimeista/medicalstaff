export const setTypeMed = (data) => {
  let counter = {
    'Врачебный персонал': 0,
    'Средний медицинский персонал': 0,
    'Младший медицинский персонал': 0,
    'Прочий персонал': 0,
  }

  data.forEach((i) => {
    let key = i['staff-type']
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

export const setFormMed = (data) => {
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

export const setHorizontalBarDataSet = (data, key) => {
  let ob = {}

  data.forEach((i) => {
    let name = i[key].toLowerCase()

    if (ob[name] === undefined) {
      ob = { ...ob, [name]: 0 }
    } else {
      ob = { ...ob, [name]: ++ob[name] }
    }
  })

  return {
    labels: Object.keys(ob),
    datasets: [
      {
        /* label: "Исполнение",*/
        backgroundColor: '#ff8c0080',
        data: Object.values(ob),
      },
    ],
  }
}

export const setHorizontalBarOptions = (data, key) => {
  let ob = {}
  data.forEach((i) => {
    ob = {
      ...ob,
      [i[key]]: i[key],
    }
  })
  return {
    legend: {
      display: false,
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      scaleLabel: {
        display: false,
      },
      xAxes: [
        {
          display: false,
        },
      ],
      yAxes: [
        {
          ticks: {
            display: false,
          },
        },
      ],
    },
    plugins: {
      datalabels: {
        formatter: function (value, ctx2) {
          return Object.values(ob)[ctx2.dataIndex] + ' - ' + value + ' шт.'
        },
        align: 'end',
        anchor: 'start',
        rotation: 0,
        clamp: true,
        color: 'rgb(255,255,255)',
        padding: 2,
      },
    },
  }
}

export const setGenderMed = (data) => {
  let male = [0, 0, 0, 0, 0, 0, 0]
  let female = [0, 0, 0, 0, 0, 0, 0]

  data.forEach((i) => {
    if (i.gender === 'male') {
      countAge(male, i.age)
    } else {
      countAge(female, i.age)
    }
  })

  return {
    labels: ['20-29', '30-39', '40-49', '50-59', '60-69', '70 +', 'Не указан'],
    datasets: [
      {
        label: 'Женщины',
        // backgroundColor: "#bc9d94",
        backgroundColor: '#7fffd480',
        stack: 'Stack 0',
        data: female,
      },
      {
        label: 'Мужчины',
        // backgroundColor: "#728ea2",
        backgroundColor: '#ff7f5080',
        stack: 'Stack 0',
        data: male,
      },
    ],
  }
}

const countAge = (arr, age) => {
  if (age <= 29) {
    arr[0] = ++arr[0]
  } else if (age >= 30 && age <= 39) {
    arr[1] = ++arr[1]
  } else if (age >= 40 && age <= 49) {
    arr[2] = ++arr[2]
  } else if (age >= 50 && age <= 59) {
    arr[3] = ++arr[3]
  } else if (age >= 60 && age <= 69) {
    arr[4] = ++arr[4]
  } else if (age >= 70) {
    arr[5] = ++arr[5]
  } else {
    arr[6] = ++arr[6]
  }
}
