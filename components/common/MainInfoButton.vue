<template>
  <button
    @click="
      openModal({
        name: 'contentOne',
        title: '提示',
        text: '总收益=公会水保+公会牛仔+公会MTT+公会道具',
      })
    "
    class="tw-bg-gray-200 tw-w-5.3 tw-h-5.3 tw-rounded-full tw-text-sm hover:tw-text-red-500 hover:tw-bg-main"
  >
    i
  </button>
</template> 

<script>
import { defineComponent } from '@vue/composition-api'
import useModal from '@/api/useModal'

export default defineComponent({
  setup() {
    const { openModal } = useModal()

    return {
      openModal,
    }
  },
})
</script>
