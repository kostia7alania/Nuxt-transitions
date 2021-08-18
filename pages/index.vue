<template>
  <transition
    :name="transName"
    :mode="transMode"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <Nuxt />
    <!-- <router-view
      v-slot="{ Component }"
      :z-index="zIndex"
      :page-transition="pageTransitionChild"
    >
      <component
        :is="Component"
        @after-enter="afterEnter"
        @after-leave="afterLeave"
      />
    </router-view> -->
  </transition>
</template>

<script>
import Vue from 'vue'

let zIndex = 201

export default Vue.extend({
  data() {
    return {
      isForward: true,
    }
  },
  provide() {
    const shared = {}
    Object.defineProperty(shared, 'shared', {
      enumerable: true,
      get: () => this.shared,
    })
    return {
      shared,
    }
  },
  middleware({ route, redirect, from }) {
    if (route.path === '/' || route.path === '') {
      return redirect('/page-1')
    }
  },
  computed: {
    shared() {
      return {
        ...this.pageTransition,
        isForward: this.isForward,
      }
    },
    pageTransition() {
      if (this.isForward) return { name: 'slide', mode: 'in-out' }
      return { name: 'slide-back', mode: 'in-out' }
    },
    pageTransitionChild() {
      if (this.isForward) return { name: 'router-view-child', mode: 'in-out' }
      return { name: 'router-view-child-back', mode: '' }
    },
    transName() {
      return this.pageTransition.name
    },
    transMode() {
      return this.pageTransition.mode
    },
  },
  mounted() {
    this.$router.beforeEach(this.beforeRoute)
    this.$router.resolve({name: 'index-page-1'}) .route.meta.zIndex = 2 
    this.$router.resolve({name: 'index-page-2'}) .route.meta.zIndex = 3
    this.$router.resolve({name: 'index-page-3'}) .route.meta.zIndex = 4
    this.$router.resolve({name: 'index-page-3-index-tab-1'}) .route.meta.zIndex = 5
    this.$router.resolve({name: 'index-page-4'}) .route.meta.zIndex = 6
    this.$router.resolve({name: 'index-page-4-index-tab-1'}) .route.meta.zIndex = 7
    
  },
  methods: {
    afterEnter: () => {
      window.scrollTo(0, 0)
    },
    afterLeave() {
      this.isForward = true
    },
    beforeRoute(to, from, next) {
      this.routePathChanged(to, from)
      next()
      console.warn('beforeRoute', { to, from, next })
    },
    routePathChanged(to, from) {
      window.to = to
      window.from = from
      console.warn('ROUTE PATH CHANGED')
      const [, toIndex] = to.name.match(/page-(\d)/)
      const [, fromIndex] = from.name.match(/page-(\d)/)

      this.isForward = toIndex > fromIndex

      if (this.isForward) {
        from.meta.zIndex = zIndex
        to.meta.zIndex = ++zIndex
      }
    },
  },
})
</script>
