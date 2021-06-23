<template>
  <div
    v-show="toastHasContent"
    class="shadow-lg bg-white w-3/12 rounded-md overflow-hidden absolute bottom-3 right-3"
  >
    <div class="bg-green-500 text-white py-1 px-3">
      {{ toast.title }}
    </div>
    <div class="py-1 px-3">
      <p>
        {{ toast.message }}
      </p>
    </div>
  </div>
</template>

<script>
// @vue/component
import { mapGetters } from 'vuex/dist/vuex.mjs'

export default {
  computed: {
    ...mapGetters({ toast: 'toast/getToastInfo' }),
    toastHasContent () {
      // Determine if any of the toast content props has a value
      return Object.values(this.toast)
        .filter(item => !!item)
        .length
    }
  }
}
</script>
