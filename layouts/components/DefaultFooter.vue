<template>
  <footer
    class="
      page__footer
      tw-text-white
      tw-text-center
      tw-overflow-hidden
      tw-flex
      tw-items-center
      tw-flex-shrink-0
      tw-tracking-wide
    "
  >
    <div class="tw-mb-1 tw-w-full">
      <div class="swiper-container my-swiper">
        <div class="swiper-wrapper">
          <nuxt-link
            v-for="({ label, /* active, */ routeName }, i) in menuItems"
            :to="{ name: routeName }"
            :key="i"
            :style="{
              width: '119px',
            }"
            :class="{
              'tw-ml-5.3': i === 0,
              'tw-mr-5.3': i === menuItems.length - 1,
            }"
            class="
              swiper-slide
              tw-flex
              tw-items-center
              tw-rounded-md
              tw-whitespace-nowrap
              tw-p-1
              tw-ml-3
              tw-h-8.2
            "
          >
            <div class="tw-mx-auto tw-text-sm-less">{{ label }}</div>
          </nuxt-link>
        </div>
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
  </footer>
</template>

<script>
// Import Swiper styles
// import Swiper core and required modules
import Swiper /* Scrollbar,  Pagination, EffectCoverflow, Autoplay */ from 'swiper/core'

// Import Swiper Vue.js components
// import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/swiper.scss'
// import 'swiper/components/pagination/pagination.scss'
// import 'swiper/components/navigation/navigation.scss'
// import 'swiper/components/scrollbar/scrollbar.scss'

// install Swiper modules
Swiper.use([
  /* EffectCoverflow, Pagination, Autoplay */
  // Scrollbar
])

export default {
  name: 'MainPageFooter',
  data() {
    return {
      swiper: null,
    }
  },
  props: {
    menuItems: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    setTimeout(() => {
      this.init()
      this.routeChangeHandler()
    }, 100)
  },

  watch: {
    '$route.path': 'routeChangeHandler',
  },
  methods: {
    init() {
      this.swiper = new Swiper('.my-swiper', {
        slidesPerView: 'auto',
        animating: true,
        // centeredSlides: true,
        // spaceBetween: 1,
        // loop: true,
        // centeredSlides: true,
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: false,
        // },
        // pagination: {
        //   el: '.swiper-pagination',
        //   type: 'bullets',
        //   clickable: true,
        // },
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        //   hide: false,
        //   draggable: true,
        // },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      })
    },
    async routeChangeHandler() {
      await this.$nextTick()
      console.log('[Footer] [route changed]')
      let index = this.menuItems.findIndex((item) =>
        String(this.$route.name).startsWith(item.routeName)
      )
      if (index === -1) return
      if (index === 1) index = 0 //bugfix
      console.log('index', index)
      this.swiper.slideTo(index)
    },
  },
}
</script>

<style lang="scss" scoped>
.page__footer {
  height: 71px;
  max-height: 71px;
}

a:not(.nuxt-link-active) {
  background: rgb(45, 45, 70);
  opacity: 0.5;
}

a.nuxt-link-active {
  background: rgb(77, 136, 252);
}
</style>