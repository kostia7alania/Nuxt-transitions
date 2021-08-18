<template>
  <Page4Tab1Chart 
    :style="$route.meta.zIndex ? `z-index: ${$route.meta.zIndex}` : ''"
  />
</template>

<script>
import Page4Tab1Chart from './Page4Tab1Chart.vue'

export default {
  name: 'Page4Tab1',
  components: {
    Page4Tab1Chart,
  },
}
</script>
 