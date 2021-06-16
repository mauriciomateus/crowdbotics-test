<template>
  <div class="w-full mt-3">
    <label
      :for="fieldName"
      class="block w-full text-brand-color font-semibold"
    >{{ fieldLabel }}</label>
    <input
      :id="fieldName"
      v-model="fieldValue"
      :type="fieldType"
      :name="fieldName"
      class="w-full rounded-lg border-gray-500 mt-2"
      :placeholder="fieldLabel"
      @input="updateStoreFormObject"
    >
    <BackendError
      error-object-name="appFormCrudErrors"
      :error-field-name="fieldName"
    />
  </div>
</template>

<script>
// @vue/component
import BackendError from './BackendError'
import { mapMutations } from 'vuex/dist/vuex.mjs'

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
    },
    appCrudErrors: {
      type: Object,
      default: Object
    },
    formObjectName: {
      type: String,
      default: String
    }
  },
  data () {
    return {
      fieldValue: ''
    }
  },
  computed: {
    fieldError () {
      return this.appCrudErrors[this.fieldName]
    }
  },
  methods: {
    ...mapMutations(['setCrudFormData']),
    updateStoreFormObject () {
      this.setCrudFormData({
        formObjectName: this.formObjectName,
        formFieldName: this.fieldName,
        fieldValue: this.fieldValue
      }
      )
    }
  }
}
</script>
