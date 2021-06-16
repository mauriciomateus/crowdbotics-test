<template>
  <button
    type="button"
    class="outline-none focus:outline-none focus:ring-4 focus:ring-green-200 p-1 rounded-md flex justify-center items-center border-3 border-brand-color"
    @click="openModalCrudAppModal"
  >
    <i class="fas fa-plus text-brand-color" />
  </button>
</template>

<script>
// @vue/component
import { createNamespacedHelpers } from 'vuex'
const { mapMutations } = createNamespacedHelpers('AppCrudForm')

export default {
  methods: {
    ...mapMutations(['openModalCrudAppModal'])
  }
}
</script>
