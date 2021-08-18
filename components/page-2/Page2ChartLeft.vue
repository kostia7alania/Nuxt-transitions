<template>
  <!-- prepare a DOM container with width and height -->
    <v-chart
      class="chart"
      ref="chart"
      :option="option"
    />
</template>

<script>
import option from './Page2ChartLeftOptions.js'
import { use } from 'echarts/core'

import {
  GridComponent,
  TooltipComponent,
  AxisPointerComponent,
  LegendComponent,
  DatasetComponent,
} from 'echarts/components'

import { PieChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

import VChart, { THEME_KEY } from 'vue-echarts'

use([
  DatasetComponent,
  GridComponent,
  TooltipComponent,
  AxisPointerComponent,
  LegendComponent,
  CanvasRenderer,
  // LineChart,
  // BarChart,
  PieChart,
  // LinesChart,
])

export default {
  name: 'Page2ChartLeft',
  components: {
    VChart,
  },
  data() {
    return {
      option,
      innerWidth: 500, // window.innerWidth,
    }
  },
  mounted() {
    // setTimeout(this.init, 500)
  },
  beforeUnmount() {
    // window.removeEventListener('resize', this.resize)
  },
  methods: {
    init() {
      // this.resize()
      // window.addEventListener('resize', this.resize)
    },
    resize() {
      // this.chart.resize()
      const size = window?.innerWidth - 48 + 'px'
      // this.$refs.chart.querySelector('canvas').style.width = size
      // this.$refs.chart.querySelector('div').style.width = size
      this.$refs.chart.style.width = size
      this.$refs.chart.width = size
    },
  },
}
</script>


<style lang="scss" scoped>
.chart {
  position: relative;
  min-height: 347px;
  // width: calc(100vw - 63px);
  margin: 0;
  &::v-deep > div {
    margin: auto !important;
  }
}
</style>
