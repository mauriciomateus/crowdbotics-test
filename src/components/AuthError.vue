<template>
  <span
    class="text-red-500"
    v-text="error[0]"
  />
</template>

<script>
// @vue/component
export default {
  props: {
    error: {
      type: Array,
      default: Array
    }
  }
}
</script>
