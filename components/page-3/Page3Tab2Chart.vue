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
import option from './Page3Tab2ChartOptions.js'
import { use } from 'echarts/core'

import {
  GridComponent,
  PolarComponent,
  GeoComponent,
  SingleAxisComponent,
  ParallelComponent,
  CalendarComponent,
  GraphicComponent,
  ToolboxComponent,
  TooltipComponent,
  AxisPointerComponent,
  BrushComponent,
  TitleComponent,
  TimelineComponent,
  MarkPointComponent,
  MarkLineComponent,
  MarkAreaComponent,
  LegendComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  VisualMapComponent,
  VisualMapContinuousComponent,
  VisualMapPiecewiseComponent,
  AriaComponent,
  DatasetComponent,
  TransformComponent,
} from 'echarts/components'

import {
  LineChart,
  BarChart,
  PieChart,
  ScatterChart,
  RadarChart,
  MapChart,
  TreeChart,
  TreemapChart,
  GraphChart,
  GaugeChart,
  FunnelChart,
  ParallelChart,
  SankeyChart,
  BoxplotChart,
  CandlestickChart,
  EffectScatterChart,
  LinesChart,
  HeatmapChart,
  PictorialBarChart,
  ThemeRiverChart,
  SunburstChart,
  CustomChart,
} from 'echarts/charts'
import { SVGRenderer, CanvasRenderer } from 'echarts/renderers'

import VChart, { THEME_KEY } from 'vue-echarts'

use([
  SVGRenderer,
  CanvasRenderer,
  GridComponent,
  PolarComponent,
  GeoComponent,
  SingleAxisComponent,
  ParallelComponent,
  CalendarComponent,
  GraphicComponent,
  ToolboxComponent,
  TooltipComponent,
  AxisPointerComponent,
  BrushComponent,
  TitleComponent,
  TimelineComponent,
  MarkPointComponent,
  MarkLineComponent,
  MarkAreaComponent,
  LegendComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  VisualMapComponent,
  VisualMapContinuousComponent,
  VisualMapPiecewiseComponent,
  AriaComponent,
  DatasetComponent,
  TransformComponent,
  LineChart,
  BarChart,
  PieChart,
  ScatterChart,
  RadarChart,
  MapChart,
  TreeChart,
  TreemapChart,
  GraphChart,
  GaugeChart,
  FunnelChart,
  ParallelChart,
  SankeyChart,
  BoxplotChart,
  CandlestickChart,
  EffectScatterChart,
  LinesChart,
  HeatmapChart,
  PictorialBarChart,
  ThemeRiverChart,
  SunburstChart,
  CustomChart,
])

export default {
  name: 'Page3Tab2Chart',
  components: {
    VChart,
  },
  data() {
    return {
      option,
      innerWidth: 500,
    }
  },
  mounted() {
    // setTimeout(this.init, 500)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.resize)
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
