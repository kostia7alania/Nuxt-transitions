<template>
  <Page4Tab1Chart 
    :style="$route.meta.zIndex ? `z-index: ${$route.meta.zIndex}` : ''"
  />
</template>

<script>
import Page4Tab1Chart from '@/components/page-4/Page4Tab1Chart.vue'

export default {
  name: 'Page4Tab1',
  meta: {
    index: 7
  },
  components: {
    Page4Tab1Chart,
  },
}
</script>
 