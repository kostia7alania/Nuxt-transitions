<template>
  <div
    class="
      main-page
      tw-flex
      tw-flex-1
      tw-justify-center
      tw-justify-between
      tw-flex-col
      tw-tracking-wide
      bg-primary
    "
  >
    <div
      class="
        page__header
        tw-text-white tw-overflow-hidden tw-p-5.3 tw-py-5 tw-flex-shrink-0
      "
    >
      <div
        class="
          tw-flex tw-justify-between tw-items-center tw-h-full tw-text-less-more
        "
      >
        <div class="tw-text-left tw-font-bold tw-tracking-2xwidest">
          <div class="tw-mb-1">XXX公会01.01</div>
          <div>数据统计</div>
        </div>
        <div class="tw-flex">
          <button
            style="background: rgb(77, 136, 252)"
            class="
              tw-bg-indigo-300
              tw-flex
              tw-items-center
              tw-rounded-md
              tw-px-3
              tw-py-1
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="tw-h-3.5"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M13.682 2.17a.578.578 0 00-.572-.503.579.579 0 00-.576.581v.643h-5.06v-.643l-.006-.079a.578.578 0 00-.571-.502c-.32 0-.577.26-.577.581v.657C3.955 3.068 2.5 4.6 2.5 7.072v7.015c0 2.652 1.632 4.246 4.247 4.246h6.506c2.618 0 4.247-1.567 4.247-4.188V7.072c.008-2.473-1.443-4.004-3.813-4.167v-.657l-.005-.079zm-1.148 1.884v.745l.005.079c.038.284.28.502.572.502.318 0 .576-.26.576-.58v-.73c1.724.144 2.665 1.182 2.66 3v.336H3.653v-.334c0-1.817.945-2.857 2.666-3.001v.728l.005.079c.038.284.28.502.572.502.318 0 .576-.26.576-.58v-.746h5.06zm-8.88 4.515v5.518c0 2.002 1.107 3.084 3.093 3.084h6.506c1.992 0 3.093-1.06 3.093-3.026V8.57H3.654zM14 11.015a.58.58 0 00-.577-.581l-.085.005a.581.581 0 00.085 1.158l.078-.006a.579.579 0 00.499-.576zm-3.99-.581a.58.58 0 01.577.581.579.579 0 01-.5.576l-.077.006a.58.58 0 01-.584-.582.58.58 0 01.498-.576l.086-.005zm-2.844.581a.58.58 0 00-.577-.581l-.085.005a.58.58 0 00-.499.576.58.58 0 00.577.582l.085-.006a.579.579 0 00.499-.576zm6.257 2.432c.319 0 .577.26.577.581a.58.58 0 01-.499.576l-.078.006a.58.58 0 01-.584-.582.58.58 0 01.499-.576l.085-.005zm-2.836.581a.58.58 0 00-.577-.581l-.086.005a.581.581 0 00.086 1.158l.078-.006a.58.58 0 00.499-.576zm-3.998-.581c.319 0 .577.26.577.581a.58.58 0 01-.499.576l-.085.006a.579.579 0 01-.577-.582.58.58 0 01.499-.576l.085-.005z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="tw-ml-1.5 tw-mt-0.5">2021-01-01</div>
          </button>
          <button
            style="background: rgb(77, 82, 200)"
            class="
              tw-bg-indigo-300
              tw-flex
              tw-items-center
              tw-rounded-md
              tw-p-2
              tw-ml-2
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="tw-h-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="tw-h-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- CONTENT SECTION -->
    <router-view v-slot="{ Component }">
      <transition
        :name="transName"
        :mode="transMode"
        @after-enter="afterEnter"
        @after-leave="afterLeave"
      >
        <component
          :is="Component"
          @after-enter="$emit('after-enter')"
          @after-leave="$emit('after-leave')"
        />
      </transition>
    </router-view>
    <!-- <router-view /> -->
    <!-- <Nuxt /> -->

    <!-- footer -->
    <DefaultFooter :menuItems="menuItems" class="tw-flex-shrink-0" />
    <VModal v-if="state && state.items && state.items.length" />
  </div>
</template>

<script >
import { defineComponent } from '@vue/composition-api'

import VModal from '@/components/ui/VModal.vue'
import DefaultFooter from './components/DefaultFooter.vue'
import useModal from '@/api/useModal'

const calcHeight = () => {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

export default defineComponent({
  setup() {
    const { openModal, state } = useModal()

    return {
      state,
      openModal,
    }
  },
  components: {
    VModal,
    DefaultFooter,
  },
  computed: {
    menuItems() {
      return [
        {
          routeName: 'page-1',
          label: '收益构成分析',
        },
        {
          routeName: 'page-2',
          label: '人头人次分析',
        },
        {
          routeName: 'page-3',
          label: '级别战绩分析',
        },
        {
          routeName: 'page-4',
          label: 'Top10玩家分析',
        },
      ].map((e) => ({ ...e, routeName: 'index-' + e.routeName }))
      // .map(e => ({ ...e, active: this.$route.name === e.routeName }))
    },
  },
  mounted() {
    calcHeight()
    window.addEventListener('resize', calcHeight)
    this.$router.beforeEach(this.beforeRoute)
  },
  beforeUnmount() {
    window.removeEventListener('resize', calcHeight)
  },
})
</script>


<style scoped lang="scss">
.main-page {
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  height: calc(100vh - calc(100vh - 100%));
  height: -webkit-fill-available;
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);

  // @supports (-webkit-appearance: none) {
  //   height: calc(100vh - 56px);
  // }
  // @media screen and (max-width: 769px) {
  //   background-image: url('/src/assets/img/main-3/main-back-sm.jpg');
  // }
}

.page__header {
  // height: 94px;
  // background-color: #3c43b6;
}
.page__header-2 {
  // background-color: #3c43b6;
}

::v-deep .table-rows {
  box-shadow: 0px 8px 18px rgba(0, 42, 81, 0.06),
    inset 0px -1px 0px rgba(0, 0, 0, 0.12);
}

/******
    A N I M A T I O N 
*/
// Vue <transition> classes for animation

$percentage: 40%;

// Forwards transition

.page-enter {
  opacity: 0;
  transform: translateX($percentage);
}

.page-enter-active {
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.page-leave-active {
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: 0;
  transform: translateX(-$percentage);
}

// Backwards transition

.page-back-enter {
  opacity: 0;
  transform: translateX(-$percentage);
}

.page-back-enter-active {
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.page-back-leave-active {
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: 0;
  transform: translateX($percentage);
}
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}

.slideback-leave-active,
.slideback-enter-active {
  transition: 1s;
}
.slideback-enter {
  transform: translate(-100%, 0);
}
.slideback-leave-to {
  transform: translate(100%, 0);
}
</style>
