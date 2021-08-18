<template>
  <div class="page-3-tabs tw-px-5.3 tw-flex tw-w-full" style="height: 38px">
    <nuxt-link
      v-for="({ label, active, route }, i) in menuItems"
      :to="route"
      :key="i"
      :class="{
        'tw-font-semibold tw-border-current': active,
      }"
      class="
        tw-flex tw-items-center tw-whitespace-nowrap tw-py-1 tw-mr-3 tw-h-8.2
      "
    >
      <div>{{ label }}</div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  name: 'PageTabs',

  computed: {
    menuItems() {
      return this.items.map((e) => ({
        ...e,
        active: this.$route.path === e.route,
      }))
      // return [
      //   {
      //     label: '级别人次分布',
      //     routeName: 'page-3.tab-1',
      //   },
      //   {
      //     label: '战绩分布',
      //     routeName: 'page-3.tab-2',
      //   },
      //   {
      //     label: '明细',
      //     routeName: 'page-3.tab-3',
      //   },
      // ]
    },
  },
}
</script>

 <style lang="scss" scoped>
$orange: #ff9d10;

.page-3-tabs {
  box-shadow: 0px 8px 18px 0 rgb(0 42 81 / 6%),
    inset 0px -1px 0 0 rgb(0 42 81 / 6%);
}

a {
  border-bottom-width: 2px;
  &:not(.nuxt-link-exact-active) {
    border-bottom-color: transparent;
  }
  &.nuxt-link-exact-active {
    color: $orange;
    // border-bottom-color: $orange;
  }
}
</style>