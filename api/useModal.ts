import { reactive /* ref,readonly */ } from '@vue/composition-api'
import IModal from '../types/IModal'

const modal = reactive(<{ items: IModal[] }>{
  /**
   * Modal Items
   */
  items: [] as Array<IModal>,
})

export default function useToggleModal() {
  const closeModal = () => {
    /**
     * Close the Last Modal item
     */
    modal.items.pop()
  }

  const openModal = ({ name, title, text }: IModal) => {
    /**
     *
     * Open Modal Item
     *
     * */
    modal.items.push({ name, title, text })
  }

  const hasModal = (name: String): boolean => {
    /**
     *
     * Check If Modal Item is Open
     *
     * */
    if (!name) return false
    return !!modal.items.length // modal.items.some((item: IModal) => item.name === name)
  }

  const getActiveModal = (): IModal | undefined => {
    /**
     *
     * Returns Modal Item is Object
     *
     * */
    return modal.items[modal.items.length - 1]
  }

  return {
    state: modal,
    closeModal,
    openModal,
    hasModal,
    getActiveModal,
  }
}
