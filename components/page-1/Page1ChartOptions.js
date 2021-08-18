
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
    selectedMode: true,
    selected: {
      // selected'series 1'
      公会: true,
      // unselected'series 2'
      贵宾: true,
    },
    // formatter(name) {
    //   return name.slice(0, 2)
    // },
  },
  tooltip: {
    trigger: 'item', // 'axis',
    // position: 'top',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'cross', // 'shadow', // 默认为直线，可选为：'line' | 'shadow'
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
    top: 30,
    bottom: 40,
    left: 0,
    right: 20,
    containLabel: true,
  },

  color: ['#4d88fc', '#ff9d10'],
  xAxis: {
    // name: '',
    type: 'category',
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
    nameGap: 0,

    axisLabel: {
      interval: 0,
      margin: 10,
      fontWeight: 400,
      fontSize: 10,
    },
  },
  yAxis: {
    type: 'value',
    splitLine: {
      lineStyle: {
        type: 'dashed',
      },
      // show: false,
    },
    // axisLine: {
    //   lineStyle: {
    //     // opacity: 0
    //     width: 10,
    //   },
    // },
    axisTick: {
      interval: 0,
      //   width: 20,
      //   inside:true,
      //   color: 'red',
      //   type: 'dashed',
    },
    axisLabel: {
      formatter: (value, index) => {
        if (value > 1000) return value / 1000 + 'K'
        return value
      },
    },
  },
  dataset: {
    source: [
      ['type', '公会总水保', '公会总牛仔', '公会总MTT', '公会总道具'],
      ['公会', 120000, 47000, 55000, 25000],
      ['贵宾', 60000, 32000, 25000, 25000],
    ],
  },
  series: [
    {
      name: '公会',
      type: 'bar',
      emphasis: { focus: 'series' },
      stack: 'stack-111',
      seriesLayoutBy: 'row',
      barMaxWidth: 16,
      itemStyle: {
        borderRadius: [4, 4, 0, 0],
      },
    },
    {
      name: '贵宾',
      type: 'bar',
      emphasis: { focus: 'series' },
      seriesLayoutBy: 'row',
      barMaxWidth: 16,
      itemStyle: {
        borderRadius: [4, 4, 0, 0],
      },
    },
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