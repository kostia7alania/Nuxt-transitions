<template>
  <div
    class="
      tw-flex-grow tw-overflow-auto tw-bg-white tw-rounded-t-md tw--mt-1 tw-z-40
    "
:style="$route.meta.zIndex ? `z-index: ${$route.meta.zIndex}` : ''"  >
    <div class="tw-mb-3">
      <div
        class="
          page-3-header
          tw-px-5.3 tw-flex tw-justify-between tw-items-center tw-h-13.5
        "
      >
        <div class="tw-font-semibold tw-text-lg">级别战绩分析</div>
        <MainInfoButton v-if="shownInfoIcon" />
      </div>

      <div class="tw-text-xs-less">
        <!-- tabs -->
        <PageTabs :items="menuItems" />

        <!-- TAB CONTENT SECTION -->
        <div>
          <router-view v-slot="{ Component }">
            <transition name="fade" :duration="300">
              <component :is="Component" :key="$route.path" />
            </transition>
          </router-view>
          <!-- <NuxtChild /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTabs from '@/components/common/PageTabs.vue'
import MainInfoButton from '@/components/common/MainInfoButton.vue'

export default {
  middleware({ route, redirect, from }) {
    if (route.name === 'index-page-3') {
      return redirect('/page-3/tab-1')
    }
  },
  meta: {
    index: 3,
  },
  name: 'Page3Content',
  components: { PageTabs, MainInfoButton },
  props: {
    pageTransition: {
      type: Object,
      default: () => ({}),
    }, 
  },
  data() {
    return { 
      menuItems: [
        {
          label: '级别人次分布',
          route: '/page-3/tab-1',
        },
        {
          label: '战绩分布',
          route: '/page-3/tab-2',
        },
        {
          label: '明细',
          route: '/page-3/tab-3',
        },
      ],
    }
  },
  mounted() {
    window.t = this
  },
  computed: {
    shownInfoIcon() {
      return ['/page-3/tab-1', '/page-3/tab-2'].includes(this.$route.path)
    },
  },
}
</script>

<style lang="scss" scoped>
.page-3-header {
  box-shadow: 0 8px 18px 0 rgb(0 42 81 / 6%), inset 0 -1px 0 0 rgb(0 0 0 / 12%);
}
</style>
 