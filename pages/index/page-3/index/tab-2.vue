<template>
  <Page3Tab2Chart
    :style="$route.meta.zIndex ? `z-index: ${$route.meta.zIndex}` : ''"
  />
</template>

<script>
import Page3Tab2Chart from '@/components/page-3/Page3Tab2Chart.vue'

export default {
  name: 'Page3Tab2',
  meta: {
    index: 4
  },
  components: {
    Page3Tab2Chart,
  },
}
</script>
 