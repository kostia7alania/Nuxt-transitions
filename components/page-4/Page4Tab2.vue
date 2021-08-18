<template>
  <Page4Tab2Chart 
    :style="$route.meta.zIndex ? `z-index: ${$route.meta.zIndex}` : ''"
  />
</template>

<script>
import Page4Tab2Chart from './Page4Tab2Chart.vue'

export default {
  name: 'Page4Tab2',
  components: {
    Page4Tab2Chart,
  },
}
</script>
 