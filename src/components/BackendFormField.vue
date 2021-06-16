<template>
  <div class="w-full mt-3">
    <label
      :for="fieldName"
      class="block w-full text-brand-color font-semibold"
    >{{ fieldLabel }}</label>
    <input
      :id="fieldName"
      v-model="input"
      :type="fieldType"
      :name="fieldName"
      class="w-full rounded-lg border-gray-500 mt-2"
      :placeholder="fieldLabel"
    >
    <BackendError />
  </div>
</template>

<script>
// @vue/component
import BackendError from './BackendError'

export default {
  components: {
    BackendError
  },
  props: {
    fieldName: {
      type: String,
      default: String
    },
    fieldLabel: {
      type: String,
      default: String
    },
    fieldType: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
      input: ''
    }
  }
}
</script>
