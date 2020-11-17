import { keys } from '@material-ui/core/styles/createBreakpoints'

export const setTypeMed = (data) => {
  return {
    labels: Object.keys(data),
    datasets: [
      {
        label: true,
        borderWidth: 0.5,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        backgroundColor: ['#5a9173', '#ce4257', '#255f85', '#ec9a29'],
        data: Object.values(data),
      },
    ],
  }
}

export const setFormMed = (data) => {
  return {
    labels: Object.keys(data),
    datasets: [
      {
        label: true,
        borderWidth: 0.5,

        borderColor: 'rgba(255, 255, 255, 0.5)',
        backgroundColor: ['#5a9173', '#ce4257', '#255f85', '#ec9a29'],
        data: Object.values(data),
      },
    ],
  }
}

export const setHorizontalBarDataSet = (data) => {
  return {
    labels: data.map((i) => i.label),
    datasets: [
      {
        /* label: "Исполнение",*/
        backgroundColor: '#ff8c0080',
        data: data.map((i) => i.value),
      },
    ],
  }
}

export const setHorizontalBarOptions = (data) => {
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
          return (
            data.map((i) => i.label)[ctx2.dataIndex] + ' - ' + value + ' шт.'
          )
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

export const setGenderMed = (data, gender) => {
  let labels = []
  let female = []
  let male = []

  labels = Object.keys(data)
    .filter((key) => data[key] !== null && key)
    .sort((a, b) => +a.substring(0, 2) - +b.substring(0, 2))

  labels.forEach((label) => {
    female = [...female, data[label].female]
    male = [...male, data[label].male]
  })

  return {
    labels: labels.map((l) => (l === '70-120' ? '70+' : l)),
    datasets: [
      {
        label: 'Женщины',
        // backgroundColor: "#bc9d94",
        backgroundColor: '#7fffd480',
        stack: 'Stack 0',
        data: gender['Женщины'] && female,
      },
      {
        label: 'Мужчины',
        // backgroundColor: "#728ea2",
        backgroundColor: '#ff7f5080',
        stack: 'Stack 0',
        data: gender['Мужчины'] && male,
      },
    ],
  }
}
