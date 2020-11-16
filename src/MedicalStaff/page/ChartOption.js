/*
export const CrimeLineChart_Line_option = {
  plugins: {
    /!*       beforeDraw: function(c) {
                  var chartHeight = c.chart.height;
                  var size = chartHeight * 5 / 100;
                  c.scales['y-axis-0'].options.ticks.minor.fontSize = size;
              },*!/
    datalabels: {
      align: "right",
      anchor: "end",
      /!*borderColor: 'rgb(255,255,255)',
                    borderRadius: 2,
                    borderWidth: 1,*!/
      color: "rgb(255,255,255)",
      padding: 2,
      /!*      display: function (context) {
                        console.log(context.dataset.data[context.dataIndex])
                        return context.dataset.data[context.dataIndex];
                    },
    *!/
      font: function (context) {
        let width = context.chart.width;
        let size = Math.round(width / 62);

        if (width > 600) {
          return {
            weight: "bold",
            size: 14,
          };
        } else if (width > 400 && width < 599) {
          return {
            weight: "normal",
            size: 12,
          };
        } else {
          return {
            weight: "normal",
            size: 0,
          };
        }
      },
      // formatter: Math.round
    },
  },

  responsive: true,
  maintainAspectRatio: true,
  showScale: true,
  title: {
    display: true,
    /!*     text: "Еденицы измерения- " + measurement[0],*!/
    fontColor: "white",
    position: "left",
    fontStyle: "normal",
  },
  tooltips: {
    mode: "index",
    intersect: false,
  },
  hover: {
    mode: "nearest",
    intersect: true,
  },
  layout: {
    padding: {
      left: 0,
      right: 50,
      top: 0,
      bottom: 0,
    },
  },
  legend: {
    /!*                onClick: function (e, t) {
                                  let transport_flow = t.datasetIndex;
                                  let chart = this.chart;
                                  let transport_flow_status = chart.getDatasetMeta(transport_flow).hidden;
                                  console.log("current_status", transport_flow_status);
                                  chart.data.datasets.forEach(function (e, t) {
                                      let meta = chart.getDatasetMeta(t);
                                      if (t === transport_flow) {
                                          meta.hidden = false;
                                      } else {
                                          meta.hidden = true;
                                      }
                                  });
                                  chart.update();
                              },*!/
    fullWidth: true,
    display: true,
    position: "bottom",
    align: "start",
    labels: {
      fontSize: 14,
      boxWidth: 40,
      fontColor: "rgba(255,255,255,1)",
    },
  },
  scales: {
    xAxes: [
      {
        ticks: {
          fontColor: "rgba(255,255,255,1)", // this here
        },
        fontColor: "white",
        stacked: false,
      },
    ],
    yAxes: [
      {
        ticks: {
          callback: function (label, index, labels) {
            return compactInteger(label);
          },
          fontColor: "rgba(255,255,255,1)", // this here

          /!*    fontSize: 14,*!/
        },
        gridLines: {
          drawOnChartArea: false,
          display: false,
        },
        /!* stacked: true,*!/
        /!*afterFit: function(scale) {
                          var chartWidth = scale.chart.width;
                          var new_width=chartWidth*0.40;

                          scale.width = new_width;
                      }*!/
      },
    ],
  },
};
export const CrimeLineChart_Line_Dataset = {
  labels: "",
  datasets: [
    {
      label: "План ",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",

      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      /!*     pointBorderWidth: 4,
                              pointHoverRadius: 5,
                              pointHoverBorderWidth: 3,*!/
      pointRadius: 3,
      pointHitRadius: 10,
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    {
      label: "Факт",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgb(192,186,75)",
      borderColor: "rgb(192,186,75)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgb(192,186,75)",
      pointBackgroundColor: "#fff",
      /!*     pointBorderWidth: 4,
                         pointHoverRadius: 5,
                         pointHoverBorderWidth: 3,*!/
      pointHoverBackgroundColor: "rgb(192,186,75)",
      pointHoverBorderColor: "rgba(220,220,220,1)",

      pointRadius: 3,
      pointHitRadius: 10,
      data: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    },
  ],
};*/
export const district = [
  'Алатауский район',
  'Алмалинский район',
  'Ауэзовский район',
  'Бостандыкский район',
  'Жетысуский район',
  'Медеуский район',
  'Наурызбайский район',
  'Турксибский район',
]
export const district2 = [
  'Алатауский район',
  'Алмалинский район',
  'Ауэзовский район',
  'Бостандыкский район',
  'Жетысуский район',
  'Медеуский район',
  'Наурызбайский район',
  'Турксибский район',
  'Не указан',
]

