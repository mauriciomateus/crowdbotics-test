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
      class="w-full rounded-lg border-gray-500 mt-2 disabled:cursor-not-allowed disabled:opacity-70"
      :placeholder="fieldLabel"
      :disabled="disabled"
      @input="updateFormData"
    >
    <ValidationError
      :form-module-name="formModuleName"
      :error-field-name="fieldName"
    />
  </div>
</template>

<script>
// @vue/component
import ValidationError from './ValidationError'

export default {
  components: {
    ValidationError
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
    formModuleName: {
      type: String,
      default: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    defaultValue: {
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
  },
  mounted () {
    this.fieldValue = this.defaultValue
  },
  methods: {
    updateFormData () {
      const { fieldName, fieldValue } = this
      this.$store.commit(`${this.formModuleName}/setFormField`, { fieldName, fieldValue })
    },
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
