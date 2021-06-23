<template>
  <div>
    <hr class="mt-3">
    <h3 class="block w-full text-brand-color font-semibold mt-3">
      App Type *
    </h3>
    <div class="flex space-x-4 mt-3">
      <button
        type="button"
        class="outline-none focus:outline-none focus:ring-4 focus:ring-green-200 p-1 rounded-md flex justify-center items-center border-3 bg-gray-400 disabled:cursor-not-allowed disabled:opacity-70"
        :class="buttonClass('Web')"
        :disabled="disabled"
        @click="setAppType('Web')"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        /></svg>
        <span class="ml-3">Web</span>
      </button>

      <button
        type="button"
        class="outline-none focus:outline-none focus:ring-4 focus:ring-green-200 p-1 rounded-md flex justify-center items-center border-3 bg-gray-400 disabled:cursor-not-allowed disabled:opacity-70"
        :class="buttonClass('Mobile')"
        :disabled="disabled"
        @click="setAppType('Mobile')"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        /></svg>
        <span class="ml-3">Mobile</span>
      </button>
    </div>
    <div class="mt-2">
      <ValidationError
        form-module-name="apps"
        error-field-name="type"
      />
    </div>
    {{ defaultValue }}
  </div>
</template>

<script>
// @vue/component
import { createNamespacedHelpers } from 'vuex'
import ValidationError from './ValidationError'
const { mapMutations } = createNamespacedHelpers('apps')
export default {
  components: {
    ValidationError
  },
  props: {
    defaultValue: {
      type: String,
      default: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      app_type: ''
    }
  },
  methods: {
    ...mapMutations(['setFormField']),
    setAppType (type) {
      this.app_type = type
      this.setFormField({
        fieldName: 'type',
        fieldValue: this.app_type
      })
    },
    buttonClass (type) {
      const activeClasses = 'bg-green-500 text-white ring-4 ring-red-200'
      const inactiveClasses = 'bg-gray-500 text-white'
      const sharedClasses = 'outline-none p-1 rounded-md flex justify-center items-center border-3'
      if (this.app_type === type || type === this.defaultValue) {
        return `${sharedClasses} ${activeClasses}`
      }
      return `${sharedClasses} ${inactiveClasses}`
    }
  }
}
</script>
