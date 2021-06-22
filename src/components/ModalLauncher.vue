<template>
  <button
    type="button"
    :class="buttonCssClasses"
    @click="openModal"
  >
    <slot />
  </button>
</template>

<script>
// @vue/component
import { createNamespacedHelpers } from 'vuex'
const { mapMutations } = createNamespacedHelpers('apps')

export default {
  props: {
    cssClasses: {
      type: String,
      default: String
    },
    modalTitle: {
      type: String,
      default: String
    },
    modalTitleClasses: {
      type: String,
      default: String
    }
  },
  computed: {
    buttonCssClasses () {
      return `outline-none focus:outline-none focus:ring-4 focus:ring-green-200 p-1 rounded-md flex justify-center items-center border-3 ${this.cssClasses}`
    }
  },
  methods: {
    ...mapMutations(['setModalInfo']),
    openModal () {
      this.setModalInfo({
        isOpen: true,
        title: this.modalTitle,
        titleClasses: this.modalTitleClasses
      })
    }
  }
}
</script>
