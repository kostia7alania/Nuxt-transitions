var colors = [
  'blue',
  'red',
  'yellow',
  'green',
  'purple',
  '#508afc',
  '#df254a',
  '#5470c6',
  '#56ccf2',
  '#f2c94c',
  'red',
  '#fac858',
  '#ee6666',
  '#73c0de',
  '#3ba272',
  '#fc8452',
  '#9a60b4',
  '#ea7ccc',
].reverse()

function popRandomColor() {
  var rand = Math.random()
  var color = colors[Math.floor(rand * colors.length)]
  colors.splice(Math.floor(rand * colors.length), 1)
  return color
}

const option = {
  responsive: true,
  tooltip: {
    trigger: 'item', // 'axis',
    // position: 'top',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow', // 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      // value: '2016-10-7',
      snap: true,
      // label: {
      //   show: true,
      //   formatter: function (params) {
      //     return params.value // echarts.format.formatTime('yyyy-MM-dd', params.value)
      //   },
      // },
    },
  },
  grid: {
    // left: '3%',
    // right: '4%',
    // bottom: '3%',
    top: 10,
    bottom: 40,
    left: 0,
    right: 20,
    containLabel: true,
  },

  // color: ['#4d88fc', '#ff9d10'],

  xAxis: {
    // name: '',
    type: 'value',
    // data: [
    //   {
    //     value: '公会总水保',
    //   },
    //   '公会总牛仔',
    //   '公会总MTT',
    //   '公会总道具',
    // ],
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
      interval: 0,
      lineStyle: {
        // отсечки на Х
        // color: 'red',
        // width: 20,
        // type: 'dashed'
      },
    },
    // nameGap: 3,
    axisLabel: {
      formatter: (value, index) => {
        if (value > 1000) return value / 1000 + 'K'
        return value
      },
    },
  },
  yAxis: {
    type: 'category',
    data: [
      '推推乐200',
      '推推乐400',
      '推推乐600',
      '推推乐1k',
      '推推乐1k',
      '1k',
      '2k',
      '3k',
      '4k',
      '5k',
      '6k',
      '7k',
      '8k',
      '9k',
    ],
    splitLine: {
      lineStyle: {
        type: 'dashed',
      },
      // show: false,
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
      alignWithLabel: true,
      // interval: 3,
      // lineStyle: {
      // отсечки на Х
      // color: 'red',
      // width: 20,
      // type: 'dashed'
      // },
    },

    axisLabel: {
      interval: 0,
      margin: 24,
      fontWeight: 400,
      fontSize: 10,
    },
  },
  // dataset: {
  //   source: [
  //     [
  //       '牛仔',
  //       '推推乐200',
  //       '推推乐400',
  //       '推推乐600',
  //       '推推乐1k',
  //       '推推乐1k',
  //       '1k',
  //       '2k',
  //       '3k',
  //       '4k',
  //       '5k',
  //       '6k',
  //       '7k',
  //       '8k',
  //       '9k',
  //     ],
  //     // ['牛仔', 22,11,3, 4],
  //     [1, 20, 30, 40, 50, 6, 7, 8, 9, 10, 11, 12, 70, 50, 90],
  //   ],
  // },

  series: [
    {
      type: 'bar',
      showBackground: false,

      emphasis: {
        itemStyle: {
          // color:['red', 'yellow'],
        },
      },
      barMaxWidth: 10,
      // color: ['red', 'yellow'],
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        .map(e => ({
          value: e,
          itemStyle: {
            color: popRandomColor(),
            borderRadius: [0, 5, 4, 0],
          },
        }))
        .reverse(),
    },
    // {
    //   // name: '1k',
    //   type: 'bar',
    //   emphasis: { focus: 'series' },
    //   // stack: 'stack-111',
    //   seriesLayoutBy: 'row',
    //   barMaxWidth: 10,
    //   itemStyle: {
    //     borderRadius: [0, 5, 4, 0],
    //     // borderRadius: [4, 4, 0, 0],
    //     //  normal: {
    //     //        borderRadius:[5, 5, 0, 0]
    //     //  }
    //   },
    // },
    // {
    //   name: '2k',
    //   type: 'bar',
    //   emphasis: { focus: 'series' },
    //   // seriesLayoutBy: 'row',
    //   barMaxWidth: 10,
    //   itemStyle: {
    //     borderRadius: [0, 5, 4, 0],
    //     color: 'red',
    //     // borderRadius: [4, 4, 0, 0],
    //     //  normal: {
    //     //        borderRadius:[5, 5, 0, 0]
    //     //  }
    //   },
    // },
    // {
    //   name: '公会总牛仔',
    //   //  barGap: "-100%",
    //   type: 'bar',
    //   // stack: 'stack-111',
    //   emphasis: { focus: 'series' },
    //   data: [120000, 47000, 55000, 25000],
    //   barMaxWidth: 16,
    //   // animationDuration: function (idx) {
    //   //   // delay for later data is larger
    //   //   return idx * 1000
    //   // },
    //   animationDelay: function (idx) {
    //     // delay for later data is larger
    //     return idx * 0
    //   },
    //   itemStyle: {
    //     borderRadius: [4, 4, 0, 0],
    //   },
    //   // label: {
    //   // надпись на самом графике
    //   //   show: true,
    //   //   backgroundColor: 'rgba(180, 64, 64, 1)',
    //   // },
    // },
    // {
    //   name: '公会总水保',
    //   // barGap: '-100%',
    //   type: 'bar',
    //   // stack: 'stack-111',
    //   barMaxWidth: 16,
    //   emphasis: { focus: 'series' },
    //   data: [60000, 32000, 25000, 25000],

    //   animationDelay: function (idx) {
    //     // delay for later data is larger
    //     return idx * 0
    //   },
    //   itemStyle: {
    //     borderRadius: [5, 5, 0, 0],
    //     // borderRadius: [4, 4, 0, 0],
    //     //  normal: {
    //     //        borderRadius:[5, 5, 0, 0]
    //     //  }
    //   },
    // },
  ],
}

export default option