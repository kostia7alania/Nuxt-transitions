<template>
  <div
    class="tw-flex-grow tw-overflow-auto"
    :style="$route.meta.zIndex ? `z-index: ${$route.meta.zIndex}` : ''"
  >
    <!-- the secont header (content part) -->
    <div
      style="background: #191a34; height: 112px"
      class="
        tw-text-white
        tw-rounded-t-md
        tw-bg-white
        tw-z-40
        tw-p-5.3
        tw-pt-4
        tw-pb-12
      "
    >
      <div>
        <div
          class="
            tw-flex tw-justify-between tw-items-center tw-h-full tw-text-lg
          "
        >
          <div class="tw-font-semibold">收益</div>
          <button
            class="
              tw-bg-indigo-900 tw-w-5.3 tw-h-5.3 tw-rounded-full tw-text-sm
            "
          >
            i
          </button>
        </div>
        <div class="tw-flex tw-justify-start">
          <div>
            <div class="tw-font-extrabold tw-text-3xl">1,2943.99</div>
          </div>
          <div
            class="
              tw-flex
              tw-items-center
              tw-ml-2
              tw-mb-1
              tw-mt-auto
              tw-text-green-500
              tw-text-xs-less
            "
          >
            <svg
              class="tw-h-2.5 tw-mr-1 tw-text-green-500 tw-w-auto"
              width="90.666"
              height="81.6"
              viewBox="0 0 90 71"
            >
              <path fill="#04bf00" d="M90.666 81.6H0L45.333 0z" />
            </svg>
            <div>环比 5.18%</div>
          </div>
        </div>
      </div>
    </div>

    <div class="tw-rounded-t-md tw-bg-white tw--mt-1 tw-z-40">
      <div class="tw-px-5.3 tw-pt-4 tw-mb-3">
        <div class="tw-flex tw-justify-between tw-items-start tw-h-full">
          <div class="tw-font-bold tw-text-base-less">收益构成分析</div>
          <MainInfoButton />
        </div>

        <Page1Chart />
      </div>
      <!-- table-items -->
      <div class="tw-text-sm-less">
        <div
          class="
            tw-px-5.3 tw-py-1 tw-flex tw-justify-between tw-items-center
            table-rows
          "
          v-for="e in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]"
          :key="Number(e)"
          style="height: 40px"
        >
          <div>公会水保</div>
          <div class="tw-font-semibold">13,456,78.99</div>
        </div>
      </div>
    </div>
    {{ transName }}
  </div>
</template>

<script>
import Page1Chart from '@/components/page-1/Page1Chart.vue'
import MainInfoButton from '@/components/common/MainInfoButton.vue'
import transitions from '~/transitions'

export default {
  name: 'Page1Content',
  // transition: 'bounce',
  transition(to, from) {
    const { isForward } = this?.shared?.shared||{}
    const res = isForward ? transitions.forward : transitions.back

    return res
    // return to.query.fade ? transitions.fade : transitions.bounce
  }, 
  inject: ['shared'],
  components: {
    Page1Chart,
    MainInfoButton,
  },
  computed: {
    transName() {
      return this.shared.shared.pageTransition?.name
    },
    transMode() {
      return this.shared.shared.pageTransition?.mode
    }, 
  },
}
</script>
 