const option = {
  legend: {
    y: 'bottom',
    icon: 'circle',
    padding: 0,
    textStyle: {
      fontSize: '10',
    },
  },
  tooltip: {
    formatter: function (params) {
      return `${params.value}%` // echarts.format.formatTime('yyyy-MM-dd', params.value)
    },
  },
  color: ['#4d88fc', '#ff9d10'],
  // dataset: {
  //   source: [
  //     ['', '2012', '2013', '2014', '2015', '2016', '2017'],
  //     ['直客人头', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
  //     ['贵宾人头', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
  // ['直客人次', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
  // ['贵宾人次', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1],
  // ],
  // },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: ['95%', '40%'],
      avoidLabelOverlap: false,
      itemStyle: {
        // borderRadius: 10,
        // borderColor: '#fff',
        // borderWidth: 2,
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          // fontSize: '40',
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      label: {
        show: true,
        // color: 'white',
        position: 'inside',
        formatter: function (params) {
          return `${params.value}%` // echarts.format.formatTime('yyyy-MM-dd', params.value)
        },
      },
      data: [
        { value: 61, name: '直客人次' },
        { value: 39, name: '贵宾人次' },
      ],
    },
    // {
    //   type: 'pie',
    //   radius: '46%',
    //   center: ['75%', '50%'],
    //   // encode: {
    //   //   itemName: 'product',
    //   //   value: '2013',
    //   // },
    // },
    // {
    //   type: 'pie',
    //   radius: '20%',
    //   center: ['25%', '75%'],
    //   encode: {
    //     itemName: 'product',
    //     value: '2014',
    //   },
    // },
    // {
    //   type: 'pie',
    //   radius: '20%',
    //   center: ['75%', '75%'],
    //   encode: {
    //     itemName: 'product',
    //     value: '2015',
    //   },
    // },
  ],
}

export default option
