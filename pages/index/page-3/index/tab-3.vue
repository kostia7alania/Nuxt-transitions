<template>
  <!-- table -->

  <div :style="$route.meta.zIndex ? `z-index: ${$route.meta.zIndex}` : ''">
    <!-- table heads -->
    <div
      class="table-rows tw-py-1 tw-flex tw-items-center tw-w-full"
      style="height: 32px; background: #eff0f2"
    >
      <div
        class="tw-px-5.3 tw-flex tw-justify-between tw-items-center tw-w-full"
      >
        <div class="tw-w-1/2 tw-w-full">级别</div>
        <div
          class="tw-w-1/2 tw-flex tw-justify-between tw-items-center tw-w-full"
        >
          <div>人次</div>
          <div class="tw-text-right">战绩</div>
        </div>
      </div>
    </div>

    <!-- table items -->
    <div
      class="
        page-3-table-row
        tw-mx-5.3
        tw-py-1
        tw-flex
        tw-justify-between
        tw-items-center
        tw-border-dotted
        tw-border-b-1
        tw-border-gray-400
        tw-border-1
      "
      v-for="({ label1, label2, label3, status }, i) in tableData"
      :key="i"
      style="height: 30px"
    >
      <div class="tw-w-1/2 tw-w-full">
        {{ label1 }}
      </div>
      <div
        class="tw-w-1/2 tw-flex tw-justify-between tw-items-center tw-w-full"
      >
        <div>{{ label2 }}</div>
        <div class="tw-text-right" :class="{ 'table-item__disabled': !status }">
          {{ label3 }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const tableData = [
  {
    label1: '合计',
    label2: '200',
    label3: '70 000',
    status: true,
  },
  {
    label1: '牛仔',
    label2: '8',
    label3: '5 000',
    status: false,
  },
  {
    label1: '推推乐200',
    label2: '0',
    label3: '0',
    status: true,
  },
  {
    label1: '推推乐400',
    label2: '0',
    label3: '0',
    status: true,
  },
  {
    label1: '推推乐600',
    label2: '2',
    label3: '1 000',
    status: true,
  },
  {
    label1: '推推乐1k',
    label2: '18',
    label3: '1 000',
    status: true,
  },
  {
    label1: '推推乐2k',
    label2: '29',
    label3: '9 000',
    status: true,
  },
  {
    label1: '1/2',
    label2: '70',
    label3: '17 770',
    status: true,
  },
  {
    label1: '2/4',
    label2: '70',
    label3: '17 770',
    status: true,
  },
  {
    label1: '1k',
    label2: '40',
    label3: '18 899',
    status: true,
  },
  {
    label1: '2k',
    label2: '4',
    label3: '5 000',
    status: false,
  },
  {
    label1: '4k',
    label2: '30',
    label3: '4 000',
    status: true,
  },
  {
    label1: '5k',
    label2: '0',
    label3: '0',
    status: true,
  },
  {
    label1: '10k',
    label2: '20',
    label3: '70 000',
    status: true,
  },
  {
    label1: '20k',
    label2: '0',
    label3: '0',
    status: true,
  },
  {
    label1: '奥马哈',
    label2: '9',
    label3: '900',
    status: true,
  },
]

export default {
  meta: {
    index: 5,
  },
  name: 'Page3Tab3',
  data() {
    return {
      tableData,
    }
  },
}
</script>

 <style lang="scss" scoped>
.table-item__disabled {
  color: rgb(146, 146, 193);
}
.page-3-table-row:not(:last-child) {
  border-bottom: 1px dashed rgba(64, 64, 64, 0.2);
}
</style>