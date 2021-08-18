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
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '95%',
      avoidLabelOverlap: false,
      itemStyle: {
        // borderRadius: 10,
        // borderColor: '#fff',
        // borderWidth: 2,
      },
      label: {
        show: false,
        // position: 'inside',
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
        position: 'inside',
        formatter: function (params) {
          return `${params.value}%` // echarts.format.formatTime('yyyy-MM-dd', params.value)
        },
      },
      data: [
        { value: 74, name: '直客人头' },
        { value: 26, name: '贵宾人头' },
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
