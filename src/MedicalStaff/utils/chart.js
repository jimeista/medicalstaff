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
    labels: Object.keys(data),
    datasets: [
      {
        /* label: "Исполнение",*/
        backgroundColor: '#ff8c0080',
        data: Object.values(data),
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
          return Object.keys(data)[ctx2.dataIndex] + ' - ' + value + ' шт.'
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
  let male = Object.values(data)
    .map((i) => i.male)
    .reverse()
  let female = Object.values(data)
    .map((i) => i.female)
    .reverse()
  return {
    labels: ['20-29', '30-39', '40-49', '50-59', '60-69', '70 +'],
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
