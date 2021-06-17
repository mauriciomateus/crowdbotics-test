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
    fieldDefaultValue: {
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
  methods: {
    updateFormData () {
      // this.$store.commit('auth/forms/setFormField', this.fieldValue)
      // console.log(this.$store.state.auth)
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
