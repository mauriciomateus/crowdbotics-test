<template>
  <span
    class="text-red-500"
    v-text="error"
  />
</template>

<script>
// @vue/component
import { mapGetters } from 'vuex/dist/vuex.mjs'

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
