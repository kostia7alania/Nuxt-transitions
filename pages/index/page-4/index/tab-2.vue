<template>
  <Page4Tab2Chart
    :style="$route.meta.zIndex ? `z-index: ${$route.meta.zIndex}` : ''"
  />
</template>

<script>
import Page4Tab2Chart from '@/components/page-4/Page4Tab2Chart.vue'

export default {
  name: 'Page4Tab2',
  meta: {
    index: 8,
  },
  components: {
    Page4Tab2Chart,
  },
}
</script>
 