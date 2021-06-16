<template>
  <span
    class="text-red-500"
    v-text="error"
  />
</template>

<script>
// @vue/component
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('AppCrudForm/BackendForm')

export default {
  props: {
    errorObjectName: {
      type: String,
      default: String
    },
    errorFieldName: {
      type: String,
      default: String
    }
  },
  computed: {
    ...mapGetters(['getBackendFormError']),
    error () {
      return this.getBackendFormError(this.errorObjectName, this.errorFieldName)
    }
  },
  methods: {

  }
}
</script>
