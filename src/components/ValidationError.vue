<template>
  <span
    class="text-red-500"
    v-text="error"
  />
</template>

<script>
// @vue/component
import router from '../../router/router'

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
    error () {
      // alert(`${router.currentRoute.meta.storeModuleName}/getFormErrors`)
      // All of this hassle because the createNamespacedHelpers functions did not work passing a dynamic namespace
      const errors = this.$store.getters[`${router.currentRoute.meta.storeModuleName}/getFormErrors`]
      console.log({ errors })
      return errors[this.errorFieldName] ? errors[this.errorFieldName][0] : null
    }
  },
  methods: {

  }
}

</script>
