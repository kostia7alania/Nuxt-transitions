<template>
  <div
    class="
      tw-flex-grow tw-overflow-auto tw-bg-white tw-rounded-t-md tw--mt-1 tw-z-40
    "
    :style="$route.meta.zIndex ? `z-index: ${$route.meta.zIndex}` : ''"
  >
    <div class="tw-px-5.3 tw-pt-4 tw-mb-3">
      <div class="tw-flex tw-justify-between tw-items-center tw-h-full">
        <div class="tw-font-semibold tw-text-lg">人头人次分析</div>
        <MainInfoButton />
      </div>

      <client-only>
        <div class="tw-flex">
          <Page2ChartLeft />
          <Page2ChartRight />
        </div>
      </client-only>
    </div>

    <!-- table-items -->
    <div class="tw-text-sm-less">
      <div
        class="
          tw-px-5.3 tw-py-1 tw-flex tw-justify-between tw-items-center
          table-rows
        "
        v-for="({ label, value, status, increase }, i) in tableData"
        :key="i"
        style="height: 40px"
      >
        <div>{{ label }}</div>
        <!--  -->
        <div class="tw-mr-10 tw-relative tw-w-10">
          <div class="tw-font-semibold tw-text-right">{{ value }}</div>
          <div class="tw-absolute tw-left-12 tw-bottom-0 tw-text-less2">
            <div
              class="tw-flex tw-items-center tw-font-semibold"
              :class="{
                'tw-text-green-500': status,
                'tw-text-red-500': !status,
              }"
            >
              <svg
                class="tw-h-1.8 tw-mr-1 tw-w-auto tw-fill-current"
                :class="{ 'tw-transform tw-rotate-180': !status }"
                width="90.666"
                height="81.6"
                viewBox="0 0 90 81"
              >
                <path d="M90.666 81.6H0L45.333 0z" />
              </svg>
              <div>
                {{ increase }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import Page2ChartLeft from '@/components/page-2/Page2ChartLeft.vue'
import Page2ChartRight from '@/components/page-2/Page2ChartRight.vue'
import MainInfoButton from '@/components/common/MainInfoButton.vue'

const tableData = [
  {
    label: '总人头',
    value: '1,345',
    status: true, // true - green, false - red1
    increase: 123,
  },
  {
    label: '直客人头',
    value: '1,345',
    status: true, // true - green, false - red1
    increase: 123,
  },
  {
    label: '贵宾人头',
    value: '1,000',
    status: true, // true - green, false - red1
    increase: 23,
  },
  {
    label: '总人次',
    value: '345',
    status: true, // true - green, false - red1
    increase: 123,
  },
  {
    label: '直客人次',
    value: '1,345',
    status: true, // true - green, false - red1
    increase: 1233,
  },
  {
    label: '贵宾人次',
    value: '2,800',
    status: false, // true - green, false - red1
    increase: 123,
  },
]

export default {
  name: 'Page2Content',
  components: {
    Page2ChartLeft,
    Page2ChartRight,
    MainInfoButton,
  },
  data() {
    return {
      tableData,
    }
  },
}
</script>
 