export const name = [
  'АО Казахский научно-исследовательский институт онкологии и радиологии',
  'Научно-исследовательский институт кардиологии и внутренних болезней',
  'Национальный научный центр хирургии имени А.Н.Сызганова',
  'Центральная клиническая больница',
  'Городская поликлиника №1',
  'Городская поликлиника №2',
  'Городская поликлиника №3',
  'Городская поликлиника №5',
  'Городская поликлиника №11',
  'Городская поликлиника №17',
  'Городская поликлиника №55',
]
export const age = ['20-29', '30-39', '40-49', '50-59', '60-69', '70 +']
export const types = ['Мужчины', 'Женщины']

export const status = [
  'Рабочее',
  'Нерабочее',
  'Требует ремонта',
  'Прочее',
  'На ремонте',
  'Резерв',
]

export const firstChartData = {
  labels: district2,
  datasets: [
    {
      /* label: "Исполнение",*/
      backgroundColor: '#ff8c0080',
      data: [1954, 16280, 24617, 27889, 7424, 14564, 2077, 15306, 930],
    },
  ],
}
export const firstChartOption = {
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
        return district2[ctx2.dataIndex] + ' - ' + value + ' шт.'
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

export const secondChartData = {
  labels: age,
  datasets: [
    {
      label: false,
      backgroundColor: [
        '#5a9173',
        '#ce4257',
        '#255f85',
        '#ec9a29',
        '#364156',
        '#c0c0c0',
      ],
      data: [110818, 137, 53, 22, 6, 7],
      borderWidth: 1,
      borderColor: 'gray',
      /*        barPercentage: 0.5,*/
      /*   barThickness: 6,*/
      /*      maxBarThickness: 8,*/
      minBarLength: 12,
    },
  ],
}
export const secondChartOption = {
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
        display: true,
        fontColor: 'white',
        ticks: {
          fontColor: 'rgba(255,255,255,0.5)', // this here
        },
      },
    ],
    yAxes: [
      {
        display: false,

        ticks: {
          fontColor: 'white',
          display: true,
        },
      },
    ],
  },
  plugins: {
    datalabels: {
      formatter: function (value, ctx2) {
        return status[ctx2.dataIndex] + ' - ' + value + ' шт.'
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

const wear = ['Мужчины', 'Женщины']
export const TabTwoPData = {
  labels: age,
  datasets: [
    {
      label: [wear[0]],

      // backgroundColor: "#bc9d94",
      backgroundColor: '#7fffd480',
      stack: 'Stack 0',
      data: [27749, 21740, 18692, 17970, 24892, 987, 20000],
    },
    {
      label: [wear[1]],
      // backgroundColor: "#728ea2",
      backgroundColor: '#ff7f5080',
      stack: 'Stack 0',
      data: [13885, 4040, 2463, 2414, 3637, 750, 15000],
    },
  ],
}
export const TabTwoPOption = {
  legend: {
    labels: {
      fontColor: 'white',
    },
    display: true,
    fontColor: 'white',
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    scaleLabel: {
      display: false,
    },
    xAxes: [
      {
        ticks: {
          fontColor: 'white',
          ticks: {
            fontColor: 'rgba(255,255,255,0.5)', // this here
          },
          display: true,
        },
      },
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          fontColor: 'white',
          ticks: {
            fontColor: 'rgba(255,255,255,0.5)', // this here
          },
          display: true,
        },
      },
    ],
  },
  plugins: {
    datalabels: {
      rotation: 0,
      clamp: true,
      color: 'rgb(255,255,255)',
      padding: 2,
    },
  },
}
let personal = [
  'Врачебный персонал',
  'Средний мед. персонал',
  'младший мед. персонал',
  'прочий персонал',
]
export const personalData1 = {
  labels: personal,
  datasets: [
    {
      label: true,
      borderWidth: 0.5,
      borderColor: 'rgba(255, 255, 255, 0.5)',
      backgroundColor: ['#5a9173', '#ce4257', '#255f85', '#ec9a29'],
      data: [558, 386, 52, 426],
    },
  ],
}
export const personalOption1 = {
  legend: {
    display: true,
    position: 'bottom',
    labels: {
      fontColor: 'rgba(255, 255, 255, 1)',
    },
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
        display: false,
      },
    ],
  },
  plugins: {
    datalabels: {
      align: 'center',
      anchor: 'center',
      clamp: true,
      color: 'rgb(255,255,255)',
    },
  },
}

