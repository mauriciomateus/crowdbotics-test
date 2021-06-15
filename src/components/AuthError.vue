<template>
  <span
    class="text-red-500"
    v-text="firstError"
  />
</template>

<script>
// @vue/component
export default {
  props: {
    error: {
      type: [Array, Object],
      default: Array
    }
  },
  computed: {
    firstError () {
      const errorType = Array.isArray(this.error) ? 'array' : typeof this.error

      if (errorType === 'array') {
        return this.error[0]
      }
      if (errorType === 'object') {
        try {
          const { firstError } = Object.keys(this.error)
          return this.error[firstError][0]
        } catch (error) {
          const firstErrorKey = Object.keys(this.error)[0]
          return this.error[firstErrorKey][0]
        }
      }
      return ''
    }
  }
}
</script>
