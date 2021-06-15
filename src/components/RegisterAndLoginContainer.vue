<template>
  <div class="col-span-7 bg-white py-12 px-8 text-sm flex flex-col items-center">
    <h2 class="text-gray-700 text-2xl">
      {{ title }}
    </h2>
    <slot />
    <footer class="mt-auto w-full">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
// @vue/component
export default {
  props: {
    title: {
      type: String,
      default: String
    }
  }
}
</script>
