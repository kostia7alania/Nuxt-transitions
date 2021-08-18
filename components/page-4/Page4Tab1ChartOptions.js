const colors = [
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
  '#003f5c',
  '#2f4b7c',
  '#665191',
  '#a05195',
  '#d45087',
  '#f95d6a',
  '#ff7c43',
  '#ffa600',
].reverse()

function popRandomColor() {
  const rand = Math.random()
  const color = colors[Math.floor(rand * colors.length)]
  colors.splice(Math.floor(rand * colors.length), 1)
  return color
}

const option = {
  responsive: true,
  legend: {
    // orient: 'vertical', //Direction
    // itemWidth: 10, // set the width
    // itemHeight: 10, // set height
    // x: 'right', //The legend can be set to the left, right and center
    y: 'bottom', //You can set the legend to be on top, bottom, and center
    // icon: 'rect', //Shape types include circle, rect, line, roundRect, triangle, diamond, pin, arrow, none
    padding: [-5, 250, 20, 0], // legend can be set[Distance from the top, distance from the right, distance from the bottom, distance from the left]
    // data: ['公会总水保', '公会总牛仔' /* '公会总MTT', '公会总道具' */],
    padding: 0,
    itemGap: 7,
    icon: 'circle',
    // textStyle: {
    // Text style
    // color: '#B4CEFF',
    // fontSize: '10',
    // },
    // selectedMode: true,
    // selected: {
    //   // selected'series 1'
    //   公会: true,
    //   // unselected'series 2'
    //   贵宾: true,
    // },
    // formatter(name) {
    //   return name.slice(0, 2)
    // },
  },
  tooltip: {
    trigger: 'item', // 'axis',item
    position: 'top',
    appendToBody: true,
    // backgroundColor: '#191932',
    textStyle: { fontSize: 10 /* color: 'white'*/ },
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'line', // 'shadow', // 默认为直线，可选为：'line' | 'shadow'

      // value: '2016-10-7',
      // snap: true,
      label: {
        // show: true,
        formatter: function (params) {
          return params.value // echarts.format.formatTime('yyyy-MM-dd', params.value)
        },
      },
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

  color: ['#4d88fc', '#ff9d10', '#6a3185'],

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
    data: new Array(10)
      .fill()
      .map((_, i) => `玩家 ${i + 1}`)
      .reverse(),
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
      name: '抽水',
      emphasis: {
        itemStyle: {
          color: 'gray',
        },
      },

      data: [
        100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300,
        1400, 1500,
      ],
    },
    {
      name: '保险',
      emphasis: {
        itemStyle: { color: 'gray' },
      },
      data: [
        310, 230, 320, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300,
        1400, 1500,
      ],
    },
    {
      name: '人次',
      emphasis: {
        itemStyle: { color: 'gray' },
      },
      data: [
        111, 231, 321, 41, 51, 61, 71, 81, 91, 101, 111, 121, 131, 141, 151,
      ],
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
  ].map(e => ({
    ...e,
    type: 'bar',
    barMaxWidth: 40,
    emphasis: { focus: 'series' },
    seriesLayoutBy: 'row',

    data: e.data.map(el => ({
      value: el,
      itemStyle: {
        // color: popRandomColor(),
        borderRadius: [0, 5, 4, 0],
      },
    })),
  })),
}

export default option