let helps = [
  'Амбулаторная помощь',
  'Стационарная помощь',
  'прочее',
  'не указано',
]
export const personalData2 = {
  labels: helps,
  datasets: [
    {
      label: true,
      borderWidth: 0.5,

      borderColor: 'rgba(255, 255, 255, 0.5)',
      backgroundColor: ['#5a9173', '#ce4257', '#255f85', '#ec9a29'],
      data: [558, 386, 52, 426],
    },
  ],
}
export const personalOption2 = {
  legend: {
    display: true,
    position: 'bottom',
    labels: {
      fontColor: 'rgba(255, 255, 255, 1)',
    },
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
        display: false,
      },
    ],
  },
  plugins: {
    datalabels: {
      align: 'center',
      anchor: 'center',
      clamp: true,
      color: 'rgb(255,255,255)',
    },
  },
}

export const apparatus = [
  'Фонендоскопы',
  'Инструменты рентген аппарата',
  'ИВЛ',
  'Ингаляторы',
  'Наркозно-дыхательные аппараты',
  'ИК/МРТ ',
  'Фонендоскопы',
  'Инструменты рентген аппарата',
  'ИВЛ',
  'Ингаляторы',
  'Наркозно-дыхательные аппараты',
  'ИК/МРТ ',
  'Фонендоскопы',
  'Инструменты рентген аппарата',
  'ИВЛ',
  'Ингаляторы',
  'Наркозно-дыхательные аппараты',
  'ИК/МРТ ',
  'Ингаляторы',
  'Наркозно-дыхательные аппараты',
]
export const apparatus2 = [
  'Фонендоскопы',
  'Инструменты рентген аппарата',
  'ИВЛ',
  'Ингаляторы',
  'Наркозно-дыхательные аппараты',
  'ИК/МРТ ',
  'Фонендоскопы',
  'Инструменты рентген аппарата',
  'ИВЛ',
  'Ингаляторы',
  'Наркозно-дыхательные аппараты',
  'ИК/МРТ ',
  'Фонендоскопы',
  'Инструменты рентген аппарата',
  'ИВЛ',
]
export const MTFirstChartData = {
  labels: apparatus,
  datasets: [
    {
      /* label: "Исполнение",*/
      backgroundColor: '#ff8c0080',
      data: [
        1954,
        16280,
        24617,
        27889,
        7424,
        14564,
        1954,
        16280,
        24617,
        27889,
        7424,
        14564,
        1954,
        16280,
        24617,
        27889,
        7424,
        14564,
        7424,
        14564,
      ],
    },
  ],
}
export const MTFirstChartData2 = {
  labels: apparatus2,
  datasets: [
    {
      /* label: "Исполнение",*/
      backgroundColor: '#ff8c0080',
      data: [
        1954,
        16280,
        24617,
        27889,
        7424,
        14564,
        1954,
        16280,
        24617,
        27889,
        7424,
        14564,
        1954,
        16280,
        24617,
      ],
    },
  ],
}
export const MTFirstChartOption = {
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
        return apparatus[ctx2.dataIndex] + ' - ' + value + ' шт.'
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
/*

personalOption1,
    personalOption2,
    personalData1,
    personalData2*/
