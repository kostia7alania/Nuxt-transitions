<template>
  <!-- prepare a DOM container with width and height -->
  <client-only>
    <v-chart
      class="chart"
      style="margin: -31px; height: 300px; margin: auto"
      ref="chart"
      :option="option"
    />
  </client-only>
</template>

<script>
import option from './Page3Tab1ChartOptions.js'
import { use } from 'echarts/core'

import {
  GridComponent,
  TooltipComponent,
  AxisPointerComponent,
  LegendComponent,
  DatasetComponent,
} from 'echarts/components'

import { BarChart } from 'echarts/charts'
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
  BarChart,
  // PieChart,
  // LinesChart,
])

export default {
  name: 'Page3Tab1Chart',
  components: {
    VChart,
  },
  data() {
    return {
      option,
      innerWidth: 555, // window.innerWidth,
    }
  },
  mounted() {
    // setTimeout(this.init, 500)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.resize)
    this.chart?.dispose()
  },
  methods: {
    init() {
      this.resize()
      window.addEventListener('resize', this.resize)
    },
    resize() {
      window.t = this
      // this.chart.resize()
      const size = window.innerWidth - 48 + 'px'
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
  min-height: 500px;
  width: calc(100vw - 63px);
  margin: 0;
  &::v-deep > div {
    margin: auto !important;
  }
}
</style>
