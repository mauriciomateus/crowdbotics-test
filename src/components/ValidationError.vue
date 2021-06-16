<template>
  <span
    class="text-red-500"
    v-text="error"
  />
</template>

<script>
// @vue/component
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('auth')

export default {
  props: {
    formModuleName: {
      type: String,
      default: String
    },
    errorFieldName: {
      type: String,
      default: String
    }
  },
  computed: {
    ...mapGetters(['getFormErrors']),
    error () {
      const errors = this.getFormErrors
      return errors[this.errorFieldName] ? errors[this.errorFieldName][0] : null
    }
  },
  methods: {

  }
}
</script>
