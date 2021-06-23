<template>
  <div>
    <hr class="mt-3">
    <h3 class="block w-full text-brand-color font-semibold mt-3">
      Framework *
    </h3>
    <div class="flex space-x-4 mt-3">
      <button
        type="button"
        class="outline-none focus:outline-none focus:ring-4 focus:ring-green-200 p-1 rounded-md flex justify-center items-center border-3 bg-gray-400"
        :class="buttonClass('Django')"
        @click="setAppType('Django')"
      >
        <svg
          class="w-6 h-6"
          fill="currentcolor"
          stroke="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.5 6.8h-3.3V3.5c0-1.9-1.6-3.5-3.5-3.5h-3.3c-2 0-3.6 1.6-3.6 3.5v3.3H3.5C1.6 6.8 0 8.4 0 10.4v3.3c0 1.9 1.6 3.5 3.5 3.5h3.3v3.3c0 1.9 1.6 3.5 3.5 3.5h3.3c1.9 0 3.5-1.6 3.5-3.5v-3.3h3.3c1.9 0 3.5-1.6 3.5-3.5v-3.3c.1-2-1.5-3.6-3.4-3.6zm-17 9c-1.2 0-2.1-.9-2.1-2.1v-3.3c0-1.2.9-2.1 2.1-2.1H12c.4 0 .7-.3.7-.7s-.3-.8-.7-.8H8.3V3.5c0-1.2.9-2.1 2.1-2.1h3.3c1.2 0 2.1.9 2.1 2.1v7.8H7.5c-.4 0-.7.3-.7.7v3.8H3.5zm19.1-2.2c0 1.2-.9 2.1-2.1 2.1H12c-.4 0-.7.3-.7.7s.3.7.7.7h3.8v3.3c0 1.2-.9 2.1-2.1 2.1h-3.3c-1.2 0-2.1-.9-2.1-2.1v-7.8h8.2c.4 0 .7-.3.7-.7V8.3h3.3c1.2 0 2.1.9 2.1 2.1v3.2zM11.1 4.2c0 .4-.3.7-.7.7s-.7-.3-.7-.7.3-.7.7-.7.7.3.7.7zm3.2 15.6c0 .4-.3.7-.7.7s-.7-.3-.7-.7.3-.7.7-.7.7.3.7.7z" /></svg>
        <span class="ml-3">Django</span>
      </button>

      <button
        type="button"
        class="outline-none focus:outline-none focus:ring-4 focus:ring-green-200 p-1 rounded-md flex justify-center items-center border-3 bg-gray-400"
        :class="buttonClass('React Native')"
        @click="setAppType('React Native')"
      >
        <svg
          class="w-6 h-6"
          fill="currentcolor"
          stroke="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 3.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2zm7-1.2c.6-.5 1.2-1.1 1.7-1.6C21 8.5 21.6 7 21 6c-.8-1.5-3.7-1.2-6.9 0-.6-3.4-1.8-6-3.5-6S7.8 2.6 7.1 6C3.9 4.8 1.1 4.5.2 6c-.6 1 0 2.5 1.7 4.4.6.5 1.1 1.1 1.8 1.6-.6.5-1.2 1.1-1.7 1.6C.2 15.5-.4 17 .2 18c.4.7 1.3 1 2.4 1 1.6-.1 3.1-.4 4.5-1 .6 3.4 1.8 6 3.5 6s2.9-2.6 3.5-6c1.4.6 3 .9 4.5 1 1.1 0 2-.3 2.4-1 .6-1 0-2.5-1.7-4.4-.6-.5-1.1-1.1-1.7-1.6zm2.7-5.6c.4.6-.2 1.9-1.6 3.4-.5.6-1.1 1.1-1.7 1.6-.7-.6-1.5-1.2-2.4-1.8l-.3-3c3.2-1 5.5-1.1 6-.2zm-8.1 8.4c-.5.3-1.1.6-1.6.9-.5-.3-1.1-.6-1.6-.9-.5-.3-1.1-.6-1.6-1V12v-1.8c.5-.3 1-.6 1.6-1 .5-.3 1.1-.6 1.6-.9.5.3 1.1.6 1.6.9.5.3 1.1.6 1.6 1v3.6c-.5.3-1.1.7-1.6 1zm1.5 0c-.1.8-.1 1.5-.2 2.1-.6-.2-1.3-.5-2-.9.4-.2.7-.4 1.1-.6.4-.1.7-.4 1.1-.6zm-4 1.3c-.7.3-1.3.6-2 .9-.1-.7-.2-1.4-.2-2.1.4.2.7.4 1.1.7.4.1.8.3 1.1.5zm-3.1-2.8c-.6-.4-1.2-.9-1.7-1.3.5-.4 1.1-.9 1.7-1.3v2.6zm.9-4.1c.1-.8.1-1.5.2-2.1.6.2 1.3.5 2 .9-.3.1-.7.3-1.1.5-.4.3-.7.5-1.1.7zm4-1.3c.7-.3 1.3-.6 2-.9.1.7.2 1.4.2 2.1-.4-.1-.7-.3-1.1-.6-.4-.2-.7-.4-1.1-.6zm3.1 2.8c.6.4 1.2.8 1.7 1.3-.5.4-1.1.9-1.7 1.3V12v-1.3zm-4-9.9c1 0 2.1 2.1 2.7 5.5-.9.3-1.8.8-2.7 1.2-.9-.5-1.8-.9-2.7-1.2C8.5 2.9 9.6.8 10.6.8zm-8.1 9C1.1 8.3.5 7 .9 6.4c.2-.4.8-.6 1.7-.6 1.5.1 3 .4 4.4 1-.1.9-.3 1.9-.3 3-.9.6-1.7 1.2-2.4 1.8L2.5 9.8zM.9 17.6c-.4-.6.2-1.9 1.6-3.4.5-.6 1.1-1.1 1.7-1.6.7.6 1.5 1.2 2.4 1.8l.3 3c-3.1 1-5.5 1.1-6 .2zm9.7 5.6c-1 0-2.1-2.1-2.7-5.5.9-.3 1.8-.8 2.7-1.2.9.5 1.8.9 2.7 1.2-.6 3.4-1.7 5.5-2.7 5.5zm9.7-5.6c-.5.9-2.9.8-6.1-.4.1-.9.3-1.9.3-3 .9-.6 1.7-1.2 2.4-1.8.6.5 1.2 1.1 1.7 1.6 1.5 1.7 2.1 3 1.7 3.6z" /></svg>
        <span class="ml-3">React Native</span>
      </button>
    </div>
    <div class="mt-2">
      <ValidationError
        form-module-name="apps"
        error-field-name="framework"
      />
    </div>
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
    }
  },
  data () {
    return {
      framework: ''
    }
  },
  methods: {
    ...mapMutations(['setFormField']),
    setAppType (type) {
      this.framework = type
      this.setFormField({
        fieldName: 'framework',
        fieldValue: this.framework
      })
    },
    buttonClass (type) {
      const activeClasses = 'bg-green-500 text-white ring-4 ring-red-200'
      const inactiveClasses = 'bg-gray-500 text-white'
      const sharedClasses = 'outline-none p-1 rounded-md flex justify-center items-center border-3'
      if (this.framework === type) {
        return `${sharedClasses} ${activeClasses}`
      }
      return `${sharedClasses} ${inactiveClasses}`
    }
  }
}
</script>
