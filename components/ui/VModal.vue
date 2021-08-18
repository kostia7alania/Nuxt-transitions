<template>
  <!--Modal-->
  <div
    :class="{ 'tw-opacity-0 tw-pointer-events-none': false }"
    class="
      modal
      tw-fixed
      tw-w-full
      tw-h-full
      tw-top-0
      tw-left-0
      tw-flex
      tw-items-center
      tw-justify-center
    "
    style="z-index: 1000"
  >
    <div
      class="
        tw-modal-overlay
        tw-absolute
        tw-w-full
        tw-h-full
        tw-backdrop-filter
        tw-backdrop-brightness-50
        tw-backdrop-contrast-125
        tw-backdrop-blur-xs-less
      "
      @click="closeModal"
    ></div>

    <div
      class="
        tw-modal-container tw-bg-modal tw-w-11/12
        md:tw-max-w-md
        tw-mx-auto tw-rounded-lg tw-shadow-lg tw-z-50 tw-overflow-y-auto
      "
    >
      <div
        @click="closeModal"
        class="
          tw-modal-close
          tw-absolute
          tw-top-0
          tw-right-0
          tw-cursor-pointer
          tw-flex
          tw-flex-col
          tw-items-center
          tw-mt-4
          tw-mr-4
          tw-text-white
          tw-text-sm
          tw-z-50
        "
      >
        <svg
          class="tw-fill-current tw-text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path
            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
          ></path>
        </svg>
        <span class="tw-text-sm">(Esc)</span>
      </div>

      <!-- Add margin if you want to see some of the overlay behind the modal-->
      <div class="tw-modal-content tw-py-4 tw-text-left tw-px-6">
        <!--Title-->
        <div class="tw-flex tw-justify-between tw-items-center tw-pb-3">
          <p class="tw-text-sm tw-font-semibold">{{ title }}</p>
          <div
            @click="closeModal"
            class="tw-modal-close tw-cursor-pointer tw-z-50"
          >
            <svg
              class="tw-fill-current tw-text-black hover:tw-text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
              ></path>
            </svg>
          </div>
        </div>

        <!--Body-->
        <!-- <p>Modal content can go here</p> -->
        <div
          class="
            tw-rounded
            tw-p-3
            tw-bg-modal-text-bg
            tw-rounded-sm
            tw-border
            tw-border-modal-border
            tw-text-center
            tw-text-xs-less
            tw-text-dark
          "
        >
          {{ text }}
          <slot />
        </div>

        <!--Footer-->
        <!-- <div class="tw-flex tw-justify-end tw-pt-2">
          <button
            class="
              tw-px-4 tw-bg-transparent tw-p-3 tw-rounded-lg tw-text-indigo-500
              hover:tw-bg-gray-100 hover:tw-text-indigo-400
              tw-mr-2
            "
          >
            Action
          </button>
          <button
            class="
              tw-modal-close
              tw-px-4
              tw-bg-indigo-500
              tw-p-3
              tw-rounded-lg
              tw-text-white
              hover:tw-bg-indigo-400
            "
          >
            Close
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue'
import useToggleModal from '../../api/useModal'

export default {
  name: 'VModal',
  // props: {
  //   title: null as string | number
  // },
  setup() {
    const { /* state, */ getActiveModal, closeModal } = useToggleModal()

    // function clickDiv() {
    //   console.log('click')
    //   this.closeModal()
    // }

    return {
      // clickDiv,
      closeModal,
      getActiveModal,
    }
  },

  computed: {
    modalData() {
      return this.getActiveModal()
    },
    title() {
      return this.modalData?.title
    },
    text() {
      return this.modalData?.text
    },
  },
  mounted() {
    window.document.addEventListener('keydown', this.keydownHandler)
  },

  beforeUnmount() {
    window.document.removeEventListener('keydown', this.keydownHandler)
  },

  methods: {
    keydownHandler(evt) {
      const event = evt || window.event
      var isEscape = false
      if ('key' in event) {
        isEscape = event.key === 'Escape' || event.key === 'Esc'
      } else {
        isEscape = event.keyCode === 27
      }
      if (isEscape) this.closeModal()
    },
  },
}
</script>

<style scoped lang="scss">
.modal {
  transition: opacity 0.55s ease;
}
</style>
 