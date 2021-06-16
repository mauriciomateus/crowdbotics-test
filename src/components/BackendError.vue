<template>
  <span
    class="text-red-500"
    v-text="error"
  />
</template>

<script>
// @vue/component
export default {
  props: {
    error: {
      type: String,
      default: String
    }
  }
}
</script>
