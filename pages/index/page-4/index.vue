<template>
  <!-- :style="$route.meta.zIndex ? `z-index: ${$route.meta.zIndex}` : ''" -->
  <div
    class="
      tw-flex-grow tw-overflow-auto tw-bg-white tw-rounded-t-md tw--mt-1 tw-z-40
    "
    :style="$route.meta.zIndex ? `z-index: ${$route.meta.zIndex}` : ''"
  >
    <div class="tw-mb-3">
      <div
        class="
          page-4-header
          tw-px-5.3 tw-flex tw-justify-between tw-items-center tw-h-13.5
        "
      >
        <div class="tw-font-semibold tw-text-lg">Top10玩家分析</div>
        <!-- <MainInfoButton /> -->
      </div>

      <div class="tw-text-xs-less">
        <!-- tabs -->
        <PageTabs :items="menuItems" />

        <!-- TAB CONTENT SECTION -->
        <div>
          <router-view v-slot="{ Component }">
            <transition name="fade" :duration="3000">
              <component :is="Component" />
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
import Vue from 'vue'

export default Vue.extend({
  name: 'Page4Content',

  middleware({ route, redirect, from }) {
    if (route.name === 'index-page-4') {
      return redirect('/page-4/tab-1')
    }
  },

  components: { PageTabs },
  props: {
    pageTransition: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      zIndexFixed: this.$route.meta.zIndex,
      menuItems: [
        {
          label: '输最多',
          route: '/page-4/tab-1',
        },
        {
          label: '赢最多',
          route: '/page-4/tab-2',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.page-4-header {
  box-shadow: 0 8px 18px 0 rgb(0 42 81 / 6%), inset 0 -1px 0 0 rgb(0 0 0 / 12%);
}
</style>
 