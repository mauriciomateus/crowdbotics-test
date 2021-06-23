<template>
  <button
    type="button"
    :class="buttonCssClasses"
    @click="handleClick"
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
    },
    modalActionType: {
      type: String,
      default: String
    },
    modalCrudAction: {
      type: String,
      default: String
    },
    app: {
      type: Object,
      default: Object
    },
    disableFormFields: {
      type: Boolean,
      default: false
    },
    submitButtonText: {
      type: String,
      default: 'Submit'
    }
  },
  computed: {
    buttonCssClasses () {
      return `outline-none focus:outline-none focus:ring-4 focus:ring-green-200 p-1 rounded-md flex justify-center items-center border-3 ${this.cssClasses}`
    }
  },
  methods: {
    ...mapMutations(['setModalInfo', 'setCurrentApp']),
    handleClick () {
      this.setModalInfo({
        isOpen: true,
        title: this.modalTitle,
        titleClasses: this.modalTitleClasses,
        submitButtonText: this.submitButtonText,
        disableFormFields: this.disableFormFields,
        modalActionType: this.modalActionType,
        modalCrudAction: this.modalCrudAction
      })
      this.setCurrentApp(this.app)
    }
  }
}
</script>
