<template>
  <Page3Tab1Chart
    :style="$route.meta.zIndex ? `z-index: ${$route.meta.zIndex}` : ''"
  />
</template>

<script>
import Page3Tab1Chart from '@/components/page-3/Page3Tab1Chart.vue'

export default {
  name: 'Page3Tab1',
  meta: {
    index: 3,
  },
  components: {
    Page3Tab1Chart,
  },
}
</script>
 