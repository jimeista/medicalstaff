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

  console.log(ob)

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
