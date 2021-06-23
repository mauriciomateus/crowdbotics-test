<template>
  <div>
    <button
      v-if="contentType === 'icon'"
      type="button"
      class="outline-none focus:outline-none focus:ring-4 focus:ring-green-200 p-1 rounded-md flex justify-center items-center border-3 border-brand-color"
      @click="closeModal"
    >
      <i
        class="fas fa-times-circle text-brand-color"
      />
    </button>
    <button
      v-if="contentType === 'text'"
      type="button"
      class="uppercase py-3 px-5 rounded-3xl font-bold mt-4 focus:outline-none focus:ring-4 focus:ring-green-200 flex items-center disabled:opacity-50 disabled:cursor-not-allowed bg-gray-500 text-white"
      @click="closeModal"
    >
      Close
      <i
        class="fas fa-times-circle text-white ml-3"
      />
    </button>
  </div>
</template>

<script>
// @vue/component
import { createNamespacedHelpers } from 'vuex'
const { mapMutations } = createNamespacedHelpers('apps')

export default {
  props: {
    contentType: {
      type: String,
      default: 'icon'
    }
  },
  methods: {
    ...mapMutations(['setModalInfo']),
    closeModal () {
      this.setModalInfo({ isOpen: false })
    }
  }
}
</script>
